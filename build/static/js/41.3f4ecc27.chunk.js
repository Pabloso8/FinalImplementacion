(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[41],{1704:function(e,a,t){},1944:function(e,a,t){"use strict";t.r(a);var s=t(15),c=t(0),r=t(83),n=t.n(r),l=t(1),o=t(471),i=t(569),u=t.p+"static/media/faq-illustrations.f8c4ea78.svg",d=t(969),b=t(970),j=t(577),m=t(476),p=t(477),f=t(565),g=t(576),O=t(6),h=function(e){var a=e.data,t=[],r=Object(c.useState)("Payment"),n=Object(s.a)(r,2),h=n[0],v=n[1];Object.entries(a).forEach((function(e){var a=Object(s.a)(e,2),c=(a[0],a[1]);t.push(c)}));return Object(O.jsx)("div",{id:"faq-tabs",children:Object(O.jsxs)(m.a,{children:[Object(O.jsx)(p.a,{lg:"3",md:"4",sm:"12",children:Object(O.jsxs)("div",{className:"faq-navigation d-flex justify-content-between flex-column mb-2 mb-md-0",children:[Object(O.jsx)(f.a,{tag:"ul",className:"nav-left",pills:!0,vertical:!0,children:t.map((function(e){var a=o[e.icon];return Object(O.jsx)(d.a,{tag:"li",children:Object(O.jsxs)(b.a,{active:h===e.title,onClick:function(){return a=e.title,v(a);var a},children:[Object(O.jsx)(a,{size:18,className:"mr-1"}),Object(O.jsx)("span",{className:"font-weight-bold",children:e.title})]})},e.title)}))}),Object(O.jsx)("img",{className:"img-fluid d-none d-md-block",src:u,alt:"illustration",style:{transform:"scaleX(1)"}})]})}),Object(O.jsx)(p.a,{lg:"9",md:"8",sm:"12",children:Object(O.jsx)(g.a,{activeTab:h,children:t.map((function(e){var a=o[e.icon];return Object(O.jsxs)(j.a,{tabId:e.title,children:[Object(O.jsxs)("div",{className:"d-flex align-items-center",children:[Object(O.jsx)("div",{className:"avatar avatar-tag bg-light-primary mr-1",children:Object(O.jsx)(a,{size:20})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{className:"mb-0",children:e.title}),Object(O.jsx)("span",{children:e.subtitle})]})]}),Object(O.jsx)(i.a,Object(l.a)({className:"mt-2",type:"margin",data:e.qandA,titleKey:"question",contentKey:"ans",accordion:!0},"Payment"===e.title?{active:1}:{}))]},e.title)}))})})]})})},v=t(971),x=t(474),N=t(475),y=t(482),T=t(493),M=t(953),P=t(954),C=t(790),w=t(955),E=function(e){var a=e.searchTerm,s=e.setSearchTerm,c=e.getFAQData;return Object(O.jsx)("div",{id:"faq-search-filter",children:Object(O.jsx)(x.a,{className:"faq-search",style:{backgroundImage:"url(".concat(t(722).default,")")},children:Object(O.jsxs)(N.a,{className:"text-center",children:[Object(O.jsx)("h2",{className:"text-primary",children:"Let's answer some questions"}),Object(O.jsx)(y.a,{className:"mb-2",children:"or choose a category to quickly find the help you need"}),Object(O.jsx)(T.a,{className:"faq-search-input",onSubmit:function(e){return e.preventDefault()},children:Object(O.jsxs)(M.a,{className:"input-group-merge",children:[Object(O.jsx)(P.a,{addonType:"prepend",children:Object(O.jsx)(C.a,{children:Object(O.jsx)(v.a,{size:14})})}),Object(O.jsx)(w.a,{value:a,onChange:function(e){return function(e){s(e.target.value),c(e.target.value)}(e)},placeholder:"search faq..."})]})})]})})})},q=t(1060),R=t(962),z=function(){return Object(O.jsx)("div",{id:"faq-contact",children:Object(O.jsxs)(m.a,{className:"mt-5 pt-75",children:[Object(O.jsxs)(p.a,{className:"text-center",sm:"12",children:[Object(O.jsx)("h2",{children:"You still have a question?"}),Object(O.jsx)("p",{className:"mb-3",children:"If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!"})]}),Object(O.jsx)(p.a,{sm:"6",children:Object(O.jsx)(x.a,{className:"text-center bg-light-secondary shadow-none py-1",children:Object(O.jsxs)(N.a,{children:[Object(O.jsx)("div",{className:"avatar avatar-tag bg-light-primary mb-2 mx-auto",children:Object(O.jsx)(q.a,{size:18})}),Object(O.jsx)("h4",{children:"+ (810) 2548 2568"}),Object(O.jsx)("span",{className:"text-body",children:"We are always happy to help!"})]})})}),Object(O.jsx)(p.a,{sm:"6",children:Object(O.jsx)(x.a,{className:"text-center bg-light-secondary shadow-none py-1",children:Object(O.jsxs)(N.a,{children:[Object(O.jsx)("div",{className:"avatar avatar-tag bg-light-primary mb-2 mx-auto",children:Object(O.jsx)(R.a,{size:18})}),Object(O.jsx)("h4",{children:"hello@help.com"}),Object(O.jsx)("span",{className:"text-body",children:"Best way to get answer faster!"})]})})})]})})},k=t(472);t(1704),a.default=function(){var e=Object(c.useState)(null),a=Object(s.a)(e,2),t=a[0],r=a[1],l=Object(c.useState)(""),o=Object(s.a)(l,2),i=o[0],u=o[1],d=function(e){return n.a.get("/faq/data",{params:{q:e}}).then((function(e){r(e.data)}))};return Object(c.useEffect)((function(){d(i)}),[]),Object(O.jsxs)(c.Fragment,{children:[Object(O.jsx)(k.a,{breadCrumbTitle:"FAQ",breadCrumbParent:"Pages",breadCrumbActive:"FAQ"}),Object(O.jsx)(E,{searchTerm:i,setSearchTerm:u,getFAQData:d}),null!==t?Object(O.jsx)(h,{data:t,searchTerm:i,setSearchTerm:u}):null,Object(O.jsx)(z,{})]})}},472:function(e,a,t){"use strict";var s=t(473),c=t(480),r=t(481),n=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent;e.breadCrumbParent2,e.breadCrumbParent3,e.breadCrumbActive;return Object(n.jsx)("div",{className:"content-header row",children:Object(n.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(n.jsx)("div",{className:"row breadcrumbs-top",children:Object(n.jsxs)("div",{className:"col-12",children:[a?Object(n.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(n.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(n.jsxs)(c.a,{children:[Object(n.jsx)(r.a,{tag:"li",children:Object(n.jsx)(s.b,{to:"/",children:"Home"})}),Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:t})]})})]})})})})}},474:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),o=t.n(l),i=t(59),u=t.n(i),d=t(82),b={tag:d.tagPropType,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},j=function(e){var a=e.className,t=e.cssModule,r=e.color,l=e.body,o=e.inverse,i=e.outline,b=e.tag,j=e.innerRef,m=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(d.mapToCssModules)(u()(a,"card",!!o&&"text-white",!!l&&"card-body",!!r&&(i?"border":"bg")+"-"+r),t);return n.a.createElement(b,Object(s.a)({},m,{className:p,ref:j}))};j.propTypes=b,j.defaultProps={tag:"div"},a.a=j},475:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),o=t.n(l),i=t(59),u=t.n(i),d=t(82),b={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},j=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,l=e.tag,o=Object(c.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-body"),t);return n.a.createElement(l,Object(s.a)({},o,{className:i,ref:r}))};j.propTypes=b,j.defaultProps={tag:"div"},a.a=j},476:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),o=t.n(l),i=t(59),u=t.n(i),d=t(82),b=o.a.oneOfType([o.a.number,o.a.string]),j={tag:d.tagPropType,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},m={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,l=e.tag,o=e.form,i=e.widths,b=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),j=[];i.forEach((function(a,t){var s=e[a];if(delete b[a],s){var c=!t;j.push(c?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var m=Object(d.mapToCssModules)(u()(a,r?"no-gutters":null,o?"form-row":"row",j),t);return n.a.createElement(l,Object(s.a)({},b,{className:m}))};p.propTypes=j,p.defaultProps=m,a.a=p},477:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),o=t.n(l),i=t(59),u=t.n(i),d=t(82),b=o.a.oneOfType([o.a.number,o.a.string]),j=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:b,offset:b})]),m={tag:d.tagPropType,xs:j,sm:j,md:j,lg:j,xl:j,className:o.a.string,cssModule:o.a.object,widths:o.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,r=e.widths,l=e.tag,o=Object(c.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(a,s){var c=e[a];if(delete o[a],c||""===c){var r=!s;if(Object(d.isObject)(c)){var n,l=r?"-":"-"+a+"-",b=f(r,a,c.size);i.push(Object(d.mapToCssModules)(u()(((n={})[b]=c.size||""===c.size,n["order"+l+c.order]=c.order||0===c.order,n["offset"+l+c.offset]=c.offset||0===c.offset,n)),t))}else{var j=f(r,a,c);i.push(j)}}})),i.length||i.push("col");var b=Object(d.mapToCssModules)(u()(a,i),t);return n.a.createElement(l,Object(s.a)({},o,{className:b}))};g.propTypes=m,g.defaultProps=p,a.a=g},479:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),o=t.n(l),i=t(59),u=t.n(i),d=t(82),b={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},j=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),o=Object(d.mapToCssModules)(u()(a,"card-title"),t);return n.a.createElement(r,Object(s.a)({},l,{className:o}))};j.propTypes=b,j.defaultProps={tag:"div"},a.a=j},480:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),o=t.n(l),i=t(59),u=t.n(i),d=t(82),b={tag:d.tagPropType,listTag:d.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},j=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,l=e.children,o=e.tag,i=e.listTag,b=e["aria-label"],j=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),m=Object(d.mapToCssModules)(u()(a),r),p=Object(d.mapToCssModules)(u()("breadcrumb",t),r);return n.a.createElement(o,Object(s.a)({},j,{className:m,"aria-label":b}),n.a.createElement(i,{className:p},l))};j.propTypes=b,j.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=j},481:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),o=t.n(l),i=t(59),u=t.n(i),d=t(82),b={tag:d.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},j=function(e){var a=e.className,t=e.cssModule,r=e.active,l=e.tag,o=Object(c.a)(e,["className","cssModule","active","tag"]),i=Object(d.mapToCssModules)(u()(a,!!r&&"active","breadcrumb-item"),t);return n.a.createElement(l,Object(s.a)({},o,{className:i,"aria-current":r?"page":void 0}))};j.propTypes=b,j.defaultProps={tag:"li"},a.a=j},482:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),o=t.n(l),i=t(59),u=t.n(i),d=t(82),b={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},j=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),o=Object(d.mapToCssModules)(u()(a,"card-text"),t);return n.a.createElement(r,Object(s.a)({},l,{className:o}))};j.propTypes=b,j.defaultProps={tag:"p"},a.a=j},483:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),o=t.n(l),i=t(59),u=t.n(i),d=t(82),b={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},j=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),o=Object(d.mapToCssModules)(u()(a,"card-header"),t);return n.a.createElement(r,Object(s.a)({},l,{className:o}))};j.propTypes=b,j.defaultProps={tag:"div"},a.a=j},493:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(123),n=t(122),l=t(0),o=t.n(l),i=t(5),u=t.n(i),d=t(59),b=t.n(d),j=t(82),m={children:u.a.node,inline:u.a.bool,tag:j.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,n=e.tag,l=e.innerRef,i=Object(c.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(j.mapToCssModules)(b()(a,!!r&&"form-inline"),t);return o.a.createElement(n,Object(s.a)({},i,{ref:l,className:u}))},a}(l.Component);p.propTypes=m,p.defaultProps={tag:"form"},a.a=p},502:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var s=t(0),c=t.n(s).a.createContext({})},565:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),o=t.n(l),i=t(59),u=t.n(i),d=t(82),b={tabs:o.a.bool,pills:o.a.bool,vertical:o.a.oneOfType([o.a.bool,o.a.string]),horizontal:o.a.string,justified:o.a.bool,fill:o.a.bool,navbar:o.a.bool,card:o.a.bool,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},j=function(e){var a=e.className,t=e.cssModule,r=e.tabs,l=e.pills,o=e.vertical,i=e.horizontal,b=e.justified,j=e.fill,m=e.navbar,p=e.card,f=e.tag,g=Object(c.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),O=Object(d.mapToCssModules)(u()(a,m?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":r,"card-header-tabs":p&&r,"nav-pills":l,"card-header-pills":p&&l,"nav-justified":b,"nav-fill":j}),t);return n.a.createElement(f,Object(s.a)({},g,{className:O}))};j.propTypes=b,j.defaultProps={tag:"ul",vertical:!1},a.a=j},569:function(e,a,t){"use strict";var s=t(1),c=t(21),r=t(15),n=t(125),l=t(0),o=t(59),i=t.n(o),u=t(996),d=t(474),b=t(483),j=t(479),m=t(737),p=t(475),f=t(6),g=function(e){var a,t=e.data,o=e.type,g=e.accordion,O=e.active,h=e.toggle,v=e.titleKey,x=e.contentKey,N=e.className,y=Object(l.useState)(g?O:Object(n.a)(O)),T=Object(r.a)(y,2),M=T[0],P=T[1],C=function(e){if(g)P(e===M?null:e);else{var a=M,t=a.indexOf(e);a.includes(e)?(a.splice(t,1),P(Object(n.a)(a))):(a.push(e),P(Object(n.a)(a)))}};return Object(f.jsx)("div",{className:i()("collapse-icon",(a={},Object(c.a)(a,N,N),Object(c.a)(a,"collapse-default",!o),Object(c.a)(a,"collapse-shadow","shadow"===o),Object(c.a)(a,"collapse-border","border"===o),Object(c.a)(a,"collapse-margin","margin"===o),a)),children:t.map((function(e,a){var t,r=v?e[v]:e.title,n=x?e[x]:e.content;return Object(f.jsxs)(d.a,{className:i()("app-collapse",(t={},Object(c.a)(t,e.className,e.className),Object(c.a)(t,"open",g?M===a:M.includes(a)&&"shadow"===o),t)),children:[Object(f.jsxs)(b.a,Object(s.a)(Object(s.a)({className:i()("align-items-center",{collapsed:g?M!==a:!M.includes(a)})},"hover"===h?{onMouseEnter:function(){return C(a)}}:{onClick:function(){return C(a)}}),{},{children:[Object(f.jsx)(j.a,{className:"collapse-title",children:r}),Object(f.jsx)(u.a,{size:14})]})),Object(f.jsx)(m.a,{isOpen:g?M===a:M.includes(a),children:Object(f.jsx)(p.a,{children:n})})]},a)}))})};a.a=g,g.defaultProps={active:[],toggle:"click"}},576:function(e,a,t){"use strict";var s=t(14),c=t(122),r=t(0),n=t.n(r),l=t(5),o=t.n(l),i=t(59),u=t.n(i),d=t(502),b=t(82),j={tag:b.tagPropType,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(c.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.tag,r=Object(b.omit)(this.props,Object.keys(j)),l=Object(b.mapToCssModules)(u()("tab-content",a),t);return n.a.createElement(d.a.Provider,{value:{activeTabId:this.state.activeTab}},n.a.createElement(c,Object(s.a)({},r,{className:l})))},a}(r.Component);a.a=m,m.propTypes=j,m.defaultProps={tag:"div"}},577:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),o=t.n(l),i=t(59),u=t.n(i),d=t(502),b=t(82),j={tag:b.tagPropType,className:o.a.string,cssModule:o.a.object,tabId:o.a.any};function m(e){var a=e.className,t=e.cssModule,r=e.tabId,l=e.tag,o=Object(c.a)(e,["className","cssModule","tabId","tag"]),i=function(e){return Object(b.mapToCssModules)(u()("tab-pane",a,{active:r===e}),t)};return n.a.createElement(d.a.Consumer,null,(function(e){var a=e.activeTabId;return n.a.createElement(l,Object(s.a)({},o,{className:i(a)}))}))}m.propTypes=j,m.defaultProps={tag:"div"}},722:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/banner.06ea9907.png"}}]);
//# sourceMappingURL=41.3f4ecc27.chunk.js.map