# CodeJourney 專案開發規範

## 專案目的
CodeJourney 是個人程式技術學習筆記網站，提供技術分類、文章瀏覽、搜尋及程式碼範例。內容以繁體中文為主，技術名稱、API 與程式碼保留原文。

## 技術架構
- 使用 HTML、CSS、原生 JavaScript、JSON 與 Markdown。
- 部署於 GitHub Pages，不依賴伺服器端程式或資料庫。
- 不新增未經需求確認的框架、建置工具或外部服務。

## 視覺規範
- 採深色開發者風格：深藍黑背景、藍色／青色強調色、柔和灰階文字。
- 頁面共用導覽列、字體、卡片、按鈕、間距及內容寬度。
- 文字需有足夠對比，互動元素需提供 hover 與 focus 狀態。
- 桌面及手機版皆須正常瀏覽，不可產生水平溢位。
- 全站共用 `assets/css/style.css`，不得任意複製全域樣式。

## 頁面與資料結構
- `index.html`：首頁及最新筆記。
- `categories.html`：技術分類。
- `articles.html`：文章列表、搜尋及分類篩選。
- `article.html`：依 URL 參數載入單篇文章。
- `data/categories.json`：分類資料。
- `data/articles.json`：文章索引。
- `articles/<category>/<slug>.md`：文章正文。
- `assets/js/`：依功能拆分 JavaScript。

## 新增文章規範
1. 檔名使用英文小寫與連字號，例如 `python-functions.md`。
2. 放入正確的 `articles/<category>/` 資料夾。
3. 在 `data/articles.json` 新增索引，至少包含 `id`、`title`、`category`、`date`、`summary`、`file`、`tags`。
4. `id` 必須唯一；`file` 使用相對於網站根目錄的路徑。
5. 文章使用繁體中文，建議包含簡介、重點、範例及小結。
6. 程式碼區塊必須標示語言；未經確認不得宣稱範例已測試。

## 程式與檔案規範
- HTML、CSS、JavaScript 分開存放。
- 檔名使用英文小寫與連字號，避免空白及中文檔名。
- 修改前先檢查現有實作及引用關係，採最小必要修改並保留既有功能。
- 不可將 API Key、密碼或存取權杖寫入專案。
- 使用相對路徑，確保 GitHub Pages 專案子路徑可正常載入資源。

## JavaScript 與資料處理
- 非同步讀取 JSON／Markdown 時，需處理載入失敗並顯示可理解的訊息。
- 顯示資料文字時優先使用 `textContent`，避免將未信任文字直接插入 `innerHTML`。
- URL 參數需檢查；找不到文章時顯示提示，不可讓頁面空白。
- 搜尋至少支援標題、摘要及標籤。

## 完成前檢查
- 確認導覽連結、頁面路徑及 JSON 格式正確。
- 確認文章索引中的檔案存在。
- 確認首頁、分類、列表、文章頁、搜尋及篩選可運作。
- 檢查手機版版面及 GitHub Pages 相對路徑。

## AI 協作原則
- 修改前先閱讀本文件及相關程式。
- 不確定需求時先詢問，不自行擴張功能。
- 完成後摘要修改檔案、功能及尚未驗證項目。
- 不得宣稱未實際執行或檢查的功能已通過測試。
