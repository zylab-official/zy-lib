import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnDestroy, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'zy-checkbox',
    templateUrl: './checkbox.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent implements OnDestroy {
    @Input() set checked(checked: boolean) {
        this._checked = checked;
        this.checkbox.checked = checked;  // selection is not always updated based on the model in IE, hence explicitly setting the value via DOM
    }
    get checked(): boolean {
        return this._checked;
    }
    @Input() indeterminate: boolean;
    @Input() autofocus = false;

    @Input() @HostBinding('class.is-disabled') disabled: boolean;
    @HostBinding('class.checkbox') isCheckbox = true;

    // handling 'click' on the element rather than on checkbox as FireFox does not trigger 'click' on checkbox if SHIFT is pressed
    @HostListener('click', ['$event']) onMouseClick(event: MouseEvent) {
        if (!this.ignoreTimeout) {

            this.checkedChange.next(!this._checked);

            this.onClick.next(<any>{
                shiftKey: event.shiftKey
            });

            // 'click' event might be triggered on the label element and/or bubbled up from the checkbox element -> ignore the second event
            this.ignoreTimeout = window.setTimeout(() => {
                this.ignoreTimeout = 0;
            });
        }
        this.checkbox.checked = this.checked;
        this.checkbox.indeterminate = this.indeterminate;
        this.checkbox.focus();    // compensating for focus not being set due to [dr-prevent-default-on-mousedown]
    }

    @Output() checkedChange = new EventEmitter<boolean>();
    @Output() onClick = new EventEmitter<MouseEvent>();

    @ViewChild('checkbox', { static: true }) set checkboxRef(checkboxRef: ElementRef) {
        this.checkbox = checkboxRef.nativeElement;
    }

    private _checked: boolean;
    private checkbox: HTMLInputElement;
    private ignoreTimeout: number;

    ngOnDestroy() {
        if (this.ignoreTimeout) {
            window.clearTimeout(this.ignoreTimeout);
        }
    }
}