namespace meuPontinhoAPI.Models.Interfaces {
    public interface InterfaceLogRep {

        void Add(InternshipLogs log);

        List<InternshipLogs> GetLogs();
    }
}
