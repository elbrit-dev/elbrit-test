import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "w5mZHNDpd2EToAK4Xve3Hy",
      token: "fq5N60BNHKggcBWXiKKNNC0kWgmIY04OauM3gfAldeeWFpQ2IXbLCuh7tg01uUqGPBHe8Fr4UCF8wQkH2GGQ",
      version:
        process.env.PLASMIC_VERSION_TAG,
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

import Button from "./Button";

PLASMIC.registerComponent(Button, {
  name: "Button",
  props: {
    children: {
      type: "slot",
      defaultValue: "Button",
    },
    variant: {
      type: "choice",
      options: ["primary", "secondary", "outline"],
      defaultValue: "primary",
    },
    size: {
      type: "choice",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
    onClick: {
      type: "eventHandler",
      argTypes: [],
    },
  },
});
