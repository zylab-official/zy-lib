import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Color } from '../button/models/color.types';

@Component({
    selector: 'zy-loader',
    template: `
        <span class="loader" [class.is-primary]="color === 'primary'">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </span>
    `,
    styleUrls: ['./loader.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {
    @Input() color: Color = 'default';
}