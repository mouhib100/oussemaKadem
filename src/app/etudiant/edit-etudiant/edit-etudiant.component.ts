import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../../shared/api.service";

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {
  isValid:boolean=true;
editForm!:FormGroup;
tabd:any=[];


  disabled: boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public editData:any,private dialogRef:MatDialogRef<EditEtudiantComponent>,private formBuilder:FormBuilder,private apiService: ApiService) { }

  ngOnInit(): void {

    //idCtrl = new FormControl({value: '', disabled: this.disabled})
    this.editForm=this.formBuilder.group({
      idUser : new FormControl({value: '', disabled: this.disabled}),
      prenom:['',[Validators.required,Validators.minLength(3)]],
      nom:['',[Validators.required,Validators.minLength(3)]],
      departement:['',Validators.required],
      domaine:['',Validators.required],
  })
    console.log(this.editData)


    if (this.editData){
      this.editForm.controls['idUser'].setValue(this.editData.idUser)
      this.editForm.controls['nom'].setValue(this.editData.nom)
      this.editForm.controls['prenom'].setValue(this.editData.prenom)
      this.editForm.controls['domaine'].setValue(this.editData.domaine)
      this.editForm.controls['departement'].setValue(this.editData.departement.idDepartement)
      this.getDepartement()
      console.log(this.tabd);
    }
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

  EditEtudiant(){
    this.editForm.value.idUser=this.editData.idUser;
    let d = this.editForm.value.departement;
    this.editForm.value.departement = {};
    this.editForm.value.departement.idDepartement = d;
    this.editForm.value.role = {};
    this.editForm.value.role.typeRole=this.editData.role.typeRole;
    this.editForm.value.createdAt=this.editData.createdAt;
    this.apiService
      .put(this.editForm.value,"etudiant")
      .subscribe({
        next: (res) => {
          alert('Etudiant updated successfully');
          console.log(this.editForm.value);
          this.editForm.reset();
          this.dialogRef.close('update');
        },
        error: (err) => {
          alert('error while updating');
        },
      });
  }
  }
