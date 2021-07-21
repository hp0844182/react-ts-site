const cc = require('./config.js')
const presets = [
  "@babel/env",
  "@babel/preset-react"
];
const plugins = [
  ["babel-plugin-react-css-modules",{
    generateScopedName: cc.path,
    webpackHotModuleReloading: true,
    handleMissingStyleName: 'warn',
    filetypes: {
      ".scss": {
        "syntax": "postcss-scss"
      }
    }
  }]
]
module.exports = { presets,plugins };