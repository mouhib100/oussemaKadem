import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../shared/api.service";
import {MatDialogRef} from "@angular/material/dialog";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm!:FormGroup;

  constructor(private apiService: ApiService, private dialogRef: MatDialogRef<AddUserComponent>) { }

  ngOnInit(): void {
  }

  addUtilisateur(f: any,d:any) {

    f.role={};
    f.role.typeRole=d;
    this.apiService.add("Utilisateur", f).subscribe({
        next: (res) => {
          console.log(res);
          alert('etudiant added sucessfully');
          this.dialogRef.close('save'); // i need it when i add a universite the dialog close after the action is done

        }
      }
    );
  }

}
