import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from './../modules/subject'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectDBService {

  constructor(private http:HttpClient) { }

  base_url : string = 'http://localhost:3000/subject';

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.base_url);
  } 

  getSubject(id:string): Observable<Subject> {
    return this.http.get<Subject>(this.base_url+'/'+id);
  }

  addSubject(subject: Subject) : Observable<any> {
    return this.http.post(this.base_url,
      {
        "subjectCode" : subject.subjectCode,
        "subjectDescription" : subject.subjectDescription,
        "room" : subject.room,
        "units" : subject.units
      });
 }

  deleteSubject(id: String) {
    return this.http.delete(this.base_url+'/'+id);
  }

  updateSubject(subject: Subject) : Observable<any> {
    return this.http.put(this.base_url+'/'+subject._id,
      {
        "subjectCode" : subject.subjectCode,
        "subjectDescription" : subject.subjectDescription,
        "room" : subject.room,
        "units" : subject.units
      });
  }
}


