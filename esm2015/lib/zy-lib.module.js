import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from './button/button.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { PageTitleComponent } from './page-title/page-title.component';
import * as i0 from "@angular/core";
const components = [PageTitleComponent];
export class ZyLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoienktbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3p5LWxpYi9zcmMvbGliL3p5LWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFFdkUsTUFBTSxVQUFVLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0FBZXZDLE1BQU0sT0FBTyxXQUFXOzsrQ0FBWCxXQUFXO3FHQUFYLFdBQVcsa0JBWGI7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtTQUNwQixFQUdDLFlBQVk7UUFDWixjQUFjO3dGQUdMLFdBQVcsbUJBZkosa0JBQWtCLGFBS2xDLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CLGFBUEgsa0JBQWtCLEVBV2xDLFlBQVk7UUFDWixjQUFjO2tEQUdMLFdBQVc7Y0FidkIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEdBQUcsVUFBVTtvQkFDYixZQUFZO29CQUNaLGNBQWM7aUJBQ2Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tib3hNb2R1bGUgfSBmcm9tICcuL2NoZWNrYm94L2NoZWNrYm94Lm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UtdGl0bGUvcGFnZS10aXRsZS5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzID0gW1BhZ2VUaXRsZUNvbXBvbmVudF1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxuICBpbXBvcnRzOiBbXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIENoZWNrYm94TW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgWnlMaWJNb2R1bGUgeyB9XG4iXX0=