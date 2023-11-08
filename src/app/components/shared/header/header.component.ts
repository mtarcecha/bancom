import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input("sidenavRef") sidenavRef: any;

  constructor(private router: Router) {
    
  }

  goToLogin() {
    this.router.navigateByUrl('/login')
  }

  openSidenav() {
    this.sidenavRef.open() 
  }

}
