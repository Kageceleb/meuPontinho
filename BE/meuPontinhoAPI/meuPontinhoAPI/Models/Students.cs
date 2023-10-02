using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace meuPontinhoAPI.Models {

    [Table("students")]
    public class Students {

        [Key]

        public string RA { get; private set; }

        public string name { get; private set; }

        public string course { get; private set; }

        public string supervisor { get; private set; }

        public string localSupervisor { get; private set; }

        public string password { get; private set; }

        public Students(string rA, string name, string course, string supervisor, string localSupervisor, string password) {
            RA = rA;
            this.name = name;
            this.course = course;
            this.supervisor = supervisor;
            this.localSupervisor = localSupervisor;
            this.password = password;
        }
    }
}
