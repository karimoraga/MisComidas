import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSelect, IonSelectOption, IonInput, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonFab, IonIcon, IonList, IonCard, IonCardContent, IonLabel, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { caretBackOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
import { API } from '../services/api.service';

@Component({
  selector: 'app-platossugeridos',
  templateUrl: './platossugeridos.page.html',
  styleUrls: ['./platossugeridos.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonLabel, IonSelect, IonInput, IonButton, IonSelectOption, IonCardContent, IonCard, IonList, IonFab, IonIcon, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PlatossugeridosPage implements OnInit {
  calories: number = 2000;
  diet: string = "whole30";
  response?: any;
  finished: boolean = false;
  title: string = "Recetas";

  constructor(private r: Router, private api: API) { addIcons({caretBackOutline}); }

  volver() { this.r.navigate(['/home']); }

  async sugerir() {
    // Sugerir recetas
    this.title = "Cargando...";
    this.finished = false;

    this.api.generatePlan("day", this.calories, this.diet, "").then((data) => {
      this.response = data;
      this.finished = true;
      this.title = "Recetas";
    });
  }

  ngOnInit() {
  }

}
