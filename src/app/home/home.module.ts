import {NgModule} from "@angular/core";
import {NavComponent} from "./nav/nav.component";
import {SideLeftComponent} from "./side-nav-left/side_left.component";
import {ButtonsModule} from "./buttons/buttons.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from "./home.component";
import {WrapperComponent} from "./wrapper/wrapper.component";

@NgModule({
  imports: [
    ButtonsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    HomeComponent,
    WrapperComponent,
    NavComponent,
    SideLeftComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule{
}
