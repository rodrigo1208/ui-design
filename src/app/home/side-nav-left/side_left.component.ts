import {Component, Input, OnChanges, SimpleChange} from "@angular/core";
import {sideLeftAnimation} from "../home.animations";
/**
 * Created by Inueva 04 on 30/05/2017.
 */

@Component({
  moduleId: module.id,
  selector: 'side-left',
  templateUrl: 'side_left.component.html',
  styleUrls: ['side_left.component.css'],
  animations: [sideLeftAnimation]
})
export class SideLeftComponent implements OnChanges{
  public state: string;
  @Input() public left: boolean;

  constructor() {
    this.state = 'inactive';
  }

  ngOnChanges (changes: {[propKey: string]: SimpleChange}) {
    for (const propName in changes) {
      if(propName === 'left') {
        this.toggleState();
      }
    }
  }

  toggleState() {
    if(this.left) {
      this.state = 'active';
    } else {
      this.state = 'inactive';
    }
  }

}
