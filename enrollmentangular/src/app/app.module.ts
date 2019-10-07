import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { StudentService } from './service/student.service';
import { StudentComponent } from 'src/app/components/student/student.component';
import { SubjectComponent } from './components/subject/subject.component';
import { SubjectViewComponent } from './components/subject-view/subject-view.component';
import { SubjectService } from './service/subject.service';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { EnrollmentService } from './service/enrollment.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentDbService } from './service/student-db.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentViewComponent,
    StudentComponent,
    SubjectComponent,
    SubjectViewComponent,
    EnrollmentComponent,
  
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule],
  providers: [StudentService, SubjectService, EnrollmentService,StudentDbService],
  bootstrap: [AppComponent]
})
export class AppModule {}
