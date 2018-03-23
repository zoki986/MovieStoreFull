import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AlertifyService } from './services/alertify.service';

@Injectable()
export class EditGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private alert: AlertifyService){
  }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.checkUserRole())
        return true;
    

    this.alert.error('You need to be logged in as Admin.');
    this.router.navigate([""]);
    return false;
  }
}
