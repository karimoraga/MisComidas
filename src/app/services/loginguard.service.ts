import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DBService } from '../services/db.service';

@Injectable({
  providedIn: 'root'
})
export class LoginguardService implements CanActivate {
  constructor(private router: Router, private db: DBService) { }

  async canActivate():Promise<boolean> {
    return await this.checkAuth();
  }

  private async checkAuth() {    
    const authed = this.db.getActiveUser() !== null && this.db.getActiveUser() != "";
    if(authed)
      return this.routeToHome();
    else
      return true;
  }

  private routeToHome(): boolean {
    this.router.navigate(['/home']);
    return false;
  }
}