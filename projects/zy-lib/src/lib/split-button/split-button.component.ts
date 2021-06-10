import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { ButtonComponentBase } from '../shared/components/button/button.component.base';
import { SplitButtonItem } from './models/split-button-item.interface';

@Component({
    selector: 'zy-split-button',
    templateUrl: './split-button.component.html',
    styleUrls: ['./split-button.component.scss']
})
export class SplitButtonComponent extends ButtonComponentBase {
    @HostListener('document:click', ['$event'])
    DocumentClick(event: Event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.selectHandler(event, true);
        }
    }

    @Input() items: SplitButtonItem[] = [];

    isSplitClosed = true;

    private _animationTimer: any;

    constructor(
        private elementRef: ElementRef
    ) {
        super();
    }

    clickHandler(e: Event): void {
        if (this.isLoading) return;

        this.selectHandler(e, true);
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