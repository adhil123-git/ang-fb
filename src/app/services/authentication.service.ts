import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private storedData = 'registeredUsers';

  registerUser(user: { username: string; email: string; password: string }): boolean {
    const users: { username: string; email: string; password: string }[] = JSON.parse(
      localStorage.getItem(this.storedData) || '[]'
    );

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === user.email) {
        return false; 
      }
    }

    users.push(user);
    localStorage.setItem(this.storedData, JSON.stringify(users));
    return true;
  }

  loginUser(email: string, password: string): boolean {
    const users: { username: string; email: string; password: string }[] = JSON.parse(
      localStorage.getItem(this.storedData) || '[]'
    );

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        localStorage.setItem('loggedInUser', JSON.stringify(users[i]));
        return true;
      }
    }

    return false;
  }


  private studentData: any[] = [];

  getStudents() {
    return this.studentData;
  }

  addStudent(student: any) {
    this.studentData.push(student);
  }

private presentCount: number = 0;
  private absentCount: number = 0;
  getpresentCount() {
    return this.presentCount;
  }
  getAbsentCount() {
    return this.absentCount;
  }
  setpresentCount(pc: number) {
    this.presentCount = pc;
  }
  setAbsentCount(ac: number) {
     this.absentCount = ac;
  }

  private Url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getdummydata(): Observable<any> {
    return this.http.get(this.Url);
  }







}