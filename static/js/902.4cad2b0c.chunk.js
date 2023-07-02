"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[902],{902:function(e,n,o){o.r(n),o.d(n,{default:function(){return P}});var r,a,t,i,s=o(9439),l=o(2791),c=o(168),d=o(8733),u=o(1087),p=d.ZP.div(r||(r=(0,c.Z)(["\n  padding-top: 10%;\n  display: flex;\n  padding-left: 20%;\n"]))),m=(0,d.ZP)(u.rU)(a||(a=(0,c.Z)(["\n  font-size: 18px;\n  margin: 0 4px;\n  color: rgba(138, 59, 202, 0.9);\n  font-weight: 500;\n"]))),h=d.ZP.p(t||(t=(0,c.Z)(["\n  margin-top: 15px;\n  font-size: 18px;\n  line-height: 1.11;\n  color: #39293dba;\n  font-weight: 500;\n  text-align: center;\n"]))),g=d.ZP.h2(i||(i=(0,c.Z)(["\n  text-align: center;\n  margin-bottom: 20px;\n  color: #a031b8bb;\n  font-size: 30px;\n"]))),f=o(6151),Z=o(962),v=o(7889),x=o(9434),b=o(9840),y=o(9009),w=o(3400),j=o(3710),z=o(9569),C=o(184),P=function(){var e=Z.Z.useForm(),n=(0,s.Z)(e,1)[0],o=(0,x.I0)(),r=(0,x.v9)((function(e){return e.auth})),a=r.isLoading,t=r.error,i=(0,l.useState)(!1),c=(0,s.Z)(i,2),d=c[0],u=c[1],P=(0,l.useState)(!1),R=(0,s.Z)(P,2),k=R[0],I=R[1],S=(0,l.useState)(!1),F=(0,s.Z)(S,2),M=F[0],q=F[1],O=function(){var e=n.getFieldsValue(),o=Object.values(e).every(Boolean);u(o)};return(0,C.jsx)("section",{children:(0,C.jsx)(p,{children:(0,C.jsxs)(Z.Z,{form:n,name:"register",onFinish:function(e){var r=e.name,i=e.email,s=e.password;s===e.confirm&&(o((0,v.z2)({name:r,email:i,password:s})),!a&&!t&&n.resetFields())},initialValues:{name:"",email:"",password:"",confirm:""},style:{width:"500px",display:"flex",flexDirection:"column",gap:"15px"},children:[(0,C.jsx)(g,{children:"Registration"}),(0,C.jsx)(Z.Z.Item,{name:"name",rules:[{required:!0,message:"Please input your name",whitespace:!0}],children:(0,C.jsx)(b.Z,{fullWidth:!0,label:"Name",color:"secondary",onChange:O})}),(0,C.jsx)(Z.Z.Item,{name:"email",rules:[{type:"email",message:"The input is not a valid email"},{required:!0,message:"Please input your email"}],children:(0,C.jsx)(b.Z,{fullWidth:!0,label:"Email",color:"secondary",onChange:O})}),(0,C.jsx)(Z.Z.Item,{name:"password",rules:[{required:!0,message:"Please input your password"},{pattern:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/,message:"Password must contain at least one number, one uppercase and lowercase letter, and be at least 7 characters long"}],hasFeedback:!0,children:(0,C.jsx)(b.Z,{fullWidth:!0,label:"Password",color:"secondary",type:k?"text":"password",onChange:O,InputProps:{endAdornment:(0,C.jsx)(y.Z,{position:"end",children:(0,C.jsx)(w.Z,{onClick:function(){I((function(e){return!e}))},edge:"end",children:k?(0,C.jsx)(j.Z,{}):(0,C.jsx)(z.Z,{})})})}})}),(0,C.jsx)(Z.Z.Item,{name:"confirm",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password"},function(e){var n=e.getFieldValue;return{validator:function(e,o){return o&&n("password")!==o?Promise.reject(new Error("The passwords do not match")):Promise.resolve()}}}],children:(0,C.jsx)(b.Z,{fullWidth:!0,label:"Confirm Password",color:"secondary",type:M?"text":"password",onChange:O,InputProps:{endAdornment:(0,C.jsx)(y.Z,{position:"end",children:(0,C.jsx)(w.Z,{onClick:function(){return q((function(e){return!e}))},edge:"end",children:M?(0,C.jsx)(j.Z,{}):(0,C.jsx)(z.Z,{})})})}})}),(0,C.jsxs)(Z.Z.Item,{children:[(0,C.jsx)(f.Z,{variant:"contained",type:"submit",disabled:!d,color:"secondary",fullWidth:!0,children:"Register"}),(0,C.jsxs)(h,{children:["or ",(0,C.jsx)(m,{to:"/login",children:"log in"})," if you already have an account"]})]})]})})})}},3710:function(e,n,o){var r=o(9201),a=o(184);n.Z=(0,r.Z)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},9569:function(e,n,o){var r=o(9201),a=o(184);n.Z=(0,r.Z)((0,a.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},3400:function(e,n,o){o.d(n,{Z:function(){return y}});var r=o(4942),a=o(3366),t=o(7462),i=o(2791),s=o(8182),l=o(4419),c=o(2065),d=o(724),u=o(1046),p=o(3701),m=o(4036),h=o(5878),g=o(1217);function f(e){return(0,g.Z)("MuiIconButton",e)}var Z=(0,h.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),v=o(184),x=["edge","children","className","color","disabled","disableFocusRipple","size"],b=(0,d.ZP)(p.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,"default"!==o.color&&n["color".concat((0,m.Z)(o.color))],o.edge&&n["edge".concat((0,m.Z)(o.edge))],n["size".concat((0,m.Z)(o.size))]]}})((function(e){var n=e.theme,o=e.ownerState;return(0,t.Z)({textAlign:"center",flex:"0 0 auto",fontSize:n.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(n.vars||n).palette.action.active,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.action.activeChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})}),(function(e){var n,o=e.theme,a=e.ownerState,i=null==(n=(o.vars||o).palette)?void 0:n[a.color];return(0,t.Z)({},"inherit"===a.color&&{color:"inherit"},"inherit"!==a.color&&"default"!==a.color&&(0,t.Z)({color:null==i?void 0:i.main},!a.disableRipple&&{"&:hover":(0,t.Z)({},i&&{backgroundColor:o.vars?"rgba(".concat(i.mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(i.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===a.size&&{padding:5,fontSize:o.typography.pxToRem(18)},"large"===a.size&&{padding:12,fontSize:o.typography.pxToRem(28)},(0,r.Z)({},"&.".concat(Z.disabled),{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}))})),y=i.forwardRef((function(e,n){var o=(0,u.Z)({props:e,name:"MuiIconButton"}),r=o.edge,i=void 0!==r&&r,c=o.children,d=o.className,p=o.color,h=void 0===p?"default":p,g=o.disabled,Z=void 0!==g&&g,y=o.disableFocusRipple,w=void 0!==y&&y,j=o.size,z=void 0===j?"medium":j,C=(0,a.Z)(o,x),P=(0,t.Z)({},o,{edge:i,color:h,disabled:Z,disableFocusRipple:w,size:z}),R=function(e){var n=e.classes,o=e.disabled,r=e.color,a=e.edge,t=e.size,i={root:["root",o&&"disabled","default"!==r&&"color".concat((0,m.Z)(r)),a&&"edge".concat((0,m.Z)(a)),"size".concat((0,m.Z)(t))]};return(0,l.Z)(i,f,n)}(P);return(0,v.jsx)(b,(0,t.Z)({className:(0,s.Z)(R.root,d),centerRipple:!0,focusRipple:!w,disabled:Z,ref:n,ownerState:P},C,{children:c}))}))}}]);
//# sourceMappingURL=902.4cad2b0c.chunk.js.map