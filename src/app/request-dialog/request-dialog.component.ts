import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.css']
})
export class RequestDialogComponent implements OnInit {

  isValid:boolean=true;
  requestForm!:FormGroup;
  tabd:any=[];


  disabled: boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public rowData:any,private dialogRef:MatDialogRef<RequestDialogComponent>,private formBuilder:FormBuilder,private apiService: ApiService) { }

  ngOnInit(): void {

    //idCtrl = new FormControl({value: '', disabled: this.disabled})
    this.requestForm=this.formBuilder.group({
      departement:['',Validators.required],
      domaine:['',Validators.required],
      prenom:['',Validators.required],
      nom:['',Validators.required],
    })


      this.getDepartement()
  }


  getDepartement()
  {
    this.apiService.get("Departement").subscribe(
      (d) => {
        console.log(d);
        this.tabd=d;
      }
    )
  }

  AcceptEtudiant(){
    let d = this.requestForm.value.departement;
    this.requestForm.value.departement = {};
    this.requestForm.value.departement.idDepartement = d;
    this.requestForm.value.role = {};
    this.requestForm.value.role.typeRole="Etudiant";
    this.requestForm.value.prenom=this.rowData.prenom;
    this.requestForm.value.nom=this.rowData.nom;
    console.log(this.requestForm.value);

    this.apiService
      .add("etudiant",this.requestForm.value)
      .subscribe({
        next: (res) => {
          alert('Etudiant updated successfully');
          console.log(this.rowData.value);
          this.apiService.deleteRequest(this.rowData.idRequest,"request").subscribe();
          this.requestForm.reset();
          this.dialogRef.close('save');
        },
        error: (err) => {
          alert('error while updating');
        },
      });
  }
}
