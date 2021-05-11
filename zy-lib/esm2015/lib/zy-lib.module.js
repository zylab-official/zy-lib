import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from './button/button.module';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { PageTitleComponent } from './page-title/page-title.component';
import * as i0 from "@angular/core";
const components = [CheckboxComponent, PageTitleComponent];
export class ZyLibModule {
}
ZyLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: ZyLibModule });
ZyLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ZyLibModule_Factory(t) { return new (t || ZyLibModule)(); }, imports: [[
            ButtonModule,
            FormsModule,
        ], ButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ZyLibModule, { declarations: [CheckboxComponent, PageTitleComponent], imports: [ButtonModule,
        FormsModule], exports: [CheckboxComponent, PageTitleComponent, ButtonModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ZyLibModule, [{
        type: NgModule,
        args: [{
                declarations: components,
                imports: [
                    ButtonModule,
                    FormsModule,
                ],
                exports: [
                    ...components,
                    ButtonModule
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoienktbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3p5LWxpYi9zcmMvbGliL3p5LWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQUV2RSxNQUFNLFVBQVUsR0FBRyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDLENBQUE7QUFhMUQsTUFBTSxPQUFPLFdBQVc7OytDQUFYLFdBQVc7cUdBQVgsV0FBVyxrQkFUYjtZQUNQLFlBQVk7WUFDWixXQUFXO1NBQ1osRUFHQyxZQUFZO3dGQUdILFdBQVcsbUJBYkosaUJBQWlCLEVBQUUsa0JBQWtCLGFBS3JELFlBQVk7UUFDWixXQUFXLGFBTkssaUJBQWlCLEVBQUUsa0JBQWtCLEVBVXJELFlBQVk7a0RBR0gsV0FBVztjQVh2QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7aUJBQ1o7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEdBQUcsVUFBVTtvQkFDYixZQUFZO2lCQUNiO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICcuL2J1dHRvbi9idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZVRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLXRpdGxlL3BhZ2UtdGl0bGUuY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50cyA9IFtDaGVja2JveENvbXBvbmVudCwgUGFnZVRpdGxlQ29tcG9uZW50XVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IGNvbXBvbmVudHMsXG4gIGltcG9ydHM6IFtcbiAgICBCdXR0b25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICAgIEJ1dHRvbk1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFp5TGliTW9kdWxlIHsgfVxuIl19