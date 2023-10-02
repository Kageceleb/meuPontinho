using meuPontinhoAPI.Models;
using meuPontinhoAPI.Models.Interfaces;

namespace meuPontinhoAPI.Infrastructure {
    public class LogRepository : InterfaceLogRep {

        public readonly ConnectionDB connectionDB = new ConnectionDB();
        public void Add(InternshipLogs log) {
            connectionDB.Add(log);
            connectionDB.SaveChanges();
        }

        public List<InternshipLogs> GetLogs() {
            return connectionDB.InternshipLogs.ToList();
        }
    }
}
