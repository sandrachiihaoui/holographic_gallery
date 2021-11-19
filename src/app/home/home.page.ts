import { Component } from '@angular/core';
import { NavController  } from '@ionic/angular';
import { storage, initializeApp } from 'firebase';
import { FIREBASE_CONFIG } from '../firebase.config';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    initializeApp(FIREBASE_CONFIG);

  }
    
}
