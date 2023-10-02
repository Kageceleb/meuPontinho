using meuPontinhoAPI.Models;
using meuPontinhoAPI.Models.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace meuPontinhoAPI.Controllers {

    [ApiController]
    [Route("api/meupontinho/internshipLogs")]
    public class LogController : Controller {

        private readonly InterfaceLogRep logRep;

        public LogController(InterfaceLogRep logRep) {
            this.logRep = logRep;
        }

        [HttpPost]
        public IActionResult Add(string student, string school, string moment, int logType) {
            InternshipLogs log = new InternshipLogs(student, school, moment, logType);
            logRep.Add(log);

            return Ok();
        }

        [HttpGet]
        public IActionResult Get() {
            var logs = logRep.GetLogs();

            return Ok(logs);
        }
    }
}
