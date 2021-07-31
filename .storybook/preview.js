import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

// Make sure you add path to your global style after loader!.
// You can also create one style inside .storybook and import all global style in it and import that style here
import "!style-loader!css-loader!sass-loader!../projects/my-lib/src/styles/globals.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
};
