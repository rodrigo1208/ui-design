import {Component} from "@angular/core";
import {buttonAnimation} from "./home.animations";
@Component ({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  animations: [buttonAnimation]
})
export class HomeComponent {

  private left = false;
  private active = 'inactive'

  toggleLeft() {
    if(this.left) {
      this.active = 'inactive';
      this.left = false;
    } else {
      this.active = 'active';
      this.left = true;
    }
  }

}
