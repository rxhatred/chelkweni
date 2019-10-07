import { Subject } from 'src/app/modules/subject';
import { Student } from 'src/app/modules/students';


export interface Enrollment
{
    student: Student;
    subject: Subject[];

}