import { ZyLibComponent } from 'projects/zy-lib/src/public-api';

export default {
    title: 'Dummy ZyComponent',
    excludeStories: /.*Data$/,
    parameters: {
        notes: 'some documentation here',
    },
};

export const Default = () => ({
    component: ZyLibComponent,
    props: {
    },
});