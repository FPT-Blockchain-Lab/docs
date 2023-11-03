import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <strong>FPT Blockchain Lab</strong>,
  project: {
    link: "https://github.com/FPT-Blockchain-Lab",
  },
  footer: {
    text: "Powered By FPT Blockchain Lab",
  },
  docsRepositoryBase: "https://github.com/FPT-Blockchain-Lab/docs/tree/main",
  editLink: {
    text: "Edit this page on GitHub",
  },
  darkMode: true,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – FPT Blockchain Lab",
    };
  },
};

export default config;
