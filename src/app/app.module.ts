import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import { EtudiantComponent } from './etudiant/etudiant.component';
import {RouterLink, RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import { TableEtudiantComponent } from './etudiant/table-etudiant/table-etudiant.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { AddetudiantComponent } from './etudiant/addetudiant/addetudiant.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import { DeleteEtudiantComponent } from './etudiant/delete-etudiant/delete-etudiant.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatNativeDateModule} from "@angular/material/core";
import { EditEtudiantComponent } from './etudiant/edit-etudiant/edit-etudiant.component';
import {MatSelectModule} from "@angular/material/select";
import { UserModule } from './user/user.module';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { ContratEtudiantComponent } from './etudiant/contrat-etudiant/contrat-etudiant.component';
import { EquipeEtudiantComponent } from './etudiant/equipe-etudiant/equipe-etudiant.component';
import { AssignEquipeComponent } from './etudiant/assign-equipe/assign-equipe.component';
import { AssignContratComponent } from './etudiant/assign-contrat/assign-contrat.component';
import {EtudiantDepartementComponent} from "./etudiant/etudiant-departement/etudiant-departement.component";
import { EtudiantDomaineComponent } from './etudiant/etudiant-domaine/etudiant-domaine.component';
import { ErrorsComponent } from './user/errors/errors.component';
import {TokenInterceptorService} from "./interceptors/token-interceptor.service";
import { LoginComponent } from './login-main/login/login.component';
import {LoginMainComponent} from "./login-main/login-main.component";
import { SignUpComponent } from './login-main/sign-up/sign-up.component';
import { Router } from '@angular/router';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { RequestsComponent } from './requests/requests.component';
import { RequestDialogComponent } from './request-dialog/request-dialog.component';
import { RejectRequestComponent } from './reject-request/reject-request.component';
import { UnderconstructionComponent } from './underconstruction/underconstruction.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EtudiantComponent,
    TableEtudiantComponent,
    AddetudiantComponent,
    DeleteEtudiantComponent,
    EditEtudiantComponent,
    DashboardComponent,
    ContratEtudiantComponent,
    EquipeEtudiantComponent,
    AssignEquipeComponent,
    AssignContratComponent,
    EtudiantDepartementComponent,
    EtudiantDomaineComponent,
    LoginComponent,
    LoginMainComponent,
    SignUpComponent,
    RequestsComponent,
    RequestDialogComponent,
    RejectRequestComponent,
    UnderconstructionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterOutlet,
    MatButtonModule,
    RouterLinkWithHref,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    RouterLink,
    MatProgressSpinnerModule
  ],

  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
