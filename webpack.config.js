const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getEntry(projectName) {
    let entry = {};
    for (let name of projectName) {
        entry[`${name}/main`] = `./src/${name}/main.js`
    }
    return entry
}

function getHtmlPlugin(projectName) {
    let htmlPlugins = [];
    for (let name of projectName) {
        htmlPlugins.push(new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, `./dist/${name}/index.html`),
            template: path.resolve(__dirname, `./src/${name}/index.html`),
            chunks: [`${name}/main`],
            hash: true
        }))
    }
    return htmlPlugins
}

// 将projectName修改为自己的项目名称
const projectName = [
    'helloWorld'
];

const config = {
    mode: 'production',
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,//不跳转
    },
    entry: getEntry(projectName),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 它会应用到普通的 `.js` 文件以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // 它会应用到普通的 `.css` 文件以及 `.vue` 文件中的 `<style>` 块
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        ...getHtmlPlugin(projectName),
        // 请确保引入这个插件来施展魔法
        new VueLoaderPlugin()
    ]
};

module.exports = config