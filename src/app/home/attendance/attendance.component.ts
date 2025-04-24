import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent implements OnInit {
  studentEntireList: any[] = [];
  presentCount: number = 0;
  absentCount: number = 0;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.studentEntireList = this.authenticationService.getStudents();
    this.presentCount = this.authenticationService.getpresentCount();
    this.absentCount = this.authenticationService.getAbsentCount();
  }

  present(student: any): void {
    if (!student.attendance) {
      student.attendance = 'present';
      this.presentCount++;
      this.authenticationService.setpresentCount(this.presentCount);
    }
  }

  absent(student: any): void {
    if (!student.attendance) {
      student.attendance = 'absent';
      this.absentCount++;
      this.authenticationService.setAbsentCount(this.absentCount);
    }
  }
}

