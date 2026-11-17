document.addEventListener("DOMContentLoaded",async()=>{
 const box=document.querySelector("#category-list");
 try{const [cats,articles]=await Promise.all([loadJSON("data/categories.json"),loadJSON("data/articles.json")]);
 cats.forEach(c=>box.append(createCategoryCard(c,articles.filter(a=>a.category===c.id).length)));
 }catch(e){showEmpty(box,"分類資料載入失敗，請確認 JSON 與網站路徑。");console.error(e);}
});