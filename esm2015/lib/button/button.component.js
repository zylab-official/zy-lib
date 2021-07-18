import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonComponentBase } from '../shared/components/button/button.component.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../shared/components/loader/loader.component";
function ButtonComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngIf", "!isLoading; else loading"]);
} }
function ButtonComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "zy-loader", 5);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r2.color);
} }
function ButtonComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵprojection(1, 1);
    i0.ɵɵelementEnd();
} }
const _c0 = [[["", "icon", ""]], "*"];
const _c1 = function (a0, a1, a2, a3) { return { "is-secondary": a0, "is-round": a1, "is-outlined": a2, "is-ghost": a3 }; };
const _c2 = ["[icon]", "*"];
export class ButtonComponent extends ButtonComponentBase {
    constructor() {
        super(...arguments);
        this._buttonType = 'default';
    }
    get type() {
        return this._buttonType;
    }
    set type(value) {
        this._buttonType = value;
    }
    ;
    clickHandler(e) {
        if (this.isLoading)
            return;
        this.onClick.emit(e);
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return ɵButtonComponent_BaseFactory(t || ButtonComponent); };
ButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["zy-button"]], inputs: { type: "type" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 6, vars: 10, consts: [[1, "zy-button", 3, "ngClass", "disabled", "click"], [1, "zy-button__wrapper"], [4, "ngIf", "ngIfElse"], ["loading", ""], ["class", "title", 4, "ngIf"], [3, "color"], [1, "title"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function ButtonComponent_Template_button_click_0_listener($event) { return ctx.clickHandler($event); });
        i0.ɵɵelementStart(1, "span", 1);
        i0.ɵɵtemplate(2, ButtonComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
        i0.ɵɵtemplate(3, ButtonComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, ButtonComponent_span_5_Template, 2, 0, "span", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(5, _c1, ctx.color === "secondary", ctx.type === "round", ctx.type === "outlined", ctx.type === "ghost"))("disabled", ctx.isDisabled);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.isLoading)("ngIfElse", _r1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.type !== "round");
    } }, directives: [i1.NgClass, i1.NgIf, i2.LoaderComponent], styles: ["[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-outlined[_ngcontent-%COMP%]{display:inline-block;height:40px;border:none;line-height:1;font-weight:700;font-size:1.3em;text-align:center;outline:none;transition:background-color .15s ease-in-out;cursor:pointer}[_nghost-%COMP%]{font-size:10px}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-outlined[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;box-sizing:border-box;padding:0 10px;width:127px;border-radius:5px;background-color:#2196f3;color:#fff}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:hover{background-color:#1791f2}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:active{background-color:#0d87e9}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important;color:#ccc!important}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:active   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:active     [icon], [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:hover     [icon]{color:#ccc!important}[_nghost-%COMP%]   .zy-button__wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]{background-color:#efeeea;color:#757575}[_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:hover{background-color:#ebe9e4}[_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:active{background-color:#e6e5de}[_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important;color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled:active   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled:active     [icon], [_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled:hover     [icon]{color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]{width:40px;border-radius:50%;font-size:1.4em}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important;color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:active   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:active     [icon], [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:hover     [icon]{color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]     [icon]+.title, [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]     zy-loader+.title{margin-left:0}[_nghost-%COMP%]   .zy-button.is-outlined[_ngcontent-%COMP%]{border:1px solid #2196f3;background-color:#bbdefb;color:#2196f3}[_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]{border-color:#9e9e9e;background-color:#efeeea;color:#757575}[_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:hover{background-color:#ebe9e4}[_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:active{background-color:#e2e0d9}[_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important;color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled:active   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled:active     [icon], [_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled:hover     [icon]{color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]{background-color:transparent;color:#2196f3}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]     [icon]{transition:color .15s ease-in-out}[_nghost-%COMP%]   .zy-button.is-ghost.is-secondary[_ngcontent-%COMP%]{background-color:transparent;color:#757575}[_nghost-%COMP%]   .zy-button.is-ghost.is-secondary[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost.is-secondary[_ngcontent-%COMP%]:hover     [icon]{color:#5c5c5c}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:hover     [icon]{color:#0c7cd5}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important;color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled:active   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled:active     [icon], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled:hover     [icon]{color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled{border:none!important;background-color:transparent!important}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]     [icon]+.title, [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]     zy-loader+.title{margin-left:10px}"], changeDetection: 0 });
const ɵButtonComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(ButtonComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'zy-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { type: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3p5LWxpYi9zcmMvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvenktbGliL3NyYy9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7Ozs7SUNNaEYsNERBQTBFOzs7SUFFdEUsK0JBQXVDOzs7SUFBNUIsb0NBQWU7OztJQUU5QiwrQkFDSTtJQUFBLHFCQUF5QjtJQUM3QixpQkFBTzs7Ozs7QURIZixNQUFNLE9BQU8sZUFBZ0IsU0FBUSxtQkFBbUI7SUFOeEQ7O1FBZWMsZ0JBQVcsR0FBZSxTQUFTLENBQUM7S0FRakQ7SUFoQkcsSUFDSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUFpQjtRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQUEsQ0FBQztJQUtGLFlBQVksQ0FBQyxDQUFRO1FBQ2pCLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBRTNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O3NHQWhCUSxlQUFlO29EQUFmLGVBQWU7O1FDVjVCLGlDQU1JO1FBSEEsa0dBQVMsd0JBQW9CLElBQUM7UUFHOUIsK0JBQ0k7UUFBQSw4RUFBMEU7UUFDMUUsaUhBRWM7UUFDZCxrRUFFTztRQUNYLGlCQUFPO1FBQ1gsaUJBQVM7OztRQWJMLG9KQUFxSiw0QkFBQTtRQUtwSCxlQUFrQjtRQUFsQixxQ0FBa0IsaUJBQUE7UUFJeEMsZUFBc0I7UUFBdEIsMkNBQXNCOzs0RUREeEIsZUFBZTtrREFBZixlQUFlO2NBTjNCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2xEO2dCQUdPLElBQUk7a0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnRCYXNlIH0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuYmFzZSc7XG5pbXBvcnQgeyBCdXR0b25UeXBlIH0gZnJvbSAnLi9tb2RlbHMvYnV0dG9uLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd6eS1idXR0b24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQuc2NzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIEJ1dHRvbkNvbXBvbmVudEJhc2Uge1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHR5cGUoKTogQnV0dG9uVHlwZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9idXR0b25UeXBlO1xuICAgIH1cbiAgICBzZXQgdHlwZSh2YWx1ZTogQnV0dG9uVHlwZSkge1xuICAgICAgICB0aGlzLl9idXR0b25UeXBlID0gdmFsdWU7XG4gICAgfTtcblxuICAgIHByb3RlY3RlZCBfYnV0dG9uVHlwZTogQnV0dG9uVHlwZSA9ICdkZWZhdWx0JztcblxuXG4gICAgY2xpY2tIYW5kbGVyKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzTG9hZGluZykgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMub25DbGljay5lbWl0KGUpO1xuICAgIH1cbn0iLCI8YnV0dG9uXG4gICAgY2xhc3M9XCJ6eS1idXR0b25cIlxuICAgIFtuZ0NsYXNzXT1cInsgJ2lzLXNlY29uZGFyeSc6IGNvbG9yID09PSAnc2Vjb25kYXJ5JywgJ2lzLXJvdW5kJzogdHlwZSA9PT0gJ3JvdW5kJywgJ2lzLW91dGxpbmVkJzogdHlwZSA9PT0gJ291dGxpbmVkJywgJ2lzLWdob3N0JzogdHlwZSA9PT0gJ2dob3N0JyB9XCJcbiAgICAoY2xpY2spPVwiY2xpY2tIYW5kbGVyKCRldmVudClcIlxuICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbj5cbiAgICA8c3BhbiBjbGFzcz1cInp5LWJ1dHRvbl9fd3JhcHBlclwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbaWNvbl1cIiAqbmdJZj1cIiFpc0xvYWRpbmc7IGVsc2UgbG9hZGluZ1wiPjwvbmctY29udGVudD5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNsb2FkaW5nPlxuICAgICAgICAgICAgPHp5LWxvYWRlciBbY29sb3JdPVwiY29sb3JcIj48L3p5LWxvYWRlcj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJ0eXBlICE9PSAncm91bmQnXCIgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9zcGFuPlxuPC9idXR0b24+XG4iXX0=