
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