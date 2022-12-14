import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {Utilisateur} from "../models/Utilisateur";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import * as Util from "util";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UUrl : string = "/api/kaddem/";
  private userSubject!: BehaviorSubject<Utilisateur | null>;
  public user!: Observable<Utilisateur | null>;
  constructor(private http: HttpClient, private router: Router) {

    this.userSubject = new BehaviorSubject<Utilisateur | null>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): Utilisateur {
    return <Utilisateur>this.userSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`${this.UUrl}authenticate`, { username, password })
      .pipe(
        map(({token}) => {
          let user: Utilisateur = {
            username: username,
            token: token,
          };
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.userSubject.next(user);
          console.log(this.userSubject)
          return user;
        })
      );
  }

  logout() {
    localStorage.clear();
    this.userSubject=new BehaviorSubject< Utilisateur | null>({});

     }
getToken():string|null{
    return localStorage.getItem('token');
}

  isLoggedIn(){
    return this.userSubject.value?.token!=null;
  }


  signup(data:any){
    console.log(this.UUrl+"register");
    return this.http.post<any>("http://localhost:8090/kaddem/register",data);
  }
}
