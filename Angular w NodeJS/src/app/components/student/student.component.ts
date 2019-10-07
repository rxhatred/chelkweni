import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { StudentDbService } from '../../service/student-db.service';
import { StudentDB } from '../../modules/studentDB';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  title = 'Student Entry';
  //student: Student;
  //students: Student[] = [];
  students: StudentDB[];
  student: StudentDB = null;
  state: string = 'Save';


  constructor(private studentDbService: StudentDbService) {  
      this.initializeData();
      this.retrieveStudents();
  }

  initializeData(): void {
      this.student = {
          _id: '',
          fullName: '',
          emailAdd: ''
      }
	}

  retrieveStudents() {
      this.studentDbService.getStudents().subscribe(data => {
        this.students = data;
        console.log(this.students);
      });
  }

  saveStudent(): void {
      if(this.state.toLowerCase() === 'save') {
          this.addStudent();
      } else {
          this.updateStudent();
      }
      this.state = "Save";
      this.initializeData();
  }

  addStudent() {
      this.studentDbService.addStudent(this.student).subscribe(data => {
        console.log("Added Student", data);
        this.retrieveStudents();
        this.state = 'Save';
        this.initializeData();
      },
      error => {
        console.log("Error:", error);
      });
  }
 
  deleteStudent(id: string) {
      console.log("Removed id:", id);
      this.studentDbService.deleteStudent(id).subscribe(data => {
          console.log(data);
          this.retrieveStudents();
        }, error => {
          console.log("Error:", error);
          this.retrieveStudents();
        }
      );
  }

  setModifyStudent(args) {
      this.state = "Update";
      this.student = {
          _id : args.student._id,
          fullName: args.student.fullName,
          emailAdd: args.student.emailAdd
      } 
  }

  updateStudent() {
      this.studentDbService.updateStudent(this.student).subscribe(data => {
          console.log(data);
          this.retrieveStudents();
          this.state = "Save";
          this.initializeData();
      }, error => {
          console.log("Error:", error);
          this.retrieveStudents();
      });
      
  }
}

