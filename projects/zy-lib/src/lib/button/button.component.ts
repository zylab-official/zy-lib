import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonColor, ButtonType } from './button-settings';
import { SplitButtonItem } from './models/split-button-item';

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

    @Input('disabled')
    get isDisabled(): boolean {
        return this._disabled;
    }
    set isDisabled(value: boolean) {
        this._disabled = value;
    }

    @Input() items: SplitButtonItem[] = [];

    @Output() onClick: EventEmitter<Event> = new EventEmitter();

    isSplitClosed = true;

    private _buttonType: ButtonType = 'default';
    private _buttonColor: ButtonColor = 'default';
    private _disabled = false;

    clickHandler(e: Event): void {
        this.onClick.emit(e);
    }

    selectHandler(e: Event): void {
        this.isSplitClosed = !this.isSplitClosed;
        console.log('select click')
    }
}