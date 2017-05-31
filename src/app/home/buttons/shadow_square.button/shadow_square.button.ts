/**
 * Created by Inueva 04 on 31/05/2017.
 */

import {Component, Input, OnInit} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'shadow-square',
  templateUrl: 'shadow_square.button.html',
  styleUrls: ['shadow_square.button.css']
})
export class ShadowSquareButtonComponent implements OnInit{

  @Input() texto: string;
  @Input() icone: string;
  @Input() next: Array<ShadowSquareButtonComponent>;

  ngOnInit () {
    console.log(this.icone);
  }

}
