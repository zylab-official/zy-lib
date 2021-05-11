import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from './button/button.module';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { PageTitleComponent } from './page-title/page-title.component';

const components = [CheckboxComponent, PageTitleComponent]

@NgModule({
  declarations: components,
  imports: [
    ButtonModule,
    FormsModule,
  ],
  exports: [
    ...components,
    ButtonModule
  ]
})
export class ZyLibModule { }
