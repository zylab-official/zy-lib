import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from './button/button.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { PageTitleComponent } from './page-title/page-title.component';
import { PageTitleModule } from './page-title/page-title.module';
import { SplitButtonModule } from './split-button/split-button.module';

const components = [PageTitleComponent]

@NgModule({
  declarations: components,
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
