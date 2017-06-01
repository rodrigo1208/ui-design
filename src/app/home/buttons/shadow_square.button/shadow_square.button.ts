/**
 * Created by Inueva 04 on 31/05/2017.
 */

import {Component, Input, OnChanges, OnInit, SimpleChange} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'shadow-square',
  templateUrl: 'shadow_square.button.html',
  styleUrls: ['shadow_square.button.css']
})
export class ShadowSquareButtonComponent implements OnChanges{

  @Input() texto: string;
  @Input() icone: string;
  @Input() left: boolean = false;
  @Input() next: Array<ShadowSquareButtonComponent>;

  private col = 'col-sm-6 container-shadow-square';
  private size = '100px';

  ngOnChanges (changes: {[propKey: string]: SimpleChange}) {
    for (const propName in changes) {
      if(propName === 'left') {
        this.altera();
      }
    }
  }

  altera() {
    if(this.left) {
      this.col = 'row small';
      this.size = '50px';
    } else {
      this.col = 'col-sm-6 container-shadow-square';
      this.size = '100px';
    }
  }

}
