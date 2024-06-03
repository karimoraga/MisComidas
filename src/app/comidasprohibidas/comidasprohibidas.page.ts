import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonCard, IonFab, IonIcon, IonCardContent, IonList, IonLabel, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { caretBackOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comidasprohibidas',
  templateUrl: './comidasprohibidas.page.html',
  styleUrls: ['./comidasprohibidas.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonLabel, IonList, IonCardContent, IonCard, IonFab, IonItem, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ComidasprohibidasPage implements OnInit {

  constructor(private r: Router) { addIcons({caretBackOutline}); }

  volver() { this.r.navigate(['/home']); }
  ngOnInit() {
  }

}
