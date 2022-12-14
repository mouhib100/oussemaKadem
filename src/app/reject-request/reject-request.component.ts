import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../shared/api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-reject-request',
  templateUrl: './reject-request.component.html',
  styleUrls: ['./reject-request.component.css']
})
export class RejectRequestComponent implements OnInit {

  constructor(private apiService:ApiService,@Inject(MAT_DIALOG_DATA) public data: number,private dialogRef:MatDialogRef<RejectRequestComponent>) { }

  id:number=this.data;

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.id);

  }

  delete(id: number) {
    this.apiService.deleteRequest(id,"request").subscribe({
      next: (res) => {
        alert('Request Rejected');
        this.dialogRef.close('delete');
      },

      error: () => {
        alert('error when deleting Request');
      },
    });
  }

}
