using MedinovaApplication.Models;
using Microsoft.EntityFrameworkCore;

namespace MedinovaApplication.Db
{
    public class MedinovaDbContext:DbContext
    {
        public MedinovaDbContext(DbContextOptions options):base(options)
        {
            
        }

        public DbSet<MenuItem> MenuItems { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(GetType().Assembly);
            base.OnModelCreating(modelBuilder);
        }
    }
}
