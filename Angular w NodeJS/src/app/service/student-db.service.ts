import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  {StudentDB} from 'src/app/modules/StudentDB'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentDbService {

  constructor(private http:HttpClient) { }

  base_url : string = 'http://localhost:3000/student';

  getStudents(): Observable<StudentDB[]> {
    return this.http.get<StudentDB[]>(this.base_url);
  } 

  getStudent(id:string): Observable<StudentDB> {
    return this.http.get<StudentDB>(this.base_url+id);
  }

  addStudent(student: StudentDB) : Observable<any> {
    return this.http.post(this.base_url,
      {
        "fullName": student.fullName,
        "emailAdd":  student.emailAdd,
      });
 }

  deleteStudent(id: String) {
    return this.http.delete(this.base_url+id);
  }

  updateStudent(student: StudentDB) : Observable<any> {
    return this.http.put(this.base_url+student._id,
      {
        "fullName": student.fullName,
        "emailAdd":  student.emailAdd,
      });
  }
}


