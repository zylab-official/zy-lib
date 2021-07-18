import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonComponentBase {
    constructor() {
        this.isLoading = false;
        this.onClick = new EventEmitter();
        this._buttonColor = 'primary';
        this._disabled = false;
    }
    get color() {
        return this._buttonColor;
    }
    set color(value) {
        this._buttonColor = value;
    }
    ;
    get isDisabled() {
        return this._disabled;
    }
    set isDisabled(value) {
        this._disabled = value;
    }
}
ButtonComponentBase.ɵfac = function ButtonComponentBase_Factory(t) { return new (t || ButtonComponentBase)(); };
ButtonComponentBase.ɵdir = i0.ɵɵdefineDirective({ type: ButtonComponentBase, inputs: { color: "color", isDisabled: ["disabled", "isDisabled"], isLoading: "isLoading" }, outputs: { onClick: "onClick" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonComponentBase, [{
        type: Directive
    }], null, { color: [{
            type: Input
        }], isDisabled: [{
            type: Input,
            args: ['disabled']
        }], isLoading: [{
            type: Input
        }], onClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5iYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvenktbGliL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUl2RSxNQUFNLE9BQWdCLG1CQUFtQjtJQUR6QztRQWtCYSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTFCLFlBQU8sR0FBd0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsRCxpQkFBWSxHQUFVLFNBQVMsQ0FBQztRQUNoQyxjQUFTLEdBQUcsS0FBSyxDQUFDO0tBRy9CO0lBeEJHLElBQ0ksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBWTtRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQUEsQ0FBQztJQUVGLElBQ0ksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOztzRkFmaUIsbUJBQW1CO3dEQUFuQixtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUR4QyxTQUFTO2dCQUdGLEtBQUs7a0JBRFIsS0FBSztZQVNGLFVBQVU7a0JBRGIsS0FBSzttQkFBQyxVQUFVO1lBUVIsU0FBUztrQkFBakIsS0FBSztZQUVJLE9BQU87a0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29sb3IudHlwZXMnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCdXR0b25Db21wb25lbnRCYXNlIHtcbiAgICBASW5wdXQoKVxuICAgIGdldCBjb2xvcigpOiBDb2xvciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9idXR0b25Db2xvcjtcbiAgICB9XG4gICAgc2V0IGNvbG9yKHZhbHVlOiBDb2xvcikge1xuICAgICAgICB0aGlzLl9idXR0b25Db2xvciA9IHZhbHVlO1xuICAgIH07XG5cbiAgICBASW5wdXQoJ2Rpc2FibGVkJylcbiAgICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICAgIH1cbiAgICBzZXQgaXNEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBwcm90ZWN0ZWQgX2J1dHRvbkNvbG9yOiBDb2xvciA9ICdwcmltYXJ5JztcbiAgICBwcm90ZWN0ZWQgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgICBhYnN0cmFjdCBjbGlja0hhbmRsZXIoZTogRXZlbnQpOiB2b2lkO1xufSJdfQ==