document.addEventListener("DOMContentLoaded",async()=>{
 const box=document.querySelector("#article-content"),id=new URLSearchParams(location.search).get("id");
 if(!id)return showEmpty(box,"缺少文章編號，請從文章列表重新選擇。");
 try{const [cats,articles]=await Promise.all([loadJSON("data/categories.json"),loadJSON("data/articles.json")]);
 const a=articles.find(x=>x.id===id);if(!a)return showEmpty(box,"找不到這篇文章。");
 const res=await fetch(a.file);if(!res.ok)throw new Error("文章檔案無法載入。");
 const md=await res.text(),meta=document.createElement("div");meta.className="card-meta";meta.textContent=`${categoryName(cats,a.category)} · ${a.date}`;
 const title=document.createElement("h1");title.textContent=a.title;const summary=document.createElement("p");summary.className="muted";summary.textContent=a.summary;
 const body=document.createElement("div");body.innerHTML=renderMarkdown(md);box.replaceChildren(meta,title,summary,body);document.title=`${a.title}｜CodeJourney`;
 }catch(e){showEmpty(box,"文章載入失敗，請稍後再試。");console.error(e);}
});
function renderMarkdown(md){
 const esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
 const parts=esc(md).split(/```([\w-]*)\n([\s\S]*?)```/g);let out="";
 for(let i=0;i<parts.length;i++){if(i%3===0){out+=parts[i].split(/\n{2,}/).map(b=>{const t=b.trim();if(!t)return "";if(t.startsWith("# "))return "";if(t.startsWith("## "))return `<h2>${inline(t.slice(3))}</h2>`;if(t.startsWith("### "))return `<h3>${inline(t.slice(4))}</h3>`;if(/^- /m.test(t))return `<ul>${t.split("\n").filter(x=>x.startsWith("- ")).map(x=>`<li>${inline(x.slice(2))}</li>`).join("")}</ul>`;return `<p>${inline(t).replace(/\n/g,"<br>")}</p>`;}).join("");}else if(i%3===2)out+=`<pre><code>${parts[i]}</code></pre>`;}
 return out;
}
function inline(s){return s.replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>");}
