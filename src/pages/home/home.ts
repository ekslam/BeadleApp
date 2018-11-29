import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = HomePage;

  getInfo = {
    name : '',
    userPhoto: '',
    email: '',
    loggedin: false
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getInfo.name = this.navParams.get('name')
    this.getInfo.userPhoto = this.navParams.get('userPhoto')
    this.getInfo.email = this.navParams.get('email')
    this.getInfo.loggedin = this.navParams.get('loggedin')
  }

  ionViewLoad() {
    console.log(this.getInfo.name + " " + this.getInfo.userPhoto + " " + this.getInfo.email + " " + this.getInfo.loggedin)
  }

}