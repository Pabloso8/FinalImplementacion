(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[136],{1833:function(e,a,t){"use strict";t.r(a);var s=t(15),c=t(0),r=t(474),l=t(551),n=t(475),o=t(960),i=t(470),d=t(240),b=t(472),j=t(478),m=t(513),u=t(6);a.default=function(){var e=Object(m.g)(),a=Object(m.i)().id,t=Object(c.useState)([]),h=Object(s.a)(t,2),p=h[0],g=h[1],O=Object(c.useState)(!0),f=Object(s.a)(O,2),x=f[0],v=f[1],N=Object(c.useState)(!1),M=Object(s.a)(N,2),y=M[0];M[1];return Object(c.useEffect)((function(){v(!0),fetch("https://reqres.in/api/users/".concat(a),{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e),g(e.data),v(!1)})).catch((function(e){console.error(e),g([]),v(!1)}))}),[y]),x?Object(u.jsx)("div",{class:"d-flex justify-content-center",children:Object(u.jsx)("div",{class:"spinner-border",role:"status",children:Object(u.jsx)("span",{class:"sr-only",children:"Loading..."})})}):Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(b.a,{breadCrumbTitle:"Usuario",breadCrumbParent:"Usuario"}),Object(u.jsxs)(r.a,{className:"card-profile",children:[Object(u.jsx)(l.a,{className:"img-fluid",src:d.default,top:!0}),Object(u.jsxs)(n.a,{children:[Object(u.jsx)("div",{className:"profile-image-wrapper",children:Object(u.jsx)("div",{className:"profile-image",children:Object(u.jsx)(j.a,{img:"".concat(p.avatar)})})}),Object(u.jsx)("h3",{children:p.first_name}),Object(u.jsx)("h6",{className:"text-muted",children:p.last_name}),Object(u.jsx)(o.a,{className:"profile-badge",color:"light-primary",children:p.email}),Object(u.jsx)("hr",{className:"mb-2"}),Object(u.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h6",{className:"text-muted font-weight-bolder",children:"Projects"}),Object(u.jsxs)("h3",{className:"mb-0",children:[Math.floor(50*Math.random())," "]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h6",{className:"text-muted font-weight-bolder",children:"Age"}),Object(u.jsx)("h3",{className:"mb-0",children:Math.floor(80*Math.random())})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h6",{className:"text-muted font-weight-bolder",children:"Rango"}),Object(u.jsx)("h3",{className:"mb-0",children:Math.floor(50*Math.random())})]})]})]})]}),Object(u.jsx)(i.a.Ripple,{color:"primary",outline:!0,onClick:function(){return e.push("/userList")},children:"Volver a Usuarios"}),Object(u.jsx)("h1",{})]})}},472:function(e,a,t){"use strict";var s=t(473),c=t(480),r=t(481),l=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent;e.breadCrumbParent2,e.breadCrumbParent3,e.breadCrumbActive;return Object(l.jsx)("div",{className:"content-header row",children:Object(l.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(l.jsx)("div",{className:"row breadcrumbs-top",children:Object(l.jsxs)("div",{className:"col-12",children:[a?Object(l.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(l.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(l.jsxs)(c.a,{children:[Object(l.jsx)(r.a,{tag:"li",children:Object(l.jsx)(s.b,{to:"/",children:"Home"})}),Object(l.jsx)(r.a,{tag:"li",className:"text-primary",children:t})]})})]})})})})}},474:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),l=t.n(r),n=t(5),o=t.n(n),i=t(59),d=t.n(i),b=t(82),j={tag:b.tagPropType,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},m=function(e){var a=e.className,t=e.cssModule,r=e.color,n=e.body,o=e.inverse,i=e.outline,j=e.tag,m=e.innerRef,u=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(b.mapToCssModules)(d()(a,"card",!!o&&"text-white",!!n&&"card-body",!!r&&(i?"border":"bg")+"-"+r),t);return l.a.createElement(j,Object(s.a)({},u,{className:h,ref:m}))};m.propTypes=j,m.defaultProps={tag:"div"},a.a=m},475:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),l=t.n(r),n=t(5),o=t.n(n),i=t(59),d=t.n(i),b=t(82),j={tag:b.tagPropType,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},m=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,n=e.tag,o=Object(c.a)(e,["className","cssModule","innerRef","tag"]),i=Object(b.mapToCssModules)(d()(a,"card-body"),t);return l.a.createElement(n,Object(s.a)({},o,{className:i,ref:r}))};m.propTypes=j,m.defaultProps={tag:"div"},a.a=m},480:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),l=t.n(r),n=t(5),o=t.n(n),i=t(59),d=t.n(i),b=t(82),j={tag:b.tagPropType,listTag:b.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},m=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,n=e.children,o=e.tag,i=e.listTag,j=e["aria-label"],m=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),u=Object(b.mapToCssModules)(d()(a),r),h=Object(b.mapToCssModules)(d()("breadcrumb",t),r);return l.a.createElement(o,Object(s.a)({},m,{className:u,"aria-label":j}),l.a.createElement(i,{className:h},n))};m.propTypes=j,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=m},481:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),l=t.n(r),n=t(5),o=t.n(n),i=t(59),d=t.n(i),b=t(82),j={tag:b.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.active,n=e.tag,o=Object(c.a)(e,["className","cssModule","active","tag"]),i=Object(b.mapToCssModules)(d()(a,!!r&&"active","breadcrumb-item"),t);return l.a.createElement(n,Object(s.a)({},o,{className:i,"aria-current":r?"page":void 0}))};m.propTypes=j,m.defaultProps={tag:"li"},a.a=m},551:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),l=t.n(r),n=t(5),o=t.n(n),i=t(59),d=t.n(i),b=t(82),j={tag:b.tagPropType,top:o.a.bool,bottom:o.a.bool,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.top,n=e.bottom,o=e.tag,i=Object(c.a)(e,["className","cssModule","top","bottom","tag"]),j="card-img";r&&(j="card-img-top"),n&&(j="card-img-bottom");var m=Object(b.mapToCssModules)(d()(a,j),t);return l.a.createElement(o,Object(s.a)({},i,{className:m}))};m.propTypes=j,m.defaultProps={tag:"img"},a.a=m}}]);
//# sourceMappingURL=136.d8c9129c.chunk.js.map