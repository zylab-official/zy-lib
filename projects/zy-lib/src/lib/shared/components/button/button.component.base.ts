import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Color } from '../../models/color.types';

@Directive()
export abstract class ButtonComponentBase {
    @Input()
    get color(): Color {
        return this._buttonColor;
    }
    set color(value: Color) {
        this._buttonColor = value;
    };

    @Input('disabled')
    get isDisabled(): boolean {
        return this._disabled;
    }
    set isDisabled(value: boolean) {
        this._disabled = value;
    }

    @Input() isLoading: boolean = false;

    @Output() onClick: EventEmitter<Event> = new EventEmitter();

    protected _buttonColor: Color = 'primary';
    protected _disabled = false;

    abstract clickHandler(e: Event): void;
}