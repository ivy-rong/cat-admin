# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## 用于识别和报告JS代码中发现的模式的工具，使代码更加一致避免错误

## Prettier 代码格式化程序 删除所有原始样式 确保输出的代码 符合一致的样式

## CSpell 拼写检查代码的命令行工具和库

## husky用于提交或者推送的时候，可以使用它检查提交消息，运行测试，检查代码等

## 前端工程化 通过制定一些列规范，借助工具和框架解决前端开发难点

      <!-- Git的hooks钩子函数可以让我们在执行git的一些命令之前或之后执行一些其他操作，我们后续很多的代码检查都会放在代码commit时或者push之前进行检查等。而husky（俗名哈士奇）就是一个git的hooks工具， -->

## 模块化

## 客户端渲染 和 服务器端渲染

## i18n

## webSocket

## 全双工通信 不用每次建立连接 可以一直通信

## 以前的双向通信 Comet 服务端可以向客户端推送数据

## 1.轮询 2.长轮询 3.iframe流

<!--
let ws = new WebSocket('ws://localhost:3000')

ws.open = function () {
  console.log('打开成功')
  ws.send('发送的消息')
}
ws.onmessage = function (e) {
  console.log('服务端发送的消息' + e.data)
}

GET 我ws://localhost:3000 HTTP/1.1
Connection: Upgrade
Upgrade: websocket升级的协议是什么
Sec-websocket-key: 用于保证安全的websocket连接 防止恶意了连接 用于握手
Sec-Websocket-Accept是根据key算出来的表示握手成功
-->
