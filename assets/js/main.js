document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
});
async function loadJSON(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`無法載入資料：${path}`);
  return response.json();
}
function categoryName(categories,id){return categories.find(x=>x.id===id)?.name||"未分類";}
function createArticleCard(article,categories){
  const card=document.createElement("a");card.className="article-card";card.href=`article.html?id=${encodeURIComponent(article.id)}`;
  const meta=document.createElement("div");meta.className="card-meta";meta.textContent=`${categoryName(categories,article.category)} · ${article.date}`;
  const title=document.createElement("h3");title.textContent=article.title;
  const summary=document.createElement("p");summary.textContent=article.summary;
  const tags=document.createElement("div");tags.className="tags";
  (article.tags||[]).forEach(t=>{const el=document.createElement("span");el.className="tag";el.textContent=t;tags.append(el);});
  card.append(meta,title,summary,tags);return card;
}
function createCategoryCard(category,count=0){
  const card=document.createElement("a");card.className="category-card";card.href=`articles.html?category=${encodeURIComponent(category.id)}`;
  const icon=document.createElement("div");icon.className="category-icon";icon.textContent=category.icon;
  const title=document.createElement("h3");title.textContent=category.name;
  const desc=document.createElement("p");desc.textContent=category.description;
  const meta=document.createElement("p");meta.className="card-meta";meta.style.marginTop="15px";meta.textContent=`${count} 篇筆記`;
  card.append(icon,title,desc,meta);return card;
}
function showEmpty(container,message){const el=document.createElement("div");el.className="empty-state";el.textContent=message;container.replaceChildren(el);}
