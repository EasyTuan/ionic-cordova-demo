import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ToolPage } from '../tool/tool';
import { PkPage } from '../pk/pk';
import { BbsPage } from '../bbs/bbs';
import { UserPage } from '../user/user'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  HomePage = HomePage;
  ToolPage = ToolPage;
  PkPage = PkPage;
  BbsPage = BbsPage;
  UserPage=UserPage;

  constructor() {

  }
}
