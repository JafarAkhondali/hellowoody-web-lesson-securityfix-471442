const {resolve} = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

/*
    webpack v4 和 v5的初代 我们将图片加入到src中并引入，然后执行npx webpack
    会报错！报错的内容和之前我们操作css文件的内容基本一致 
    安装之前的做法： file-loader url-loader

    webpack V5 (2022) webpack 内置了对图片处理的loader，执行npx webpack 就不会报错
    不会报错！因为最新这版webpack内置相关loader
    注意：内置的loader是webpack自己实现的，并不是把之前的file-loader url-loader直接加进来

*/

module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        filename:"./js/[name].[chunkhash:6].js",
        assetModuleFilename:"./imgs/[name].[hash:8][ext]",
        path:resolve(__dirname,"dist"),
        clean:true
    },
    resolve:{
        alias:{
            "@":resolve(__dirname,"src")
        },
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test:/\.(jpe?g|png|gif)$/,
                /*
                    asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
                    asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。
                    asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。
                    asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。
                */ 
                type:"asset/resource",   // 将图片文件移到dist目录中
                generator:{
                    filename:"img/[name].[contenthash:6][ext]"
                }
            },
            // {
            //     test:/\.(jpe?g|png|gif)$/,
            //     /*
            //         asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
            //         asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。
            //         asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。
            //         asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。
            //     */ 
            //     type:"asset/inline",  // 将图片进行base64转码，变成了一长串字符串
            // }
            // {
            //     test:/\.(jpe?g|png|gif)$/,
            //     /*
            //         asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
            //         asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。
            //         asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。
            //         asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。
            //     */ 
            //     type:"asset",  // 判断 resource和inline
            //     generator:{
            //         filename:"img/[name].[contenthash:6][ext]"
            //     },
            //     parser:{
            //         dataUrlCondition:{
            //             maxSize: 5*1024 // maxSize 是byte 字节
            //         }
            //     }
            // },
            {
                test:/\.(txt|csv)$/,
                type:"asset/source"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"./css/common.[chunkhash:6].css"
        })
    ]
}