import { Injectable } from '@angular/core';
import { Student } from 'src/app/modules/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 students: Student []=[];

  constructor() {

    console.log("Student service is running ... ");
   }
 
   getStudents() {
    return this.students;
   }
  
  searchStudent(index): Student {
    return this.students[this.getStudentLocation(index)];
  }
  getStudent(index): Student {
    return this.students[index];
  }


  addStudent(student: Student) {
    //check if student already exit;
    this.students.push(student);
  }

  deleteStudent(id: number) {
    let location = this.getStudentLocation(id);
    if (location != -1) {
      this.students.splice(location, 1);
    }
  }

  updateStudent(student: Student) {
    let location = this.getStudentLocation(student.id);
    if (location != -1) {
      this.students[location] = {
        id: student.id,
        fullName: student.fullName,
        emailAdd: student.emailAdd
      };
    }
  }

  //helper method
  getStudentLocation(id: number): number {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == id) {
        return i;
      }
    }
    return -1;
  }
}
