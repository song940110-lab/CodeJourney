document.addEventListener("DOMContentLoaded",async()=>{
 const list=document.querySelector("#article-list"),search=document.querySelector("#article-search"),filter=document.querySelector("#category-filter"),count=document.querySelector("#result-count");
 try{const [cats,articles]=await Promise.all([loadJSON("data/categories.json"),loadJSON("data/articles.json")]);
 cats.forEach(c=>{const o=document.createElement("option");o.value=c.id;o.textContent=c.name;filter.append(o);});
 const requested=new URLSearchParams(location.search).get("category");if(cats.some(c=>c.id===requested))filter.value=requested;
 function render(){const q=search.value.trim().toLowerCase(),cat=filter.value;
 const found=articles.filter(a=>(cat==="all"||a.category===cat)&&(!q||[a.title,a.summary,...(a.tags||[])].join(" ").toLowerCase().includes(q)));
 count.textContent=`共找到 ${found.length} 篇筆記`;list.replaceChildren();
 if(!found.length)return showEmpty(list,"沒有符合條件的文章，請嘗試其他關鍵字。");
 found.sort((a,b)=>b.date.localeCompare(a.date)).forEach(a=>list.append(createArticleCard(a,cats)));
 }
 search.addEventListener("input",render);filter.addEventListener("change",render);render();
 }catch(e){showEmpty(list,"文章資料載入失敗。");console.error(e);}
});