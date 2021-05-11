import { Component, Input } from '@angular/core';
// import { Title } from '@angular/platform-browser';
// import { ActivatedRoute } from '@angular/router';
// import { ErrorDisplayService, PageTitle, PageTitleService } from 'app/core';
// import { empty, of, Subscription } from 'rxjs';
// import { filter, switchMap, tap } from 'rxjs/operators';

@Component({
    selector: 'page-title',
    templateUrl: './page-title.component.html',
    styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent /* implements OnInit, OnDestroy */ {
    @Input() title: string;
    // @HostBinding('class.inactive') public inactive: boolean;

    // public title: string;
    // private subscriptions: Subscription[] = [];

    // public constructor(
    //     private errorDisplayService: ErrorDisplayService,
    //     private titleService: PageTitleService,
    //     private route: ActivatedRoute,
    //     private browserTitle: Title
    // ) {}

    // ngOnInit() {
    //     let ownDepth = this.route.snapshot.pathFromRoot.length;
    //     this.subscriptions.push(this.titleService.activeTitleComponentObservable.pipe(
    //         switchMap(c => {
    //             if (c && c.component === this) {
    //                 this.inactive = false;
    //                 return this.titleService.titleObservable;
    //             } else {
    //                 this.inactive = true;
    //                 if (!c || c.depth < ownDepth) {
    //                     return of(new PageTitle("")).pipe(
    //                         tap(x => {
    //                             this.titleService.registerTitleComponent(this, ownDepth);   // this call can trigger another notification,
    //                             // therefore invoking it after returning an observable to ensure the observable from this switchMap execution
    //                             // does not override the next one
    //                         }),
    //                         filter(x => false));
    //                 } else {
    //                     return empty();
    //                 }
    //             }
    //         }))
    //         .subscribe({
    //             next: title => {
    //                 this.title = title.text;

    //                 let ediscoveryText = "ZyLAB ONE eDiscovery"; // TODO: i18n
    //                 if (title && title.text && title.text.trim().length > 0)
    //                     this.browserTitle.setTitle(`${title.text} - ${ediscoveryText}`);
    //                 else
    //                     this.browserTitle.setTitle(`${ediscoveryText}`);
    //             },
    //             error: e => this.errorDisplayService.show(e)
    //         }));
    // }

    // ngOnDestroy() {
    //     this.subscriptions.forEach(s => s.unsubscribe());
    //     this.titleService.unregisterTitleComponent(this);
    // }
}
