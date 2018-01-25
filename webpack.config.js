const { join } = require('path');

module.exports = {
    entry: join(__dirname, 'src/index.js'),
    output: {
        path: join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /index\.js/,
            use: require.resolve('./loader')
        }]
    }
};