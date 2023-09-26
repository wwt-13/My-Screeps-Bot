import clear from "rollup-plugin-clear";
import screeps from "rollup-plugin-screeps";
import copy from "rollup-plugin-copy";
// 完美解决模块化js代码不支持require的问题
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// tell rollup what it needs to do
// rollup是一个构建工具
// 给他一堆源代码，他就可以把源代码构建成一个可以在浏览器中运行的文件

let config;

// console.log(process.env);

// process对象是一个全局变量，其中提供了有关当前Node.js进程的信息
// process.env属性会返回包含用户环境的对象（环境变量可以在package.json的script中设置）
if (!process.env.DEST) console.log("未指定目标，代码会被编译但不会上传");
else if (!(config = require("./.secret.json")[process.env.DEST])) {
    // 发现了require的一个逆天功能，可以直接从JSON文件导入JSON对象
    throw new Error(
        `无效目标，请检查.secret.json中是否包含${process.env.DEST}配置`
    );
}
// 根据指定的配置决定是上传还是复制到本地文件夹
const pluginDeploy =
    config && config.copyPath
        ? copy({
              targets: [
                  {
                      src: "dist/main.js",
                      dest: config.copyPath,
                  },
                  {
                      src: "dist/main.js.map",
                      dest: config.copyPath,
                      rename: (name) => name + ".map.js",
                      transform: (contents) =>
                          `module.exports = ${contents.contents.toString()};`,
                  },
              ],
              hook: "writeBundle",
              verbose: true,
          })
        : // 更新.map到.map.js并上传
          screeps({ config, dryRun: !config });

export default {
    // 源代码入口
    input: "src/main.js",
    // 构建产物配置
    output: {
        // 输出到哪个文件
        file: "dist/main.js",
        format: "cjs",
        sourcemap: true,
    },
    plugins: [
        // 清除上次编译结果
        clear({ targets: ["dist"] }),
        // 执行上传或复制
        pluginDeploy,
    ],
};
