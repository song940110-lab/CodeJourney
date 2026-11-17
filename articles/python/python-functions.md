# Python 函式入門

## 簡介
函式（function）是將一段可重複使用的程式碼整理成獨立單位的方法。

## 定義函式
```python
def greet(name):
    return f"Hello, {name}!"

message = greet("CodeJourney")
print(message)
```

## 參數與回傳值
- **參數**：呼叫函式時傳入的資料。
- **回傳值**：使用 `return` 將結果交回呼叫端。
- 沒有明確寫出 `return` 時，Python 會回傳 `None`。

## 小結
將重複使用的邏輯封裝成函式，可以減少重複程式碼，並讓功能責任更加清楚。
