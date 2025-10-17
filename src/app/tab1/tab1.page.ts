import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  public entrada: number = 0;
  public saida: number = 0;

  total(): number {
    return this.entrada - this.saida;
  }
  constructor() {}

  adicionar() {
    this.entrada++;
  }

  retirar(){
    this.saida++;
  }

  obterCor(): string {
    if (this.total() > 0) {
      return 'primary';
    }else{
      return 'danger';
    }
}
}
