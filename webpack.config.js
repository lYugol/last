<<<<<<< HEAD
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // Входной файл
  entry: ['./src/js/index.js'],
=======
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Входной файл
  entry: [
    './src/js/index.js'
  ],
>>>>>>> e72c493548ab557700d14d1aa9be081a3d030d54

  // Выходной файл
  output: {
    filename: './js/bundle.js'
  },

  // Source maps для удобства отладки
<<<<<<< HEAD
  devtool: 'source-map',
=======
  devtool: "source-map",
>>>>>>> e72c493548ab557700d14d1aa9be081a3d030d54

  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
<<<<<<< HEAD
            presets: ['@babel/preset-env']
=======
            presets: ['@babel/preset-env'],
>>>>>>> e72c493548ab557700d14d1aa9be081a3d030d54
          }
        }
      },

      // Компилируем SCSS в CSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
<<<<<<< HEAD
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
=======
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
>>>>>>> e72c493548ab557700d14d1aa9be081a3d030d54
      },

      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=./fonts/[name].[ext]'
<<<<<<< HEAD
          }
=======
          },
>>>>>>> e72c493548ab557700d14d1aa9be081a3d030d54
        ]
      },

      // Подключаем картинки из css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader?name=./static/[name].[ext]'
<<<<<<< HEAD
          }
        ]
      }
    ]
=======
          },
        ]
      },
    ],
>>>>>>> e72c493548ab557700d14d1aa9be081a3d030d54
  },
  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      title: 'Webpack 4 Starter',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
<<<<<<< HEAD
        collapseWhitespace: false
=======
        collapseWhitespace: false,
>>>>>>> e72c493548ab557700d14d1aa9be081a3d030d54
      }
    }),

    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
<<<<<<< HEAD
      filename: 'style.css'
=======
      filename: 'style.css',
>>>>>>> e72c493548ab557700d14d1aa9be081a3d030d54
    }),

    // Копируем картинки
    new CopyWebpackPlugin([
      {
        from: './src/img',
<<<<<<< HEAD
        to: 'img'
      }
    ])
  ]
}
=======
        to: 'img',
      },
    ])
  ],
};
>>>>>>> e72c493548ab557700d14d1aa9be081a3d030d54
