import {NgModule} from "@angular/core";
import {NavComponent} from "./nav/nav.component";
import {SideLeftComponent} from "./side-nav-left/side_left.component";

@NgModule({
  declarations: [
    NavComponent,
    SideLeftComponent
  ],
  exports: [
    NavComponent,
    SideLeftComponent
  ]
})
export class HomeModule{
}
