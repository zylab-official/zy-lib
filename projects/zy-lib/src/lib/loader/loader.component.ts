import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Color } from '../shared/color-types';

@Component({
    selector: 'zy-loader',
    template: `
        <span class="loader" [class.is-accent]="color === 'accent'">
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