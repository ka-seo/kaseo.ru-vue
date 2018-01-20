const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist'),
    prod: path.join(__dirname, 'prod')
};

module.exports = {
    entry: {
        app: PATHS.source + '/main.js',
    },
    output: {
        path: PATHS.build,
        filename: 'js/[name].js',
        library: '[name]'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true
                }
            },
            {
                test: /\.css$/,
                // include: PATHS.source,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!postcss-loader!sass-loader'
                })
            },
            {
                test: /\.scss$/,
                // include: path.join(__dirname, 'src/sass'),
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        'css-loader',
                        'sass-loader'
                    ],

                }),
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                loader: 'svg-url-loader?limit=100000',
                // include: PATHS.source + "/img",
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/'
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',
                    limit: 1000000,
                }
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(), //если будт ошибки сборка не произойдет и не создаст файлы
        new ExtractTextPlugin({
            filename: "[name].css",
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
        }),
        new HtmlWebpackPlugin({
            title: 'Andrew Klimov - Responsible Frontend-Developer',
            template: './src/tpl/index.html',
            // chunks: ['app', 'common'],
            filename: PATHS.build + '/index.html'
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    // devtool: '#eval-source-map'
};


if (process.env.NODE_ENV === 'development') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: false
        }),
        new webpack.ProvidePlugin({
            Vue: 'vue/dist/vue.js'
        })
    ])
}

if (process.env.NODE_ENV === 'production') {
    // module.exports.devtool = '#nosources-source-map' //#source-map
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.output.path = PATHS.prod;
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new HtmlWebpackPlugin({
            title: "Andrew Klimov - Responsible Frontend-Developer",
            template: './src/tpl/index.html',
            filename: PATHS.prod + '/index.html'
        }),
        new webpack.ProvidePlugin({
            Vue: 'vue/dist/vue.min.js'
        })
    ])
}