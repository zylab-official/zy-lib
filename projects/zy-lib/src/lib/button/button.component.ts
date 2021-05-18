import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Color } from './models/color.types';
import { ButtonType } from './models/button.types';
import { SplitButtonItem } from './models/split-button-item.interface';

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

    @Input() items: SplitButtonItem[] = [];

    @Input() isLoading: boolean = false;

    @Output() onClick: EventEmitter<Event> = new EventEmitter();

    @HostListener('document:click', ['$event'])
    DocumentClick(event: Event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.selectHandler(event, true);
        }
    }

    isSplitClosed = true;

    private _buttonType: ButtonType = 'default';
    private _buttonColor: Color = 'default';
    private _disabled = false;
    private _animationTimer: any;

    constructor(
        private elementRef: ElementRef
    ) { }

    clickHandler(e: Event): void {
        if (this.isLoading) return;

        if (this.type === 'split') {
            this.selectHandler(e, true);
        }

        this.onClick.emit(e);
    }

    selectHandler(e: Event, close?: boolean): void {
        this.isSplitClosed = close || !this.isSplitClosed;

        if (!this.isSplitClosed) this.animateSubMenu();
    }

    private animateSubMenu(): void {
        if (this._animationTimer) clearTimeout(this._animationTimer);

        this._animationTimer = setTimeout(() => {
            this.elementRef.nativeElement.querySelector('.sub-menu')?.classList.add('is-opening');
        }, 0);
    }
}