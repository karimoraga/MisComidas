import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonFab, IonIcon, IonList, IonCard, IonCardContent, IonLabel, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { caretBackOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platossugeridos',
  templateUrl: './platossugeridos.page.html',
  styleUrls: ['./platossugeridos.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonLabel, IonCardContent, IonCard, IonList, IonFab, IonIcon, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PlatossugeridosPage implements OnInit {

  constructor(private r: Router) { addIcons({caretBackOutline}); }

  volver() { this.r.navigate(['/home']); }
  ngOnInit() {
  }

}
