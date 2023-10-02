using meuPontinhoAPI.Models;
using meuPontinhoAPI.Models.Interfaces;

namespace meuPontinhoAPI.Infrastructure {
    public class SchoolRepository : InterfaceSchoolRep {

        public readonly ConnectionDB connectionDB = new ConnectionDB();
        public void Add(Schools school) {
            connectionDB.Add(school);
            connectionDB.SaveChanges();
        }

        public List<Schools> GetSchools() {
            return connectionDB.Schools.ToList();
        }
    }
}
