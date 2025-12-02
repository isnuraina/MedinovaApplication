using MedinovaApplication.Models;

namespace MedinovaApplication.Services
{
    public interface IMenuService
    {
        Task<List<MenuItem>> GetMenuStructureAsync();
        Task<MenuItem?> GetMenuItemByIdAsync(int id);
    }
}
