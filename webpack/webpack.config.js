const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
  return {
    mode: env.NODE_ENV,

    devtool: "source-map",

    entry: {
      "index": "./src/index.tsx"
    },

    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "../", "dist"),
      publicPath: "./"
    },

    resolve: {
      extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
      fallback: {
        "fs": false
      },
    },

    devServer: {
      contentBase: path.join(__dirname, "../", "dist"),
      inline: true,
      hot: env.NODE_ENV === "development",
      historyApiFallback: true
    },

    module: {
      rules: [
        {
          loader: "source-map-loader",
          test: /\.js$/,
          enforce: "pre",
          exclude: /node_modules/
        },
        {
          loader: "ts-loader",
          test: /\.tsx?$/,
          exclude: /node_modules/
        },
        {
          test: /\.s[ac]ss$/,
          use: [{
            loader: "style-loader"  // creates `style` nodes from JS strings
          }, {
            loader: "css-loader",   // translates CSS into CommonJS modules
            options: {
              modules: {
                mode: "local",
                auto: true,
                exportGlobals: true,
                localIdentName: "[local]--[hash:base64:5]",
                exportLocalsConvention: "camelCase",
                exportOnlyLocals: false,
              }
            }
          }, {
            loader: "sass-loader"   // compiles SASS to CSS
          }]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: "url-loader"
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        title: "Mikhail Koviazin | Personal Website",
        favicon: './src/assets/favicon.ico',
        meta: {
          "og:url": "https://koviazin.dev",
          "og:title": "Mikhail Koviazin",
          "og:description": "Senior Full-Stack Web Developer",
          "og:image": "https://koviazin.dev/images/mikhail-koviazin.jpg"
        }
      }),


      new CopyPlugin({
        patterns: [
          {
            from: "src/assets/images/mikhail-koviazin.jpg",
            to: "./images/mikhail-koviazin.jpg"
          },
        ]
      })
    ]
  }
};
