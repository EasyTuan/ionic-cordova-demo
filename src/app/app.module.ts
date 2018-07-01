import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/**自定义服务引入 */
import {HttpModule} from "@angular/http";
import {HttpService} from "../services/httpService";

/**自定义组件引入 */
import { BbsIndexComponent } from '../components/bbs-index/bbs-index';

/**页面引入 */
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { CompanyEventsPage } from '../pages/home/company-events/company-events';
import { NearShopPage } from '../pages/home/near-shop/near-shop';
import { NearPeoplePage } from '../pages/home/near-people/near-people';


import { ToolPage } from '../pages/tool/tool';

import { PkPage } from '../pages/pk/pk';

import { BbsPage } from '../pages/bbs/bbs';


import { UserPage } from '../pages/user/user';
import { LoginPage } from '../pages/login/login';




/**native插件 */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [       //自定义组件在此引入
    MyApp,
    TabsPage,
    HomePage,
    ToolPage,
    PkPage,
    BbsPage,
    UserPage,
    CompanyEventsPage,
    NearShopPage,
    NearPeoplePage,
    LoginPage,
    BbsIndexComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',                 //返回按钮无文字，默认back
    	tabsHideOnSubPages: 'true',        //隐藏全部子页面tabs
      mode: 'ios',          							//把所有平台设置为iOS风格：
      swipeBackEnabled:true               //启用iOS滑盖即可返回功能
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    ToolPage,
    PkPage,
    BbsPage,
    UserPage,
    CompanyEventsPage,
    NearShopPage,
    NearPeoplePage,
    LoginPage
  ],
  providers: [            //自定义服务在此引入
    StatusBar,
    SplashScreen,
    HttpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
