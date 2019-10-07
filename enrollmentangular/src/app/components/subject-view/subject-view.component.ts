import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Subject } from 'src/app/modules/subject';
//import { Enrollment } from 'src/app/components/enrollment';
import {Enrollment} from 'src/app/modules/enrollment';
import { Student } from 'src/app/modules/students';
import { SubjectDBService } from 'src/app/service/subject-db.service';


@Component({
  selector: 'app-subject-view',
  templateUrl: './subject-view.component.html',
  styleUrls: ['./subject-view.component.scss']
})
export class SubjectViewComponent implements OnInit {

  @Input() subjects: Subject[];
  @Input() enrollment: Enrollment;
  @Input() student: Student;
  @Output() deleteSubjectEvent = new EventEmitter();
  @Output() updateSubjectEvent = new EventEmitter();
  @Input() isAdminLevel: boolean;
  @Input() title: string;

  
  // show = true;
  
  // btnShow() { 
  //   this.show = !this.show;
  // }

 constructor(private subjservice: SubjectDBService) { 
  }

  ngOnInit()  {
      this.subjservice.getSubjects().subscribe(res => {
        this.subjects = res;
      });
  }  
  

  deleteSubject(subId: string): void {
    this.deleteSubjectEvent.emit(subId);
  }

  updateSubject(subjectObject: Subject)
  {
    this.updateSubjectEvent.emit(subjectObject);
  }

  addSubjectToStudent(sub : Subject): void {
    this.subjservice.addForEnrollment(sub);
  }

  isAdded(id: number): boolean {
    // let subjectCollection = this.subjservice.getSubjectsForEnrollment();
    // var itExists = subjectCollection.find(e => e.subId == id);
    // if(itExists) {
    //   return true;
    // }
     return false;
  }
}
