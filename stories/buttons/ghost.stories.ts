import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from 'projects/zy-lib/src/lib/button/button.component';
import { LoaderComponent } from 'projects/zy-lib/src/public-api';

export default {
    title: 'Buttons/Ghost',
    parameters: {
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
            type="ghost"
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
            type="ghost"
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