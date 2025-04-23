import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent implements OnInit {
  studentEntireList: any[] = []; 

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.studentEntireList = this.authenticationService.getStudents();
  }
}

