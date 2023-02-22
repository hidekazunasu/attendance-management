using Microsoft.EntityFrameworkCore;
using AngularSample.Models;

namespace AngularSample
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<UserInfo> UserInfo { get; set; }
    }
}
