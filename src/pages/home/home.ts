import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = HomePage;


  constructor(public navCtrl: NavController) {
  }

}