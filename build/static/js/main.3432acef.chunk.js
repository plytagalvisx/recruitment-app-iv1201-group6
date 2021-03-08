(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(18),s=n.n(c),l=(n(24),n(25),n(26),n(7)),i=n(2),o=n(4);var u=n(0);function j(e){var t=e.loggedIn,n="Create Applications";return 1===e.userType&&(n="Show Applications"),t?Object(u.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(u.jsx)(l.b,{to:"/",className:"navbar-brand",children:"Recruitment App"}),Object(u.jsx)("div",{className:"collpase navbar-collapse",children:Object(u.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(u.jsx)("li",{className:"navbar-item",children:Object(u.jsx)(l.b,{to:"/applications",className:"nav-link",children:n})}),Object(u.jsx)("li",{className:"navbar-item",children:Object(u.jsx)(l.b,{to:"/logout",className:"nav-link",children:"Logout"})})]})})]}):Object(u.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(u.jsx)(l.b,{to:"/",className:"navbar-brand",children:"Recruitment App"}),Object(u.jsx)("div",{className:"collpase navbar-collapse",children:Object(u.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(u.jsx)("li",{className:"navbar-item",children:Object(u.jsx)(l.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(u.jsx)("li",{className:"navbar-item",children:Object(u.jsx)(l.b,{to:"/register",className:"nav-link",children:"Register"})})]})})]})}function b(e){var t=e.token;return r.a.createElement(j,{loggedIn:!!t,userType:!!t&&t.authLevel})}var d=n(9),p=n.n(d),m=n(11);function h(e){var t=e.handleSubmit,n=e.token,a=(e.text,"");return n&&(a="an Applicant",1===n.authLevel&&(a="a Recruiter")),Object(u.jsxs)("div",{children:["WELCOME TO THE HOME VIEW!",n?Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["Logged in user email: ",n.email]}),Object(u.jsxs)("p",{children:["You are ",a]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(e){return t(e,0)},children:"I want to be an Applicant!"}),Object(u.jsx)("button",{onClick:function(e){return t(e,1)},children:"I want to be a Recruiter!"})]})]}):""]})}function x(e){var t=e.token,n=e.setToken,a=r.a.useState(null),c=Object(o.a)(a,2),s=c[0],l=c[1];function i(){return(i=Object(m.a)(p.a.mark((function e(a,r){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,fetch("/api/setAuthorization",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.email,authLevel:r})}).then((function(e){return e.json()}));case 3:c=e.sent,l(c.message),n(c.token);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(h,{handleSubmit:function(e,t){return i.apply(this,arguments)},text:s,token:t})}function O(e){var t=e.handleSubmit;return Object(u.jsx)("form",{children:Object(u.jsx)("input",{type:"submit",value:"Logout",onClick:function(e){return t(e)}})})}function f(e){var t=e.unsetToken,n=e.token,a=Object(i.e)();return r.a.createElement(O,{handleSubmit:function(e){e.preventDefault(),t(n),a.push("/")}})}function v(e){var t=e.handleSubmit,n=e.text,a=r.a.useState(null),c=Object(o.a)(a,2),s=c[0],l=c[1],i=r.a.useState(null),j=Object(o.a)(i,2),b=j[0],d=j[1],p=r.a.useState(null),m=Object(o.a)(p,2),h=m[0],x=m[1],O=r.a.useState(null),f=Object(o.a)(O,2),v=f[0],g=f[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Firstname"}),Object(u.jsx)("input",{type:"text",name:"firstname",placeholder:"Firstname",onChange:function(e){return l(e.target.value)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Lastname"}),Object(u.jsx)("input",{type:"text",name:"lastname",placeholder:"Lastname",onChange:function(e){return d(e.target.value)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{type:"text",name:"email",placeholder:"Email",onChange:function(e){return x(e.target.value)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",name:"password",placeholder:"Password",onChange:function(e){return g(e.target.value)}})]}),Object(u.jsx)("button",{type:"submit",onClick:function(e){return t(e,s,b,h,v)},children:"Submit"}),Object(u.jsx)("p",{children:n})]})})}function g(e){var t=e.setToken,n=r.a.useState(null),a=Object(o.a)(n,2),c=a[0],s=a[1],l=Object(i.e)();function u(){return(u=Object(m.a)(p.a.mark((function e(n,a,r,c,i){var o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("/api/registerUser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstname:a,lastname:r,email:c,password:i})}).then((function(e){return e.json()}));case 3:o=e.sent,s(o.message),o.token&&(t(o.token),l.push("/"));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(v,{handleSubmit:function(e,t,n,a,r){return u.apply(this,arguments)},text:c})}function k(e){var t=e.handleSubmit,n=e.text,a=r.a.useState(null),c=Object(o.a)(a,2),s=c[0],l=c[1],i=r.a.useState(null),j=Object(o.a)(i,2),b=j[0],d=j[1];return Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Email "}),Object(u.jsx)("input",{type:"text",name:"email",onChange:function(e){return l(e.target.value)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Password "}),Object(u.jsx)("input",{type:"password",name:"password",onChange:function(e){return d(e.target.value)}})]}),Object(u.jsx)("input",{type:"submit",onClick:function(e){return t(e,s,b)}}),Object(u.jsx)("p",{children:n})]})}function y(e){var t=e.setToken,n=r.a.useState(null),a=Object(o.a)(n,2),c=a[0],s=a[1],l=Object(i.e)();function u(){return(u=Object(m.a)(p.a.mark((function e(n,a,r){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:r})}).then((function(e){return e.json()}));case 3:c=e.sent,s(c.message),c.token&&(t(c.token),l.push("/"));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(k,{handleSubmit:function(e,t,n){return u.apply(this,arguments)},text:c})}function S(e){e.token;return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{class:"col-md-6 offset-md-3 mt-5",children:[Object(u.jsx)("h1",{style:{fontSize:20,marginTop:24,marginBottom:24},children:"Simple Job Application Form"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{for:"exampleInputName",children:"Full Name"}),Object(u.jsx)("input",{type:"text",name:"fullname",class:"form-control",id:"exampleInputName",placeholder:"Enter your name and surname",required:"required"})]}),Object(u.jsxs)("div",{class:"form-group",children:[Object(u.jsx)("label",{for:"exampleInputEmail1",required:"required",children:"Email address"}),Object(u.jsx)("input",{type:"email",name:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter your email address"})]}),Object(u.jsxs)("div",{class:"form-group",children:[Object(u.jsx)("label",{for:"inputAddress",children:"Address"}),Object(u.jsx)("input",{type:"text",name:"address",class:"form-control",id:"inputAddress",placeholder:"1234 Main St"})]}),Object(u.jsxs)("div",{class:"form-row",children:[Object(u.jsxs)("div",{class:"form-group col-md-6",children:[Object(u.jsx)("label",{for:"inputCity",children:"City"}),Object(u.jsx)("input",{type:"text",name:"city",class:"form-control",id:"inputCity",placeholder:"Istanbul"})]}),Object(u.jsxs)("div",{class:"form-group col-md-2",children:[Object(u.jsx)("label",{for:"inputZip",children:"Zip"}),Object(u.jsx)("input",{type:"text",name:"zip",class:"form-control",id:"inputZip",placeholder:"34000"})]})]}),Object(u.jsxs)("div",{class:"form-group",children:[Object(u.jsx)("label",{for:"example-tel-input",class:"col-2 col-form-label",children:"Telephone"}),Object(u.jsx)("div",{class:"col-10",children:Object(u.jsx)("input",{class:"form-control",name:"tel",type:"tel",value:"1-(555)-555-5555",id:"example-tel-input"})})]}),Object(u.jsxs)("div",{class:"form-group",children:[Object(u.jsx)("label",{for:"example-date-input",class:"col-3 col-form-label",children:"Start Date"}),Object(u.jsx)("div",{class:"col-10",children:Object(u.jsx)("input",{class:"form-control",name:"starting_date",type:"date",value:"2020-02-01",id:"example-date-input"})})]}),Object(u.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})})}function N(e){e.token;return Object(u.jsx)("div",{children:"CREATE AN APPLICATION"})}function T(e){var t=e.token;return 1===t.authLevel?r.a.createElement(S,{token:t}):r.a.createElement(N,{token:t})}var C=function(){var e=function(){var e=Object(a.useState)(function(){var e=localStorage.getItem("token");return JSON.parse(e)}()),t=Object(o.a)(e,2),n=t[0],r=t[1];return{unsetToken:function(e){localStorage.removeItem("token",JSON.stringify(e)),r(null)},setToken:function(e){localStorage.setItem("token",JSON.stringify(e)),r(e)},token:n}}(),t=e.token,n=e.setToken,c=e.unsetToken;return Object(u.jsx)(l.a,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(b,{token:t}),Object(u.jsx)(i.a,{path:"/",exact:!0,component:function(){return Object(u.jsx)(x,{setToken:n,token:t})}}),t?Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsx)(i.a,{path:"/logout",exact:!0,component:function(){return Object(u.jsx)(f,{unsetToken:c,token:t})}}),Object(u.jsx)(i.a,{path:"/applications",exact:!0,component:function(){return Object(u.jsx)(T,{token:t})}})]}):Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsx)(i.a,{path:"/login",exact:!0,component:function(){return Object(u.jsx)(y,{setToken:n,token:t})}}),Object(u.jsx)(i.a,{path:"/register",exact:!0,component:function(){return Object(u.jsx)(g,{setToken:n,token:t})}})]})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),E()}},[[34,1,2]]]);
//# sourceMappingURL=main.3432acef.chunk.js.map