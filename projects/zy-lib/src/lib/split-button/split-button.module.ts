import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SplitButtonComponent } from './split-button.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SplitButtonComponent
   ],
    exports: [
        SplitButtonComponent,
    ]
})
export class SplitButtonModule {}