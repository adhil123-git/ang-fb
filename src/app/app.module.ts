import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import{ HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { StudentListComponent } from './home/student-list/student-list.component';
import { AttendanceComponent } from './home/attendance/attendance.component';
import { MarksComponent } from './home/marks/marks.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent,
    DashboardComponent,
    StudentListComponent,
    AttendanceComponent,
    MarksComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
