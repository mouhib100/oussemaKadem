import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../shared/api.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-etudiant-departement',
  templateUrl: './etudiant-departement.component.html',
  styleUrls: ['./etudiant-departement.component.css']
})
export class EtudiantDepartementComponent implements OnInit {

  EtudiantsData:any=[];
  constructor(private apiService:ApiService,private ac:ActivatedRoute,private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.ac.snapshot.queryParamMap.get("id"));
    this.apiService.getEtudiantDepartement(this.ac.snapshot.queryParamMap.get("id")).subscribe(
      (d)=>{
        console.log(d);
        this.EtudiantsData=d;
      }
    );
  }

  }

