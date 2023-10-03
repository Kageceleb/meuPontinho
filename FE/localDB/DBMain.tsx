import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    { name: 'internshipSchedule.db', location: 'default' },
    () => console.log('Banco de Dados iniciado'),
    (error) => console.error('Erro ao iniciar Banco de Dados', error)
);


//===============================================================================================================

type Student = {
    ra: String;
    name: String;
    course: String;
    supervisor: String;
    localSupervisor: String;
    password: String;
};
  
type School = {
    cnpj: String;
    name: String;
    address: String;
};
  
type InternshipLog = {
    id?: number;
    student: String;
    school: String;
    date: String;
    logType: number;
};
  
//===============================================================================================================

db.transaction((tx) => {
    
    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS students (
            ra TEXT PRIMARY KEY,
            name TEXT,
            course TEXT,
            supervisor TEXT,
            localSupervisor TEXT,
            password TEXT
        )`
    );
  
    
    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS schools (
            cnpj TEXT PRIMARY KEY,
            name TEXT,
            address TEXT
        )`
    );
  
    
    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS internshipLogs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            student TEXT,
            school TEXT,
            date TEXT,
            logType INTEGER,
            FOREIGN KEY (student) REFERENCES students (ra),
            FOREIGN KEY (school) REFERENCES schools (cnpj)
        )`
    );
});

//===============================================================================================================

export const insertStudent = (
    ra: String,
    name: String,
    course: String,
    supervisor: String,
    localSupervisor: String,
    password: String
    ) => {
    db.transaction((tx) => {
        tx.executeSql(
            'INSERT INTO students (ra, name, course, supervisor, localSupervisor, password) VALUES (?, ?, ?, ?, ?, ?)',
            [ra, name, course, supervisor, localSupervisor, password],
            (_, result) => {
            console.log('Aluno cadastrado com sucesso!');
            },
            (_, error) => {
            console.error('Erro ao cadastrar aluno', error);
            }
        );
    });
};
  
export const insertSchool = (
    cnpj: String, 
    name: String, 
    address: String
    ) => {
    db.transaction((tx) => {
        tx.executeSql(
            'INSERT INTO schools (cnpj, name, address) VALUES (?, ?, ?)',
            [cnpj, name, address],
            (_, result) => {
            console.log('Instituição cadastrada com sucesso!');
            },
            (_, error) => {
            console.error('Erro ao cadastrar instituição', error);
            }
        );
    });
};
  
export const insertInternshipLog = (log: InternshipLog) => {
    db.transaction((tx) => {
        tx.executeSql(
            'INSERT INTO internshipLogs (student, school, date, logType) VALUES (?, ?, ?, ?)',
            [log.student, log.school, log.date, log.logType],
            (_, result) => {
            console.log('Log inserido com sucesso!');
            },
            (_, error) => {
            console.error('Erro ao inserir Log', error);
            }
        );
    });
};

//===============================================================================================================
  
 
export const getAllStudents = (callback: (students: Student[]) => void) => {
    db.transaction((tx) => {
        tx.executeSql('SELECT * FROM students', [], (_, { rows }) => {
            const students: Student[] = [];
                for (let i = 0; i < rows.length; i++) {
                    students.push(rows.item(i));
                }
            callback(students);
        });
    });
};
  
export const getAllSchools = (callback: (schools: School[]) => void) => {
    db.transaction((tx) => {
        tx.executeSql('SELECT * FROM schools', [], (_, { rows }) => {
            const schools: School[] = [];
                for (let i = 0; i < rows.length; i++) {
                    schools.push(rows.item(i));
                }
            callback(schools);
        });
    });
};
  
export const getAllInternshipLogs = (callback: (logs: InternshipLog[]) => void) => {
    db.transaction((tx) => {
        tx.executeSql('SELECT * FROM internshipLogs', [], (_, { rows }) => {
            const logs: InternshipLog[] = [];
                for (let i = 0; i < rows.length; i++) {
                    logs.push(rows.item(i));
                }
            callback(logs);
        });
    });
};

//===============================================================================================================