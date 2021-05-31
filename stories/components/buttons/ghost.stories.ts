import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ButtonModule } from 'projects/zy-lib/src/public-api';
import { baseSettings } from 'stories/shared/basic-storries-settings';
import { config, withXD } from 'storybook-addon-xd-designs';
import { XDConfig2020 } from 'storybook-addon-xd-designs/lib/config';

export default {
    ...baseSettings,
    title: 'Components/Buttons/Ghost',
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
    ],
};

export const actionsData = {
    onClickTask: action('Click ghost button!'),
};

export const Default = () => ({
    template: `
        <zy-button
            type="ghost"
            color="default"
            (onClick)="onClick($event)"
        >
            Default
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});

export const Primary = () => ({
    template: `
        <zy-button
            type="ghost"
            color="primary"
            (onClick)="onClick($event)"
        >
            Primary Action
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});

export const WithIcon = () => ({
    template: `
        <zy-button
            type="ghost"
            color="primary"
            (onClick)="onClick($event)"
        >
            <span icon>+</span>With Icon
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});

export const Rounded = () => ({
    template: `
        <zy-button
            type="ghost"
            color="primary"
            (onClick)="onClick($event)"
        >
            <span icon>+</span>
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});