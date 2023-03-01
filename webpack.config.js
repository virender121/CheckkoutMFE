
const HtmlWebPackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');

dotenv.config()
const deps = require("./package.json").dependencies;
module.exports = (env) => ({
  output: {
    publicPath: "http://localhost:3003/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3003,
    historyApiFallback: true,
    open: false
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [new Dotenv(),

  new ModuleFederationPlugin({
    name: "CheckoutPageMFE",
    filename: "remoteEntry.js",
    remotes: {
      HomePageMFE: `HomePageMFE@${process.env.HomePageMFE}remoteEntry.js`,
      LoginPageMFE: `LoginPageMFE@${process.env.LoginPageMFE}remoteEntry.js`,
      ProductPageMFE: `ProductPageMFE@${process.env.ProductPageMFE}remoteEntry.js`,
    },
    exposes: {
      './CheckoutPage': './src/components/views/CheckoutPage/CheckoutPage.jsx',
      // './useMfeStore': './src/utils/zustand.jsx'
    },
    shared: {
      ...deps,
      react: {
        singleton: true,
        requiredVersion: deps.react,
      },
      "react-dom": {
        singleton: true,
        requiredVersion: deps["react-dom"],
      },
    },
  }),
  new HtmlWebPackPlugin({
    template: "./src/index.html",
  }),
  ],
});