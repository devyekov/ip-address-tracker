const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

var config = {
    entry: './src/index.js',
    devServer:{
        contentBase: path.join(__dirname, 'docs'),
        writeToDisk: true
    },
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "bundle.css"}),
        new HtmlWebpackPlugin({
            title: 'Ip Address Tracker',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    { loader: MiniCssExtractPlugin.loader, options: { publicPath: './' }  },
                    { loader: 'css-loader'},
                    { loader: 'sass-loader'}
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                options:{
                    outputPath: 'images',
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    }
};

module.exports = (env, argv)=>{
    if(argv.mode === 'development'){
        config.devtool = 'inline-source-map';
        config.plugins.push(
            new Dotenv({ path: './.dev.env' })
        );
    }

    if(argv.mode === 'production'){
        config.plugins.push(  
            new Dotenv()
        );
    }

    return config;
};