(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[730],{5730:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var r=t(9434),a=t(2791),i=t(9439),s=t(2561),u=t(184);function o(){var e=(0,r.I0)(),n=(0,r.v9)((function(e){return e.numbers.items})),t=(0,a.useState)(""),o=(0,i.Z)(t,2),c=o[0],l=o[1],d=(0,a.useState)(""),h=(0,i.Z)(d,2),m=h[0],p=h[1],f=(0,a.useState)(!1),x=(0,i.Z)(f,2),b=x[0],y=x[1],j=function(e){return y(!1),"name"===e.currentTarget.name?l(e.currentTarget.value):p(e.currentTarget.value)},v=function(t){if(t.preventDefault(),y(!1),n.filter((function(e){return e.name.toLowerCase()===c.toLowerCase()&&c})).length>0)return y(!0);var r={name:c,phone:m};e((0,s.uK)(r)),g()},g=function(){l(""),p("")};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("form",{onSubmit:v,children:[(0,u.jsx)("h2",{children:"Name"}),(0,u.jsx)("label",{htmlFor:"name",children:(0,u.jsx)("input",{onChange:j,type:"text",name:"name",value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,u.jsx)("h2",{children:"Number"}),(0,u.jsx)("label",{htmlFor:"number",children:(0,u.jsx)("input",{onChange:j,type:"tel",name:"number",value:m,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,u.jsx)("button",{type:"submit",onSubmit:v,children:"Add contact"})]}),b&&(0,u.jsxs)("h1",{children:["This contact ",c," already done"]})]})}var c=t(2007),l=t.n(c),d=t(1473),h=function(){var e=(0,r.I0)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h3",{children:"Finde contacts by name"}),(0,u.jsx)("input",{onChange:function(n){e((0,d.W)(n.currentTarget.value))},type:"text",name:"filter",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Finde contacts by name",required:!0})]})};l().Filter={value:l().string.isRequired,onChange:l().func.isRequired};var m,p=t(168),f=t(4934).Z.li(m||(m=(0,p.Z)(["\n  width: 300px;\n  display: flex;\n  gap: 20px;\n  justify-content: space-between;\n\n  button {\n    width: 60px;\n    height: 25px;\n  }\n  align-items: center;\n"]))),x=function(e){var n=e.name,t=e.number,a=e.id,i=(0,r.I0)();return(0,u.jsxs)(f,{children:[(0,u.jsxs)("p",{children:[n,":",t]}),(0,u.jsx)("button",{type:"button",onClick:function(){return i((0,s.GK)(a))},children:"Delete"})]})};l().ContactItem={name:l().string.isRequired,number:l().number.isRequired,id:l().string.isRequired,onDeleteContact:l().func.isRequired};var b=function(){var e=(0,r.v9)((function(e){return e.filters.finde})),n=(0,r.v9)((function(e){return e.numbers.items}));return(0,u.jsx)("ul",{children:function(){if(e){var t=e.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}return n}().map((function(e){var n=e.name,t=e.number,r=e.id;return(0,u.jsx)(x,{name:n,number:t,id:r},r)}))})};function y(){var e=(0,r.I0)();return(0,a.useEffect)((function(){e((0,s.yF)())}),[e]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"PhoneBook"}),(0,u.jsx)(o,{}),(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(h,{}),(0,u.jsx)(b,{})]})}},888:function(e,n,t){"use strict";var r=t(9047);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,i,s){if(s!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=730.aca84b35.chunk.js.map