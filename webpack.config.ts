import * as path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";

const mode = 'development';

const entry = {
    index: path.resolve(__dirname, './src/app.tsx')
};

const output = {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
};

const modules = {
    rules: [
        {
            test: /\.(ts|tsx)$/,
            use: 'ts-loader'
        }
    ]
};

const resolve = {
    extensions: [
        '.js',
        '.ts',
        '.tsx'
    ]
};

const plugins = [
    new HtmlWebpackPlugin({
        template: 'public/index.html'
    })
];

const devServer = {
    client: {
        overlay: true,
        progress: true,
    },
    open: true,
    port: 8080,
    historyApiFallback: true
};

const config: Configuration = {
    mode: mode,
    entry: entry,
    output: output,
    module: modules,
    resolve: resolve,
    plugins: plugins,
    devServer: devServer
};

export default config;
