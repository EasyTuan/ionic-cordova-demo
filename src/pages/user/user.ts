import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';

import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  //打开登录
  login() {
    const profileModal = this.modalCtrl.create(LoginPage);
    profileModal.present();
  }

}
