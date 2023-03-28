
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output = {
        ...webpackConfig.output,
        library: 'EmbeddableWidget',
        libraryTarget: "umd",
        umdNamedDefine: true,
        clean: true,
        path: path.resolve(__dirname, "docs"),
        publicPath: '/',
        filename: "bundle.min.js", // Important, the name of the exported bundle, always the same name.
        libraryExport: 'default',
      }
      return webpackConfig;
    },
  },
};