import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bbs',
  templateUrl: 'bbs.html',
})
export class BbsPage {
  msg:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.msg='这是个子组件！';
    console.log('ionViewDidLoad BbsPage');
  }


}
