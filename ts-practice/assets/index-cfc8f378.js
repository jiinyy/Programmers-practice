(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const u="https://kdt-frontend.cat-api.programmers.co.kr",p="https://cdn.roto.codes",t={path:[{name:"root",id:"0",type:"DIRECTORY"}],selectedImage:void 0,photos:[],loading:!1};function m(){return fetch(`${u}`,{headers:{"Content-Type":"application/json"}}).then(o=>o.json())}function g(o){return o==="0"?m():fetch(`${u}/${o}`,{headers:{"Content-Type":"application/json"}}).then(d=>d.json())}function c(){var o,d;document.querySelector(".App").innerHTML=`
    <header class="Breadcrumb">
      ${t.path.map(i=>`<div data-id=${i.id}>${i.name}</div>`).join("")}
    </header>

    <div class="Nodes">
      ${t.path.length>1?`
        <div class="Node Backspace">
        <img src="https://cdn.roto.codes/images/prev.png" />
      </div>`:""} 

      ${t.photos.map(i=>`
        <div class="Node" data-id=${i.id}>
          <img src="${i.type=="DIRECTORY"?`${p}/images/directory.png`:`${p}/images/directory.png`}" />
          <p>${i.name}</p>
        </div>
        `).join("")}
    </div>

    ${t.selectedImage?`
      <div class="Modal">
        <img src="https://kdt-frontend.cat-api.programmers.co.kr/static${t.selectedImage.filePath}" alt="고양이사진" />
      </div>
    `:""}

    ${t.loading?`
      <div class="Modal">
        <div class="content">
            <img width="100%" src="https://cdn.roto.codes/images/nyan-cat.gif" alt="Loading..." />
        </div> 
      </div>
    `:""}
  `,document.querySelector(".Nodes").addEventListener("click",i=>{const s=i.target.closest("[data-id]").dataset.id,e=t.photos.find(n=>n.id===s);console.log(t.photos),console.log(e,s),e!==void 0&&(e.type=="DIRECTORY"&&(t.path.push(e),r(s)),e.type=="FILE"&&(t.selectedImage=e,c()))}),(o=document.querySelector(".Modal"))==null||o.addEventListener("click",l),(d=document.querySelector(".Node.Backspace"))==null||d.addEventListener("click",f),document.querySelector(".Breadcrumb").addEventListener("click",i=>{const s=i.target.closest("[data-id]").dataset.id,e=t.path.findIndex(n=>n.id==s);t.path=t.path.slice(0,e+1),r(s)})}window.addEventListener("keydown",h);window.addEventListener("keydown",y);const l=()=>{t.selectedImage=void 0,c()};function f(){var o,d;t.path.length>1&&r((d=(o=t.path.pop())==null?void 0:o.parent)==null?void 0:d.id)}function h(o){!t.loading&&o.key=="Backspace"&&(l(),f())}function y(o){o.key=="Escape"&&l()}async function r(o="0"){t.photos=[],t.loading=!0,c(),t.photos=await g(o),t.loading=!1,c()}r();
