
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import '!style-loader!css-loader!sass-loader!./../projects/zy-lib/src/styles/global.scss';

setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // https://github.com/grafana/grafana/issues/27763
  previewTabs: {},
}