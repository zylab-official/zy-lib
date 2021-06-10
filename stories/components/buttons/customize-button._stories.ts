import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ButtonModule } from 'projects/zy-lib/src/public-api';
import { baseSettings } from 'stories/shared/basic-storries-settings';
import { config, withXD } from 'storybook-addon-xd-designs';
import { XDConfig2020 } from 'storybook-addon-xd-designs/lib/config';

export default {
    ...baseSettings,
    title: 'Components/Buttons/Customize/Button',
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
        withXD
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
                    'secondary', 'primary'
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

export const Customize = (args: any) => ({
    template: `
        <p>This story lets you to check all buttons settings inside Controls panel:</p>
        <hr />
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