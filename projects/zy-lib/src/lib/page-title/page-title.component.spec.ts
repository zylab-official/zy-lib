import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PageTitle, PageTitleService } from 'app/core';
import { configureTestSuite, defaults } from 'app/spec/testing';
import { Subject } from 'rxjs';
import { PageTitleComponent } from './page-title.component';

describe("Page title Component", () => {
    let fixture: ComponentFixture<PageTitleComponent>;
    let pageTitleService: PageTitleService;
    let fakeRouter = { events: new Subject<any>() };

    configureTestSuite(suite => {
        TestBed.configureTestingModule(defaults);
        TestBed.configureTestingModule({
            declarations: [PageTitleComponent],
            providers: [
                { provide: Router, useValue: fakeRouter }]
        });
    });

    function prepare() {
        pageTitleService = TestBed.get(PageTitleService);
        fixture = TestBed.createComponent(PageTitleComponent);
        fixture.detectChanges();
    };

    it("Should set its title", fakeAsync(() => {
        prepare();

        pageTitleService.setTitle(new PageTitle('hallo'));
        expect(fixture.componentInstance.title).toEqual('hallo');
        pageTitleService.setTitle(new PageTitle('bonjour'));
        expect(fixture.componentInstance.title).toEqual('bonjour');
    }));

    it("should get activated/deactivated", fakeAsync(() => {
        prepare();

        expect(fixture.componentInstance.inactive).toBeFalsy('must be active when the only instance');

        let otherComponent = {};
        pageTitleService.registerTitleComponent(otherComponent, 100);
        expect(fixture.componentInstance.inactive).toBeTruthy('must be inactive with a page title at a deeper level');

        pageTitleService.unregisterTitleComponent(otherComponent);
        expect(fixture.componentInstance.inactive).toBeFalsy('must be active again');
    }));
});
