const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx', // 엔트리 파일
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 경로 별칭 설정
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx'], // 확장자 처리
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // ts/tsx 파일 처리
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/, // js 파일을 babel로 처리
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // css 파일 처리
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // 빌드 전에 dist 폴더를 정리
    new HtmlWebpackPlugin({
      template: './public/index.html', // 템플릿 파일 지정
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    port: 3000,
    hot: true,
  },
};
