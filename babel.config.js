module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            '@babel/env',
            {
                targets: {
                    ie: '11',
                    edge: '17',
                    firefox: '60',
                    chrome: '67',
                    safari: '11.1'
                },
                // 按需加载 polyfill
                // 如果我们不使用 env preset 的 "useBuiltIns" 参数（即设置为 "usage"），那么我们必须在所有代码之前通过 require 加载一次完整的 polyfill
                // useBuiltIns: 'usage'
            }
        ]
    ];
    const plugins = [];

    return {
        presets,
        plugins
    }
}