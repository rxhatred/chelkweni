import express, { Request, Response } from "express";
import *as studentController from './controller/studentController';
import *as subjectController from './controller/subjectController';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();

let corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};


app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());

//Student
app.get('/student',studentController.allStudents);
app.get('/student/:id', studentController.getStudent);
app.get('/student/searchbyquery/:query', studentController.getStudentsByQuery);
app.post('/student', studentController.addStudent);
app.delete('/student/:id', studentController.deleteStudent);
app.put('/student/:id', studentController.updateStudent);


//Subject
app.get('/subject', subjectController.allSubjects);
app.get('/subject/:id', subjectController.getSubject);
app.post('/subject', subjectController.addSubj);
app.delete('/subject/:id', subjectController.deleteSubject);
app.put('/subject/:id', subjectController.updateSubject);

//enrollment
//app.get('/');
//app.post('/');


app.set("port", process.env.PORT || 3000);


const PORT = app.get('port');
app.listen(PORT, () => {
    console.log(`Successfully running at port ${PORT}`);
});