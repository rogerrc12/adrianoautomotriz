(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{RXBc:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),c=t.n(l),n=t("Bl7J"),r=t("vrFN");function s(e,a){if(null==e)return{};var t,l,c={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||(c[t]=e[t]);return c}var i=t("OS56"),m=t.n(i),o=t("Wbzz"),d=t("Tgqd"),u=(t("tyWD"),t("K7k0"),function(e){var a=e.currentSlide,t=(e.slideCount,s(e,["currentSlide","slideCount"]));return c.a.createElement("div",Object.assign({},t,{className:"slider-arrow slider-prev"+(0===a?" slick-disabled":""),"aria-hidden":"true","aria-disabled":0===a}),c.a.createElement(d.a,null))}),E=function(e){var a=e.currentSlide,t=e.slideCount,l=s(e,["currentSlide","slideCount"]);return c.a.createElement("div",Object.assign({},l,{className:"slider-arrow slider-next"+(a===t-1?" slick-disabled":""),"aria-hidden":"true","aria-disabled":a===t-1}),c.a.createElement(d.b,null))},v=function(){var e={dots:!1,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,nextArrow:c.a.createElement(E,null),prevArrow:c.a.createElement(u,null),fade:!0};return c.a.createElement("section",{className:"page-slider"},c.a.createElement("div",{className:"slider"},c.a.createElement(m.a,Object.assign({},e,{className:"slides"}),c.a.createElement("div",{className:"slide slide-1"},c.a.createElement("div",{className:"slide-content"},c.a.createElement("h2",null,"Repuestos para autos y camiones de la mejor calidad."),c.a.createElement("p",null," ","Somos la tienda de repuestos y accesorios para autos y camiones más completa y atualizada, ",c.a.createElement("br",null)," te ofrecemos las mejores marcas del mercado."),c.a.createElement(o.Link,{to:"/repuestos-personalizados",className:"button red"},"Descubre más"))))))},N=t("pJIU"),b=t("zbTz"),f=t("TEwX"),p=function(){var e=Object(o.useStaticQuery)("2053107885").wordpress.marcas.nodes;return c.a.createElement("section",{className:"bg-11"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row no-gutter"},c.a.createElement("div",{className:"col-lg-6 col-md-12"}),c.a.createElement("div",{className:"col-lg-6 col-md-12 gray-bg"},c.a.createElement("div",{className:"client-box border "},c.a.createElement("div",{className:"section-title text-left"},c.a.createElement("span",null,"Trabajamos con"),c.a.createElement("h3",null,"Todas las marcas de vehiculos livianos y pesados, incluyendo:")),c.a.createElement("ul",{className:"list-unstyled"},e.map((function(e){return c.a.createElement("li",{key:e.title},c.a.createElement("img",{className:"img-fluid center-block",src:e.featuredImage.node.sourceUrl,alt:e.title}))}))))))))};a.default=function(){return c.a.createElement(n.a,{location:"/"},c.a.createElement(r.a,{title:"Home"}),c.a.createElement(v,null),c.a.createElement(N.a,null),c.a.createElement(b.a,null),c.a.createElement(p,null),c.a.createElement(f.a,null))}},pJIU:function(e,a,t){"use strict";var l=t("q1tI"),c=t.n(l),n=t("76ZC"),r=t.n(n),s=t("Wbzz"),i=t("33Fu"),m=t("Tgqd"),o=t("tjd4"),d=function(e){return c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"feature-box-2 box-hover "+e.className},c.a.createElement("div",{className:"icon"},"light-car"===e.icon?c.a.createElement(i.a,null):"heavy-car"===e.icon?c.a.createElement(m.e,null):c.a.createElement(o.a,null)),e.children))};a.a=function(){var e=Object(s.useStaticQuery)("3620535661").wordpress.nosotrosBy;return c.a.createElement("section",{className:"welcome-3 white-bg page-section-ptb"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row about custom-block-2"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h2",null,e.title),r()(e.content)),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("img",{className:"img-fluid center-block",src:e.featuredImage.node.sourceUrl,alt:e.featuredImage.node.title}))),c.a.createElement("div",{className:"row"},e.servicios.listaservicios.map((function(e,a){return c.a.createElement(d,{icon:e.icon,key:e.icon,className:0===a?"active":""},c.a.createElement("div",{className:"content"},c.a.createElement("h5",null,e.titulo),c.a.createElement("p",null,e.descripcion)))})))))}},zbTz:function(e,a,t){"use strict";var l=t("q1tI"),c=t.n(l),n=t("Wbzz"),r=t("76ZC"),s=t.n(r),i=function(e){return e.servicios.map((function(e){return c.a.createElement("div",{className:"col-lg-4 col-md-6 services",key:e.title},c.a.createElement(n.Link,{to:"/servicio/"+e.slug},c.a.createElement("div",{className:"content-box-7"},c.a.createElement("div",{className:"content-box-img"},c.a.createElement("img",{className:"img-fluid center-block",src:e.addons.image.sourceUrl,alt:e.title}),c.a.createElement("div",{className:"info"},c.a.createElement("i",{className:"flaticon-travel"}),c.a.createElement("h6",{className:"text-white"},e.title),s()(e.excerpt))))))}))};a.a=function(){var e=Object(n.useStaticQuery)("2138086749").wordpress.servicios.nodes;return c.a.createElement("section",{className:"page-section-ptb white-bg"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"section-title"},c.a.createElement("span",null,"¿Que ofrecemos?"),c.a.createElement("h3",null,"Servicios impresionantes")))),c.a.createElement("div",{className:"row"},c.a.createElement(i,{servicios:e}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-57b04672c776e516e9ec.js.map