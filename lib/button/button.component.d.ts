import { ElementRef, EventEmitter } from '@angular/core';
import { Color } from '../shared/color-types';
import { ButtonType } from './button-settings';
import { SplitButtonItem } from './models/split-button-item';
import * as i0 from "@angular/core";
export declare class ButtonComponent {
    private elementRef;
    get type(): ButtonType;
    set type(value: ButtonType);
    get color(): Color;
    set color(value: Color);
    get isDisabled(): boolean;
    set isDisabled(value: boolean);
    items: SplitButtonItem[];
    isLoading: boolean;
    onClick: EventEmitter<Event>;
    DocumentClick(event: Event): void;
    isSplitClosed: boolean;
    private _buttonType;
    private _buttonColor;
    private _disabled;
    private _animationTimer;
    constructor(elementRef: ElementRef);
    clickHandler(e: Event): void;
    selectHandler(e: Event, close?: boolean): void;
    private animateSubMenu;
    static ɵfac: i0.ɵɵFactoryDef<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ButtonComponent, "zy-button", never, { "type": "type"; "color": "color"; "isDisabled": "disabled"; "items": "items"; "isLoading": "isLoading"; }, { "onClick": "onClick"; }, never, ["[icon]", "*", "[split-text]"]>;
}
//# sourceMappingURL=button.component.d.ts.map