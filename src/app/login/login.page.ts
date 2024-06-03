import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonCardTitle, IonCardContent, IonInput, IonCard, IonLabel, IonButton } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonCard, IonInput, IonCardContent, IonCardTitle, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
    usuario:  string = "";
    password: string = "";

    constructor(public ac: AlertController, private r: Router) { }

    async conectar() {
        const error = await this.ac.create({
            header: "Error",
            message: "Credenciales incorrectas, intente de nuevo.",
            buttons: ['OK']
        });

        if(this.usuario == "miguel" && this.password == "1234")
        {
            this.r.navigate(['/home']);
        }
        else
        {
            await error.present();
        }
    }

    ngOnInit() {
    }

}
