import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';
import { ButtonComponent } from './button.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ButtonComponent,
        LoaderComponent
   ],
    exports: [
        ButtonComponent,
    ]
})
export class ButtonModule {}