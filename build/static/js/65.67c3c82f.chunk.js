(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[65],{1848:function(e,a,t){"use strict";t.r(a);var s=t(15),c=t(0),r=t(83),n=t.n(r),o=t(473),l=t(472),i=t(871),u=t(477),d=t(474),b=t(551),m=t(475),j=t(476),p=(t(872),t(6));a.default=function(){var e=Object(c.useState)(null),a=Object(s.a)(e,2),t=a[0],r=a[1],g=Object(c.useState)(""),f=Object(s.a)(g,2),h=f[0],O=f[1];Object(c.useEffect)((function(){n.a.get("/faq/data/knowledge_base").then((function(e){return r(e.data)}))}),[]);var v=function(e){var a=e.item;return Object(p.jsx)(u.a,{className:"kb-search-content",md:"4",sm:"6",children:Object(p.jsx)(d.a,{children:Object(p.jsxs)(o.b,{to:"/pages/knowledge-base/".concat(a.category),children:[Object(p.jsx)(b.a,{src:a.img,alt:"knowledge-base-image",top:!0}),Object(p.jsxs)(m.a,{className:"text-center",children:[Object(p.jsx)("h4",{children:a.title}),Object(p.jsx)("p",{className:"text-body mt-1 mb-0",children:a.desc})]})]})})},a.id)};return Object(p.jsxs)(c.Fragment,{children:[Object(p.jsx)(l.a,{breadCrumbTitle:"Knowledge Base",breadCrumbParent:"Pages",breadCrumbActive:"Knowledge Base"}),Object(p.jsx)(i.a,{searchTerm:h,setSearchTerm:O}),null!==t?Object(p.jsx)("div",{id:"knowledge-base-content",children:Object(p.jsx)(j.a,{className:"kb-search-content-info match-height",children:t.map((function(e){var a=e.title.toLowerCase().includes(h.toLowerCase()),t=e.desc.toLowerCase().includes(h.toLowerCase());return h.length<1||a||t?Object(p.jsx)(v,{item:e},e.id):null}))})}):null]})}},472:function(e,a,t){"use strict";var s=t(473),c=t(480),r=t(481),n=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent;e.breadCrumbParent2,e.breadCrumbParent3,e.breadCrumbActive;return Object(n.jsx)("div",{className:"content-header row",children:Object(n.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(n.jsx)("div",{className:"row breadcrumbs-top",children:Object(n.jsxs)("div",{className:"col-12",children:[a?Object(n.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(n.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(n.jsxs)(c.a,{children:[Object(n.jsx)(r.a,{tag:"li",children:Object(n.jsx)(s.b,{to:"/",children:"Home"})}),Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:t})]})})]})})})})}},474:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),o=t(5),l=t.n(o),i=t(59),u=t.n(i),d=t(82),b={tag:d.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,r=e.color,o=e.body,l=e.inverse,i=e.outline,b=e.tag,m=e.innerRef,j=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(d.mapToCssModules)(u()(a,"card",!!l&&"text-white",!!o&&"card-body",!!r&&(i?"border":"bg")+"-"+r),t);return n.a.createElement(b,Object(s.a)({},j,{className:p,ref:m}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},475:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),o=t(5),l=t.n(o),i=t(59),u=t.n(i),d=t(82),b={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,o=e.tag,l=Object(c.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-body"),t);return n.a.createElement(o,Object(s.a)({},l,{className:i,ref:r}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},476:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),o=t(5),l=t.n(o),i=t(59),u=t.n(i),d=t(82),b=l.a.oneOfType([l.a.number,l.a.string]),m={tag:d.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},j={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,o=e.tag,l=e.form,i=e.widths,b=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];i.forEach((function(a,t){var s=e[a];if(delete b[a],s){var c=!t;m.push(c?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var j=Object(d.mapToCssModules)(u()(a,r?"no-gutters":null,l?"form-row":"row",m),t);return n.a.createElement(o,Object(s.a)({},b,{className:j}))};p.propTypes=m,p.defaultProps=j,a.a=p},477:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),o=t(5),l=t.n(o),i=t(59),u=t.n(i),d=t(82),b=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:b,offset:b})]),j={tag:d.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:l.a.string,cssModule:l.a.object,widths:l.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},f=function(e){var a=e.className,t=e.cssModule,r=e.widths,o=e.tag,l=Object(c.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(a,s){var c=e[a];if(delete l[a],c||""===c){var r=!s;if(Object(d.isObject)(c)){var n,o=r?"-":"-"+a+"-",b=g(r,a,c.size);i.push(Object(d.mapToCssModules)(u()(((n={})[b]=c.size||""===c.size,n["order"+o+c.order]=c.order||0===c.order,n["offset"+o+c.offset]=c.offset||0===c.offset,n)),t))}else{var m=g(r,a,c);i.push(m)}}})),i.length||i.push("col");var b=Object(d.mapToCssModules)(u()(a,i),t);return n.a.createElement(o,Object(s.a)({},l,{className:b}))};f.propTypes=j,f.defaultProps=p,a.a=f},480:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),o=t(5),l=t.n(o),i=t(59),u=t.n(i),d=t(82),b={tag:d.tagPropType,listTag:d.tagPropType,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},m=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,o=e.children,l=e.tag,i=e.listTag,b=e["aria-label"],m=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),j=Object(d.mapToCssModules)(u()(a),r),p=Object(d.mapToCssModules)(u()("breadcrumb",t),r);return n.a.createElement(l,Object(s.a)({},m,{className:j,"aria-label":b}),n.a.createElement(i,{className:p},o))};m.propTypes=b,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=m},481:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),o=t(5),l=t.n(o),i=t(59),u=t.n(i),d=t(82),b={tag:d.tagPropType,active:l.a.bool,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.active,o=e.tag,l=Object(c.a)(e,["className","cssModule","active","tag"]),i=Object(d.mapToCssModules)(u()(a,!!r&&"active","breadcrumb-item"),t);return n.a.createElement(o,Object(s.a)({},l,{className:i,"aria-current":r?"page":void 0}))};m.propTypes=b,m.defaultProps={tag:"li"},a.a=m},482:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),o=t(5),l=t.n(o),i=t(59),u=t.n(i),d=t(82),b={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(u()(a,"card-text"),t);return n.a.createElement(r,Object(s.a)({},o,{className:l}))};m.propTypes=b,m.defaultProps={tag:"p"},a.a=m},493:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(123),n=t(122),o=t(0),l=t.n(o),i=t(5),u=t.n(i),d=t(59),b=t.n(d),m=t(82),j={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,n=e.tag,o=e.innerRef,i=Object(c.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(m.mapToCssModules)(b()(a,!!r&&"form-inline"),t);return l.a.createElement(n,Object(s.a)({},i,{ref:o,className:u}))},a}(o.Component);p.propTypes=j,p.defaultProps={tag:"form"},a.a=p},551:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),o=t(5),l=t.n(o),i=t(59),u=t.n(i),d=t(82),b={tag:d.tagPropType,top:l.a.bool,bottom:l.a.bool,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.top,o=e.bottom,l=e.tag,i=Object(c.a)(e,["className","cssModule","top","bottom","tag"]),b="card-img";r&&(b="card-img-top"),o&&(b="card-img-bottom");var m=Object(d.mapToCssModules)(u()(a,b),t);return n.a.createElement(l,Object(s.a)({},i,{className:m}))};m.propTypes=b,m.defaultProps={tag:"img"},a.a=m},722:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/banner.06ea9907.png"},871:function(e,a,t){"use strict";var s=t(971),c=t(474),r=t(475),n=t(482),o=t(493),l=t(953),i=t(954),u=t(790),d=t(955),b=t(6);a.a=function(e){var a=e.searchTerm,m=e.setSearchTerm,j=e.handleFilter;return Object(b.jsx)("div",{id:"knowledge-base-search",children:Object(b.jsx)(c.a,{className:"knowledge-base-bg",style:{backgroundImage:"url(".concat(t(722).default,")")},children:Object(b.jsxs)(r.a,{className:"text-center",children:[Object(b.jsx)("h2",{className:"text-primary",children:"Dedicated Source Used on Website"}),Object(b.jsxs)(n.a,{className:"mb-2",children:["Popular searches: ",Object(b.jsx)("span",{className:"font-weight-bolder",children:"Sales automation, Email marketing"})]}),Object(b.jsx)(o.a,{className:"kb-search-input",onSubmit:function(e){return e.preventDefault()},children:Object(b.jsxs)(l.a,{className:"input-group-merge",children:[Object(b.jsx)(i.a,{addonType:"prepend",children:Object(b.jsx)(u.a,{children:Object(b.jsx)(s.a,{size:14})})}),Object(b.jsx)(d.a,{value:a,onChange:function(e){return function(e){j?j(e):m(e.target.value)}(e)},placeholder:"Ask a question..."})]})})]})})})}},872:function(e,a,t){}}]);
//# sourceMappingURL=65.67c3c82f.chunk.js.map