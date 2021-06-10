import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { SplitButtonModule } from 'projects/zy-lib/src/public-api';
import { baseSettings } from 'stories/shared/basic-storries-settings';
import { config } from 'storybook-addon-xd-designs';
import { XDConfig2020 } from 'storybook-addon-xd-designs/lib/config';

export default {
    ...baseSettings,
    title: 'Components/Buttons/Split Buttont',
    parameters: {
        badges: ['beta'],
        design: config({
            artboardUrl: 'https://xd.adobe.com/view/ae7472ea-b4ac-47c4-4eb9-7aff91446d91-d845/screen/ca95c951-f010-498f-84c6-1cf10f344616/Desktop',
        } as XDConfig2020)
    },
    decorators: [
        moduleMetadata({
            // imports both components to allow component composition with storybook
            imports: [CommonModule, SplitButtonModule],
        }),
    ],
};

export const actionsData = {
    onClickTask: action('Click main button!'),
    onClickItem: action('Click item button!'),
};

export const PrimaryWithSubItemsAndCallbacks = () => ({
    template: `
        <zy-split-button
            color="primary"
            [items]="[{title: 'Combo Item 1', onClick: onItemClick}, {title: 'Combo item 2', onClick: onItemClick}]"
            (onClick)="onClick($event)"
        >
            Primary Button
        </zy-split-button>
    `,
    props: {
        onClick: actionsData.onClickTask,
        onItemClick: actionsData.onClickItem
    },
});

export const SecondaryWithSubItemsAndCallbacks = () => ({
    template: `
        <zy-split-button
            color="secondary"
            [items]="[{title: 'Combo Item 1', onClick: onItemClick}, {title: 'Combo item 2', onClick: onItemClick}]"
            (onClick)="onClick($event)"
        >
            Primary Button
        </zy-split-button>
    `,
    props: {
        onClick: actionsData.onClickTask,
        onItemClick: actionsData.onClickItem
    },
});

export const PrimaryWithSubItemsAndOneCallback = () => ({
    template: `
        <zy-split-button
            color="primary"
            [items]="[{title: 'Combo Item 1', onClick: onItemClick}, {title: 'Combo item 2'}]"
            (onClick)="onClick($event)"
        >
            Primary Button
        </zy-split-button>
    `,
    props: {
        onClick: actionsData.onClickTask,
        onItemClick: actionsData.onClickItem
    },
});

export const PrimaryWithoutSubItems = () => ({
    template: `
        <zy-split-button
            color="primary"
            (onClick)="onClick($event)"
        >
            Primary Button
        </zy-split-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});

export const Disabled = () => ({
    template: `
        <zy-split-button
            color="primary"
            [items]="[{title: 'Test 1'}, {title: 'Test 2'}]"
            (onClick)="onClick($event)"
            disabled="true"
        >
            Primary Button
        </zy-split-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});