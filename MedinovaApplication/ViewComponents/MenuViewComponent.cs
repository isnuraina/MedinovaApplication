using MedinovaApplication.Services;
using Microsoft.AspNetCore.Mvc;

namespace MedinovaApplication.ViewComponents
{
    public class MenuViewComponent:ViewComponent
    {
        private readonly IMenuService _menuService;

        public MenuViewComponent(IMenuService menuService)
        {
            _menuService = menuService;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var menuItems = await _menuService.GetMenuStructureAsync();
            return View(menuItems);
        }
    }
}
