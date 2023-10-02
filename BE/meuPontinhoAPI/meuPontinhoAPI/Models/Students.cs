using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace meuPontinhoAPI.Models {

    [Table("students")]
    public class Students {

        [Key]

        public string RA { get; private set; }

        public string name { get; private set; }

        public string course { get; private set; }

        public int estagio { get; private set; }

        public string supervisor { get; private set; }

        public string localSupervisor { get; private set; }

        public Students(string rA, string name, string course, int estagio, string supervisor, string localSupervisor) {
            RA = rA;
            this.name = name;
            this.course = course;
            this.estagio = estagio;
            this.supervisor = supervisor;
            this.localSupervisor = localSupervisor;
        }
    }
}
