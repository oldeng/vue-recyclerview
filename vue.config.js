module.exports = {
    publicPath: './',
    configureWebpack: config => {
        config.entry = './examples/component/index.js';
        
    }
};