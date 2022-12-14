import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../shared/api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-etudiant',
  templateUrl: './delete-etudiant.component.html',
  styleUrls: ['./delete-etudiant.component.css']
})
export class DeleteEtudiantComponent implements OnInit {

  constructor(private apiService:ApiService,@Inject(MAT_DIALOG_DATA) public data: number,private dialogRef:MatDialogRef<DeleteEtudiantComponent>) { }

  id:number=this.data;

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.id);

  }

  delete(id: number) {
    this.apiService.delete(id,"etudiant").subscribe({
      next: (res) => {
        alert('universite deleted successfully');
        this.dialogRef.close('delete');
      },

      error: () => {
        alert('error when deleting universite');
      },
    });
  }

}
