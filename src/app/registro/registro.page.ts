import { Component, OnInit, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonCardTitle, IonCardContent, IonInput, IonCard, IonLabel, IonButton } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { DBService } from '../services/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonCard, IonInput, IonCardContent, IonCardTitle, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistroPage implements OnInit {
    username: string = "";
    password: string = "";
    nombre:   string = "";

    constructor(public alertController: AlertController, private db: DBService, private router: Router) { }

    async registrarse() { 
        // Verificar si usuario existe
        if(this.db.existeUsuario(this.username)) {
            this.alertar("Usuario ya existe.");
        } else {
            this.db.crearUsuario({username: this.username, password: this.password, nombre: this.nombre});
            this.alertar("Usuario creado!");
            this.router.navigate(['/login']);
        }
    }

    async alertar(msg: string) {
        console.log('showErrorAlert called');
        const alert = await this.alertController.create({
            header: "Información",
            message: msg,
            buttons: [{
                text: 'OK',
                handler: () => {}
            }]
        });

        console.log(alert);
        await alert.present();
    }

    ionViewWillEnter() {
      this.username = "";
      this.password = "";
      this.nombre = "";
    }

    ngOnInit() {
    }

}
