(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(18),s=n.n(c),i=n(8),r=(n(29),n(22)),l=n(2),u=n(3),m=n.p+"static/media/header-logo.3755f99c.svg",d=n(0);var j=function(e){var t=e.loggedIn,n=e.userEmail,a=e.onSignOut,o=Object(u.h)();return Object(d.jsxs)("header",{className:"header page__header",children:[Object(d.jsx)("img",{className:"header__logo",src:m,alt:"Around the U.S. app logo"}),!t&&Object(d.jsxs)("nav",{children:["/sign-in"===o.pathname&&Object(d.jsx)(i.b,{className:"header__navlink",to:"/sign-up",children:"Sign up"}),"/sign-up"===o.pathname&&Object(d.jsx)(i.b,{className:"header__navlink",to:"/sign-in",children:"Log in"})]}),t&&Object(d.jsxs)("div",{className:"header__user-info",children:[Object(d.jsx)("p",{className:"header__email",children:n}),Object(d.jsx)("button",{onClick:a,className:"header__button",type:"button",children:"Sign out"})]})]})},b=o.a.createContext();var p=function(e){var t=e.card,n=e.onClick,o=e.onCardLike,c=e.onCardDelete,s=Object(a.useContext)(b),i=t.owner._id===s._id,r=t.likes.some((function(e){return e._id===s._id})),l="element__delete-btn ".concat(i?"":"element__delete-btn_hidden"),u="element__like-btn ".concat(r?"element__like-btn_active":"");return Object(d.jsxs)("li",{className:"element",children:[Object(d.jsx)("img",{onClick:function(){n(t)},className:"element__image",src:t.link,alt:"".concat(t.name)}),Object(d.jsxs)("div",{className:"element__desc",children:[Object(d.jsx)("h3",{className:"element__title",children:t.name}),Object(d.jsxs)("div",{className:"element__like-container",children:[Object(d.jsx)("button",{onClick:function(){o(t)},className:u,type:"button","aria-label":"Like photo"}),Object(d.jsx)("span",{className:"element__like-count",children:t.likes.length})]})]}),Object(d.jsx)("button",{onClick:function(){c(t)},className:l,type:"button","aria-label":"Delete photo"})]})};var _=function(){return Object(d.jsx)("div",{className:"loader"})};var h=function(e){var t=Object(a.useContext)(b);return Object(d.jsxs)("main",{className:"content page__content",children:[Object(d.jsxs)("section",{className:"profile content__section",children:[Object(d.jsxs)("div",{className:"profile__avatar-container",children:[Object(d.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}),Object(d.jsx)("button",{className:"profile__avatar-btn","aria-label":"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onClick:e.onEditAvatar})]}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsx)("h1",{className:"profile__name",children:t.name}),Object(d.jsx)("p",{className:"profile__bio",children:t.about}),Object(d.jsx)("button",{className:"profile__edit-btn",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:e.onEditProfile})]}),Object(d.jsx)("button",{className:"profile__add-btn",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",onClick:e.onAddPlace})]}),Object(d.jsx)("section",{className:"elements content__section",children:e.isLoading?Object(d.jsx)(_,{}):Object(d.jsx)("ul",{className:"elements__list",children:e.cards.map((function(t){return Object(d.jsx)(p,{card:t,onClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var f=function(e){var t=e.onLogin,n=Object(a.useState)(""),o=Object(l.a)(n,2),c=o[0],s=o[1],r=Object(a.useState)(""),u=Object(l.a)(r,2),m=u[0],j=u[1];return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({password:m,email:c})},className:"form form_theme_dark",name:"login-form",children:[Object(d.jsx)("h2",{className:"form__heading form__heading_theme_dark",children:"Log in"}),Object(d.jsxs)("fieldset",{className:"form__items form__items_theme_dark",children:[Object(d.jsx)("input",{className:"form__item form__item_theme_dark form__item_el_email",id:"email",type:"email",name:"email",placeholder:"Email",value:c,onChange:function(e){s(e.target.value)},required:!0}),Object(d.jsx)("p",{className:"form__error",id:"email-error"}),Object(d.jsx)("input",{className:"form__item form__item_theme_dark form__item_el_password",id:"password",type:"password",name:"password",placeholder:"Password",value:m,onChange:function(e){j(e.target.value)},required:!0}),Object(d.jsx)("p",{className:"form__error",id:"password-error"})]}),Object(d.jsx)("button",{className:"form__submit-btn form__submit-btn_theme_dark",type:"submit",children:"Log in"}),Object(d.jsxs)("p",{className:"form__text",children:["Not a member yet?",Object(d.jsx)(i.b,{to:"/sign-up",className:"form__link",children:" Sign up here!"})]})]})};var O=function(e){var t=e.onRegistration,n=Object(a.useState)(""),o=Object(l.a)(n,2),c=o[0],s=o[1],r=Object(a.useState)(""),u=Object(l.a)(r,2),m=u[0],j=u[1];return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({password:m,email:c})},className:"form form_theme_dark",name:"signup-form",children:[Object(d.jsx)("h2",{className:"form__heading form__heading_theme_dark",children:"Create an account"}),Object(d.jsxs)("fieldset",{className:"form__items form__items_theme_dark",children:[Object(d.jsx)("input",{className:"form__item form__item_theme_dark form__item_el_email",id:"email",type:"email",name:"email",placeholder:"Email",value:c,onChange:function(e){s(e.target.value)},required:!0}),Object(d.jsx)("p",{className:"form__error",id:"email-error"}),Object(d.jsx)("input",{className:"form__item form__item_theme_dark form__item_el_password",id:"password",type:"password",name:"password",placeholder:"Password",value:m,onChange:function(e){j(e.target.value)},required:!0}),Object(d.jsx)("p",{className:"form__error",id:"password-error"})]}),Object(d.jsx)("button",{className:"form__submit-btn form__submit-btn_theme_dark",type:"submit",children:"Sign up"}),Object(d.jsxs)("p",{className:"form__text",children:["Already have an account?",Object(d.jsx)(i.b,{to:"/sign-in",className:"form__link",children:" Log in here!"})]})]})};var g=function(){return Object(d.jsx)("footer",{className:"footer page__footer",children:Object(d.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Around The U.S"]})})};var x=function(e){return Object(d.jsx)("div",{className:"popup popup_type_".concat(e.name,"  ").concat(e.isOpen&&"popup_opened"),children:Object(d.jsxs)("div",{className:"popup__container popup__container_type_form",children:[Object(d.jsx)("button",{onClick:e.onClose,className:"popup__close-btn",type:"button","aria-label":"Close popup"}),Object(d.jsxs)("form",{onSubmit:e.onSubmit,className:"form",name:"".concat(e.name,"-form"),children:[Object(d.jsx)("h2",{className:"form__heading",children:e.title}),Object(d.jsx)("fieldset",{className:"form__items",children:e.children}),Object(d.jsx)("button",{className:"form__submit-btn",type:"submit",children:e.buttonText})]})]})})};var v=function(e){var t=Object(a.useContext)(b),n=Object(a.useState)(""),o=Object(l.a)(n,2),c=o[0],s=o[1],i=Object(a.useState)(""),r=Object(l.a)(i,2),u=r[0],m=r[1];return Object(a.useEffect)((function(){s(t.name),m(t.about)}),[t,e.isOpen]),Object(d.jsxs)(x,{name:"edit",title:"Edit profile",buttonText:e.buttonText,isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:u})},onClose:e.onClose,children:[Object(d.jsx)("input",{className:"form__item form__item_el_name",id:"profile-name",type:"text",name:"name",placeholder:"Name",minLength:"2",maxLength:"40",value:c,onChange:function(e){s(e.target.value)},required:!0}),Object(d.jsx)("p",{className:"form__error",id:"profile-name-error"}),Object(d.jsx)("input",{className:"form__item form__item_el_bio",id:"profile-bio",type:"text",name:"about",placeholder:"About",minLength:"2",maxLength:"200",value:u,onChange:function(e){m(e.target.value)},required:!0}),Object(d.jsx)("p",{className:"form__error",id:"profile-bio-error"})]})};var N=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current.value=""}),[e.isOpen]),Object(d.jsxs)(x,{name:"avatar",title:"Update Profile Picture",buttonText:e.buttonText,isOpen:e.isOpen,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},onClose:e.onClose,children:[Object(d.jsx)("input",{className:"form__item",id:"avatar-url",type:"url",name:"avatar",ref:t,placeholder:"Link",required:!0}),Object(d.jsx)("p",{className:"form__error",id:"avatar-url-error"})]})};var k=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),o=n[0],c=n[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),r=i[0],u=i[1];return Object(a.useEffect)((function(){c(""),u("")}),[e.isOpen]),Object(d.jsxs)(x,{name:"add",title:"Add Photo",buttonText:e.buttonText,isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:o,link:r})},onClose:e.onClose,children:[Object(d.jsx)("input",{className:"form__item form__item_el_name",id:"item-name",type:"text",name:"name",placeholder:"Description",minLength:"2",maxLength:"30",value:o,onChange:function(e){c(e.target.value)},required:!0}),Object(d.jsx)("p",{className:"form__error",id:"item-name-error"}),Object(d.jsx)("input",{className:"form__item form__item_el_link",id:"item-url",type:"url",name:"link",placeholder:"Link",value:r,onChange:function(e){u(e.target.value)},required:!0}),Object(d.jsx)("p",{className:"form__error",id:"item-url-error"})]})};var C=function(e){return Object(d.jsx)("div",{className:"popup popup_type_image ".concat(e.card&&"popup_opened"),children:Object(d.jsxs)("div",{className:"popup__container popup__container_type_image",children:[Object(d.jsx)("button",{onClick:e.onClose,className:"popup__close-btn",type:"button","aria-label":"Close popup"}),Object(d.jsxs)("figure",{className:"popup__figure",children:[Object(d.jsx)("img",{className:"popup__image",src:"".concat(e.card.link),alt:"".concat(e.card.name)}),Object(d.jsx)("figcaption",{className:"popup__image-caption",children:e.card.name})]})]})})},y=n.p+"static/media/success-icon.1b6082f8.svg",S=n.p+"static/media/fail-icon.df8eddf6.svg";var U=function(e){return Object(d.jsx)("div",{className:"popup ".concat(e.isOpen&&"popup_opened"),children:Object(d.jsxs)("div",{className:"popup__container popup__container_type_message",children:[Object(d.jsx)("img",{className:"popup__icon",src:e.isSuccess?y:S,alt:e.isSuccess?"Success icon":"Error icon"}),Object(d.jsx)("p",{className:"popup__message",children:e.isSuccess?"Your account has been created successfully!":"Sorry, something went wrong. Please try again."}),Object(d.jsx)("button",{onClick:e.onClose,className:"popup__close-btn",type:"button","aria-label":"Close popup"})]})})},w=n(20),L=n(21),T=new(function(){function e(t){Object(w.a)(this,e),this._baseUrl=t.baseUrl,this._token=t.headers.authorization}return Object(L.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._handleResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._handleResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._handleResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this._deleteLike(e):this._setLike(e)}},{key:"_deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._handleResponse)}},{key:"_setLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._handleResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-24",headers:{authorization:"2a6d7634-25aa-4e7e-bcf3-8309525480f9","Content-Type":"application/json"}}),E="https://auth.nomoreparties.co",P=function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))},A=n(23),D=n(24),I=["component"],R=function(e){var t=e.component,n=Object(D.a)(e,I);return Object(d.jsx)(u.b,{children:function(){return n.loggedIn?Object(d.jsx)(t,Object(A.a)({},n)):Object(d.jsx)(u.a,{to:"/sign-in"})}})};var z=function(){return Object(d.jsxs)("div",{className:"not-found",children:[Object(d.jsxs)("h3",{className:"not-found__title",children:[Object(d.jsx)("span",{children:"404"})," - Page not found"]}),Object(d.jsx)("p",{className:"not-found__subtitle",children:"Ooooops"})]})};var q=function(){var e=Object(a.useState)({name:"Irina",about:"offline",avatar:""}),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),i=Object(l.a)(s,2),m=i[0],p=i[1],_=Object(a.useState)(""),y=Object(l.a)(_,2),S=y[0],w=y[1],L=Object(a.useState)(!1),A=Object(l.a)(L,2),D=A[0],I=A[1],q=Object(a.useState)(!1),J=Object(l.a)(q,2),F=J[0],B=J[1],Y=Object(a.useState)(!1),H=Object(l.a)(Y,2),G=H[0],M=H[1],K=Object(a.useState)(!1),Q=Object(l.a)(K,2),V=Q[0],W=Q[1],X=Object(a.useState)(!1),Z=Object(l.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useState)("Edit"),ne=Object(l.a)(te,2),ae=ne[0],oe=ne[1],ce=Object(a.useState)("Update"),se=Object(l.a)(ce,2),ie=se[0],re=se[1],le=Object(a.useState)("Post"),ue=Object(l.a)(le,2),me=ue[0],de=ue[1],je=Object(a.useState)([]),be=Object(l.a)(je,2),pe=be[0],_e=be[1],he=Object(a.useState)(null),fe=Object(l.a)(he,2),Oe=fe[0],ge=fe[1],xe=Object(a.useState)(!1),ve=Object(l.a)(xe,2),Ne=ve[0],ke=ve[1],Ce=Object(u.g)();Object(a.useEffect)((function(){ye()}),[]),Object(a.useEffect)((function(){ke(!0),Promise.all([T.getUserInfo(),T.getCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];c(n),_e(a)})).catch((function(e){console.log("Couldnt get data from the server. ".concat(e))})).finally((function(){ke(!1)}))}),[]);var ye=function(){if(localStorage.getItem("jwt")){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(E,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return P(e)}))}(e).then((function(e){e&&(p(!0),w(e.data.email),Ce.push("/"))})).catch((function(e){console.log("Error: ".concat(e))}))}};function Se(){I(!1),B(!1),M(!1),ge(null),W(!1)}var Ue=o.a.useCallback((function(e){"Escape"===e.key&&Se()}),[]);return Object(a.useEffect)((function(){return(F||G||D||Oe)&&document.addEventListener("keydown",Ue),function(){return document.removeEventListener("keydown",Ue)}}),[Ue,F,D,G,Oe]),Object(d.jsx)(b.Provider,{value:n,children:Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)("div",{className:"page__container",children:[Object(d.jsx)(j,{loggedIn:m,userEmail:S,onSignOut:function(){p(!1),localStorage.removeItem("jwt"),Ce.push("/sign-in")}}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(R,{exact:!0,path:"/",loggedIn:m,component:h,cards:pe,onEditProfile:function(){I(!0)},onAddPlace:function(){B(!0)},onEditAvatar:function(){M(!0)},onCardClick:function(e){ge(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));T.changeLikeCardStatus(e._id,t).then((function(t){_e((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log("".concat(e))}))},onCardDelete:function(e){T.deleteCard(e._id).then((function(){_e(pe.filter((function(t){return t!==e})))})).catch((function(e){console.log("".concat(e))}))},isLoading:Ne}),Object(d.jsx)(u.b,{path:"/sign-up",children:Object(d.jsx)(O,{onRegistration:function(e){(function(e){var t=e.password,n=e.email;return fetch("".concat(E,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:n})}).then((function(e){return P(e)}))})(e).then((function(){ee(!0),W(!0),Ce.push("/sign-in")})).catch((function(e){ee(!1),W(!0),console.log("Unable to register. ".concat(e))}))}})}),Object(d.jsx)(u.b,{path:"/sign-in",children:Object(d.jsx)(f,{onLogin:function(e){(function(e){var t=e.password,n=e.email;return fetch("".concat(E,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:n})}).then((function(e){return P(e)}))})(e).then((function(t){p(!0),w(e.email),localStorage.setItem("jwt",t.token),Ce.push("/")})).catch((function(e){ee(!1),W(!0),console.log("Unable to login. ".concat(e))}))}})}),Object(d.jsx)(u.b,{path:"*",children:Object(d.jsx)(z,{})})]}),m&&Object(d.jsx)(g,{}),Object(d.jsx)(v,{buttonText:ae,isOpen:D,onUpdateUser:function(e){oe("Saving..."),T.setUserInfo(e).then((function(e){c(e)})).then((function(){I(!1)})).catch((function(e){console.log("Unable to update user info. ".concat(e))})).finally((function(){oe("Edit")}))},onClose:Se}),Object(d.jsx)(k,{buttonText:me,isOpen:F,onAddPlace:function(e){de("Uploading..."),T.addNewCard(e).then((function(e){_e([e].concat(Object(r.a)(pe)))})).then((function(){B(!1)})).catch((function(e){console.log("Unable to publish a card. ".concat(e))})).finally((function(){de("Post")}))},onClose:Se}),Object(d.jsx)(N,{buttonText:ie,isOpen:G,onUpdateAvatar:function(e){re("Updading..."),T.setUserAvatar(e).then((function(e){c(e)})).then((function(){M(!1)})).catch((function(e){console.log("Unable to update user avatar. ".concat(e))})).finally((function(){re("Update")}))},onClose:Se}),Object(d.jsx)(x,{name:"confirm",title:"Please confirm",buttonText:"Yes, delete"}),Oe&&Object(d.jsx)(C,{card:Oe,onClose:Se}),Object(d.jsx)(U,{isOpen:V,isSuccess:$,onClose:Se})]})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(i.a,{basename:"/react-mesto-auth",children:Object(d.jsx)(q,{})})}),document.getElementById("root")),J()}},[[36,1,2]]]);
//# sourceMappingURL=main.eda0992e.chunk.js.map