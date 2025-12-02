using MedinovaApplication.Db;
using MedinovaApplication.Models;
using Microsoft.EntityFrameworkCore;

namespace MedinovaApplication.Services
{
    public class MenuService : IMenuService
    {
        private readonly MedinovaDbContext _context;

        public MenuService(MedinovaDbContext context)
        {
            _context = context;
        }

        public async Task<MenuItem?> GetMenuItemByIdAsync(int id)
        {
            return await _context.MenuItems.Include(m => m.Children)
                .FirstOrDefaultAsync(m => m.Id == id);
        }

        public async Task<List<MenuItem>> GetMenuStructureAsync()
        {
            return await _context.MenuItems
                 .Where(m => m.IsActive && m.ParentId == null)
                 .Include(m => m.Children.Where(c => c.IsActive))
                 .OrderBy(m => m.OrderIndex)
                 .ToListAsync();
        }
    }
}
