import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UserModule} from "../user/user.module";

@Injectable({
  providedIn: 'root',
})


export class ApiService {
  url:string=environment.BaseUrl+'/kaddem/';
  UUrl : string = "/api/kaddem/";
  headers1 = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
  }



  add(table:any ,data: any) {
    return this.http.post<any>(this.UUrl+table+"/add", data)
  }

  get(table:any) {
    return this.http.get<any>(this.UUrl+table+"/all");
  }

  getContrat(id:any) {
    return this.http.get<any>(this.UUrl+"etudiant/contrat/"+id);
  }

  assignContrat(id:any,idContrat:any) {
    console.log(id);
    const params = {
      id : id,
      idContrat : idContrat
    }
    console.log(this.url+"etudiant/assignContrat/",{params});
    return this.http.post<any>(this.UUrl+"etudiant/assignContrat",{},{params});
  }

  assignEquipe(id:any,idEquipe:any) {
    console.log(id);
    const params = {
      id : id,
      idEquipe : idEquipe
    }
    console.log(this.url+"etudiant/assignEquipe/",{params});
    return this.http.post<any>(this.UUrl+"etudiant/assignEquipe",{},{params});
  }

  getEquipe(id:any){
    const params = {
      id : id
    }
    return this.http.get<any>(this.UUrl+"etudiant/equipe",{params});
  }

  put(data: any,table:any) {
    return this.http.put<any>(this.UUrl+table + "/update/", data)
  }

  delete(id: number,table:any) {
    return this.http.delete<any>(this.UUrl + table +"/deleteStudent/" + id);
  }

  deleteRequest(id: number,table:any) {
    return this.http.delete<any>(this.UUrl + table +"/delete/" + id);
  }

  getEtudiantDepartement(id:any){
    const params = {
      id : id
    }
    return this.http.get<any>(this.UUrl+"etudiant/departement",{params});
  }

  LoginnedAs(username:any){
    const params = {
      username : username
    }
    return this.http.get<any>(this.UUrl+"role",{params});
  }


}
