import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../shared/api.service";
import {ActivatedRoute} from "@angular/router";
import {EditEtudiantComponent} from "../edit-etudiant/edit-etudiant.component";
import {MatDialog} from "@angular/material/dialog";
import {AssignEquipeComponent} from "../assign-equipe/assign-equipe.component";
import {AssignContratComponent} from "../assign-contrat/assign-contrat.component";

@Component({
  selector: 'app-equipe-etudiant',
  templateUrl: './equipe-etudiant.component.html',
  styleUrls: ['./equipe-etudiant.component.css']
})
export class EquipeEtudiantComponent implements OnInit {

  EquipesData:any=[];
  constructor(private apiService:ApiService,private ac:ActivatedRoute,private dialog: MatDialog) { }

  ngOnInit(): void {

    console.log(this.ac.snapshot.queryParamMap.get("id"));
    this.apiService.getEquipe(this.ac.snapshot.queryParamMap.get("id")).subscribe(
      (d)=>{
        console.log(d);
        this.EquipesData=d;
      }
    );
  }


  openEquipeDialog(): void {
    var d = this.ac.snapshot.queryParamMap.get("id");
    this.dialog.open(AssignEquipeComponent, {
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
    this.apiService.getEquipe(this.ac.snapshot.queryParamMap.get("id")).subscribe(
      (d)=>{
        console.log(d);
        this.EquipesData=d;
      }
    );
  }


}
