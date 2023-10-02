using meuPontinhoAPI.Models;
using meuPontinhoAPI.Models.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace meuPontinhoAPI.Controllers {

    [ApiController]
    [Route("api/meupontinho/schools")]
    public class SchoolController : ControllerBase {

        private readonly InterfaceSchoolRep schoolRep;

        public SchoolController(InterfaceSchoolRep schoolRep) {
            this.schoolRep = schoolRep;
        }

        [HttpPost]
        public IActionResult Add(string cnpj, string name, string adress) {
            Schools school = new Schools(cnpj, name, adress);
            schoolRep.Add(school);

            return Ok();
        }

        [HttpGet]
        public IActionResult Get() {
            var schools = schoolRep.GetSchools();

            return Ok(schools);
        }
    }
}
