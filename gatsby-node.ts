/* eslint-disable no-template-curly-in-string */

exports.onCreateBabelConfig = ({ actions }) => {
  // https://material-ui.com/guides/minimizing-bundle-size/
  actions.setBabelPlugin({
    name: "babel-plugin-transform-imports",
    options: {
      "@material-ui/core": {
        transform: "@material-ui/core/esm/${member}",
        preventFullImport: true,
      },
      "@material-ui/icons": {
        transform: "@material-ui/icons/esm/${member}",
        preventFullImport: true,
      },
    },
  });
};
