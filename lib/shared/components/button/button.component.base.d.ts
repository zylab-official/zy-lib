import { EventEmitter } from '@angular/core';
import { Color } from '../../models/color.types';
import * as i0 from "@angular/core";
export declare abstract class ButtonComponentBase {
    get color(): Color;
    set color(value: Color);
    get isDisabled(): boolean;
    set isDisabled(value: boolean);
    isLoading: boolean;
    onClick: EventEmitter<Event>;
    protected _buttonColor: Color;
    protected _disabled: boolean;
    abstract clickHandler(e: Event): void;
    static ɵfac: i0.ɵɵFactoryDef<ButtonComponentBase, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ButtonComponentBase, never, never, { "color": "color"; "isDisabled": "disabled"; "isLoading": "isLoading"; }, { "onClick": "onClick"; }, never>;
}
//# sourceMappingURL=button.component.base.d.ts.map