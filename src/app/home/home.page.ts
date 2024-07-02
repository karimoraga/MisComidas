import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonLabel, IonInput, IonItem, IonSelectOption, IonCardTitle, IonCardContent, IonButton, IonList } from '@ionic/angular/standalone';
import { IonSelect } from '@ionic/angular';
import { Router } from '@angular/router';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonList, IonButton, IonCardContent, IonCardTitle, IonItem, IonInput, IonLabel, IonCard, IonHeader, IonToolbar, IonTitle, IonContent],
})

export class HomePage {
    usuario: string = "";
    
    constructor(private r:Router, private db: DBService) {}

    comidaspermitidas() { this.r.navigate(['/comidaspermitidas']); }
    comidasprohibidas() { this.r.navigate(['/comidasprohibidas']); }
    platossugeridos() { this.r.navigate(['/platossugeridos']); }

    logout() {
      this.db.setActiveUser("");
      this.r.navigate(['/login']);
    }

    ngOnInit() {
        this.usuario = this.db.getActiveUser() ?? "N/A";
    }
}
