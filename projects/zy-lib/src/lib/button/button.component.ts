import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonComponentBase } from '../shared/components/button/button.component.base';
import { ButtonType } from './models/button.types';

@Component({
    selector: 'zy-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent extends ButtonComponentBase {
    @Input()
    get type(): ButtonType {
        return this._buttonType;
    }
    set type(value: ButtonType) {
        this._buttonType = value;
    };

    protected _buttonType: ButtonType = 'default';


    clickHandler(e: Event): void {
        if (this.isLoading) return;

        this.onClick.emit(e);
    }
}