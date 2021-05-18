import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from './button/button.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { PageTitleComponent } from './page-title/page-title.component';

const components = [PageTitleComponent]

@NgModule({
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
})
export class ZyLibModule { }
