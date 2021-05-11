import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CheckboxComponent implements OnDestroy {
    set checked(checked: boolean);
    get checked(): boolean;
    indeterminate: boolean;
    autofocus: boolean;
    disabled: boolean;
    isCheckbox: boolean;
    onMouseClick(event: MouseEvent): void;
    checkedChange: EventEmitter<boolean>;
    onClick: EventEmitter<MouseEvent>;
    set checkboxRef(checkboxRef: ElementRef);
    private _checked;
    private checkbox;
    private ignoreTimeout;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<CheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CheckboxComponent, "zy-checkbox", never, { "checked": "checked"; "indeterminate": "indeterminate"; "autofocus": "autofocus"; "disabled": "disabled"; }, { "checkedChange": "checkedChange"; "onClick": "onClick"; }, never, never>;
}
//# sourceMappingURL=checkbox.component.d.ts.map