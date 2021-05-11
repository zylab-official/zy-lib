import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../loader/loader.component";
function ButtonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 5);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(6);
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
} }
function ButtonComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 5);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function ButtonComponent_ng_template_3_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngIf", "!isLoading; else loading"]);
} }
function ButtonComponent_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "zy-loader", 11);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", ctx_r8.color);
} }
const _c0 = function (a0, a1, a2, a3) { return { "is-accent": a0, "is-round": a1, "is-outlined": a2, "is-ghost": a3 }; };
function ButtonComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function ButtonComponent_ng_template_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.clickHandler($event); });
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵtemplate(2, ButtonComponent_ng_template_3_ng_content_2_Template, 1, 0, "ng-content", 8);
    i0.ɵɵtemplate(3, ButtonComponent_ng_template_3_ng_template_3_Template, 1, 1, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(5, "span", 10);
    i0.ɵɵprojection(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r7 = i0.ɵɵreference(4);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(4, _c0, ctx_r3.color === "accent", ctx_r3.type === "round", ctx_r3.type === "outlined", ctx_r3.type === "ghost"))("disabled", ctx_r3.isDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r3.isLoading)("ngIfElse", _r7);
} }
function ButtonComponent_ng_template_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "\u25BE");
    i0.ɵɵelementContainerEnd();
} }
function ButtonComponent_ng_template_5_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "\u25B4");
    i0.ɵɵelementContainerEnd();
} }
function ButtonComponent_ng_template_5_ng_container_7_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelementStart(1, "button", 20);
    i0.ɵɵlistener("click", function ButtonComponent_ng_template_5_ng_container_7_div_2_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r17); const item_r15 = ctx.$implicit; const ctx_r16 = i0.ɵɵnextContext(3); item_r15.onClick && item_r15.onClick($event); return ctx_r16.selectHandler($event, true); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", item_r15.isDisabled || !item_r15.onClick);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r15.title);
} }
function ButtonComponent_ng_template_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 17);
    i0.ɵɵtemplate(2, ButtonComponent_ng_template_5_ng_container_7_div_2_Template, 3, 2, "div", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r13.items);
} }
const _c1 = function (a0) { return { "is-accent": a0 }; };
function ButtonComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "div", 13);
    i0.ɵɵelementStart(2, "button", 14);
    i0.ɵɵlistener("click", function ButtonComponent_ng_template_5_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.clickHandler($event); });
    i0.ɵɵprojection(3, 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 15);
    i0.ɵɵlistener("click", function ButtonComponent_ng_template_5_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.selectHandler($event); });
    i0.ɵɵtemplate(5, ButtonComponent_ng_template_5_ng_container_5_Template, 2, 0, "ng-container", 16);
    i0.ɵɵtemplate(6, ButtonComponent_ng_template_5_ng_container_6_Template, 2, 0, "ng-container", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ButtonComponent_ng_template_5_ng_container_7_Template, 3, 1, "ng-container", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c1, ctx_r5.color === "accent"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r5.isDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r5.isDisabled || !ctx_r5.items.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isSplitClosed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.isSplitClosed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.items.length && !ctx_r5.isSplitClosed);
} }
const _c2 = ["*", [["", "icon", ""]], [["", "split-text", ""]]];
const _c3 = ["*", "[icon]", "[split-text]"];
export class ButtonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.items = [];
        this.isLoading = false;
        this.onClick = new EventEmitter();
        this.isSplitClosed = true;
        this._buttonType = 'default';
        this._buttonColor = 'default';
        this._disabled = false;
    }
    get type() {
        return this._buttonType;
    }
    set type(value) {
        console.log(value);
        this._buttonType = value;
    }
    ;
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
    DocumentClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.selectHandler(event, true);
        }
    }
    clickHandler(e) {
        if (this.isLoading)
            return;
        if (this.type === 'split') {
            this.selectHandler(e, true);
        }
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
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["zy-button"]], hostBindings: function ButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function ButtonComponent_click_HostBindingHandler($event) { return ctx.DocumentClick($event); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { type: "type", color: "color", isDisabled: ["disabled", "isDisabled"], items: "items", isLoading: "isLoading" }, outputs: { onClick: "onClick" }, ngContentSelectors: _c3, decls: 7, vars: 2, consts: [[3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [3, "ngTemplateOutlet", 4, "ngSwitchDefault"], ["SimpleButton", ""], ["SplitButton", ""], [3, "ngTemplateOutlet"], [1, "zy-button", 3, "ngClass", "disabled", "click"], [1, "zy-button__wrapper"], [4, "ngIf", "ngIfElse"], ["loading", ""], [1, "title"], [3, "color"], [1, "zy-split-button", 3, "ngClass"], [1, "zy-split-button__wrapper"], [1, "zy-split-button__left-part", 3, "disabled", "click"], [1, "zy-split-button__right-part", 3, "disabled", "click"], [4, "ngIf"], [1, "sub-menu"], ["class", "sub-menu__item item", 4, "ngFor", "ngForOf"], [1, "sub-menu__item", "item"], [1, "item__button", 3, "disabled", "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c2);
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, ButtonComponent_ng_container_1_Template, 1, 1, "ng-container", 1);
        i0.ɵɵtemplate(2, ButtonComponent_ng_container_2_Template, 1, 1, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(3, ButtonComponent_ng_template_3_Template, 7, 9, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, ButtonComponent_ng_template_5_Template, 8, 8, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "split");
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgTemplateOutlet, i1.NgClass, i1.NgIf, i2.LoaderComponent, i1.NgForOf], styles: ["[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-outlined[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{display:inline-block;height:40px;border:none;line-height:1;font-weight:700;font-size:1.3em;text-align:center;outline:none;transition:background-color .15s ease-in-out;cursor:pointer}[_nghost-%COMP%]{font-size:10px}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-outlined[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;box-sizing:border-box;padding:0 10px;width:127px;border-radius:5px;background-color:#efeeea;color:#757575}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:hover{background-color:#ebe9e4}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:active{background-color:#e6e5de}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;color:#ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important}[_nghost-%COMP%]   .zy-button__wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .zy-button.is-accent[_ngcontent-%COMP%]{background-color:#2196f3;color:#fff}[_nghost-%COMP%]   .zy-button.is-accent[_ngcontent-%COMP%]:hover{background-color:#1791f2}[_nghost-%COMP%]   .zy-button.is-accent[_ngcontent-%COMP%]:active{background-color:#0d87e9}[_nghost-%COMP%]   .zy-button.is-accent[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;background-color:#fff!important;color:#ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-accent[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-accent[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]{width:40px;border-radius:50%;font-size:1.4em}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;background-color:#fff!important;color:#ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]     [icon]+.title, [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]     zy-loader+.title{margin-left:0}[_nghost-%COMP%]   .zy-button.is-outlined[_ngcontent-%COMP%]{border:1px solid #9e9e9e}[_nghost-%COMP%]   .zy-button.is-outlined.is-accent[_ngcontent-%COMP%]{border-color:#2196f3;background-color:#bbdefb;color:#2196f3}[_nghost-%COMP%]   .zy-button.is-outlined.is-accent[_ngcontent-%COMP%]:hover{background-color:#b1d9fa}[_nghost-%COMP%]   .zy-button.is-outlined.is-accent[_ngcontent-%COMP%]:active{background-color:#9ed0f9}[_nghost-%COMP%]   .zy-button.is-outlined.is-accent[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;background-color:#fff!important;color:#ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-outlined.is-accent[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-outlined.is-accent[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]{background-color:transparent}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]     [icon]{transition:color .15s ease-in-out}[_nghost-%COMP%]   .zy-button.is-ghost.is-accent[_ngcontent-%COMP%]{background-color:transparent;color:#2196f3}[_nghost-%COMP%]   .zy-button.is-ghost.is-accent[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost.is-accent[_ngcontent-%COMP%]:hover     [icon]{color:#0c7cd5}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:hover     [icon]{color:#5c5c5c}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]     [icon]+.title, [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]     zy-loader+.title{margin-left:10px}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]{position:relative;z-index:20;display:inline-block;color:#757575}[_nghost-%COMP%]   .zy-split-button__wrapper[_ngcontent-%COMP%]{position:relative;z-index:30;display:flex;align-items:center}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{padding:0 10px;width:127px;border-radius:5px 0 0 5px;background-color:#efeeea;color:inherit;font-size:1.3em}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:hover{background-color:#ebe9e4}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:active, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:active{background-color:#e6e5de}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;background-color:#fff!important;color:#ccc!important;cursor:default}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:disabled:hover, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important}[_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{width:40px;border-radius:0 5px 5px 0;border-left:1px solid #fff;font-size:1.8em}[_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{background-color:#2196f3}[_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:hover{background-color:#1791f2}[_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:active, [_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:active{background-color:#0d87e9}[_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{background-color:#2196f3}[_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:hover{background-color:#1791f2}[_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:active{background-color:#0d87e9}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{position:absolute;top:100%;z-index:10;box-sizing:border-box;margin-top:-10px;width:100%;color:#000;border:1px solid #ccc;border-radius:3px;font-size:1.3em;line-height:1;transform:translateY(-7px);opacity:.45;transition:all .15s ease-in-out}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu.is-opening[_ngcontent-%COMP%]{transform:translateY(7px);opacity:1}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu__item[_ngcontent-%COMP%]{background-color:#fff;border-bottom:1px solid #ccc}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu__item[_ngcontent-%COMP%]:last-child{border-bottom:none}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[_ngcontent-%COMP%]{display:block;padding:10px 5px;margin:0;width:100%;background:none;background-color:#fff;border:none;transition:background-color .15s ease-in-out;outline:none;cursor:pointer}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,80%,.56)}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[_ngcontent-%COMP%]:active{background-color:#cbcbcb}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[disabled][_ngcontent-%COMP%]{cursor:default}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[disabled][_ngcontent-%COMP%]:hover{background-color:#fff}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'zy-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { type: [{
            type: Input
        }], color: [{
            type: Input
        }], isDisabled: [{
            type: Input,
            args: ['disabled']
        }], items: [{
            type: Input
        }], isLoading: [{
            type: Input
        }], onClick: [{
            type: Output
        }], DocumentClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3p5LWxpYi9zcmMvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvenktbGliL3NyYy9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNDdEgsMkJBQXNGOzs7O0lBQWhELHNDQUFnQzs7O0lBQ3RFLDJCQUFnRjs7OztJQUFqRCxzQ0FBaUM7OztJQVl4RCw0REFBMEU7OztJQUV0RSxnQ0FBdUM7OztJQUE1QixvQ0FBZTs7Ozs7SUFUdEMsaUNBTUk7SUFIQSwwTUFBOEI7SUFHOUIsK0JBQ0k7SUFBQSw0RkFBMEU7SUFDMUUsK0hBRWM7SUFDZCxnQ0FDSTtJQUFBLGtCQUF5QjtJQUM3QixpQkFBTztJQUNYLGlCQUFPO0lBQ1gsaUJBQVM7Ozs7SUFiTCw2SkFBK0ksK0JBQUE7SUFLOUcsZUFBa0I7SUFBbEIsd0NBQWtCLGlCQUFBOzs7SUFvQi9DLDZCQUFvQztJQUFBLHNCQUFPO0lBQUEsMEJBQWU7OztJQUMxRCw2QkFBcUM7SUFBQSxzQkFBTztJQUFBLDBCQUFlOzs7O0lBSzNELCtCQUNJO0lBQUEsa0NBQXdKO0lBQTdFLCtPQUF5Qix3QkFBcUIsdUNBQXdCLElBQUksS0FBRTtJQUFDLFlBQWdCO0lBQUEsaUJBQVM7SUFDckwsaUJBQU07OztJQUQyQixlQUE2QztJQUE3QyxtRUFBNkM7SUFBOEUsZUFBZ0I7SUFBaEIsb0NBQWdCOzs7SUFIcEwsNkJBQ0k7SUFBQSwrQkFDSTtJQUFBLDhGQUVNO0lBQ1YsaUJBQU07SUFDViwwQkFBZTs7O0lBSmUsZUFBUTtJ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QyxZQUFZLEVBQUU7UUFDMUYsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7OEVBeEVRLGVBQWU7b0RBQWYsZUFBZTtrR0FBZix5QkFDVjs7O1FDWkgsZ0NBQ0k7UUFBQSxrRkFBc0Y7UUFDdEYsa0ZBQWdGO1FBQ3BGLDBCQUFlO1FBR2YsaUhBaUJjO1FBSWQsaUhBbUJjOztRQTlDQSxtQ0FBaUI7UUFDWixlQUFxQjtRQUFyQixzQ0FBcUI7O2tERFUzQixlQUFlO2NBTjNCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2xEOzZEQUdPLElBQUk7a0JBRFAsS0FBSztZQVVGLEtBQUs7a0JBRFIsS0FBSztZQVNGLFVBQVU7a0JBRGIsS0FBSzttQkFBQyxVQUFVO1lBUVIsS0FBSztrQkFBYixLQUFLO1lBRUcsU0FBUztrQkFBakIsS0FBSztZQUVJLE9BQU87a0JBQWhCLE1BQU07WUFHUCxhQUFhO2tCQURaLFlBQVk7bUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLi9zaGFyZWQvY29sb3ItdHlwZXMnO1xuaW1wb3J0IHsgQnV0dG9uVHlwZSB9IGZyb20gJy4vYnV0dG9uLXNldHRpbmdzJztcbmltcG9ydCB7IFNwbGl0QnV0dG9uSXRlbSB9IGZyb20gJy4vbW9kZWxzL3NwbGl0LWJ1dHRvbi1pdGVtJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd6eS1idXR0b24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQuc2NzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG4gICAgQElucHV0KClcbiAgICBnZXQgdHlwZSgpOiBCdXR0b25UeXBlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1dHRvblR5cGU7XG4gICAgfVxuICAgIHNldCB0eXBlKHZhbHVlOiBCdXR0b25UeXBlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgICAgICB0aGlzLl9idXR0b25UeXBlID0gdmFsdWU7XG4gICAgfTtcblxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGNvbG9yKCk6IENvbG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1dHRvbkNvbG9yO1xuICAgIH1cbiAgICBzZXQgY29sb3IodmFsdWU6IENvbG9yKSB7XG4gICAgICAgIHRoaXMuX2J1dHRvbkNvbG9yID0gdmFsdWU7XG4gICAgfTtcblxuICAgIEBJbnB1dCgnZGlzYWJsZWQnKVxuICAgIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuICAgIHNldCBpc0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgQElucHV0KCkgaXRlbXM6IFNwbGl0QnV0dG9uSXRlbVtdID0gW107XG5cbiAgICBASW5wdXQoKSBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICAgIERvY3VtZW50Q2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RIYW5kbGVyKGV2ZW50LCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzU3BsaXRDbG9zZWQgPSB0cnVlO1xuXG4gICAgcHJpdmF0ZSBfYnV0dG9uVHlwZTogQnV0dG9uVHlwZSA9ICdkZWZhdWx0JztcbiAgICBwcml2YXRlIF9idXR0b25Db2xvcjogQ29sb3IgPSAnZGVmYXVsdCc7XG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9hbmltYXRpb25UaW1lcjogYW55O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICAgICkgeyB9XG5cbiAgICBjbGlja0hhbmRsZXIoZTogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb2FkaW5nKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3NwbGl0Jykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RIYW5kbGVyKGUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkNsaWNrLmVtaXQoZSk7XG4gICAgfVxuXG4gICAgc2VsZWN0SGFuZGxlcihlOiBFdmVudCwgY2xvc2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNTcGxpdENsb3NlZCA9IGNsb3NlIHx8ICF0aGlzLmlzU3BsaXRDbG9zZWQ7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzU3BsaXRDbG9zZWQpIHRoaXMuYW5pbWF0ZVN1Yk1lbnUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFuaW1hdGVTdWJNZW51KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fYW5pbWF0aW9uVGltZXIpIGNsZWFyVGltZW91dCh0aGlzLl9hbmltYXRpb25UaW1lcik7XG5cbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWItbWVudScpPy5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuaW5nJyk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cbn0iLCI8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0eXBlXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3NwbGl0J1wiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIlNwbGl0QnV0dG9uXCI+PC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0IFtuZ1RlbXBsYXRlT3V0bGV0XT1cIlNpbXBsZUJ1dHRvblwiPjwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG5cbjwhLS0gQ29tbW9uIEJ1dHRvbiAtLT5cbjxuZy10ZW1wbGF0ZSAjU2ltcGxlQnV0dG9uPlxuICAgIDxidXR0b25cbiAgICAgICAgY2xhc3M9XCJ6eS1idXR0b25cIlxuICAgICAgICBbbmdDbGFzc109XCJ7ICdpcy1hY2NlbnQnOiBjb2xvciA9PT0gJ2FjY2VudCcsICdpcy1yb3VuZCc6IHR5cGUgPT09ICdyb3VuZCcsICdpcy1vdXRsaW5lZCc6IHR5cGUgPT09ICdvdXRsaW5lZCcsICdpcy1naG9zdCc6IHR5cGUgPT09ICdnaG9zdCcgfVwiXG4gICAgICAgIChjbGljayk9XCJjbGlja0hhbmRsZXIoJGV2ZW50KVwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwienktYnV0dG9uX193cmFwcGVyXCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbaWNvbl1cIiAqbmdJZj1cIiFpc0xvYWRpbmc7IGVsc2UgbG9hZGluZ1wiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbG9hZGluZz5cbiAgICAgICAgICAgICAgICA8enktbG9hZGVyIFtjb2xvcl09XCJjb2xvclwiPjwvenktbG9hZGVyPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbjwvbmctdGVtcGxhdGU+XG48IS0tIC9Db21tb24gQnV0dG9uIC0tPlxuXG48IS0tIFNwbGl0IEJ1dHRvbiAtLT5cbjxuZy10ZW1wbGF0ZSAjU3BsaXRCdXR0b24+XG48ZGl2IGNsYXNzPVwienktc3BsaXQtYnV0dG9uXCIgW25nQ2xhc3NdPVwieyAnaXMtYWNjZW50JzogY29sb3IgPT09ICdhY2NlbnQnIH1cIj5cbiAgICA8ZGl2IGNsYXNzPVwienktc3BsaXQtYnV0dG9uX193cmFwcGVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ6eS1zcGxpdC1idXR0b25fX2xlZnQtcGFydFwiIChjbGljayk9XCJjbGlja0hhbmRsZXIoJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkXCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc3BsaXQtdGV4dF1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwienktc3BsaXQtYnV0dG9uX19yaWdodC1wYXJ0XCIgKGNsaWNrKT1cInNlbGVjdEhhbmRsZXIoJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkIHx8ICFpdGVtcy5sZW5ndGhcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1NwbGl0Q2xvc2VkXCI+JiM5NjYyOzwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc1NwbGl0Q2xvc2VkXCI+JiM5NjUyOzwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbXMubGVuZ3RoICYmICFpc1NwbGl0Q2xvc2VkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIGNsYXNzPVwic3ViLW1lbnVfX2l0ZW0gaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpdGVtX19idXR0b25cIiBbZGlzYWJsZWRdPVwiaXRlbS5pc0Rpc2FibGVkIHx8ICFpdGVtLm9uQ2xpY2tcIiAoY2xpY2spPVwiaXRlbS5vbkNsaWNrICYmIGl0ZW0ub25DbGljayEoJGV2ZW50KTsgc2VsZWN0SGFuZGxlcigkZXZlbnQsIHRydWUpXCI+e3sgaXRlbS50aXRsZSB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuPCEtLSAvU3BsaXQgQnV0dG9uIC0tPiJdfQ==