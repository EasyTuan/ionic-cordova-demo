import { Component , Input} from '@angular/core';

/**
 * Generated class for the BbsIndexComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bbs-index',
  templateUrl: 'bbs-index.html'
})
export class BbsIndexComponent {

  @Input() msg:string;

  constructor() {
  }

}
