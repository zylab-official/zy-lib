import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ButtonModule } from 'projects/zy-lib/src/public-api';
import { baseSettings } from 'stories/shared/basic-storries-settings';
import { withDesign } from 'storybook-addon-designs';

export default {
    ...baseSettings,
    title: 'Components/Buttons/Combo (Split)',
    parameters: {
        badges: ['beta']
    },
    decorators: [
        moduleMetadata({
            // imports both components to allow component composition with storybook
            imports: [CommonModule, ButtonModule],
        }),
        withDesign
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
