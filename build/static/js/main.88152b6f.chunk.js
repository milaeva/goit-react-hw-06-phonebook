(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={list:"ContactsList_list__jQfWO",item:"ContactsList_item__26grX",button:"ContactsList_button__2ZtGm"}},43:function(t,e,n){},55:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=(n(34),n(15)),i=n.n(o),u=n(31),l=n(19),s=n(26),b=n(6),d=n(7),j=n(27),m=n.n(j),p=n(28),h=n.n(p),f=n(20),O=n(32),C=n(3),x={handleSubmit:Object(b.b)("contact/Submit"),deleteContact:Object(b.b)("contact/Delete"),inputChange:Object(b.b)("contact/inputChange")},g=Object(b.c)([],(a={},Object(f.a)(a,x.handleSubmit,(function(t,e){var n=e.payload;return[].concat(Object(O.a)(t),[n])})),Object(f.a)(a,x.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return!t.id.includes(n)}))})),a)),v=Object(b.c)("",Object(f.a)({},x.inputChange,(function(t,e){return e.payload}))),_=Object(C.b)({contact:g,inputValue:v}),N={key:"root",storage:m.a,blacklist:["inputValue"]},S=Object(b.a)({reducer:Object(d.g)(N,_),middleware:function(t){return t({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}}).concat(h.a)},devTools:!1}),k={store:S,persistor:Object(d.h)(S)},y=(n(43),n(23)),w=(n(44),n(29)),A=(n(45),n(25)),L=n(18),V=n.n(L),z=n(8),F=n.n(z),M=n(1);function Z(t){var e=t.submit,n=Object(c.useState)(""),a=Object(A.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),u=Object(A.a)(i,2),l=u[0],s=u[1],b=function(){o(""),s("")},d=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":s(a);break;default:return}};return Object(M.jsxs)("form",{onSubmit:function(t){var n=V.a.generate();t.preventDefault(),b(),e({name:r,number:l,id:n})},className:F.a.form,children:[Object(M.jsxs)("label",{className:F.a.label,children:["Name",Object(M.jsx)("input",{type:"text",name:"name",className:F.a.input,value:r,onChange:d,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(M.jsxs)("label",{className:F.a.label,children:["Number",Object(M.jsx)("input",{type:"tel",name:"number",className:F.a.input,value:l,onChange:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(M.jsx)("button",{type:"submit",className:F.a.button,children:"Submit"})]})}function B(t){var e=t.filterInput,n=t.filterValue;return Object(M.jsx)("label",{children:Object(M.jsx)("input",{type:"text",name:"filter",value:n,onChange:e})})}var D=n(12),I=n.n(D);function J(t){var e=t.contact,n=t.deleteContact;return Object(M.jsxs)("li",{className:I.a.item,children:[Object(M.jsxs)("p",{children:[e.name,": ",e.number]}),Object(M.jsx)("button",{type:"button",className:I.a.button,id:e.id,onClick:function(){return n(e.id)},children:"Delete"})]})}function T(t){var e=t.contacts,n=t.deleteContact;return Object(M.jsx)("ul",{className:I.a.list,children:e.map((function(t){var e=V.a.generate();return Object(M.jsx)(J,{contact:t,deleteContact:n},e)}))})}n(55);var q=Object(l.b)((function(t){return{contacts:t.contact,inputValue:t.inputValue}}),(function(t){return{handleSubmit:function(e){return t(x.handleSubmit(e))},deleteContact:function(e){return t(x.deleteContact(e))},inputChange:function(e){return t(x.inputChange(e.currentTarget.value))}}}))((function(t){var e=t.contacts,n=t.inputValue,a=t.handleSubmit,c=t.deleteContact,r=t.inputChange;return Object(M.jsxs)("div",{className:"App",children:[Object(M.jsx)("h1",{children:"Phonebook"}),Object(M.jsx)(Z,{submit:function(t){e.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?(y.defaultModules.set(w,{}),Object(y.alert)({text:"".concat(t.name," is olready in contacts")})):a(t)}}),Object(M.jsx)("h2",{children:"Contacts"}),0===e.length?null:Object(M.jsx)(B,{filterInput:r,filterValue:n}),0===e.length?Object(M.jsx)("p",{children:"No Contacts"}):Object(M.jsx)(T,{contacts:function(){var t=n.toLowerCase();return 0===e.length?void 0:e.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),deleteContact:c})]})}));i.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(l.a,{store:k.store,children:Object(M.jsx)(s.a,{loading:null,persistor:k.persistor,children:Object(M.jsx)(u.a,{children:Object(M.jsx)(q,{})})})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"Form_form__3p2SN",label:"Form_label__2rSbB",input:"Form_input__3_9lF",button:"Form_button__1MC3x"}}},[[57,1,2]]]);
//# sourceMappingURL=main.88152b6f.chunk.js.map