import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-etudiant-domaine',
  templateUrl: './etudiant-domaine.component.html',
  styleUrls: ['./etudiant-domaine.component.css']
})
export class EtudiantDomaineComponent implements OnInit {

  @Input()
  data:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
