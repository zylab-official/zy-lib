import { ZyBasicComponent } from 'projects/zy-lib/src/public-api';

export default {
    title: 'Basic Demo Component',
    excludeStories: /.*Data$/,
    parameters: {
        notes: 'some documentation here',
    },
};

export const Default = () => ({
    component: ZyBasicComponent,
});

export const WithText = () => ({
    component: ZyBasicComponent,
    props: {
        text: 'Hello, world!'
    },
});

export const WithTextAndBorder = () => ({
    component: ZyBasicComponent,
    props: {
        text: 'Hello, world!',
        doBorder: true
    },
});