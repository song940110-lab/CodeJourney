document.addEventListener("DOMContentLoaded",async()=>{
 const cats=document.querySelector("#home-categories"),list=document.querySelector("#home-articles");
 try{const [categories,articles]=await Promise.all([loadJSON("data/categories.json"),loadJSON("data/articles.json")]);
 categories.forEach(c=>cats.append(createCategoryCard(c,articles.filter(a=>a.category===c.id).length)));
 articles.slice().sort((a,b)=>b.date.localeCompare(a.date)).slice(0,4).forEach(a=>list.append(createArticleCard(a,categories)));
 }catch(e){showEmpty(cats,"分類資料載入失敗。");showEmpty(list,"文章資料載入失敗。");console.error(e);}
});