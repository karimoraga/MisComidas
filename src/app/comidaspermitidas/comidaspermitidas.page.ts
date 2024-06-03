import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonList, IonItem, IonLabel, IonButton, IonFabButton, IonFab, IonIcon, IonFabList } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { caretBackOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comidaspermitidas',
  templateUrl: './comidaspermitidas.page.html',
  styleUrls: ['./comidaspermitidas.page.scss'],
  standalone: true,
  imports: [IonFabList, IonIcon, IonFab, IonFabButton, IonButton, IonLabel, IonItem, IonList, IonCardContent, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ComidaspermitidasPage implements OnInit {
  constructor(private r: Router) {
    addIcons({caretBackOutline});
  }

  volver() { this.r.navigate(['/home']); }
  ngOnInit() {
  }

}
