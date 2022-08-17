import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {
  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  constructor() {  }

  ngOnInit(): void {
  }
  toDisplay = true;
  cacher () {
    //console.log("ça click")
    this.toDisplay = !this.toDisplay;
    }
  
}
