import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ApiService} from "../../shared/api.service";
import {ActivatedRoute} from "@angular/router";
import {AssignEquipeComponent} from "../assign-equipe/assign-equipe.component";
import {AssignContratComponent} from "../assign-contrat/assign-contrat.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-contrat-etudiant',
  templateUrl: './contrat-etudiant.component.html',
  styleUrls: ['./contrat-etudiant.component.css']
})
export class ContratEtudiantComponent implements OnInit {

  ContratsData:any=[];

  constructor(private apiService:ApiService,private ac:ActivatedRoute,private dialog: MatDialog) { }

  ngOnInit(): void {
this.fetch()
}


  openContratDialog(): void {
    var d = this.ac.snapshot.paramMap.get("id")
    this.dialog.open(AssignContratComponent, {
      data: d
    })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') {
          this.fetch();
          //the page load the data after the dialog component is closed
        }
      });
  }

  fetch(){
    console.log(this.ac.snapshot.paramMap.get("id"))
    this.apiService.getContrat(this.ac.snapshot.paramMap.get("id")).subscribe(
      (d)=>{
        console.log(d);
        this.ContratsData=d;
      }
    );
  }

}
