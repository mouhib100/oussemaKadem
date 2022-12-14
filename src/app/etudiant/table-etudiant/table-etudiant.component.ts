import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../shared/api.service";
import {Etudiant} from "../../models/Etudiant";
import {AddetudiantComponent} from "../addetudiant/addetudiant.component";
import {MatDialog} from "@angular/material/dialog";
import {DeleteEtudiantComponent} from "../delete-etudiant/delete-etudiant.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {EtudiantComponent} from "../etudiant.component";
import {EditEtudiantComponent} from "../edit-etudiant/edit-etudiant.component";

@Component({
  selector: 'app-table-etudiant',
  templateUrl: './table-etudiant.component.html',
  styleUrls: ['./table-etudiant.component.css']
})
export class TableEtudiantComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nom','prenom','domaine','departement','createdAt','lastModifiedAt','action'];
  dataSource!: MatTableDataSource<Etudiant>;
  pageSize = 6;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  search:string='';

  constructor(private apiService:ApiService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.apiService.get("etudiant").subscribe(
      (d)=>{
        console.log(d);
        this.dataSource = new MatTableDataSource(d);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  openAddDialog() {
    this.dialog
      .open(AddetudiantComponent, {
        height: '60%',
        width: '50%',
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
    this.apiService.get("etudiant").subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      }
    }
    )
  }
        openDeleteDialog(f:any): void {
    this.dialog.open(DeleteEtudiantComponent, {
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

  openEditDialog(f:any): void {
    this.dialog.open(EditEtudiantComponent, {
    data:f
    })
    .afterClosed()
      .subscribe((val) => {
        if (val === 'update') {
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

