"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[489],{3489:function(e,t,n){n.r(t),n.d(t,{default:function(){return qe}});var a=n(9439),r=n(2791),o=n(9434),i=n(2946),s=n(3634),l=n(1413),c=n(1169),u=n(6298),d=n(1170);function f(e){var t=(0,d.uP)().theme,n=(0,c.OX)();return(0,r.useMemo)((function(){return(0,u.Cj)(t.direction,(0,l.Z)((0,l.Z)({},n),e))}),[e,t.direction,n])}var p=n(5350),m=n(4925),v=n(5113),h=n(184),g=function(e){return(0,h.jsx)(v.m.div,(0,l.Z)((0,l.Z)({className:"chakra-stack__item"},e),{},{__css:(0,l.Z)({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))};g.displayName="StackItem";var y=n(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);function x(e){return r.Children.toArray(e).filter((function(e){return(0,r.isValidElement)(e)}))}var b=n(5597),Z=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],I=(0,b.G)((function(e,t){var n=e.isInline,a=e.direction,o=e.align,i=e.justify,s=e.spacing,c=void 0===s?"0.5rem":s,u=e.wrap,d=e.children,f=e.divider,p=e.className,b=e.shouldWrapChildren,I=(0,m.Z)(e,Z),E=n?"row":null!=a?a:"column",T=(0,r.useMemo)((function(){return function(e){var t,n,a=e.spacing,r=e.direction,o={column:{my:a,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:a,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:a,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:a,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(t=r,n=function(e){return o[e]},Array.isArray(t)?t.map((function(e){return null===e?null:n(e)})):(0,y.Kn)(t)?Object.keys(t).reduce((function(e,a){return e[a]=n(t[a]),e}),{}):null!=t?n(t):null)}}({spacing:c,direction:E})}),[c,E]),C=!!f,_=!b&&!C,N=(0,r.useMemo)((function(){var e=x(d);return _?e:e.map((function(t,n){var a="undefined"!==typeof t.key?t.key:n,o=n+1===e.length,i=b?(0,h.jsx)(g,{children:t},a):t;if(!C)return i;var s=(0,r.cloneElement)(f,{__css:T}),l=o?null:s;return(0,h.jsxs)(r.Fragment,{children:[i,l]},a)}))}),[f,T,C,_,b,d]),j=(0,y.cx)("chakra-stack",p);return(0,h.jsx)(v.m.div,(0,l.Z)((0,l.Z)({ref:t,display:"flex",alignItems:o,justifyContent:i,flexDirection:E,flexWrap:u,gap:C?void 0:c,className:j},I),{},{children:N}))}));I.displayName="Stack";var E=n(7236),T=n(9055),C=n(2577),_=n(6009),N=n(4134),j=(0,N.I)({d:"M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z",displayName:"AddIcon"}),R=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],l=t[1],c=(0,r.useState)(""),u=(0,a.Z)(c,2),d=u[0],m=u[1],v=(0,o.I0)(),g=(0,o.v9)(i.Af),y=(0,_.a)().isLoading,x=f();return(0,h.jsxs)(h.Fragment,{children:[" ",(0,h.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),(null===g||void 0===g?void 0:g.map((function(e){return e.name}))).some((function(e){return e.toLowerCase()===n.toLowerCase()})))x({title:"".concat(n," is already in contacts!"),position:"top",status:"error",isClosable:!0});else{var t={name:n,number:d};v((0,s.uK)(t)),x({title:"".concat(n," add to your contacts."),position:"top",status:"success",isClosable:!0}),l(""),m("")}},autoComplete:"off",children:(0,h.jsx)(p.NI,{children:(0,h.jsxs)(I,{spacing:"12px",children:[(0,h.jsx)("label",{children:(0,h.jsx)(E.I,{variant:"filled",placeholder:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:function(e){return l(e.target.value)}})}),(0,h.jsx)("label",{children:(0,h.jsx)(E.I,{variant:"filled",placeholder:"Number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:function(e){return m(e.target.value)}})}),(0,h.jsx)(T.z,{type:"submit",size:"md",_hover:{bg:"#5cb85c",color:"white"},children:y?(0,h.jsx)(C.$,{}):(0,h.jsx)(j,{})})]})})})]})},k=n(7840),L=(0,N.I)({d:"M23.414,20.591l-4.645-4.645a10.256,10.256,0,1,0-2.828,2.829l4.645,4.644a2.025,2.025,0,0,0,2.828,0A2,2,0,0,0,23.414,20.591ZM10.25,3.005A7.25,7.25,0,1,1,3,10.255,7.258,7.258,0,0,1,10.25,3.005Z",displayName:"Search2Icon"}),O=n(2481),w=n(2996),A=["className","children","requiredIndicator","optionalIndicator"],P=(0,b.G)((function(e,t){var n,a=(0,O.mq)("FormLabel",e),r=(0,w.Lr)(e),o=(r.className,r.children),i=r.requiredIndicator,s=void 0===i?(0,h.jsx)(z,{}):i,c=r.optionalIndicator,u=void 0===c?null:c,d=(0,m.Z)(r,A),f=(0,p.NJ)(),g=null!=(n=null==f?void 0:f.getLabelProps(d,t))?n:(0,l.Z)({ref:t},d);return(0,h.jsxs)(v.m.label,(0,l.Z)((0,l.Z)({},g),{},{className:(0,y.cx)("chakra-form__label",r.className),__css:(0,l.Z)({display:"block",textAlign:"start"},a),children:[o,(null==f?void 0:f.isRequired)?s:u]}))}));P.displayName="FormLabel";var z=(0,b.G)((function(e,t){var n=(0,p.NJ)(),a=(0,p.e)();if(!(null==n?void 0:n.isRequired))return null;var r=(0,y.cx)("chakra-form__required-indicator",e.className);return(0,h.jsx)(v.m.span,(0,l.Z)((0,l.Z)({},null==n?void 0:n.getRequiredIndicatorProps(e,t)),{},{__css:a.requiredIndicator,className:r}))}));z.displayName="RequiredIndicator";var B=n(9886),M=n(2796),S=["children","className"],F=(0,B.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),q=(0,a.Z)(F,2),D=q[0],H=q[1],G=(0,b.G)((function(e,t){var n=(0,O.jC)("Input",e),a=(0,w.Lr)(e),o=a.children,i=a.className,s=(0,m.Z)(a,S),c=(0,y.cx)("chakra-input__group",i),u={},d=x(o),f=n.field;d.forEach((function(e){var t,a;n&&(f&&"InputLeftElement"===e.type.id&&(u.paddingStart=null!=(t=f.height)?t:f.h),f&&"InputRightElement"===e.type.id&&(u.paddingEnd=null!=(a=f.height)?a:f.h),"InputRightAddon"===e.type.id&&(u.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(u.borderStartRadius=0))}));var p=d.map((function(t){var n,a,o=(0,M.o)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(a=t.props)?void 0:a.variant)||e.variant});return"Input"!==t.type.id?(0,r.cloneElement)(t,o):(0,r.cloneElement)(t,Object.assign(o,u,t.props))}));return(0,h.jsx)(v.m.div,(0,l.Z)((0,l.Z)({className:c,ref:t,__css:(0,l.Z)({width:"100%",display:"flex",position:"relative",isolation:"isolate"},n.group),"data-group":!0},s),{},{children:(0,h.jsx)(D,{value:n,children:p})}))}));G.displayName="InputGroup";var W=n(4942),Q=["placement"],V=["className"],J=["className"],K=(0,v.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),X=(0,b.G)((function(e,t){var n,a,r,o=e.placement,i=void 0===o?"left":o,s=(0,m.Z)(e,Q),c=H(),u=c.field,d="left"===i?"insetStart":"insetEnd",f=(0,l.Z)((n={},(0,W.Z)(n,d,"0"),(0,W.Z)(n,"width",null!=(a=null==u?void 0:u.height)?a:null==u?void 0:u.h),(0,W.Z)(n,"height",null!=(r=null==u?void 0:u.height)?r:null==u?void 0:u.h),(0,W.Z)(n,"fontSize",null==u?void 0:u.fontSize),n),c.element);return(0,h.jsx)(K,(0,l.Z)({ref:t,__css:f},s))}));X.id="InputElement",X.displayName="InputElement";var U=(0,b.G)((function(e,t){var n=e.className,a=(0,m.Z)(e,V),r=(0,y.cx)("chakra-input__left-element",n);return(0,h.jsx)(X,(0,l.Z)({ref:t,placement:"left",className:r},a))}));U.id="InputLeftElement",U.displayName="InputLeftElement";var Y=(0,b.G)((function(e,t){var n=e.className,a=(0,m.Z)(e,J),r=(0,y.cx)("chakra-input__right-element",n);return(0,h.jsx)(X,(0,l.Z)({ref:t,placement:"right",className:r},a))}));Y.id="InputRightElement",Y.displayName="InputRightElement";var $=function(){var e=(0,o.I0)(),t=(0,o.v9)(i.AD);return(0,h.jsxs)(p.NI,{children:[" ",(0,h.jsxs)(P,{width:"100%",children:[(0,h.jsx)(p.Q6,{textAlign:"center",children:"Search for Name"}),(0,h.jsxs)(G,{mt:"10px",children:[(0,h.jsx)(U,{pointerEvents:"none",children:(0,h.jsx)(L,{})}),(0,h.jsx)(E.I,{variant:"filled",type:"text",placeholder:"Name for search",name:"filter",value:t,onChange:function(t){return e((0,k.W)(t.target.value))},autoComplete:"off"})]})]})]})},ee=(0,N.I)({displayName:"DeleteIcon",path:(0,h.jsx)("g",{fill:"currentColor",children:(0,h.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})}),te=n(824),ne=n(6582),ae=function(e){var t=e.id,n=e.name,a=e.number,r=(0,_.a)().isLoading,i=(0,o.I0)(),l=f();return(0,h.jsx)("li",{children:(0,h.jsx)(te.xu,{borderBottom:"1px",borderColor:"gray.500",bg:"#ffffff1a",mb:"10px",_hover:{background:"#ffffff33"},borderRadius:"4px",pl:"15px",children:(0,h.jsxs)(ne.k,{align:"center",justify:"space-between",gap:"20px",children:[(0,h.jsxs)(ne.k,{align:"center",gap:"15px",children:[(0,h.jsx)("span",{children:n}),(0,h.jsx)("span",{children:a})]}),(0,h.jsx)(T.z,{p:"1px",type:"button",disabled:r,onClick:function(){i((0,s.GK)(t)),l({title:"".concat(n," contact has been removed."),position:"top",status:"info",isClosable:!0})},_hover:{bg:"orangered",color:"white"},children:(0,h.jsx)(ee,{})})]})})})},re=n(3433);function oe(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=oe(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}var ie=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=oe(e))&&(a&&(a+=" "),a+=t);return a},se=["theme","type"],le=["delay","staleId"],ce=function(e){return"number"==typeof e&&!isNaN(e)},ue=function(e){return"string"==typeof e},de=function(e){return"function"==typeof e},fe=function(e){return ue(e)||de(e)?e:null},pe=function(e){return(0,r.isValidElement)(e)||ue(e)||de(e)||ce(e)};function me(e){var t=e.enter,n=e.exit,a=e.appendPosition,o=void 0!==a&&a,i=e.collapse,s=void 0===i||i,l=e.collapseDuration,c=void 0===l?300:l;return function(e){var a=e.children,i=e.position,l=e.preventExitTransition,u=e.done,d=e.nodeRef,f=e.isIn,p=o?"".concat(t,"--").concat(i):t,m=o?"".concat(n,"--").concat(i):n,v=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var e,t=d.current,n=p.split(" "),a=function e(a){var r;a.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===v.current&&"animationcancel"!==a.type&&(r=t.classList).remove.apply(r,(0,re.Z)(n)))};(e=t.classList).add.apply(e,(0,re.Z)(n)),t.addEventListener("animationend",a),t.addEventListener("animationcancel",a)}),[]),(0,r.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var a=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=a+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,u,c):u()};f||(l?t():(v.current=1,e.className+=" ".concat(m),e.addEventListener("animationend",t)))}),[f]),r.createElement(r.Fragment,null,a)}}function ve(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var he={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(a){var r=setTimeout((function(){a.apply(void 0,(0,re.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},ge=function(e){var t=e.theme,n=e.type,a=(0,m.Z)(e,se);return r.createElement("svg",(0,l.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},a))},ye={info:function(e){return r.createElement(ge,(0,l.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(ge,(0,l.Z)({},e),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(ge,(0,l.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(ge,(0,l.Z)({},e),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function xe(e){var t=(0,r.useReducer)((function(e){return e+1}),0),n=(0,a.Z)(t,2)[1],o=(0,r.useState)([]),i=(0,a.Z)(o,2),s=i[0],c=i[1],u=(0,r.useRef)(null),d=(0,r.useRef)(new Map).current,f=function(e){return-1!==s.indexOf(e)},p=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:f,getToast:function(e){return d.get(e)}}).current;function v(e){var t=e.containerId;!p.props.limit||t&&p.containerId!==t||(p.count-=p.queue.length,p.queue=[])}function h(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function g(){var e=p.queue.shift();x(e.toastContent,e.toastProps,e.staleId)}function y(e,t){var o=t.delay,i=t.staleId,s=(0,m.Z)(t,le);if(pe(e)&&!function(e){return!u.current||p.props.enableMultiContainer&&e.containerId!==p.props.containerId||d.has(e.toastId)&&null==e.updateId}(s)){var c=s.toastId,f=s.updateId,v=s.data,y=p.props,b=function(){return h(c)},Z=null==f;Z&&p.count++;var I,E,T=(0,l.Z)((0,l.Z)((0,l.Z)({},y),{},{style:y.toastStyle,key:p.toastKey++},Object.fromEntries(Object.entries(s).filter((function(e){var t=(0,a.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:c,updateId:f,data:v,closeToast:b,isIn:!1,className:fe(s.className||y.toastClassName),bodyClassName:fe(s.bodyClassName||y.bodyClassName),progressClassName:fe(s.progressClassName||y.progressClassName),autoClose:!s.isLoading&&(I=s.autoClose,E=y.autoClose,!1===I||ce(I)&&I>0?I:E),deleteToast:function(){var e=ve(d.get(c),"removed");d.delete(c),he.emit(4,e);var t=p.queue.length;if(p.count=null==c?p.count-p.displayedToast:p.count-1,p.count<0&&(p.count=0),t>0){var a=null==c?p.props.limit:1;if(1===t||1===a)p.displayedToast++,g();else{var r=a>t?t:a;p.displayedToast=r;for(var o=0;o<r;o++)g()}}else n()}});T.iconOut=function(e){var t=e.theme,n=e.type,a=e.isLoading,o=e.icon,i=null,s={theme:t,type:n};return!1===o||(de(o)?i=o(s):(0,r.isValidElement)(o)?i=(0,r.cloneElement)(o,s):ue(o)||ce(o)?i=o:a?i=ye.spinner():function(e){return e in ye}(n)&&(i=ye[n](s))),i}(T),de(s.onOpen)&&(T.onOpen=s.onOpen),de(s.onClose)&&(T.onClose=s.onClose),T.closeButton=y.closeButton,!1===s.closeButton||pe(s.closeButton)?T.closeButton=s.closeButton:!0===s.closeButton&&(T.closeButton=!pe(y.closeButton)||y.closeButton);var C=e;(0,r.isValidElement)(e)&&!ue(e.type)?C=(0,r.cloneElement)(e,{closeToast:b,toastProps:T,data:v}):de(e)&&(C=e({closeToast:b,toastProps:T,data:v})),y.limit&&y.limit>0&&p.count>y.limit&&Z?p.queue.push({toastContent:C,toastProps:T,staleId:i}):ce(o)?setTimeout((function(){x(C,T,i)}),o):x(C,T,i)}}function x(e,t,n){var a=t.toastId;n&&d.delete(n);var r={content:e,props:t};d.set(a,r),c((function(e){return[].concat((0,re.Z)(e),[a]).filter((function(e){return e!==n}))})),he.emit(4,ve(r,null==r.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return p.containerId=e.containerId,he.cancelEmit(3).on(0,y).on(1,(function(e){return u.current&&h(e)})).on(5,v).emit(2,p),function(){d.clear(),he.emit(3,p)}}),[]),(0,r.useEffect)((function(){p.props=e,p.isToastActive=f,p.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,a=Array.from(d.values());return e.newestOnTop&&a.reverse(),a.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:f}}function be(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Ze(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Ie(e){var t=(0,r.useState)(!1),n=(0,a.Z)(t,2),o=n[0],i=n[1],s=(0,r.useState)(!1),l=(0,a.Z)(s,2),c=l[0],u=l[1],d=(0,r.useRef)(null),f=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,r.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function x(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",E),document.addEventListener("mouseup",T),document.addEventListener("touchmove",E),document.addEventListener("touchend",T);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=be(t.nativeEvent),f.y=Ze(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(f.boundingRect){var n=f.boundingRect,a=n.top,r=n.bottom,o=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=o&&f.x<=i&&f.y>=a&&f.y<=r?I():Z()}}function Z(){i(!0)}function I(){i(!1)}function E(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&I(),f.x=be(t),f.y=Ze(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function T(){document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",T);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,r.useEffect)((function(){p.current=e})),(0,r.useEffect)((function(){return d.current&&d.current.addEventListener("d",Z,{once:!0}),de(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;de(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}}),[]),(0,r.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||I(),window.addEventListener("focus",Z),window.addEventListener("blur",I)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",Z),window.removeEventListener("blur",I))}}),[e.pauseOnFocusLoss]);var C={onMouseDown:x,onTouchStart:x,onMouseUp:b,onTouchEnd:b};return m&&v&&(C.onMouseEnter=I,C.onMouseLeave=Z),y&&(C.onClick=function(e){g&&g(e),f.canCloseOnClick&&h()}),{playToast:Z,pauseToast:I,isRunning:o,preventExitTransition:c,toastRef:d,eventHandlers:C}}function Ee(e){var t=e.closeToast,n=e.theme,a=e.ariaLabel,o=void 0===a?"close":a;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Te(e){var t=e.delay,n=e.isRunning,a=e.closeToast,o=e.type,i=void 0===o?"default":o,s=e.hide,c=e.className,u=e.style,d=e.controlledProgress,f=e.progress,p=e.rtl,m=e.isIn,v=e.theme,h=s||d&&0===f,g=(0,l.Z)((0,l.Z)({},u),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:h?0:1});d&&(g.transform="scaleX(".concat(f,")"));var y=ie("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(v),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":p}),x=de(c)?c({rtl:p,type:i,defaultClassName:y}):ie(y,c);return r.createElement("div",(0,W.Z)({role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:x,style:g},d&&f>=1?"onTransitionEnd":"onAnimationEnd",d&&f<1?null:function(){m&&a()}))}var Ce=function(e){var t=Ie(e),n=t.isRunning,a=t.preventExitTransition,o=t.toastRef,i=t.eventHandlers,s=e.closeButton,c=e.children,u=e.autoClose,d=e.onClick,f=e.type,p=e.hideProgressBar,m=e.closeToast,v=e.transition,h=e.position,g=e.className,y=e.style,x=e.bodyClassName,b=e.bodyStyle,Z=e.progressClassName,I=e.progressStyle,E=e.updateId,T=e.role,C=e.progress,_=e.rtl,N=e.toastId,j=e.deleteToast,R=e.isIn,k=e.isLoading,L=e.iconOut,O=e.closeOnClick,w=e.theme,A=ie("Toastify__toast","Toastify__toast-theme--".concat(w),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":_},{"Toastify__toast--close-on-click":O}),P=de(g)?g({rtl:_,position:h,type:f,defaultClassName:A}):ie(A,g),z=!!C||!u,B={closeToast:m,type:f,theme:w},M=null;return!1===s||(M=de(s)?s(B):(0,r.isValidElement)(s)?(0,r.cloneElement)(s,B):Ee(B)),r.createElement(v,{isIn:R,done:j,position:h,preventExitTransition:a,nodeRef:o},r.createElement("div",(0,l.Z)((0,l.Z)({id:N,onClick:d,className:P},i),{},{style:y,ref:o}),r.createElement("div",(0,l.Z)((0,l.Z)({},R&&{role:T}),{},{className:de(x)?x({type:f}):ie("Toastify__toast-body",x),style:b}),null!=L&&r.createElement("div",{className:ie("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!k})},L),r.createElement("div",null,c)),M,r.createElement(Te,(0,l.Z)((0,l.Z)({},E&&!z?{key:"pb-".concat(E)}:{}),{},{rtl:_,theme:w,delay:u,isRunning:n,isIn:R,closeToast:m,hide:p,type:f,style:I,className:Z,controlledProgress:z,progress:C||0}))))},_e=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},Ne=me(_e("bounce",!0)),je=(me(_e("slide",!0)),me(_e("zoom")),me(_e("flip")),(0,r.forwardRef)((function(e,t){var n=xe(e),a=n.getToastToRender,o=n.containerRef,i=n.isToastActive,s=e.className,c=e.style,u=e.rtl,d=e.containerId;function f(e){var t=ie("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return de(s)?s({position:e,rtl:u,defaultClassName:t}):ie(t,fe(s))}return(0,r.useEffect)((function(){t&&(t.current=o.current)}),[]),r.createElement("div",{ref:o,className:"Toastify",id:d},a((function(e,t){var n=t.length?(0,l.Z)({},c):(0,l.Z)((0,l.Z)({},c),{},{pointerEvents:"none"});return r.createElement("div",{className:f(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var a=e.content,o=e.props;return r.createElement(Ce,(0,l.Z)((0,l.Z)({},o),{},{isIn:i(o.toastId),style:(0,l.Z)((0,l.Z)({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),a)})))})))})));je.displayName="ToastContainer",je.defaultProps={position:"top-right",transition:Ne,autoClose:5e3,closeButton:Ee,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var Re,ke=new Map,Le=[],Oe=1;function we(){return""+Oe++}function Ae(e){return e&&(ue(e.toastId)||ce(e.toastId))?e.toastId:we()}function Pe(e,t){return ke.size>0?he.emit(0,e,t):Le.push({content:e,options:t}),t.toastId}function ze(e,t){return(0,l.Z)((0,l.Z)({},t),{},{type:t&&t.type||e,toastId:Ae(t)})}function Be(e){return function(t,n){return Pe(t,ze(e,n))}}function Me(e,t){return Pe(e,ze("default",t))}Me.loading=function(e,t){return Pe(e,ze("default",(0,l.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Me.promise=function(e,t,n){var a,r=t.pending,o=t.error,i=t.success;r&&(a=ue(r)?Me.loading(r,n):Me.loading(r.render,(0,l.Z)((0,l.Z)({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,r){if(null!=t){var o=(0,l.Z)((0,l.Z)((0,l.Z)({type:e},s),n),{},{data:r}),i=ue(t)?{render:t}:t;return a?Me.update(a,(0,l.Z)((0,l.Z)({},o),i)):Me(i.render,(0,l.Z)((0,l.Z)({},o),i)),r}Me.dismiss(a)},u=de(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",o,e)})),u},Me.success=Be("success"),Me.info=Be("info"),Me.error=Be("error"),Me.warning=Be("warning"),Me.warn=Me.warning,Me.dark=function(e,t){return Pe(e,ze("default",(0,l.Z)({theme:"dark"},t)))},Me.dismiss=function(e){ke.size>0?he.emit(1,e):Le=Le.filter((function(t){return null!=e&&t.options.toastId!==e}))},Me.clearWaitingQueue=function(e){return void 0===e&&(e={}),he.emit(5,e)},Me.isActive=function(e){var t=!1;return ke.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Me.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,a=ke.get(n||Re);return a&&a.getToast(e)}(e,t);if(n){var a=n.props,r=n.content,o=(0,l.Z)((0,l.Z)((0,l.Z)({delay:100},a),t),{},{toastId:t.toastId||e,updateId:we()});o.toastId!==e&&(o.staleId=e);var i=o.render||r;delete o.render,Pe(i,o)}}),0)},Me.done=function(e){Me.update(e,{progress:1})},Me.onChange=function(e){return he.on(4,e),function(){he.off(4,e)}},Me.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Me.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},he.on(2,(function(e){Re=e.containerId||e,ke.set(Re,e),Le.forEach((function(e){he.emit(0,e.content,e.options)})),Le=[]})).on(3,(function(e){ke.delete(e.containerId||e),0===ke.size&&he.off(0).off(1).off(5)}));var Se=n(884),Fe=function(){var e=(0,o.v9)(i.Af),t=(0,o.v9)(i.AD);return(0,h.jsxs)(h.Fragment,{children:[" ",0===e.length&&(0,h.jsx)(Se.x,{textAlign:"center",color:"gray.600",fontSize:"xl",children:"Don't have contacts..."}),(0,h.jsx)(te.xu,{maxW:"500px",children:(0,h.jsx)("ul",{children:null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){var t=e.id,n=e.name,a=e.number;return(0,h.jsx)(ae,{id:t,name:n,number:a},t)}))})}),(0,h.jsx)(je,{})]})};function qe(){var e=(0,o.I0)();return(0,r.useEffect)((function(){e((0,s.yF)())}),[e]),(0,h.jsx)(ne.k,{align:"center",justify:"center",direction:"column",children:(0,h.jsxs)(te.xu,{children:[(0,h.jsx)(Se.x,{fontSize:"5xl",textAlign:"center",children:"Phonebook"}),(0,h.jsx)(R,{}),(0,h.jsx)($,{}),(0,h.jsx)(Se.x,{fontSize:"2xl",textAlign:"center",my:"10px",children:"Contacts"}),(0,h.jsx)(Fe,{})]})})}},5350:function(e,t,n){n.d(t,{NI:function(){return C},NJ:function(){return T},Q6:function(){return _},e:function(){return b}});var a=n(1413),r=n(4925),o=n(9439),i=n(9886),s=n(4591),l=n(5597),c=n(2481),u=n(2996),d=n(5113),f=n(6992),p=n(2791),m=n(184),v=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],g=(0,i.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),y=(0,o.Z)(g,2),x=y[0],b=y[1],Z=(0,i.k)({strict:!1,name:"FormControlContext"}),I=(0,o.Z)(Z,2),E=I[0],T=I[1];var C=(0,l.G)((function(e,t){var n=(0,c.jC)("Form",e),i=function(e){var t=e.id,n=e.isRequired,i=e.isInvalid,l=e.isDisabled,c=e.isReadOnly,u=(0,r.Z)(e,v),d=(0,p.useId)(),m=t||"field-".concat(d),h="".concat(m,"-label"),g="".concat(m,"-feedback"),y="".concat(m,"-helptext"),x=(0,p.useState)(!1),b=(0,o.Z)(x,2),Z=b[0],I=b[1],E=(0,p.useState)(!1),T=(0,o.Z)(E,2),C=T[0],_=T[1],N=(0,p.useState)(!1),j=(0,o.Z)(N,2),R=j[0],k=j[1],L=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:y},e),{},{ref:(0,s.lq)(t,(function(e){e&&_(!0)}))})}),[y]),O=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:t,"data-focus":(0,f.PB)(R),"data-disabled":(0,f.PB)(l),"data-invalid":(0,f.PB)(i),"data-readonly":(0,f.PB)(c),id:void 0!==e.id?e.id:h,htmlFor:void 0!==e.htmlFor?e.htmlFor:m})}),[m,l,R,i,c,h]),w=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:g},e),{},{ref:(0,s.lq)(t,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[g]),A=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)((0,a.Z)({},e),u),{},{ref:t,role:"group","data-focus":(0,f.PB)(R),"data-disabled":(0,f.PB)(l),"data-invalid":(0,f.PB)(i),"data-readonly":(0,f.PB)(c)})}),[u,l,R,i,c]),P=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!i,isReadOnly:!!c,isDisabled:!!l,isFocused:!!R,onFocus:function(){return k(!0)},onBlur:function(){return k(!1)},hasFeedbackText:Z,setHasFeedbackText:I,hasHelpText:C,setHasHelpText:_,id:m,labelId:h,feedbackId:g,helpTextId:y,htmlProps:u,getHelpTextProps:L,getErrorMessageProps:w,getRootProps:A,getLabelProps:O,getRequiredIndicatorProps:P}}((0,u.Lr)(e)),l=i.getRootProps,g=(i.htmlProps,(0,r.Z)(i,h)),y=(0,f.cx)("chakra-form-control",e.className);return(0,m.jsx)(E,{value:g,children:(0,m.jsx)(x,{value:n,children:(0,m.jsx)(d.m.div,(0,a.Z)((0,a.Z)({},l({},t)),{},{className:y,__css:n.container}))})})}));C.displayName="FormControl";var _=(0,l.G)((function(e,t){var n=T(),r=b(),o=(0,f.cx)("chakra-form__helper-text",e.className);return(0,m.jsx)(d.m.div,(0,a.Z)((0,a.Z)({},null==n?void 0:n.getHelpTextProps(e,t)),{},{__css:r.helperText,className:o}))}));_.displayName="FormHelperText"},7236:function(e,t,n){n.d(t,{I:function(){return h}});var a=n(1413),r=n(4925),o=n(5350),i=n(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],l=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function c(e){var t=function(e){var t,n,s,c=(0,o.NJ)(),u=e.id,d=e.disabled,f=e.readOnly,p=e.required,m=e.isRequired,v=e.isInvalid,h=e.isReadOnly,g=e.isDisabled,y=e.onFocus,x=e.onBlur,b=(0,r.Z)(e,l),Z=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==c?void 0:c.hasFeedbackText)&&(null==c?void 0:c.isInvalid)&&Z.push(c.feedbackId);(null==c?void 0:c.hasHelpText)&&Z.push(c.helpTextId);return(0,a.Z)((0,a.Z)({},b),{},{"aria-describedby":Z.join(" ")||void 0,id:null!=u?u:null==c?void 0:c.id,isDisabled:null!=(t=null!=d?d:g)?t:null==c?void 0:c.isDisabled,isReadOnly:null!=(n=null!=f?f:h)?n:null==c?void 0:c.isReadOnly,isRequired:null!=(s=null!=p?p:m)?s:null==c?void 0:c.isRequired,isInvalid:null!=v?v:null==c?void 0:c.isInvalid,onFocus:(0,i.v0)(null==c?void 0:c.onFocus,y),onBlur:(0,i.v0)(null==c?void 0:c.onBlur,x)})}(e),n=t.isDisabled,c=t.isInvalid,u=t.isReadOnly,d=t.isRequired,f=(0,r.Z)(t,s);return(0,a.Z)((0,a.Z)({},f),{},{disabled:n,readOnly:u,required:d,"aria-invalid":(0,i.Qm)(c),"aria-required":(0,i.Qm)(d),"aria-readonly":(0,i.Qm)(u)})}var u=n(5597),d=n(2481),f=n(2996),p=n(5113),m=n(184),v=["htmlSize"],h=(0,u.G)((function(e,t){var n=e.htmlSize,o=(0,r.Z)(e,v),s=(0,d.jC)("Input",o),l=c((0,f.Lr)(o)),u=(0,i.cx)("chakra-input",e.className);return(0,m.jsx)(p.m.input,(0,a.Z)((0,a.Z)({size:n},l),{},{__css:s.field,ref:t,className:u}))}));h.displayName="Input",h.id="Input"}}]);
//# sourceMappingURL=489.f71286cb.chunk.js.map