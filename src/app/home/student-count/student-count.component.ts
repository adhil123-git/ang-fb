import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-count',
  templateUrl: './student-count.component.html',
  styleUrls: ['./student-count.component.css']
})
export class StudentCountComponent {
  @Input() total: number = 0;

  @Output() notify = new EventEmitter<string>();

  notifystudenttotal(): void {
    this.notify.emit(`Total students : ${this.total}`);
  }
}
