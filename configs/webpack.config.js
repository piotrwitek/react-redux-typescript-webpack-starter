const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  root: path.resolve(__dirname, '..'),
  nodeModules: path.resolve(__dirname, '../node_modules'),
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
};

const DEV_SERVER = {
  hot: true,
  hotOnly: true,
  historyApiFallback: true,
  overlay: true,
  // stats: 'verbose',
  // proxy: {
  //   '/api': 'http://localhost:3000'
  // },
};

module.exports = (env = {}) => {
  console.log({ env });
  const isBuild = !!env.build;
  const isDev = !env.build;
  const isSourceMap = !!env.sourceMap || isDev;

  return {
    cache: true,
    devtool: isDev ? 'eval-source-map' : 'source-map',
    devServer: DEV_SERVER,

    context: PATHS.root,

    entry: {
      app: [
        'react-hot-loader/patch',
        './src/index.tsx',
      ],
    },
    output: {
      path: PATHS.dist,
      filename: isDev ? '[name].js' : '[name].[hash].js',
      publicPath: '/',
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      modules: ['src', 'node_modules'],
    },

    // externals: {
    // },

    module: {
      rules: [
        // awesome-typescript-loader
        {
          test: /\.tsx?$/,
          include: PATHS.src,
          use: (env.awesome ?
            [
              { loader: 'react-hot-loader/webpack' },
              {
                loader: 'awesome-typescript-loader',
                options: {
                  sourceMap: isSourceMap,
                },
              },
            ]
            :
            [
              { loader: 'react-hot-loader/webpack' },
              {
                loader: 'ts-loader',
                options: {
                  transpileOnly: true,
                  compilerOptions: {
                    'target': isDev ? 'es2015' : 'es5',
                    'sourceMap': isSourceMap,
                    'isolatedModules': true,
                    'noEmitOnError': false,
                  },
                },
              },
            ]
          ),
        },
        // json
        {
          test: /\.json$/,
          include: [PATHS.src],
          use: { loader: 'json-loader' },
        },
        // file
        // {
        //   test: /\.(jpg|png|gif)$/,
        //   use: 'file-loader'
        // },
        // url
        // {
        //   test: /\.(woff|woff2|eot|ttf|svg)$/,
        //   use: {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 100000
        //     }
        //   }
        // }
      ],
    },

    plugins: [
      new DashboardPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(isDev ? 'development' : 'production'),
        },
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: (module) => module.context && module.context.indexOf('node_modules') !== -1,
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
      }),
      ...(isDev ? [
        new webpack.HotModuleReplacementPlugin({
          // multiStep: true, // better performance with many files
        }),
        new webpack.NamedModulesPlugin(),
      ] : []),
      ...(isBuild ? [
        new webpack.optimize.UglifyJsPlugin({
          beautify: false,
          compress: {
            screw_ie8: true
          },
          comments: false,
          sourceMap: isSourceMap,
        }),
        new HtmlWebpackPlugin({
          template: './index.html',
          cache: true,
        }),
      ] : []),
    ]
  };

};
