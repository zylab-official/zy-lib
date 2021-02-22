import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonColor, ButtonType } from './button-settings';

@Component({
    selector: 'zy-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    @Input()
    get type(): ButtonType {
        return this._buttonType;
    }
    set type(value: ButtonType) {
        console.log(value)
        this._buttonType = value;
    };

    @Input()
    get color(): ButtonColor {
        return this._buttonColor;
    }
    set color(value: ButtonColor) {
        this._buttonColor = value;
    };

    @Output() onClick: EventEmitter<Event> = new EventEmitter();

    private _buttonType: ButtonType = 'default';
    private _buttonColor: ButtonColor = 'default';

    clickHandler(e: Event): void {
        this.onClick.emit(e);
    }
}