import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonCardTitle, IonCardContent, IonInput, IonCard, IonLabel, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonCard, IonInput, IonCardContent, IonCardTitle, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class LoginPage implements OnInit {
    username: string = "";
    password: string = "";

    constructor(public alertController: AlertController, private router: Router, private ngZone: NgZone, private db: DBService) {
        console.log('LoginPage component instantiated');
    }

    async conectar() {
        this.ngZone.run(async () => {
            console.log('Login function called 2');

            if(this.db.verificarUsuario(this.username, this.password))
            {
                const nombre_usuario = this.db.obtenerNombre(this.username);
                this.db.setActiveUser(nombre_usuario);
                this.router.navigate(['/home']);
            }
            else
            {
                console.log('await showErrorAlert');
                await this.showErrorAlert();
            }
        });
    }

    async registrarse() { this.router.navigate(['/registro']); }

    async showErrorAlert() {
        console.log('showErrorAlert called');
        const alert = await this.alertController.create({
            header: "Error",
            message: "Credenciales incorrectas, intente de nuevo.",
            buttons: [{
                text: 'OK',
                handler: () => {}
            }]
        });

        console.log(alert);
        await alert.present();
    }

    ngOnInit() {
        console.log('LoginPage ngOnInit');
    }

    ionViewWillEnter() {
      this.username = "";
      this.password = "";
    }
}
