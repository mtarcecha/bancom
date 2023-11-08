import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  session = '';

  constructor(private readonly router: Router) {
    this.getSession();
  }

  private getSession(): void {
    this.session = localStorage.getItem('user') ?? '';
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.session) {
      return this.router.parseUrl('/login');
    }

    return true;
  }
}
