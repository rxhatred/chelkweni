import { Injectable } from '@angular/core';
import { Subject } from 'src/app/modules/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  subjects: Subject[] = [];

  subjectForEnrollment: Subject[] = [];

  constructor() {
    console.log("Subject  service is running ... ");
  }

  addForEnrollment(subject: Subject): void {
    this.subjectForEnrollment.push(subject);
  }
  
  getSubjectsForEnrollment(): Subject[] {
    return this.subjectForEnrollment;
  }

  resetSubjectsForEnrollment(): void {
    this.subjectForEnrollment = [];
  }

  getSubjects() {
    return this.subjects;
  }

  getSubject(subId): Subject {
    return this.subjects[subId];
  }

  addSubject(subject: Subject) {
    this.subjects.push(subject);

  }

  deleteSubject(subId: number) {
    let location = this.getSubjectLocation(subId);
    if (location != -1) {
      this.subjects.splice(location, 1)
    }
  }

  updateSubject(subject: Subject) {
    // let location = this.getSubjectLocation(subject.subId);
    // if (location != -1) {
    //   this.subjects[location] =
    //     {
    //       subId: subject.subId,
    //       subCode: subject.subCode,
    //       subDesc: subject.subDesc,
    //       subRoom: subject.subRoom,
    //       subUnit: subject.subUnit
    //     };
    // }
  }

  getSubjectLocation(subId: number): number {
    // for (let i = 0; i < this.subjects.length; i++) {
    //   if (this.subjects[i].subId == subId) {
    //     return i;
    //   }
    // }
     return -1;
  }
}
