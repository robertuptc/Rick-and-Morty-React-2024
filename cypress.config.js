import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'pb3wnb',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:5173/",
    supportFile: false,
  },
  // viewportWidth: 10224,
  // viewportHeight: 768,
  video: false
});
