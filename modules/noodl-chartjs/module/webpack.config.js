const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const pjson = require("./package.json");
const outputPath = path.resolve(
  __dirname,
  "../project/noodl_modules/" + pjson.name
);

// TODO: This will be replaced when the SDK is updated.
const noodlSdkPath = path.resolve(
  __dirname,
  "..",
  "..",
  "noodl-sdk",
  "build/dist/index.js"
);

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "index.js",
    path: outputPath,
    clean: true,
  },
  externals: {
    react: "React",
    "react-dom": "reactDom",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css"],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "assets/**/*",
          to: "[name][ext]",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
