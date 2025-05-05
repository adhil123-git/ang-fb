import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  studentEntireList: any[] = []; 

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    const students = this.authenticationService.getStudents();
    for (let student of students) {
      this.studentEntireList.push({
        studentName: student.studentName,
        registerNumber: student.registerNumber,
        engMarks:"" ,
        tamilMarks:"" ,
        mathsMarks: "",
        totalMarks: ""
      });
    }
  }

  calculateTotal(student: any): void {
    student.totalMarks = 
      (Number(student.engMarks)) + 
      (Number(student.tamilMarks) ) + 
      (Number(student.mathsMarks) );
  }
}
