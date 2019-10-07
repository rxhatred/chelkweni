import { Injectable } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { SubjectService } from 'src/app/service/subject.service';
import { Subject } from 'src/app/modules/subject';
import { Student } from 'src/app/modules/students';
import { Enrollment } from 'src/app/modules/enrollment';

@Injectable({
  providedIn: 'root'
})
  
export class EnrollmentService {

  enrollment: Enrollment[]=[];
  
  constructor(
    private subjectService: SubjectService,
    private studentService: StudentService
  ) {
    console.log("Enrollment service is running ... ");
  }

  enrollStudent(args: Enrollment) {
    this.enrollment.push(args);
  }

  getSubjectsAvail() {
    return this.subjectService.getSubjects();
  }

  getEnrolledStudents() {
    return this.enrollment;
  }

  // retrieveStudent(studId): Student {
  //   return this.studentService.getStudent(studId);
  // }

  retrieveStudentId(studId): Student {
    return this.studentService.searchStudent(studId);
  }
}

