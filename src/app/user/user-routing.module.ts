import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {AuthGuardService} from "../guards/auth-guard.service";

const routes: Routes = [
  {path:'all' , component:UserComponent, canActivate: [AuthGuardService]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
