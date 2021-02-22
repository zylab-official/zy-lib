import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { PageTitleComponent } from './page-title/page-title.component';

const components = [CheckboxComponent, PageTitleComponent, ButtonComponent]

@NgModule({
  declarations: components,
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: components
})
export class ZyLibModule { }
