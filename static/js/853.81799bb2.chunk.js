(self.webpackChunkgoit_wallet_app_03_frontend=self.webpackChunkgoit_wallet_app_03_frontend||[]).push([[853],{9418:function(n,e,i){"use strict";i.d(e,{X:function(){return s}});var t,r=i(168),a=i(6487),o=(i(2791),i(184)),s=(0,a.default)((function(){return(0,o.jsx)("h1",{children:"Heading"})}))(t||(t=(0,r.Z)(["\n  display: none;\n  color: var(--font-color-dark);\n  font-size: 30px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n\n  @media (min-width: ",") {\n    display: inline-block;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet}))},9059:function(n,e,i){"use strict";i.d(e,{W:function(){return w}});var t,r,a,o=i(168),s=i(1413),d=i(9439),l=i(4925),c=i(6487),u=i(4030),m=i(9138),p=i(5705),h=c.default.div(t||(t=(0,o.Z)(["\n  display: inline-block;\n  position: relative;\n  margin-top: 30px;\n\n  "," {\n    padding-left: 54.5px;\n  }\n"])),u.Q),f=c.default.div(r||(r=(0,o.Z)(["\n  position: absolute;\n  top: 30px;\n  left: 0;\n  font-size: 13px;\n  color: var(--color-brand-accent);\n  margin-bottom: 10px;\n"]))),x=i(184),g=["icon"],w=(0,c.default)((function(n){var e=n.icon,i=(0,l.Z)(n,g),t=(0,p.U$)(i),r=(0,d.Z)(t,2),a=r[0],o=r[1];return(0,x.jsxs)(h,{children:[(0,x.jsx)(u.Q,(0,s.Z)((0,s.Z)({},a),i)),(0,x.jsx)(m.J,{icon:e}),o.touched&&o.error?(0,x.jsx)(f,{className:"error",children:o.error}):null]})}))(a||(a=(0,o.Z)([""])))},8853:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return M}});var t,r,a,o,s,d=i(9439),l=i(2791),c=i(7297),u=i(9059),m=i(7781),p=i(5705),h=i(8007),f=i(1291),x=i(168),g=i(6487),w=g.default.progress(t||(t=(0,x.Z)(["\n  @media screen and (min-height: 767px) {\n    width: 100%;\n    border: none;\n  }\n  width: 410px;\n  border-radius: 20px;\n  min-height: 4px;\n  height: 4px;\n\n  &::-webkit-progress-bar {\n    background-color: var(--background-progress-bar);\n    border-radius: 7px;\n  }\n  &::-webkit-progress-value {\n    background-color: var(--color-brand-secondary);\n    border-radius: 7px;\n    box-shadow: 0px 1px 6px 0.1px var(--color-brand-secondary);\n  }\n  &::-moz-progress-bar {\n    background-color: var(--background-progress-bar);\n    border-radius: 7px;\n  }\n\n  &::-moz-progress-value {\n    background-color: var(--color-brand-secondary);\n    border-radius: 7px;\n    box-shadow: 0px 1px 6px 0.1px var(--color-brand-secondary);\n  }\n\n  @media (max-width: ",") {\n    width: 280px;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),b=i(184),v=function(n){var e,i=(0,f.passwordStrength)(n.value,[{id:0,value:"Tooweak",minDiversity:0,minLength:0},{id:1,value:"Weak",minDiversity:2,minLength:6},{id:2,value:"Medium",minDiversity:3,minLength:8},{id:3,value:"Strong",minDiversity:4,minLength:12}]).value;return e="Tooweak"===i?25:"Weak"===i?50:"Medium"===i?75:100,(0,b.jsx)(w,{value:e,max:"100"})},y=i(5690),k=i(7689),j=i(9434),_=i(1868),Z=(0,g.default)(p.l0)(r||(r=(0,x.Z)(["\n  height: 100vh;\n  min-width: 320px;\n  width: 100%;\n  @media screen and (min-height: 767px) {\n    padding: 107px 20px 36px 20px;\n  }\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: var(--background-light);\n  border-radius: 12px;\n\n  & > :first-child {\n    margin-bottom: 30px;\n  }\n\n  & > :nth-child(6) {\n    margin-bottom: 40px;\n  }\n\n  & > :nth-child(4) .error {\n    top: 47px;\n  }\n\n  input:-webkit-autofill,\n  input:-webkit-autofill:hover,\n  input:-webkit-autofill:focus {\n    -webkit-box-shadow: 0 0 0px 40rem #ffff inset;\n    box-shadow: 0 0 0px 40rem #ffff inset;\n  }\n\n  //tablet+desktop\n  @media (min-width: ",") {\n    @media screen and (min-height: 767px) {\n      width: 533px;\n      padding: 40px 58.5px 62px 65px;\n      height: auto;\n    }\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),L=i(9202),P=function(){var n=(0,k.s0)(),e=(0,j.I0)(),i=(0,j.v9)((function(n){return n.session.isAuth}));(0,l.useEffect)((function(){i&&n("/home")}),[i,n]);return(0,b.jsx)(L.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.6,ease:[.08,.82,.17,1]},children:(0,b.jsx)(p.J9,{initialValues:{email:"",password:"",confirmPassword:"",firstName:""},validationSchema:(0,h.Ry)({email:(0,h.Z_)().email("Invalid email address.").required("Please provide your email."),password:(0,h.Z_)().required("No password provided.").min(6,"Password is too short - should be 6 chars minimum.").max(12,"Password is too long - should be 12 chars maximum.").matches(/[0-9]/,(0,y.AL)("digit")).matches(/[a-z]/,(0,y.AL)("lowercase")).matches(/[A-Z]/,(0,y.AL)("uppercase")).matches(/[^\w]/,(0,y.AL)("special")),confirmPassword:(0,h.Z_)().required("Please re-type your password.").oneOf([(0,h.iH)("password")],"Passwords do not match."),firstName:(0,h.Z_)().required("Please provide your name").max(30,"First name is too long - should be 30 characters or less.")}),onSubmit:function(n,i){var t=i.setSubmitting,r=i.resetForm;!function(n){e((0,_.z2)({name:n.firstName,email:n.email,password:n.password}))}(n),r(),t(!1)},validateOnMount:!0,children:function(e){var i=e.values,t=e.handleBlur;return(0,b.jsxs)(Z,{autoComplete:"off",children:[(0,b.jsx)(m.Z,{}),(0,b.jsx)(u.W,{icon:"icon__baseline-email",placeholder:"E-mail",title:"Plase fill out your e-mail",name:"email",type:"email",autoComplete:"off",onKeyUp:t}),(0,b.jsx)(u.W,{icon:"icon__baseline-lock",placeholder:"Password",title:"The password must have at least 6 and max 12 characters",name:"password",type:"password",autoComplete:"off",onKeyUp:t}),(0,b.jsx)(u.W,{icon:"icon__baseline-lock",placeholder:"Confirm password",title:"The confirm password must match your password",name:"confirmPassword",type:"password",autoComplete:"off",onKeyUp:t}),(0,b.jsx)(v,{value:i.password}),(0,b.jsx)(u.W,{icon:"icon__baseline-account",placeholder:"First name",title:"Plase fill out your e-mail",name:"firstName",type:"text",autoComplete:"off",onKeyUp:t}),(0,b.jsx)(c.KM,{type:"submit",children:"REGISTER"}),(0,b.jsx)(c.kq,{type:"button",onClick:function(){return n("/login")},children:"LOG IN"})]})}})})},E=i(9138),z=i(9418),D=g.default.div(a||(a=(0,x.Z)(["\n  @media screen and (min-height: 767px) {\n    @media (max-width: ",") {\n      form {\n        padding-bottom: 107px;\n      }\n    }\n\n    @media (min-width: ",") {\n      max-width: 538px;\n      display: flex;\n      flex-direction: column;\n      margin: 0 auto;\n    }\n\n    @media (min-width: ",") {\n      width: 100vw;\n      max-width: 100vw;\n      height: 100vh;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      margin: 0;\n    }\n\n    "," {\n      margin: 0 40px 0 0;\n\n      @media (min-width: ",") {\n        margin: 28px 0 0 0;\n      }\n    }\n  }\n"])),(function(n){return n.theme.breakpoints.tabletForMaxMedia}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.desktop}),z.X,(function(n){return n.theme.breakpoints.desktop})),W=(0,g.default)(L.E.div)(o||(o=(0,x.Z)(["\n  display: none;\n  @media screen and (min-height: 767px) {\n    @media (min-width: ",") {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      margin-top: 60px;\n      margin-bottom: 50px;\n\n      svg {\n        width: 260px;\n        height: 250px;\n      }\n    }\n\n    @media (min-width: ",") {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      margin: 0;\n      padding-right: 38px;\n\n      svg {\n        width: 435px;\n        height: 420px;\n      }\n    }\n  }\n"])),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.desktop})),C=(0,g.default)(L.E.div)(s||(s=(0,x.Z)(["\n  @media screen and (min-height: 767px) {\n    @media (min-width: ",") {\n      display: flex;\n      align-items: center;\n      position: relative;\n    }\n\n    &::after {\n      @media (min-width: ",") {\n        content: '';\n        position: fixed;\n        z-index: -1;\n        width: 100vw;\n        height: 100vh;\n        backdrop-filter: blur(10px);\n      }\n    }\n\n    form {\n      @media (max-width: ",") {\n        border-radius: 0px;\n      }\n\n      @media (min-width: ",") {\n        margin-left: 107px;\n      }\n    }\n  }\n"])),(function(n){return n.theme.breakpoints.desktop}),(function(n){return n.theme.breakpoints.desktop}),(function(n){return n.theme.breakpoints.tabletForMaxMedia}),(function(n){return n.theme.breakpoints.desktop})),M=function(){var n=(0,l.useState)(window.innerWidth>767),e=(0,d.Z)(n,2),i=e[0],t=e[1];return(0,l.useEffect)((function(){var n=function(){t(window.innerWidth>1279)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[i]),(0,b.jsxs)(D,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.6,ease:[.08,.82,.17,1]},children:[(0,b.jsxs)(W,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.6,ease:[.08,.82,.17,1]},children:[i?(0,b.jsx)(E.J,{className:"loginIcon",icon:"icon__big-logo-woman1"}):(0,b.jsx)(E.J,{className:"loginIcon",icon:"icon__big-logo-woman2"}),(0,b.jsx)(z.X,{as:"h1",children:"Finance App"})]}),(0,b.jsx)(C,{children:(0,b.jsx)(P,{})})]})}},1291:function(n,e,i){var t,r;t=function(){"use strict";var e=[{id:0,value:"Too weak",minDiversity:0,minLength:0},{id:1,value:"Weak",minDiversity:2,minLength:6},{id:2,value:"Medium",minDiversity:4,minLength:8},{id:3,value:"Strong",minDiversity:4,minLength:10}],i=function(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"!\"#$%&'()*+,-./:;<=>?@[\\\\\\]^_`{|}~",r=n||"";i[0].minDiversity=0,i[0].minLength=0;var a=[{regex:"[a-z]",message:"lowercase"},{regex:"[A-Z]",message:"uppercase"},{regex:"[0-9]",message:"number"}];t&&a.push({regex:"[".concat(t,"]"),message:"symbol"});var o={};o.contains=a.filter((function(n){return new RegExp("".concat(n.regex)).test(r)})).map((function(n){return n.message})),o.length=r.length;var s=i.filter((function(n){return o.contains.length>=n.minDiversity})).filter((function(n){return o.length>=n.minLength})).sort((function(n,e){return e.id-n.id})).map((function(n){return{id:n.id,value:n.value}}));return Object.assign(o,s[0]),o};n.exports={passwordStrength:i,defaultOptions:e}},void 0===(r="function"===typeof t?t.call(e,i,e,n):t)||(n.exports=r)}}]);
//# sourceMappingURL=853.81799bb2.chunk.js.map