import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tool',
  templateUrl: 'tool.html',
})
export class ToolPage {

  items:any=[{name:'精灵战争'},{name:'奥奇传说'}];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i=0;i<this.items.length;i++){
      this.items[i]['status']=true;  //默认展开为true
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ToolPage');
  }
 
}
