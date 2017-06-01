import {animate, state, style, transition, trigger} from "@angular/animations";

export const sideLeftAnimation =
  trigger('toLeft', [
    state('inactive', style({})),
    state('active', style({
      top: 0,
      bottom: '0%',
      left: 0,
      width: '100px'
    })),
    transition('inactive <=> active', animate('300ms ease-out'))
  ]);

export const wrapperAnimation =
  trigger('toLeft', [
    state('inactive', style({})),
    state('active', style({
      left: '150px',
      right: 0
    })),
    transition('inactive <=> active', animate('300ms ease-out'))
  ]);

export const buttonAnimation =
  trigger('toLeft', [
    state('inactive', style({})),
    state('active', style({
      left: '110px'
    })),
    transition('inactive <=> active', animate('300ms ease-out'))
  ]);

