import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-count',
  template: `
    <p>Another Total no of students: {{ totalStudents }}</p>
    <button (click)="notifyParent()">Notify Parent</button>
  `,
  styleUrls: ['./student-count.component.css']
})
export class StudentCountComponent {
  @Input() totalStudents: number = 0;

  @Output() notify = new EventEmitter<string>();

  notifyParent(): void {
    this.notify.emit(`Total students displayed: ${this.totalStudents}`);
  }
}
