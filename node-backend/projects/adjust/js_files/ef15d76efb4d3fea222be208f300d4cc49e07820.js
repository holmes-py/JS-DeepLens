!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="3bbe4e38-398f-4065-8b8f-dff292736c25",e._sentryDebugIdIdentifier="sentry-dbid-3bbe4e38-398f-4065-8b8f-dff292736c25")}catch(e){}}();var _sentryModuleMetadataGlobal="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_sentryModuleMetadataGlobal._sentryModuleMetadata=_sentryModuleMetadataGlobal._sentryModuleMetadata||{},_sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack]=Object.assign({},_sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack],{team:"dashboard",release:"e48b7fe89fb597d5069e52037b28c2d6a16b9c16"});var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"e48b7fe89fb597d5069e52037b28c2d6a16b9c16"},(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[253],{576:(e,t,l)=>{l.d(t,{d:()=>h,m:()=>m});var a=l(50318),i=l(12485),n=l(83078),o=l(59413),r=l(95100),s=l.n(r),d=l(88596),c=l(70579);const u=s().div``,p=s().div`
  display: flex;
  align-items: center;
  width: 100%;
  white-space: nowrap;
`,m=e=>{let{selectedItems:t,itemsLength:l,t:a,formatValue:i}=e;const n=t.length;if(l===n||0===n)return a("dash_exp.label.all","All");if(1===n&&t[0]){var o;const[e]=t;return null!==(o=null===i||void 0===i?void 0:i(e))&&void 0!==o?o:e.label}return`${n} ${a("dash_exp.label.selected","selected")}`},h=e=>{let{label:t,items:l,selectedItems:r,onApply:s,renderItem:h,searchPredicate:f,sortPredicate:b,formatValue:g,itemSize:v,size:x,isDefaultSelection:_,multiple:y=!0,disabled:j,menuSize:C="small",...$}=e;const{t:S}=(0,o.useTranslation)(),w=(0,a.useCallback)((e=>h?h(e):e.label),[h]),F=l.length,k=(0,a.useCallback)((()=>{const e=r.length,l=F===e||0===e,a=m({selectedItems:r,itemsLength:F,formatValue:g,t:S});return(0,c.jsxs)(p,{children:[(0,c.jsx)("span",{children:t}),(0,c.jsx)(i.Badge,{color:l||_?"neutral":"primary",label:a,css:{marginLeft:n.Spacing10}})]})}),[g,_,F,t,r,S]);return(0,c.jsx)(u,{...$,children:(0,c.jsx)(d.F,{multiple:y,disableSort:!0,showResetButton:!0,itemSize:v,name:t,"aria-label":t,items:l,selectedItems:r,renderItem:w,searchPredicate:f,sortPredicate:b,onApply:s,renderValue:k,size:x,disabled:j,menuSize:C})})}},7305:(e,t,l)=>{l.d(t,{r:()=>i});var a=l(13555);const i=e=>(0,a.flow)((0,a.map)((t=>{var l;return{...t,order:null!==(l=e[t.filter_param])&&void 0!==l?l:t.order}})),(e=>(0,a.orderBy)(["order"],["desc"],e)))},10167:(e,t,l)=>{l.d(t,{u:()=>j,M:()=>_});var a=l(50318),i=l(12485),n=l(83078),o=l(13555),r=l(24858),s=l(59413),d=l(95100),c=l.n(d);var u=l(63511),p=l(70579);const m=c().div`
  display: flex;
  flex-direction: column;
  flex-grow: ${e=>{let{shouldGrow:t}=e;return t?1:void 0}};
`,h=c().p`
  font-size: ${n.TypeScale1FontSize};
  line-height: ${n.Spacing20};
  color: ${n.ColorNeutral100};
  font-weight: ${n.FontWeightMedium};
  margin-bottom: ${n.Spacing5};
`,f=e=>{let{label:t,children:l,shouldGrow:a}=e;return(0,p.jsxs)(m,{shouldGrow:a,children:[(0,p.jsx)(h,{children:t}),l]})},b="FORM_FIELD_NAME",g=c().div`
  margin-top: ${n.Spacing20};
`,v=c().div`
  padding: ${n.Spacing10} 0;
  margin-top: ${n.Spacing15};
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${n.ColorNeutral40};
  position: sticky;
  bottom: 0;
  background: ${n.ColorWhite};
`,x=c().div`
  display: flex;
  gap: ${n.Spacing10};
  align-items: flex-end;
  justify-content: space-between;
  padding: ${n.Spacing10};
  background-color: ${n.ColorNeutral5};
  border: 1px solid ${n.ColorNeutral20};
  border-radius: ${n.BorderRadiusLarge};
  margin-top: ${n.Spacing10};
  margin-bottom: ${n.Spacing10};
`;let _=function(e){return e.Dimension="dimension",e.NumericMetric="numeric-metric",e.PercentageMetric="percentage-metric",e.AssistingNetworks="assisting-networks",e}({});const y=c().div`
  padding: 24px 24px 0 24px;
`,j=(0,a.memo)((e=>{var t,l;let{header:n,values:d=[],filterConditionOptions:c,dimensionOptions:m,columnValuesByDimension:h,filterType:j,validate:C,onApply:$,columnIds:S,buttonLabel:w,networksOptions:F}=e;const{t:k}=(0,s.useTranslation)(),T=S.length>1,P=null!==(t=null===(l=c.find((e=>{let{isDefault:t}=e;return t})))||void 0===l?void 0:l.value)&&void 0!==t?t:"",I=(0,a.useMemo)((()=>{var e;return[{columnName:T?"":null!==(e=S[0])&&void 0!==e?e:"",filterCondition:P,inputValue:""}]}),[S,P,T]),D=(0,a.useMemo)((()=>(0,o.isEmpty)(d)?I:d),[I,d]),{handleSubmit:O,control:M,reset:A,clearErrors:N,watch:R}=(0,r.mN)({defaultValues:{[b]:D},mode:"onBlur"}),{fields:B,append:z,remove:E}=(0,r.jz)({control:M,name:b}),L=(0,a.useCallback)((()=>z(I)),[z,I]),V=(0,a.useCallback)((()=>{$([]),A({[b]:I})}),[I,$,A]);return(0,p.jsx)(y,{children:(0,p.jsxs)("form",{onSubmit:O((e=>{let{[b]:t}=e;return $(t)})),children:[n,(0,p.jsx)(g,{children:B.map(((e,t)=>{let{id:l}=e;return(0,p.jsxs)(x,{children:[T&&(0,p.jsx)(f,{shouldGrow:!0,label:k("dash_exp.label.dimension","Dimension"),children:(0,p.jsx)(r.xI,{control:M,name:`${b}.${t}.columnName`,render:e=>{let{field:{onChange:l,value:a}}=e;const i=(0,o.find)({value:a},m);return(0,p.jsx)(u.a,{"aria-label":"select",onChange:e=>{l(e.value)},value:i,options:m,"data-testid":`combobox-columnName-${t}`,isSearchable:!1,invalid:!i})}})}),(0,p.jsx)(f,{shouldGrow:!0,label:k("dash_exp.label.condition","Condition"),children:(0,p.jsx)(r.xI,{control:M,name:`${b}.${t}.filterCondition`,render:e=>{let{field:{onChange:l,value:a}}=e;const i=(0,o.find)({value:a},c);return(0,p.jsx)(u.a,{"aria-label":"select",onChange:e=>{N(`${b}.${t}.inputValue`),l(e.value)},value:i,options:c,"data-testid":`combobox-condition-${t}`,isSearchable:!1})}})}),(0,p.jsx)(f,{shouldGrow:!0,label:k("dash_exp.label.value","Value"),children:(0,p.jsx)(r.xI,{control:M,name:`${b}.${t}.inputValue`,rules:{validate:C},render:e=>{let{field:{onChange:l,value:a,onBlur:n},fieldState:{error:r}}=e;const s=Boolean(r);if(j===_.Dimension){const e=((e,t)=>{var l;return e&&t?(null!==(l=t[e])&&void 0!==l?l:[]).map((e=>{const t=`${e}`;return{value:t,label:t}})):[]})(R(`${b}.${t}.columnName`),h);return(0,p.jsx)(u.a,{kind:"input","aria-label":"input-field","aria-labelledby":"input-field",placeholder:"",onBlur:n,onChange:e=>l(e.value),value:{value:a,label:a},invalid:s,options:e,autoFocus:0===t,"data-testid":`combobox-value-${t}`})}if(j===_.AssistingNetworks)return(0,p.jsx)(u.a,{options:F,placeholder:k("dash_exp.label.select","Select"),onChange:e=>{l(e.value)},value:{value:a,label:a}});const d=(0,o.endsWith)("%",a)?(0,o.trimCharsEnd)("%",a):a,c=j===_.PercentageMetric?"%":"";return(0,p.jsx)(i.Input,{"aria-label":"input-field","aria-labelledby":"input-field","data-testid":`combobox-value-${t}`,placeholder:"",value:d,type:"number",onChange:e=>{const{value:t}=e.target;l(t)},onBlur:n,invalid:s,autoFocus:0===t,suffix:c})}})}),(0,p.jsx)(i.IconButton,{size:"medium",iconName:"Trash","aria-label":"Trash",onClick:()=>E(t),"data-testid":`dash_exp-column_filter_delete_btn_${t}`})]},l)}))}),(0,p.jsx)(i.Button,{onClick:L,label:null!==w&&void 0!==w?w:k("dash_exp.add.condition.button","Add"),iconName:"Plus",size:"small","data-testid":"dash_exp-column_filter_add_btn"}),(0,p.jsxs)(v,{children:[(0,p.jsx)(i.Button,{onClick:V,label:k("dash_exp.action.reset","Reset"),kind:"tertiary","data-testid":"dash_exp-column_filter_reset_btn"}),(0,p.jsx)(i.Button,{label:k("dash_exp.apply.button","Apply"),kind:"primary",type:"submit","data-testid":"dash_exp-column_filter_apply_btn"})]})]})})}))},10753:(e,t,l)=>{l.d(t,{Hl:()=>x,Hr:()=>_,mJ:()=>b});var a=l(50318),i=l(13555),n=l(87910),o=l(44077),r=l(72243),s=l(27901),d=l(55943),c=l(13420),u=l(66291),p=l(55779),m=l(7305),h=l(56369);const f=[d.r,"overviews","sort","coloring_mode","format_dates","readable_names","full_data"],b=(e,t)=>{const l=[...e.map((e=>{let{filter_param:t}=e;return t})),p.ln.Drilldown,p.ln.PivotIndex,p.ln.DrilldownPath];return(0,i.keys)((0,i.omitBy)(i.isEmpty,t)).filter((e=>!(0,i.overSome)([h.ms,o.Lo,r.SF,(0,s._D)([...l,...f])])(e)))},g=1e3,v={[p.ln.DatePeriod]:g,[p.ln.PeriodComparison]:999,[p.ln.App]:1001,[p.ln.AdRevenueSources]:-1},x=function(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return(0,i.flow)((0,m.r)(v),(0,i.filter)((t=>{let{filter_param:a}=t;return e.includes(a)&&!l.includes(a)})))(t)},_=e=>{let{globalFilters:t,shouldRemoveOnReset:l,overrideParams:o}=e;const{allGlobalFiltersParams:r}=(0,n.y)(),s=(0,c.z)(),d=(0,u.E)();return(0,a.useMemo)((()=>{const e=r.reduce(((e,t)=>({...e,[t]:l?void 0:(null===d||void 0===d?void 0:d[t])||[]})),{});return{...t,...e,...o,...(0,i.isEmpty)(s)?{}:{[p.ln.App]:s}}}),[r,s,d,t,o,l])}},13420:(e,t,l)=>{l.d(t,{z:()=>n});var a=l(50318),i=l(25599);const n=()=>{const{config:e}=(0,i.E)();return(0,a.useMemo)((()=>(null===e||void 0===e?void 0:e.default_apps)||[]),[e])}},13826:(e,t,l)=>{l.d(t,{J:()=>s});var a=l(50318),i=l(16484),n=l(13555);const o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t=>{let{id:l,name:a,short_name:i}=t;const n=i?a:"";return{value:l,label:i||a,isDisabled:e.includes(l),tooltipText:n}}};var r=l(70579);const s=e=>{let{ariaLabel:t,disabled:l,placeholder:s,selectedOptionId:d,filterOptions:c,onChange:u,disabledOptionIds:p=[],"data-testid":m,label:h}=e;const f=((e,t)=>(0,a.useMemo)((()=>(0,n.isArray)(e)?e.map(o(t)):(0,n.flow)(n.values,(0,n.map)((e=>({value:"",label:"",options:e.map(o(t))}))))(e)),[t,e]))(c,(0,a.useMemo)((()=>p.filter((e=>e!==d))),[p,d]));return(0,r.jsx)(i.l6,{label:h,options:f,disabled:l,placeholder:s,value:d,onChange:u,"data-testid":m,ariaLabel:t})}},14870:(e,t,l)=>{l.d(t,{BQ:()=>o,G5:()=>i,M4:()=>c,M9:()=>r,NR:()=>d,O5:()=>s,R$:()=>p,U_:()=>m,oF:()=>u,rv:()=>n,sK:()=>a});const a=5,i=10,n=1e3,o=4,r=9999,s=99999,d=i-1,c=Math.max(d,o)+1,u=1e4,p=10,m=10},15236:(e,t,l)=>{l.d(t,{a:()=>u});var a=l(50318),i=l(12485),n=l(83078),o=l(59413),r=l(15266),s=l(70579);const d={fontWeight:n.FontWeightNormal},c={maxHeight:"401px"},u=e=>{let{"data-testid":t,children:l}=e;const{t:n}=(0,o.useTranslation)(),[u,p]=(0,a.useState)(!1),m=(0,a.useCallback)((()=>{(0,r.g)("page_filter_controls")}),[]);return(0,s.jsx)(i.PopOver,{open:u,setOpen:p,popOverStyle:c,content:l((()=>p(!1))),children:(0,s.jsx)(i.Button,{iconName:"Sliders",iconAlignment:"left",label:n("dash_exp.report_data_configuration_switcher","Data configuration"),style:d,kind:"tertiary",onClick:m,"data-testid":t})})}},16133:(e,t,l)=>{l.d(t,{e:()=>i});var a=l(13555);const i=(e,t,l)=>navigator.clipboard.writeText(e).then(t).catch((e=>{(0,a.isString)(e)&&l(new Error(e)),(0,a.isError)(e)&&l(e)}))},16484:(e,t,l)=>{l.d(t,{l6:()=>d});var a=l(50318),i=l(12485),n=l(13555),o=l(59413),r=l(63511),s=l(70579);const d=e=>{let{label:t,options:l,onChange:d,placeholder:c,disabled:u=!1,value:p,ariaLabel:m,zIndex:h,"data-testid":f}=e;const{t:b}=(0,o.useTranslation)(),g=b("dash_exp.select.one_option_available","This is the only available filter for your setup"),{isDisabled:v,selectedOption:x}=(0,a.useMemo)((()=>{const e=(e=>{var t;return Boolean(null===(t=e[0])||void 0===t?void 0:t.options)})(l)?(0,n.flatMap)((e=>{let{options:t}=e;return t||[]}),l):l;return{isDisabled:e.length<=1||u,selectedOption:(0,n.find)({value:p},e)}}),[u,l,p]);return(0,s.jsx)(i.Tooltip,{display:v,content:g,children:(0,s.jsx)("span",{"data-testid":"combobox-wrapper-id",children:(0,s.jsx)(r.a,{label:t,placeholder:c,onChange:e=>d(e.value),disabled:v,options:l,value:x,"data-testid":f,css:{minWidth:"130px",zIndex:h},blockScroll:!0,"aria-label":m,optionsMinWidth:"max-content"})})})}},19442:(e,t,l)=>{l.d(t,{S:()=>i});var a=l(13555);const i=(0,a.curry)(((e,t)=>t?(0,a.flow)((0,a.pick)(e||[]),(e=>(0,a.values)(e)),a.flatten,a.compact)(t):[]))},22476:(e,t,l)=>{l.d(t,{j:()=>o});var a=l(39474),i=l(39647),n=l(70579);const o=e=>{let{title:t,style:l,...o}=e;return(0,n.jsx)(i.q,{title:t,style:l,requestStatus:o.status,hasRedirectTotalsButton:!1,children:(0,n.jsx)(a._,{...o})})}},24224:(e,t,l)=>{l.d(t,{X:()=>f,e:()=>p});var a=l(50318),i=l(12485),n=l(83078),o=l(13555),r=l(95100),s=l.n(r),d=l(31883),c=l(70579);const u=s().div`
  display: inline-block;
  width: ${e=>e.width};
  color: ${e=>e.color};
  margin: ${e=>{var t;return null!==(t=e.margin)&&void 0!==t?t:`0 ${n.Spacing10}`}};
  padding-right: ${e=>{var t;return null!==(t=e.paddingRight)&&void 0!==t?t:n.Spacing10}};
  font-size: ${n.TypeScale2FontSize};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: initial;
  flex-grow: ${e=>{var t;return null!==(t=e.flexGrow)&&void 0!==t?t:"unset"}};
`;let p=function(e){return e.Middle="middle",e.End="end",e}({});const m=s().div`
  display: ${e=>e.shouldUseGrid?"grid":"flex"};
  grid-auto-flow: column;
  align-items: center;
  width: 100%;
  position: relative;
`,h=s().div`
  margin-left: auto;
`,f=e=>{let{label:t,truncateLabel:l,tooltipOptions:n,labelColor:r,margin:s,paddingRight:p,icon:f,truncateThreshold:b=.85,shouldUseGrid:g=!1,truncateAt:v}=e;const[x,_]=(0,a.useState)(!1),[y,j]=(0,a.useState)(0),C=(0,a.useRef)(null),$=(0,a.useMemo)((()=>(0,o.debounce)(100)((e=>{let{width:t}=e;if(C.current&&t){C.current.style.width="auto";const e=C.current.offsetWidth>=Math.round(b*t);if(e&&(C.current.style.width=""),x&&e)return;j(t),_(e)}}))),[x,b]),{ref:S}=(0,d.A)({onResize:$});if(!l)return(0,c.jsx)(u,{margin:s,color:r,children:t});const w=x?`${Math.round(b*y)}px`:"auto";return(0,c.jsxs)(m,{ref:S,shouldUseGrid:g,children:[(0,c.jsx)(u,{ref:C,width:g?"auto":w,flexGrow:x?"1":"unset",color:r,margin:s,paddingRight:p,children:x?(0,c.jsx)(i.Truncate,{tooltipOptions:n,at:v,children:t}):t}),g?(0,c.jsx)(h,{children:f}):f]})}},25023:(e,t,l)=>{l.d(t,{y:()=>o});var a=l(37307),i=l(76079),n=l(35808);const o=async e=>{let{signal:t}=e;const l=`${i.oj}/events`,o=await(0,n.UT)(l,{signal:t}),r=await o.json();if(!o.ok)throw new a.ApiError({code:o.status,message:o.statusText,endpoint:new URL(l).pathname,errorTitle:null===r||void 0===r?void 0:r.error_code,errorDescription:null===r||void 0===r?void 0:r.error_desc});return r}},27356:(e,t,l)=>{l.d(t,{n:()=>c});var a=l(50318),i=l(83078),n=l(37307),o=l(59413),r=l(92432),s=l(576),d=l(70579);const c=(0,a.memo)((e=>{var t;const{t:l}=(0,o.useTranslation)(),c=(0,a.useCallback)((t=>{let{label:l,default_store_app_id:a,id:i,platforms:o,isUnknownValue:s}=t;return(0,d.jsx)(r.F,{"data-testid":"apps-filter_item",name:l,platforms:o,id:a||i,isUnknownValue:s,highlightedIcons:e.isIosOnly?[n.Platform.Ios]:[],truncateLabel:!0})}),[e.isIosOnly]);return(0,d.jsx)(s.d,{...e,itemSize:parseInt(i.Spacing50,10),label:null!==(t=e.label)&&void 0!==t?t:l("dash_exp.globalFilters.appsFilter","Apps filter"),menuSize:"small",renderItem:c})}))},35142:(e,t,l)=>{l.d(t,{M:()=>n});var a=l(50318),i=l(59413);const n=()=>{const{t:e}=(0,i.useTranslation)(),t=(0,a.useMemo)((()=>({today:e("dash_exp.date_picker_label_today","Today"),yesterday:e("dash_exp.date_picker_label_yesterday","Yesterday"),"last-7-days":e("dash_exp.date_picker_label_last_7_days","Last 7 Days"),"last-14-days":e("dash_exp.date_picker_label_last_14_days","Last 14 Days"),"last-30-days":e("dash_exp.date_picker_label_last_30_days","Last 30 Days"),"last-3-months":e("dash_exp.date_picker_label_last_3_months","Last 3 Months"),custom:e("dash_exp.date_picker_label_last_custom","Custom"),"last-week":e("dash_exp.date_picker_label_last_week","Last Week"),"this-week":e("dash_exp.date_picker_label_this_week","This Week"),"last-month":e("dash_exp.date_picker_label_last_month","Last Month"),"this-month":e("dash_exp.date_picker_label_this_month","This Month"),"clear-button":e("dash_exp.cancel.button","Cancel"),"apply-button":e("dash_exp.apply.button","Apply"),"rolling-period":e("rolling-period","Rolling period"),rolling:e("rolling","Rolling"),static:e("static","Static"),"rolling-period-description":e("rolling-period-description","As the calendar changes, the dates are updated"),"static-dates":e("static-dates","Static dates"),"static-dates-description":e("static-dates-description","The dates are fixed.")})),[e]);return(0,a.useCallback)((e=>t[e]||""),[t])}},39647:(e,t,l)=>{l.d(t,{q:()=>M});var a=l(50318),i=l(12485),n=l(83078),o=l(13555),r=l(59413),s=l(95100),d=l.n(s),c=l(62462),u=l(91969),p=l(77567),m=l(91198);const h="index",f="dimensions";var b=l(59669),g=l(57271),v=l(70579);const x=d()(p.Link)`
  pointer-events: ${e=>{let{disabled:t}=e;return t?"none":void 0}};
`,_=e=>{let{queryParams:t,disabled:l=!1,widgetId:a}=e;const{t:i}=(0,r.useTranslation)(),n=(e=>{const t=new URLSearchParams(e);if(t.has(h)){const e=t.get(h).split(","),l=t.get(f).split(","),a=(0,o.uniq)([...e,...l]);t.set(f,a.join(",")),t.delete(h)}return t.toString()})(t),s=g.p9,d=i("dash_exp.open_as_report.tooltip","Open as report");return(0,v.jsx)(x,{to:`${s}?${n}`,disabled:l,target:"_blank",rel:"noopener noreferrer",children:(0,v.jsx)(m.v,{iconName:"TableExternal","data-testid":(0,b.m)("redirect_totals_icon_button",a),"aria-label":"open as report",tooltip:d,disabled:l})})};var y=l(61243);const j={a:(0,v.jsx)("a",{}),b:(0,v.jsx)("b",{}),strong:(0,v.jsx)("strong",{}),i:(0,v.jsx)("i",{}),em:(0,v.jsx)("em",{}),br:(0,v.jsx)("br",{}),span:(0,v.jsx)("span",{})},C=d()(y.o)`
  margin-top: ${n.Spacing25};
  a {
    color: ${n.ColorPrimary70};
  }
`,$=e=>{let{info:t}=e;const{t:l}=(0,r.useTranslation)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(y.o,{weight:"bold",variant:"title",children:l("dash_exp.widget_hint_title","Help me understand")}),(0,v.jsx)(C,{color:"secondary",children:(0,v.jsx)(r.Trans,{i18nKey:t,defaults:t,components:j})})]})};var S=l(14870),w=l(55779),F=l(97569);const k={width:"100%"},T=d().div`
  display: flex;
  flex-direction: column;
  gap: ${n.Spacing30};
  width: 100%;
`,P=d().span`
  text-decoration: dashed underline;
  text-underline-offset: 5px;
  text-decoration-color: ${n.ColorNeutral60};
`,I=e=>{let{children:t,href:l}=e;const{t:a}=(0,r.useTranslation)();return(0,v.jsx)(i.Tooltip,{content:a(l||""),zIndex:S.sK,children:(0,v.jsx)(P,{children:t})})},D=e=>{let{title:t}=e;return(0,v.jsx)(v.Fragment,{children:(0,o.isString)(t)?(0,v.jsx)(r.Trans,{i18nKey:t,defaults:t,components:{a:(0,v.jsx)(I,{})}}):t})},O=(e,t)=>{var l;let{style:n={},title:o,children:s,totalsReportQueryParams:d="",actions:p,requestStatus:m,widgetId:h,dataWarnings:f,info:g,description:x,hasRedirectTotalsButton:y=!0,...j}=e;const C=(0,a.useMemo)((()=>{const e=new URLSearchParams(d);return e.delete(w.ln.DataRowsLimit),e.get(w.ln.ColoringMode)!==w.iP.column&&e.delete(w.ln.ColoringMode),e.delete(w.ln.ExcludeColoring),e.toString()}),[d]),{isSidebarOpen:S,setIsSidebarOpen:P,sidebarTrigger:I,sidebarContent:O}=((e,t)=>{const[l,n]=(0,a.useState)(!1);return{isSidebarOpen:l,setIsSidebarOpen:n,sidebarTrigger:e&&(0,v.jsx)(i.IconButton,{"data-testid":(0,b.m)("info_button",t),iconName:"Info","aria-label":"Info",onClick:()=>n(!l)},"info"),sidebarContent:e&&(0,v.jsx)($,{info:e})}})(g,h),{t:M}=(0,r.useTranslation)(),A=(0,a.useMemo)((()=>{const e=[];return y&&e.push((0,v.jsx)(_,{queryParams:C,disabled:m!==c.I.Ready||!C,widgetId:h},"RedirectTotalsButton")),p&&e.unshift(...p),I&&e.push(I),e}),[p,y,C,m,I,h]),N=null!==(l=n.height)&&void 0!==l?l:F.pV;return(0,v.jsx)(i.Tile,{ref:t,"data-testid":h,...j,title:(0,v.jsx)(D,{title:o}),sidebar:{content:O,isOpen:S,onClosed:()=>P(!1),closeButtonLabel:M("dash_exp.action.close","Close"),onSecondaryClick:()=>{}},description:x,customIcon:(0,v.jsx)(u.Z,{dataWarnings:f}),iconPosition:"right",css:{width:"100%",maxWidth:"100%"},actions:A,children:(0,v.jsx)(T,{style:{...k,height:N},children:s})})},M=(0,a.forwardRef)(O)},41186:(e,t,l)=>{l.d(t,{t:()=>r});var a=l(69556),i=l(57453),n=l(66291),o=l(55779);const r=()=>{var e;const t=null===(e=(0,n.E)()[o.ln.TimezoneOffset])||void 0===e?void 0:e[0],l=(0,a.s)(o.ln.TimezoneOffset),r=l?(0,i.k)(l):l;return null!==r&&void 0!==r?r:t}},43624:(e,t,l)=>{l.d(t,{_8:()=>o,gW:()=>s,ol:()=>r});var a=l(50318),i=l(13555),n=l(59413);const o=()=>{const{t:e}=(0,n.useTranslation)();return(0,a.useMemo)((()=>({id:"",name:` ${e("dash_exp.empty_option","None")}`})),[e])},r="",s=e=>!(0,i.isArray)(e)&&(null===e||void 0===e?void 0:e.id)===r},44794:(e,t,l)=>{l.d(t,{a:()=>i});var a=l(35808);const i=function(e){let{headers:t={},...l}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,a.UT)(e,{method:"PATCH",headers:{"content-type":"application/json",...t},...l})}},45044:(e,t,l)=>{l.d(t,{u:()=>k,F:()=>z});var a=l(50318),i=l(12485),n=l(83078),o=l(13555),r=l(59413),s=l(95100),d=l.n(s),c=l(61662),u=l(66981),p=l(58756),m=l(67358),h=l(79630),f=l(56997),b=l(12050),g=l(58704),v=l(70579);const x=(e,t)=>{let[l,a]=t;const i=(0,c.c)(a,l);return[e,(0,u.f)(e,i)]},_=d().div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-height: fit-content;
`,y=d().div`
  display: flex;
  justify-content: flex-end;
  padding: ${n.Spacing10};
  border-top: ${n.PopOverBorder};
  align-items: center;
  gap: ${n.Spacing15};
`,j=d().label`
  font-size: ${n.TypeScale1FontSize};
  line-height: ${n.TypeScale1LetterSpacing};
  letter-spacing: ${n.TypeScale1LetterSpacing};
  color: ${n.ColorNeutral70};
  margin-right: ${n.Spacing10};
`,C=e=>{let{value:t,onCancel:l,onApply:n,onChange:o,datePeriodToCompare:s,utcOffset:d}=e;const{t:c}=(0,r.useTranslation)(),{data:u}=(0,f.V)(),[C]=(0,a.useMemo)((()=>t?(0,h.sb)(s,t):[]),[s,t]),$=(0,p.e)(s[0],1),S=C&&$&&(0,m.Y)($,C)?$:C,w=S?x(S,s):void 0,[F,T]=(0,a.useState)(w),P=(0,a.useCallback)((()=>{if(!F)return;const e=(0,h.JT)(s[0],F[0]);n(e)}),[F,s,n]),I=(0,a.useCallback)((e=>{let{startDate:t}=e;if(t){const e=x(t,s);T(e),null===o||void 0===o||o(e)}}),[s,o]),D=!F,O=(0,a.useMemo)((()=>F?c("dash_exp.compare_to_filter.custom_comparison.comparison_dates",{defaultValue:"Comparison to {{datePeriodString}}",datePeriodString:(0,g.z)(F[0],F[1])}):c("dash_exp.compare_to_filter.custom_comparison.choose_days_to_compare","Choose dates to compare")),[F,c]);return(0,v.jsxs)(_,{"data-testid":`${k}custom_period_picker-container`,children:[(0,v.jsx)(i.DateRangePicker,{startDate:null===F||void 0===F?void 0:F[0],endDate:null===F||void 0===F?void 0:F[1],locale:u,onStateChange:I,maxDate:$,currentMonthPosition:"right",referenceStartDate:s[0],referenceEndDate:s[1],currentDate:(0,b.ms)(d)}),(0,v.jsxs)(y,{children:[(0,v.jsx)(j,{children:O}),(0,v.jsx)(i.Button,{label:c("dash_exp.cancel.button","Cancel"),onClick:l,"data-testid":`${k}custom_period_picker-cancel_button`}),(0,v.jsx)(i.Button,{kind:"primary",disabled:D,onClick:P,label:c("dash_exp.apply.button","Apply"),"data-testid":`${k}custom_period_picker-apply_button`})]})]})},$=e=>{let{onApply:t,onClose:l,isOpen:o,children:r,utcOffset:s,...d}=e;const c=(0,a.useCallback)((()=>{l()}),[l]),u=(0,a.useCallback)((e=>{t(e),l()}),[l,t]);return(0,v.jsx)(i.PopOver,{isFullWidthTrigger:!0,open:o,setOpen:e=>!e&&l(),popOverStyle:{zIndex:n.StackingLayoutSticky,maxHeight:"fit-content"},content:(0,v.jsx)(C,{onCancel:c,onApply:u,utcOffset:s,...d}),children:(0,v.jsx)(v.Fragment,{children:r})})};var S=l(53371),w=l(61243),F=l(15266);const k="dash_exp-period_over_period-",T=d().div`
  position: relative;
`,P=d().div`
  padding: ${n.Spacing5} 0;
`,I=d().button`
  display: flex;
  background: ${n.ColorWhite};
  border-radius: ${n.BorderRadiusMedium};
  border: 1px solid ${n.ColorNeutral40};
  height: ${n.Spacing40};
  width: 100%;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  &:hover {
    border: 1px solid ${n.ColorNeutral60};
    box-shadow: ${n.InputRaisedHoverBoxShadow};
  }
  &:focus {
    border: 1px solid ${n.ColorPrimary80};
    box-shadow: ${n.InputRaisedFocusBoxShadow};
  }
`,D=d()(w.o)`
  margin: 0 ${n.Spacing10} 0 ${n.Spacing15};
  color: black;
`,O=d()(w.o)`
  display: flex;
  align-items: center;
  margin-right: ${n.Spacing20};
`,M=d()(w.o)`
  color: ${n.ColorNeutral70};
`,A=d().div`
  background: ${e=>{let{isActive:t}=e;return t?n.ColorPrimary80:n.ColorWhite}};
  padding: ${n.Spacing5} ${n.Spacing15} ${n.Spacing5} ${n.Spacing15};
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  :hover {
    background: ${e=>{let{isActive:t}=e;return t?void 0:n.ColorNeutral20}};
  }

  ${M} {
    color: ${e=>{let{isActive:t}=e;return t?n.ColorWhite:void 0}};
  }
  ${O} {
    color: ${e=>{let{isActive:t}=e;return t?n.ColorWhite:void 0}};
  }
`,N={margin:`0 ${n.Spacing15} 0 0`},R=d().div`
  margin-left: auto;
  padding: 0 ${n.Spacing10};
`,B=()=>(0,F.g)("clicked_compare_filter"),z=e=>{let{currentDatePeriod:t,value:l,utcOffset:s,options:d=[],onChange:c,"data-testid":u}=e;const{t:p}=(0,r.useTranslation)(),[m,f]=(0,a.useState)(!1),b=(0,a.useCallback)((()=>{f(!1)}),[]),[g,x]=(0,a.useState)(!1),_=(0,a.useCallback)((e=>{c(null===e||void 0===e?void 0:e.id),b()}),[c,b]),y=(0,a.useCallback)((()=>{_(null)}),[_]),j=(0,a.useCallback)((()=>{b(),x(!0)}),[b]),C=p("dash_exp.compare_to_filter.title","Compare to"),w=p("dash_exp.compare_to_filter.no_comparison","No comparison"),F=!(0,o.isNil)(l),z=F&&!d.some((e=>{let{id:t}=e;return t===l})),E=l?(0,h.Yi)(t,{dateOffset:l}):w,L=F?"primary":"neutral";return(0,v.jsx)($,{isOpen:g,datePeriodToCompare:t,value:l,utcOffset:s,onApply:c,onClose:()=>x(!1),children:(0,v.jsx)(T,{"data-testid":u,onClick:B,children:(0,v.jsx)(i.PopOver,{isFullWidthTrigger:!0,open:m,setOpen:f,content:(0,v.jsxs)(P,{children:[d.map((e=>{const a=e.id===l,n=(0,h.Yi)(t,{dateOffset:e.id});return(0,v.jsxs)(A,{onClick:()=>{_(e)},isActive:a,"data-testid":`${k}option_${e.id}`,children:[(0,v.jsxs)(O,{children:[(0,v.jsx)(i.Icon,{size:"small",name:"Check",color:"ColorWhite",css:{...N,visibility:""+(a?"visible":"hidden")}}),(0,v.jsx)("span",{children:e.name})]}),(0,v.jsx)(M,{children:n})]},e.id)})),(0,v.jsxs)(A,{onClick:j,isActive:z,"data-testid":`${k}option_custom_period`,style:{width:"100%"},children:[(0,v.jsxs)(O,{children:[(0,v.jsx)(i.Icon,{size:"small",name:"Check",color:"ColorWhite",css:{...N,visibility:""+(z?"visible":"hidden")}}),(0,v.jsx)("span",{children:p("dash_exp.compare_to_filter.custom_comparison","Custom date")})]}),(0,v.jsx)(M,{children:(0,v.jsx)(i.Icon,{size:"small",name:"ChevronRight",color:z?"ColorWhite":"ColorNeutral70"})})]}),(0,v.jsx)(S.c,{}),(0,v.jsxs)(A,{onClick:y,isActive:!F,"data-testid":`${k}option_no_comparison`,children:[(0,v.jsxs)(O,{children:[(0,v.jsx)(i.Icon,{size:"small",name:"Check",color:"ColorWhite",css:{...N,visibility:""+(F?"hidden":"visible")}}),(0,v.jsx)("span",{children:w})]}),(0,v.jsx)(M,{children:" "})]})]}),children:(0,v.jsxs)(I,{onClick:()=>{f(!m)},children:[(0,v.jsx)(D,{children:C}),(0,v.jsx)(i.Badge,{label:E,color:L}),(0,v.jsx)(R,{children:(0,v.jsx)(i.Icon,{name:"ChevronDown",size:"small",color:n.ColorNeutral90})})]})})})})}},48221:(e,t,l)=>{l.d(t,{j:()=>i});var a=l(81576);const i=(e,t)=>(0,a.K)(e,{...t,method:"DELETE"})},48986:(e,t,l)=>{l.d(t,{d:()=>x});var a=l(50318),i=l(13555),n=l(95100),o=l.n(n),r=l(27356),s=l(576),d=l(69621),c=l(33866),u=l(55779);const p=e=>{let{name:t}=e;return t},m=e=>e.toUpperCase();var h=l(70579);const f=o().div`
  display: flex;
  align-items: center;
  width: 100%;
`,b=(e,t)=>{const l=e.label.toLowerCase().includes(t.toLowerCase()),a=e.id.toLowerCase()===t.toLowerCase();return l||a},g={[c.A.Countries]:b,[c.A.Apps]:b};const v={[c.A.Countries]:(e,t,l)=>{const a=l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");const i=new RegExp(`\\b${a}\\b`,"gi"),n=i.test(t.label)||i.test(t.id),o=i.test(e.label)||i.test(e.id);return Number(n)-Number(o)}},x=e=>{let{filterOptions:t=[],onChange:l,value:n,label:o,filterParam:c,filterName:b,"data-testid":x,isDefaultSelection:_,multiple:y,isIosOnly:j,disabled:C}=e;const $=c===u.ln.App,S=(0,a.useMemo)((()=>t.map(d.h)),[t]),w=(0,a.useMemo)((()=>n.map(d.h)),[n]),{itemFormat:F,valueFormat:k}=(T=c,(0,a.useMemo)((()=>T===u.ln.Country?{valueFormat:e=>{let{id:t}=e;return m(t)},itemFormat:e=>{let{id:t,name:l}=e;return`${l} (${m(t)})`}}:{valueFormat:p,itemFormat:p}),[T]));var T;const P=(0,a.useCallback)((e=>{const t=(0,i.intersectionBy)("id",e,S);l((0,i.map)((0,i.unset)(["label","value"]),t))}),[S,l]),I=(0,a.useCallback)((e=>{const t=F(e);return(0,h.jsx)(f,{children:(0,h.jsx)("span",{style:{flex:1,textAlign:"left"},children:t})})}),[F]),D=b?g[b]:void 0;if($)return(0,h.jsx)(r.n,{multiple:y,items:S,selectedItems:w,onApply:P,"data-testid":x,label:o,searchPredicate:D,isIosOnly:j});const O=b?v[b]:void 0;return(0,h.jsx)(s.d,{"data-testid":x,label:o,items:S,selectedItems:w,searchPredicate:D,sortPredicate:O,onApply:P,formatValue:k,renderItem:I,isDefaultSelection:_,disabled:C})}},53371:(e,t,l)=>{l.d(t,{c:()=>r});var a=l(83078),i=l(95100),n=l.n(i);const o=a.DividerSoftColor,r=n().div`
  width: 100%;
  height: 1px;
  background-color: ${e=>{let{color:t=o}=e;return t}};
`},55943:(e,t,l)=>{l.d(t,{c:()=>n,r:()=>i});var a=l(69556);const i="custom_dashboard_id",n=()=>{var e;return null!==(e=(0,a.s)(i))&&void 0!==e?e:""}},57210:(e,t,l)=>{l.d(t,{OI:()=>d,ud:()=>c});var a=l(50318),i=l(13555),n=l(59413),o=l(13826),r=l(96379),s=l(70579);const d=e=>1===(null===e||void 0===e?void 0:e.length)&&"ALL_AVAILABLE_DIMENSION_OPTIONS"===e[0],c=e=>{let{onSelect:t,selectedDimension:l,allowedOptions:c,customFilters:u,label:p,disabledOptionIds:m,"data-testid":h="dimensions_filter"}=e;const{data:f=[],isLoading:b}=(0,r.o)(c,u),g=(0,a.useMemo)((()=>d(c)?(0,i.groupBy)("section",f):f),[c,f]),{t:v}=(0,n.useTranslation)(),x=v("dash_exp.filters_dimensions_placeholder","Select Dimension");return(0,s.jsx)(o.J,{ariaLabel:"Dimensions",disabled:b,filterOptions:g,placeholder:x,selectedOptionId:l,onChange:t,"data-testid":h,label:p,disabledOptionIds:m})}},59669:(e,t,l)=>{l.d(t,{m:()=>i});var a=l(13555);const i=function(){for(var e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];return"dash_exp-"+(0,a.compact)(t).join("-")}},63511:(e,t,l)=>{l.d(t,{a:()=>s});var a=l(50318),i=l(12485),n=l(13555),o=l(59413),r=l(70579);const s=e=>{let{value:t,onChange:l,onBlur:s,...d}=e;const{t:c}=(0,o.useTranslation)(),u=(0,a.useCallback)((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];null===l||void 0===l||l(...t),null===s||void 0===s||s()}),[l,s]),p=(0,a.useMemo)((()=>(0,n.isUndefined)(t)?null:t),[t]);return(0,r.jsx)(i.ComboBox,{placeholder:`${c("dash_exp.label.select","Select")}...`,menuPlacement:"auto",value:p,onChange:u,onBlur:s,...d})}},68206:(e,t,l)=>{l.d(t,{FC:()=>j,U$:()=>$,iE:()=>_});var a=l(50318),i=l(12485),n=l(83078),o=l(13555),r=l(59413),s=l(95100),d=l.n(s),c=l(10167),u=l(61243),p=l(78837),m=l(55779),h=l(70579);const f=d().div`
  margin-left: auto;
  padding: 0 ${n.Spacing10};
`,b=d().p`
  font-size: ${n.Spacing15};
  color: ${n.ColorNeutral80};
`,g=d().div`
  position: relative;
`,v=d()(u.o)`
  margin: 0 ${n.Spacing10} 0 ${n.Spacing15};
  color: black;
`,x=d().button`
  display: flex;
  background: ${n.ColorWhite};
  border-radius: ${n.BorderRadiusMedium};
  border: 1px solid ${n.ColorNeutral40};
  height: ${n.Spacing40};
  width: 100%;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  &:hover {
    border: 1px solid ${n.ColorNeutral60};
    box-shadow: ${n.InputRaisedHoverBoxShadow};
  }
  &:focus {
    border: 1px solid ${n.ColorPrimary80};
    box-shadow: ${n.InputRaisedFocusBoxShadow};
  }
`,_=(e,t)=>0===t?e("dash_exp.label.all","All"):1===t?e("dash_exp.text_filters.value.label.singular.one","1 filter"):e("dash_exp.text_filters.value.singular",{amount:t,defaultValue:"{{amount}} filters"}),y=e=>"campaign_network"===e?(0,h.jsxs)(r.Trans,{i18nKey:"dash_exp.text_filters.campaign_name.",children:["Show campaigns which match ",(0,h.jsx)("strong",{children:"all"})," the following conditions"]}):(0,h.jsxs)(r.Trans,{i18nKey:"dash_exp.column_filter_header_text",children:["Show rows which match ",(0,h.jsx)("strong",{children:"all"})," the following conditions"]}),j=(e,t)=>Object.entries(e).filter((e=>{let[l]=e;return(0,p.qu)(t,l)})).flatMap((e=>{let[t,l=[]]=e;const a=(0,p.FB)(t),i=(0,p.Iz)(t);return l.map((e=>({filterCondition:i,inputValue:e,columnName:a})))})),C=e=>!(0,o.isEmpty)((0,o.trimEnd)(e)),$=e=>{let{label:t,setGlobalFilters:l,globalFilters:o,filterParamKey:s}=e;const d=(0,p.FB)(s),u=j(o,d),[$,S]=(0,a.useState)(!1),{t:w}=(0,r.useTranslation)(),F=u.length,k=_(w,F),T=(()=>{const{t:e}=(0,r.useTranslation)();return(0,a.useMemo)((()=>[{value:m.p.Contains,label:e("dash_exp.column_filter_text_contains","Contains")},{value:m.p.Exclude,label:e("dash_exp.column_filter_text_does_not_contains","Does not contain")},{value:m.p.In,label:e("dash_exp.column_filter_text_is_exactly","Matches exactly"),isDefault:!0}]),[e])})();return(0,h.jsx)(g,{children:(0,h.jsx)(i.PopOver,{isFullWidthTrigger:!0,content:(0,h.jsx)(c.u,{values:u,onApply:e=>{const t=(e=>e.reduce(((e,t)=>{var l;let{columnName:a,inputValue:i,filterCondition:n}=t;const o=(0,p.Q9)(a,n),r=null!==(l=e[o])&&void 0!==l?l:[];return{...e,[o]:[...r,i]}}),{}))(e),a={...(0,p.nR)(o,d),...t};null===l||void 0===l||l(a),S(!1)},columnIds:[d],"data-testid":"dash_exp-text_filter_anchor",filterConditionOptions:T,filterType:c.M.Dimension,validate:C,dimensionOptions:[],columnValuesByDimension:{},header:(0,h.jsx)(b,{children:y(d)}),buttonLabel:w("dash_exp.text_filters.add_btn.label","AND")}),open:$,setOpen:S,children:(0,h.jsxs)(x,{children:[(0,h.jsx)(v,{children:t}),(0,h.jsx)(i.Badge,{iconName:0===F?void 0:"FilterActive",color:0===F?"neutral":"primary",label:k}),(0,h.jsx)(f,{children:(0,h.jsx)(i.Icon,{name:"ChevronDown",size:"small",color:n.ColorNeutral90})})]})})})}},69621:(e,t,l)=>{l.d(t,{h:()=>a});const a=e=>({...e,label:e.name,value:e.id})},78282:(e,t,l)=>{l.d(t,{v:()=>h});var a=l(50318),i=l(42412),n=l(13555),o=l(87910),r=l(39861),s=l(78837),d=l(27581),c=l(25599),u=l(66291),p=l(56369),m=l(57421);const h=e=>{var t;const l=d.A.accountId||"",h=(0,m.j)(),{pageConfig:f}=(0,r.r)(),b=(null===f||void 0===f?void 0:f.id)||"",g=null!==(t=null===f||void 0===f?void 0:f.subgroup)&&void 0!==t?t:"",{data:{filters:v}={}}=(0,i.useQuery)({queryKey:[l,g],queryFn:()=>d.A.getAllFilters(g),enabled:!!l,initialData:()=>d.A.getAllFilters(g)}),x=(0,a.useCallback)((e=>{b&&e&&d.A.setPageFilters((0,n.remove)(p.ms,e),g),h.setQueryData([l,g],d.A.getAllFilters(g))}),[b,h,l,g]),{config:_}=(0,c.E)(),y=_&&g,{supportedGlobalFilters:j,checkIsTextFilter:C}=(0,o.y)(),$=(0,a.useMemo)((()=>{var e;return y&&_[g]&&(null===(e=_[g])||void 0===e?void 0:e.defaultFilters)||[]}),[y,_,g]),S=(0,a.useMemo)((()=>{var e;return g&&(null===_||void 0===_||null===(e=_[g])||void 0===e?void 0:e.globalFilters)||[]}),[_,g]),w=(0,u.E)();return{visibleFilters:(0,a.useMemo)((()=>{const t=(0,n.isEmpty)(v)?$:v,l=(0,n.pickBy)(((e,t)=>e&&!(0,n.isEqual)(e||[],(null===w||void 0===w?void 0:w[t])||[])),e),a=(0,n.keys)(l).map((e=>C(e)?(0,s.W3)(e):e));return(0,n.flow)((0,n.union)([...S,...a]),(0,n.intersection)(j))(t)}),[v,$,e,S,j,w,C]),defaultVisibleFilters:$,unremovableFilters:S,saveVisibleFilters:x}}},84148:(e,t,l)=>{l.d(t,{L:()=>_});var a=l(50318),i=l(13555),n=l(59413),o=l(95100),r=l.n(o),s=l(43624),d=l(55779);var c=l(45044);const u=e=>({id:e,name:(0,i.capitalize)(e),short_name:(0,i.capitalize)(e),isUnknownValue:!0});var p=l(12050),m=l(99163),h=l(48986),f=l(90508),b=l(68206),g=l(70579);const v=[d.ln.PeriodComparison],x=r().div`
  flex-shrink: 0;
`,_=(0,a.memo)((e=>{let{visibleFilters:t,globalFilters:l,filtersDefaultValues:a,filterParamKeyToOptions:o,additionalFilters:r=null,utcOffset:_,isIosOnly:y,areOptionsLoading:j,setGlobalFilters:C,dateForComparison:$=l[d.ln.DatePeriod],isStaticDateDisabled:S}=e;const{t:w}=(0,n.useTranslation)();return(0,g.jsxs)(g.Fragment,{children:[t.map((e=>{let{filter_param:t,options_name:n,label:r,component:F}=e;const k=null===n||void 0===n?void 0:n[0],T=l[t],P=(null!==T&&void 0!==T?T:[]).filter((e=>{var l,a;return!(null!==(l=null===o||void 0===o||null===(a=o[t])||void 0===a?void 0:a.map((e=>{let{id:t}=e;return t})))&&void 0!==l?l:[]).includes(e)})).map(u),I=[...!v.includes(t)?P:[],...(null===o||void 0===o?void 0:o[t])||[]],D=((e,t,l,a)=>n=>{const o=(0,i.isArray)(n),r=o&&a&&n.length===a.length;l===d.ln.AdjustAccountId&&(0,i.isEmpty)(n)?t({...e,[l]:(0,i.map)("id",a)}):r||null===n||(0,s.gW)(n)?t({...e,[l]:null}):t({...e,[l]:o?(0,i.map)("id",n):[n.id]})})(l,C,t,I),O=`dash_exp-page_filter_${k}`;let M=null;if("multiselect"===F){const e=I.filter((e=>{var l;return null===(l=a[t])||void 0===l?void 0:l.includes(e.id)})),l=T?I.filter((e=>T.includes(e.id))):e,n=w(r);M=(0,g.jsx)(h.d,{"data-testid":O,filterOptions:I,onChange:D,value:l,label:n,filterName:k,filterParam:t,isDefaultSelection:(0,i.isEqual)(l,e),isIosOnly:y,disabled:j},r)}if("select"===F||"radio"===F)if(t===d.ln.PeriodComparison){const e=null===T||void 0===T?void 0:T[0],[t,l]=(0,p.v5)($,_),a=e=>{if((0,i.isNil)(e))return void D(null);const t=I.find((t=>{let{id:l}=t;return l===e}))||{id:e,name:""};D(t)};M=(0,g.jsx)(x,{children:(0,g.jsx)(c.F,{"data-testid":O,options:I,value:e,onChange:a,currentDatePeriod:[(0,p.ic)(t),(0,p.ic)(l)],utcOffset:_})},r)}else{var A,N;const e=null===(A=a[t])||void 0===A||null===(N=A[0])||void 0===N?void 0:N.toString(),l=I.find((t=>t.id===(T?T[0]:e))),i=w(r);M=(0,g.jsx)(f.Z,{label:i,value:l,defaultValue:e,filterOptions:I,onChange:D,"data-testid":O,disabled:j},r)}if("daterangepicker"===F){const[e,t,l]=(0,p.v5)(T,_);M=(0,g.jsx)(x,{children:(0,g.jsx)(m.Z,{"data-testid":"dash_exp-page_filter_date",startDate:(0,p.ic)(e),endDate:(0,p.ic)(t),period:l,onApplyFilter:D,utcOffset:_,calendarType:(0,p.Tx)(T?T[0]:""),isStaticDateDisabled:S})},r)}return"text"===F&&(M=(0,g.jsx)(b.U$,{label:r,globalFilters:l,setGlobalFilters:C,filterParamKey:t},r)),M})),r]})}))},88596:(e,t,l)=>{l.d(t,{F:()=>r});var a=l(50318),i=l(12485),n=l(59413),o=l(70579);const r=e=>{const{t:t}=(0,n.useTranslation)(),l=(0,a.useMemo)((()=>({"none-selected-badge":t("dash_exp.none","None"),"apply-button":t("dash_exp.apply.button","Apply"),"reset-button":t("dash_exp.action.reset","Reset"),"select-all-default":t("dash_exp.label.select-all","Select all"),"select-all-searched":t("dash_exp.label.select-all-searched","Select all search results"),"search-input-placeholder":t("dash_exp.placeholder.search","Search"),"all-selected-badge-label":t("dash_exp.label.all","All"),"loading-message":t("dash_exp.label.loading-entries","Loading entries\u2026"),"not-found-message":t("dash_exp.label.nothing-found","Nothing found"),"some-selected-badge-label":t("dash_exp.label.selected","selected")})),[t]),r=(0,a.useCallback)((e=>l[e]),[l]);return(0,o.jsx)(i.FilterButton,{...e,getElementLabel:r,isFullWidthTrigger:!0})}},90508:(e,t,l)=>{l.d(t,{Z:()=>m});var a=l(50318),i=l(12485),n=l(83078),o=l(13555),r=l(88596),s=l(43624),d=l(70579);const c=e=>({label:(0,o.upperFirst)(e.name||e.short_name||""),value:e.id}),u={display:"flex",alignItems:"center"},p={marginLeft:n.Spacing10},m=e=>{let{label:t,value:l,defaultValue:n=s.ol,filterOptions:m=[],onChange:h,"data-testid":f,disabled:b}=e;const g=(0,s._8)(),v=(0,a.useMemo)((()=>l||g),[g,l]),x=(0,a.useMemo)((()=>n?m:[g,...m]),[n,g,m]),_=(0,a.useMemo)((()=>x.map(c)),[x]),y=(0,a.useCallback)((()=>(0,d.jsxs)("div",{style:u,children:[(0,d.jsx)("span",{children:t}),(0,d.jsx)(i.Badge,{color:n===v.id?"neutral":"primary",label:(0,o.upperFirst)(v.short_name||v.name||""),css:p})]})),[n,t,v]),j=(0,a.useMemo)((()=>[c(v)]),[v]),C=(0,a.useCallback)((e=>{let[t=c(g)]=e;return h({id:t.value,name:t.label})}),[g,h]),$=(0,a.useMemo)((()=>{const e=x.find((e=>e.id===n));return[c(e||g)]}),[x,g,n]);return(0,d.jsx)(r.F,{disableSort:!0,showResetButton:_.length>1,multiple:!1,name:t,items:_,defaultItems:$,renderValue:y,selectedItems:j,onApply:C,"aria-label":t,"data-testid":f,showSearch:_.length>5,disabled:b})}},91261:(e,t,l)=>{l.d(t,{B:()=>L});var a=l(50318),i=l(12485),n=l(83078),o=l(13555),r=l(59413),s=l(95100),d=l.n(s),c=l(61243),u=l(70579);const p=d().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 179px;
`,m=()=>{const{t:e}=(0,r.useTranslation)();return(0,u.jsxs)(p,{children:[(0,u.jsx)(i.Icon,{name:"Search",color:n.ColorNeutral80,css:{marginBottom:n.Spacing10}}),(0,u.jsx)(c.o,{color:"secondary",children:e("dash_exp.label.nothing-found","Nothing found")})]})};var h=l(87910),f=l(90019),b=l(78837),g=l(98722),v=l(66291),x=l(55779),_=l(7305),y=l(41186),j=l(27901),C=l(576),$=l(79630),S=l(12050),w=l(58704),F=l(69621),k=l(68206);const T=d().div`
  display: flex;
  align-items: center;
  font-size: ${n.TypeScale1FontSize};
  color: ${e=>{let{color:t}=e;return t}};
`,P=e=>{var t;let{dateForComparison:l,initialCheckedFilters:a,checkedFilters:i,defaultFiltersValues:s,globalFilters:d,filter:c,filterParamKeyToOptions:p}=e;const m=(0,y.t)(),h=c.filter_param,f=a.includes(h),g=i.includes(h),v=(null===s||void 0===s?void 0:s[h])||[],_=(0,o.isEmpty)(d[h])?v:null!==(t=d[h])&&void 0!==t?t:[],P=f&&!g?v:_,{t:I}=(0,r.useTranslation)(),D=(e=>{var t,l;let{dateForComparison:a,filter:i,filterParamKeyToOptions:n,displayedValue:o,t:r,globalFilters:s,utcOffset:d}=e;const c=n[i.filter_param]||[],u=c.filter((e=>{let{id:t}=e;return o.includes(t)}));if("multiselect"===i.component)return(0,C.m)({selectedItems:u.map(F.h),itemsLength:c.length,t:r});if("text"===i.component){const e=(0,b.FB)(i.filter_param),t=(0,k.FC)(s,e).length;return(0,k.iE)(r,t)}if(i.filter_param===x.ln.DatePeriod){const[e,t]=(0,S.v5)(o,d);return(0,w.z)((0,S.ic)(e),(0,S.ic)(t))}if(i.filter_param===x.ln.PeriodComparison){const[e,t]=(0,S.v5)(a,d),l=r("dash_exp.compare_to_filter.no_comparison","No comparison");return o[0]?(0,$.Yi)([(0,S.ic)(e),(0,S.ic)(t)],{dateOffset:o[0]}):l}var p,m;return"select"===i.component||"radio"===i.component?null!==(p=null===(m=u[0])||void 0===m?void 0:m.name)&&void 0!==p?p:r("dash_exp.empty_option","None"):u.length>1?`${u.length} ${r("dash_exp.label.selected","selected")}`:null!==(t=null===(l=u[0])||void 0===l?void 0:l.name)&&void 0!==t?t:o[0]})({dateForComparison:l,displayedValue:P,globalFilters:d,filterParamKeyToOptions:p,filter:c,t:I,utcOffset:m});let O=n.ColorNeutral70;const M=(0,j.dI)(_)&&!(0,o.isEqual)(_,v);return M&&(O=n.ColorPrimary80),f&&!g&&M&&(O=n.ColorWarning60),(0,u.jsx)(T,{color:O,children:D})},I={[x.ln.DatePeriod]:1e3,[x.ln.App]:999,[x.ln.AdRevenueSources]:-1},D={marginRight:n.Spacing15},O=d().div`
  width: 320px;
`,M=d().div`
  display: flex;
  justify-content: space-between;
  padding: ${n.Spacing10};
  border-top: 1px solid ${n.ColorNeutral20};
`,A=d().label`
  display: flex;
  align-items: center;
  height: 100%;
  min-height: 32px;
  padding: 0 ${n.Spacing5};
  word-break: break-all;
  background-color: transparent;
  font-size: ${n.TypeScale2FontSize};
  cursor: ${e=>{let{disabled:t}=e;return t?"not-allowed":"pointer"}};
  opacity: ${e=>{let{disabled:t}=e;return t?.5:1}};
  pointer-events: ${e=>{let{disabled:t}=e;return t?"none":"auto"}};
`,N=d().div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${n.Spacing15} 0 ${n.Spacing20};
  &:hover {
    background-color: ${n.ColorNeutral20};
  }
  cursor: ${e=>{let{disabled:t}=e;return t?"not-allowed":"pointer"}};
  opacity: ${e=>{let{disabled:t}=e;return t?.5:1}};
  pointer-events: ${e=>{let{disabled:t}=e;return t?"none":"auto"}};
`,R=d().div`
  height: ${45}px;
  display: flex;
  align-items: center;
  padding: ${n.Spacing10};
`,B=d().div`
  padding: ${n.Spacing15} 0;
  border-bottom: 1px solid ${n.ColorNeutral20};
`,z=d().div`
  padding: 0 ${n.Spacing15} ${n.Spacing10} ${n.Spacing20};
  color: ${n.ColorNeutral80};
  font-size: ${n.TypeScale1FontSize};
`,E={maxHeight:305,overflow:"auto"},L=e=>{let{testIdPrefix:t,globalFilters:l,initialCheckedFilters:n,isResetButtonDisabled:s,onApply:d,onReset:c,onVisibleFiltersChange:p,shouldRemoveOnReset:y,unremovableFilters:j=[],dateForComparison:C=l[x.ln.DatePeriod]}=e;const{t:$}=(0,r.useTranslation)(),{openModal:S,closeModal:w}=(0,f.h)(),F=(0,v.E)(),{supportedGlobalFilters:k,allGlobalFilters:T,checkIsTextFilter:L}=(0,h.y)(),[V,W]=(0,a.useState)(""),[G,U]=(0,a.useState)(n),K=(0,o.flow)((0,_.r)(I),(0,o.groupBy)("group"))(T),q=Object.entries(K).reduce(((e,t)=>{let[l,a]=t;const i=(0,o.compact)(a).filter((e=>{let{label:t}=e;return $(t||"").toLowerCase().includes(V.toLowerCase())}));return(0,o.isEmpty)(i)?e:[...e,{group:l,items:i}]}),[]),{data:H}=(0,g.Z)();return(0,u.jsxs)(O,{children:[(0,u.jsx)(R,{children:(0,u.jsx)(i.Input,{value:V,onChange:e=>W(e.target.value),"aria-label":"search-tree",type:"search",css:{width:"100%"},placeholder:$("dash_exp.placeholder.search","Search"),onClear:()=>W(""),autoFocus:!0})}),(0,u.jsx)("div",{style:E,role:"menu",children:(0,o.isEmpty)(q)?(0,u.jsx)(m,{}):q.map((e=>{let{group:t,items:a}=e;return(0,u.jsxs)(B,{children:[(0,u.jsx)(z,{children:$(`dash_exp.filter_controls.group.label.${t}`,(0,o.capitalize)(t.split("_").join(" ")))}),a.map((e=>{const{filter_param:t,label:a}=e;return(0,u.jsxs)(N,{role:"menuitem",disabled:!k.includes(t),onClick:e=>{e.preventDefault(),!j.includes(t)&&k.includes(t)&&U((e=>e.includes(t)?(0,o.without)([t],e):[...e,t]))},children:[(0,u.jsxs)(A,{disabled:!k.includes(t),children:[(0,u.jsx)(i.Checkbox,{disabled:!k.includes(t)||j.includes(t),checked:G.includes(t),css:D,"aria-label":t}),(0,u.jsx)("span",{"data-testid":`dash_exp-filters_control_filter_label_${t}`,children:$(a)})]}),k.includes(t)&&(0,u.jsx)(P,{dateForComparison:C,filterParamKeyToOptions:H,filter:e,initialCheckedFilters:n,checkedFilters:G,globalFilters:l,defaultFiltersValues:F})]},t)}))]},t)}))}),(0,u.jsxs)(M,{children:[(0,u.jsx)(i.Button,{"data-testid":t?`${t}-reset_button`:void 0,kind:"tertiary",label:$("dash_exp.action.reset","Reset"),disabled:s(G),onClick:()=>{S({size:"small",title:$("dash_exp.filter_modal.reset_filters","Reset filters"),content:$("dash_exp.filter_modal.reset_filters_question","Are you sure you want to reset all filters?"),primaryAction:{kind:"primary",label:$("dash_exp.action.reset","Reset"),onClick:c},secondaryAction:{kind:"secondary",label:$("dash_exp.cancel.button","Cancel"),onClick:w}})}}),(0,u.jsx)(i.Button,{"data-testid":t?`${t}-apply_button`:void 0,kind:"primary",label:$("dash_exp.apply.button","Apply"),disabled:(0,o.isEmpty)((0,o.xor)(n,G)),onClick:()=>{const e=(0,o.difference)(n,G).flatMap((e=>L(e)?(0,b.bo)(e):e)).reduce(((e,t)=>({...e,[t]:y?void 0:(null===F||void 0===F?void 0:F[t])||[]})),{});p({...l,...e},G),d()}})]})]})}},92432:(e,t,l)=>{l.d(t,{F:()=>g});var a=l(50318),i=l(12485),n=l(83078),o=l(12686),r=l(37307),s=l(13555),d=l(95100),c=l.n(d),u=l(24224),p=l(14870),m=l(70579);const h=c().div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`,f=c().div`
  display: grid;
  grid-auto-flow: column;
  gap: ${n.Spacing5};
  padding-left: ${n.Spacing10};
`,b={[r.Platform.Android]:"PlatformAndroidFilled",[r.Platform.Ios]:"PlatformIosFilled",[r.Platform.Windows]:"PlatformWindowsFilled",[r.Platform.WindowsPhone]:"PlatformWindowsFilled",[r.Platform.AndroidTv]:"PlatformAndroidTvFilled",[r.Platform.AppleTv]:"PlatformIosFilled",[r.Platform.FireTv]:"PlatformFireTvFilled",[r.Platform.RokuOs]:"PlatformRokuTVFilled",[r.Platform.SmartCast]:"PlatformVizioTVFilled",[r.Platform.WebOs]:"PlatformLGTVFilled",[r.Platform.Tizen]:"PlatformSamsungTVFilled",[r.Platform.Web]:"Globe",[r.Platform.Playstation]:"PlatformPlaystation",[r.Platform.Xbox]:"PlatformXbox",[r.Platform.Nintendo]:"PlatformNintendo"},g=e=>{let{id:t,name:l,platforms:n=[],color:r,isUnknownValue:d,highlightedIcons:c,truncateLabel:g=!1,...v}=e;const x=(0,a.useMemo)((()=>(0,s.compact)((0,s.uniq)(n.map((e=>b[e]))))),[n]),_=d?"?":l;return(0,m.jsxs)(h,{...v,children:[(0,m.jsx)(o.z9,{size:"small",appId:t,appName:_}),(0,m.jsx)(u.X,{truncateAt:u.e.End,labelColor:r,truncateThreshold:.7,truncateLabel:g,label:l,tooltipOptions:{content:l,zIndex:p.M9}}),!!x.length&&(0,m.jsx)(f,{children:x.map((e=>(0,m.jsx)(i.Icon,{name:e,color:null!==c&&void 0!==c&&c.some((t=>e===b[t]))?"ColorNeutral80":"ColorNeutral50",size:"small"},e)))})]})}},96379:(e,t,l)=>{l.d(t,{o:()=>s});var a=l(50318),i=l(13555),n=l(57210),o=l(76482),r=l(33866);const s=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const s=(0,o.Ho)(),d=null===(e=s.data)||void 0===e?void 0:e[r.A.DatascapeDimensions],c=(0,a.useMemo)((()=>{if(null===d||void 0===d||!d.length||!t.length||(0,n.OI)(t))return d;return(0,i.compact)(t.map((e=>[...d,...l].find((t=>{let{id:l}=t;return l===e})))))}),[d,t,l]);return{...s,data:c}}},97194:(e,t,l)=>{l.d(t,{cn:()=>S,ro:()=>C,Jj:()=>$});var a=l(50318),i=l(83078),n=l(13555),o=l(95100),r=l.n(o),s=l(87910),d=l(39861),c=l(41186),u=l(78282),p=l(90782),m=l(98722),h=l(66291),f=l(10753),b=l(84148),g=l(15236),v=l(91261),x=l(12485),_=l(70579);const y=r().div`
  display: flex;
  align-items: center;
  border-radius: ${i.BorderRadiusSmall};
  background-color: ${i.ColorNeutral20};
  padding: ${i.Spacing5} ${i.Spacing10};
  height: 32px;
`,j=e=>{let{onClick:t,label:l}=e;return(0,_.jsxs)(y,{children:[(0,_.jsxs)(x.Text,{type:"body1",children:[l," "]}),(0,_.jsx)(x.IconButton,{css:{marginLeft:i.Spacing5},onClick:t,iconName:"Cross",size:"small","aria-label":l})]})},C=r().div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${e=>{let{hideGap:t}=e;return t?void 0:i.Spacing15}};
`,$=r().div`
  width: 100%;
  min-height: ${i.Spacing40};
  display: flex;
  align-items: flex-start;
  gap: ${i.Spacing10};
  flex-wrap: wrap;
`,S=e=>{var t;let{globalFilters:l,pageFilters:i,setGlobalFilters:o,setPageFilters:r,shouldRemoveOnReset:x,displayDataConfiguration:y=!0,skippedFilters:S=[],isStaticDateDisabled:w}=e;const{pageConfig:F}=(0,d.r)(),{data:k=[]}=(0,p._)(),{visibleFilters:T,saveVisibleFilters:P}=(0,u.v)(l),I=(0,a.useMemo)((()=>(0,f.Hl)(T,k,S)),[k,S,T]),D=(0,h.E)(),{data:O,isFiltersDataFetching:M}=(0,m.Z)(),A=(0,a.useMemo)((()=>(0,f.mJ)(k,i).reduce(((e,t)=>{const l=i[t];return l?{...e,[t]:l.join(", ")}:e}),{})),[k,i]),N=(0,a.useMemo)((()=>Object.entries(A).map((e=>{let[t,l]=e;return(0,_.jsx)(j,{onClick:()=>r({...i,[t]:[]}),label:`${t}: ${l}`},t)}))),[i,r,A]),R=(0,c.t)(),{supportedGlobalFilters:B}=(0,s.y)(),{defaultVisibleFilters:z,unremovableFilters:E}=(0,u.v)(l),L=(0,f.Hr)({globalFilters:l,shouldRemoveOnReset:x,overrideParams:null!==(t=null===F||void 0===F?void 0:F.overrideParams)&&void 0!==t?t:{}}),V=(0,n.isEmpty)((0,n.xor)((0,n.intersection)(z,B),T)),W=(0,n.isEqual)((0,n.omitBy)(n.isEmpty,L),(0,n.omitBy)(n.isEmpty,l));return(0,_.jsx)(C,{"data-testid":"dash_exp-configurator",children:(0,_.jsxs)($,{children:[y&&(0,_.jsx)(g.a,{"data-testid":"dash_exp-page_filter_controls",children:e=>(0,_.jsx)(v.B,{globalFilters:l,initialCheckedFilters:T,isResetButtonDisabled:()=>V&&W,onApply:e,onReset:()=>{o(L),P(z),e()},onVisibleFiltersChange:(e,t)=>{o(e),P(t)},shouldRemoveOnReset:x,unremovableFilters:E})}),(0,_.jsx)(b.L,{visibleFilters:I,setGlobalFilters:o,globalFilters:l,filtersDefaultValues:D,filterParamKeyToOptions:O,additionalFilters:N,utcOffset:R,isIosOnly:null===F||void 0===F?void 0:F.isIosOnly,areOptionsLoading:M,isStaticDateDisabled:w})]})})}},97569:(e,t,l)=>{l.d(t,{$C:()=>u,$d:()=>_,Ay:()=>s,Dh:()=>d,F9:()=>n,FQ:()=>o,FU:()=>p,I4:()=>b,RK:()=>j,Rk:()=>C,Rt:()=>r,Sb:()=>i,VD:()=>m,hS:()=>x,o$:()=>f,oR:()=>h,pV:()=>g,wc:()=>v,xS:()=>y});var a=l(83078);const i=450,n=250,o=0,r=-45,s=.35,d=5,c=parseInt(a.Spacing20,10),u=c,p=c,m=100,h=100,f=parseInt(a.TypeScale1FontSize,10),b=10,g=421,v=48,x=35,_=185,y=45,j=5,C=5},98245:(e,t,l)=>{l.d(t,{$:()=>i,G:()=>n});var a=l(76079);const i=e=>{let{accountId:t,reportUrl:l}=e;const i=encodeURIComponent(l||`${window.location.pathname}${window.location.search}`);return`${a.JM}?url=${i}${t?`&account=${t}`:""}`},n=e=>`${a.cl}/admin/configs/page/${e}/change/`},98722:(e,t,l)=>{l.d(t,{Z:()=>c});var a=l(50318),i=l(13555),n=l(12134),o=l(90782),r=l(76482),s=l(55779),d=l(19442);const c=()=>{const{data:e}=(0,o._)(),{data:t,isFetching:l}=(0,r.Ho)(),{data:c}=(0,n.h)();return(0,a.useMemo)((()=>({data:(null===e||void 0===e?void 0:e.reduce(((e,l)=>({...e,[l.filter_param]:l.filter_param===s.ln.App?c:(0,d.S)((0,i.compact)(l.options_name),t)})),{}))||{},isFiltersDataFetching:l})),[c,e,t,l])}},99163:(e,t,l)=>{l.d(t,{Z:()=>c});var a=l(12485),i=l(59413),n=l(14870),o=l(35142),r=l(56997),s=l(12050),d=l(70579);const c=e=>{let{onApplyFilter:t,startDate:l,endDate:c,"data-testid":u,period:p,utcOffset:m,calendarType:h,isStaticDateDisabled:f}=e;const{t:b}=(0,i.useTranslation)(),g=f?{kind:"static",hintText:b("static-dates-description-disabled","To use static dates remove the report from automation rule.")}:void 0,v=(0,o.M)(),{data:x}=(0,r.V)(),_=(0,s.ms)(m);return(0,d.jsx)(a.DatePickerButton,{onApply:(e,l)=>{e.startDate&&e.endDate&&t((0,s.P8)({startDate:e.startDate,endDate:e.endDate,period:e.period,utcOffset:m,calendarType:l}))},"data-testid":u,maxDate:_,startDate:l,endDate:c,period:p,zIndex:n.G5,calendarType:h,getElementLabel:v,disableStaticRollingDates:g,currentDate:_,locale:x,isClearButtonHidden:!0,isFullWidthTrigger:!0},`${null===l||void 0===l?void 0:l.toString()}-${null===c||void 0===c?void 0:c.toString()}`)}}}]);
