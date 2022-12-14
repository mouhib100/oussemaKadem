import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot, UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import {AuthService} from "../shared/auth.service";
import {resolve} from "@angular/compiler-cli";

@Injectable({providedIn: 'root'})

export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) =>
  {
    console.log(this.authService.isLoggedIn())
    if  (this.authService.isLoggedIn()) {
      resolve(true);
    } else {
      this.router.navigate(['login']);
    }


  })
  }
}
