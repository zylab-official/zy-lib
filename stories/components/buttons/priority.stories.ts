import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ButtonModule } from 'projects/zy-lib/src/public-api';
import { baseSettings } from 'stories/shared/basic-storries-settings';

export default {
    ...baseSettings,
    title: 'Components/Buttons/Priority',
    parameters: {
        design: {
            // Available options see here: https://github.com/morgs32/storybook-addon-xd-designs
            reviewUrl: "https://xd.adobe.com/view/1e4dbe48-b50b-455f-4b0f-bd81f411dfe4-687c/"
        },
    },
    decorators: [
        moduleMetadata({
            // imports both components to allow component composition with storybook
            imports: [CommonModule, ButtonModule],
        }),
    ],
};

export const actionsData = {
    onClickTask: action('Click priority button!'),
};

export const Default = () => ({
    template: `
        <zy-button
            type="default"
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
            type="default"
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
            type="default"
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
            type="round"
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