using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace meuPontinhoAPI.Models {

    [Table("schools")]
    public class Schools {

        [Key]

        public string cnpj { get; private set; }

        public string name { get; private set; }

        public string adress { get; private set; }

        public Schools(string cnpj, string name, string adress) {
            this.cnpj = cnpj;
            this.name = name;
            this.adress = adress;
        }
    }
}
