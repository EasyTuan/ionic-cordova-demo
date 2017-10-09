import { Component ,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,Slides } from 'ionic-angular';

import { CompanyEventsPage } from "../home/company-events/company-events";
import { NearShopPage } from "../home/near-shop/near-shop";
import { NearPeoplePage } from "../home/near-people/near-people";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild(Slides) slides: Slides; //轮播

  CompanyEventsPage=CompanyEventsPage;
  NearShopPage=NearShopPage;
  NearPeoplePage=NearPeoplePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.slides.startAutoplay();
  }
  ionViewWillLeave(){
    this.slides.stopAutoplay();
  }

  


}
