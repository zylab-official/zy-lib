import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent, CheckboxModule } from 'projects/zy-lib/src/public-api';

export default {
    title: 'Components/Form Elements/Checkbox',
    parameters: {
        notes: 'some documentation here',
    },
    decorators: [
        moduleMetadata({
            // imports both components to allow component composition with storybook
            imports: [CheckboxModule],
        }),
    ],
};

export const Unchecked = () => ({
    component: CheckboxComponent,
    props: {
        checked: false
    },
});

export const Checked = () => ({
    component: CheckboxComponent,
    props: {
        checked: true
    },
});

export const Disabled = () => ({
    component: CheckboxComponent,
    props: {
        disabled: true
    },
});
