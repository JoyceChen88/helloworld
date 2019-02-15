const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
    baseUrl: "./",
    chainWebpack: config => {
        // config.resolve
        // .modules
        // .add(resolve('src/lib'))
        // .end()

        // config.resolveLoader.modules
        // .add(resolve('src/lib'))
        // .end()

        // config.module
        // .rule('js')
        // .include
        // .add(resolve('src/lib'))
        // .end()
        // config.resolve.alias.set('vant1', resolve('src/lib/vant1'))

        config.externals( {
            vue: "Vue",
            vuex: "Vuex",
            axios: "axios",
            lodash: "_",
            "vue-router": "VueRouter"
        })

        const svgRule = config.module.rule("svg");

        // 清除已有的所有 loader。
        // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        svgRule.uses.clear();

        // 添加要替换的 loader
        // svgRule.use("vue-svg-loader").loader("vue-svg-loader");
        svgRule
        .use("svg-sprite-loader")
        .loader("svg-sprite-loader")
        .options({
            symbolId: "icon-[name]"
        });

    }
  }