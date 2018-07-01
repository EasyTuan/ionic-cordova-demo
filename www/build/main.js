webpackJsonp([0],{

/***/ 138:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 138;

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tool_tool__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pk_pk__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bbs_bbs__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.HomePage = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.ToolPage = __WEBPACK_IMPORTED_MODULE_2__tool_tool__["a" /* ToolPage */];
        this.PkPage = __WEBPACK_IMPORTED_MODULE_3__pk_pk__["a" /* PkPage */];
        this.BbsPage = __WEBPACK_IMPORTED_MODULE_4__bbs_bbs__["a" /* BbsPage */];
        this.UserPage = __WEBPACK_IMPORTED_MODULE_5__user_user__["a" /* UserPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\git\kidApp\src\pages\tabs\tabs.html"*/'<ion-tabs class="myIcon">\n\n  <ion-tab [root]="HomePage" tabTitle="首页" tabIcon="icon-home"></ion-tab>\n\n  <ion-tab [root]="ToolPage" tabTitle="工具" tabIcon="icon-tool"></ion-tab>\n\n  <ion-tab [root]="PkPage" tabTitle="PK" tabIcon="icon-pk"></ion-tab>\n\n  <ion-tab [root]="BbsPage" tabTitle="论坛" tabIcon="icon-forum"></ion-tab>\n\n  <ion-tab [root]="UserPage" tabTitle="我的" tabIcon="icon-me1"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"E:\git\kidApp\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_company_events_company_events__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_near_shop_near_shop__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_near_people_near_people__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CompanyEventsPage = __WEBPACK_IMPORTED_MODULE_2__home_company_events_company_events__["a" /* CompanyEventsPage */];
        this.NearShopPage = __WEBPACK_IMPORTED_MODULE_3__home_near_shop_near_shop__["a" /* NearShopPage */];
        this.NearPeoplePage = __WEBPACK_IMPORTED_MODULE_4__home_near_people_near_people__["a" /* NearPeoplePage */];
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.slides.startAutoplay();
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.slides.stopAutoplay();
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\git\kidApp\src\pages\home\home.html"*/'<ion-content>\n\n  <!-- 轮播 -->\n\n  <div class="slides" style="height:180px">\n\n    <ion-slides [pager]="true" [loop]="true" [autoplay]="3000">\n\n      <ion-slide>\n\n        <img src="assets/images/banner.png" alt="">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img src="assets/images/banner.png" alt="">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img src="assets/images/banner.png" alt="">\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n\n\n  <!-- 官方资讯、附近店铺... -->\n\n  <ion-grid text-center class="bgWhite">\n\n    <ion-row>\n\n      <ion-col col-3 [navPush]="CompanyEventsPage">\n\n        <img class="menuImg" src="assets/images/homepage_icon_nformation.png" alt=""> 官方资讯\n\n      </ion-col>\n\n      <ion-col col-3 [navPush]="NearShopPage">\n\n        <img class="menuImg" src="assets/images/homepage_icon_nearly shop.png" alt=""> 附近店铺\n\n      </ion-col>\n\n      <ion-col col-3 [navPush]="NearPeoplePage">\n\n        <img class="menuImg" src="assets/images/homepage_icon_people nearly.png" alt=""> 附近的人\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <img class="menuImg" src="assets/images/homepage_icon_scan.png" alt=""> 扫一扫\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <!-- 资讯 -->\n\n  <div class="bgWhite">\n\n    <h6 text-center padding-top>—— 最新资讯 ——</h6>\n\n    <div>\n\n      <img src="assets/images/shouye.png" alt="">\n\n      <h5>笑说独游</h5>\n\n      <p>叽里呱啦瓜拉吉来叽里呱啦瓜拉吉来叽里呱啦瓜拉吉来叽里呱啦瓜拉吉来</p>\n\n    </div>\n\n    <div>\n\n      <img src="assets/images/shouye2.png" alt="">\n\n      <h5>笑说独游</h5>\n\n      <p>叽里呱啦瓜拉吉来叽里呱啦瓜拉吉来叽里呱啦瓜拉吉来叽里呱啦瓜拉吉来</p>\n\n    </div>\n\n    <div>\n\n      <img src="assets/images/shouye.png" alt="">\n\n      <h5>笑说独游</h5>\n\n      <p>叽里呱啦瓜拉吉来叽里呱啦瓜拉吉来叽里呱啦瓜拉吉来叽里呱啦瓜拉吉来</p>\n\n    </div>\n\n  </div>\n\n\n\n  <p text-center>~到底了~</p>\n\n</ion-content>'/*ion-inline-end:"E:\git\kidApp\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyEventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CompanyEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompanyEventsPage = (function () {
    function CompanyEventsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CompanyEventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompanyEventsPage');
    };
    return CompanyEventsPage;
}());
CompanyEventsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-company-events',template:/*ion-inline-start:"E:\git\kidApp\src\pages\home\company-events\company-events.html"*/'<ion-header no-border>\n\n\n\n  <ion-navbar>\n\n    <ion-title>官方资讯</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only>\n\n        <span class="iconfont icon-searchIcon1"></span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div class="bgWhite">\n\n      <h6 text-center padding-top>—— 最新资讯 ——</h6>\n\n      <div>\n\n        <img src="assets/images/shouye.png" alt="">\n\n        <h5>笑说独游</h5>\n\n        <p>叽里呱啦瓜拉吉来叽里呱啦瓜拉吉来叽里呱啦瓜拉吉来叽里呱啦瓜拉吉来</p>\n\n      </div>\n\n      <div>\n\n        <img src="assets/images/shouye2.png" alt="">\n\n        <h5>笑说独游</h5>\n\n        <p>叽里呱啦瓜拉吉来叽里呱啦瓜拉吉来叽里呱啦瓜拉吉来叽里呱啦瓜拉吉来</p>\n\n      </div>\n\n      <div>\n\n        <img src="assets/images/shouye.png" alt="">\n\n        <h5>笑说独游</h5>\n\n        <p>叽里呱啦瓜拉吉来叽里呱啦瓜拉吉来叽里呱啦瓜拉吉来叽里呱啦瓜拉吉来</p>\n\n      </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\git\kidApp\src\pages\home\company-events\company-events.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], CompanyEventsPage);

//# sourceMappingURL=company-events.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NearShopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NearShopPage = (function () {
    function NearShopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [1, 1, 1, 1, 1];
    }
    NearShopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NearShopPage');
    };
    //下拉刷新
    NearShopPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            for (var i = 0; i < 3; i++) {
                _this.items.push(_this.items.length);
            }
            console.log('Async operation has ended');
            refresher.complete();
        }, 1500);
    };
    //上拉加载
    NearShopPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 3; i++) {
                _this.items.push(_this.items.length);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1500);
    };
    return NearShopPage;
}());
NearShopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-near-shop',template:/*ion-inline-start:"E:\git\kidApp\src\pages\home\near-shop\near-shop.html"*/'<ion-header no-border>\n\n\n\n  <ion-navbar>\n\n    <ion-searchbar placeholder="输入店铺名称"></ion-searchbar>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only>\n\n        <span class="iconfont icon-map"></span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content margin-top>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="arrow-dropdown"\n\n      pullingText="下拉刷新"\n\n      refreshingSpinner="circles"\n\n      refreshingText="正在加载...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let items of items;let i = index;">\n\n      <ion-avatar item-start>\n\n        <img src="assets/images/defuser.jpg">\n\n      </ion-avatar>\n\n      <h2>小明文具 {{i+1}}<button ion-button float-right outline>查看对战</button></h2>\n\n      <p class="font12">\n\n        <span class="scorewarp1">\n\n          <i style="width: calc(4.2 * 13px);"></i>\n\n        </span>\n\n        &nbsp;4.2分\n\n        <span float-right >距离6457m</span>\n\n      </p>\n\n    </ion-item>\n\n  </ion-list>\n\n  \n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content\n\n    loadingSpinner="bubbles"\n\n    loadingText="正在加载..."></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n  \n\n</ion-content>'/*ion-inline-end:"E:\git\kidApp\src\pages\home\near-shop\near-shop.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], NearShopPage);

//# sourceMappingURL=near-shop.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NearPeoplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_httpService__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NearPeoplePage = (function () {
    function NearPeoplePage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.result = '222';
    }
    NearPeoplePage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.request("/Store/getStoreDetail", {
            storeid: 285
        }, function (r) {
            console.log(r);
            _this.result = JSON.stringify(r);
        });
    };
    NearPeoplePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NearPeoplePage');
    };
    return NearPeoplePage;
}());
NearPeoplePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-near-people',template:/*ion-inline-start:"E:\git\kidApp\src\pages\home\near-people\near-people.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-searchbar placeholder="输入好友昵称"></ion-searchbar>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only>\n\n        <span class="iconfont icon-map"></span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <p>ajax测试{{result}}</p>\n\n</ion-content>'/*ion-inline-end:"E:\git\kidApp\src\pages\home\near-people\near-people.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_httpService__["a" /* HttpService */]])
], NearPeoplePage);

//# sourceMappingURL=near-people.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_throw__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ts_md5_dist_md5__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HttpService = (function () {
    function HttpService(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.DOMAIN = 'http://kidapi.kayou110.com/public/?_url='; //api连接前缀
    }
    HttpService.prototype.request = function (method, data, success) {
        var _this = this;
        data.hmac = this.md5sign(data);
        console.log(data);
        return this.http.post(this.DOMAIN + method, this.toQueryString(data), {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            })
        })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            success(res);
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "请求失败：" + error,
                duration: 2000,
                position: 'top'
            });
            toast.present();
            console.log("请求失败：" + error);
        });
    };
    HttpService.prototype.md5sign = function (parm) {
        var signstr = "";
        for (var p in parm) {
            signstr += "+" + parm[p];
        }
        signstr = signstr.replace("+", "");
        //log(signstr);
        var md5str = __WEBPACK_IMPORTED_MODULE_11_ts_md5_dist_md5__["Md5"].hashStr(signstr);
        return md5str;
    };
    //参数序列化  
    HttpService.prototype.toQueryString = function (obj) {
        var result = [];
        for (var key in obj) {
            key = encodeURIComponent(key);
            var values = obj[key];
            if (values && values.constructor == Array) {
                var queryValues = [];
                for (var i = 0, len = values.length, value = void 0; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                result = result.concat(queryValues);
            }
            else {
                result.push(this.toQueryPair(key, values));
            }
        }
        return result.join('&');
    };
    HttpService.prototype.toQueryPair = function (key, value) {
        if (typeof value == 'undefined') {
            return key;
        }
        return key + '=' + encodeURIComponent(value === null ? '' : String(value));
    };
    return HttpService;
}());
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* ToastController */]])
], HttpService);

//# sourceMappingURL=httpService.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolPage = (function () {
    function ToolPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [{ name: '精灵战争' }, { name: '奥奇传说' }];
        for (var i = 0; i < this.items.length; i++) {
            this.items[i]['status'] = true; //默认展开为true
        }
    }
    ToolPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ToolPage');
    };
    return ToolPage;
}());
ToolPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tool',template:/*ion-inline-start:"E:\git\kidApp\src\pages\tool\tool.html"*/'<ion-header no-border>\n\n\n\n  <ion-navbar>\n\n    <ion-title>工具</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only>\n\n        <span class="iconfont icon-manage"></span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content margin-top>\n\n  <ion-list *ngFor="let items of items;let i=index;" class="marginBotton0">\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="assets/images/defuser.jpg">\n\n      </ion-avatar>\n\n      <h2>{{items.name}}\n\n        <button ion-button float-right outline *ngIf="items.status" (click)="items.status=!items.status">收起</button>\n\n        <button ion-button float-right outline *ngIf="!items.status" (click)="items.status=!items.status">展开</button>\n\n      </h2>\n\n    </ion-item>\n\n    <ion-grid text-center class="bgWhite" *ngIf=\'items.status\'>\n\n        <ion-row class="carsList">\n\n          <ion-col col-3>\n\n            <img class="menuImg" src="assets/images/searchcard.png" alt="">\n\n            单卡查询\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <img class="menuImg" src="assets/images/collectcard.png" alt="">\n\n            单卡收藏\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <img class="menuImg" src="assets/images/cards.png" alt="">\n\n            套牌广场\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <img class="menuImg" src="assets/images/mycards.png" alt="">\n\n            我的套牌\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\git\kidApp\src\pages\tool\tool.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ToolPage);

//# sourceMappingURL=tool.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PkPage = (function () {
    function PkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pet = "all";
    }
    PkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PkPage');
    };
    return PkPage;
}());
PkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pk',template:/*ion-inline-start:"E:\git\kidApp\src\pages\pk\pk.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>战帖列表</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar>\n\n    <ion-segment [(ngModel)]="pet" mode="md">\n\n      <ion-segment-button value="all">\n\n        全部\n\n      </ion-segment-button>\n\n      <ion-segment-button value="new">\n\n        最新\n\n      </ion-segment-button>\n\n      <ion-segment-button value="friends">\n\n        好友参加\n\n      </ion-segment-button>\n\n      <ion-segment-button value="meLaunch">\n\n        我发起的\n\n      </ion-segment-button>\n\n    </ion-segment>   \n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content>\n\n  <div [ngSwitch]="pet">\n\n    <ion-list *ngSwitchCase="\'all\'">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/images/defuser.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Ruby</h2>\n\n        <p>咕噜...</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/images/defuser.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Ruby</h2>\n\n        <p>咕噜...</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/images/defuser.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Ruby</h2>\n\n        <p>咕噜...</p>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'new\'">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/images/defuser.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Luna</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\git\kidApp\src\pages\pk\pk.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], PkPage);

//# sourceMappingURL=pk.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BbsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BbsPage = (function () {
    function BbsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BbsPage.prototype.ionViewDidLoad = function () {
        this.msg = '这是个子组件！';
        console.log('ionViewDidLoad BbsPage');
    };
    return BbsPage;
}());
BbsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bbs',template:/*ion-inline-start:"E:\git\kidApp\src\pages\bbs\bbs.html"*/'<ion-header no-border>\n\n\n\n  <ion-navbar>\n\n    <ion-title>论坛</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <bbs-index [msg]="msg"></bbs-index>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\git\kidApp\src\pages\bbs\bbs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], BbsPage);

//# sourceMappingURL=bbs.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserPage = (function () {
    function UserPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    //打开登录
    UserPage.prototype.login = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        profileModal.present();
    };
    return UserPage;
}());
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"E:\git\kidApp\src\pages\user\user.html"*/'<ion-content>\n\n  <div text-center class="login" (click)=\'login()\'>\n\n    <img src="assets/images/defuser.jpg" alt="">\n\n    <p>请先登录/注册</p>\n\n  </div>\n\n  <ion-list margin-top>\n\n    <button ion-item>\n\n      我的比赛\n\n    </button>\n\n    <button ion-item margin-top>\n\n      通讯录\n\n    </button>\n\n    <button ion-item>\n\n      个人信息\n\n    </button>\n\n    <button ion-item margin-top>\n\n      设置\n\n    </button>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\git\kidApp\src\pages\user\user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
], UserPage);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginPage = (function () {
    function LoginPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"E:\git\kidApp\src\pages\login\login.html"*/'<ion-header>\n\n\n  <ion-navbar>\n    <ion-title>帐号密码登录</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="onClose()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons right>\n      <button ion-button icon-only>\n        注册\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bgWhite">\n  <ion-item>\n    <ion-input type="number" placeholder="请输入手机号"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input type="text" placeholder="请输入密码"></ion-input>\n  </ion-item>\n  <button ion-button block>登录</button>\n  <p>\n    <span float-left>忘记密码</span>\n    <span float-right>手机登录</span>\n  </p>\n</ion-content>'/*ion-inline-end:"E:\git\kidApp\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(273);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_httpService__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_bbs_index_bbs_index__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_company_events_company_events__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_near_shop_near_shop__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_near_people_near_people__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tool_tool__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pk_pk__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_bbs_bbs__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_user_user__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**自定义服务引入 */


/**自定义组件引入 */

/**页面引入 */










/**native插件 */


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tool_tool__["a" /* ToolPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_pk_pk__["a" /* PkPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_bbs_bbs__["a" /* BbsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_company_events_company_events__["a" /* CompanyEventsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_near_shop_near_shop__["a" /* NearShopPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_near_people_near_people__["a" /* NearPeoplePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__components_bbs_index_bbs_index__["a" /* BbsIndexComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                backButtonText: '',
                tabsHideOnSubPages: 'true',
                mode: 'ios',
                swipeBackEnabled: true //启用iOS滑盖即可返回功能
            }, {
                links: [
                    { loadChildren: '../pages/bbs/bbs.module#BbsPageModule', name: 'BbsPage', segment: 'bbs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/company-events/company-events.module#CompanyEventsPageModule', name: 'CompanyEventsPage', segment: 'company-events', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/near-people/near-people.module#NearPeoplePageModule', name: 'NearPeoplePage', segment: 'near-people', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/near-shop/near-shop.module#NearShopPageModule', name: 'NearShopPage', segment: 'near-shop', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pk/pk.module#PkPageModule', name: 'PkPage', segment: 'pk', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tool/tool.module#ToolPageModule', name: 'ToolPage', segment: 'tool', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tool_tool__["a" /* ToolPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_pk_pk__["a" /* PkPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_bbs_bbs__["a" /* BbsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_company_events_company_events__["a" /* CompanyEventsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_near_shop_near_shop__["a" /* NearShopPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_near_people_near_people__["a" /* NearPeoplePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__services_httpService__["a" /* HttpService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\git\kidApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\git\kidApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BbsIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the BbsIndexComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BbsIndexComponent = (function () {
    function BbsIndexComponent() {
    }
    return BbsIndexComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], BbsIndexComponent.prototype, "msg", void 0);
BbsIndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'bbs-index',template:/*ion-inline-start:"E:\git\kidApp\src\components\bbs-index\bbs-index.html"*/'<!-- Generated template for the BbsIndexComponent component -->\n<div>\n  {{msg}}\n</div>\n'/*ion-inline-end:"E:\git\kidApp\src\components\bbs-index\bbs-index.html"*/
    }),
    __metadata("design:paramtypes", [])
], BbsIndexComponent);

//# sourceMappingURL=bbs-index.js.map

/***/ })

},[268]);
//# sourceMappingURL=main.js.map