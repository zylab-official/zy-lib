import { ElementRef } from '@angular/core';
import { ButtonComponentBase } from '../shared/components/button/button.component.base';
import { SplitButtonItem } from './models/split-button-item.interface';
import * as i0 from "@angular/core";
export declare class SplitButtonComponent extends ButtonComponentBase {
    private elementRef;
    DocumentClick(event: Event): void;
    items: SplitButtonItem[];
    isSplitClosed: boolean;
    private _animationTimer;
    constructor(elementRef: ElementRef);
    clickHandler(e: Event): void;
    selectHandler(e: Event, close?: boolean): void;
    private animateSubMenu;
    static ɵfac: i0.ɵɵFactoryDef<SplitButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SplitButtonComponent, "zy-split-button", never, { "items": "items"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=split-button.component.d.ts.map