using System.Diagnostics;
using MedinovaApplication.Services;
using Microsoft.AspNetCore.Mvc;

namespace MedinovaApplication.Controllers
{
    public class HomeController : Controller
    {
        private readonly IMenuService _menuService;

        public HomeController(IMenuService menuService)
        {
            _menuService = menuService;
        }

        public async Task <IActionResult> Index()
        {
            var menuItems=await _menuService.GetMenuStructureAsync();
            return View(menuItems);
        }
    }
}
