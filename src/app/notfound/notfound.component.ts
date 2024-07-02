import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss'],
  standalone: true,
  imports: [ IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader ],
})
export class NotfoundComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
