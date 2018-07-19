var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var distEnv = new webpack.DefinePlugin({
    NODE_ENV: '"uat"',
    ENV_HOST: '"https://hms-uat.test-cignacmb.com"'
});

module.exports = {
    entry: {
        "akg_login": "./akg/view/login/index.js",
        "akg_detail": "./akg/view/detail/index.js",
        "akg_premium": "./akg/view/premium/index.js",
        "akg_info": "./akg/view/info/index.js",
        "akg_health": "./akg/view/health/index.js",
        "akg_confirm": "./akg/view/confirm/index.js",
        "akg_myOrder": "./akg/view/myOrder/index.js",
        "akg_preview": "./akg/view/preview/index.js",
        "akg_upload": "./akg/view/upload/index.js",
        "akg_pay": "./akg/view/pay/index.js",
        "akg_loginTask": "./akg/view/loginTask/index.js",
        "akg_emptyProject": "./akg/view/emptyProject/index.js",
        "akg_taskTwo": "./akg/view/taskTwo/index.js",
        "akg_fill": "./akg/view/fill/index.js",
        "akg_confirm": "./akg/view/confirm/index.js"

    },
    output: {
        path: path.join(__dirname, "../dist/local"),
        publicPath: "/",
        filename: "js/[name].js",
        chunkFilename: "js/[id].chunk.js"
    },
    module: {
        loaders: [
            //加载器
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!sass") //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
            },
            {test: /\.html$/, loader: "html"},
            {
                test: /\.(png|jpg|jpeg|pdf|gif)$/,
                loader: "url-loader?limit=8000&name=./img/[hash].[ext]"
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        distEnv,

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery",
            avalon: "avalon2"
        }),
        new webpack.ProvidePlugin({
            //前端调试库
            eruda: "eruda",
            "window.eruda": "eruda",
            verify: "wufan_verify_lib"
        }),
        new ExtractTextPlugin("css/[name].css"), //单独使用style标签加载css并设置其路径
        new CommonsChunkPlugin({
            name: "common.js",
            minChunks: 10
        }),
        new HtmlWebpackPlugin({
            filename: 'akg-login.html',
            chunks: ['common.js', 'akg_login'],
            template: './akg/view/login/index.html',
            inject: true,
            hash: true
        }), new HtmlWebpackPlugin({
            filename: 'akg-pay.html',
            chunks: ['common.js', 'akg_pay'],
            template: './akg/view/pay/index.html',
            inject: true,
            hash: true
        }), new HtmlWebpackPlugin({
            filename: 'akg-detail.html',
            chunks: ['common.js', 'akg_detail'],
            template: './akg/view/detail/index.html',
            inject: true,
            hash: true
        }), new HtmlWebpackPlugin({
            filename: 'akg-premium.html',
            chunks: ['common.js', 'akg_premium'],
            template: './akg/view/premium/index.html',
            inject: true,
            hash: true
        }), new HtmlWebpackPlugin({
            filename: 'akg-info.html',
            chunks: ['common.js', 'akg_info'],
            template: './akg/view/info/index.html',
            inject: true,
            hash: true
        }), new HtmlWebpackPlugin({
            filename: 'akg-health.html',
            chunks: ['common.js', 'akg_health'],
            template: './akg/view/health/index.html',
            inject: true,
            hash: true
        }), new HtmlWebpackPlugin({
            filename: 'akg-confirm.html',
            chunks: ['common.js', 'akg_confirm'],
            template: './akg/view/confirm/index.html',
            inject: true,
            hash: true
        }), new HtmlWebpackPlugin({
            filename: 'akg-myOrder.html',
            chunks: ['common.js', 'akg_myOrder'],
            template: './akg/view/myOrder/index.html',
            inject: true,
            hash: true
        }), new HtmlWebpackPlugin({
            filename: 'akg-preview.html',
            chunks: ['common.js', 'akg_preview'],
            template: './akg/view/preview/index.html',
            inject: true,
            hash: true
        }), new HtmlWebpackPlugin({
            filename: 'akg-upload.html',
            chunks: ['common.js', 'akg_upload'],
            template: './akg/view/upload/index.html',
            inject: true,
            hash: true
        }), new HtmlWebpackPlugin({
            filename: 'akg-loginTask.html',
            chunks: ['common.js', 'akg_loginTask'],
            template: './akg/view/loginTask/index.html',
            inject: true,
            hash: true
        })
   ,
        new HtmlWebpackPlugin({
            filename: 'akg-emptyProject.html',
            chunks: ['common.js', 'akg_emptyProject'],
            template: './akg/view/emptyProject/index.html',
            inject: true,
            hash: true
        }),
        new HtmlWebpackPlugin({
            filename: 'akg-taskTwo.html',
            chunks: ['common.js', 'akg_taskTwo'],
            template: './akg/view/taskTwo/index.html',
            inject: true,
            hash: true
        }),
        new HtmlWebpackPlugin({
            filename: 'akg-fill.html',
            chunks: ['common.js', 'akg_fill'],
            template: './akg/view/fill/index.html',
            inject: true,
            hash: true
        }),
        new HtmlWebpackPlugin({
            filename: 'akg-confirm.html',
            chunks: ['common.js', 'akg_confirm'],
            template: './akg/view/confirm/index.html',
            inject: true,
            hash: true
        }),

    ],
    devServer: {
        contentBase: "../dist/local",
        disableHostCheck: true,
        proxy: {
            "/gis_server/*": {
                target: "http://hms-uat.test-cignacmb.com",
                host: "hms-uat.test-cignacmb.com",
                secure: false,
                onProxyRes: function onProxyRes(proxyRes, req, res) {
                    if (proxyRes.headers.location) {
                        var address = getIPAdress();
                        proxyRes.headers.location =
                            "http://" + address + ":8018"; //重写重定向路径
                    }
                }
            }
        }
    }
};

var getIPAdress = function () {
    //获取ip地址
    var interfaces = require("os").networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (
                alias.family === "IPv4" &&
                alias.address !== "127.0.0.1" && !alias.internal
            ) {
                return alias.address;
            }
        }
    }
};
