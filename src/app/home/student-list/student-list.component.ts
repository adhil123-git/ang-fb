import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent {
  studentForm: FormGroup;
  studentData: any[] = [];
  dummydata:any[]=[];

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) {
    this.studentForm = this.formBuilder.group({
      studentName: new FormControl(''),
      registerNumber: new FormControl('')
    });
  
  
   

    this.studentData = this.authenticationService.getStudents();
  }

  onSubmit() {
    this.authenticationService.addStudent(this.studentForm.value);
    this.studentData = this.authenticationService.getStudents();
    this.studentForm.reset();
  }


  notify(message: string): void {
    alert(message); 
  }

  


  

  showdata() {
    this.authenticationService.getdummydata().subscribe((data: any[]) => {
      this.dummydata = data;
    });
  }

}
  