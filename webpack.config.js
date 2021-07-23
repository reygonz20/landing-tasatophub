const webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            // any other rules
            {
                // Exposes jQuery for use outside Webpack build
                test: require.resolve('jquery'),
                use: [{
                    loader: 'exports-loader',
                    options: 'jQuery'
                },{
                    loader: 'exports-loader',
                    options: '$'
                }]
            }
        ]
    },
    plugins: [
        // Provides jQuery for other JS bundled with Webpack
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};
