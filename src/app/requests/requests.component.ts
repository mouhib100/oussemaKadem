import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Etudiant} from "../models/Etudiant";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ApiService} from "../shared/api.service";
import {MatDialog} from "@angular/material/dialog";
import {AddetudiantComponent} from "../etudiant/addetudiant/addetudiant.component";
import {DeleteEtudiantComponent} from "../etudiant/delete-etudiant/delete-etudiant.component";
import {EditEtudiantComponent} from "../etudiant/edit-etudiant/edit-etudiant.component";
import {Request} from "../models/Request";
import {RequestDialogComponent} from "../request-dialog/request-dialog.component";
import {RejectRequestComponent} from "../reject-request/reject-request.component";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(private apiService:ApiService,private dialog: MatDialog) { }


  displayedColumns: string[] = ['id', 'username','nom','prenom','action'];
  dataSource!: MatTableDataSource<Request>;
  pageSize = 6;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  search:string='';


  ngOnInit(): void {
    this.apiService.get("request").subscribe(
      (d)=>{
        console.log(d);
        this.dataSource = new MatTableDataSource(d);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  openAcceptDialog(f:any) {
    this.dialog
      .open(RequestDialogComponent, {
        height: '30%',
        width: '20%',
        data:f
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') {
          //the page load the data after the dialog component is closed
          this.fetch();
        }
      });
  }

  fetch() {
    this.apiService.get("request").subscribe({
        next: (res) => {
          console.log(res);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
        }
      }
    )
  }
  openDeleteDialog(f:any): void {
    this.dialog.open(RejectRequestComponent, {
      width: '250px',
      data: f
    })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'delete') {
          //the page load the data after the dialog component is closed
          this.fetch();
        }
      });
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
