import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-updatenotif',
  templateUrl: './updatenotif.component.html',
  styleUrls: ['./updatenotif.component.css']
})
export class UpdatenotifComponent implements OnInit {

  @Output()
  RefreshNotif= new EventEmitter<string>();
  loading:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  RefreshClicked(){
    this.RefreshNotif.emit("Table Utilisateur Mise a jour")
    this.loading = true;
    setTimeout(() => {
      this.loading = false;

    }, 3000);

  }
}
