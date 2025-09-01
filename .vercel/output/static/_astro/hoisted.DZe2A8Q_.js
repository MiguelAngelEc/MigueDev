class g{constructor(){const e=[2567,2519,2414,9144,2418,7736,6934,2417],t=[10002,4261,10662,11025,4260,1775,2299],r=[1814,3504,1798,10266,10135,6933,8617,2156,6240,3578,3213,2461,3175,2332,2419],i=[];this.categories={english:{name:"English",logo:null,certificates:e.map(a=>`https://platzi.com/MigueEc/curso/${a}-course/diploma-og/og.jpeg`)},python:{name:"Python",logo:null,certificates:t.map(a=>`https://platzi.com/MigueEc/curso/${a}-course/diploma-og/og.jpeg`)},javascript:{name:"JavaScript",logo:null,certificates:r.map(a=>`https://platzi.com/MigueEc/curso/${a}-course/diploma-og/og.jpeg`)},uxui:{name:"UX/UI",logo:null,certificates:i.map(a=>`https://platzi.com/MigueEc/curso/${a}-course/diploma-og/og.jpeg`)}}}getCategories(){return Object.entries(this.categories).map(([e,t])=>({id:e,name:t.name,logo:t.logo}))}async getCertificatesByCategory(e){try{const t=this.categories[e];return t?(console.log(`Cargando ${t.certificates.length} certificados para la categoría: ${e}`),t.certificates):(console.warn(`Categoría no encontrada: ${e}`),[])}catch(t){return console.error("Error al obtener certificados:",t),[]}}async validateCertificates(e){if(!e||!e.length)return[];try{return(await Promise.allSettled(e.map(r=>this.checkImageUrl(r).then(i=>({url:r,isValid:i}))))).filter(r=>r.status==="fulfilled"&&r.value.isValid).map(r=>r.value.url)}catch(t){return console.error("Error al validar certificados:",t),[]}}checkImageUrl(e){return new Promise(t=>{if(!e||typeof e!="string")return t(!1);const r=new Image;let i;i=setTimeout(()=>{a(),t(!1)},3e3);const a=()=>{i&&clearTimeout(i),r.onload=null,r.onerror=null,r.src=""};r.onload=()=>{const o=r.width>0&&r.height>0;a(),t(o)},r.onerror=()=>{a(),t(!1)},r.loading="lazy",r.src=e})}getCategoryInfo(e){return this.categories[e]||null}}const u=new g,m=async c=>{try{return await u.getCertificatesByCategory(c)}catch(e){return console.error(`Error al cargar certificados de ${c}:`,e),[]}};function f(){console.log("🔍 Iniciando certificate logic...");const c=document.getElementById("certificate-container"),e=document.getElementById("category-cards-container");if(console.log("📦 Elementos encontrados:",{certificateContainer:!!c,categoryCardsContainer:!!e}),!c||!e){console.error("❌ Elementos necesarios no encontrados");return}let t=!1;const r=async a=>{if(!t){t=!0,c.innerHTML=`
      <div class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <span class="ml-3 text-gray-600 dark:text-gray-300">Cargando certificados...</span>
      </div>
    `;try{console.log(`🔄 Cargando certificados para: ${a}`);const o=await m(a);console.log(`✅ Certificados obtenidos: ${o.length}`);const n=document.querySelector(`[data-category="${a}"] h2`)?.textContent||"Certificados";console.log(`📋 Nombre categoría: ${n}`);const s=document.createElement("div");s.id="certificate-display",s.className="w-full transition-all duration-500 ease-in-out",s.setAttribute("aria-label",`Certificados de ${n}`),o.length>0?s.innerHTML=`
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            ${o.map((l,d)=>`
              <article class="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 will-change-transform hover:scale-105" role="article">
                <img
                  class="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  src="${l}"
                  alt="Certificado ${d+1} de ${n}"
                  loading="lazy"
                  width="300"
                  height="400"
                  onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YTNiNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNlcnRpZmljYWRvIG5vIGRpc3BvbmlibGU8L3RleHQ+PC9zdmc+';"
                />
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <p class="text-sm font-semibold">Certificado ${d+1}</p>
                    <p class="text-xs">${n}</p>
                  </div>
                </div>
              </article>
            `).join("")}
          </div>
        `:s.innerHTML=`
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
        `,c.innerHTML="",c.appendChild(s),setTimeout(()=>{s.classList.add("opacity-100")},100)}catch(o){console.error("Error al cargar certificados:",o),c.innerHTML=`
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
      `}finally{t=!1}}};e.addEventListener("click",a=>{if(!(a.target instanceof Element))return;const o=a.target.closest("button[data-category]");if(!o)return;const n=o.getAttribute("data-category");if(!n)return;e.querySelectorAll("button[data-category]").forEach(l=>{l.classList.remove("bg-blue-100","dark:bg-blue-900","border-blue-300","dark:border-blue-600"),l.setAttribute("aria-pressed","false")}),o.classList.add("bg-blue-100","dark:bg-blue-900","border-blue-300","dark:border-blue-600"),o.setAttribute("aria-pressed","true"),r(n)});const i=document.querySelector('[data-category="english"]');i&&(i.classList.add("bg-blue-100","dark:bg-blue-900","border-blue-300","dark:border-blue-600"),i.setAttribute("aria-pressed","true")),r("english")}document.addEventListener("DOMContentLoaded",()=>{f()});
