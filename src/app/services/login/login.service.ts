import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  interval: any;

  constructor(private router: Router) {}

  validateUser(user: User) {
    if(user.email === environment.email && user.password === environment.password) {
      return true;
    }
    return false;
  }

  setSession(user: User) {
    localStorage.setItem("user", JSON.stringify(user))
    const currentDate = new Date().getTime().toString();
    localStorage.setItem("dateSession", currentDate)
  }

  closeSession() {
    clearInterval(this.interval);
    localStorage.removeItem("user");
    localStorage.removeItem("dateSession");
    this.router.navigateByUrl('/login');
  }

  verifySession() {

    this.interval = setInterval(() => {

      const dateSession = localStorage.getItem("dateSession");

      if(dateSession) {
        const currentDate = new Date().getTime();
        const minutes = Math.floor((currentDate - Number.parseInt(dateSession)) / (1000 * 60));       
        
        if (minutes >= environment.minutesSession) {
          this.closeSession()
        }
      }

    }, 60000);

  }

}
