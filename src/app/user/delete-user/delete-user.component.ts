import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../shared/api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private apiService:ApiService,@Inject(MAT_DIALOG_DATA) public data: number,private dialogRef:MatDialogRef<DeleteUserComponent>) { }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.apiService.delete(id,"Utilisateur").subscribe({
      next: (res) => {
        alert('User deleted successfully');
        this.dialogRef.close('delete');
      },

      error: () => {
        alert('error when deleting User');
      },
    });
  }
}
