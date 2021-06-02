
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import '!style-loader!css-loader!sass-loader!./../projects/zy-lib/src/styles/global.scss';
import '!style-loader!css-loader!sass-loader!./../projects/zy-lib/src/styles/styles.scss';

setCompodocJson(docJson);

// Desing Tokens Addon Settings
const tokenContext = require.context(
  '!!raw-loader!../projects/zy-lib/src',
  true,
  /.\.(css|less|scss|svg)$/
);

const tokenFiles = tokenContext.keys().map(function (filename) {
  return {
    filename,
    content: tokenContext(filename).default
  };
});

export const parameters = {
  options: {
    // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
    storySort: {
      order: [
        'Getting Started',
        'What\'s new',
        'Components',
        'Design Tokens',
        // Nested stories
        [
          'Overview',
          'Colors',
          // Colors order is aligned with _colors.scss inside library
          [
            'Overview',
            'Red',
            'Pink',
            'Purple',
            'Deep Purple',
            'Indigo',
            'Blue',
            'Light Blue',
            'Cyan',
            'Teal',
            'Green',
            'Light Green',
            'Lime',
            'Yellow',
            'Amber',
            'Orange',
            'Deep Orange',
            'Brown',
            'Grey',
            'Blue Grey',
            'Additional'
          ]
        ],
      ]
    }
  },
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  // https://github.com/grafana/grafana/issues/27763
  previewTabs: {
    canvas: {
      title: 'Preview',
      hidden: false,
    },
  },
  designToken: {
    files: tokenFiles,
  },
  badgesConfig: {
    beta: {
      contrast: '#FFF',
      color: '#018786',
      title: 'Beta'
    },
    deprecated: {
      contrast: '#FFF',
      color: '#6200EE',
      title: 'Deprecated'
    },
    inProgress: {
      contrast: '#FFF',
      color: '#e6a544',
      title: 'In Progress'
    }
  }
}