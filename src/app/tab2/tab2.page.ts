import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(private alertController: AlertController) {}

  nota1!: number;
  nota2!: number;
  nota3!: number;
  nota4!: number;
  resultado: string = '';
  media: number = 0;

  async calcular(){
    this.resultado = '';

    if (this.nota1 == null || isNaN(this.nota1 ) ||
        this.nota2 == null || isNaN(this.nota2 ) ||
        this.nota3 == null || isNaN(this.nota3 ) ||
        this.nota4 == null || isNaN(this.nota4 )) {
          await this.mostrarAlerta("Erro", "Por favor, insira todas as notas.");
          return;
      }

    if (this.nota1 < 0 || this.nota1 > 10 ||
        this.nota2 < 0 || this.nota2 > 10 ||
        this.nota3 < 0 || this.nota3 > 10 ||
        this.nota4 < 0 || this.nota4 > 10) {
          await this.mostrarAlerta("Erro", "As notas devem estar entre 0 e 10.");
          return;
        } 
    
    this.media = this.nota1 + this.nota2+ this.nota3 + this.nota4
    this.media = this.media / 4
    if(this.media >= 7){
      this.resultado = "Aprovado"
    } else if(this.media >= 2){
      this.resultado = "Reprovado"
    };
  } 

  obterCor(): string{
    if (this.resultado === "Aprovado"){
      return "success";
    } else if (this.resultado === "Recuperação"){
      return "warning";
    } else {
      return "danger";
    }
  }

  async mostrarAlerta(titulo: string, mensagem: string){
    const alerta = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });
    await alerta.present();
  }

}
 