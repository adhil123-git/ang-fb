import { Injectable } from '@angular/core';

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
}