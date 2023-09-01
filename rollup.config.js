// import clear from "rollup-plugin-clear";

// tell rollup what it needs to do
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
};
