# 科科 AI Shorts 官方網站

[![GitHub](https://img.shields.io/badge/GitHub-keke--ai--shorts-blue?logo=github)](https://github.com/Sofiayan86/keke-ai-shorts)
[![YouTube](https://img.shields.io/badge/YouTube-科科%20AI%20Shorts-red?logo=youtube)](https://www.youtube.com/@kekeAIShorts)
[![Firebase](https://img.shields.io/badge/Deployed%20on-Firebase-orange?logo=firebase)](https://keke-ai-shorts.web.app)

## 📋 項目簡介

科科 AI Shorts 是一個專注於 AI 工具評測與教學的 YouTube 頻道官方網站。本網站提供：

- **5 分鐘短片**：快速了解最新 AI 工具與科技趨勢
- **互動式指南**：深度探索 AI 相關概念
- **工具實測**：真實、無護航的 AI 工具評測
- **新手教學**：從零開始的 Vibe Coding 進階指南

## 🚀 功能特色

### 📺 精選播放清單
- **AI 工具踩雷實測**：最新 AI 模型與工具的開箱評測
- **新手 Vibe Coder 進階指南**：零基礎 AI 輔助編程教學
- **Pod 精讀筆記**：5 分鐘濃縮 30-60 分鐘英文 Podcast 精華
- **AI 對決實驗室**：AI 工具實戰對比測試

### 🎯 頻道專屬內容
- **Vibe Coding 互動式探索指南**：軟體開發新典範的深度解析
- **AI Prompt 溝通藝術**：提升與 AI 溝通效率的專業指南

### 🌐 多語言支援
- 繁體中文（預設）
- English

### 📱 響應式設計
- 支援桌面、平板、手機等各種裝置
- 現代化的 UI/UX 設計
- 流暢的動畫效果

## 🛠 技術架構

### 前端技術
- **HTML5** - 語義化標記
- **CSS3** - 現代化樣式
- **JavaScript (ES6+)** - 互動功能
- **Tailwind CSS** - 實用優先的 CSS 框架
- **Chart.js** - 數據視覺化
- **Font Awesome** - 圖示庫

### 部署與託管
- **Firebase Hosting** - 網站託管
- **Firebase Functions** - 無伺服器後端功能
- **GitHub** - 版本控制與協作

### 分析與追蹤
- **Google Analytics 4** - 網站流量分析
- **Google Tag Manager** - 標籤管理

## 📂 項目結構

```
keke-ai-shorts/
├── index.html                 # 主頁面
├── favicon.ico                # 網站圖示
├── site.webmanifest          # Web App Manifest
├── subsite/                   # 子頁面目錄
│   ├── AI-prompt.html         # AI Prompt 指南頁面
│   └── vibe-coding.html       # Vibe Coding 指南頁面
├── (subsite)/                 # Firebase 預設頁面
│   ├── index.html             # Firebase 歡迎頁
│   └── 404.html               # 404 錯誤頁面
├── functions/                 # Firebase Functions
│   ├── index.js               # 雲端函數
│   └── package.json           # 依賴配置
├── assets/                    # 靜態資源
│   └── icons/                 # Favicon 和應用圖示
│       ├── favicon.svg        # SVG 格式圖示
│       ├── favicon-16x16.png  # 16x16 PNG 圖示
│       ├── favicon-32x32.png  # 32x32 PNG 圖示
│       ├── apple-touch-icon.png # Apple 觸控圖示
│       ├── android-chrome-192x192.png # Android 圖示
│       ├── android-chrome-512x512.png # Android 大圖示
│       └── README.md          # 圖示文件說明
├── firebase.json              # Firebase 配置
├── .firebaserc               # Firebase 項目配置
└── README.md                 # 項目說明文件
```

## 🚀 本地開發

### 環境要求
- Node.js 16+
- Firebase CLI

### 安裝與運行
1. **克隆項目**
   ```bash
   git clone https://github.com/Sofiayan86/keke-ai-shorts.git
   cd keke-ai-shorts
   ```

2. **安裝 Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

3. **登入 Firebase**
   ```bash
   firebase login
   ```

4. **本地開發伺服器**
   ```bash
   firebase serve
   ```

5. **訪問網站**
   - 打開瀏覽器訪問 `http://localhost:5000`

### 部署
```bash
# 部署到 Firebase
firebase deploy

# 僅部署 Hosting
firebase deploy --only hosting

# 僅部署 Functions
firebase deploy --only functions
```

## 🎨 設計系統

### 色彩配置
- **主色調**：`#00A99D` (Custom Teal)
- **背景色**：`#111827` (Dark Gray)
- **文字色**：`#FFFFFF` / `#9CA3AF`
- **強調色**：`#F59E0B` (Amber)

### 字體
- **中文**：系統預設字體
- **英文**：Inter, system-ui, sans-serif
- **等寬字體**：Monaco, Menlo, 'Ubuntu Mono'

## 📊 SEO 與效能優化

### SEO 特色
- ✅ 語義化 HTML 結構
- ✅ Open Graph 標籤
- ✅ Twitter Cards
- ✅ 結構化資料 (JSON-LD)
- ✅ 適當的標題層級
- ✅ Alt 文字與 ARIA 標籤

### 效能優化
- ✅ 圖片延遲載入
- ✅ CDN 資源
- ✅ 程式碼壓縮
- ✅ 快取策略

## 🤝 貢獻指南

歡迎提交 Issue 和 Pull Request！

### 開發流程
1. Fork 此項目
2. 創建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 開啟 Pull Request

## 📄 授權

本項目採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 文件

## 📞 聯絡我們

- **YouTube 頻道**：[@kekeAIShorts](https://www.youtube.com/@kekeAIShorts)
- **官方網站**：[keke-ai-shorts.web.app](https://keke-ai-shorts.web.app)
- **GitHub**：[Sofiayan86/keke-ai-shorts](https://github.com/Sofiayan86/keke-ai-shorts)

## 🙏 致謝

本頻道由 **直立猿** 與 **AI Agent** 共同創作，感謝所有觀眾的支持！

---

⭐ 如果這個項目對你有幫助，請給我們一個 Star！
