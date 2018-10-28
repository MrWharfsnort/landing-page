const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports.resolve = {
  extensions: ['.js', '.jsx'],
};

module.exports.output = {
  filename: 'main.js',
};

module.exports.devServer = {
  contentBase: './dist',
};

module.exports.module = {
  rules: [
    {
      test: /\.(sc|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader?sourceMap',
      ],
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
  ],
};

module.exports.plugins = [
  new MiniCssExtractPlugin(),
];
