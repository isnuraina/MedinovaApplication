namespace MedinovaApplication.Models
{
    public class MenuItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Url { get; set; }
        public int? ParentId { get; set; }
        public int OrderIndex { get; set; }
        public bool IsActive { get; set; } = true;

        public DateTime CreatedDate { get; set; } = DateTime.Now;

        public MenuItem? Parent { get; set; }

        public ICollection<MenuItem> Children { get; set; } = new List<MenuItem>();
    }
}
