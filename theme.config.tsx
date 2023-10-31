import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>FPT Blockchain Lab</span>,
  project: {
    link: "https://github.com/FPT-Blockchain-Lab",
  },
  footer: {
    text: "FPT Blockchain Lab",
  },
  darkMode: false,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – FPT Blockchain Lab",
    };
  },
};

export default config;
