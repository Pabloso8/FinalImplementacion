(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[173],{1826:function(e,t,a){"use strict";a.r(t);var c=a(498),r=a.n(c),s=a(501),n=a(15),o=a(0),l=a(474),i=a(483),d=a(476),j=a(477),u=a(955),b=a(470),p=a(607),h=a.n(p),O=a(608),m=a.n(O),x=a(83),g=a.n(x),f=a(6);t.default=function(){var e=Object(o.useState)(""),t=Object(n.a)(e,2),a=t[0],c=t[1],p=Object(o.useState)(!1),O=Object(n.a)(p,2),x=O[0],v=O[1],y=Object(o.useState)(!1),N=Object(n.a)(y,2),F=N[0],w=N[1],k=Object(o.useState)(""),S=Object(n.a)(k,2),A=S[0],C=S[1],R=Object(o.useState)(""),M=Object(n.a)(R,2),T=M[0],E=M[1],P=Object(o.useState)(""),I=Object(n.a)(P,2),J=I[0],q=I[1],z=function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={lado1:parseFloat(T),lado2:parseFloat(J)},e.next=3,g.a.get("https://backfinalimplementacion.herokuapp.com/rectangulo/rectangulo/".concat(parseInt(T),"/").concat(parseInt(J)),t).then((function(e){w(!1),v(!0),console.log(e),c(e.data)})).catch((function(e){C("Error de red"),w(!0),v(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)(o.Fragment,{children:Object(f.jsxs)(l.a,{children:[Object(f.jsxs)(i.a,{className:"flex-md-row flex-column align-md-items-center align-items-start border-bottom",children:[Object(f.jsx)(h.a,{tag:"h4",children:"\xc1rea y per\xedmetro de un rect\xe1ngulo"}),Object(f.jsx)("div",{className:"d-flex mt-md-0 mt-1"})]}),Object(f.jsxs)(m.a,{children:[Object(f.jsx)("p",{}),Object(f.jsx)("h5",{children:"Digite los valores del rect\xe1ngulo::"}),Object(f.jsxs)(d.a,{children:[Object(f.jsx)(j.a,{children:Object(f.jsx)(u.a,{id:"input1",placeholder:"Altura",style:{width:"100%"},onChange:function(e){E(e.target.value.replace(",","."))},children:" "})}),Object(f.jsx)(j.a,{children:Object(f.jsx)(u.a,{id:"input2",placeholder:"Base",style:{width:"100%"},onChange:function(e){q(e.target.value.replace(",","."))},children:" "})}),Object(f.jsx)(j.a,{children:Object(f.jsx)(b.a,{id:"button",color:"primary",size:"md",onClick:function(){var e,t;e=T,t=J,isNaN(e)||isNaN(t)||isNaN(parseFloat(e))||isNaN(parseFloat(t))?(C("Alg\xfan dato no es n\xfamero"),w(!0),v(!1)):""===e||""===t?(C("Alg\xfan dato falta"),w(!0),v(!1)):parseFloat(e)<=0||parseFloat(t)<=0?(C("Alg\xfan dato es muy peque\xf1o"),w(!0),v(!1)):parseFloat(e)>1e7||parseFloat(t)>1e7?(C("Alg\xfan dato es muy grande"),w(!0),v(!1)):(C(""),w(!1),z())},children:" Calcular"})})]}),Object(f.jsx)("p",{}),F?Object(f.jsxs)("h5",{className:"text-danger",children:["Error: ",A]}):"",x?Object(f.jsxs)("div",{children:[Object(f.jsx)("h5",{className:"text-success",children:"La resultado es: "}),Object(f.jsx)("p",{}),"  ",Object(f.jsxs)("h5",{id:"response1",children:[" Per\xedmetro: ",a.perimetroRec]})," ",Object(f.jsx)("p",{})," ",Object(f.jsxs)("h5",{id:"response2",children:[" \xc1rea: ",a.areaRec]})," "]}):""]})]})})}},474:function(e,t,a){"use strict";var c=a(14),r=a(20),s=a(0),n=a.n(s),o=a(5),l=a.n(o),i=a(59),d=a.n(i),j=a(82),u={tag:j.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var t=e.className,a=e.cssModule,s=e.color,o=e.body,l=e.inverse,i=e.outline,u=e.tag,b=e.innerRef,p=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(j.mapToCssModules)(d()(t,"card",!!l&&"text-white",!!o&&"card-body",!!s&&(i?"border":"bg")+"-"+s),a);return n.a.createElement(u,Object(c.a)({},p,{className:h,ref:b}))};b.propTypes=u,b.defaultProps={tag:"div"},t.a=b}}]);
//# sourceMappingURL=173.aeb0a03f.chunk.js.map