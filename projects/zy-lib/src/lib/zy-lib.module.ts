import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { PageTitleModule } from './page-title/page-title.module';
import { SplitButtonModule } from './split-button/split-button.module';


@NgModule({
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
})
export class ZyLibModule { }
