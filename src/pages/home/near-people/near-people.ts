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
    this.result = ""
    
        this.http.post("http://api.sanjia-soft.com:8088/apipool",{
          token:1,
          method:"getDownloadList",
          categoryId:1
        })
    
        .subscribe(res => {
    
          //返回结果，直接是json形式
    
          //this.result = res.lon;
          console.log(res);
    
        }, error => {
    
          //错误信息
    
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NearPeoplePage');
  }

  


  

}
