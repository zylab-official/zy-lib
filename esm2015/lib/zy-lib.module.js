import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { PageTitleModule } from './page-title/page-title.module';
import { SplitButtonModule } from './split-button/split-button.module';
import * as i0 from "@angular/core";
export class ZyLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoienktbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3p5LWxpYi9zcmMvbGliL3p5LWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFpQnZFLE1BQU0sT0FBTyxXQUFXOzsrQ0FBWCxXQUFXO3FHQUFYLFdBQVcsa0JBYmI7WUFDUCxZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixjQUFjO1NBQ2YsRUFFQyxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxlQUFlO3dGQUdOLFdBQVcsY0FacEIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsY0FBYyxhQUdkLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsY0FBYztRQUNkLGVBQWU7a0RBR04sV0FBVztjQWR2QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLGNBQWM7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLGVBQWU7aUJBQ2hCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja2JveE1vZHVsZSB9IGZyb20gJy4vY2hlY2tib3gvY2hlY2tib3gubW9kdWxlJztcbmltcG9ydCB7IFBhZ2VUaXRsZU1vZHVsZSB9IGZyb20gJy4vcGFnZS10aXRsZS9wYWdlLXRpdGxlLm1vZHVsZSc7XG5pbXBvcnQgeyBTcGxpdEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4vc3BsaXQtYnV0dG9uL3NwbGl0LWJ1dHRvbi5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCdXR0b25Nb2R1bGUsXG4gICAgU3BsaXRCdXR0b25Nb2R1bGUsXG4gICAgUGFnZVRpdGxlTW9kdWxlLFxuICAgIENoZWNrYm94TW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIFNwbGl0QnV0dG9uTW9kdWxlLFxuICAgIENoZWNrYm94TW9kdWxlLFxuICAgIFBhZ2VUaXRsZU1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFp5TGliTW9kdWxlIHsgfVxuIl19