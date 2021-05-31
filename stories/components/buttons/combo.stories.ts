import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ButtonModule } from 'projects/zy-lib/src/public-api';
import { baseSettings } from 'stories/shared/basic-storries-settings';
import { config, withXD } from 'storybook-addon-xd-designs';
import { XDConfig2020 } from 'storybook-addon-xd-designs/lib/config';

export default {
    ...baseSettings,
    title: 'Components/Buttons/Combo (Split)',
    parameters: {
        badges: ['beta'],
        design: config({
            artboardUrl: 'https://xd.adobe.com/view/ae7472ea-b4ac-47c4-4eb9-7aff91446d91-d845/screen/ca95c951-f010-498f-84c6-1cf10f344616/Desktop',
        } as XDConfig2020)
    },
    decorators: [
        moduleMetadata({
            // imports both components to allow component composition with storybook
            imports: [CommonModule, ButtonModule],
        }),
        withXD
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
            color="primary"
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
            color="primary"
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
            color="primary"
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
