import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { StudentListComponent } from './home/student-list/student-list.component';
import { MarksComponent } from './home/marks/marks.component';
import { AttendanceComponent } from './home/attendance/attendance.component';

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path:'homepage', component: HomepageComponent,
    children:[
      { path: '', component:DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'student-list', component: StudentListComponent },
      { path: 'marks', component: MarksComponent },
      { path: 'attendance', component: AttendanceComponent }
]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}