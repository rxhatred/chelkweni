import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/modules/students';
import { Subject } from 'src/app/modules/subject';
import { SubjectService } from 'src/app/service/subject.service';
// import { SubjectComponent } from 'src/app/components/subject';
import { EnrollmentService } from 'src/app/service/enrollment.service';
import { StudentService } from 'src/app/service/student.service';
import { Enrollment } from 'src/app/modules/enrollment';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit {
  @Input() subjects: Subject[];
  subject: Subject;
  enrollment: Enrollment;
  //student: Student;
  //subjects: Subject[] = [];

  enrolledLists: Enrollment[] = [];

  searchId : number = 0;
  name: string = "";
  email: string = "";
  lockedEnrollment: boolean = true;

  constructor(
    private SubjectService: SubjectService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit() {
    this.enrolledLists = this.enrollmentService.getEnrolledStudents();
  }

  searchStudent(id: number) {

    if(this.isStudentEnrolled(id)) {
      alert("Student is already enrolled");
    }
    else{
      const data = this.enrollmentService.retrieveStudentId(id);
      this.name= data.fullName;
      this.email = data.emailAdd;
      this.searchId = id;
  
      if(data) this.lockedEnrollment = false;
    }
    
  }

  isStudentEnrolled(id: number): boolean {
    var exist = this.enrolledLists.find(e => e.student.id == id);
    if(exist) return true;
    return false;
  }

  enrollStudent(): void {
    this.enrollment = {
      student: {
        emailAdd: this.email,
        fullName: this.name,
        id: this.searchId
      },
      subject: this.SubjectService.getSubjectsForEnrollment()
    };
    this.enrollmentService.enrollStudent(this.enrollment)
    this.SubjectService.resetSubjectsForEnrollment();
    this.resetForm();
  }

  resetForm(): void {
    this.name = "";
    this.searchId = 0;
    this.email = "";
    this.lockedEnrollment = true;
  }

  getTotalUnits(data: Enrollment): number {
    let totalUnits = 0;
    data.subject.forEach(e => totalUnits += parseInt(e.subUnit.toString()));
    return totalUnits;
  }

}
