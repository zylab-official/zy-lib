import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
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
export class PageTitleComponent /* implements OnInit, OnDestroy */ {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy96eS1saWIvc3JjL2xpYi9wYWdlLXRpdGxlL3BhZ2UtdGl0bGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvenktbGliL3NyYy9saWIvcGFnZS10aXRsZS9wYWdlLXRpdGxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUNBakQsOEJBQ0k7SUFBQSw4QkFDSTtJQUFBLGtCQUFvRDtJQUN4RCxpQkFBTTtJQUNOLDhCQUNJO0lBQUEsMkJBQ0k7SUFBQSw4QkFDSTtJQUFBLDhCQUNJO0lBQUEsK0JBQTJCO0lBQUEsWUFBUztJQUFBLGlCQUFPO0lBQy9DLGlCQUFNO0lBQ04sOEJBQ0k7SUFBQSxzQkFBcUQ7SUFDekQsaUJBQU07SUFDTiwrQkFDSTtJQUFBLHNCQUFnRTtJQUNwRSxpQkFBTTtJQUNOLCtCQUNJO0lBQUEsc0JBQTZEO0lBQ2pFLGlCQUFNO0lBQ1YsaUJBQU07SUFDVixpQkFBTTtJQUNOLDRCQUNJO0lBQUEsK0JBQ0k7SUFBQSxzQkFBeUQ7SUFDN0QsaUJBQU07SUFDVixpQkFBTTtJQUNWLGlCQUFNO0lBQ1YsaUJBQU07OztJQW5CeUMsZUFBUztJQUFULGtDQUFTOzs7O0FEUHhELHFEQUFxRDtBQUNyRCxvREFBb0Q7QUFDcEQsK0VBQStFO0FBQy9FLGtEQUFrRDtBQUNsRCwyREFBMkQ7QUFPM0QsTUFBTSxPQUFPLGtCQUFrQixDQUFDLGtDQUFrQzs7b0ZBQXJELGtCQUFrQixDQUFDLGtDQUFrQzt1REFBckQsa0JBQWtCLENBQUMsa0NBQWtDOztRQ1psRSxvRUEyQk07O1FBM0JBLG9DQUFlOztrRERZUixrQkFBa0IsQ0FBQyxrQ0FBa0M7Y0FMakUsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUM3QztnQkFFWSxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuLy8gaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gaW1wb3J0IHsgRXJyb3JEaXNwbGF5U2VydmljZSwgUGFnZVRpdGxlLCBQYWdlVGl0bGVTZXJ2aWNlIH0gZnJvbSAnYXBwL2NvcmUnO1xuLy8gaW1wb3J0IHsgZW1wdHksIG9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbi8vIGltcG9ydCB7IGZpbHRlciwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGFnZS10aXRsZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtdGl0bGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3BhZ2UtdGl0bGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlVGl0bGVDb21wb25lbnQgLyogaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSAqLyB7XG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgICAvLyBASG9zdEJpbmRpbmcoJ2NsYXNzLmluYWN0aXZlJykgcHVibGljIGluYWN0aXZlOiBib29sZWFuO1xuXG4gICAgLy8gcHVibGljIHRpdGxlOiBzdHJpbmc7XG4gICAgLy8gcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgLy8gcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIC8vICAgICBwcml2YXRlIGVycm9yRGlzcGxheVNlcnZpY2U6IEVycm9yRGlzcGxheVNlcnZpY2UsXG4gICAgLy8gICAgIHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBQYWdlVGl0bGVTZXJ2aWNlLFxuICAgIC8vICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAvLyAgICAgcHJpdmF0ZSBicm93c2VyVGl0bGU6IFRpdGxlXG4gICAgLy8gKSB7fVxuXG4gICAgLy8gbmdPbkluaXQoKSB7XG4gICAgLy8gICAgIGxldCBvd25EZXB0aCA9IHRoaXMucm91dGUuc25hcHNob3QucGF0aEZyb21Sb290Lmxlbmd0aDtcbiAgICAvLyAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy50aXRsZVNlcnZpY2UuYWN0aXZlVGl0bGVDb21wb25lbnRPYnNlcnZhYmxlLnBpcGUoXG4gICAgLy8gICAgICAgICBzd2l0Y2hNYXAoYyA9PiB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKGMgJiYgYy5jb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZSA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aXRsZVNlcnZpY2UudGl0bGVPYnNlcnZhYmxlO1xuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuaW5hY3RpdmUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoIWMgfHwgYy5kZXB0aCA8IG93bkRlcHRoKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YobmV3IFBhZ2VUaXRsZShcIlwiKSkucGlwZShcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0YXAoeCA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLnJlZ2lzdGVyVGl0bGVDb21wb25lbnQodGhpcywgb3duRGVwdGgpOyAgIC8vIHRoaXMgY2FsbCBjYW4gdHJpZ2dlciBhbm90aGVyIG5vdGlmaWNhdGlvbixcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlcmVmb3JlIGludm9raW5nIGl0IGFmdGVyIHJldHVybmluZyBhbiBvYnNlcnZhYmxlIHRvIGVuc3VyZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoaXMgc3dpdGNoTWFwIGV4ZWN1dGlvblxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkb2VzIG5vdCBvdmVycmlkZSB0aGUgbmV4dCBvbmVcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIoeCA9PiBmYWxzZSkpO1xuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtcHR5KCk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KSlcbiAgICAvLyAgICAgICAgIC5zdWJzY3JpYmUoe1xuICAgIC8vICAgICAgICAgICAgIG5leHQ6IHRpdGxlID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlLnRleHQ7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGVkaXNjb3ZlcnlUZXh0ID0gXCJaeUxBQiBPTkUgZURpc2NvdmVyeVwiOyAvLyBUT0RPOiBpMThuXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh0aXRsZSAmJiB0aXRsZS50ZXh0ICYmIHRpdGxlLnRleHQudHJpbSgpLmxlbmd0aCA+IDApXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb3dzZXJUaXRsZS5zZXRUaXRsZShgJHt0aXRsZS50ZXh0fSAtICR7ZWRpc2NvdmVyeVRleHR9YCk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsc2VcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJvd3NlclRpdGxlLnNldFRpdGxlKGAke2VkaXNjb3ZlcnlUZXh0fWApO1xuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAgZXJyb3I6IGUgPT4gdGhpcy5lcnJvckRpc3BsYXlTZXJ2aWNlLnNob3coZSlcbiAgICAvLyAgICAgICAgIH0pKTtcbiAgICAvLyB9XG5cbiAgICAvLyBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIC8vICAgICB0aGlzLnRpdGxlU2VydmljZS51bnJlZ2lzdGVyVGl0bGVDb21wb25lbnQodGhpcyk7XG4gICAgLy8gfVxufVxuIiwiPGRpdiAqbmdJZj1cIiFpbmFjdGl2ZVwiIGNsYXNzPVwiY29sdW1ucyBpcy1tb2JpbGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLW5hcnJvdyBpcy1pY29uXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltwYWdlLXRpdGxlLWljb25dXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtd2lkZVwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgcGFnZS10aXRsZSBpcy1nYXBsZXNzIGlzLW1vYmlsZSBpcy1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gcGFnZS10aXRsZS10ZXh0IGlzLW5hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXRlc3QtcGFnZS10aXRsZT57e3RpdGxlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy1uYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3BhZ2UtdGl0bGUtZXh0cmFdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3BhZ2UtdGl0bGUtY29udGVudC1jZW50ZXJlZF1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy1uYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3BhZ2UtdGl0bGUtY29udGVudC1yaWdodF1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1nYXBsZXNzIGlzLW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltwYWdlLXRpdGxlLXN1YmhlYWRlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=