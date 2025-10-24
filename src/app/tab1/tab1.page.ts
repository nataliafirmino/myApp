import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  genero: string = '';

  constructor() {}

  generoForro(){
    this.genero = 'Forró';
  }

  generoRock(){
    this.genero = 'Rock';
  }

  generoSamba(){
    this.genero = 'Samba';
  }


}
