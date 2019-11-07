const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'rasa-chatbot.js',
    },
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './examples/index.html',
            inject: false,
        }),
    ],
    devServer: {
        port: 3000,
    },
};
