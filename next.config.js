// Import Nextjs Plugin composer...
const withPlugins = require('next-compose-plugins');

// Import Webpack...
const webpack = require('webpack');

// Import css modules...
const withCSS = require('@zeit/next-css');

// Import sass modules...
const withSass = require('@zeit/next-sass');

// Import image modules...

const withImages = require('next-images');
const imageConfig = {};

const { parsed: localEnv } = require('dotenv').config();

const nextConfig = {
    //assetPrefix: '/sofbox-react/',
    webpack: (config, options) => {
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        });
        // modify the `config` here
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv));


        return config;
    },
    env: {
        'PORT': process.env.PORT
    }
};

module.exports = withPlugins([
    [withImages],
    [
        withCSS({
            webpack: function (config) {
                config.module.rules.push(
                    {
                        test: /\.(png|jpg|gif)$/,
                        use: {
                            loader: 'url-loader',
                            options: {
                                limit: 100000,
                                name: '[name].[ext]'
                            }
                        }
                    },
                    {
                        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    esModule: false,
                                    outputPath: 'static/fonts/',
                                    publicPath: '../fonts/',
                                    // optional, just to prettify file names
                                    name: '[name].[ext]',
                                },
                            },
                        ],
                    }
                );
                return config
            }
        })
    ],
    [
        withSass,

    ]
],nextConfig);
