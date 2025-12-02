using MedinovaApplication.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace MedinovaApplication.Db.Configurations
{
    public class MenuItemConfiguration : IEntityTypeConfiguration<MenuItem>
    {
        public void Configure(EntityTypeBuilder<MenuItem> builder)
        {
            builder.ToTable("MenuItems");

            
            builder.HasKey(m => m.Id);

        
            builder.Property(m => m.Name)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(m => m.Url).HasMaxLength(200);
            builder.Property(m => m.OrderIndex)
                .IsRequired().HasDefaultValue(0);

            builder.Property(m => m.IsActive).IsRequired().HasDefaultValue(true);

            builder.Property(m=> m.CreatedDate)
                .IsRequired()
                .HasDefaultValueSql("GETDATE()");


          
            builder.HasOne(m => m.Parent)
                   .WithMany(m => m.Children)
                   .HasForeignKey(m => m.ParentId)
                   .OnDelete(DeleteBehavior.Restrict);

           
            builder.HasIndex(m => m.OrderIndex)
                   .HasDatabaseName("IX_MenuItems_OrderIndex");

            builder.HasIndex(m => m.ParentId)
                   .HasDatabaseName("IX_MenuItems_ParentId");

            builder.HasIndex(m => m.IsActive)
                   .HasDatabaseName("IX_MenuItems_IsActive");

        }
    }
}
