(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[151],{1879:function(e,a,t){"use strict";t.r(a);var s=t(0),r=t(505),c=t(472),l=t(914),n=t(6);a.default=function(){return Object(n.jsxs)(s.Fragment,{children:[Object(n.jsx)(c.a,{breadCrumbTitle:"Layout Boxed",breadCrumbParent:"Layouts",breadCrumbActive:"Layout Boxed"}),Object(n.jsx)(r.a,{color:"primary",children:Object(n.jsxs)("div",{className:"alert-body",children:[Object(n.jsx)("span",{className:"font-weight-bold",children:"Info: "}),Object(n.jsxs)("span",{children:["Please check the"," ",Object(n.jsx)("a",{href:"https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/development/page-layouts",target:"_blank",children:"Layout boxed documentation"})," ","for more details."]})]})}),Object(n.jsx)(l.default,{})]})}},472:function(e,a,t){"use strict";var s=t(473),r=t(480),c=t(481),l=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent;e.breadCrumbParent2,e.breadCrumbParent3,e.breadCrumbActive;return Object(l.jsx)("div",{className:"content-header row",children:Object(l.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(l.jsx)("div",{className:"row breadcrumbs-top",children:Object(l.jsxs)("div",{className:"col-12",children:[a?Object(l.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(l.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(c.a,{tag:"li",children:Object(l.jsx)(s.b,{to:"/",children:"Home"})}),Object(l.jsx)(c.a,{tag:"li",className:"text-primary",children:t})]})})]})})})})}},480:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),l=t.n(c),n=t(5),o=t.n(n),i=t(59),b=t.n(i),d=t(82),u={tag:d.tagPropType,listTag:d.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},m=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,n=e.children,o=e.tag,i=e.listTag,u=e["aria-label"],m=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(d.mapToCssModules)(b()(a),c),j=Object(d.mapToCssModules)(b()("breadcrumb",t),c);return l.a.createElement(o,Object(s.a)({},m,{className:p,"aria-label":u}),l.a.createElement(i,{className:j},n))};m.propTypes=u,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=m},481:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),l=t.n(c),n=t(5),o=t.n(n),i=t(59),b=t.n(i),d=t(82),u={tag:d.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.active,n=e.tag,o=Object(r.a)(e,["className","cssModule","active","tag"]),i=Object(d.mapToCssModules)(b()(a,!!c&&"active","breadcrumb-item"),t);return l.a.createElement(n,Object(s.a)({},o,{className:i,"aria-current":c?"page":void 0}))};m.propTypes=u,m.defaultProps={tag:"li"},a.a=m},505:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(484),l=t(0),n=t.n(l),o=t(5),i=t.n(o),b=t(59),d=t.n(b),u=t(82),m=t(487);function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function j(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){Object(c.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var O={children:i.a.node,className:i.a.string,closeClassName:i.a.string,closeAriaLabel:i.a.string,cssModule:i.a.object,color:i.a.string,fade:i.a.bool,isOpen:i.a.bool,toggle:i.a.func,tag:u.tagPropType,transition:i.a.shape(m.a.propTypes),innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},g={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:j(j({},m.a.defaultProps),{},{unmountOnExit:!0})};function f(e){var a=e.className,t=e.closeClassName,c=e.closeAriaLabel,l=e.cssModule,o=e.tag,i=e.color,b=e.isOpen,p=e.toggle,O=e.children,g=e.transition,f=e.fade,h=e.innerRef,v=Object(r.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),y=Object(u.mapToCssModules)(d()(a,"alert","alert-"+i,{"alert-dismissible":p}),l),N=Object(u.mapToCssModules)(d()("close",t),l),x=j(j(j({},m.a.defaultProps),g),{},{baseClass:f?g.baseClass:"",timeout:f?g.timeout:0});return n.a.createElement(m.a,Object(s.a)({},v,x,{tag:o,className:y,in:b,role:"alert",innerRef:h}),p?n.a.createElement("button",{type:"button",className:N,"aria-label":c,onClick:p},n.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,O)}f.propTypes=O,f.defaultProps=g,a.a=f}}]);
//# sourceMappingURL=151.4c6a5446.chunk.js.map