import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../../shared/api.service";
import {ContratEtudiantComponent} from "../contrat-etudiant/contrat-etudiant.component";
import {EquipeEtudiantComponent} from "../equipe-etudiant/equipe-etudiant.component";

@Component({
  selector: 'app-assign-equipe',
  templateUrl: './assign-equipe.component.html',
  styleUrls: ['./assign-equipe.component.css']
})
export class AssignEquipeComponent implements OnInit {

  constructor(private apiService:ApiService,private dialogRef: MatDialogRef<EquipeEtudiantComponent>,@Inject(MAT_DIALOG_DATA) public idUser:any) { }

  ngOnInit(): void {
  }


  assignEquipe(f:any){
    console.log(this.idUser);
    this.apiService.assignEquipe(this.idUser,f).subscribe({
        next: () => {
          alert('contrat assigned sucessfully');
          this.dialogRef.close('update'); // i need it when i add a universite the dialog close after the action is done

        }
      }
    );
  }

}
