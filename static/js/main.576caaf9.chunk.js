(this.webpackJsonpleif=this.webpackJsonpleif||[]).push([[0],{24:function(e,t,i){},25:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){},50:function(e,t,i){},51:function(e,t,i){},52:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return R}));var c=i(1),s=i.n(c),a=i(16),l=i.n(a),n=(i(24),i(25),i(6),i(7),i(5)),r=i.n(n),j=i(17),d=i(3),o=i(18),m=i.n(o).a.create({baseURL:"https://api.coingecko.com/api/v3"}),u=i(0),b=Object(c.createContext)(),x=function(e){var t=Object(c.useState)(["bitcoin","litecoin","ethereum"]),i=Object(d.a)(t,2),s=i[0];i[1];return Object(u.jsx)(b.Provider,{value:{watchList:s},children:e.children})};function h(e){var t=e.coin;return Object(u.jsxs)("div",{className:"flex justifybetween alignitems max2000",style:{},children:[Object(u.jsx)("img",{className:"coinimg marginright1",src:t.image,alt:""}),Object(u.jsx)("div",{className:"marginright2",children:t.name}),Object(u.jsxs)("div",{className:"marginright2 flex",children:["CurrentPrice:",Object(u.jsx)("div",{className:"",style:{marginLeft:"3%",color:"#97d451"},children:t.current_price})]}),Object(u.jsx)("div",{className:""})]})}var p=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),i=t[0],s=t[1],a=Object(c.useContext)(b).watchList;console.log(a),Object(c.useEffect)((function(){(function(){var e=Object(j.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/coins/markets",{params:{vs_currency:"usd",ids:a.join(",")}});case 2:t=e.sent,s(t.data),console.log(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"flexwrap justifybetween width60 ",style:{maxWidth:"50vw"},children:i.map((function(e){return Object(u.jsx)(h,{coin:e},e.id)}))})})};function O(){return Object(u.jsx)("div",{className:"banner  flex justify",children:Object(u.jsx)("div",{className:"flex justifyaround ",style:{width:"55rem"},children:Object(u.jsx)(x,{children:Object(u.jsx)(p,{})})})})}var f=i.p+"static/media/invest.18913b00.jpg",g=i.p+"static/media/phone.7d307122.png",N=i.p+"static/media/abc.c4a47826.jpeg";function v(){return Object(u.jsxs)("div",{className:"flexwrap justifyaround width30 font600 ",children:[Object(u.jsx)("script",{src:"https://kit.fontawesome.com/494ce4ee7f.js",crossorigin:"anonymous"}),Object(u.jsxs)("div",{className:" headerb flexcol alignitems ",children:[Object(u.jsx)("i",{class:"fas fa-home hicon"}),"Home Inspections"]}),Object(u.jsxs)("div",{className:"headerb flexcol alignitems",children:[Object(u.jsx)("i",{class:"fas fa-coins hicon"}),"Radon & Mold Testing"]}),Object(u.jsxs)("div",{className:"headerb flexcol alignitems",children:[Object(u.jsx)("i",{class:"fas fa-bug hicon"}),"Pest Detection"]})]})}function A(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"",style:{top:"0px"},children:Object(u.jsx)(O,{})}),Object(u.jsx)("div",{className:" flex justify margintop",children:Object(u.jsx)(v,{})}),Object(u.jsxs)("div",{className:"relative flexwrap container margintop justifybetween alignitems",style:{maxWidth:""},children:[Object(u.jsxs)("fieldset",{className:"p1 ",children:[Object(u.jsx)("legend",{children:Object(u.jsx)("h2",{style:{color:"#cfa900"},children:"Sample Text "})}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("h4",{style:{color:"005d31 "},children:"Inner Headline"})}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{className:"",style:{width:"70%"},children:"Aliqua occaecat dolor incididunt ut magna id eiusmod sit consequat nisi. Adipisicing cupidatat ad dolore consectetur aliqua velit aute. Nulla cillum qui dolore sunt enim quis ut tempor ut non exercitation laborum fugiat nulla. In magna labore enim sunt enim. Mollit exercitation commodo laborum aliqua cillum incididunt. Amet amet Lorem dolor mollit anim esse fugiat incididunt officia eiusmod tempor est sit. Cillum tempor fugiat pariatur enim excepteur Lorem ipsum eiusmod ipsum deserunt amet."})]}),Object(u.jsx)("div",{className:"flex absolute img1div  ",children:Object(u.jsx)("img",{alt:"",src:f,className:"img1",style:{maxWidth:"35vw"}})}),Object(u.jsx)("div",{className:"flex rightcard",children:"Aliqua occaecat dolor incididunt ut magna id eiu"})]}),Object(u.jsxs)("div",{className:"relative flexwrap p2 margintop  justifybetween alignitems",children:[Object(u.jsx)("div",{className:"flex rightcard",children:"Aliqua occaecat dolor incididunt ut magna id eiu"}),Object(u.jsxs)("fieldset",{className:"p1",children:[Object(u.jsx)("legend",{children:Object(u.jsx)("h2",{style:{color:"#cfa900"},children:"Sample Text "})}),Object(u.jsx)("div",{className:" flex justifyend",children:Object(u.jsx)("h4",{style:{color:"#284336",zIndex:"4"},children:"Time To Invest"})}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:" flex justifyend",children:Object(u.jsx)("p",{className:"",style:{width:"70%",textAlign:"end",color:"#432928"},children:"Aliqua occaecat dolor incididunt ut magna id eiusmod sit consequat nisi. Adipisicing cupidatat ad dolore consectetur aliqua velit aute. Nulla cillum qui dolore sunt enim quis ut tempor ut non exercitation laborum fugiat nulla. In magna labore enim sunt enim. Mollit exercitation commodo laborum aliqua cillum incididunt. Amet amet Lorem dolor mollit anim esse fugiat incididunt officia eiusmod tempor est sit. Cillum tempor fugiat pariatur enim excepteur Lorem ipsum eiusmod ipsum deserunt amet."})})]}),Object(u.jsx)("div",{className:"flex absolute img2div ",children:Object(u.jsx)("img",{alt:"",src:N,className:"img2"})})]}),Object(u.jsxs)("div",{className:"relative  flexwrap p2 margintop  justifybetween alignitems",children:[Object(u.jsxs)("fieldset",{className:"p1",style:{maxWidth:""},children:[Object(u.jsxs)("legend",{children:[Object(u.jsx)("h2",{style:{color:"#cfa900"},children:"Sample Text "})," "]}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("h4",{children:"Inner Headline"})}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{className:"",style:{width:"70%"},children:"Aliqua occaecat dolor incididunt ut magna id eiusmod sit consequat nisi. Adipisicing cupidatat ad dolore consectetur aliqua velit aute. Nulla cillum qui dolore sunt enim quis ut tempor ut non exercitation laborum fugiat nulla. In magna labore enim sunt enim. Mollit exercitation commodo laborum aliqua cillum incididunt. Amet amet Lorem dolor mollit anim esse fugiat incididunt officia eiusmod tempor est sit. Cillum tempor fugiat pariatur enim excepteur Lorem ipsum eiusmod ipsum deserunt amet."})]}),Object(u.jsx)("div",{className:"flex absolute img3div ",children:Object(u.jsx)("img",{alt:"",src:g,className:"img3",style:{maxWidth:"35vw"}})}),Object(u.jsx)("div",{className:"flex rightcard",children:"Aliqua occaecat dolor incididunt ut magna id eiu"})]})]})}function U(){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:" ",children:[Object(u.jsx)(A,{})," "]})})}i(46),i(47);function Q(){return Object(u.jsxs)("div",{className:" flex justifyend alignitems ",style:{marginTop:"1%"},children:[Object(u.jsx)("input",{className:"relative search-bar ",type:"text",value:"",style:{}}),Object(u.jsx)("div",{className:"absolute",children:Object(u.jsx)("button",{type:"submit",className:"search-button   ",style:{textAlign:"center",margin:"0"},children:"Search "})})]})}function w(){return Object(u.jsxs)("nav",{className:"navbar sticky flex justifyaround  font600",style:{width:"70vw"},children:[Object(u.jsx)("a",{href:"/",children:"Home"}),Object(u.jsxs)("div",{className:"flex white navul",children:[Object(u.jsx)("div",{className:"white",children:Object(u.jsx)("a",{href:"#learnmore",children:"Learn More"})}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("a",{href:"#about",children:"About"})}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("a",{href:"#contact",children:"Contact"})})]}),Object(u.jsx)("a",{href:"/signup",children:"Sign Up"})]})}var y=function(){return Object(u.jsx)("div",{className:" flex justifyend alignitemsend ",style:{marginRight:"3%",marginTop:"1.3%"},children:Object(u.jsx)("div",{children:Object(u.jsx)("a",{href:"tel:5551234567",children:"Call (555)123-4567"})})})},S=function(){return Object(u.jsxs)("div",{className:"width70",style:{fontWeight:"600",color:"white",fontSize:"2em",lineHeight:"1.2"},children:["Smart Home ,",Object(u.jsx)("ul",{children:"Work With Us"})]})};function q(){return Object(u.jsxs)("div",{className:"head relative width100",children:[Object(u.jsx)("div",{className:" ",children:Object(u.jsx)(y,{})}),Object(u.jsx)("div",{className:"flex justify width100 ",children:Object(u.jsx)(Q,{})}),Object(u.jsx)("div",{className:" absolute flexwrap alignitems ",style:{zIndex:"2",bottom:"0px",top:"0px",left:"16%"},children:Object(u.jsx)(S,{})}),Object(u.jsx)("div",{className:"  flexwrap alignitems justify ",style:{height:"36vh"},children:Object(u.jsxs)("div",{className:" flex alignitems",style:{color:"white",fontSize:"3rem"},children:[Object(u.jsx)("i",{class:"fas fa-sort-amount-up-alt"}),Object(u.jsxs)("div",{className:"font600 flexwrap alignitems ",style:{padding:"1.5%",width:"500px",lineHeight:"1.1"},children:[Object(u.jsx)("h1",{style:{color:"white",fontSize:"2.5rem"},children:"Elevate Home Inspections LLC"}),Object(u.jsx)("div",{children:Object(u.jsx)("ul",{style:{color:"#069BC2"},children:"Your Trusted Home Inspector"})})]})]})}),Object(u.jsx)("div",{className:" flex justify absolutebottom",style:{marginBottom:"-5px"},children:Object(u.jsx)(w,{})}),Object(u.jsx)("div",{className:"flex justify "})]})}var B=i(19),T=i.n(B),k=function(){return Object(u.jsx)("div",{className:"flex justify ",style:{marginTop:"1%"},children:Object(u.jsxs)("form",{className:"flexwrap contact-form width20",onSubmit:function(e){e.preventDefault(),T.a.sendForm("service_ey4ab2x","template_3de1jw9",e.target,"user_wv3K1hQDxcdMl9VBIJNVm").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},style:{width:"100px"},children:[Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("input",{type:"hidden",name:"contact_number"}),Object(u.jsx)("label",{children:"Name"})]}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("input",{type:"text",name:"user_name"}),Object(u.jsx)("label",{children:"Email"})]}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("input",{type:"email",name:"user_email"}),Object(u.jsx)("label",{children:"Message"})]}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("textarea",{name:"message"}),Object(u.jsx)("input",{type:"submit",value:"Send"})]})]})})};i(50);function K(){return Object(u.jsxs)("div",{className:" flex justify",style:{width:"100vw"},children:[Object(u.jsx)("script",{src:"https://kit.fontawesome.com/494ce4ee7f.js",crossorigin:"anonymous"}),Object(u.jsxs)("div",{className:"flex width30 justifyaround ",children:[Object(u.jsxs)("a",{href:"/",style:{width:"3rem"},children:[" ",Object(u.jsx)("i",{class:"fab fa-facebook-square social"})," "]}),Object(u.jsxs)("a",{href:"/",children:[" ",Object(u.jsx)("i",{class:"fab fa-twitter-square social"})]}),Object(u.jsx)("a",{href:"/",children:Object(u.jsx)("i",{class:"fab fa-instagram social"})}),Object(u.jsxs)("a",{href:"/",children:[" ",Object(u.jsx)("i",{class:"fas fa-envelope social",children:"  "})," "]})]})]})}function E(){return Object(u.jsxs)("div",{className:"footer relative",children:[Object(u.jsxs)("div",{className:"flex justify top",children:[Object(u.jsx)("h3",{children:" Footer"}),"       ",Object(u.jsx)("div",{})]}),Object(u.jsx)("div",{className:"flex",style:{width:"100%",zIndex:"1"},children:Object(u.jsx)(K,{})}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)(k,{})}),Object(u.jsx)("div",{className:"absolutebottom",style:{color:"burlywood"},children:Object(u.jsx)("a",{href:"https://munibkhanresume.tk/",target:"blank",className:"anchor",children:"@Munib Khan "})})]})}i(51);var C=i.p+"static/media/icon1.8dcb09e1.png",W=i.p+"static/media/icon2.1c06acfd.png",I=i.p+"static/media/icon3.7ac32440.png";function V(){return Object(u.jsx)("div",{className:"alignitem  flex justify width65",style:{maxWidth:"1400px"},children:Object(u.jsxs)("div",{className:"panel  justifybetween alignitems   ",children:[Object(u.jsxs)("div",{className:"pricing-plan threedhover",children:[Object(u.jsx)("img",{src:C,alt:"",className:"pricing-img"}),Object(u.jsx)("h2",{className:"pricing-header",children:"Personal"}),Object(u.jsxs)("ul",{className:"pricing-features panelul",children:[Object(u.jsx)("li",{className:"pricing-features-item",children:"Start As Low As"}),Object(u.jsx)("li",{className:"pricing-features-item",children:"$100 - $500"})]}),Object(u.jsx)("span",{className:"pricing-price",children:"$100"}),Object(u.jsx)("a",{href:"#/",className:"pricing-button",children:"Sign up"})]}),Object(u.jsxs)("div",{className:"pricing-plan threedhover",children:[Object(u.jsx)("img",{src:W,alt:"",className:"pricing-img"}),Object(u.jsx)("h2",{className:"pricing-header",style:{color:"blue"},children:"Medium"}),Object(u.jsxs)("ul",{className:"pricing-features panelul",children:[Object(u.jsx)("li",{className:"pricing-features-item",children:"Never sleeps"}),Object(u.jsx)("li",{className:"pricing-features-item",children:"$1000 - $ 10000"})]}),Object(u.jsx)("span",{className:"pricing-price",children:"$5000"}),Object(u.jsx)("a",{href:"#/",className:"pricing-button is-featured",children:"Sign up"})]}),Object(u.jsxs)("div",{className:"pricing-plan threedhover",children:[Object(u.jsx)("img",{src:I,alt:"",className:"pricing-img"}),Object(u.jsx)("h2",{className:"pricing-header",style:{color:"#027002"},children:"Enterprise"}),Object(u.jsxs)("ul",{className:"pricing-features panelul",children:[Object(u.jsx)("li",{className:"pricing-features-item",children:"Dedicated"}),Object(u.jsx)("li",{className:"pricing-features-item",children:"Simple horizontal "})]}),Object(u.jsx)("span",{className:"pricing-price",children:"$10,000+"}),Object(u.jsx)("a",{href:"#/",className:"pricing-button",style:{backgroundColor:"#ff9800",color:"white"},children:"Sign up"})]})]})})}var P=i.p+"static/media/perfectcell.a1439f8f.jpg",F=i.p+"static/media/kidbuu.19445c98.jpg";function D(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"width100 relative",id:"",children:[Object(u.jsx)("div",{className:"absolute homeimg width100"}),Object(u.jsx)(q,{})]}),Object(u.jsx)("div",{className:"bod flex margin  relative max2000",style:{maxWidth:""},children:Object(u.jsx)("div",{className:" max2000 justify width70",style:{maxWidth:""},children:Object(u.jsx)(U,{})})}),Object(u.jsxs)("div",{className:"width100 margintop cardcontainer ",style:{backgroundColor:""},children:[Object(u.jsx)("div",{className:" flex justify ",style:{color:"#0077B1",padding:"1%"},children:Object(u.jsx)("h1",{children:"Meet the TEAM"})}),Object(u.jsx)("div",{className:"flexwrap justify ",style:{padding:"1%"},children:Object(u.jsxs)("div",{className:"flexwrap justifyaround width60",style:{backgroundColor:""},children:[Object(u.jsxs)("div",{className:"card textalign",children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:P,alt:"",style:{width:"8rem",borderRadius:"50%"}})}),Object(u.jsx)("hr",{style:{width:"14.5rem"}}),Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"Perfect Cell"})}),Object(u.jsx)("div",{children:"Incredible Physique. Likely to devour your family."})]}),Object(u.jsxs)("div",{className:"card textalign",children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:F,alt:"",style:{width:"8rem",borderRadius:"50%"}})}),Object(u.jsx)("hr",{style:{width:"14.5rem"}}),Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"Kid Buu"})}),Object(u.jsx)("div",{children:"Magical construct/artificial djinn-like demon. Likely to blow up your planet."})]}),Object(u.jsxs)("div",{className:"card textalign",children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"",style:{width:"8rem",minHeight:"11rem",borderRadius:"50%"}})}),Object(u.jsx)("hr",{style:{width:"14.5rem"}}),Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"Munib Khan"})}),Object(u.jsx)("div",{children:"Full Stack Javascript/React Developer."})]})]})})]}),Object(u.jsx)("div",{className:"flex justify margintop10",children:Object(u.jsx)("h1",{style:{color:"#0077B1"},children:"Pricing Plan "})}),Object(u.jsx)("div",{className:" flex justify margintop ",children:Object(u.jsx)(V,{})}),Object(u.jsx)("div",{className:"margintop15",children:Object(u.jsx)(E,{})})]})}function J(e){return Object(u.jsx)("div",{className:"",children:Object(u.jsx)(D,{})})}function R(){return Object(u.jsx)("div",{})}l.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(J,{})}),document.getElementById("root"))},6:function(e,t,i){},7:function(e,t,i){}},[[52,1,2]]]);
//# sourceMappingURL=main.576caaf9.chunk.js.map