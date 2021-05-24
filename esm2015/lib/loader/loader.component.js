import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class LoaderComponent {
    constructor() {
        this.color = 'default';
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LoaderComponent, selectors: [["zy-loader"]], inputs: { color: "color" }, decls: 5, vars: 2, consts: [[1, "loader"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵelement(1, "span");
        i0.ɵɵelement(2, "span");
        i0.ɵɵelement(3, "span");
        i0.ɵɵelement(4, "span");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("is-primary", ctx.color === "primary");
    } }, styles: ["[_nghost-%COMP%]   .loader[_ngcontent-%COMP%]{display:inline-block;position:relative;width:20px;height:20px}@-webkit-keyframes loader-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes loader-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}[_nghost-%COMP%]   .loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{box-sizing:border-box;display:block;position:absolute;width:20px;height:20px;border-radius:50%;-webkit-animation:loader-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:loader-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border:3px solid transparent;border-top-color:#757575}[_nghost-%COMP%]   .loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}[_nghost-%COMP%]   .loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}[_nghost-%COMP%]   .loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}[_nghost-%COMP%]   .loader.is-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:3px solid transparent;border-top-color:#fff}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LoaderComponent, [{
        type: Component,
        args: [{
                selector: 'zy-loader',
                template: `
        <span class="loader" [class.is-primary]="color === 'primary'">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </span>
    `,
                styleUrls: ['./loader.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3p5LWxpYi9zcmMvbGliL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWdCMUUsTUFBTSxPQUFPLGVBQWU7SUFiNUI7UUFjYSxVQUFLLEdBQVUsU0FBUyxDQUFDO0tBQ3JDOzs4RUFGWSxlQUFlO29EQUFmLGVBQWU7UUFWcEIsK0JBQ0k7UUFBQSx1QkFBYTtRQUNiLHVCQUFhO1FBQ2IsdUJBQWE7UUFDYix1QkFBYTtRQUNqQixpQkFBTzs7UUFMYyxxREFBd0M7O2tEQVV4RCxlQUFlO2NBYjNCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7O0tBT1Q7Z0JBQ0QsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2xEO2dCQUVZLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4uL2J1dHRvbi9tb2RlbHMvY29sb3IudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3p5LWxvYWRlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsb2FkZXJcIiBbY2xhc3MuaXMtcHJpbWFyeV09XCJjb2xvciA9PT0gJ3ByaW1hcnknXCI+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWycuL2xvYWRlci5jb21wb25lbnQuc2NzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIExvYWRlckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgY29sb3I6IENvbG9yID0gJ2RlZmF1bHQnO1xufSJdfQ==