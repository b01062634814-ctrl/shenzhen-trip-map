# 深圳之旅

一个以地图为首页的深圳旅行地点浏览站。当前版本包含 20 个候选地点、场景分类、地点详情、附近地点直线距离与高德导航。

## 已确定的产品范围

- 公开访问，不需要登录
- 两人旅行，不包含住宿选择或朋友住址
- 行程天数未定，第一版重点是浏览地点
- 所有地点使用同等级地图标记
- 景点资料保存在 lib/places.ts，暂不使用数据库

## 本地运行

需要 Node.js 22.13 或更高版本。

1. 安装依赖：pnpm install
2. 复制 .env.example 为 .env.local
3. 填入高德 Web 端 JS API Key 与 jscode
4. 启动：pnpm dev

未配置高德 Key 时，网站会显示内置的位置关系预览，地点浏览、筛选、详情和距离计算仍可使用。

## 高德地图变量

- NEXT_PUBLIC_AMAP_KEY：高德 Web 端（JS API）Key，可出现在浏览器端。
- AMAP_JS_CODE：高德安全密钥，只放在服务器环境变量中，不提交到 Git。

app/api/amap/[...path]/route.ts 提供同源安全代理，并在服务器侧附加 jscode。

## 部署

仓库可部署到 Vercel、Cloudflare Workers 等支持 Next.js 服务端路由与环境变量的平台。由于安全密钥代理需要服务端运行环境，不建议直接部署到纯静态的 GitHub Pages。

## 图片许可

当前三张实景图来自 Wikimedia Commons，使用 CC BY-SA 4.0。页面中保留作者及来源链接，完整记录见 public/images/ATTRIBUTION.md。其余地点等待补充用户实拍或明确授权的图片。

## 内容维护

地点数据集中在 lib/places.ts。营业时间、预约、票价与临时关闭信息计划在出发前 7–10 天再次核对。
