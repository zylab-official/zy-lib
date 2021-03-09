import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from 'projects/zy-lib/src/lib/button/button.component';

export default {
    title: 'Buttons/Combo (Split)',
    parameters: {
        notes: 'Buttons are categorized by importance and can be applied of variety of HTML nodes. Each variantion has intention and should be used sparingly',
    },
    excludeStories: /.*Data$/,
    decorators: [
        moduleMetadata({
            // imports both components to allow component composition with storybook
            declarations: [ButtonComponent],
            imports: [CommonModule],
        }),
    ],
};

export const actionsData = {
    onClickTask: action('Click!'),
};

export const Default = () => ({
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

export const Primary = () => ({
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


export const Disabled = () => ({
    template: `
        <zy-button
            type="split"
            color="accent"
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
