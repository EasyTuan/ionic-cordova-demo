import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpService } from "../../../services/httpService";


@IonicPage()
@Component({
  selector: 'page-near-people',
  templateUrl: 'near-people.html',
})
export class NearPeoplePage {

  result: string;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private http: HttpService) {
    this.result = "";

    this.http.request("/Store/getStoreDetail",{
      storeid:285
    },function(r){
      console.log(r);
      this.result=JSON.stringify(r);
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NearPeoplePage');
  }

  


  

}
