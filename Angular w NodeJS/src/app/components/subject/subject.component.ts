import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/modules/subject';
import { SubjectDBService } from 'src/app/service/subject-db.service';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  
    subject: Subject;
    subjects: Subject[] = [];
    state: string = 'Save';

    ngOnInit() {
    }

    constructor(private service:SubjectDBService) { 
      this.initializeData();
      this.retrieveSubjects();
    }

    initializeData(): void {
        this.state = "Save";
        this.subject = {
          _id: '',
          subjectCode: '',
          subjectDescription: '',
          room: '',
          units: 0.0
        };
    }

    saveSubject(): void {
        if(this.state.toLowerCase() == 'save'){
            this.addSubject();
        }
        else {
            this.updateSubject();
        }
        this.state = "Save";
        this.initializeData();
        this.retrieveSubjects();
    }
  
    addSubject(): void{
        this.service.addSubject(this.subject).subscribe(res => {
            console.log("Added");
        });
    }

    deleteSubject(index)
    {
        this.service.deleteSubject(index).subscribe(res => {
            this.retrieveSubjects();
        })
    }

    updateSubject(): void {
        this.service.updateSubject(this.subject).subscribe(res => {
            this.retrieveSubjects();
        })
    }

    retrieveSubjects() {
        this.service.getSubjects().subscribe(data => {
          this.subjects = data;
        });
    }

}
