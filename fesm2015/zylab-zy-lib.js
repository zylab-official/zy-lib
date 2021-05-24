import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output, HostListener, NgModule, HostBinding, ViewChild, Injectable } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

class LoaderComponent {
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
    i0.ɵɵprojection(0, 0, ["*ngIf", "!isLoading; else loading"]);
} }
function ButtonComponent_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "zy-loader", 11);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", ctx_r8.color);
} }
function ButtonComponent_ng_template_3_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵprojection(1, 1);
    i0.ɵɵelementEnd();
} }
const _c0$2 = function (a0, a1, a2, a3) { return { "is-primary": a0, "is-round": a1, "is-outlined": a2, "is-ghost": a3 }; };
function ButtonComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function ButtonComponent_ng_template_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.clickHandler($event); });
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵtemplate(2, ButtonComponent_ng_template_3_ng_content_2_Template, 1, 0, "ng-content", 8);
    i0.ɵɵtemplate(3, ButtonComponent_ng_template_3_ng_template_3_Template, 1, 1, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(5, ButtonComponent_ng_template_3_span_5_Template, 2, 0, "span", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r7 = i0.ɵɵreference(4);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(5, _c0$2, ctx_r3.color === "primary", ctx_r3.type === "round", ctx_r3.type === "outlined", ctx_r3.type === "ghost"))("disabled", ctx_r3.isDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r3.isLoading)("ngIfElse", _r7);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r3.type !== "round");
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
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "button", 21);
    i0.ɵɵlistener("click", function ButtonComponent_ng_template_5_ng_container_7_div_2_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r18); const item_r16 = ctx.$implicit; const ctx_r17 = i0.ɵɵnextContext(3); item_r16.onClick && item_r16.onClick($event); return ctx_r17.selectHandler($event, true); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", item_r16.isDisabled || !item_r16.onClick);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r16.title);
} }
function ButtonComponent_ng_template_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵtemplate(2, ButtonComponent_ng_template_5_ng_container_7_div_2_Template, 3, 2, "div", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r14.items);
} }
const _c1$1 = function (a0) { return { "is-primary": a0 }; };
function ButtonComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵelementStart(2, "button", 15);
    i0.ɵɵlistener("click", function ButtonComponent_ng_template_5_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.clickHandler($event); });
    i0.ɵɵprojection(3, 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 16);
    i0.ɵɵlistener("click", function ButtonComponent_ng_template_5_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.selectHandler($event); });
    i0.ɵɵtemplate(5, ButtonComponent_ng_template_5_ng_container_5_Template, 2, 0, "ng-container", 17);
    i0.ɵɵtemplate(6, ButtonComponent_ng_template_5_ng_container_6_Template, 2, 0, "ng-container", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ButtonComponent_ng_template_5_ng_container_7_Template, 3, 1, "ng-container", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c1$1, ctx_r5.color === "primary"));
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
const _c2 = [[["", "icon", ""]], "*", [["", "split-text", ""]]];
const _c3 = ["[icon]", "*", "[split-text]"];
class ButtonComponent {
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
    } }, inputs: { type: "type", color: "color", isDisabled: ["disabled", "isDisabled"], items: "items", isLoading: "isLoading" }, outputs: { onClick: "onClick" }, ngContentSelectors: _c3, decls: 7, vars: 2, consts: [[3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [3, "ngTemplateOutlet", 4, "ngSwitchDefault"], ["SimpleButton", ""], ["SplitButton", ""], [3, "ngTemplateOutlet"], [1, "zy-button", 3, "ngClass", "disabled", "click"], [1, "zy-button__wrapper"], [4, "ngIf", "ngIfElse"], ["loading", ""], ["class", "title", 4, "ngIf"], [3, "color"], [1, "title"], [1, "zy-split-button", 3, "ngClass"], [1, "zy-split-button__wrapper"], [1, "zy-split-button__left-part", 3, "disabled", "click"], [1, "zy-split-button__right-part", 3, "disabled", "click"], [4, "ngIf"], [1, "sub-menu"], ["class", "sub-menu__item item", 4, "ngFor", "ngForOf"], [1, "sub-menu__item", "item"], [1, "item__button", 3, "disabled", "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c2);
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, ButtonComponent_ng_container_1_Template, 1, 1, "ng-container", 1);
        i0.ɵɵtemplate(2, ButtonComponent_ng_container_2_Template, 1, 1, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(3, ButtonComponent_ng_template_3_Template, 6, 10, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, ButtonComponent_ng_template_5_Template, 8, 8, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "split");
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgTemplateOutlet, i1.NgClass, i1.NgIf, LoaderComponent, i1.NgForOf], styles: ["[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-outlined[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{display:inline-block;height:40px;border:none;line-height:1;font-weight:700;font-size:1.3em;text-align:center;outline:none;transition:background-color .15s ease-in-out;cursor:pointer}[_nghost-%COMP%]{font-size:10px}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-outlined[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;box-sizing:border-box;padding:0 10px;width:127px;border-radius:5px;background-color:#efeeea;color:#757575}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:hover{background-color:#ebe9e4}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:active{background-color:#e6e5de}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;color:#ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important}[_nghost-%COMP%]   .zy-button__wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .zy-button.is-primary[_ngcontent-%COMP%]{background-color:#2196f3;color:#fff}[_nghost-%COMP%]   .zy-button.is-primary[_ngcontent-%COMP%]:hover{background-color:#1791f2}[_nghost-%COMP%]   .zy-button.is-primary[_ngcontent-%COMP%]:active{background-color:#0d87e9}[_nghost-%COMP%]   .zy-button.is-primary[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;background-color:#fff!important;color:#ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-primary[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-primary[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]{width:40px;border-radius:50%;font-size:1.4em}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;background-color:#fff!important;color:#ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]     [icon]+.title, [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]     zy-loader+.title{margin-left:0}[_nghost-%COMP%]   .zy-button.is-outlined[_ngcontent-%COMP%]{border:1px solid #9e9e9e}[_nghost-%COMP%]   .zy-button.is-outlined.is-primary[_ngcontent-%COMP%]{border-color:#2196f3;background-color:#bbdefb;color:#2196f3}[_nghost-%COMP%]   .zy-button.is-outlined.is-primary[_ngcontent-%COMP%]:hover{background-color:#b1d9fa}[_nghost-%COMP%]   .zy-button.is-outlined.is-primary[_ngcontent-%COMP%]:active{background-color:#9ed0f9}[_nghost-%COMP%]   .zy-button.is-outlined.is-primary[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;background-color:#fff!important;color:#ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-outlined.is-primary[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-outlined.is-primary[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]{background-color:transparent}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]     [icon]{transition:color .15s ease-in-out}[_nghost-%COMP%]   .zy-button.is-ghost.is-primary[_ngcontent-%COMP%]{background-color:transparent;color:#2196f3}[_nghost-%COMP%]   .zy-button.is-ghost.is-primary[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost.is-primary[_ngcontent-%COMP%]:hover     [icon]{color:#0c7cd5}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:hover     [icon]{color:#5c5c5c}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]     [icon]+.title, [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]     zy-loader+.title{margin-left:10px}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]{position:relative;z-index:20;display:inline-block;color:#757575}[_nghost-%COMP%]   .zy-split-button__wrapper[_ngcontent-%COMP%]{position:relative;z-index:30;display:flex;align-items:center}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{padding:0 10px;width:127px;border-radius:5px 0 0 5px;background-color:#efeeea;color:inherit;font-size:1.3em}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:hover{background-color:#ebe9e4}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:active, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:active{background-color:#e6e5de}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;background-color:#fff!important;color:#ccc!important;cursor:default}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:disabled:hover, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important}[_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{width:40px;border-radius:0 5px 5px 0;border-left:1px solid #fff;font-size:1.8em}[_nghost-%COMP%]   .zy-split-button.is-primary[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .zy-split-button.is-primary[_ngcontent-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button.is-primary[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{background-color:#2196f3}[_nghost-%COMP%]   .zy-split-button.is-primary[_ngcontent-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .zy-split-button.is-primary[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:hover{background-color:#1791f2}[_nghost-%COMP%]   .zy-split-button.is-primary[_ngcontent-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:active, [_nghost-%COMP%]   .zy-split-button.is-primary[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:active{background-color:#0d87e9}[_nghost-%COMP%]   .zy-split-button.is-primary[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{background-color:#2196f3}[_nghost-%COMP%]   .zy-split-button.is-primary[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:hover{background-color:#1791f2}[_nghost-%COMP%]   .zy-split-button.is-primary[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:active{background-color:#0d87e9}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{position:absolute;top:100%;z-index:10;box-sizing:border-box;margin-top:-10px;width:100%;color:#000;border:1px solid #ccc;border-radius:3px;font-size:1.3em;line-height:1;transform:translateY(-7px);opacity:.45;transition:all .15s ease-in-out}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu.is-opening[_ngcontent-%COMP%]{transform:translateY(7px);opacity:1}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu__item[_ngcontent-%COMP%]{background-color:#fff;border-bottom:1px solid #ccc}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu__item[_ngcontent-%COMP%]:last-child{border-bottom:none}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[_ngcontent-%COMP%]{display:block;padding:10px 5px;margin:0;width:100%;background:none;background-color:#fff;border:none;transition:background-color .15s ease-in-out;outline:none;cursor:pointer}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,80%,.56)}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[_ngcontent-%COMP%]:active{background-color:#cbcbcb}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[disabled][_ngcontent-%COMP%]{cursor:default}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[disabled][_ngcontent-%COMP%]:hover{background-color:#fff}"], changeDetection: 0 });
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

const _c0$1 = ["checkbox"];
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
        i0.ɵɵstaticViewQuery(_c0$1, true);
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
            FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CheckboxModule, { declarations: [CheckboxComponent], imports: [CommonModule,
        FormsModule], exports: [CheckboxComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule
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
const _c0 = [[["", "page-title-icon", ""]], [["", "page-title-extra", ""]], [["", "page-title-content-centered", ""]], [["", "page-title-content-right", ""]], [["", "page-title-subheader", ""]]];
const _c1 = ["[page-title-icon]", "[page-title-extra]", "[page-title-content-centered]", "[page-title-content-right]", "[page-title-subheader]"];
// import { Title } from '@angular/platform-browser';
// import { ActivatedRoute } from '@angular/router';
// import { ErrorDisplayService, PageTitle, PageTitleService } from 'app/core';
// import { empty, of, Subscription } from 'rxjs';
// import { filter, switchMap, tap } from 'rxjs/operators';
class PageTitleComponent /* implements OnInit, OnDestroy */ {
}
PageTitleComponent.ɵfac = function PageTitleComponent_Factory(t) { return new (t || PageTitleComponent /* implements OnInit, OnDestroy */)(); };
PageTitleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PageTitleComponent /* implements OnInit, OnDestroy */, selectors: [["page-title"]], inputs: { title: "title" }, ngContentSelectors: _c1, decls: 1, vars: 1, consts: [["class", "columns is-mobile", 4, "ngIf"], [1, "columns", "is-mobile"], [1, "column", "is-narrow", "is-icon"], [1, "column", "is-wide"], [1, "columns", "page-title", "is-gapless", "is-mobile", "is-centered"], [1, "column", "page-title-text", "is-narrow"], ["data-test-page-title", ""], [1, "column", "is-narrow"], [1, "column", "has-text-centered"], [1, "columns", "is-gapless", "is-mobile"]], template: function PageTitleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
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

const components = [PageTitleComponent];
class ZyLibModule {
}
ZyLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: ZyLibModule });
ZyLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ZyLibModule_Factory(t) { return new (t || ZyLibModule)(); }, imports: [[
            ButtonModule,
            FormsModule,
            ReactiveFormsModule
        ], ButtonModule,
        CheckboxModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ZyLibModule, { declarations: [PageTitleComponent], imports: [ButtonModule,
        FormsModule,
        ReactiveFormsModule], exports: [PageTitleComponent, ButtonModule,
        CheckboxModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ZyLibModule, [{
        type: NgModule,
        args: [{
                declarations: components,
                imports: [
                    ButtonModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                exports: [
                    ...components,
                    ButtonModule,
                    CheckboxModule
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

export { ButtonComponent, ButtonModule, CheckboxComponent, CheckboxModule, LoaderComponent, PageTitleComponent, ZyLibModule, ZyLibService };
//# sourceMappingURL=zylab-zy-lib.js.map
