using System.ComponentModel.DataAnnotations;

namespace MedinovaApplication.Areas.AdminArea.Models.VMs
{
    public class MenuItemVM
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Menyu adı mütləqdir")]
        [StringLength(100, ErrorMessage = "Menyu adı maksimum 100 simvol ola bilər")]
        [Display(Name = "Menyu Adı")]
        public string Name { get; set; }

        [StringLength(200, ErrorMessage = "URL maksimum 200 simvol ola bilər")]
        [Display(Name = "URL")]
        public string? Url { get; set; }

        public int RowNumber { get; set; }

        [Display(Name = "Parent Menyu")]
        public int? ParentId { get; set; }

        [Required(ErrorMessage = "Sıra nömrəsi mütləqdir")]
        [Display(Name = "Sıra")]
        public int OrderIndex { get; set; }

        [Display(Name = "Aktiv")]
        public bool IsActive { get; set; } = true;

        public bool Haschildren { get; set; }

        [Display(Name = "Yaranma Tarixi")]
        public DateTime CreatedDate { get; set; } = DateTime.Now;

        public string? ParentName { get; set; }
    }
}