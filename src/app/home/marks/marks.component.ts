import { Component,OnInit } from '@angular/core';
import{ AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {
 studentEntireList: any[] = []; 

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.studentEntireList = this.authenticationService.getStudents();
  }
}
