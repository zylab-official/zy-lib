import { PageTitleComponent } from 'projects/zy-lib/src/lib/page-title/page-title.component';

export default {
    title: 'PageTitle Component',
    parameters: {
        notes: 'some documentation here',
    },
};

export const Default = () => ({
    component: PageTitleComponent,
    props: {
    },
});