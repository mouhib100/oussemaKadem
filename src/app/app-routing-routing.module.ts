import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContratEtudiantComponent } from './etudiant/contrat-etudiant/contrat-etudiant.component';
import { EquipeEtudiantComponent } from './etudiant/equipe-etudiant/equipe-etudiant.component';
import { EtudiantDepartementComponent } from './etudiant/etudiant-departement/etudiant-departement.component';
import { LoginComponent } from './login-main/login/login.component';
import { LoginMainComponent } from './login-main/login-main.component';
import { SignUpComponent } from './login-main/sign-up/sign-up.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { RequestsComponent } from './requests/requests.component';
import { UnderconstructionComponent } from './underconstruction/underconstruction.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'etudiant',
    component: EtudiantComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'departement',
        component: EtudiantDepartementComponent,
        canActivate: [AuthGuardService],
      },
    ],
  },
  {
    path: 'utilisateur',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'Contrat/:id',
    component: ContratEtudiantComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'equipe',
    component: EquipeEtudiantComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'request',
    component: RequestsComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'maintenance', component: UnderconstructionComponent },
  {
    path: '',
    component: LoginMainComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignUpComponent },
    ],
  },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
