import {animate, style, transition, trigger} from "@angular/animations";

export const sideLeftAnimation =
  trigger('toLeft', [
    transition(':enter', [
      animate('.2s ease-in-out', style({
        left: 0,
        top: 0,
        bottom: 0
      }))
    ])
  ]);
