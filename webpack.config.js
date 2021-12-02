const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: {
    login: './src/login.js',
    main: './src/vote.js'
  },
  output: {
      path:path.resolve(__dirname, "public")
  }

};