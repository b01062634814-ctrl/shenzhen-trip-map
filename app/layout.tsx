import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "深圳之旅 · 地图攻略",
  description: "用地图浏览深圳值得去的海边、城市地标、人文空间与特色街区。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
