using meuPontinhoAPI.Models;
using meuPontinhoAPI.Models.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace meuPontinhoAPI.Controllers {

    [ApiController]
    [Route("api/meupontinho/students")]
    public class StudentController : ControllerBase {

        private readonly InterfaceStudentRep studentRep;

        public StudentController(InterfaceStudentRep studentRep) {
            this.studentRep = studentRep;
        }

        [HttpPost]
        public IActionResult Add(string ra, string name, string course, string supervisor, string localSupervisor, string password) {
            Students student = new Students(ra, name, course, supervisor, localSupervisor, password);
            studentRep.Add(student);

            return Ok();
        }

        [HttpGet]
        public IActionResult Get() {
            var students = studentRep.GetStudents();

            return Ok(students);
        }
    }
}
