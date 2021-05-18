import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ButtonModule } from 'projects/zy-lib/src/public-api';
import { baseSettings } from 'stories/shared/basic-storries-settings';

export default {
    ...baseSettings,
    title: 'Components/Buttons/Outlined',
    parameters: {
        design: {
            // Available options see here: https://github.com/morgs32/storybook-addon-xd-designs
            reviewUrl: "https://xd.adobe.com/view/1e4dbe48-b50b-455f-4b0f-bd81f411dfe4-687c/"
        },
        notes: 'Buttons are categorized by importance and can be applied of variety of HTML nodes. Each variantion has intention and should be used sparingly',
    },
    decorators: [
        moduleMetadata({
            // imports both components to allow component composition with storybook
            imports: [CommonModule, ButtonModule],
        }),
    ],
};

export const actionsData = {
    onClickTask: action('Click outline button!'),
};

export const Default = () => ({
    template: `
        <zy-button
            type="outlined"
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
            type="outlined"
            color="accent"
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
            type="outlined"
            color="accent"
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
            color="accent"
            (onClick)="onClick($event)"
        >
            <span icon>+</span>
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});