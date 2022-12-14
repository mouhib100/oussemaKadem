import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../../shared/api.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editForm!: FormGroup;
  tabd: any = [];
  bool:boolean =true;

  disabled: boolean = true;

  constructor(@Inject(MAT_DIALOG_DATA) public editData: any, private dialogRef: MatDialogRef<EditUserComponent>, private formBuilder: FormBuilder, private apiService: ApiService) {
  }

  ngOnInit(): void {

    //idCtrl = new FormControl({value: '', disabled: this.disabled})
    this.editForm = this.formBuilder.group({
      idUser: new FormControl({value: '', disabled: this.disabled}),
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      role: ['', Validators.required],
    })

    if (this.editData){
      this.editForm.controls['idUser'].setValue(this.editData.idUser)
      this.editForm.controls['nom'].setValue(this.editData.nom)
      this.editForm.controls['prenom'].setValue(this.editData.prenom)
      this.editForm.controls['role'].setValue(this.editData.role.typeRole)
    }

    if (this.editForm.value.role=="Etudiant" || this.editForm.value.role=="ChefDeClasse")
    {
      this.bool=false;
    }


  }


  EditUtilisateur(){
    this.editForm.value.idUser=this.editData.idUser;
    var d = this.editForm.value.role;
    this.editForm.value.role = {};
    this.editForm.value.role.typeRole=d;
    this.editForm.value.createdAt=this.editData.createdAt;
    this.editForm.value.lastModifiedAt=this.editData.lastModifiedAt;
    console.log(this.editForm.value.role.typeRole);
    if (this.editForm.value.role.typeRole=="ChefDeClasse" || this.editForm.value.role.typeRole=="Etudiant")
    {
      this.editForm.value.departement={};
      this.editForm.value.departement.idDepartement=this.editData.departement.idDepartement;
      this.editForm.value.domaine=this.editData.domaine;
      this.apiService
        .put(this.editForm.value,"etudiant")
        .subscribe({
          next: (res) => {
            alert('Utilisateur updated successfully');
            console.log(this.editForm.value);
            this.editForm.reset();
              this.dialogRef.close('update');
          },
          error: (err) => {
            alert('error while updating');
          },
        });
    }
    else {
    this.apiService
      .put(this.editForm.value,"Utilisateur")
      .subscribe({
        next: (res) => {
          alert('Utilisateur updated successfully');
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

}
