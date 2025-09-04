class m{constructor(){const a=[2567,2519,2414,9144,2418,7736,6934,2417],e=[10002,4261,10662,11025,4260,1775,2299],t=[1814,3504,1798,10266,10135,6933,8617,2156,6240,3578,3213,2461,3175,2332,2419],n=[];this.categories={english:{name:"English",logo:null,certificates:a.map(r=>`https://platzi.com/Migue.dev/curso/${r}-course/diploma-og/og.jpeg`)},python:{name:"Python",logo:null,certificates:e.map(r=>`https://platzi.com/Migue.dev/curso/${r}-course/diploma-og/og.jpeg`)},javascript:{name:"JavaScript",logo:null,certificates:t.map(r=>`https://platzi.com/Migue.dev/curso/${r}-course/diploma-og/og.jpeg`)},uxui:{name:"UX/UI",logo:null,certificates:n.map(r=>`https://platzi.com/Migue.dev/curso/${r}-course/diploma-og/og.jpeg`)}}}getCategories(){return Object.entries(this.categories).map(([a,e])=>({id:a,name:e.name,logo:e.logo}))}async getCertificatesByCategory(a){try{const e=this.categories[a];return e?(console.log(`Cargando ${e.certificates.length} certificados para la categoría: ${a}`),console.log("URLs generadas:",e.certificates),e.certificates):(console.warn(`Categoría no encontrada: ${a}`),[])}catch(e){return console.error("Error al obtener certificados:",e),[]}}async validateCertificates(a){if(!a||!a.length)return[];try{return(await Promise.allSettled(a.map(t=>this.checkImageUrl(t).then(n=>({url:t,isValid:n}))))).filter(t=>t.status==="fulfilled"&&t.value.isValid).map(t=>t.value.url)}catch(e){return console.error("Error al validar certificados:",e),[]}}checkImageUrl(a){return new Promise(e=>{if(!a||typeof a!="string")return e(!1);const t=new Image;let n;n=setTimeout(()=>{r(),e(!1)},3e3);const r=()=>{n&&clearTimeout(n),t.onload=null,t.onerror=null,t.src=""};t.onload=()=>{const i=t.width>0&&t.height>0;r(),e(i)},t.onerror=()=>{r(),e(!1)},t.loading="lazy",t.src=a})}getCategoryInfo(a){return this.categories[a]||null}}const f=new m,p=async c=>{try{return await f.getCertificatesByCategory(c)}catch(a){return console.error(`Error al cargar certificados de ${c}:`,a),[]}};function b(c,a,e=null){return new Promise(t=>{const n=c.querySelectorAll(".certificate-img");let r=0,i=0;if(console.log(`📸 Esperando que carguen ${n.length} imágenes...`),n.length===0){t();return}const l=()=>{const o=n.length,s=r+i;e&&(e.textContent=`Cargando imágenes: ${s}/${o}`),s>=o&&(console.log(`✅ Todas las imágenes procesadas: ${r} exitosas, ${i} con error`),e&&(e.textContent="¡Certificados cargados!"),t())};n.forEach((o,s)=>{const d=()=>{r++,o.style.opacity="1",o.style.transition="opacity 0.5s ease-in-out",console.log(`📸 Imagen ${s+1} cargada`),l()},g=()=>{i++,o.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmM2Y0ZjY7c3RvcC1vcGFjaXR5OjEiIC8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZTVlN2ViO3N0b3Atb3BhY2l0eToxIiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZykiLz48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNjAiIHI9IjMwIiBmaWxsPSJub25lIiBzdHJva2U9IiNjY2QiIHN0cm9rZS13aWR0aD0iMyIvPjxwYXRoIGQ9Ik0xMzUgMTQ1bDEwIDEwbTAtMTBsLTEwIDEwIiBzdHJva2U9IiNjY2QiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTAlIiB5PSI2MCUiIGZvbnQtZmFtaWx5PSJBCMLHSYW4sc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YTNiNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNlcnRpZmljYWRvIG5vIGRpc3BvbmlibGU8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI3NSUiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjYmJjIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW50w6ludGVsbyBkZSBudWV2bzwvdGV4dD48L3N2Zz4=",o.style.opacity="1",o.style.transition="opacity 0.5s ease-in-out",console.log(`❌ Error al cargar imagen ${s+1}`),l()};o.complete&&o.naturalWidth>0?d():o.complete?g():(o.addEventListener("load",d,{once:!0}),o.addEventListener("error",g,{once:!0}))}),setTimeout(()=>{r+i<n.length&&(console.log("⏰ Timeout: forzando resolución después de esperar imágenes"),t())},1e4)})}function h(){console.log("🔍 Iniciando certificate logic...");const c=document.getElementById("certificate-container"),a=document.getElementById("category-cards-container");if(console.log("📦 Elementos encontrados:",{certificateContainer:!!c,categoryCardsContainer:!!a}),!c||!a){console.error("❌ Elementos necesarios no encontrados");return}let e=!1;const t=async r=>{if(!e){e=!0,c.innerHTML=`
      <div class="flex flex-col justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
        <span class="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Cargando certificados...</span>
        <span id="loading-status" class="text-sm text-gray-500 dark:text-gray-400">Obteniendo datos...</span>
      </div>
    `;try{console.log(`🔄 Cargando certificados para: ${r}`);const i=document.getElementById("loading-status");i&&(i.textContent=`Obteniendo certificados de ${r}...`);const l=await p(r);console.log(`✅ Certificados obtenidos: ${l.length}`),i&&(i.textContent=`Preparando ${l.length} certificados...`);const o=document.querySelector(`[data-category="${r}"] h2`)?.textContent||"Certificados";console.log(`📋 Nombre categoría: ${o}`);const s=document.createElement("div");if(s.id="certificate-display",s.className="w-full transition-all duration-500 ease-in-out",s.setAttribute("aria-label",`Certificados de ${o}`),l.length>0){const d=`
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            ${l.map((g,u)=>`
              <article class="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 will-change-transform hover:scale-105" role="article">
                <img
                  class="certificate-img w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110 opacity-0"
                  src="${g}"
                  alt="Certificado ${u+1} de ${o}"
                  loading="lazy"
                  width="300"
                  height="400"
                  data-cert-index="${u}"
                />
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <p class="text-sm font-semibold">Certificado ${u+1}</p>
                    <p class="text-xs">${o}</p>
                  </div>
                </div>
              </article>
            `).join("")}
          </div>
        `;s.innerHTML=d}else s.innerHTML=`
          <div class="flex flex-col items-center justify-center py-12 text-center">
            <div class="text-gray-400 dark:text-gray-600 mb-4">
              <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No hay certificados disponibles
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              No se encontraron certificados para esta categoría.
            </p>
          </div>
        `;if(c.innerHTML="",c.appendChild(s),l.length>0){const d=document.querySelector("#loading-status");d&&(d.textContent="Cargando imágenes..."),await b(s,l.length,d)}setTimeout(()=>{s.classList.add("opacity-100")},100)}catch(i){console.error("Error al cargar certificados:",i),c.innerHTML=`
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <div class="text-red-400 mb-4">
            <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Error al cargar certificados
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Hubo un problema al cargar los certificados. Inténtalo de nuevo.
          </p>
        </div>
      `}finally{e=!1}}};a.addEventListener("click",r=>{if(!(r.target instanceof Element))return;const i=r.target.closest("button[data-category]");if(!i)return;const l=i.getAttribute("data-category");if(!l)return;a.querySelectorAll("button[data-category]").forEach(s=>{s.classList.remove("bg-blue-100","dark:bg-blue-900","border-blue-300","dark:border-blue-600"),s.setAttribute("aria-pressed","false")}),i.classList.add("bg-blue-100","dark:bg-blue-900","border-blue-300","dark:border-blue-600"),i.setAttribute("aria-pressed","true"),t(l)});const n=document.querySelector('[data-category="english"]');n&&(n.classList.add("bg-blue-100","dark:bg-blue-900","border-blue-300","dark:border-blue-600"),n.setAttribute("aria-pressed","true")),t("english")}document.addEventListener("DOMContentLoaded",()=>{h()});
