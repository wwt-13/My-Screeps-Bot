// import clear from "rollup-plugin-clear";

// tell rollup what it needs to do
// rollup是一个构建工具
// 给他一堆源代码，他就可以把源代码构建成一个可以在浏览器中运行的文件
export default {
    // 源代码入口
    input: 'src/main.js',
    // 构建产物配置
    output: {
        // 输出到哪个文件
        file: 'dist/main.js',
        format: 'cjs',
        sourcemap: true,
    },
};
