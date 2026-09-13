# xishuashua（洗刷刷官网）

昆明洗刷刷全铝家具官网 —— 全铝洗衣柜 / 全铝家具 / 全铝浴室柜。

## 技术栈

- Vue 3 + Vue CLI 5
- Vue Router（hash 模式）
- Element Plus + `@element-plus/icons-vue`
- Pinia

## 本地开发

```bash
npm install
npm run serve
```

开发服务器默认运行在 `http://localhost:8080/`，同时会暴露一个局域网地址（形如 `http://192.168.x.x:8080/`）。手机与电脑连同一 WiFi，即可用该地址在移动端预览。

## 构建

```bash
npm run build
```

产物输出到 `dist/`。

## 路由

采用 hash 模式，URL 带 `#`：

| 路径 | 页面 |
| --- | --- |
| `/#/xishuashua` | 首页 |
| `/#/xishuashua/products/laundry` | 全铝洗衣柜 |
| `/#/xishuashua/products/furniture` | 全铝家具 |
| `/#/xishuashua/products/bathroom` | 全铝浴室柜 |

## 目录结构

- `src/assets/images/xishuashua/` —— 站点图片素材
- `src/components/` —— XssHeader / XssFooter
- `src/layouts/` —— XssLayout（站点外壳）
- `src/router/index.js` —— 路由表
- `src/views/` —— 各页面

## 样式约定

页面为 Vue SFC（`<script setup>` + scoped style）。主色调 `#6B5C4A`（棕）/ `#F5F1EC`（米白），响应式断点 `768px`（平板）、`480px`（手机）。
