import { Component, OnInit,EventEmitter, Input,Output } from '@angular/core';
//import { Student } from 'src/app/modules/students';
//import { StudentService } from 'src/app/service/student.service';
import { StudentDB } from '../../modules/studentDB';
import { StudentDbService } from '../../service/student-db.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {
    @Input() studentList: StudentDB[];

    @Output() deleteStudentEvent = new EventEmitter();
    @Output() modifyStudentEvent = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    deleteStudent(id) {
        this.deleteStudentEvent.emit(id);
    }

    updateStudent(student:StudentDB) {
        let objData = {
          student: student,
          source: 'view'
        }
        this.modifyStudentEvent.emit(objData);
    }

}
