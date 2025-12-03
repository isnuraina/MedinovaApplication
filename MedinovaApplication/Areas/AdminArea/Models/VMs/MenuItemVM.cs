namespace MedinovaApplication.Areas.AdminArea.Models.VMs
{
    public class MenuItemVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Url { get; set; }
        public int RowNumber { get; set; } 
        public int? ParentId { get; set; }
        public int OrderIndex { get; set; }
        public bool IsActive { get; set; } = true;
        public bool Haschildren { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
    }
}
