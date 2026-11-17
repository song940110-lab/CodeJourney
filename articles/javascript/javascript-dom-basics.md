# JavaScript DOM 基礎

## 簡介
DOM（Document Object Model）會將 HTML 文件表示成可由程式操作的節點結構。

## 選取元素
```javascript
const title = document.querySelector("#page-title");
```

## 修改文字
```javascript
const title = document.querySelector("#page-title");
if (title) {
  title.textContent = "Welcome to CodeJourney";
}
```

使用 `textContent` 設定純文字，可以避免將字串當成 HTML 解析。

## 小結
DOM 是建立網頁互動功能的重要基礎，常見用途包含更新文字、切換樣式及回應使用者操作。
