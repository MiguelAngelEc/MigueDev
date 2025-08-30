class g{constructor(){const t=[2567,2519,2414,9144,2418,7736,6934,2417],r=[10002,4261,10662,11025,4260,1775,2299],e=[1814,3504,1798,10266,10135,6933,8617,2156,6240,3578,3213,2461,3175,2332,2419],i=[];this.categories={english:{name:"English",logo:"/src/assets/logo-certif.png",certificates:t.map(a=>`https://platzi.com/MigueEc/curso/${a}-course/diploma-og/og.jpeg`)},python:{name:"Python",logo:"/src/assets/logo-certif.png",certificates:r.map(a=>`https://platzi.com/MigueEc/curso/${a}-course/diploma-og/og.jpeg`)},javascript:{name:"JavaScript",logo:"/src/assets/logo-certif.png",certificates:e.map(a=>`https://platzi.com/MigueEc/curso/${a}-course/diploma-og/og.jpeg`)},uxui:{name:"UX/UI",logo:"/src/assets/logo-certif.png",certificates:i.map(a=>`https://platzi.com/MigueEc/curso/${a}-course/diploma-og/og.jpeg`)}}}getCategories(){return Object.entries(this.categories).map(([t,r])=>({id:t,name:r.name,logo:r.logo}))}async getCertificatesByCategory(t){try{const r=this.categories[t];return r?r.certificates:(console.warn(`Categoría no encontrada: ${t}`),[])}catch(r){return console.error("Error al obtener certificados:",r),[]}}async validateCertificates(t){if(!t||!t.length)return[];try{return(await Promise.allSettled(t.map(e=>this.checkImageUrl(e).then(i=>({url:e,isValid:i}))))).filter(e=>e.status==="fulfilled"&&e.value.isValid).map(e=>e.value.url)}catch(r){return console.error("Error al validar certificados:",r),[]}}checkImageUrl(t){return new Promise(r=>{if(!t||typeof t!="string")return r(!1);const e=new Image;let i;i=setTimeout(()=>{a(),r(!1)},3e3);const a=()=>{i&&clearTimeout(i),e.onload=null,e.onerror=null,e.src=""};e.onload=()=>{const o=e.width>0&&e.height>0;a(),r(o)},e.onerror=()=>{a(),r(!1)},e.crossOrigin="anonymous",e.referrerPolicy="no-referrer",e.loading="lazy",e.src=t})}getCategoryInfo(t){return this.categories[t]||null}}const u=new g,f=async s=>{try{return await u.getCertificatesByCategory(s)}catch(t){return console.error(`Error al cargar certificados de ${s}:`,t),[]}};function p(){const s=document.getElementById("certificate-container"),t=document.getElementById("category-cards-container");if(!s||!t)return;let r=!1;const e=async a=>{if(!r){r=!0,s.innerHTML=`
      <div class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <span class="ml-3 text-gray-600 dark:text-gray-300">Cargando certificados...</span>
      </div>
    `;try{const o=await f(a),n=document.querySelector(`[data-category="${a}"] h2`)?.textContent||"Certificados",c=document.createElement("div");c.id="certificate-display",c.className="w-full transition-all duration-500 ease-in-out",c.setAttribute("aria-label",`Certificados de ${n}`),o.length>0?c.innerHTML=`
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
        `:c.innerHTML=`
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
        `,s.innerHTML="",s.appendChild(c),setTimeout(()=>{c.classList.add("opacity-100")},100)}catch(o){console.error("Error al cargar certificados:",o),s.innerHTML=`
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
      `}finally{r=!1}}};t.addEventListener("click",a=>{if(!(a.target instanceof Element))return;const o=a.target.closest("button[data-category]");if(!o)return;const n=o.getAttribute("data-category");if(!n)return;t.querySelectorAll("button[data-category]").forEach(l=>{l.classList.remove("bg-blue-100","dark:bg-blue-900","border-blue-300","dark:border-blue-600"),l.setAttribute("aria-pressed","false")}),o.classList.add("bg-blue-100","dark:bg-blue-900","border-blue-300","dark:border-blue-600"),o.setAttribute("aria-pressed","true"),e(n)});const i=document.querySelector('[data-category="english"]');i&&(i.classList.add("bg-blue-100","dark:bg-blue-900","border-blue-300","dark:border-blue-600"),i.setAttribute("aria-pressed","true")),e("english")}export{p as initializeCertificateLogic};
