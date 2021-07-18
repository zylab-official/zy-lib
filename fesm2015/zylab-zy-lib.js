import * as i0 from '@angular/core';
import { EventEmitter, Directive, Input, Output, Component, ChangeDetectionStrategy, NgModule, HostBinding, HostListener, ViewChild, Injectable } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

class ButtonComponentBase {
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

// @TODO: MOVE TO LOADERS MODULE
class LoaderComponent {
    constructor() {
        this.color = 'primary';
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
    } }, styles: ["[_nghost-%COMP%]   .loader[_ngcontent-%COMP%]{display:inline-block;position:relative;width:20px;height:20px}@-webkit-keyframes loader-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes loader-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}[_nghost-%COMP%]   .loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{box-sizing:border-box;display:block;position:absolute;width:20px;height:20px;border-radius:50%;-webkit-animation:loader-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:loader-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border:3px solid transparent;border-top-color:#fff}[_nghost-%COMP%]   .loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}[_nghost-%COMP%]   .loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}[_nghost-%COMP%]   .loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}[_nghost-%COMP%]   .loader.is-secondary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:3px solid transparent;border-top-color:#757575}"], changeDetection: 0 });
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
const _c0$3 = [[["", "icon", ""]], "*"];
const _c1$2 = function (a0, a1, a2, a3) { return { "is-secondary": a0, "is-round": a1, "is-outlined": a2, "is-ghost": a3 }; };
const _c2 = ["[icon]", "*"];
class ButtonComponent extends ButtonComponentBase {
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
        i0.ɵɵprojectionDef(_c0$3);
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
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(5, _c1$2, ctx.color === "secondary", ctx.type === "round", ctx.type === "outlined", ctx.type === "ghost"))("disabled", ctx.isDisabled);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.isLoading)("ngIfElse", _r1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.type !== "round");
    } }, directives: [i1.NgClass, i1.NgIf, LoaderComponent], styles: ["[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-outlined[_ngcontent-%COMP%]{display:inline-block;height:40px;border:none;line-height:1;font-weight:700;font-size:1.3em;text-align:center;outline:none;transition:background-color .15s ease-in-out;cursor:pointer}[_nghost-%COMP%]{font-size:10px}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-outlined[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;box-sizing:border-box;padding:0 10px;width:127px;border-radius:5px;background-color:#2196f3;color:#fff}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:hover{background-color:#1791f2}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:active{background-color:#0d87e9}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important;color:#ccc!important}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:active   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:active     [icon], [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:hover     [icon]{color:#ccc!important}[_nghost-%COMP%]   .zy-button__wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]{background-color:#efeeea;color:#757575}[_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:hover{background-color:#ebe9e4}[_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:active{background-color:#e6e5de}[_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important;color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled:active   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled:active     [icon], [_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled:hover     [icon]{color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]{width:40px;border-radius:50%;font-size:1.4em}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important;color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:active   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:active     [icon], [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:hover     [icon]{color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]     [icon]+.title, [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]     zy-loader+.title{margin-left:0}[_nghost-%COMP%]   .zy-button.is-outlined[_ngcontent-%COMP%]{border:1px solid #2196f3;background-color:#bbdefb;color:#2196f3}[_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]{border-color:#9e9e9e;background-color:#efeeea;color:#757575}[_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:hover{background-color:#ebe9e4}[_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:active{background-color:#e2e0d9}[_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important;color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled:active   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled:active     [icon], [_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled:hover     [icon]{color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]{background-color:transparent;color:#2196f3}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]     [icon]{transition:color .15s ease-in-out}[_nghost-%COMP%]   .zy-button.is-ghost.is-secondary[_ngcontent-%COMP%]{background-color:transparent;color:#757575}[_nghost-%COMP%]   .zy-button.is-ghost.is-secondary[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost.is-secondary[_ngcontent-%COMP%]:hover     [icon]{color:#5c5c5c}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:hover     [icon]{color:#0c7cd5}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important;color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled:active   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled:active     [icon], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled:hover     [icon]{color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled{border:none!important;background-color:transparent!important}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]     [icon]+.title, [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]     zy-loader+.title{margin-left:10px}"], changeDetection: 0 });
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

class ButtonModule {
}
ButtonModule.ɵmod = i0.ɵɵdefineNgModule({ type: ButtonModule });
ButtonModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ButtonModule, { declarations: [ButtonComponent,
        LoaderComponent], imports: [CommonModule], exports: [ButtonComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    ButtonComponent,
                    LoaderComponent
                ],
                exports: [
                    ButtonComponent,
                ]
            }]
    }], null, null); })();

const _c0$2 = ["checkbox"];
class CheckboxComponent {
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
        i0.ɵɵstaticViewQuery(_c0$2, true);
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
    } }, directives: [i1$1.CheckboxControlValueAccessor, i1$1.NgControlStatus, i1$1.NgModel], encapsulation: 2, changeDetection: 0 });
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

class CheckboxModule {
}
CheckboxModule.ɵmod = i0.ɵɵdefineNgModule({ type: CheckboxModule });
CheckboxModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CheckboxModule_Factory(t) { return new (t || CheckboxModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CheckboxModule, { declarations: [CheckboxComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule], exports: [CheckboxComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                declarations: [
                    CheckboxComponent
                ],
                exports: [
                    CheckboxComponent,
                ]
            }]
    }], null, null); })();

function PageTitleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelementStart(4, "div");
    i0.ɵɵelementStart(5, "div", 4);
    i0.ɵɵelementStart(6, "div", 5);
    i0.ɵɵelementStart(7, "span", 6);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 7);
    i0.ɵɵprojection(10, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 8);
    i0.ɵɵprojection(12, 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 7);
    i0.ɵɵprojection(14, 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div");
    i0.ɵɵelementStart(16, "div", 9);
    i0.ɵɵprojection(17, 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
const _c0$1 = [[["", "page-title-icon", ""]], [["", "page-title-extra", ""]], [["", "page-title-content-centered", ""]], [["", "page-title-content-right", ""]], [["", "page-title-subheader", ""]]];
const _c1$1 = ["[page-title-icon]", "[page-title-extra]", "[page-title-content-centered]", "[page-title-content-right]", "[page-title-subheader]"];
// import { Title } from '@angular/platform-browser';
// import { ActivatedRoute } from '@angular/router';
// import { ErrorDisplayService, PageTitle, PageTitleService } from 'app/core';
// import { empty, of, Subscription } from 'rxjs';
// import { filter, switchMap, tap } from 'rxjs/operators';
class PageTitleComponent /* implements OnInit, OnDestroy */ {
}
PageTitleComponent.ɵfac = function PageTitleComponent_Factory(t) { return new (t || PageTitleComponent /* implements OnInit, OnDestroy */)(); };
PageTitleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PageTitleComponent /* implements OnInit, OnDestroy */, selectors: [["page-title"]], inputs: { title: "title" }, ngContentSelectors: _c1$1, decls: 1, vars: 1, consts: [["class", "columns is-mobile", 4, "ngIf"], [1, "columns", "is-mobile"], [1, "column", "is-narrow", "is-icon"], [1, "column", "is-wide"], [1, "columns", "page-title", "is-gapless", "is-mobile", "is-centered"], [1, "column", "page-title-text", "is-narrow"], ["data-test-page-title", ""], [1, "column", "is-narrow"], [1, "column", "has-text-centered"], [1, "columns", "is-gapless", "is-mobile"]], template: function PageTitleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0$1);
        i0.ɵɵtemplate(0, PageTitleComponent_div_0_Template, 18, 1, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.inactive);
    } }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PageTitleComponent /* implements OnInit, OnDestroy */, [{
        type: Component,
        args: [{
                selector: 'page-title',
                templateUrl: './page-title.component.html',
                styleUrls: ['./page-title.component.scss']
            }]
    }], null, { title: [{
            type: Input
        }] }); })();

class PageTitleModule {
}
PageTitleModule.ɵmod = i0.ɵɵdefineNgModule({ type: PageTitleModule });
PageTitleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PageTitleModule_Factory(t) { return new (t || PageTitleModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PageTitleModule, { declarations: [PageTitleComponent], exports: [PageTitleComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PageTitleModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    PageTitleComponent
                ],
                exports: [
                    PageTitleComponent
                ]
            }]
    }], null, null); })();

function SplitButtonComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "\u25BE");
    i0.ɵɵelementContainerEnd();
} }
function SplitButtonComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "\u25B4");
    i0.ɵɵelementContainerEnd();
} }
function SplitButtonComponent_ng_container_7_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "button", 8);
    i0.ɵɵlistener("click", function SplitButtonComponent_ng_container_7_div_2_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r6); const item_r4 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(2); item_r4.onClick && item_r4.onClick($event); return ctx_r5.selectHandler($event, true); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", item_r4.isDisabled || !item_r4.onClick);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r4.title);
} }
function SplitButtonComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, SplitButtonComponent_ng_container_7_div_2_Template, 3, 2, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.items);
} }
const _c0 = function (a0) { return { "is-secondary": a0 }; };
const _c1 = ["*"];
class SplitButtonComponent extends ButtonComponentBase {
    constructor(elementRef) {
        super();
        this.elementRef = elementRef;
        this.items = [];
        this.isSplitClosed = true;
    }
    DocumentClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.selectHandler(event, true);
        }
    }
    clickHandler(e) {
        if (this.isLoading)
            return;
        this.selectHandler(e, true);
        this.onClick.emit(e);
    }
    selectHandler(e, close) {
        this.isSplitClosed = close || !this.isSplitClosed;
        if (!this.isSplitClosed)
            this.animateSubMenu();
    }
    animateSubMenu() {
        if (this._animationTimer)
            clearTimeout(this._animationTimer);
        this._animationTimer = setTimeout(() => {
            var _a;
            (_a = this.elementRef.nativeElement.querySelector('.sub-menu')) === null || _a === void 0 ? void 0 : _a.classList.add('is-opening');
        }, 0);
    }
}
SplitButtonComponent.ɵfac = function SplitButtonComponent_Factory(t) { return new (t || SplitButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
SplitButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SplitButtonComponent, selectors: [["zy-split-button"]], hostBindings: function SplitButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function SplitButtonComponent_click_HostBindingHandler($event) { return ctx.DocumentClick($event); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { items: "items" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 8, vars: 8, consts: [[1, "zy-split-button", 3, "ngClass"], [1, "zy-split-button__wrapper"], [1, "zy-split-button__left-part", 3, "disabled", "click"], [1, "zy-split-button__right-part", 3, "disabled", "click"], [4, "ngIf"], [1, "sub-menu"], ["class", "sub-menu__item item", 4, "ngFor", "ngForOf"], [1, "sub-menu__item", "item"], [1, "item__button", 3, "disabled", "click"]], template: function SplitButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "button", 2);
        i0.ɵɵlistener("click", function SplitButtonComponent_Template_button_click_2_listener($event) { return ctx.clickHandler($event); });
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 3);
        i0.ɵɵlistener("click", function SplitButtonComponent_Template_button_click_4_listener($event) { return ctx.selectHandler($event); });
        i0.ɵɵtemplate(5, SplitButtonComponent_ng_container_5_Template, 2, 0, "ng-container", 4);
        i0.ɵɵtemplate(6, SplitButtonComponent_ng_container_6_Template, 2, 0, "ng-container", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, SplitButtonComponent_ng_container_7_Template, 3, 1, "ng-container", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, ctx.color === "secondary"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.isDisabled);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.isDisabled || !ctx.items.length);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isSplitClosed);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isSplitClosed);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.items.length && !ctx.isSplitClosed);
    } }, directives: [i1.NgClass, i1.NgIf, i1.NgForOf], styles: ["[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-outlined[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{display:inline-block;height:40px;border:none;line-height:1;font-weight:700;font-size:1.3em;text-align:center;outline:none;transition:background-color .15s ease-in-out;cursor:pointer}[_nghost-%COMP%]{font-size:10px}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-outlined[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;box-sizing:border-box;padding:0 10px;width:127px;border-radius:5px;background-color:#2196f3;color:#fff}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:hover{background-color:#1791f2}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:active{background-color:#0d87e9}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important;color:#ccc!important}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:active   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:active     [icon], [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:hover     [icon]{color:#ccc!important}[_nghost-%COMP%]   .zy-button__wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]{background-color:#efeeea;color:#757575}[_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:hover{background-color:#ebe9e4}[_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:active{background-color:#e6e5de}[_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important;color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled:active   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled:active     [icon], [_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-secondary[_ngcontent-%COMP%]:disabled:hover     [icon]{color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]{width:40px;border-radius:50%;font-size:1.4em}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important;color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:active   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:active     [icon], [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:hover     [icon]{color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]     [icon]+.title, [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]     zy-loader+.title{margin-left:0}[_nghost-%COMP%]   .zy-button.is-outlined[_ngcontent-%COMP%]{border:1px solid #2196f3;background-color:#bbdefb;color:#2196f3}[_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]{border-color:#9e9e9e;background-color:#efeeea;color:#757575}[_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:hover{background-color:#ebe9e4}[_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:active{background-color:#e2e0d9}[_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important;color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled:active   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled:active     [icon], [_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-outlined.is-secondary[_ngcontent-%COMP%]:disabled:hover     [icon]{color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]{background-color:transparent;color:#2196f3}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]     [icon]{transition:color .15s ease-in-out}[_nghost-%COMP%]   .zy-button.is-ghost.is-secondary[_ngcontent-%COMP%]{background-color:transparent;color:#757575}[_nghost-%COMP%]   .zy-button.is-ghost.is-secondary[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost.is-secondary[_ngcontent-%COMP%]:hover     [icon]{color:#5c5c5c}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:hover     [icon]{color:#0c7cd5}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important;color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled:active   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled:active     [icon], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled:hover     [icon]{color:#ccc!important}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:disabled{border:none!important;background-color:transparent!important}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]     [icon]+.title, [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]     zy-loader+.title{margin-left:10px}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]{position:relative;z-index:20;display:inline-block;color:#fff}[_nghost-%COMP%]   .zy-split-button__wrapper[_ngcontent-%COMP%]{position:relative;z-index:30;display:flex;align-items:center}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{padding:0 10px;width:127px;border-radius:5px 0 0 5px;background-color:#2196f3;color:inherit;font-size:1.3em}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:hover{background-color:#1791f2}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:active, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:active{background-color:#0e8df2}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;background-color:#fff!important;color:#ccc!important;cursor:default}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:disabled:hover, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important;color:#ccc!important}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:disabled:active   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:disabled:active     [icon], [_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:disabled:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:disabled:hover     [icon], [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:disabled:active   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:disabled:active     [icon], [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:disabled:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:disabled:hover     [icon]{color:#ccc!important}[_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{width:40px;border-radius:0 5px 5px 0;border-left:1px solid #fff;font-size:1.8em}[_nghost-%COMP%]   .zy-split-button.is-secondary[_ngcontent-%COMP%]{color:#757575}[_nghost-%COMP%]   .zy-split-button.is-secondary[_ngcontent-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button.is-secondary[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{background-color:#efeeea}[_nghost-%COMP%]   .zy-split-button.is-secondary[_ngcontent-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .zy-split-button.is-secondary[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:hover{background-color:#ebe9e4}[_nghost-%COMP%]   .zy-split-button.is-secondary[_ngcontent-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:active, [_nghost-%COMP%]   .zy-split-button.is-secondary[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:active{background-color:#e2e0d9}[_nghost-%COMP%]   .zy-split-button.is-secondary[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{background-color:#efeeea}[_nghost-%COMP%]   .zy-split-button.is-secondary[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:hover{background-color:#ebe9e4}[_nghost-%COMP%]   .zy-split-button.is-secondary[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:active{background-color:#e2e0d9}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{position:absolute;top:100%;z-index:10;box-sizing:border-box;margin-top:-10px;width:100%;color:#000;border:1px solid #ccc;border-radius:3px;font-size:1.3em;line-height:1;transform:translateY(-7px);opacity:.45;transition:all .15s ease-in-out}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu.is-opening[_ngcontent-%COMP%]{transform:translateY(7px);opacity:1}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu__item[_ngcontent-%COMP%]{background-color:#fff;border-bottom:1px solid #ccc}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu__item[_ngcontent-%COMP%]:last-child{border-bottom:none}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[_ngcontent-%COMP%]{display:block;padding:10px 5px;margin:0;width:100%;background:none;background-color:#fff;border:none;transition:background-color .15s ease-in-out;outline:none;cursor:pointer}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,80%,.56)}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[_ngcontent-%COMP%]:active{background-color:#cbcbcb}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[disabled][_ngcontent-%COMP%]{cursor:default}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[disabled][_ngcontent-%COMP%]:hover{background-color:#fff}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SplitButtonComponent, [{
        type: Component,
        args: [{
                selector: 'zy-split-button',
                templateUrl: './split-button.component.html',
                styleUrls: ['./split-button.component.scss']
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { DocumentClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }], items: [{
            type: Input
        }] }); })();

class SplitButtonModule {
}
SplitButtonModule.ɵmod = i0.ɵɵdefineNgModule({ type: SplitButtonModule });
SplitButtonModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SplitButtonModule_Factory(t) { return new (t || SplitButtonModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SplitButtonModule, { declarations: [SplitButtonComponent], imports: [CommonModule], exports: [SplitButtonComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SplitButtonModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SplitButtonComponent
                ],
                exports: [
                    SplitButtonComponent,
                ]
            }]
    }], null, null); })();

class ZyLibModule {
}
ZyLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: ZyLibModule });
ZyLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ZyLibModule_Factory(t) { return new (t || ZyLibModule)(); }, imports: [[
            ButtonModule,
            SplitButtonModule,
            PageTitleModule,
            CheckboxModule,
        ], ButtonModule,
        SplitButtonModule,
        CheckboxModule,
        PageTitleModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ZyLibModule, { imports: [ButtonModule,
        SplitButtonModule,
        PageTitleModule,
        CheckboxModule], exports: [ButtonModule,
        SplitButtonModule,
        CheckboxModule,
        PageTitleModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ZyLibModule, [{
        type: NgModule,
        args: [{
                imports: [
                    ButtonModule,
                    SplitButtonModule,
                    PageTitleModule,
                    CheckboxModule,
                ],
                exports: [
                    ButtonModule,
                    SplitButtonModule,
                    CheckboxModule,
                    PageTitleModule
                ]
            }]
    }], null, null); })();

class ZyLibService {
    constructor() { }
}
ZyLibService.ɵfac = function ZyLibService_Factory(t) { return new (t || ZyLibService)(); };
ZyLibService.ɵprov = i0.ɵɵdefineInjectable({ token: ZyLibService, factory: ZyLibService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ZyLibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/*
 * Public API Surface of zy-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonModule, CheckboxComponent, CheckboxModule, PageTitleComponent, PageTitleModule, SplitButtonComponent, SplitButtonModule, ZyLibModule, ZyLibService };
//# sourceMappingURL=zylab-zy-lib.js.map
