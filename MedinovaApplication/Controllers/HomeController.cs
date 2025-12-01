using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace MedinovaApplication.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
