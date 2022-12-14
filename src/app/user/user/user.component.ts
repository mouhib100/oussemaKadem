import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Etudiant } from '../../models/Etudiant';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Utilisateur } from '../../models/Utilisateur';
import { ApiService } from '../../shared/api.service';
import { AddetudiantComponent } from '../../etudiant/addetudiant/addetudiant.component';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { DeleteEtudiantComponent } from '../../etudiant/delete-etudiant/delete-etudiant.component';
import { EditEtudiantComponent } from '../../etudiant/edit-etudiant/edit-etudiant.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nom',
    'prenom',
    'role',
    'createdAt',
    'lastModifiedAt',
    'action',
  ];
  dataSource!: MatTableDataSource<Utilisateur>;
  pageSize = 6;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  loading: boolean = false;

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.apiService.get('Utilisateur').subscribe((d) => {
      console.log(d);
      this.dataSource = new MatTableDataSource(d);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getColor(f: any) {
    switch (f) {
      case 'Directeur':
        return 'green';
      case 'Etudiant':
        return 'blue';
      case 'Administrateur':
        return 'red';
      case 'ChefDeClasse':
        return 'pink';
    }
    return null;
  }

  openAddDialog() {
    this.dialog
      .open(AddUserComponent, {
        height: '40%',
        width: '30%',
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
    this.apiService.get('Utilisateur').subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
    });
  }

  openDeleteDialog(f: any): void {
    this.dialog
      .open(DeleteUserComponent, {
        width: '250px',
        data: f,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'delete') {
          //the page load the data after the dialog component is closed
          this.fetch();
        }
      });
  }

  openEditDialog(f: any): void {
    console.log(f);
    this.dialog
      .open(EditUserComponent, {
        data: f,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') {
          //the page load the data after the dialog component is closed
          this.fetch();
        }
      });
  }

  showRefreshMsg(message: any) {
    this.loading = true;
    this.fetch();
    setTimeout(() => {
      this.loading = false;
      alert(message);
    }, 3000);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
