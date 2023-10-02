using meuPontinhoAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace meuPontinhoAPI.Infrastructure {
    public class ConnectionDB : DbContext {

        public DbSet<Students> Students { get; set; }

        public DbSet<Schools> Schools { get; set; }

        public DbSet<InternshipLogs> InternshipLogs { get; set;}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseMySQL(
                "Server=localhost;" +
                "Port=3306;Database=internshipSchedule;" +
                "User Id=root;" +
                "Password=root"
                );
        
    }
}
