import { Injectable, EventEmitter, Output } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  loggedIn: boolean = false;
  private logInEvent = new Subject<any>();

  login(login: string, password: string, role: string) {
    localStorage.setItem("loginVK", login);
    localStorage.setItem("passwordVK", password);
    localStorage.setItem("roleVK", role);
    this.loggedIn = true;
    this.logInEvent.next(this.loggedIn);
  }

  logout() {
    localStorage.removeItem("loginVK");
    localStorage.removeItem("passwordVK");
    localStorage.removeItem("roleVK");
    this.loggedIn = false;
    this.logInEvent.next(this.loggedIn);
  }

  getLogInEvent(): Observable<any> {
    return this.logInEvent.asObservable();
}
}