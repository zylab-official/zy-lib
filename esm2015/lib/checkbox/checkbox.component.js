import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = ["checkbox"];
export class CheckboxComponent {
    constructor() {
        this.autofocus = false;
        this.isCheckbox = true;
        this.checkedChange = new EventEmitter();
        this.onClick = new EventEmitter();
    }
    set checked(checked) {
        this._checked = checked;
        this.checkbox.checked = checked; // selection is not always updated based on the model in IE, hence explicitly setting the value via DOM
    }
    get checked() {
        return this._checked;
    }
    // handling 'click' on the element rather than on checkbox as FireFox does not trigger 'click' on checkbox if SHIFT is pressed
    onMouseClick(event) {
        if (!this.ignoreTimeout) {
            this.checkedChange.next(!this._checked);
            this.onClick.next({
                shiftKey: event.shiftKey
            });
            // 'click' event might be triggered on the label element and/or bubbled up from the checkbox element -> ignore the second event
            this.ignoreTimeout = window.setTimeout(() => {
                this.ignoreTimeout = 0;
            });
        }
        this.checkbox.checked = this.checked;
        this.checkbox.indeterminate = this.indeterminate;
        this.checkbox.focus(); // compensating for focus not being set due to [dr-prevent-default-on-mousedown]
    }
    set checkboxRef(checkboxRef) {
        this.checkbox = checkboxRef.nativeElement;
    }
    ngOnDestroy() {
        if (this.ignoreTimeout) {
            window.clearTimeout(this.ignoreTimeout);
        }
    }
}
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(); };
CheckboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["zy-checkbox"]], viewQuery: function CheckboxComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.checkboxRef = _t.first);
    } }, hostVars: 4, hostBindings: function CheckboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CheckboxComponent_click_HostBindingHandler($event) { return ctx.onMouseClick($event); });
    } if (rf & 2) {
        i0.ɵɵclassProp("is-disabled", ctx.disabled)("checkbox", ctx.isCheckbox);
    } }, inputs: { checked: "checked", indeterminate: "indeterminate", autofocus: "autofocus", disabled: "disabled" }, outputs: { checkedChange: "checkedChange", onClick: "onClick" }, decls: 2, vars: 3, consts: [["type", "checkbox", 3, "ngModel", "disabled", "indeterminate"], ["checkbox", ""]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "input", 0, 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngModel", ctx.checked)("disabled", ctx.disabled)("indeterminate", ctx.indeterminate);
    } }, directives: [i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgModel], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'zy-checkbox',
                templateUrl: './checkbox.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { checked: [{
            type: Input
        }], indeterminate: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], disabled: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.is-disabled']
        }], isCheckbox: [{
            type: HostBinding,
            args: ['class.checkbox']
        }], onMouseClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], checkedChange: [{
            type: Output
        }], onClick: [{
            type: Output
        }], checkboxRef: [{
            type: ViewChild,
            args: ['checkbox', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvenktbGliL3NyYy9saWIvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvenktbGliL3NyYy9saWIvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU83SixNQUFNLE9BQU8saUJBQWlCO0lBTDlCO1FBY2EsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUdJLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFzQnZDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUM1QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztLQWV0RDtJQWpERyxJQUFhLE9BQU8sQ0FBQyxPQUFnQjtRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBRSx1R0FBdUc7SUFDN0ksQ0FBQztJQUNELElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBT0QsOEhBQThIO0lBQzNGLFlBQVksQ0FBQyxLQUFpQjtRQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUVyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBTTtnQkFDbkIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO2FBQzNCLENBQUMsQ0FBQztZQUVILCtIQUErSDtZQUMvSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBSSxnRkFBZ0Y7SUFDOUcsQ0FBQztJQUtELElBQTZDLFdBQVcsQ0FBQyxXQUF1QjtRQUM1RSxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7SUFDOUMsQ0FBQztJQU1ELFdBQVc7UUFDUCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDM0M7SUFDTCxDQUFDOztrRkFqRFEsaUJBQWlCO3NEQUFqQixpQkFBaUI7Ozs7OztvR0FBakIsd0JBQW9COzs7O1FDUGpDLDhCQUE2Rzs7UUFBNUUscUNBQW1CLDBCQUFBLG9DQUFBOztrRERPdkMsaUJBQWlCO2NBTDdCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDbEQ7Z0JBRWdCLE9BQU87a0JBQW5CLEtBQUs7WUFPRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUVxQyxRQUFRO2tCQUFsRCxLQUFLOztrQkFBSSxXQUFXO21CQUFDLG1CQUFtQjtZQUNWLFVBQVU7a0JBQXhDLFdBQVc7bUJBQUMsZ0JBQWdCO1lBR00sWUFBWTtrQkFBOUMsWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFtQnZCLGFBQWE7a0JBQXRCLE1BQU07WUFDRyxPQUFPO2tCQUFoQixNQUFNO1lBRXNDLFdBQVc7a0JBQXZELFNBQVM7bUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd6eS1jaGVja2JveCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgc2V0IGNoZWNrZWQoY2hlY2tlZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgdGhpcy5jaGVja2JveC5jaGVja2VkID0gY2hlY2tlZDsgIC8vIHNlbGVjdGlvbiBpcyBub3QgYWx3YXlzIHVwZGF0ZWQgYmFzZWQgb24gdGhlIG1vZGVsIGluIElFLCBoZW5jZSBleHBsaWNpdGx5IHNldHRpbmcgdGhlIHZhbHVlIHZpYSBET01cbiAgICB9XG4gICAgZ2V0IGNoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICAgIH1cbiAgICBASW5wdXQoKSBpbmRldGVybWluYXRlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGF1dG9mb2N1cyA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1kaXNhYmxlZCcpIGRpc2FibGVkOiBib29sZWFuO1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuY2hlY2tib3gnKSBpc0NoZWNrYm94ID0gdHJ1ZTtcblxuICAgIC8vIGhhbmRsaW5nICdjbGljaycgb24gdGhlIGVsZW1lbnQgcmF0aGVyIHRoYW4gb24gY2hlY2tib3ggYXMgRmlyZUZveCBkb2VzIG5vdCB0cmlnZ2VyICdjbGljaycgb24gY2hlY2tib3ggaWYgU0hJRlQgaXMgcHJlc3NlZFxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25Nb3VzZUNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5pZ25vcmVUaW1lb3V0KSB7XG5cbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZENoYW5nZS5uZXh0KCF0aGlzLl9jaGVja2VkKTtcblxuICAgICAgICAgICAgdGhpcy5vbkNsaWNrLm5leHQoPGFueT57XG4gICAgICAgICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gJ2NsaWNrJyBldmVudCBtaWdodCBiZSB0cmlnZ2VyZWQgb24gdGhlIGxhYmVsIGVsZW1lbnQgYW5kL29yIGJ1YmJsZWQgdXAgZnJvbSB0aGUgY2hlY2tib3ggZWxlbWVudCAtPiBpZ25vcmUgdGhlIHNlY29uZCBldmVudFxuICAgICAgICAgICAgdGhpcy5pZ25vcmVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaWdub3JlVGltZW91dCA9IDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoZWNrYm94LmNoZWNrZWQgPSB0aGlzLmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuY2hlY2tib3guaW5kZXRlcm1pbmF0ZSA9IHRoaXMuaW5kZXRlcm1pbmF0ZTtcbiAgICAgICAgdGhpcy5jaGVja2JveC5mb2N1cygpOyAgICAvLyBjb21wZW5zYXRpbmcgZm9yIGZvY3VzIG5vdCBiZWluZyBzZXQgZHVlIHRvIFtkci1wcmV2ZW50LWRlZmF1bHQtb24tbW91c2Vkb3duXVxuICAgIH1cblxuICAgIEBPdXRwdXQoKSBjaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuXG4gICAgQFZpZXdDaGlsZCgnY2hlY2tib3gnLCB7IHN0YXRpYzogdHJ1ZSB9KSBzZXQgY2hlY2tib3hSZWYoY2hlY2tib3hSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5jaGVja2JveCA9IGNoZWNrYm94UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2hlY2tlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIGNoZWNrYm94OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgaWdub3JlVGltZW91dDogbnVtYmVyO1xuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmlnbm9yZVRpbWVvdXQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5pZ25vcmVUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCI8aW5wdXQgI2NoZWNrYm94IHR5cGU9XCJjaGVja2JveFwiIFtuZ01vZGVsXT1cImNoZWNrZWRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbaW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlXCIgLz4iXX0=