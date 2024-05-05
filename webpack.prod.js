const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");


module.exports = merge(common, {
  mode: "production",
  devtool: false,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
  ],
  optimization : {
      runtimeChunk: "multiple",
      splitChunks: {
          chunks: "all",
      },
      minimize: true,
      minimizer: [
          new TerserPlugin({
              terserOptions: {
                  format: {
                      comments: false,
                  },
                  compress: true,
              },
              extractComments: false,
          }),
      ],
  }

});