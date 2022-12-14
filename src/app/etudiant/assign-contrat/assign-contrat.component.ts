import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../shared/api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ContratEtudiantComponent} from "../contrat-etudiant/contrat-etudiant.component";

@Component({
  selector: 'app-assign-contrat',
  templateUrl: './assign-contrat.component.html',
  styleUrls: ['./assign-contrat.component.css']
})
export class AssignContratComponent implements OnInit {

  constructor(private apiService:ApiService,private dialogRef: MatDialogRef<ContratEtudiantComponent>,@Inject(MAT_DIALOG_DATA) public idUser:any) { }

  ngOnInit(): void {
  }

  assignContrat(f:any){
    console.log(this.idUser);
    this.apiService.assignContrat(this.idUser,f).subscribe({
        next: () => {
          alert('contrat assigned sucessfully');
          this.dialogRef.close('update'); // i need it when i add a universite the dialog close after the action is done

        }
      }
    );
  }

}
