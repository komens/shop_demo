const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
     style: true,
    }),
   addLessLoader({
     javascriptEnabled: true,
     modifyVars: {
        '@primary-color': '#e4b653',
        '@layout-body-background': '#fff',
        '@border-color-base': '#3589DD'
      },
   }),
  );