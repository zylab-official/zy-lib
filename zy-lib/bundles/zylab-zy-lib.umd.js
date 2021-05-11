(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@zylab/zy-lib', ['exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.zylab = global.zylab || {}, global.zylab['zy-lib'] = {}), global.ng.core, global.ng.common, global.ng.forms));
}(this, (function (exports, i0, i1, i1$1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);

    var LoaderComponent = /** @class */ (function () {
        function LoaderComponent() {
            this.color = 'default';
        }
        return LoaderComponent;
    }());
    LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
    LoaderComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: LoaderComponent, selectors: [["zy-loader"]], inputs: { color: "color" }, decls: 5, vars: 2, consts: [[1, "loader"]], template: function LoaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "span", 0);
                i0__namespace.ɵɵelement(1, "span");
                i0__namespace.ɵɵelement(2, "span");
                i0__namespace.ɵɵelement(3, "span");
                i0__namespace.ɵɵelement(4, "span");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("is-accent", ctx.color === "accent");
            }
        }, styles: ["[_nghost-%COMP%]   .loader[_ngcontent-%COMP%]{display:inline-block;position:relative;width:20px;height:20px}@-webkit-keyframes loader-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes loader-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}[_nghost-%COMP%]   .loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{box-sizing:border-box;display:block;position:absolute;width:20px;height:20px;border-radius:50%;-webkit-animation:loader-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:loader-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border:3px solid transparent;border-top-color:#757575}[_nghost-%COMP%]   .loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}[_nghost-%COMP%]   .loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}[_nghost-%COMP%]   .loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}[_nghost-%COMP%]   .loader.is-accent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:3px solid transparent;border-top-color:#fff}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(LoaderComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'zy-loader',
                        template: "\n        <span class=\"loader\" [class.is-accent]=\"color === 'accent'\">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n        </span>\n    ",
                        styleUrls: ['./loader.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { color: [{
                    type: i0.Input
                }] });
    })();

    function ButtonComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0, 5);
        }
        if (rf & 2) {
            i0__namespace.ɵɵnextContext();
            var _r4 = i0__namespace.ɵɵreference(6);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", _r4);
        }
    }
    function ButtonComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0, 5);
        }
        if (rf & 2) {
            i0__namespace.ɵɵnextContext();
            var _r2 = i0__namespace.ɵɵreference(4);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", _r2);
        }
    }
    function ButtonComponent_ng_template_3_ng_content_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵprojection(0, 1, ["*ngIf", "!isLoading; else loading"]);
        }
    }
    function ButtonComponent_ng_template_3_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "zy-loader", 11);
        }
        if (rf & 2) {
            var ctx_r8 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("color", ctx_r8.color);
        }
    }
    var _c0$2 = function (a0, a1, a2, a3) { return { "is-accent": a0, "is-round": a1, "is-outlined": a2, "is-ghost": a3 }; };
    function ButtonComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 6);
            i0__namespace.ɵɵlistener("click", function ButtonComponent_ng_template_3_Template_button_click_0_listener($event) { i0__namespace.ɵɵrestoreView(_r10_1); var ctx_r9 = i0__namespace.ɵɵnextContext(); return ctx_r9.clickHandler($event); });
            i0__namespace.ɵɵelementStart(1, "span", 7);
            i0__namespace.ɵɵtemplate(2, ButtonComponent_ng_template_3_ng_content_2_Template, 1, 0, "ng-content", 8);
            i0__namespace.ɵɵtemplate(3, ButtonComponent_ng_template_3_ng_template_3_Template, 1, 1, "ng-template", null, 9, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementStart(5, "span", 10);
            i0__namespace.ɵɵprojection(6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r7 = i0__namespace.ɵɵreference(4);
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction4(4, _c0$2, ctx_r3.color === "accent", ctx_r3.type === "round", ctx_r3.type === "outlined", ctx_r3.type === "ghost"))("disabled", ctx_r3.isDisabled);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r3.isLoading)("ngIfElse", _r7);
        }
    }
    function ButtonComponent_ng_template_5_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtext(1, "\u25BE");
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function ButtonComponent_ng_template_5_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtext(1, "\u25B4");
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function ButtonComponent_ng_template_5_ng_container_7_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 19);
            i0__namespace.ɵɵelementStart(1, "button", 20);
            i0__namespace.ɵɵlistener("click", function ButtonComponent_ng_template_5_ng_container_7_div_2_Template_button_click_1_listener($event) { i0__namespace.ɵɵrestoreView(_r17_1); var item_r15 = ctx.$implicit; var ctx_r16 = i0__namespace.ɵɵnextContext(3); item_r15.onClick && item_r15.onClick($event); return ctx_r16.selectHandler($event, true); });
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r15 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("disabled", item_r15.isDisabled || !item_r15.onClick);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(item_r15.title);
        }
    }
    function ButtonComponent_ng_template_5_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "div", 17);
            i0__namespace.ɵɵtemplate(2, ButtonComponent_ng_template_5_ng_container_7_div_2_Template, 3, 2, "div", 18);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r13 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r13.items);
        }
    }
    var _c1$1 = function (a0) { return { "is-accent": a0 }; };
    function ButtonComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r19_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 12);
            i0__namespace.ɵɵelementStart(1, "div", 13);
            i0__namespace.ɵɵelementStart(2, "button", 14);
            i0__namespace.ɵɵlistener("click", function ButtonComponent_ng_template_5_Template_button_click_2_listener($event) { i0__namespace.ɵɵrestoreView(_r19_1); var ctx_r18 = i0__namespace.ɵɵnextContext(); return ctx_r18.clickHandler($event); });
            i0__namespace.ɵɵprojection(3, 2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "button", 15);
            i0__namespace.ɵɵlistener("click", function ButtonComponent_ng_template_5_Template_button_click_4_listener($event) { i0__namespace.ɵɵrestoreView(_r19_1); var ctx_r20 = i0__namespace.ɵɵnextContext(); return ctx_r20.selectHandler($event); });
            i0__namespace.ɵɵtemplate(5, ButtonComponent_ng_template_5_ng_container_5_Template, 2, 0, "ng-container", 16);
            i0__namespace.ɵɵtemplate(6, ButtonComponent_ng_template_5_ng_container_6_Template, 2, 0, "ng-container", 16);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(7, ButtonComponent_ng_template_5_ng_container_7_Template, 3, 1, "ng-container", 16);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(6, _c1$1, ctx_r5.color === "accent"));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("disabled", ctx_r5.isDisabled);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("disabled", ctx_r5.isDisabled || !ctx_r5.items.length);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r5.isSplitClosed);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r5.isSplitClosed);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r5.items.length && !ctx_r5.isSplitClosed);
        }
    }
    var _c2 = ["*", [["", "icon", ""]], [["", "split-text", ""]]];
    var _c3 = ["*", "[icon]", "[split-text]"];
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent(elementRef) {
            this.elementRef = elementRef;
            this.items = [];
            this.isLoading = false;
            this.onClick = new i0.EventEmitter();
            this.isSplitClosed = true;
            this._buttonType = 'default';
            this._buttonColor = 'default';
            this._disabled = false;
        }
        Object.defineProperty(ButtonComponent.prototype, "type", {
            get: function () {
                return this._buttonType;
            },
            set: function (value) {
                console.log(value);
                this._buttonType = value;
            },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(ButtonComponent.prototype, "color", {
            get: function () {
                return this._buttonColor;
            },
            set: function (value) {
                this._buttonColor = value;
            },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(ButtonComponent.prototype, "isDisabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = value;
            },
            enumerable: false,
            configurable: true
        });
        ButtonComponent.prototype.DocumentClick = function (event) {
            if (!this.elementRef.nativeElement.contains(event.target)) {
                this.selectHandler(event, true);
            }
        };
        ButtonComponent.prototype.clickHandler = function (e) {
            if (this.isLoading)
                return;
            if (this.type === 'split') {
                this.selectHandler(e, true);
            }
            this.onClick.emit(e);
        };
        ButtonComponent.prototype.selectHandler = function (e, close) {
            this.isSplitClosed = close || !this.isSplitClosed;
            if (!this.isSplitClosed)
                this.animateSubMenu();
        };
        ButtonComponent.prototype.animateSubMenu = function () {
            var _this = this;
            if (this._animationTimer)
                clearTimeout(this._animationTimer);
            this._animationTimer = setTimeout(function () {
                var _a;
                (_a = _this.elementRef.nativeElement.querySelector('.sub-menu')) === null || _a === void 0 ? void 0 : _a.classList.add('is-opening');
            }, 0);
        };
        return ButtonComponent;
    }());
    ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    ButtonComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["zy-button"]], hostBindings: function ButtonComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("click", function ButtonComponent_click_HostBindingHandler($event) { return ctx.DocumentClick($event); }, false, i0__namespace.ɵɵresolveDocument);
            }
        }, inputs: { type: "type", color: "color", isDisabled: ["disabled", "isDisabled"], items: "items", isLoading: "isLoading" }, outputs: { onClick: "onClick" }, ngContentSelectors: _c3, decls: 7, vars: 2, consts: [[3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [3, "ngTemplateOutlet", 4, "ngSwitchDefault"], ["SimpleButton", ""], ["SplitButton", ""], [3, "ngTemplateOutlet"], [1, "zy-button", 3, "ngClass", "disabled", "click"], [1, "zy-button__wrapper"], [4, "ngIf", "ngIfElse"], ["loading", ""], [1, "title"], [3, "color"], [1, "zy-split-button", 3, "ngClass"], [1, "zy-split-button__wrapper"], [1, "zy-split-button__left-part", 3, "disabled", "click"], [1, "zy-split-button__right-part", 3, "disabled", "click"], [4, "ngIf"], [1, "sub-menu"], ["class", "sub-menu__item item", 4, "ngFor", "ngForOf"], [1, "sub-menu__item", "item"], [1, "item__button", 3, "disabled", "click"]], template: function ButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef(_c2);
                i0__namespace.ɵɵelementContainerStart(0, 0);
                i0__namespace.ɵɵtemplate(1, ButtonComponent_ng_container_1_Template, 1, 1, "ng-container", 1);
                i0__namespace.ɵɵtemplate(2, ButtonComponent_ng_container_2_Template, 1, 1, "ng-container", 2);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵtemplate(3, ButtonComponent_ng_template_3_Template, 7, 9, "ng-template", null, 3, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵtemplate(5, ButtonComponent_ng_template_5_Template, 8, 8, "ng-template", null, 4, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngSwitch", ctx.type);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngSwitchCase", "split");
            }
        }, directives: [i1__namespace.NgSwitch, i1__namespace.NgSwitchCase, i1__namespace.NgSwitchDefault, i1__namespace.NgTemplateOutlet, i1__namespace.NgClass, i1__namespace.NgIf, LoaderComponent, i1__namespace.NgForOf], styles: ["[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-outlined[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{display:inline-block;height:40px;border:none;line-height:1;font-weight:700;font-size:1.3em;text-align:center;outline:none;transition:background-color .15s ease-in-out;cursor:pointer}[_nghost-%COMP%]{font-size:10px}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-outlined[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;box-sizing:border-box;padding:0 10px;width:127px;border-radius:5px;background-color:#efeeea;color:#757575}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:hover{background-color:#ebe9e4}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:active{background-color:#e6e5de}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;color:#ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important}[_nghost-%COMP%]   .zy-button__wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .zy-button.is-accent[_ngcontent-%COMP%]{background-color:#2196f3;color:#fff}[_nghost-%COMP%]   .zy-button.is-accent[_ngcontent-%COMP%]:hover{background-color:#1791f2}[_nghost-%COMP%]   .zy-button.is-accent[_ngcontent-%COMP%]:active{background-color:#0d87e9}[_nghost-%COMP%]   .zy-button.is-accent[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;background-color:#fff!important;color:#ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-accent[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-accent[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]{width:40px;border-radius:50%;font-size:1.4em}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;background-color:#fff!important;color:#ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important}[_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]     [icon]+.title, [_nghost-%COMP%]   .zy-button.is-round[_ngcontent-%COMP%]     zy-loader+.title{margin-left:0}[_nghost-%COMP%]   .zy-button.is-outlined[_ngcontent-%COMP%]{border:1px solid #9e9e9e}[_nghost-%COMP%]   .zy-button.is-outlined.is-accent[_ngcontent-%COMP%]{border-color:#2196f3;background-color:#bbdefb;color:#2196f3}[_nghost-%COMP%]   .zy-button.is-outlined.is-accent[_ngcontent-%COMP%]:hover{background-color:#b1d9fa}[_nghost-%COMP%]   .zy-button.is-outlined.is-accent[_ngcontent-%COMP%]:active{background-color:#9ed0f9}[_nghost-%COMP%]   .zy-button.is-outlined.is-accent[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;background-color:#fff!important;color:#ccc!important;cursor:default}[_nghost-%COMP%]   .zy-button.is-outlined.is-accent[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-button.is-outlined.is-accent[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]{background-color:transparent}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]     [icon]{transition:color .15s ease-in-out}[_nghost-%COMP%]   .zy-button.is-ghost.is-accent[_ngcontent-%COMP%]{background-color:transparent;color:#2196f3}[_nghost-%COMP%]   .zy-button.is-ghost.is-accent[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost.is-accent[_ngcontent-%COMP%]:hover     [icon]{color:#0c7cd5}[_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-button.is-ghost[_ngcontent-%COMP%]:hover     [icon]{color:#5c5c5c}[_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]     [icon]+.title, [_nghost-%COMP%]   .zy-button[_ngcontent-%COMP%]     zy-loader+.title{margin-left:10px}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]{position:relative;z-index:20;display:inline-block;color:#757575}[_nghost-%COMP%]   .zy-split-button__wrapper[_ngcontent-%COMP%]{position:relative;z-index:30;display:flex;align-items:center}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{padding:0 10px;width:127px;border-radius:5px 0 0 5px;background-color:#efeeea;color:inherit;font-size:1.3em}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:hover{background-color:#ebe9e4}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:active, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:active{background-color:#e6e5de}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:disabled{border:1px solid #ccc!important;background-color:#fff!important;color:#ccc!important;cursor:default}[_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:disabled:hover, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:disabled:active, [_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:disabled:hover{background-color:#fff!important}[_nghost-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{width:40px;border-radius:0 5px 5px 0;border-left:1px solid #fff;font-size:1.8em}[_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%], [_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{background-color:#2196f3}[_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:hover{background-color:#1791f2}[_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]   .zy-split-button__left-part[_ngcontent-%COMP%]:active, [_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:active{background-color:#0d87e9}[_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]{background-color:#2196f3}[_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:hover{background-color:#1791f2}[_nghost-%COMP%]   .zy-split-button.is-accent[_ngcontent-%COMP%]   .zy-split-button__right-part[_ngcontent-%COMP%]:active{background-color:#0d87e9}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{position:absolute;top:100%;z-index:10;box-sizing:border-box;margin-top:-10px;width:100%;color:#000;border:1px solid #ccc;border-radius:3px;font-size:1.3em;line-height:1;transform:translateY(-7px);opacity:.45;transition:all .15s ease-in-out}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu.is-opening[_ngcontent-%COMP%]{transform:translateY(7px);opacity:1}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu__item[_ngcontent-%COMP%]{background-color:#fff;border-bottom:1px solid #ccc}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu__item[_ngcontent-%COMP%]:last-child{border-bottom:none}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[_ngcontent-%COMP%]{display:block;padding:10px 5px;margin:0;width:100%;background:none;background-color:#fff;border:none;transition:background-color .15s ease-in-out;outline:none;cursor:pointer}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,80%,.56)}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[_ngcontent-%COMP%]:active{background-color:#cbcbcb}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[disabled][_ngcontent-%COMP%]{cursor:default}[_nghost-%COMP%]   .zy-split-button[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .item__button[disabled][_ngcontent-%COMP%]:hover{background-color:#fff}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(ButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'zy-button',
                        templateUrl: './button.component.html',
                        styleUrls: ['./button.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }]; }, { type: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }], isDisabled: [{
                    type: i0.Input,
                    args: ['disabled']
                }], items: [{
                    type: i0.Input
                }], isLoading: [{
                    type: i0.Input
                }], onClick: [{
                    type: i0.Output
                }], DocumentClick: [{
                    type: i0.HostListener,
                    args: ['document:click', ['$event']]
                }] });
    })();

    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        return ButtonModule;
    }());
    ButtonModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: ButtonModule });
    ButtonModule.ɵinj = i0__namespace.ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ButtonModule, { declarations: [ButtonComponent,
                LoaderComponent], imports: [i1.CommonModule], exports: [ButtonComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(ButtonModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule
                        ],
                        declarations: [
                            ButtonComponent,
                            LoaderComponent
                        ],
                        exports: [
                            ButtonComponent,
                        ]
                    }]
            }], null, null);
    })();

    var _c0$1 = ["checkbox"];
    var CheckboxComponent = /** @class */ (function () {
        function CheckboxComponent() {
            this.autofocus = false;
            this.isCheckbox = true;
            this.checkedChange = new i0.EventEmitter();
            this.onClick = new i0.EventEmitter();
        }
        Object.defineProperty(CheckboxComponent.prototype, "checked", {
            get: function () {
                return this._checked;
            },
            set: function (checked) {
                this._checked = checked;
                this.checkbox.checked = checked; // selection is not always updated based on the model in IE, hence explicitly setting the value via DOM
            },
            enumerable: false,
            configurable: true
        });
        // handling 'click' on the element rather than on checkbox as FireFox does not trigger 'click' on checkbox if SHIFT is pressed
        CheckboxComponent.prototype.onMouseClick = function (event) {
            var _this = this;
            if (!this.ignoreTimeout) {
                this.checkedChange.next(!this._checked);
                this.onClick.next({
                    shiftKey: event.shiftKey
                });
                // 'click' event might be triggered on the label element and/or bubbled up from the checkbox element -> ignore the second event
                this.ignoreTimeout = window.setTimeout(function () {
                    _this.ignoreTimeout = 0;
                });
            }
            this.checkbox.checked = this.checked;
            this.checkbox.indeterminate = this.indeterminate;
            this.checkbox.focus(); // compensating for focus not being set due to [dr-prevent-default-on-mousedown]
        };
        Object.defineProperty(CheckboxComponent.prototype, "checkboxRef", {
            set: function (checkboxRef) {
                this.checkbox = checkboxRef.nativeElement;
            },
            enumerable: false,
            configurable: true
        });
        CheckboxComponent.prototype.ngOnDestroy = function () {
            if (this.ignoreTimeout) {
                window.clearTimeout(this.ignoreTimeout);
            }
        };
        return CheckboxComponent;
    }());
    CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(); };
    CheckboxComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["zy-checkbox"]], viewQuery: function CheckboxComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$1, true);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.checkboxRef = _t.first);
            }
        }, hostVars: 4, hostBindings: function CheckboxComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("click", function CheckboxComponent_click_HostBindingHandler($event) { return ctx.onMouseClick($event); });
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("is-disabled", ctx.disabled)("checkbox", ctx.isCheckbox);
            }
        }, inputs: { checked: "checked", indeterminate: "indeterminate", autofocus: "autofocus", disabled: "disabled" }, outputs: { checkedChange: "checkedChange", onClick: "onClick" }, decls: 2, vars: 3, consts: [["type", "checkbox", 3, "ngModel", "disabled", "indeterminate"], ["checkbox", ""]], template: function CheckboxComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "input", 0, 1);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngModel", ctx.checked)("disabled", ctx.disabled)("indeterminate", ctx.indeterminate);
            }
        }, directives: [i1__namespace$1.CheckboxControlValueAccessor, i1__namespace$1.NgControlStatus, i1__namespace$1.NgModel], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(CheckboxComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'zy-checkbox',
                        templateUrl: './checkbox.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { checked: [{
                    type: i0.Input
                }], indeterminate: [{
                    type: i0.Input
                }], autofocus: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }, {
                    type: i0.HostBinding,
                    args: ['class.is-disabled']
                }], isCheckbox: [{
                    type: i0.HostBinding,
                    args: ['class.checkbox']
                }], onMouseClick: [{
                    type: i0.HostListener,
                    args: ['click', ['$event']]
                }], checkedChange: [{
                    type: i0.Output
                }], onClick: [{
                    type: i0.Output
                }], checkboxRef: [{
                    type: i0.ViewChild,
                    args: ['checkbox']
                }] });
    })();

    function PageTitleComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 1);
            i0__namespace.ɵɵelementStart(1, "div", 2);
            i0__namespace.ɵɵprojection(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "div", 3);
            i0__namespace.ɵɵelementStart(4, "div");
            i0__namespace.ɵɵelementStart(5, "div", 4);
            i0__namespace.ɵɵelementStart(6, "div", 5);
            i0__namespace.ɵɵelementStart(7, "span", 6);
            i0__namespace.ɵɵtext(8);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(9, "div", 7);
            i0__namespace.ɵɵprojection(10, 1);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(11, "div", 8);
            i0__namespace.ɵɵprojection(12, 2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(13, "div", 7);
            i0__namespace.ɵɵprojection(14, 3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(15, "div");
            i0__namespace.ɵɵelementStart(16, "div", 9);
            i0__namespace.ɵɵprojection(17, 4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(8);
            i0__namespace.ɵɵtextInterpolate(ctx_r0.title);
        }
    }
    var _c0 = [[["", "page-title-icon", ""]], [["", "page-title-extra", ""]], [["", "page-title-content-centered", ""]], [["", "page-title-content-right", ""]], [["", "page-title-subheader", ""]]];
    var _c1 = ["[page-title-icon]", "[page-title-extra]", "[page-title-content-centered]", "[page-title-content-right]", "[page-title-subheader]"];
    // import { Title } from '@angular/platform-browser';
    // import { ActivatedRoute } from '@angular/router';
    // import { ErrorDisplayService, PageTitle, PageTitleService } from 'app/core';
    // import { empty, of, Subscription } from 'rxjs';
    // import { filter, switchMap, tap } from 'rxjs/operators';
    var PageTitleComponent /* implements OnInit, OnDestroy */ = /** @class */ (function () {
        function PageTitleComponent() {
        }
        return PageTitleComponent;
    }());
    PageTitleComponent.ɵfac = function PageTitleComponent_Factory(t) { return new (t || PageTitleComponent /* implements OnInit, OnDestroy */)(); };
    PageTitleComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: PageTitleComponent /* implements OnInit, OnDestroy */, selectors: [["page-title"]], inputs: { title: "title" }, ngContentSelectors: _c1, decls: 1, vars: 1, consts: [["class", "columns is-mobile", 4, "ngIf"], [1, "columns", "is-mobile"], [1, "column", "is-narrow", "is-icon"], [1, "column", "is-wide"], [1, "columns", "page-title", "is-gapless", "is-mobile", "is-centered"], [1, "column", "page-title-text", "is-narrow"], ["data-test-page-title", ""], [1, "column", "is-narrow"], [1, "column", "has-text-centered"], [1, "columns", "is-gapless", "is-mobile"]], template: function PageTitleComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef(_c0);
                i0__namespace.ɵɵtemplate(0, PageTitleComponent_div_0_Template, 18, 1, "div", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", !ctx.inactive);
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(PageTitleComponent /* implements OnInit, OnDestroy */, [{
                type: i0.Component,
                args: [{
                        selector: 'page-title',
                        templateUrl: './page-title.component.html',
                        styleUrls: ['./page-title.component.scss']
                    }]
            }], null, { title: [{
                    type: i0.Input
                }] });
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var components = [CheckboxComponent, PageTitleComponent];
    var ZyLibModule = /** @class */ (function () {
        function ZyLibModule() {
        }
        return ZyLibModule;
    }());
    ZyLibModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: ZyLibModule });
    ZyLibModule.ɵinj = i0__namespace.ɵɵdefineInjector({ factory: function ZyLibModule_Factory(t) { return new (t || ZyLibModule)(); }, imports: [[
                ButtonModule,
                i1$1.FormsModule,
            ], ButtonModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ZyLibModule, { declarations: [CheckboxComponent, PageTitleComponent], imports: [ButtonModule,
                i1$1.FormsModule], exports: [CheckboxComponent, PageTitleComponent, ButtonModule] });
    })();
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(ZyLibModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: components,
                        imports: [
                            ButtonModule,
                            i1$1.FormsModule,
                        ],
                        exports: __spread(components, [
                            ButtonModule
                        ])
                    }]
            }], null, null);
    })();

    var ZyLibService = /** @class */ (function () {
        function ZyLibService() {
        }
        return ZyLibService;
    }());
    ZyLibService.ɵfac = function ZyLibService_Factory(t) { return new (t || ZyLibService)(); };
    ZyLibService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: ZyLibService, factory: ZyLibService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(ZyLibService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    /*
     * Public API Surface of zy-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ButtonComponent = ButtonComponent;
    exports.ButtonModule = ButtonModule;
    exports.CheckboxComponent = CheckboxComponent;
    exports.LoaderComponent = LoaderComponent;
    exports.PageTitleComponent = PageTitleComponent;
    exports.ZyLibModule = ZyLibModule;
    exports.ZyLibService = ZyLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=zylab-zy-lib.umd.js.map
