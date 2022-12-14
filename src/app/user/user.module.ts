import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatSortModule} from "@angular/material/sort";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ApiService} from "../shared/api.service";
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {ErrorsComponent} from "./errors/errors.component";
import { UpdatenotifComponent } from './updatenotif/updatenotif.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    UserComponent,
    AddUserComponent,
    DeleteUserComponent,
    EditUserComponent,
    ErrorsComponent,
    UpdatenotifComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
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
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  providers: [],
})
export class UserModule { }
