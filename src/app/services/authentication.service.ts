import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
 private storedData = 'registeredUsers';

  private User = class {
    constructor(
      public username: string,
      public email: string,
      public password: string
    ) {}
  };

  registerUser(user: { username: string; email: string; password: string }): boolean {
    const users: { username: string; email: string; password: string }[] = JSON.parse(
      localStorage.getItem(this.storedData) || '[]'
    );

    if (users.find(u => u.email === user.email)) {
      return false;
    }
    
    users.push(user);
    localStorage.setItem(this.storedData, JSON.stringify(users));
    return true; 
  }

  loginUser(email: string, password: string): boolean {
    const users: { username: string; email: string; password: string }[] = JSON.parse(
      localStorage.getItem(this.storedData) || '[]'
    );

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return true; 
    }

    return false; 
  }
}