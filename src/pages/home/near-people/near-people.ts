import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpService } from "../../../services/httpService";


@IonicPage()
@Component({
  selector: 'page-near-people',
  templateUrl: 'near-people.html',
})
export class NearPeoplePage implements OnInit{

 result: string='222';

  constructor(public navCtrl: NavController, public navParams: NavParams ,private http: HttpService) {
  }

  ngOnInit() {
    this.http.request("/Store/getStoreDetail",{
      storeid:285
    },(r)=>{
      console.log(r);
      this.result=JSON.stringify(r);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NearPeoplePage');
  }

  


  

}
