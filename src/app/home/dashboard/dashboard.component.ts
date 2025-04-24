import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totalStudents: number = 0;
  totalpresents: number = 0;
  totalabsents: number = 0;
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.totalStudents = this.authenticationService.getStudents().length;
    this.totalpresents = this.authenticationService.getpresentCount();
    this.totalabsents = this.authenticationService.getAbsentCount();
  }
}
