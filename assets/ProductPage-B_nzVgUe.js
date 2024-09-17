import{u as x,j as g,k as y,f as h,o as f,c as m,a as t,t as a,g as e,C as n,P as v}from"./index-BLdYwHhr.js";function u(i){const s=i;s.__i18n=s.__i18n||[],s.__i18n.push({locale:"",resource:{en:{addToCart:{t:0,b:{t:2,i:[{t:3}],s:"Add to Cart"}},buyNow:{t:0,b:{t:2,i:[{t:3}],s:"Buy Now"}},price:{t:0,b:{t:2,i:[{t:3}],s:"Price"}},availability:{t:0,b:{t:2,i:[{t:3}],s:"Availability"}},inStock:{t:0,b:{t:2,i:[{t:3}],s:"In Stock"}},productDescription:{t:0,b:{t:2,i:[{t:3}],s:"Product Description"}},addToCartOperationSuccess:{t:0,b:{t:2,i:[{t:3}],s:"Add to cart success"}}},fr:{addToCart:{t:0,b:{t:2,i:[{t:3}],s:"Ajouter au panier"}},buyNow:{t:0,b:{t:2,i:[{t:3}],s:"Acheter maintenant"}},price:{t:0,b:{t:2,i:[{t:3}],s:"Prix"}},availability:{t:0,b:{t:2,i:[{t:3}],s:"Disponibilité"}},inStock:{t:0,b:{t:2,i:[{t:3}],s:"En Stock"}},productDescription:{t:0,b:{t:2,i:[{t:3}],s:"Description du produit"}},addToCartOperationSuccess:{t:0,b:{t:2,i:[{t:3}],s:"Ajout au panier réussi"}}}}})}const k={class:"bg-gray-100 dark:bg-gray-800 py-8"},w={class:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"},C={class:"flex flex-col md:flex-row -mx-4"},S={class:"md:flex-1 px-4"},P={class:"h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4"},T=["src","alt"],A={class:"flex mx-2 mb-4 flex-col gap-2 md:flex-row"},D={class:"w-full md:w-1/2 px-2"},I={class:"w-full md:w-1/2 px-2"},N={class:"w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"},B={class:"md:flex-1 px-4"},j={class:"text-2xl font-bold text-gray-800 dark:text-white mb-2"},O={class:"flex mb-4"},q={class:"mr-4"},E={class:"font-bold text-gray-700 dark:text-gray-300"},R={class:"text-gray-600 dark:text-gray-300"},V={class:"font-bold text-gray-700 dark:text-gray-300"},$={class:"text-gray-600 dark:text-gray-300"},z={class:"font-bold text-gray-700 dark:text-gray-300"},F={class:"text-gray-600 dark:text-gray-300 text-sm mt-2"},G={__name:"ProductPage",setup(i){const{t:s}=x(),p=g(),r=y(),o=h(()=>v.query().find(p.params.slug)),_=()=>{n.query().where("productId",o.value.id).exists()||(n.insert({data:{productId:o.value.id}}),r.dispatch("cart/manipulateCart"),r.dispatch("makeSnackbarActive",!0),r.dispatch("setSnackbarText",s("addToCartOperationSuccess")))};return(b,H)=>{var c,d,l;return f(),m("div",k,[t("div",w,[t("div",C,[t("div",S,[t("div",P,[t("img",{class:"w-full h-full",src:o.value.image,alt:o.value.title},null,8,T)]),t("div",A,[t("div",D,[t("button",{class:"w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700",onClick:_},a(e(s)("addToCart")),1)]),t("div",I,[t("button",N,a(e(s)("buyNow")),1)])])]),t("div",B,[t("h2",j,a((c=o.value)==null?void 0:c.title),1),t("div",O,[t("div",q,[t("span",E,a(e(s)("price"))+":",1),t("span",R,"$"+a((d=o.value)==null?void 0:d.price),1)]),t("div",null,[t("span",V,a(e(s)("availability"))+":",1),t("span",$,a(e(s)("inStock")),1)])]),t("div",null,[t("span",z,a(e(s)("productDescription"))+":",1),t("p",F,a((l=o.value)==null?void 0:l.description),1)])])])])])}}};typeof u=="function"&&u(G);export{G as default};
