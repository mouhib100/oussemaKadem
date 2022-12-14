import { Component, Inject, OnInit } from '@angular/core';
import {ApiService} from "../../shared/api.service";
import {FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-addetudiant',
  templateUrl: './addetudiant.component.html',
  styleUrls: ['./addetudiant.component.css']
})
export class AddetudiantComponent implements OnInit {
tabd:any=[];
  isFinished:boolean=false;
  constructor(private apiService: ApiService, private dialogRef: MatDialogRef<AddetudiantComponent>) {
  }

  ngOnInit(): void {
    this.getDepartement();
    this.tabd=this.getDepartement();

  }


  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  addEtudiant(f: any,h:any,k:any, d: any) {

    var data = Object.assign(f,h,k)
    data.departement = {};
    data.departement.idDepartement = d;
    data.role={};


    console.log(data);
    this.apiService.add("etudiant", data).subscribe({
        next: (res) => {
          console.log(res);
          alert('etudiant added sucessfully');
          this.dialogRef.close('save'); // i need it when i add a universite the dialog close after the action is done

        }
      }
    );
  }

  getDepartement() {
    this.apiService.get("Departement").subscribe(
      (d) => {
        console.log(d);
        this.tabd=d;
      }
    )
  }

}
