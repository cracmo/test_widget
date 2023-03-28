
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output = {
        ...webpackConfig.output,
        library: 'EmbeddableWidget',
        path: path.resolve(__dirname, "docs"),
        filename: "bundle.min.js",
        libraryExport: 'default',
        globalObject: 'self'
      }
      return webpackConfig;
    },
  },
};