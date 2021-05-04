import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from 'projects/zy-lib/src/lib/button/button.component';
import { LoaderComponent } from 'projects/zy-lib/src/public-api';

export default {
    title: 'Buttons/Combo (Split)',
    parameters: {
        design: {
            // Available options see here: https://github.com/morgs32/storybook-addon-xd-designs
            reviewUrl: "https://xd.adobe.com/view/1e4dbe48-b50b-455f-4b0f-bd81f411dfe4-687c/"
        },
        notes: 'Buttons are categorized by importance and can be applied of variety of HTML nodes. Each variantion has intention and should be used sparingly',
    },
    excludeStories: /.*Data$/,
    decorators: [
        moduleMetadata({
            // imports both components to allow component composition with storybook
            declarations: [ButtonComponent, LoaderComponent],
            imports: [CommonModule],
        }),
    ],
};

export const actionsData = {
    onClickTask: action('Click main button!'),
    onClickItem: action('Click item button!'),
};

export const DefaultWithoutSubItems = () => ({
    template: `
        <zy-button
            type="split"
            color="default"
            (onClick)="onClick($event)"
        >
            <ng-container split-text>Default</ng-container>
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});

export const PrimaryWithoutSubItems = () => ({
    template: `
        <zy-button
            type="split"
            color="accent"
            (onClick)="onClick($event)"
        >
            <ng-container split-text>Primary Action</ng-container>
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});

export const DefaultWitSubItemsAndOneCallback = () => ({
    template: `
        <zy-button
            type="split"
            color="default"
            [items]="[{title: 'Test 1', onClick: onItemClick}, {title: 'Test 2'}]"
            (onClick)="onClick($event)"
        >
            <ng-container split-text>Default</ng-container>
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask,
        onItemClick: actionsData.onClickItem
    },
});

export const PrimaryWithSubItemsAndCallback = () => ({
    template: `
        <zy-button
            type="split"
            color="accent"
            [items]="[{title: 'Test 1', onClick: onItemClick}, {title: 'Test 2', onClick: onItemClick}]"
            (onClick)="onClick($event)"
        >
            <ng-container split-text>Primary Action</ng-container>
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask,
        onItemClick: actionsData.onClickItem
    },
});

export const Disabled = () => ({
    template: `
        <zy-button
            type="split"
            color="accent"
            [items]="[{title: 'Test 1'}, {title: 'Test 2'}]"
            (onClick)="onClick($event)"
            disabled="true"
        >
            <ng-container split-text>Primary Action</ng-container>
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});
