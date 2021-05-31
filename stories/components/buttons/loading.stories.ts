import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ButtonModule } from 'projects/zy-lib/src/public-api';
import { baseSettings } from 'stories/shared/basic-storries-settings';

export default {
    ...baseSettings,
    title: 'Components/Buttons/Loading',
    parameters: {
        badges: ['beta']
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
            [isLoading]="true"
            (onClick)="onClick($event)"
        >Default</zy-button>
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
            [isLoading]="true"
            (onClick)="onClick($event)"
        >Primary</zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});