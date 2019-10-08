import { Request, Response } from 'express';
import { Student } from '../schema';

// - GET - /students # returns all students
export let allStudents = (req: Request, res: Response) => {
    let students = Student.find((err: any, students: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(students);
      }
    });
  };
   
  // - GET - /student/{1} # returns a student with id 1
export let getStudent = (req: Request, res: Response) => {
    Student.findById(req.params.id, (err: any, student: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(student);
        }
    });
};

export let getStudentsByQuery = (req: Request, res: Response) => {
    Student.find({ fullName: {$regex : "^" + req.params.query}}, (err, data) => {
      res.send(data);
    })
}

  // - POST - /student # inserts a new student into the table
export let addStudent = (req: Request, res: Response) => {
    let student = new Student(req.body);
    student.save((err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(student);
        }
    });
};
   
  // - DELETE - /student/{1} # deletes a student with id of 1
export let deleteStudent = (req: Request, res: Response) => {
    Student.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send('Deleted!');
        }
    });
};

  // - PUT - /student/{1} # updates a student with id of 1
  export let updateStudent = (req: Request, res: Response) => {
    Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      (err: any, student: any) => {
        if (err) {
          res.send(err);
        } else {
          res.send('Updated!');
        }
    });
};
