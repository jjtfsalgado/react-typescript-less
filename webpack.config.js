const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.tsx'
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: "[local]___[hash:base64:5]"
                        }
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.jsx' ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        hot: true
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};