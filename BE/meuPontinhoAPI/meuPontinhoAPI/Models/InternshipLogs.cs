using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace meuPontinhoAPI.Models {

    [Table("internshipLogs")]
    public class InternshipLogs {

        [Key]

        public string student { get; private set; }

        public string school { get; private set; }

        public string date { get; private set; }

        public int logType { get; private set; }

        public int id { get; private set; }

        public InternshipLogs(string student, string school, string date, int logType) {
            this.student = student;
            this.school = school;
            this.date = date;
            this.logType = logType;
        }
    }
}
