using MedinovaApplication.Areas.AdminArea.Models.VMs;
using MedinovaApplication.Db;
using MedinovaApplication.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MedinovaApplication.Areas.AdminArea.Controllers
{
    [Area("AdminArea")]
    public class MenuController : Controller
    {
        private readonly MedinovaDbContext _context;

        public MenuController(MedinovaDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index(int? sub)
        {
            var menuItems = _context.MenuItems
                .Select(m => new MenuItemVM()
                {
                    Id = m.Id,
                    Name = m.Name,
                    IsActive = m.IsActive,
                    OrderIndex = m.OrderIndex,
                    ParentId = m.ParentId,
                    Url = m.Url,
                    Haschildren = _context.MenuItems.Any(c => c.ParentId == m.Id),
                })
                .AsQueryable();

            if (sub is not null && sub != 0)
            {
                menuItems = menuItems.Where(m => m.ParentId == sub);

                var parentMenu = await _context.MenuItems.FindAsync(sub);
                if (parentMenu != null)
                {
                    ViewBag.ParentName = parentMenu.Name;
                    ViewBag.ParentId = parentMenu.Id;
                }
            }
            else
            {
                menuItems = menuItems
                    .Where(x => x.ParentId == 0 || x.ParentId == null)
                    .OrderBy(m => m.ParentId ?? 0)
                    .ThenBy(m => m.OrderIndex);
            }

            var result = await menuItems.ToListAsync();

            for (int i = 0; i < result.Count; i++)
            {
                result[i].RowNumber = i + 1;
            }

            return View(result);
        }

        public async Task<IActionResult> Children(int id)
        {
            var parentMenu = await _context.MenuItems
                .Include(m => m.Children)
                .FirstOrDefaultAsync(m => m.Id == id);

            if (parentMenu == null)
            {
                return NotFound();
            }

            ViewBag.ParentName = parentMenu.Name;
            ViewBag.ParentId = parentMenu.Id;

            return View(parentMenu.Children);
        }

        public async Task<IActionResult> Create(int? parentId)
        {
            var vm = new MenuItemVM();

            if (parentId.HasValue && parentId.Value > 0)
            {
                vm.ParentId = parentId.Value;
                var parent = await _context.MenuItems.FindAsync(parentId.Value);
                if (parent != null)
                {
                    ViewBag.ParentName = parent.Name;
                }
            }

            ViewBag.ParentMenus = await _context.MenuItems
                .Where(m => m.ParentId == null || m.ParentId == 0)
                .OrderBy(m => m.OrderIndex)
                .Select(m => new MenuItemVM
                {
                    Id = m.Id,
                    Name = m.Name
                })
                .ToListAsync();

            return View(vm);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(MenuItemVM vm)
        {
            if (ModelState.IsValid)
            {
                var menuItem = new MenuItem
                {
                    Name = vm.Name,
                    Url = string.IsNullOrWhiteSpace(vm.Url) ? null : vm.Url,
                    ParentId = (vm.ParentId.HasValue && vm.ParentId.Value > 0) ? vm.ParentId : null,
                    OrderIndex = vm.OrderIndex,
                    IsActive = vm.IsActive,
                    CreatedDate = DateTime.Now
                };

                _context.MenuItems.Add(menuItem);
                await _context.SaveChangesAsync();

                TempData["Success"] = "Menyu uğurla əlavə edildi!";

                if (vm.ParentId.HasValue && vm.ParentId.Value > 0)
                {
                    return RedirectToAction(nameof(Index), new { sub = vm.ParentId });
                }

                return RedirectToAction(nameof(Index));
            }

            ViewBag.ParentMenus = await _context.MenuItems
                .Where(m => m.ParentId == null || m.ParentId == 0)
                .OrderBy(m => m.OrderIndex)
                .Select(m => new MenuItemVM
                {
                    Id = m.Id,
                    Name = m.Name
                })
                .ToListAsync();

            return View(vm);
        }

        // GET: Edit
        public async Task<IActionResult> Edit(int? id)
        {
            if (id is null || id == 0)
            {
                return NotFound();
            }

            var menuItem = await _context.MenuItems.FindAsync(id);

            if (menuItem is null)
            {
                return NotFound();
            }

            var vm = new MenuItemVM
            {
                Id = menuItem.Id,
                Name = menuItem.Name,
                Url = menuItem.Url,
                ParentId = menuItem.ParentId, 
                OrderIndex = menuItem.OrderIndex,
                IsActive = menuItem.IsActive,
                CreatedDate = menuItem.CreatedDate
            };

            ViewBag.ParentMenus = await _context.MenuItems
                .Where(m => (m.ParentId == null || m.ParentId == 0) && m.Id != id)
                .OrderBy(m => m.OrderIndex)
                .Select(m => new MenuItemVM
                {
                    Id = m.Id,
                    Name = m.Name
                })
                .ToListAsync();

            if (menuItem.ParentId.HasValue && menuItem.ParentId.Value > 0)
            {
                var parent = await _context.MenuItems.FindAsync(menuItem.ParentId.Value);
                if (parent != null)
                {
                    ViewBag.ParentName = parent.Name;
                }
            }

            return View(vm);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, MenuItemVM vm)
        {
            if (id != vm.Id)
            {
                TempData["Error"] = "ID uyğunsuzluğu!";
                return RedirectToAction(nameof(Index));
            }

            ModelState.Remove("RowNumber");
            ModelState.Remove("Haschildren");
            ModelState.Remove("ParentName");

            if (ModelState.IsValid)
            {
                try
                {
                    var menuItem = await _context.MenuItems.FindAsync(id);

                    if (menuItem == null)
                    {
                        TempData["Error"] = "Menyu tapılmadı!";
                        return RedirectToAction(nameof(Index));
                    }

                    menuItem.Name = vm.Name;
                    menuItem.Url = string.IsNullOrWhiteSpace(vm.Url) ? null : vm.Url;
                    menuItem.ParentId = (vm.ParentId.HasValue && vm.ParentId.Value > 0) ? vm.ParentId : null;
                    menuItem.OrderIndex = vm.OrderIndex;
                    menuItem.IsActive = vm.IsActive;

                    _context.Update(menuItem);
                    await _context.SaveChangesAsync();

                    TempData["Success"] = "Menyu uğurla yeniləndi!";

                    if (vm.ParentId.HasValue && vm.ParentId.Value > 0)
                    {
                        return RedirectToAction(nameof(Index), new { sub = vm.ParentId });
                    }

                    return RedirectToAction(nameof(Index));
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!MenuItemExists(vm.Id))
                    {
                        TempData["Error"] = "Menyu artıq mövcud deyil!";
                        return RedirectToAction(nameof(Index));
                    }
                    else
                    {
                        throw;
                    }
                }
            }

            ViewBag.ParentMenus = await _context.MenuItems
                .Where(m => (m.ParentId == null || m.ParentId == 0) && m.Id != id)
                .OrderBy(m => m.OrderIndex)
                .Select(m => new MenuItemVM
                {
                    Id = m.Id,
                    Name = m.Name
                })
                .ToListAsync();

            return View(vm);
        }

        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
                return NotFound();

            var menuItem = await _context.MenuItems
                .Include(m => m.Parent)
                .FirstOrDefaultAsync(m => m.Id == id);

            if (menuItem == null)
                return NotFound();

            var vm = new MenuItemVM
            {
                Id = menuItem.Id,
                Name = menuItem.Name,
                Url = menuItem.Url,
                ParentId = menuItem.ParentId,
                OrderIndex = menuItem.OrderIndex,
                IsActive = menuItem.IsActive,
                CreatedDate = menuItem.CreatedDate,
                Haschildren = await _context.MenuItems.AnyAsync(c => c.ParentId == id)
            };

            if (menuItem.Parent != null)
            {
                ViewBag.ParentName = menuItem.Parent.Name;
            }

            if (vm.Haschildren)
            {
                ViewBag.ChildrenCount = await _context.MenuItems.CountAsync(c => c.ParentId == id);
            }

            return View(vm);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var menuItem = await _context.MenuItems.FindAsync(id);

            if (menuItem == null)
                return NotFound();

            var hasChildren = await _context.MenuItems.AnyAsync(c => c.ParentId == id);

            if (hasChildren)
            {
                TempData["Error"] = "Bu menyunun alt menyuları var! Əvvəlcə onları silin.";
                return RedirectToAction(nameof(Index));
            }

            var parentId = menuItem.ParentId;

            _context.MenuItems.Remove(menuItem);
            await _context.SaveChangesAsync();

            TempData["Success"] = "Menyu uğurla silindi!";

            if (parentId.HasValue && parentId.Value > 0)
            {
                return RedirectToAction(nameof(Index), new { sub = parentId.Value });
            }

            return RedirectToAction(nameof(Index));
        }

        [HttpPost]
        public async Task<IActionResult> ToggleActive(int id)
        {
            var menuItem = await _context.MenuItems.FindAsync(id);

            if (menuItem == null)
                return Json(new { success = false, message = "Menyu tapılmadı" });

            menuItem.IsActive = !menuItem.IsActive;
            await _context.SaveChangesAsync();

            return Json(new { success = true, isActive = menuItem.IsActive });
        }

        private bool MenuItemExists(int id)
        {
            return _context.MenuItems.Any(e => e.Id == id);
        }
    }
}