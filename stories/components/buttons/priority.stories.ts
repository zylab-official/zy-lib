import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from 'projects/zy-lib/src/lib/button/button.component';
import { LoaderComponent } from 'projects/zy-lib/src/public-api';

export default {
    title: 'Buttons/Priority',
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
            type="default"
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