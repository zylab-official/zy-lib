import { ButtonComponentBase } from '../shared/components/button/button.component.base';
import { ButtonType } from './models/button.types';
import * as i0 from "@angular/core";
export declare class ButtonComponent extends ButtonComponentBase {
    get type(): ButtonType;
    set type(value: ButtonType);
    protected _buttonType: ButtonType;
    clickHandler(e: Event): void;
    static ɵfac: i0.ɵɵFactoryDef<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ButtonComponent, "zy-button", never, { "type": "type"; }, {}, never, ["[icon]", "*"]>;
}
//# sourceMappingURL=button.component.d.ts.map