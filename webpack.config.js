

const { join: joinPath, resolve: resolvePath } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')


const webpack = require('webpack')

const dotenv = require('dotenv').config({
    path: joinPath(__dirname, '.env')
})



module.exports = {
    mode: 'development',
    entry: joinPath(__dirname, '/src/index.tsx'),
    output: {
        path: resolvePath(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
                    }
                }
            },
            {
                test: /\.svg$/i,
                use: ['@svgr/webpack']
            },
            {
                test: /\.(png|jp(e*)g|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts', '.scss']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: joinPath(__dirname, 'public', 'index.html')
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.parsed)
        })
    ]
}
