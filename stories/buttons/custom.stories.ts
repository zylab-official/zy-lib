import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from 'projects/zy-lib/src/lib/button/button.component';
import { LoaderComponent } from 'projects/zy-lib/src/public-api';

export default {
    title: 'Buttons/Customize',
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
        onClick: actionsData.onClickTask,
        ...args
    }
});

// export const Primary = () => ({
//     template: `
//         <zy-button
//             type="default"
//             color="accent"
//             (onClick)="onClick($event)"
//         >
//             Primary Action
//         </zy-button>
//     `,
//     props: {
//         onClick: actionsData.onClickTask
//     },
// });

// export const WithIcon = () => ({
//     template: `
//         <zy-button
//             type="default"
//             color="accent"
//             (onClick)="onClick($event)"
//         >
//             <span icon>+</span>With Icon
//         </zy-button>
//     `,
//     props: {
//         onClick: actionsData.onClickTask
//     },
// });

// export const Rounded = () => ({
//     template: `
//         <zy-button
//             type="round"
//             color="accent"
//             (onClick)="onClick($event)"
//         >
//             <span icon>+</span>
//         </zy-button>
//     `,
//     props: {
//         onClick: actionsData.onClickTask
//     },
// });