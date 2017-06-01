import {Component, Input, OnChanges, SimpleChange} from "@angular/core";
import {wrapperAnimation} from "../home.animations";

@Component({
  moduleId: module.id,
  selector: 'wrapper',
  templateUrl: 'wrapper.component.html',
  styleUrls: ['wrapper.component.css'],
  animations: [wrapperAnimation]
})
export class WrapperComponent implements OnChanges{
  @Input() left: boolean;
  private active: string;

  ngOnChanges (changes: {[propKey: string]: SimpleChange}) {
    for (const propName in changes) {
      if(propName === 'left') {
        this.toggleLeft();
      }
    }
  }

  toggleLeft() {
    if(this.left) {
      this.active = 'active';
    } else {
      this.active = 'inactive';
    }
  }

}
