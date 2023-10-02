using meuPontinhoAPI.Models;
using meuPontinhoAPI.Models.Interfaces;

namespace meuPontinhoAPI.Infrastructure {
    public class StudentRepository : InterfaceStudentRep {

        public readonly ConnectionDB connectionDB = new ConnectionDB();
        public void Add(Students student) {
            connectionDB.Add(student);
            connectionDB.SaveChanges();
        }

        public List<Students> GetStudents() {
            return connectionDB.Students.ToList();
        }
    }
}
