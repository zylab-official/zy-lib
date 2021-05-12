import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ButtonModule } from 'projects/zy-lib/src/public-api';
import { baseSettings } from 'stories/shared/basic-storries-settings';

export default {
    ...baseSettings,
    title: 'Buttons/Customize',
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
    argTypes: {
        type: {
            control: {
                type: 'radio',
                options: [
                    'default', 'round', 'outlined', 'ghost', 'split'
                ]
            }
        },
        color: {
            control: {
                type: 'radio',
                options: [
                    'default', 'accent'
                ]
            }
        },
        title: {
            control: {
                type: 'text',
            }
        },
        icon: {
            control: {
                type: 'select',
                options: [
                    '+', '👇', '👽', '😁'
                ]
            }
        }
    }
};

export const actionsData = {
    onClickTask: action('Click priority button!'),
};

export const Button = (args: any) => ({
    template: `
        <zy-button
            [type]="type"
            [color]="color"
            (onClick)="onClick($event)"
        >
            <span *ngIf="icon" icon>{{ icon }}</span>
            <ng-container *ngIf="type === 'split'" split-text>{{ title }}</ng-container>
            <ng-container *ngIf="type !== 'split'" >{{ title }}</ng-container>
        </zy-button>
    `,
    props: {
        ...args,
        onClick: actionsData.onClickTask,
    }
});