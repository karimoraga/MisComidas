import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DBService } from '../services/db.service';

@Injectable({
  providedIn: 'root'
})

export class AuthguardService implements CanActivate {
  constructor(private router: Router, private db: DBService) { }

  async canActivate():Promise<boolean> {
    return await this.checkAuth();
  }

  private async checkAuth() {    
    const authed = this.db.getActiveUser() !== null && this.db.getActiveUser() != "";
    return authed || this.routeToLogin();
  }

  private routeToLogin(): boolean {
    this.router.navigate(['/login']);
    return false;
  }
}