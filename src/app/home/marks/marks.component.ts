import { Component, OnInit,} from '@angular/core';
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
        engMarks: '',
        tamilMarks: '',
        mathsMarks: '',
        totalMarks: ''
      });
    }
  }

  Total(stud: any): void {
    stud.totalMarks = (stud.engMarks) + (stud.tamilMarks) + (stud.mathsMarks);
  }
}
