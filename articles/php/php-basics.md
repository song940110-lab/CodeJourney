# PHP 基礎入門

## 簡介
PHP 是一種常用於伺服器端網頁開發的程式語言。PHP 程式通常由伺服器執行，再將產生的 HTML 回應傳送給瀏覽器。本篇整理變數、輸出、條件判斷及陣列等基本概念。

## 1. PHP 程式標記與輸出
PHP 程式碼通常寫在 `<?php` 與 `?>` 標記之間。可以使用 `echo` 輸出文字：

```php
<?php
 echo "Hello, CodeJourney!";
```

如果 PHP 檔案最後只有 PHP 程式碼，通常可以省略結尾的 `?>`，避免不必要的空白輸出。

## 2. 變數與資料型態
PHP 變數以 `$` 開頭，不需要在宣告時指定資料型態：

```php
<?php
$name = "Amy";
$age = 20;
$isStudent = true;

 echo $name;
 echo $age;
```

常見資料型態包含字串（string）、整數（int）、浮點數（float）、布林值（bool）及陣列（array）。

## 3. 條件判斷
使用 `if`、`elseif` 與 `else`，依照條件執行不同程式：

```php
<?php
$score = 85;

if ($score >= 60) {
    echo "及格";
} else {
    echo "不及格";
}
```

比較資料時，通常優先使用 `===` 與 `!==`，讓比較同時檢查值與型態，減少型態轉換造成的非預期結果。

## 4. 陣列
PHP 陣列可以保存多筆資料。索引陣列使用數字索引，關聯陣列則使用自訂鍵名：

```php
<?php
$languages = ["PHP", "JavaScript", "Python"];
$user = [
    "name" => "Amy",
    "role" => "student"
];

echo $languages[0];
echo $user["name"];
```

## 5. 表單資料的基本處理
HTML 表單可以透過 `method="post"` 將資料送到 PHP。接收資料時，應先確認欄位是否存在，並依需求驗證及清理輸入：

```php
<?php
$name = trim($_POST["name"] ?? "");

if ($name === "") {
    echo "請輸入姓名";
} else {
    echo "收到資料";
}
```

若要將使用者輸入顯示在 HTML 頁面，應使用適當的輸出編碼，例如 `htmlspecialchars()`，避免將輸入內容直接當成 HTML 解讀。實際應用仍須依資料用途進行驗證與安全處理。

## 重點整理
- PHP 變數以 `$` 開頭。
- `echo` 可以輸出文字或變數內容。
- 使用 `if`、`elseif`、`else` 控制程式流程。
- 陣列可保存多筆資料，常見形式有索引陣列與關聯陣列。
- 處理表單資料時，應檢查欄位、驗證輸入，並在輸出至 HTML 時進行適當編碼。

## 小結
PHP 的基本語法包含變數、輸出、條件判斷與陣列。掌握這些概念後，就能進一步學習表單處理、函式、資料庫連線及動態網頁開發。
