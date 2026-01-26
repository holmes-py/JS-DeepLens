
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ae084332-2bef-504b-b6d8-98e9b04ba3b5")}catch(e){}}();
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="51e94a19-cb93-45f4-896e-bcc8c6e5a133",e._sentryDebugIdIdentifier="sentry-dbid-51e94a19-cb93-45f4-896e-bcc8c6e5a133")}catch(e){}}();var _sentryModuleMetadataGlobal="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_sentryModuleMetadataGlobal._sentryModuleMetadata=_sentryModuleMetadataGlobal._sentryModuleMetadata||{},_sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack]=Object.assign({},_sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack],{team:"mfe-dashboardappssettings",release:"a31d5c602d76f87e49fe9de1f8456639a1184836"});var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"a31d5c602d76f87e49fe9de1f8456639a1184836"},(self.webpackChunkmfe_dashboardappssettings=self.webpackChunkmfe_dashboardappssettings||[]).push([[4931],{9460:(e,t,l)=>{l.d(t,{h:()=>a});let a=function(e){return e.Global="global",e.Custom="custom",e.NotCustom="notCustom",e}({})},20674:(e,t,l)=>{l.d(t,{s:()=>c});var a=l(12485),o=l(83078),i=l(95100),r=l.n(i),s=l(70579);const n=r().div`
  display: flex;
  gap: ${o.Spacing5};
`,d=r().label`
  font-size: ${o.TypeScale1FontSize};
  line-height: ${o.TypeScale1LineHeight};
  letter-spacing: ${o.TypeScale1LetterSpacing};
  display: flex;
  align-items: center;
  margin-bottom: ${o.Spacing5};
  color: ${o.ColorNeutral120};
  font-weight: ${o.FontWeightMedium};
`,c=e=>{let{labelText:t,tooltipText:l}=e;return(0,s.jsxs)(n,{children:[(0,s.jsx)(d,{children:t}),l&&(0,s.jsx)(a.Tooltip,{content:l,children:(0,s.jsx)(a.Icon,{name:"Info",color:o.ColorNeutral100,size:"small"})})]})}},22712:(e,t,l)=>{l.d(t,{G:()=>r});var a=l(59413),o=l(25330),i=l(17329);const r=e=>{let{mode:t=o.l.CREATE,title:l,onAccept:r}=e;const{openModal:s,closeModal:n}=(0,i.h)(),{t:d}=(0,a.useTranslation)(),c={[o.l.CREATE]:d("dashboard_ptl.dsm.apps-raw-data-export.classic-callbacks-editor.discard-modal-create.title","Discard your callback URL"),[o.l.EDIT]:d("dashboard_ptl.dsm.apps-raw-data-export.classic-callbacks-editor.discard-modal-create.title","Discard your callback URL"),[o.l.DUPLICATE]:d("dashboard_ptl.dsm.apps-raw-data-export.classic-callbacks-editor.discard-modal.title","Duplicate your callback URL")};return{closeModal:n,openModal:()=>s({testId:"discard-callback-confirmation-modal",title:l||c[t],size:"small",content:d("dashboard_ptl.dsm.apps-raw-data-export.classic-callbacks-editor.discard-modal.body","If you leave this page you\u2019ll lose your changes."),primaryAction:{label:d("dashboard_ptl.dsm.navigation-blocker-modal.discard-and-leave-button","Discard and leave"),kind:"negative",onClick:()=>{null===r||void 0===r||r(),n()}},secondaryAction:{label:d("dashboard_ptl.dsm.navigation-blocker-modal.cancel-button","Cancel"),kind:"secondary",onClick:n}})}}},25330:(e,t,l)=>{l.d(t,{_:()=>a,l:()=>o});let a=function(e){return e.CLASSIC="classic",e.BUILDER="builder",e}({}),o=function(e){return e.EDIT="edit",e.CREATE="create",e.DUPLICATE="duplicate",e}({})},28519:(e,t,l)=>{l.d(t,{b:()=>d});var a=l(13607),o=l(59413),i=l(43918),r=l(81751),s=l(35300),n=l(37482);const d=e=>{const{t:t}=(0,o.useTranslation)(),l=t("dashboard_ptl.dsm.apps-raw-data-export.unverified-install","Unverified Install"),d=t("dashboard_ptl.dsm.apps-raw-data-export.unverified-reattribution","Unverified Reattribution"),{triggerTransformer:c}=(0,s.hB)(e),{enabled:u}=(0,n.a)();return(0,a.useQuery)({queryKey:[r.k.AppCallbacks,e],queryFn:t=>{let{signal:l}=t;return(0,i.k)(e,{signal:l})},select:e=>{const t=e,a=t.map((e=>e.id));return a.includes(s.s$)||t.push({id:s.s$,name:l,custom:!1,url:"",token:""}),a.includes(s.L1)||t.push({id:s.L1,name:d,custom:!1,url:"",token:""}),c(t)},enabled:u})}},33033:(e,t,l)=>{l.d(t,{j:()=>q});var a=l(12485),o=l(83078),i=l(95100),r=l.n(i),s=l(57313),n=l(50318),d=l(13555),c=l(59413),u=l(36936),p=l(70579);const h=r().div`
  background: ${o.ColorNeutral5};
  width: 100%;
`,g=r().div`
  background: ${e=>{let{background:t}=e;return t}};
  display: grid;
  grid-template-columns: 15px 15px 16px 395px 15px 24px;
  grid-template-areas: 'marginLeft checkbox space placeholder icon marginRight';
  align-items: center;
  width: 100%;
  min-height: 28px;
  padding: ${o.Spacing5} 0;
  margin-bottom: 2px;
  cursor: pointer;
`,m=r().div`
  grid-area: checkbox;
`,b=r().div`
  grid-area: placeholder;
  color: ${e=>{let{color:t}=e;return t}};
  font-size: ${o.TypeScale2FontSize};
  font-weight: 400;
`,x=r().div`
  font-size: ${o.TypeScale1FontSize};
  line-height: ${o.TypeScale1LineHeight};
  margin-top: 2px;
`,f=e=>{let{label:t,onAddCustomItem:l,searchValue:i,isCustomPlaceholderAllowed:r,isDirectCustomItemAddEnabled:s}=e;const{t:n}=(0,c.useTranslation)(),d=""!==t,u=null===t||void 0===t?void 0:t.toLowerCase().includes(i.toLowerCase()),f=d&&u||s,v=n("dashboard_ptl.rtc-placeholder-selector.dcp-desc","Create it as dynamic callback parameters. Adjust will notvalidate its new DCP added compatibility with trigger.");return(0,p.jsx)(h,{children:(0,p.jsx)(g,{background:f?o.ColorPrimary80:o.ColorNeutral5,onClick:()=>{r&&l()},children:r?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(m,{children:f&&!s?(0,p.jsx)(a.Icon,{name:"CheckBold",color:o.ColorWhite,size:"small","aria-label":"CheckBold"}):(0,p.jsx)(a.Icon,{name:"Plus",color:s?o.ColorWhite:void 0,size:"small","aria-label":"Plus"})}),(0,p.jsx)(b,{color:f?o.ColorWhite:o.ColorBlack,children:s?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{children:`{${i}}`}),(0,p.jsx)(x,{children:v})]}):(0,p.jsx)("div",{children:`{${t}}`})})]}):(0,p.jsxs)(b,{color:o.ColorBlack,children:["Could not find",(0,p.jsx)("b",{children:i}),"placeholder"]})})})},v=r().div`
  background: ${o.ColorNeutral5};
  width: ${e=>{let{width:t}=e;return t}};
  height: 100%;
  margin-left: ${e=>{let{marginLeft:t}=e;return t}};
`,y=r().div`
  background: ${e=>{let{background:t}=e;return t}};
  display: grid;
  grid-template-columns: 15px 15px 16px 1fr 15px 24px;
  grid-template-areas: 'marginLeft checkbox space placeholder icon marginRight';
  align-items: center;
  width: 100%;
  height: 28px;
  margin-bottom: 2px;
  cursor: ${e=>{let{isDisabled:t}=e;return t?"not-allowed":"pointer"}};

  :hover {
    background: ${e=>{let{hoverBackground:t}=e;return t}};
  }
`,w=r().div`
  grid-area: icon;
`,k=r().p`
  grid-area: placeholder;
  color: ${e=>{let{color:t}=e;return t}};
  font-size: ${o.TypeScale2FontSize};
  font-weight: 400;
`,C=r().div`
  grid-area: checkbox;
`,S=r().div`
  max-width: 155px;
`,j={gridArea:"icon"},T=e=>{let{data:t,searchValue:l,selected:i,setSelected:r,isMultiSelect:s,setCustomItem:u,isSidePanelOpenDisable:h,setIsSidePanelOpenDisable:g,setIsSidePanelOpen:m,testId:b,setHelp:x,setCustomItemDirty:f,dropdownWidth:T="453px"}=e;const{t:$}=(0,c.useTranslation)(),{label:_,items:I,value:A,isDisabled:L}=t,[P,M]=(0,n.useState)(!1),[E,D]=(0,n.useState)([]),[F,N]=(0,n.useState)(void 0),[B,z]=(0,n.useState)(""),O=i.filter((e=>e.value===A)),R=I.filter((e=>!e.disabled));(0,n.useEffect)((()=>{O.length>0&&O.length<R.length&&(N("indeterminate"),M(!1)),O.length===R.length&&(N("checked"),M(!0)),0===O.length&&(N(void 0),M(!1))}),[R,O]);const V=e=>i.find((t=>t.item.value===e)),W=$("dashboard_ptl.dsm.placeholder-selector.disabled-tooltip-message-accordian-item","Placeholder unavailable for this trigger."),G=(0,p.jsx)(v,{marginLeft:s?"-45px":"-12px",width:T,children:I.map((e=>{let{label:t,description:l,value:n,disabled:d,disabledTooltipText:c}=e;const v=V(n),T=v?o.ColorPrimary80:o.ColorNeutral5,$=v?o.ColorWhite:o.ColorBlack,_=d||h;return(0,p.jsx)(a.Tooltip,{content:(0,p.jsx)(S,{children:c||W}),position:"left",display:d,zIndex:1e3,offset:[0,13],children:(0,p.jsxs)(y,{"data-testid":`${b}-item-${n}`,onClick:()=>{_||((e,t)=>{if(s)if(V(t)){const e=i.filter((e=>e.item.value!==t));r(e)}else r([...i,{value:A,item:{label:e,value:t}}]);else u(U),f(!1),r([{value:A,item:{label:e,value:t}}])})(t,n)},background:d?o.ColorNeutral10:T,...!h&&{onMouseLeave:()=>{z("")},onMouseEnter:()=>{z(t)}},isDisabled:d,hoverBackground:v?o.ColorPrimary70:o.ColorNeutral10,children:[v&&(0,p.jsx)(C,{children:(0,p.jsx)(a.Icon,{name:"CheckBold",size:"small",color:o.ColorWhite,"aria-label":"CheckBold"})}),(0,p.jsx)(k,{color:d?o.ColorNeutral70:$,children:t}),B===t&&(0,p.jsx)(w,{onClick:e=>((e,t,l)=>{e.stopPropagation(),g(!0),m(!0),x({label:t,description:l})})(e,t,l),children:(0,p.jsx)(a.Icon,{size:"small",name:"Info",css:j,color:v?o.ColorWhite:o.ColorBlack,"aria-label":"Info"})})]})},n)}))}),K=[{id:A,count:O.length,content:G,title:_,isolateCheckbox:!0,isExpanded:!!l,checkboxState:P,checkboxType:F,isDisabled:L}];return(0,n.useEffect)((()=>{D(K)}),[i,F,P,B,h,l]),(0,p.jsx)(a.Accordion,{data:E,type:"list",togglePosition:"right",selectable:s,onItemUpdate:(e,t,l)=>{(()=>{if(l&&O.length!==R.length){const e=R.map((e=>({value:A,item:{label:e.label,value:e.value}}))),t=(0,d.uniqBy)("item.value",(0,d.concat)(e,i));r(t)}if(l&&O.length===R.length){const e=i.filter((e=>e.value!==A));r(e)}})();const a=E.map((t=>t.id===e?{...t,checkboxState:P,itemsList:G,checkboxType:F}:t));D(a)}})};var $=l(55423);const _=r().div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 256px;
  grid-template-rows: 50px 9fr 1fr;
  grid-template-areas:
    'header'
    'body'
    'footer';
  border-left: ${o.InputLoweredDefaultBorder};
`,I=r().div`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: center;
`,A=r().div`
  position: absolute;
  left: ${o.Spacing10};
  top: ${o.Spacing10};
`,L=r().div`
  grid-area: body;
  display: flex;
  flex-direction: column;
  margin-top: ${o.Spacing15};
  padding: ${o.Spacing15};
  gap: ${o.Spacing15};
  overflow-wrap: anywhere;
`,P=r().div`
  grid-area: footer;
  padding: ${o.Spacing15};
`,M=r().div`
  display: flex;
`,E=r().a`
  color: ${o.ColorPrimary80};
  text-decoration: none;
  cursor: pointer;
  margin-left: 2px;
`,D=e=>{let{title:t,description:l,closeSidePanel:o,helpURL:i}=e;const{t:r}=(0,c.useTranslation)(),s=r("dashboard_ptl.rtc-placeholder-selector.help-panel.header","Help"),n=(0,p.jsxs)(M,{children:[(0,p.jsx)(a.Text,{type:"body2",color:"subtle",children:r("dashboard_ptl.rtc-placeholder-selector.learn-more.footer-link","Learn more about")}),(0,p.jsx)(E,{href:null===i||void 0===i?void 0:i.url,target:"_blank",rel:"noopener noreferrer","aria-label":"link",children:null===i||void 0===i?void 0:i.title})]}),d=t.split("_").join("<wbr />_"),u=(0,p.jsx)("p",{dangerouslySetInnerHTML:{__html:d}});return(0,p.jsxs)(_,{children:[(0,p.jsxs)(I,{children:[(0,p.jsx)(A,{children:(0,p.jsx)(a.IconButton,{iconName:"Cross",onClick:o,"aria-label":"Cross"})}),(0,p.jsx)(a.Text,{type:"body1",children:s})]}),(0,p.jsxs)(L,{children:[(0,p.jsx)(a.Text,{type:"headline3",children:u}),l&&(0,p.jsx)(a.Text,{type:"body2",children:(0,p.jsx)($.U,{children:(h=l,h.replace(/<a (.*)>/g,'<a target="_blank" $1>'))})})]}),i&&(0,p.jsx)(P,{children:(0,p.jsx)(a.Text,{type:"body2",children:n})})]});var h},F=r().div`
  position: relative;
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    'search'
    'body'
    'footer';
  width: ${e=>{let{width:t}=e;return t}};
  max-height: 520px;
  background: ${o.ColorWhite};
  border: ${o.InputLoweredDefaultBorder};
  border-radius: ${o.Spacing10};
  box-shadow: 0px 2px 8px rgba(110, 116, 146, 0.25);
`,N=r().div`
  grid-area: body;
  position: relative;
  overflow-y: ${e=>{let{sidePanelOpen:t}=e;return t}};
  overflow-x: hidden;
  padding-top: ${o.Spacing5};
  padding-bottom: ${o.Spacing5};
`,B=r().div`
  grid-area: footer;
  display: flex;
  flex-direction: row;
  height: 50px;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid #eceef4;
  column-gap: ${o.Spacing15};
  padding: ${o.Spacing20};
`,z=r().div`
  width: 100%;
  padding: ${o.Spacing10};
  border-bottom: ${o.InputLoweredDefaultBorder};
`,O=r().div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`,R=r().div`
  grid-area: body;
  position: absolute;
  background-color: ${o.ColorWhite};
  top: 0;
  right: 0;
  height: 100%;
  width: 256px;
  z-index: ${o.StackingDropdown};
  overflow: hidden;
`,U={value:"",item:{label:"",value:""},custom:!1},V={label:"",description:""},W=e=>{let{setAllSelected:t,placeholdersList:l,isMultiSelect:o,setOpenState:i,testId:r,searchPlaceholderText:s,helpURL:h,isCustomPlaceholderAllowed:g=!1,isInputVariant:m,dropdownWidth:b="453px",selectedPlaceholders:x}=e;const{t:v}=(0,c.useTranslation)(),y=v("dashboard_ptl.rtc-placeholder-selector.default-search-placeholder-text","Search or type to add a custom placeholder"),w=v("dashboard_ptl.dsm.placeholder-selector.disabled-tooltip-message-accordian-category","Category unavailable for this trigger."),k=(0,d.map)((e=>"customValue"===e.value?{...e,custom:!1}:e),x),C=(0,d.filter)((e=>"customValue"===e.value),k),j=!(0,d.isEmpty)(C),$=(0,d.filter)((e=>"customValue"!==e.value),k),[_,I]=(0,n.useState)(""),[A,L]=(0,n.useState)($||[]),[P,M]=(0,n.useState)(!1),[E,W]=(0,n.useState)(!1),[G,K]=(0,n.useState)(V),[H,q]=(0,n.useState)(j||!1),[Q,Y]=(0,n.useState)(C[0]||U),Z=(0,n.useMemo)((()=>l?l.filter((e=>e.items.some((e=>e.label.toLowerCase().includes(_.toLowerCase()))))).map((e=>({...e,items:e.items.filter((e=>e.label.toLowerCase().includes(_.toLowerCase())))}))):[]),[l,_]),J=Boolean(_&&(0,d.isEmpty)(Z));(0,n.useEffect)((()=>{""!==Q.item.value?q(!0):q(!1)}),[Q.item.value]),(0,n.useEffect)((()=>{!o&&Q.custom&&L([])}),[Q,o]);const X=(0,d.flatMap)((e=>!(!e.label.toLowerCase().includes(_.toLowerCase())&&!Q.item.label.toLowerCase().includes(_.toLowerCase()))||[]),Z),ee=m&&!J?v("dashboard_ptl.rtc-placeholder-selector.button-select","Select"):v("dashboard_ptl.rtc-placeholder-selector.button-add","Add");return(0,p.jsxs)(F,{width:b,children:[P&&(0,p.jsx)(R,{children:(0,p.jsx)(D,{closeSidePanel:()=>{M(!P),W(!E)},title:G.label,description:G.description,helpURL:h})}),(0,p.jsx)(z,{children:(0,p.jsx)(u.D,{onChange:e=>I(`${e}`),value:_,forceResetSearchValue:Q.custom,placeholder:s||y,testId:`${r}-search-input`,css:{width:"100%"},shouldAutoFocus:!0})}),(0,p.jsxs)(N,{sidePanelOpen:E?"hidden":"overlay",children:[!l&&(0,p.jsx)(O,{children:(0,p.jsx)(a.Spinner,{})}),(H&&!(0,d.isEmpty)(X)&&g||(0,d.isEmpty)(Z))&&l&&(0,p.jsx)(f,{onAddCustomItem:()=>{Y({value:"customValue",item:{label:_,value:`{${_}}`},custom:Q.custom&&""!==_?Q.custom:!Q.custom}),I("")},label:Q.item.label,searchValue:_,isCustomPlaceholderAllowed:g,isDirectCustomItemAddEnabled:J}),!(0,d.isEmpty)(Z)&&Z.map((e=>(0,p.jsx)(a.Tooltip,{content:(0,p.jsx)(S,{children:e.disabledTooltipText||w}),position:"left",display:e.isDisabled,zIndex:1e3,offset:[0,13],children:(0,p.jsx)("div",{children:(0,p.jsx)(T,{data:e,searchValue:_,selected:A,setSelected:L,isMultiSelect:o,setCustomItem:Y,setIsSidePanelOpen:M,isSidePanelOpenDisable:E,setIsSidePanelOpenDisable:W,setCustomItemDirty:q,testId:r,setHelp:K,dropdownWidth:b})})},e.value)))]}),(0,p.jsxs)(B,{children:[(0,p.jsx)(a.Button,{size:"medium",label:v("dashboard_ptl.rtc-placeholder-selector.button-cancel","Cancel"),onClick:()=>i(!1),"data-testid":`${r}-cancel-button`,kind:"secondary"}),(0,p.jsx)(a.Button,{label:ee,size:"medium","data-testid":`${r}-add-button`,onClick:()=>{t([...A,...J?[{value:"customValue",item:{label:_,value:`{${_}}`}}]:"customValue"===Q.value&&""!==Q.item.label?[(0,d.omit)("custom",Q)]:[]]),i(!1)},type:"submit",kind:"primary",disabled:(0,d.isEmpty)(A)&&!H&&!J})]})]})},G=r().div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`,K=r().div`
  width: ${e=>{let{width:t}=e;return t}};
  height: ${o.Spacing40};
  background: ${o.ColorWhite};
  border: ${o.InputLoweredDefaultBorder};
  border-radius: ${o.BorderRadiusMedium};
  display: flex;
  align-items: center;
  padding: 0 ${o.Spacing15};
  justify-content: space-between;
  cursor: pointer;
  ${e=>{let{isInvalid:t}=e;return t&&`border-color: ${o.ColorNegative80}; border-width: 2px;`}}
`,H=r().div`
  width: ${e=>{let{width:t}=e;return`calc(${t} - 50px)`}};
  height: ${o.Spacing40};
  padding-top: ${o.Spacing20};
  color: ${e=>{let{color:t}=e;return t}};
  font-size: ${o.TypeScale2FontSize};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,q=e=>{let{placeholdersList:t,isMultiSelect:l,buttonLabel:i,buttonIcon:r,buttonIconPosition:d,onAddSelected:c,testId:u,searchPlaceholderText:h,helpURL:g,selectedPlaceholders:m,isCustomPlaceholderAllowed:b,isInputVariant:x,dropdownWidth:f,inputVariantButtonWidth:v="100%",buttonKind:y="secondary",isInvalid:w}=e;const{isComponentVisible:k,setIsComponentVisible:C}=(e=>{const[t,l]=(0,n.useState)(e),a=(0,n.useRef)(null),o=e=>{a.current&&!a.current.contains(e.target)&&l(!1)};return(0,n.useEffect)((()=>(document.addEventListener("click",o,!0),()=>{document.removeEventListener("click",o,!0)})),[]),{ref:a,isComponentVisible:t,setIsComponentVisible:l}})(!1),S=m&&""!==m[0].item.label,j=S?m[0].item.label:i,T=((e,t)=>{const l=document.createElement("canvas").getContext("2d");return l.font=t||getComputedStyle(document.body).font,l.measureText(e).width})(j,"14px SF Pro Text");return(0,p.jsx)(a.PopOver,{open:k,setOpen:C,popOverStyle:{zIndex:s.g3,maxHeight:"none"},css:{width:x?v:"fit-content"},placement:"top-start",content:(0,p.jsx)(W,{setAllSelected:c,placeholdersList:t,isMultiSelect:l,setOpenState:C,testId:u,searchPlaceholderText:h,helpURL:g,isCustomPlaceholderAllowed:b,isInputVariant:x,selectedPlaceholders:x?m:void 0,dropdownWidth:f}),children:x?(0,p.jsx)(a.Tooltip,{display:T>parseInt(v,10)-60,content:(0,p.jsx)("div",{style:{maxWidth:"fit-content"},children:j}),position:"top",children:(0,p.jsxs)(K,{onClick:()=>C(!k),width:v,"data-testid":`${u}-input-variant-button`,isInvalid:w,children:[(0,p.jsx)(H,{id:"myCanvas",color:S?o.ColorNeutral140:o.ColorNeutral80,width:v,children:j}),(0,p.jsx)(a.Icon,{name:"ChevronDown"})]})}):(0,p.jsx)(G,{children:(0,p.jsx)(a.Button,{label:i,iconName:r,iconAlignment:d,onClick:()=>C(!k),"data-testid":`${u}-button`,kind:y})})})}},35300:(e,t,l)=>{l.d(t,{s$:()=>u,L1:()=>p,hB:()=>h});var a=l(51934),o=l(13555),i=l(59413),r=l(90564);var s=l(9460),n=l(83244);const d=/^subscription$/,c=/(subscription-|subscription_)/i,u="unverified_install",p="unverified_reattribution",h=e=>{const{t:t}=(0,i.useTranslation)(),l=(e=>t=>{const{id:l,custom:a,name:i}=t;if(l===s.h.Global)return e(`common.event-type.${l}`,i);if(!a){if(l.includes("att_consent")){const t=(0,o.replace)("att_consent","ios_opt_in",l),a=(0,o.replace)("Att Consent","ATT update (iOS)",i);return e(`common.event-type.${t}`,a)}if(l.includes("sk")){const t=(0,o.replace)("Sk","Skadnetwork",i);if("sk_install"===l)return e("common.event-type.skadnetwork",t);const a=(0,o.replace)("sk","skadnetwork",l);return e(`common.event-type.${a}`,t)}return e(`common.event-type.${l}`,i)}return i})(t),{iOSConfigured:h,allowSKAdEvents:g}=(e=>{var t,l;const{data:o,isLoading:i}=(0,r.Z)(e),s=(0,a.useFeaturePackageStatus)(a.FeatureName.SKAdNetwork),n=!(null===o||void 0===o||!o.is_ctv),d=!(i||!o||n)&&(null===(t=o.platforms)||void 0===t||null===(l=t.ios)||void 0===l?void 0:l.configured);return{isLoading:i,iOSConfigured:d,allowSKAdEvents:s&&d}})(e),m=(()=>{const{config:e}=(0,n.U)();return null===e||void 0===e?void 0:e.pages.find((e=>"conversion-rules"===e.id))})(),b=[{isAllowTrigger:!1,matchTrigger:c},{isAllowTrigger:(0,a.useFeaturePackageStatus)(a.FeatureName.Subscription),matchTrigger:d},{isAllowTrigger:g,matchTrigger:/^sk_/},{isAllowTrigger:h,matchTrigger:["att_consent"]},{isAllowTrigger:(0,a.useFeaturePackageStatus)(a.FeatureName.FraudPrevention),matchTrigger:["rejected_install","rejected_reattribution"]},{isAllowTrigger:(0,a.useFeaturePackageStatus)(a.FeatureName.UninstallReinstall),matchTrigger:["uninstall","reinstall","reattribution_reinstall"]},{isAllowTrigger:(0,a.useFeaturePackageStatus)(a.FeatureName.Multitouch),matchTrigger:["san_impression","san_click"]},{isAllowTrigger:(0,a.useFeaturePackageStatus)(a.FeatureName.CostData),matchTrigger:["cost_update"]},{isAllowTrigger:(0,a.useFeaturePackageStatus)(a.FeatureName.AdRevenue),matchTrigger:["ad_revenue"]},{isAllowTrigger:m,matchTrigger:[u,p]}];return{triggerTransformer:e=>e.filter((e=>b.every((t=>{let{isAllowTrigger:l,matchTrigger:a}=t;const o=e.id;return!(Array.isArray(a)?a.includes(o):a.test(o))||l})))).map((e=>({...e,name:l(e)})))}}},39904:(e,t,l)=>{l.d(t,{q:()=>d});var a=l(12485),o=l(59413),i=l(77567),r=l(87916),s=l(70579);const n={position:"left",delay:!1,offset:[0,13]},d=e=>{let{onSelect:t,selectedOptions:l,disabled:d=!1,isMultiple:c=!1,testId:u="",invalid:p,infoText:h}=e;const{appToken:g=""}=(0,i.useParams)(),{options:m,isLoading:b,isFetching:x}=(0,r.m)({appToken:g,isMultiple:c}),{t:f}=(0,o.useTranslation)(),v=f("dashboard_ptl.dsm.apps-raw-data-export.trigger-selector-label","Callback trigger"),y=f("dashboard_ptl.dsm.apps-raw-data-export.trigger-selector-label","Callback trigger"),w={selectAllText:f("dashboard_ptl.dsm.apps-raw-data-export.select-all","Select All"),unselectAllText:f("dashboard_ptl.dsm.apps-raw-data-export.unselect-all","Unselect All")};return(0,s.jsx)(a.ComboBox,{selectAll:w,multiple:c,options:m,onChange:t,disabled:d||b||x,placeholder:y,label:v,"data-testid":`${u}-trigger-selector`,"aria-label":v,value:l,multiLimit:c?6:void 0,optionsTooltipProps:n,invalid:p,infoText:h})}},43918:(e,t,l)=>{l.d(t,{k:()=>o});var a=l(80210);const o=(e,t)=>{let{signal:l}=t;return(0,a.T)(`/dashboard/api/apps/${e}/callbacks`,{signal:l})}},51301:(e,t,l)=>{l.d(t,{O:()=>d});var a=l(13607),o=l(13555),i=l(51934);const r="https://app.adjust.com/placeholders",s=async e=>{let{signal:t}=e;const l=await fetch(r,{signal:t});if(!l.ok)throw new i.ApiError({code:l.status,message:l.statusText,endpoint:r});return await l.json()};var n=l(81751);const d=e=>(0,a.useQuery)({queryKey:[n.k.Placeholders],queryFn:s,staleTime:1/0,select:t=>Object.entries(t).map((t=>{const[l,a]=t,{id:i,values:r}=a,s=Object.entries(r).map((t=>{const l=t[1],a=e.map((e=>{const t=(0,o.get)((0,o.camelCase)(e),l);let a=!1;return a="global"===e||(void 0!==t?t:(0,o.get)("event",l)),{trigger:e,enabled:a}})).filter((e=>e.enabled)).map((e=>e.trigger));return{label:l.placeholder,value:l.placeholder,description:l.content,supported:a,disabled:!a.length,disabledTooltipText:""}}));return{label:l,value:i,isDisabled:s.every((e=>e.disabled)),disabledTooltipText:"",items:s}}))})},53603:(e,t,l)=>{l.d(t,{a:()=>p});var a=l(83078),o=l(59413),i=l(95100),r=l.n(i),s=l(79590),n=l(57313),d=l(70579);const c=r().div`
  max-width: ${n.ck};
  margin: 0 auto;
`,u=r()(c)`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${a.Spacing30};
  padding-bottom: ${a.Spacing30};
`,p=e=>{let{title:t,onClose:l,testId:a,children:i,isLoading:r,footer:n}=e;const{t:p}=(0,o.useTranslation)(),h={dataTestId:a,kind:"wizard",layout:"large",title:{text:t},css:{position:"sticky"},actions:{buttonActions:{closeAction:{label:p("dashboard_ptl.dsm.close.button","Close"),onClick:l}}}},g=n&&(0,d.jsx)(c,{children:n});return(0,d.jsx)(s.B,{header:h,isLoading:r,footer:g,children:(0,d.jsx)(u,{children:i})})}},68796:(e,t,l)=>{l.d(t,{v:()=>i});var a=l(12485),o=l(70579);const i=e=>{let{tooltip:t,disabled:l=!1,...i}=e;return(0,o.jsx)(a.Tooltip,{delay:!0,content:t,children:(0,o.jsx)(a.IconButton,{disabled:l,...i})})}},87916:(e,t,l)=>{l.d(t,{m:()=>d});var a=l(50318),o=l(13555),i=l(59413),r=l(28519),s=l(9460),n=l(70579);const d=e=>{let{appToken:t,selectedIds:l,isMultiple:d=!1}=e;const{data:c=[],isLoading:u,isFetching:p}=(0,r.b)(t),{t:h}=(0,i.useTranslation)(),g=(0,a.useMemo)((()=>({global:{options:[]},notCustom:{label:h("dashboard_ptl.dsm.apps-raw-data-export.activity-label","Activity"),options:[]},custom:{label:h("dashboard_ptl.dsm.apps-raw-data-export.events-label","Events"),options:[]}})),[h]),m=e=>{let{url:t,key:l}=e;return t?h("dashboard_ptl.dsm.trigger-option.already-selected-tooltip","Trigger already selected."):l===s.h.Global?(0,n.jsxs)(i.Trans,{i18nKey:"dashboard_ptl.dsm.apps-raw-data-export.global-option-tooltip",children:["Use a global callback to view all user activities.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," Global callbacks don't include the following activities",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Ad revenue",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"SAN clicks",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"SAN impressions",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"SKAN installs",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"SKAN events",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," You'll need to set up single activity callbacks to view these activities. "]}):null},b=c.reduce(((e,t)=>{let l,{id:a,custom:o,name:i,url:r,token:n}=t;if(a===s.h.Global){if(d)return e;l=s.h.Global}else l=o?s.h.Custom:s.h.NotCustom;const c={id:a,url:r,token:n,custom:o,value:a,label:i,isDisabled:!d&&!!r,tooltipText:m({url:r,key:l})};return{...e,[l]:{...e[l],options:[...e[l].options,c]}}}),g),x=(0,a.useMemo)((()=>Object.values(b)),[b])||[],f=x.flatMap((e=>e.options));return{options:x,selectedOptions:(0,a.useMemo)((()=>Array.isArray(l)?(0,o.isEmpty)(l)||(0,o.isEmpty)(f)?[]:f.filter((e=>l.includes(e.id)||l.includes(e.token))):(0,o.find)({value:l},f)),[l,f]),isLoading:u,isFetching:p}}}}]);
//# debugId=ae084332-2bef-504b-b6d8-98e9b04ba3b5
