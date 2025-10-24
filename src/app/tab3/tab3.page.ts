import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  senha!: string;
  status!: string;
  tentativas: number = 0;
  maxTentativas: number = 3;
  botaoDesabilitado: boolean = false;


  constructor(private alertController: AlertController) {}

  login() {  
    if (this.botaoDesabilitado) {
      return;
    }
    if (this.senha == '123456') {
      this.status = 'Logado';
      this.tentativas = 0; //
    }else{
      this.tentativas++;
      const tentativasRestantes = this.maxTentativas - this.tentativas;

      if (tentativasRestantes > 0) {
        this.status = `Senha incorreta. Você tem ${tentativasRestantes} tentativas restantes.`;
      } else {
        console.log("Número máximo de tentativas atingido. Acesso bloqueado.");
          this.status = "Não Logado. Número máximo de tentativas atingido.";
        this.botaoDesabilitado = true; 
      }
    }
  }
}
