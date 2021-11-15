(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[139],{1950:function(e,a,t){"use strict";t.r(a);var n=t(15),c=t(0),s=t(575),l=t(491),r=t(59),i=t.n(r),o=t(506),u=t(493),d=t(928),j=t(486),b=t(955),m=t(748),p=t(470),h=t(616),x=t(128),O=t(6),g=function(e){var a=e.open,t=e.toggleSidebar,r=Object(c.useState)("subscriber"),g=Object(n.a)(r,2),f=g[0],v=g[1],N=Object(c.useState)("basic"),y=Object(n.a)(N,2),C=y[0],w=y[1],P=Object(x.b)(),S=Object(o.c)(),k=S.register,E=S.errors,q=S.handleSubmit;return Object(O.jsx)(s.a,{size:"lg",open:a,title:"New User",headerClassName:"mb-1",contentClassName:"pt-0",toggleSidebar:t,children:Object(O.jsxs)(u.a,{onSubmit:q((function(e){Object(l.e)(E)&&(t(),P(Object(h.a)({fullName:e["full-name"],company:e.company,role:f,username:e.username,country:e.country,contact:e.contact,email:e.email,currentPlan:C,status:"active",avatar:""})))})),children:[Object(O.jsxs)(d.a,{children:[Object(O.jsxs)(j.a,{for:"full-name",children:["Full Name ",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)(b.a,{name:"full-name",id:"full-name",placeholder:"John Doe",innerRef:k({required:!0}),className:i()({"is-invalid":E["full-name"]})})]}),Object(O.jsxs)(d.a,{children:[Object(O.jsxs)(j.a,{for:"username",children:["Username ",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)(b.a,{name:"username",id:"username",placeholder:"johnDoe99",innerRef:k({required:!0}),className:i()({"is-invalid":E.username})})]}),Object(O.jsxs)(d.a,{children:[Object(O.jsxs)(j.a,{for:"email",children:["Email ",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)(b.a,{type:"email",name:"email",id:"email",placeholder:"john.doe@example.com",innerRef:k({required:!0}),className:i()({"is-invalid":E.email})}),Object(O.jsx)(m.a,{color:"muted",children:"You can use letters, numbers & periods"})]}),Object(O.jsxs)(d.a,{children:[Object(O.jsxs)(j.a,{for:"company",children:["Company ",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)(b.a,{name:"company",id:"company",placeholder:"Company Pvt Ltd",innerRef:k({required:!0}),className:i()({"is-invalid":E.company})})]}),Object(O.jsxs)(d.a,{children:[Object(O.jsxs)(j.a,{for:"country",children:["Country ",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)(b.a,{name:"country",id:"country",placeholder:"Australia",innerRef:k({required:!0}),className:i()({"is-invalid":E.country})})]}),Object(O.jsxs)(d.a,{children:[Object(O.jsxs)(j.a,{for:"contact",children:["Contact ",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)(b.a,{name:"contact",id:"contact",placeholder:"(397) 294-5153",innerRef:k({required:!0}),className:i()({"is-invalid":E.contact})})]}),Object(O.jsxs)(d.a,{children:[Object(O.jsx)(j.a,{for:"user-role",children:"User Role"}),Object(O.jsxs)(b.a,{type:"select",id:"user-role",name:"user-role",value:f,onChange:function(e){return v(e.target.value)},children:[Object(O.jsx)("option",{value:"subscriber",children:"Subscriber"}),Object(O.jsx)("option",{value:"editor",children:"Editor"}),Object(O.jsx)("option",{value:"maintainer",children:"Maintainer"}),Object(O.jsx)("option",{value:"author",children:"Author"}),Object(O.jsx)("option",{value:"admin",children:"Admin"})]})]}),Object(O.jsxs)(d.a,{className:"mb-2",value:C,onChange:function(e){return w(e.target.value)},children:[Object(O.jsx)(j.a,{for:"select-plan",children:"Select Plan"}),Object(O.jsxs)(b.a,{type:"select",id:"select-plan",name:"select-plan",children:[Object(O.jsx)("option",{value:"basic",children:"Basic"}),Object(O.jsx)("option",{value:"enterprise",children:"Enterprise"}),Object(O.jsx)("option",{value:"company",children:"Company"}),Object(O.jsx)("option",{value:"team",children:"Team"})]})]}),Object(O.jsx)(p.a,{type:"submit",className:"mr-1",color:"primary",children:"Submit"}),Object(O.jsx)(p.a,{type:"reset",color:"secondary",outline:!0,onClick:t,children:"Cancel"})]})})},f=t(473),v=t(478),N=t(137),y=t(960),C=t(938),w=t(1252),P=t(942),S=t(952),k=t(961),E=t(1014),q=t(1020),A=t(926),R=t(1078),z=t(1056),T=t(1026),D=t(976),L=t(1088),U=function(e){var a=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar.length?Object(O.jsx)(v.a,{className:"mr-1",img:e.avatar,width:"32",height:"32"}):Object(O.jsx)(v.a,{color:a||"primary",className:"mr-1",content:e.fullName||"John Doe",initials:!0})},W={pending:"light-warning",active:"light-success",inactive:"light-secondary"},_=[{name:"User",minWidth:"297px",selector:"fullName",sortable:!0,cell:function(e){return Object(O.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[U(e),Object(O.jsxs)("div",{className:"d-flex flex-column",children:[Object(O.jsx)(f.b,{to:"/apps/user/view/".concat(e.id),className:"user-name text-truncate mb-0",onClick:function(){return N.a.dispatch(Object(h.e)(e.id))},children:Object(O.jsx)("span",{className:"font-weight-bold",children:e.fullName})}),Object(O.jsxs)("small",{className:"text-truncate text-muted mb-0",children:["@",e.username]})]})]})}},{name:"Email",minWidth:"320px",selector:"email",sortable:!0,cell:function(e){return e.email}},{name:"Role",minWidth:"172px",selector:"role",sortable:!0,cell:function(e){return function(e){var a={subscriber:{class:"text-primary",icon:k.a},maintainer:{class:"text-success",icon:E.a},editor:{class:"text-info",icon:q.a},author:{class:"text-warning",icon:A.a},admin:{class:"text-danger",icon:R.a}},t=a[e.role]?a[e.role].icon:q.a;return Object(O.jsxs)("span",{className:"text-truncate text-capitalize align-middle",children:[Object(O.jsx)(t,{size:18,className:"".concat(a[e.role]?a[e.role].class:""," mr-50")}),e.role]})}(e)}},{name:"Plan",minWidth:"138px",selector:"currentPlan",sortable:!0,cell:function(e){return Object(O.jsx)("span",{className:"text-capitalize",children:e.currentPlan})}},{name:"Status",minWidth:"138px",selector:"status",sortable:!0,cell:function(e){return Object(O.jsx)(y.a,{className:"text-capitalize",color:W[e.status],pill:!0,children:e.status})}},{name:"Actions",minWidth:"100px",cell:function(e){return Object(O.jsxs)(C.a,{children:[Object(O.jsx)(w.a,{tag:"div",className:"btn btn-sm",children:Object(O.jsx)(z.a,{size:14,className:"cursor-pointer"})}),Object(O.jsxs)(P.a,{right:!0,children:[Object(O.jsxs)(S.a,{tag:f.b,to:"/apps/user/view/".concat(e.id),className:"w-100",onClick:function(){return N.a.dispatch(Object(h.e)(e.id))},children:[Object(O.jsx)(T.a,{size:14,className:"mr-50"}),Object(O.jsx)("span",{className:"align-middle",children:"Details"})]}),Object(O.jsxs)(S.a,{tag:f.b,to:"/apps/user/edit/".concat(e.id),className:"w-100",onClick:function(){return N.a.dispatch(Object(h.e)(e.id))},children:[Object(O.jsx)(D.a,{size:14,className:"mr-50"}),Object(O.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(O.jsxs)(S.a,{className:"w-100",onClick:function(){return N.a.dispatch(Object(h.b)(e.id))},children:[Object(O.jsx)(L.a,{size:14,className:"mr-50"}),Object(O.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})}}],F=t(540),M=t(499),B=t.n(M),J=t(993),G=t(516),H=t.n(G),I=t(476),Y=t(477),K=t(925),Q=t(474),V=t(483),X=t(479),Z=t(475),$=(t(549),t(552),function(e){var a=e.toggleSidebar,t=e.handlePerPage,n=e.rowsPerPage,c=e.handleFilter,s=e.searchTerm;return Object(O.jsx)("div",{className:"invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75",children:Object(O.jsxs)(I.a,{children:[Object(O.jsx)(Y.a,{xl:"6",className:"d-flex align-items-center p-0",children:Object(O.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(O.jsx)(j.a,{for:"rows-per-page",children:"Show"}),Object(O.jsxs)(K.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:n,onChange:t,style:{width:"5rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(O.jsx)("option",{value:"10",children:"10"}),Object(O.jsx)("option",{value:"25",children:"25"}),Object(O.jsx)("option",{value:"50",children:"50"})]}),Object(O.jsx)(j.a,{for:"rows-per-page",children:"Entries"})]})}),Object(O.jsxs)(Y.a,{xl:"6",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1",children:[Object(O.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 mr-1",children:[Object(O.jsx)(j.a,{className:"mb-0",for:"search-invoice",children:"Search:"}),Object(O.jsx)(b.a,{id:"search-invoice",className:"ml-50 w-100",type:"text",value:s,onChange:function(e){return c(e.target.value)}})]}),Object(O.jsx)(p.a.Ripple,{color:"primary",onClick:a,children:"Add New User"})]})]})})}),ee=function(){var e=Object(x.b)(),a=Object(x.c)((function(e){return e.users})),t=Object(c.useState)(""),s=Object(n.a)(t,2),r=s[0],i=s[1],o=Object(c.useState)(1),u=Object(n.a)(o,2),d=u[0],j=u[1],b=Object(c.useState)(10),m=Object(n.a)(b,2),p=m[0],f=m[1],v=Object(c.useState)(!1),N=Object(n.a)(v,2),y=N[0],C=N[1],w=Object(c.useState)({value:"",label:"Select Role"}),P=Object(n.a)(w,2),S=P[0],k=P[1],E=Object(c.useState)({value:"",label:"Select Plan"}),q=Object(n.a)(E,2),A=q[0],R=q[1],z=Object(c.useState)({value:"",label:"Select Status",number:0}),T=Object(n.a)(z,2),D=T[0],L=T[1],U=function(){return C(!y)};Object(c.useEffect)((function(){e(Object(h.c)()),e(Object(h.d)({page:d,perPage:p,role:S.value,currentPlan:A.value,status:D.value,q:r}))}),[e,a.data.length]);return Object(O.jsxs)(c.Fragment,{children:[Object(O.jsxs)(Q.a,{children:[Object(O.jsx)(V.a,{children:Object(O.jsx)(X.a,{tag:"h4",children:"Search Filter"})}),Object(O.jsx)(Z.a,{children:Object(O.jsxs)(I.a,{children:[Object(O.jsx)(Y.a,{md:"4",children:Object(O.jsx)(F.a,{isClearable:!1,theme:l.h,className:"react-select",classNamePrefix:"select",options:[{value:"",label:"Select Role"},{value:"admin",label:"Admin"},{value:"author",label:"Author"},{value:"editor",label:"Editor"},{value:"maintainer",label:"Maintainer"},{value:"subscriber",label:"Subscriber"}],value:S,onChange:function(a){k(a),e(Object(h.d)({page:d,perPage:p,role:a.value,currentPlan:A.value,status:D.value,q:r}))}})}),Object(O.jsx)(Y.a,{className:"my-md-0 my-1",md:"4",children:Object(O.jsx)(F.a,{theme:l.h,isClearable:!1,className:"react-select",classNamePrefix:"select",options:[{value:"",label:"Select Plan"},{value:"basic",label:"Basic"},{value:"company",label:"Company"},{value:"enterprise",label:"Enterprise"},{value:"team",label:"Team"}],value:A,onChange:function(a){R(a),e(Object(h.d)({page:d,perPage:p,role:S.value,currentPlan:a.value,status:D.value,q:r}))}})}),Object(O.jsx)(Y.a,{md:"4",children:Object(O.jsx)(F.a,{theme:l.h,isClearable:!1,className:"react-select",classNamePrefix:"select",options:[{value:"",label:"Select Status",number:0},{value:"pending",label:"Pending",number:1},{value:"active",label:"Active",number:2},{value:"inactive",label:"Inactive",number:3}],value:D,onChange:function(a){L(a),e(Object(h.d)({page:d,perPage:p,role:S.value,currentPlan:A.value,status:a.value,q:r}))}})})]})})]}),Object(O.jsx)(Q.a,{children:Object(O.jsx)(H.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:_,sortIcon:Object(O.jsx)(J.a,{}),className:"react-dataTable",paginationComponent:function(){var t=Number(Math.ceil(a.total/p));return Object(O.jsx)(B.a,{previousLabel:"",nextLabel:"",pageCount:t||1,activeClassName:"active",forcePage:0!==d?d-1:0,onPageChange:function(a){return function(a){e(Object(h.d)({page:a.selected+1,perPage:p,role:S.value,currentPlan:A.value,status:D.value,q:r})),j(a.selected+1)}(a)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},data:function(){var e={role:S.value,currentPlan:A.value,status:D.value,q:r},t=Object.keys(e).some((function(a){return e[a].length>0}));return a.data.length>0?a.data:0===a.data.length&&t?[]:a.allData.slice(0,p)}(),subHeaderComponent:Object(O.jsx)($,{toggleSidebar:U,handlePerPage:function(a){var t=parseInt(a.currentTarget.value);e(Object(h.d)({page:d,perPage:t,role:S.value,currentPlan:A.value,status:D.value,q:r})),f(t)},rowsPerPage:p,searchTerm:r,handleFilter:function(a){i(a),e(Object(h.d)({page:d,perPage:p,role:S.value,currentPlan:A.value,status:D.value,q:a}))}})})}),Object(O.jsx)(g,{open:y,toggleSidebar:U})]})};t(683),a.default=function(){return Object(O.jsx)("div",{className:"app-user-list",children:Object(O.jsx)(ee,{})})}},552:function(e,a,t){},575:function(e,a,t){"use strict";var n=t(1),c=t(21),s=t(124),l=t(927),r=t(59),i=t.n(r),o=t(530),u=t(542),d=t(517),j=t(6),b=["width","open","toggleSidebar","size","bodyClassName","contentClassName","wrapperClassName","headerClassName","className","title","children","closeBtn"];a.a=function(e){var a,t=e.width,r=e.open,m=e.toggleSidebar,p=e.size,h=e.bodyClassName,x=e.contentClassName,O=e.wrapperClassName,g=e.headerClassName,f=e.className,v=e.title,N=e.children,y=e.closeBtn,C=Object(s.a)(e,b),w=y||Object(j.jsx)(l.a,{className:"cursor-pointer",size:15,onClick:m});return Object(j.jsxs)(o.a,Object(n.a)(Object(n.a)(Object(n.a)({isOpen:r,toggle:m,contentClassName:i()(Object(c.a)({},x,x)),modalClassName:i()("modal-slide-in",Object(c.a)({},O,O)),className:i()((a={},Object(c.a)(a,f,f),Object(c.a)(a,"sidebar-lg","lg"===p),Object(c.a)(a,"sidebar-sm","sm"===p),a))},void 0!==t?{style:{width:String(t)+"px"}}:{}),C),{},{children:[Object(j.jsx)(u.a,{className:i()(Object(c.a)({},g,g)),toggle:m,close:w,tag:"div",children:Object(j.jsx)("h5",{className:"modal-title",children:Object(j.jsx)("span",{className:"align-middle",children:v})})}),Object(j.jsx)(d.a,{className:i()("flex-grow-1",Object(c.a)({},h,h)),children:N})]}))}},616:function(e,a,t){"use strict";t.d(a,"c",(function(){return i})),t.d(a,"d",(function(){return o})),t.d(a,"e",(function(){return u})),t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return j}));var n=t(498),c=t.n(n),s=t(501),l=t(83),r=t.n(l),i=function(){return function(){var e=Object(s.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.get("/api/users/list/all-data").then((function(e){a({type:"GET_ALL_DATA",data:e.data})}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},o=function(e){return function(){var a=Object(s.a)(c.a.mark((function a(t){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.get("/api/users/list/data",e).then((function(a){t({type:"GET_DATA",data:a.data.users,totalPages:a.data.total,params:e})}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},u=function(e){return function(){var a=Object(s.a)(c.a.mark((function a(t){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.get("/api/users/user",{id:e}).then((function(e){t({type:"GET_USER",selectedUser:e.data.user})})).catch((function(e){return console.log(e)}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},d=function(e){return function(a,t){r.a.post("/apps/users/add-user",e).then((function(t){a({type:"ADD_USER",user:e})})).then((function(){a(o(t().users.params)),a(i())})).catch((function(e){return console.log(e)}))}},j=function(e){return function(a,t){r.a.delete("/apps/users/delete",{id:e}).then((function(e){a({type:"DELETE_USER"})})).then((function(){a(o(t().users.params)),a(i())}))}}},683:function(e,a,t){}}]);
//# sourceMappingURL=139.bb11077f.chunk.js.map