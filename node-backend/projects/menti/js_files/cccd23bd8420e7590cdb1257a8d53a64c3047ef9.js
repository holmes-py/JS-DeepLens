(self.webpackChunk=self.webpackChunk||[]).push([["60413"],{723506:function(e,t,n){"use strict";let r;n.d(t,{F9:()=>v,Vg:()=>f,my:()=>m,nC:()=>_,oc:()=>g,rQ:()=>h,s4:()=>p,vP:()=>b,zv:()=>E});var a=n(511402),i=n(793236),o=n(961274),s=n(343213),l=n(988465),d=n(427158),c=n(894749),u=n(837778);function p(){try{if((0,a.ZP)().isBoardOpened())return i.Z.getState().board.info?.id;return}catch(e){return}}function m(e){r=e}function h(e){}function g(){return r}let _=e=>{};function f(e){}function E(){let e=(0,o.bh)(),t=e.getState().workspace&&(0,s.qV)(e.getState().workspace)||l.w;e.dispatch((0,d.KL)(t))}function v(){let e=(0,o.bh)().getState().workspace;return e?.welcome?.workspaceOrgs||null}let I={id:{},title:{},type:{},usersNumber:{},picture:{},domainJoinPolicy:{},expired:{}};async function b(){return(0,c.getAccountsAPI)().getWrapped({domainRelated:!0,fields:I}).get({limit:200}).then(e=>e.data).catch(e=>((0,u.K)().error(Error("Failed to load domain related accounts"),e),[]))}},790405:function(e,t,n){"use strict";n.d(t,{MC:()=>o,yi:()=>i});var r=n(840706);let a="PaidPlanOnboardingService",i=()=>{try{return r.get(a).getActiveFlow()}catch{return}},o=e=>{try{r.get(a).completeFlow(e)}catch{}}},38851:function(e,t,n){"use strict";n.d(t,{M:()=>o});let r=e=>/^[a-z]*$/.test(e),a=e=>e.length&&"a"===e[e.length-1],i=(e,t,n)=>{let r=e;for(let a=-1;a<t-e.length;a++)r+=n;return r},o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!r(e)||!r(t))throw Error(`Should contain only [a-z] symbols or empty. Prev: ${e}. Next: ${t}`);if(a(e)||a(t))throw Error(`Last char should not be 'a'. Prev: ${e}. Next: ${t}`);if(""===e&&""===t)return"m";if(e>=t&&""!==e&&""!==t||""===e&&/^a+$/.test(t))throw Error(`Prev cannot be larger or equals to next. Prev: ${e}. Next: ${t}`);let n=Math.max(e.length,t.length);e=i(e,n-1,"a"),t=i(t,n-1,"a");let o="",s=-1;for(let r=0;r<n;r++){let n=e.charCodeAt(r),a=t.charCodeAt(r);if(-1===s){if(a===n)o+=String.fromCharCode(a);else if(a-n>1){o+=String.fromCharCode((a+n)/2);break}else s=r}else{let i=97+Math.floor((n-97+a-97+26)/2)%26;if(i!==n&&i!==a){o+=(i>n?e:t).substring(s,r),o+=String.fromCharCode(i),s=-1;break}}}return -1!==s?o+=e.substring(s)+"m":"a"===o[o.length-1]&&(o+="m"),o}},859331:function(e,t,n){"use strict";n.d(t,{Z:()=>a});var r=n(99382);class a{static reactionsEnabledToggle(e){(0,r.Z)().track("reactions_enabled_toggle",{reactions_enabled:e})}static reactionsPanelOpened(e,t){(0,r.Z)().track("reactions_panel_opened",{reactions_enabled:e,opened_automatically:t})}static reactionsClicked(e){let{emotionCode:t,usersNumber:n,eventType:a,source:i,count:o}=e;(0,r.Z)().track("reactions_clicked",{reaction_event_type:a,reaction_type:t,action_source:i,sync_users:n,count:o})}static reactionsRaiseHandClicked(e){(0,r.Z)().track("reactions_raise_hand_clicked",{action_source:e})}static reactionsLowerHandClicked(e,t){(0,r.Z)().track("reactions_lower_hand_clicked",{lower_all_raised_hands:e,action_source:t})}}},981407:function(e,t,n){"use strict";n.d(t,{h4:()=>s,jr:()=>d,rC:()=>l});var r=n(73052),a=n(23837);let i=()=>{let e=(0,r._6)().getApp(a.p.FRAMES_LIST);"INITIALIZED"===e.lifecycleAtom()&&e.actions.open.execute()},o=()=>{let e=(0,r._6)().getApp(a.p.FRAMES_LIST);"INITIALIZED"===e.lifecycleAtom()&&e.actions.close.execute()},s=()=>"TOGGLED"===(0,r._6)().getApp(a.p.FRAMES_LIST).actions.main.stateAtom().ui.visualStatus,l=e=>{let t=(async()=>{let t=await r.nI().await?.();return void 0===t?()=>({}):t.getApp(a.p.FRAMES_LIST).actions.main.stateAtom.listen(t=>{if("TOGGLED"!==t.ui.visualStatus){e(!0);return}"TOGGLED"!==t.ui.visualStatus&&e(!1)})})();return async()=>{(await t)()}},d={open:i,close:o,toggle:()=>s()?o():i(),getIsOpen:s}},529059:function(e,t,n){"use strict";n.d(t,{p:()=>m});var r=n(202784),a=n(276635),i=n(501446),o=n(55066),s=n(637589),l=n(631198),d=n(170730);let c=e=>{let t=parseInt((0,s.ak)(o.Lb.SHOWTIME_UI_AUTOHIDE_DELAY)??"",10);return isNaN(t)?e:-1===t?18e4:t},u={short:c(3e3),long:c(1e4)},p=["mousedown","mousemove","touchstart","touchmove"],m=e=>{let{setLayoutVisibility:t}=(0,i.lm)(),n=(0,r.useRef)(!1);(0,r.useEffect)(()=>{window.hideShowtimeLayout=()=>t(!1)},[]),(0,r.useEffect)(()=>{let r;if(!e){t(!0);return}let i=e=>{r=setTimeout(()=>t(!1),u[e])},o=()=>{clearTimeout(r),r=void 0},s=(0,a.throttle)(()=>{o(),t(!0),!1===n.current?i("short"):i("long")},100);function c(e){n.current=e}function m(e){o(),e?(t(!0),i("long")):i("short")}function h(){o(),t(!0),!1===n.current?i("short"):i("long")}return p.forEach(e=>window.addEventListener(e,s)),i("short"),l.O.layoutHovered.add(c),l.O.layoutFocused.add(m),(0,d.ZP)().fullScreenChanged.add(h),()=>{s.cancel(),t(!0),o(),p.forEach(e=>window.removeEventListener(e,s)),l.O.layoutHovered.remove(c),l.O.layoutFocused.remove(m),(0,d.ZP)().fullScreenChanged.remove(h)}},[e,t])}},671054:function(e,t,n){"use strict";n.d(t,{o:()=>o});var r=n(758429),a=n(130837),i=n(99382);class o{static modeClicked(e){let t=r.ZP().currentBoard.__boardInfo__?.currentUserContext.role,n=(0,a.G5)().framesList.items.length;(0,i.Z)().track("presentation_mode_clicked",{slides_number:n,user_board_role:t,action_source:e})}}},898675:function(e,t,n){"use strict";n.d(t,{E:()=>a});var r=n(63565);function a(e){let{target:t,key:n}=e;"Escape"===n&&"type"in t&&"button"===t.type&&(0,r.GI)().focusCanvasContainer()}},631198:function(e,t,n){"use strict";n.d(t,{O:()=>a});var r=n(763043);let a={layoutHovered:new r.M,layoutFocused:new r.M}},8370:function(e,t,n){"use strict";n.d(t,{m:()=>s});var r=n(357562),a=n(192769),i=n(202784),o=n(894749);let s=e=>{let{userRole:t}=e,[n,s]=(0,i.useState)(!1),[l,d]=(0,i.useState)(!1),[c,u]=(0,i.useState)(""),[p,m]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{t===r.TP.ANONYMOUS_VISITOR&&(async()=>{let e=!1,t="";try{(e=await (0,o.getPublicAccessToTeamAPI)().isCaptchaNeeded())&&(t=await (0,o.getCaptchaAPI)().getPublicKey())}catch(t){let e=t instanceof Error?t:Error(JSON.stringify(t));(0,a.ZP)().show(e.message)}u(t),s(e&&!!t)})()},[]),{shouldShowCaptcha:n,siteKey:c,isCaptchaVisible:l,setIsCaptchaVisible:d,isCaptchaInProgress:p,setIsCaptchaInProgress:m}}},67990:function(e,t,n){"use strict";n.d(t,{T:()=>i});var r=n(597925),a=n(337525);let i=e=>{let{t}=(0,a.I)(r.Z),n=t("board.modals.requestTeamAccessDialog.timberlake.text");return{header:t("board.modals.requestTeamAccessDialog.timberlake.title"),description:n,button:t("board.modals.requestTeamAccessDialog.requestAccess"),privacyPolicy:t("board.modals.requestTeamAccessDialog.anonymous.privacyPolicy")}}},324578:function(e,t,n){"use strict";n.d(t,{KJ:()=>c,Kc:()=>d,R9:()=>o,eQ:()=>u,o_:()=>l,qM:()=>i,zM:()=>s});var r=n(99382);let a="request_access_to_board_team_interacted";function i(e){let{from:t,accountId:n}=e;(0,r.Z)().track("request_dialog_opened",{request_to_join_team_from:t,account_id:n})}function o(e){(0,r.Z)().track("request_access_to_board_team_shown",{user_role:e})}function s(e){(0,r.Z)().track(a,{user_role:e,action_type:"add_personal_message"})}function l(e,t){(0,r.Z)().track(a,{user_role:e,action_type:"send_request",has_message:!!t.trim()})}function d(e,t){(0,r.Z)().track(a,{user_role:e,action_type:"close_dialog",has_message:!!t.trim()})}function c(){(0,r.Z)().track("captcha_shown",{place:"request_team_access_dialog"})}function u(){(0,r.Z)().track("captcha_completed",{place:"request_team_access_dialog"})}},186173:function(e,t,n){"use strict";n.d(t,{Di:()=>Z,CH:()=>K});var r=n(965033),a=n(357562),i=n(192769),o=n(552322),s=n(202784),l=n(826743),d=n(48096),c=n(804252),u=n(273126),p=n(389958),m=n(426592),h=n(337525),g=n(597925),_=n(437038),f=n.n(_);let E=e=>{let{onClick:t,dataTestId:n}=e,{t:r}=(0,h.I)(g.Z);return(0,o.jsxs)("span",{className:f().container,onClick:t,"data-testid":n,children:[(0,o.jsx)(p.l,{size:"xsmall",className:f().icon,children:(0,o.jsx)(m.Z,{})}),r("board.modals.requestTeamAccessDialog.addPersonalMessage")]})};var v=n(324578),I=n(180909),b=n(331903),x=n.n(b),T=n(84370),S=n(626611);let A=e=>{let{userRole:t,onChange:n,isEmailValid:r,onChangeEmail:i,dataTestIds:l}=e,[p,m]=(0,s.useState)(!1),{t:_}=(0,h.I)(g.Z),f=(0,s.useCallback)(()=>{(0,v.zM)(t),m(!0)},[]),b=(0,s.useCallback)(e=>n(e),[n]),{value:A,placeholder:w,onTextareaFocus:y,onMessageChange:N}=(0,u.m)({placeholder:_("board.modals.requestTeamAccessDialog.suggestedMessage"),onMessageChange:b}),C=(0,s.useCallback)(e=>i(e.target.value),[i]),R=void 0===r||r?void 0:_("board.modals.requestTeamAccessDialog.anonymous.emailInvalid"),O=t===a.TP.ANONYMOUS_VISITOR;return(0,o.jsxs)("div",{className:x().messageArea,children:[(0,o.jsxs)(d.If,{cond:O,children:[(0,o.jsxs)("div",{className:x().inputLabel,children:[(0,o.jsx)(I.v,{tKey:"board.modals.requestTeamAccessDialog.anonymous.shareYourEmail"}),(0,o.jsx)(T.o,{tooltipText:_("board.modals.requestTeamAccessDialog.anonymous.emailExtraInfo"),placement:"right"})]}),(0,o.jsx)(S.y,{inputProps:{onChange:C},state:void 0===r?"default":r?"success":"invalid",statusMessage:R,className:x().emailInput,dataTestids:{input:l.emailInput,message:l.emailInputMessage}})]}),(0,o.jsx)(d.If,{cond:!p,children:(0,o.jsx)(E,{onClick:f,dataTestId:l.addPersonalMessageButton})}),(0,o.jsx)(d.If,{cond:p,children:(0,o.jsx)(c.Textarea,{rows:3,placeholder:w,value:A,onFocus:y,onChange:N,"data-testid":l.textarea})})]})};var w=n(815060),y=n.n(w),N=n(940301),C=n(312488),R=n(819545),O=n(72779),M=n.n(O),k=n(8370),D=n(320051),P=n(67990);let j="request-team-access-dialog",L={dialog:j,title:`${j}__title`,description:`${j}__description`,addPersonalMessageButton:`${j}__add-message-button`,textarea:`${j}__textarea`,submitButton:`${j}__submit-button`,emailInput:`${j}__email-input`,emailInputMessage:`${j}__email-input-message`,captcha:`${j}__captcha`},F=(0,r.U5)((e,t)=>({...e,onSubmit:t,onDismiss:()=>t({type:"dismiss"})}))(e=>{let t,{from:n,accountId:i,teamName:c,userRole:u,headerImage:p,onDismiss:m,onSubmit:h}=e,[g,_]=(0,s.useState)(""),[f,E]=(0,s.useState)(""),[I,b]=(0,s.useState)(),{header:x,description:T,button:S,privacyPolicy:w}=(0,P.T)({userRole:u,teamName:c}),{shouldShowCaptcha:O,siteKey:j,isCaptchaVisible:F,setIsCaptchaVisible:U,isCaptchaInProgress:B,setIsCaptchaInProgress:G}=(0,k.m)({userRole:u}),W=u===a.TP.ANONYMOUS_VISITOR,H=(0,s.useCallback)(()=>(0,v.qM)({from:n,accountId:i}),[]),V=(0,s.useCallback)(()=>{(0,v.Kc)(u,g),m()},[g,m]),z=(0,s.useCallback)(e=>{let t=g&&g.trim();(0,v.o_)(u,t),h({type:"submit",...{gCaptchaResponse:e,...t&&{msgToAdmin:t},...f&&{email:f.trim()}}})},[g,h,f]),Z=(0,s.useCallback)(()=>{G(!0),U(!0),(0,v.KJ)()},[U,G]),K=(0,s.useCallback)(e=>{e&&((0,v.eQ)(),setTimeout(()=>z(e),1e3))},[z]),Y=(0,s.useCallback)(async()=>{O?Z():z()},[O,z,Z]),{isVisible:q,handleClose:$,onClose:J}=(0,r.dm)(V),X=(0,s.useCallback)(e=>{ee(),E(e),t=setTimeout(()=>b(e?(0,N.oH)(e):void 0),500)},[E,b,t]),Q=W&&(!f||!I),ee=(0,s.useCallback)(()=>{t&&clearTimeout(t)},[t]);return(0,s.useEffect)(()=>ee,[]),(0,o.jsx)(r.Vq,{isVisible:q,onOpen:H,onEscape:$,onCloseButtonClick:J,onClose:J,contentClassName:y().dialogContent,closeButtonClassName:y().closeButton,containerDataAutoTestId:L.dialog,children:(0,o.jsxs)("div",{className:y().body,children:[(0,o.jsx)(r.fK,{titleClassName:y().title,titleDataAutoTestId:L.title,children:x}),(0,o.jsxs)(r.a7,{children:[(0,o.jsx)("div",{className:y().description,"data-testid":L.description,children:(0,o.jsx)("p",{children:T})}),(0,o.jsx)(d.If,{cond:!F,children:(0,o.jsx)(A,{userRole:u,onChange:_,dataTestIds:{addPersonalMessageButton:L.addPersonalMessageButton,textarea:L.textarea,emailInput:L.emailInput,emailInputMessage:L.emailInputMessage},onChangeEmail:X,isEmailValid:I})}),(0,o.jsx)(d.If,{cond:F,children:(0,o.jsx)(D.Z,{sitekey:j,onChange:K,className:y().captcha})})]}),(0,o.jsx)(r.cN,{children:(0,o.jsx)(l.z,{className:y().submitButton,onClick:Y,dataTestid:L.submitButton,disabled:Q,loading:B,children:S})}),(0,o.jsx)(d.If,{cond:W,children:(0,o.jsx)(C.r,{text:w,onClick:R.navigateToPrivacyPolicy,className:M()("rtb-link rtb-link--primary",y().privacyPolicyLink)})})]})})});var U=n(507539),B=n(794999),G=n(609868);let W=n.p+"4e004ddc158d917f.png";var H=n(420246),V=n(837778);async function z(e){return new Promise(t=>{let n=new Image;n.onload=()=>t(n),n.src=e})}async function Z(e,t){let n=(0,a.Sl)(e),{id:r,account:o}=e;try{if((0,a.tz)(e)){if(t?.email)await (0,B.H)({email:t.email,boardKey:r,messageToAdmin:t?.msgToAdmin,accountId:o.id,gCaptchaResponse:t?.gCaptchaResponse});else throw Error("No email provided for public request.")}else await (0,B._)({boardId:r,role:n,messageToAdmin:t?.msgToAdmin,feature:U.y.CREATE_BOARD});(0,H.v9)({accountId:o.id,orgId:o.organization?.id,from:"create_board"}),(0,i.ZP)().show(g.Z.t("board.modals.requestTeamAccessDialog.notification.requestSentOk"))}catch(e){(0,i.ZP)().show(g.Z.t("board.modals.requestTeamAccessDialog.notification.requestSentFail"))}}async function K(e,t){if(!e.account){(0,V.K)().warningWithScope({tags:{feature:"request-team-access-dialog",component:"showRequestTeamAccessDialog",source:t}},Error(`No account loaded inside boardInfo, from: ${t}`),e);return}let n={...e,account:e.account},i=(0,a.Sl)(n),o=await (0,G.Y)(z(W)),{waitForClose:s}=r.iV.show({componentFactory:F({teamName:n.account.name,userRole:i,headerImage:o,from:t,accountId:n.account.id})}),l=await s();"submit"===l.type&&await Z(n,l)}},463397:function(e,t,n){"use strict";n.d(t,{c:()=>u});var r=n(238771),a=n(707411),i=n(859331),o=n(758429),s=n(213422),l=n(951371),d=n(726079),c=n(278861);class u{async getRaisedHandsArray(){let e=(0,a.ZP)().getRaisedHandsArray();return await e.reduce(async(e,t)=>{let n=await (0,d.Z)().getOnlineUserItem(c.d.fromString(t.id)),r=await e;return n?.userInfo&&r.push({canLowerHand:this.canLowerHand(t.id),id:t.id,name:n.userInfo.name,pictureUrl:n.userInfo.picture.size44}),r},Promise.resolve([]))}canLowerHand(e){let t=this.canManageReactions(),n=l.Z().myUserId?.toString();return t||e===n}getRaisedHandsQuantity(){return(0,a.ZP)().getRaisedHandsQuantity()}onClick(e){(0,a.ZP)().lowerHand(e),i.Z.reactionsLowerHandClicked(!1,r.vF.peopleBar)}onClickLowerAll(){(0,a.ZP)().lowerAllHands(),i.Z.reactionsLowerHandClicked(!0,r.vF.peopleBar)}canManageReactions(){return(0,o.ZP)().currentBoard.hasPermission(s.J.MANAGE_REACTIONS)}constructor(){this.addUserStatusesState=e=>{(0,a.ZP)().onUserStatusesChanged.add(e,this)},this.removeUserStatusesState=e=>{(0,a.ZP)().onUserStatusesChanged.remove(e,this)},this.userStatusesSubscription=(e,t)=>{t?this.addUserStatusesState(e):this.removeUserStatusesState(e)}}}},984799:function(e,t,n){"use strict";let r,a,i,o,s,l,d,c,u;n.r(t),n.d(t,{getAchievementActions:()=>aq,init:()=>a0,getUITipActions:()=>aY,getShowtimePublicSignals:()=>a6,getShowtimeModuleStore:()=>a1,getShowtimePublicActions:()=>a3,getShowtimePublicState:()=>a2});var p,m,h,g,_,f,E=n(840706),v=n(615294),I=n(414973),b=n(763043),x=n(101450),T=n(117100),S=n(740103),A=n(458420),w=n(504123),y=n(251261),N=n(247769),C=n(722306),R=n(837748),O=n(23837);let M=(e,t)=>{(0,N.dt)(t);let{appSystem:n}=t;e.dispatch((0,C.UV)());let r=new Set;return y.e.forEach(t=>{let a=n.subscribeToAppStarted(t,()=>{t===O.p.BOARD_RECORDING?n?.getPublicApi(O.p.BOARD_RECORDING)?.isEnabled().then(n=>{e.dispatch(C.BJ(t,n))}).catch(()=>{}):e.dispatch((0,C.BJ)(t,!0))}),i=n.subscribeToAppStopped(t,()=>{e.dispatch((0,C.BJ)(t,!1))});r.add(a).add(i)}),{onDestroy:()=>{(0,N.dt)(void 0),r.forEach(e=>e())},publicApi:{saveSettings:(t,n,r)=>{void 0===t.metadata.settingsId?e.dispatch((0,R.oh)(t,n,r)):e.dispatch((0,R.VP)(t,r))},cancelSettings:()=>{}}}};var k=n(261178),D=n(911973),P=n(882891),j=n(284340);let L={activeTab:P.q.FRAMES},F=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;return t.type===j.tI.SET_ACTIVE_TAB?{activeTab:t.payload}:e};var U=n(871999),B=n(897910),G=n(278861),W=n(238771),H=n(276635),V=n(322584),z=n(77034),Z=n(97438),K=n(679001),Y=n(521133),q=((p={}).DATA_CHANGED="[MEETING_MIDDLEWARE] DATA_CHANGED",p.CHANGE_MEETING_MODE="[MEETING_MIDDLEWARE] CHANGE_MEETING_MODE",p.MEETING_STARTED="[MEETING_MIDDLEWARE] MEETING_STARTED",p.MEETING_STOPPED="[MEETING_MIDDLEWARE] MEETING_STOPPED",p);let $=e=>({type:"[MEETING_MIDDLEWARE] DATA_CHANGED",payload:e}),J=e=>({type:"[MEETING_MIDDLEWARE] CHANGE_MEETING_MODE",payload:e}),X=()=>({type:"[MEETING_MIDDLEWARE] MEETING_STARTED"}),Q=()=>({type:"[MEETING_MIDDLEWARE] MEETING_STOPPED"});var ee=n(824654);async function et(){(0,V.cA)("ALL")}var en=n(819774),er=n(214328),ea=n(967178),ei=n(349452),eo=n(146024),es=n(391021),el=n(254914);let ed=(e,t)=>{let n;switch(e){case ee.d3.LEADER_CHANGED:n={text:el.a.t("showtime.notification.leaderChange",{username:t?.userName??0}),durationInMS:4e3};break;case ee.d3.LEADER_DISCONNECTED:n={text:el.a.t("showtime.notification.leaderDisconnected"),isClosable:!0,durationInMS:-1};break;case ee.d3.STOP_SESSION:n={text:el.a.t("showtime.notification.leaderEndedSession"),isClosable:!1};break;default:n=void 0}void 0!==n&&(0,V.c0)(n)};var ec=n(813945),eu=n(521454),ep=n(772982);let em=(e,t)=>t.find(t=>0===t.id.compare(e)&&t.status===B.E.RUNNING),eh=async(e,t)=>{let n=await N.RD()?.getPublicApi(e);n?.isRunning?.()?t.push(e):t.includes(e)&&t.splice(t.indexOf(e),1)},eg=e=>{let{dispatch:t,getState:n}=e;return e=>async r=>{switch(r.type){default:break;case k.qF.UPDATE_SESSION_LIST:{let e=(0,Z.gC)(n()),a=(0,Z.PS)(n()),i=G.d.fromString((0,V.Yd)().userId??"0");e&&(a||e.leaderId===i)&&void 0===em(e.id,r.payload)&&t((0,k.mx)(void 0,"STOP_SESSION")),t((0,k.PR)(r.payload));break}case k.qF.SET_SESSION_LIST:{let e=(0,Z.cT)(n());if(void 0!==e){if(em(e,r.payload))return;t((0,eo.IW)()),V.n6()?.getShowtimeWorkshopModeService().reset(),(0,V.ns)().showtimeSessionChanged.dispatch(B.E.NONE)}if(0===r.payload.length){t((0,k.Zt)(void 0));return}let a=(0,Z.LU)(n()),i=a.find(e=>e.status===B.E.RUNNING)??a[0];void 0!==i&&t((0,k.Zt)(i));let o=r.payload.find(e=>e.status===B.E.RUNNING);void 0!==o&&t((0,k.t7)(o.id));break}case k.qF.BACK_TO_PRESENTER:{t((0,k.qT)()),t((0,k.ZE)({isDetached:!1,startFollowing:!0}));let e=(0,Z.gC)(n()),r=e?.leaderId??G.d.getZeroLong(),a=Z.vS(n())?.userInfo?.name??"UNKNOWN";(0,V.lZ)().isPrivateModeEnabledForAnonymousUser||(0,V.S4)().startFollowing(r,a,"showtime_back_to_leader");break}case k.qF.UPDATE_SESSION:{let e=r.payload,a=e.status,i=Z.Qg(n())?.compare(e.id)===0,o=Z.cT(n())?.compare(e.id)===0,s=a===B.E.RUNNING&&!o,l=a!==B.E.RUNNING&&o;if(o&&e.reason===ee.d3.LEADER_RECONNECTED&&t((0,k.m5)()),s&&(t((0,k.t7)(e.id)),t((0,k.Kj)(!1))),l&&(t((0,k.t7)(void 0)),t((0,k.mx)(e,r.payload.reason))),!o&&s&&e.sessionType===ee.JM.AD_HOC&&t((0,k.Zt)(void 0)),!i){if(s&&e.sessionType!==ee.JM.AD_HOC&&t((0,k.Zt)(e)),l&&e.sessionType!==ee.JM.ADVANCED){let e=(0,Z.LU)(n())[0];e&&t((0,k.Zt)(e))}s||e.sessionType!==ee.JM.ADVANCED||t((0,k.Zt)(e))}let d=(0,Z.w3)(n(),r.payload.id);void 0!==d&&d.status===B.E.RUNNING&&t((0,k.ry)(d.participants,e.participants)),t((0,er.zk)()),t((0,k.Pk)(e,a,s)),t((0,k.KY)(e)),(0,V.n6)().onSessionStateChanged.dispatch(a===B.E.RUNNING,e.id,e.leaderId);break}case k.qF.UPDATE_SESSION_STATUS:{let{session:e,nextSessionStatus:a,enableWorkshopMode:i}=r.payload;e.sessionType!==ee.JM.AD_HOC&&t((0,K.sB)(a)),t((0,z.XW)(e.id.toString())),t((0,Y.Hx)(e.id,i)),(0,V.ns)().showtimeSessionChanged.dispatch(a,e.sessionType);let o={isParticipant:(0,Z.fc)(n()),leaderId:e.leaderId,sessionId:e.id.toString()};t((0,es.ET)()),t($(o));break}case k.qF.SET_SELECTED_SESSION:void 0!==r.payload&&r.payload.sessionType!==ee.JM.AD_HOC&&t((0,z.p1)(r.payload.id));break;case k.qF.SET_RUNNING_SESSION:{let e=(0,Z.gC)(n());if(void 0===e)return;V.n6()?.getWorkshopModeState(e.id),e.sessionType!==ee.JM.AD_HOC&&t((0,z.p1)(e.id));break}case k.qF.LEAVE_SHOWTIME:V.n6()?.leaveRunningSession(),V.YG()?.toggleAudienceViewMode(!1),t((0,er.M$)(W.Es.auto_showtime_left)),t((0,k.ZE)({isDetached:!1,startFollowing:!1}));break;case k.qF.JOIN_RUNNING_SESSION:V.n6()?.joinRunningSession(),t((0,er.M$)(W.Es.auto_showtime_joined));break;case k.qF.START:{let{startItemId:e}=r.payload,a=[],i=(0,Z.w3)(n(),r.payload.sessionId);if(i?.sessionType===ee.JM.ADVANCED){let i=(0,ea.Zz)(n());if(a=V.w0()?.setFramesLockState(i,!0),void 0===e){let t=(0,ei.tE)(n());e=t.length?G.d.fromString(t[0]):void 0}t((0,K.BL)(r.payload.source,r.payload.sessionId,e))}(0,V.n6)().startSession({source:r.payload.source,sessionId:r.payload.sessionId,lockedFrames:a,startItemId:e});break}case k.qF.STOP:{let e=(0,Z.gC)(n());if(void 0===e)return;(0,V.n6)().getShowtimeSessionFactory().stopShowtimeSession(e.id).then().catch(e=>{throw(0,U.KC)(e)}),et(),t((0,er.Lu)(W.Es.auto_showtime_stopped)),e.sessionType===ee.JM.STRUCTURED&&(0,V.qm)().completePaidPlanOnboardingFlow(ep.jd.SHOWTIME),e.sessionType===ee.JM.AD_HOC&&(0,V.qm)().completePaidPlanOnboardingFlow(ep.jd.SHOWTIME);break}case k.qF.STOPPED:{let{session:e,reason:n}=r.payload;e&&t((0,k.Pk)(e,B.E.NONE,!1)),t((0,k.MG)(void 0)),ed(n),V.ns()?.onStopped(),t((0,ec.ZH)());break}case k.qF.CHANGE_LEADER:{let e=(0,Z.gC)(n()),a=V.Yd()?.userId;if(void 0===e||void 0===a)return;t((0,k.ZE)({isDetached:!1,startFollowing:!0}));let{source:i,userId:o}=r.payload;V.n6()?.changeLeader({sessionId:e.id,leaderId:o});let{leaderId:s}=e,l=a===s.toString()?"hand_off":"take_over";t((0,en.$b)({currentLeader:s.toString(),newLeader:o.toString(),actionType:l,source:i}));break}case k.qF.SET_SESSION_LEADER:{let e=n(),a=(0,Z.gC)(e);if(!a||!(0,Z.fc)(n()))break;let i=!1;r.payload.oldLeaderId&&void 0!==(0,V.Yd)().userId&&(i=0===G.d.fromString((0,V.Yd)().userId).compare(r.payload.oldLeaderId));let o=(0,Z.d1)(e);t((0,er.M$)(W.Es.auto_showtime_leader_changed,a.leaderId.toString()));let s=!(0,Z.l)(e),l=a?.leaderId,d=Z.vS(n())?.userInfo?.name??"UNKNOWN",c=!(0,V.lZ)().isPrivateModeEnabledForAnonymousUser;if(ed("LEADER_CHANGED",{userName:d}),(0,V.Ld)().closePresenterWindow("showtime-leader-change"),o)(0,V.S4)().stopFollowing("showtime_leader_changed");else if((0,V.BV)().hideMaskWithOptions({withAnimation:!1,reset:!0,source:eu.Y}),i){t((0,k.ZE)({isDetached:!1})),(0,V.S4)().startFollowing(l,d,"showtime_leader_changed");break}s&&c&&(0,V.S4)().startFollowing(l,d,"showtime_leader_changed");break}case k.qF.PARTICIPANTS_CHANGED:{let{oldParticipants:e,newParticipants:t}=r.payload,n=(0,H.difference)(e,t),a=(0,V.S4)().getFollowToUserId();void 0!==a&&n.includes(a)&&(0,V.S4)().stopFollowing("showtime_followee_left");break}case k.qF.LEADER_RECONNECTED:{if(!(0,Z.fc)(n()))break;let e=(0,Z.gC)(n()),t=e?.leaderId,r=!(0,V.lZ)().isPrivateModeEnabledForAnonymousUser;if(void 0!==t&&r){let e=Z.vS(n())?.userInfo?.name??"UNKNOWN";(0,V.S4)().startFollowing(t,e,"showtime_leader_reconnected")}break}case k.qF.APP_VISIBILITY_CHANGE:{if(!(0,Z.fc)(n()))break;let e=r.payload.filter(e=>y.e.includes(e)),a=(0,Z.MX)(n());if(0===e.length&&0===a.length)break;let i=a.filter(t=>!e.includes(t)),o=[...(0,Z.eQ)(n())];for(let t of(await Promise.all(i.map(e=>eh(e,o))),e.filter(e=>!i.includes(e))))o.includes(t)&&o.splice(o.indexOf(t),1);t((0,k.zr)([...new Set(o)])),t((0,k.iH)(e))}}e(r)}};var e_=n(118717),ef=n(774418),eE=n(277421),ev=n(323239),eI=n(6148),eb=n(172458);let ex=e=>e.agendaData.temporaryItems,eT=(e,t)=>ex(e)[t],eS=(e,t)=>Object.keys(ex(e)).filter(e=>e.startsWith(t)).map(t=>ex(e)[t]);var eA=n(401782);eA.O.SHOW;let ew=e=>(0,eA.o)({text:e,durationInMS:4e3});var ey=n(273938);let eN=e=>{let{agenda:t,frames:n}=e,{items:r,...a}=t,i=new Map(n.map(e=>[e.tokenizer.id.hex,e])),o=[],s=r.filter(e=>{if(void 0!==e.widgetId){let t=i.get(e.widgetId.hex);if(void 0!==t)return o.push(t),!0}return!1});return{agenda:{...a,items:s},frames:o}};var eC=n(607283);function eR(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function eO(e,t,n){return t&&eR(e.prototype,t),n&&eR(e,n),e}function eM(){return(eM=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ek(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function eD(e){return!!(e&&"function"==typeof e.hasOwnProperty&&(e.hasOwnProperty("__ownerID")||e._map&&e._map.hasOwnProperty("__ownerID")))}function eP(e,t,n){return Object.keys(e).reduce(function(t,r){var a=""+r;return t.has(a)?t.set(a,n(t.get(a),e[a])):t},t)}var ej=function(){function e(e,t,n){if(void 0===t&&(t={}),void 0===n&&(n={}),!e||"string"!=typeof e)throw Error("Expected a string key for Entity, but found "+e+".");var r=n,a=r.idAttribute,i=void 0===a?"id":a,o=r.mergeStrategy,s=void 0===o?function(e,t){return eM({},e,t)}:o,l=r.processStrategy,d=void 0===l?function(e){return eM({},e)}:l,c=r.fallbackStrategy;this._key=e,this._getId="function"==typeof i?i:function(e){return eD(e)?e.get(i):e[i]},this._idAttribute=i,this._mergeStrategy=s,this._processStrategy=d,this._fallbackStrategy=void 0===c?function(e,t){}:c,this.define(t)}var t=e.prototype;return t.define=function(e){this.schema=Object.keys(e).reduce(function(t,n){var r,a=e[n];return eM({},t,((r={})[n]=a,r))},this.schema||{})},t.getId=function(e,t,n){return this._getId(e,t,n)},t.merge=function(e,t){return this._mergeStrategy(e,t)},t.fallback=function(e,t){return this._fallbackStrategy(e,t)},t.normalize=function(e,t,n,r,a,i){var o=this,s=this.getId(e,t,n),l=this.key;if(l in i||(i[l]={}),s in i[l]||(i[l][s]=[]),i[l][s].some(function(t){return t===e}))return s;i[l][s].push(e);var d=this._processStrategy(e,t,n);return Object.keys(this.schema).forEach(function(t){if(d.hasOwnProperty(t)&&"object"==typeof d[t]){var n=o.schema[t],s="function"==typeof n?n(e):n;d[t]=r(d[t],d,t,s,a,i)}}),a(this,d,e,t,n),s},t.denormalize=function(e,t){var n=this;return eD(e)?eP(this.schema,e,t):(Object.keys(this.schema).forEach(function(r){if(e.hasOwnProperty(r)){var a=n.schema[r];e[r]=t(e[r],a)}}),e)},eO(e,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),e}(),eL=function(){function e(e,t){t&&(this._schemaAttribute="string"==typeof t?function(e){return e[t]}:t),this.define(e)}var t=e.prototype;return t.define=function(e){this.schema=e},t.getSchemaAttribute=function(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)},t.inferSchema=function(e,t,n){if(this.isSingleSchema)return this.schema;var r=this.getSchemaAttribute(e,t,n);return this.schema[r]},t.normalizeValue=function(e,t,n,r,a,i){var o=this.inferSchema(e,t,n);if(!o)return e;var s=r(e,t,n,o,a,i);return this.isSingleSchema||null==s?s:{id:s,schema:this.getSchemaAttribute(e,t,n)}},t.denormalizeValue=function(e,t){var n=eD(e)?e.get("schema"):e.schema;return this.isSingleSchema||n?t((this.isSingleSchema?void 0:eD(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):e},eO(e,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),e}(),eF=function(e){if(Array.isArray(e)&&e.length>1)throw Error("Expected schema definition to be a single schema, but found "+e.length+".");return e[0]},eU=function(e){return Array.isArray(e)?e:Object.keys(e).map(function(t){return e[t]})},eB=function(e,t,n,r,a,i,o){var s=eM({},t);return Object.keys(e).forEach(function(n){var r=e[n],l="function"==typeof r?r(t):r,d=a(t[n],t,n,l,i,o);null==d?delete s[n]:s[n]=d}),s},eG=function(e,t,n){if(eD(t))return eP(e,t,n);var r=eM({},t);return Object.keys(e).forEach(function(t){null!=r[t]&&(r[t]=n(r[t],e[t]))}),r},eW=function(e,t){if(!e||"object"!=typeof e)throw Error('Unexpected input given to normalize. Expected type to be "object", found "'+(null===e?"null":typeof e)+'".');var n={};return{entities:n,result:function e(t,n,r,a,i,o){return"object"==typeof t&&t?"object"!=typeof a||a.normalize&&"function"==typeof a.normalize?a.normalize(t,n,r,e,i,o):(Array.isArray(a)?function(e,t,n,r,a,i,o){return e=eF(e),eU(t).map(function(t,s){return a(t,n,r,e,i,o)})}:eB)(a,t,n,r,e,i,o):t}(e,e,null,t,function(e,t,r,a,i){var o=e.key,s=e.getId(r,a,i);o in n||(n[o]={});var l=n[o][s];l?n[o][s]=e.merge(l,t):n[o][s]=t},{})}};let eH=new ej("timers",void 0,{idAttribute:e=>e.id.toString()}),eV=new ej("agendaItems",{timerData:eH},{idAttribute:e=>e.id.toString()}),ez=new ej("frames",void 0,{idAttribute:e=>e.tokenizer.id.hex}),eZ=e=>{let{items:t,...n}=e,r=eW(t,[eV]);return{agenda:{...n,agendaItems:r.result},agendaItems:r.entities.agendaItems,timers:r.entities.timers}},eK=e=>eW(e,eV).entities,eY=e=>eW(e,[ez]).entities.frames||{};var eq=n(928406),e$=n(235749),eJ=n(345490),eX=n(577597),eQ=n(856472);let e0=()=>({title:el.a.t("showtime.agenda.clearAllDialog.title"),text:el.a.t("showtime.agenda.clearAllDialog.description"),submitButton:{caption:el.a.t("showtime.agenda.clearAllDialog.clearAllBtn")},cancelButton:{caption:el.a.t("showtime.agenda.clearAllDialog.cancelBtn")}}),e1=e=>({...K.tQ,widgetId:e}),e2=(e,t)=>{let n=(0,ei.tE)(t).findIndex(t=>t===e.id?.toString())+1,r=(0,ei.ll)(t),a=el.a.t("showtime.controls.a11y.frameNavigation",{current:n,total:r});V.bk()?.notify(eX.n(a))},e4={sessionId:void 0,agendaRecord:void 0};function e3(e,t){return void 0===e.agendaRecord?e:{...e,agendaRecord:{...e.agendaRecord,...t}}}let e6=(e,t)=>void 0!==e&&void 0===t||void 0===e&&void 0!==t||void 0!==e&&void 0!==t&&0!==e.compare(t),e5=(e,t)=>{let n={...e};return delete n[t],n},e9={boardHasFrames:!1,items:{},previews:{},isActiveFrameCentered:!1},e7={},e8={},te={};var tt=n(645133),tn=n(427143);let tr=[e=>{let{dispatch:t,getState:n}=e;return e=>r=>{if(r.type===K.WM.SET_AGENDA_TO_CACHE){let{agenda:e,agendaItems:a,timers:i}=eZ(r.payload),o=null!=i?(0,tt.xw)(i):void 0,s=(0,V.n6)().getShowtimeWorkshopModeService().getIsShowtimeParticipant()?(0,Z.gC)(n()):void 0;void 0!==s&&ee.Tz.includes(s.sessionType)&&0!==s.id.compare(e.agendaId)||t(z.pZ({agenda:e,agendaItems:a,timers:o}))}e(r)}},e=>{let{dispatch:t,getState:n}=e;return e=>r=>{switch(r.type){case K.WM.ADD_ITEM_TO_CACHE:{let e=r.payload,{agendaItems:a,timers:i={}}=eK(e),o=a[e.id.toString()],s=null!=o.timerData?i[o.timerData]:void 0,l=null!=s?(0,tt.AM)(s):void 0;t(z.tg((0,ei.$3)(n()),{agendaItem:o,timer:l}));break}case K.WM.UPDATE_ITEM_IN_CACHE:{let{agendaItems:e,timers:n}=eK(r.payload),a=null!=n?(0,tt.xw)(n):void 0;t(z.n0({agendaItems:e,timers:a}))}}e(r)}},e=>{let{dispatch:t,getState:n}=e;return e=>r=>{switch(r.type){case K.WM.DELETE_ITEM_OPTIMISTIC:{let e=(0,eb.oK)(n(),r.payload.id.toString());if(null!=e){let a=null!=e.timerData?(0,tn.bV)(n(),e.timerData):void 0;t(z.O9((0,ei.$3)(n()),{agendaItem:e,timer:a,token:r.payload.token}))}break}case K.WM.DELETE_ITEM_FROM_CACHE:{let e=(0,eb.oK)(n(),r.payload.toString());if(null!=e){let r=null!=e.timerData?(0,tn.bV)(n(),e.timerData):void 0;t(z.O9((0,ei.$3)(n()),{agendaItem:e,timer:r}))}}}e(r)}},e=>{let{dispatch:t,getState:n}=e;return e=>r=>{if(r.type===K.WM.START_ROLLBACK){let{agendaItem:e,timer:a}=eT(n(),r.payload)??{};null!=e&&t(z.WV((0,ei.$3)(n()),{token:r.payload,agendaItem:e,timer:a}))}e(r)}}];var ta=n(254073),ti=n.n(ta);let[to,ts,tl,td]=tr,tc=[e=>{let{dispatch:t,getState:n}=e;return()=>async e=>{switch(e.type){case K.WM.START_NEXT_ITEM:{V.Lh()?.startNextAgendaItem(ei.W1(n()),e.payload.agendaItemId);let r=e.payload.agendaItemId?(0,eb.oK)(n(),e.payload.agendaItemId.toString()):void 0;void 0!==r&&(t((0,k.c$)(ev.T6.NAVIGATION_BAR_FRAME_LIST,ev.pv.FRAME,r)),e2(r,n()));break}case z.KU.GET_AGENDA_FOR_SESSION:(0,V.Lh)().getState(e.payload.sessionId);break;case K.WM.READ:{let r=e.payload,a=r.agendaId,i=n(),o=(0,eb.g4)(i),s=(0,Z.jD)(i).find(e=>0===e.id.compare(a)),l=void 0!==s,d=G.d.fromString((0,V.Yd)().userId??"0"),c=l&&(0,eq.I)(d,s.leaderId,s.status),u=(0,V.w0)().getFrames(),p=eN({agenda:e.payload,frames:u});c&&clearTimeout(w.uG.getOpenAppTimeoutId()),(0,ef.dC)(()=>{t(eI.B9(p.frames)),t(K.bz(p.agenda)),t((0,eo.lC)(u.length)),t((0,ec.qr)(p.frames.length))});let m=r.items.find(e=>e.status===e$.N.RUNNING),h=l?m:void 0;if(void 0!==h&&((0,V.yZ)({dispatch:t,getState:n}).startProcessInLoop(),t(eI.Gu())),c&&void 0!==h){let{pluginDataToStart:n,pluginNameToClose:r}=function(e,t){let n,r;if(void 0===e)return{};let{plugin:a,pluginSettingId:i,id:o}=e,s=void 0!==a&&a!==y._.NONE;if(s){let t;a===O.p.BREAKOUT_ROOMS&&(t={contentCreationFrameId:e?.widgetId}),n={plugin:a,itemId:o,settingsId:i?.toString(),action:eE.l.START,agendaItemId:e?.id??G.d.getZeroLong(),options:t}}return a===t?.plugin&&s||(r=t?.plugin),{pluginDataToStart:n,pluginNameToClose:r}}(h,o);t((0,z.ex)(e.payload.agendaId,n)),t(w.uG.closePluginPanels(r))}break}case K.WM.CREATE_AGENDA_FROM_ALL_FRAMES:{let e=(0,eJ.wf)((0,V.w0)().getFrames());t((0,eo.wR)(eY(e)));let r=e?.map(e=>(t(K.Qi({frameId:e.tokenizer.id,source:ev.T6.AGENDA_WELCOME_ADD_ALL})),e.tokenizer.id));t((0,k.Zt)((await (0,V.Lh)().getShowtimeSessionFactory().createOrUpdateShowtimeWithFrames(r,ee.JM.ADVANCED,(0,Z.wH)(n()))).session)),t(eI.A2(0));break}case K.WM.CREATE_AGENDA_WITH_NEW_FRAME:{let n=(0,V.w0)();t((0,K.Qi)({frameId:(await n.createFrame()).tokenizer.id,source:e.payload}));break}case K.WM.CREATE_ITEM:{let r=n(),a=(0,ei.ll)(r),i=eC.l.buildDefaultItem((0,V.s0)(),r,(0,ey.L)(),(0,ei.$3)(n()),e.payload.widgetId),o=await (0,V.Lh)().getShowtimeSessionFactory().createOrUpdateShowtimeWithAgendaItems([i],ee.JM.ADVANCED,(0,Z.wH)(n()));(0,ef.dC)(()=>{t(z.xW(i)),t(eI.A2(a)),t((0,k.Zt)(o))});break}case K.WM.CREATE_ITEM_FROM_FRAME:{if(!e.payload.isAutoCreationAvailable)return;let r=e.payload.frame.tokenizer.id;if(void 0!==(0,ea.H6)(n(),r))break;let a=e1(r);(0,ef.dC)(()=>{t((0,K.Qi)({frameId:r,source:e.payload.source})),t((0,K.fC)(a)),t((0,eo.v5)(e.payload.frame))});break}case K.WM.CREATE_ITEMS_FROM_FRAME_COLLECTION:{let r=n(),a=(0,ei.ll)(r),i=eC.l.buildInitialArrayFromFrames((0,V.s0)(),e.payload.frames.map(e=>e.tokenizer.id),(0,ey.L)(),(0,ei.$3)(r),(0,ei.iI)(r));(0,ef.dC)(()=>{i.forEach(n=>{t((0,K.Qi)({frameId:n.widgetId,source:e.payload.source})),t(z.xW(n))})}),t((0,k.Zt)(await (0,V.Lh)().getShowtimeSessionFactory().createOrUpdateShowtimeWithAgendaItems(i,e.payload.sessionType,(0,Z._R)(n(),e.payload.sessionType)))),t(eI.A2(a));break}case K.WM.CREATE_ITEM_WITH_FRAME:{let r=(0,V.w0)(),a=await r.createFrame();void 0!==a&&((0,ef.dC)(()=>{if(void 0!==e.payload.agendaItemId){let r=i=>{let{items:o}=i,s=o.find(e=>{let{widgetId:t}=e;return t?.compare(a.tokenizer.id)===0});if(void 0===s)return;(0,V.Lh)().onShowtimeAgendaFullStateReceived.remove(r);let l=(0,ei.tE)(n());l.pop();let d=l.indexOf(e.payload.agendaItemId.toString())+1,c=l.splice(d,l.length-d);t((0,K.Ao)([...l,s.id.toString(),...c],d))};(0,V.Lh)().onShowtimeAgendaFullStateReceived.add(r)}t((0,K.Qi)({frameId:a.tokenizer.id,source:e.payload.source})),t((0,eo.v5)(a))}),await r.jumpToFrame(a));break}case K.WM.ITEM_CREATED:{let n=e.payload;if(t(K.cq(n)),null!=n.widgetId){let e=(0,V.w0)().getFrameById(n.widgetId);void 0!==e&&t((0,eo.v5)(e))}break}case K.WM.DELETE_ITEMS_BY_FRAMES:{let r=n(),a=(0,ei.$3)(r);if(void 0===a)break;let i=(0,ei.ll)(r),o=(0,eb.CB)(r),s=[],l=(0,ey.L)();Object.values(o).forEach(n=>{let r=void 0!==n.widgetId&&e.payload.includes(n.widgetId);void 0!==n.id&&r&&(s.push(n.id),t(K.z_({id:n.id,token:`${l}-${n.index}`})))}),s.length>0&&(0,V.Lh)().bulkDelete({token:l,items:s,agendaId:a}),t(eI.A2(i));break}case K.WM.DELETE_ITEM_BY_FRAME:{let r=n(),a=(0,eb.CB)(r),i=(0,ei.ll)(r),o=Object.values(a).find(t=>null!=t.widgetId&&0===e.payload.compare(t.widgetId));o?.id!=null&&t((0,K.wz)({id:o.id,source:ev.T6.FRAME_CONTEXT_MENU})),t(eI.A2(i));break}case K.WM.DELETE_ITEM:{let r=n(),a=(0,ey.L)(),i=(0,ei.ll)(r),o=(0,ei.$3)(n());if(!o)break;(0,V.Lh)().deleteAgendaItem(o,e.payload.id,a),t(K.z_({id:e.payload.id,token:a})),t(eI.A2(i));break}case K.WM.DELETE_ITEM_OPTIMISTIC:{let r=n(),{id:a}=e.payload,i=(0,eb.oK)(r,a.toString());if(void 0===i)return;let o=(0,eb.g4)(r);o?.id!=null&&0===a.compare(o?.id)&&t((0,k.sT)(ev.T6.LAST_FRAME_DELETED)),null!=i.widgetId&&(t((0,eo.t7)(i.widgetId)),void 0!==o&&t(eI.yH(i.widgetId,!1))),void 0!==i.pluginSettingId&&t(w.uG.delete(i.pluginSettingId.toString()));break}case K.WM.UPDATE:{if(void 0===e.payload.id)break;let r=n(),a=(0,eb.oK)(r,e.payload.id.toString());if(void 0===a)break;let i={...e.payload,token:(0,ey.L)()};if(void 0!==i.plugin){let n;void 0!==a.pluginSettingId&&(t(w.uG.delete(a.pluginSettingId.toString())),i.pluginSettingId=void 0),i.plugin===O.p.BREAKOUT_ROOMS&&(n={contentCreationFrameId:a.widgetId});let o=(0,Z.gC)(r);y.e.includes(i.plugin)&&t(w.uG.startApp({plugin:i.plugin,itemId:e.payload.id,settingsId:void 0,action:eE.l.SETTINGS,agendaItemId:a.id??G.d.getZeroLong(),options:n},!0,o?{id:o.sessionId,type:o.sessionType,source:ev.oH.PRESET}:void 0)),i.plugin!==a.plugin&&setTimeout(()=>t(w.uG.closePluginPanels(a.plugin)),0)}(0,V.Lh)().updateAgendaItem(i),t((0,K.jS)(i)),t(z.gG({token:i.token,agendaItem:a,changes:i}));break}case K.WM.ITEM_UPDATED:t(eI.FZ(e.payload)),t(K.E0(e.payload)),(0,V.yZ)({dispatch:t,getState:n}).startProcessInLoop();break;case z.KU.CONFIRM:eS(n(),e.payload).forEach(e=>{e?.agendaItem?.widgetId!=null&&t(eI.nu(e.agendaItem.widgetId))}),t(z.dS(e.payload));break;case K.WM.FINISHED:{t(K.bz(e.payload)),(0,V.yZ)({dispatch:t,getState:n}).stopProcessInLoop(),(0,V.jF)().unlockViewport();let r=(0,Z.w3)(n(),e.payload.agendaId),a=r?.leaderId?.toString()===(0,V.Yd)().userId,{lockedFrames:i}=e.payload;a&&void 0!==i&&i.length>0&&t(eI.BQ(i,!1));break}case K.WM.CLEAR:{let e=n(),r=(0,ei.ll)(e),a=(0,ei.$3)(n()),{sessionId:i}=e.agendaData.agenda,o=()=>{(0,V.Lh)().clearAgenda(a),t((0,z.WF)(a)),t((0,eo.IW)()),t(w.uG.deleteAll()),t(ew(el.a.t("showtime.agenda.clearAllDialog.confirmationText"))),(0,V._t)().track(ev.LO.ITEM_DELETED_ALL,{nr_frames:r,meeting_session_id:i})};(0,V.Xt)()(e0()).then(e=>{let{type:t}=e;"submit"===t&&o()}).catch(e=>{throw(0,U.KC)(e)});break}case K.WM.NEXT:{let r=n(),a=(0,ei.W1)(n());if(!a)break;let i=(0,ei.ly)(r,(0,eQ.p)());if(i?.id===void 0)break;t((0,k.c$)(e.payload,ev.pv.NEXT,i)),(0,V.Lh)().startNextAgendaItem(a,i.id),e2(i,r);break}case K.WM.SET_AGENDA_ITEM:{let t=n(),r=(0,ei.bA)(t,e.payload),a=!!r?.id&&eb.oK(n(),r.id.toString())?.status===e$.N.RUNNING;if(!(0,ei.W1)(n())||a||r?.id===void 0){let t=(0,V.w0)(),n=t.getFrameById(e.payload);if(!n)break;t.jumpToFrame(n);break}(0,V.Lh)().startNextAgendaItem((0,ei.W1)(t),r.id);break}case K.WM.PREVIOUS:{let r=n(),a=(0,ei.r3)(r,(0,eQ.p)());if(a?.id===void 0)return;t((0,k.c$)(e.payload,ev.pv.PREVIOUS,a)),(0,V.Lh)().startNextAgendaItem((0,ei.W1)(n()),a.id),e2(a,r);break}case K.WM.REORDER_ITEMS:{let t=(0,V.s0)();if(void 0===t)break;let r=n(),{ids:a,idx:i}=e.payload,o=(0,eb.CB)(r),s=(0,ei.tE)(r).filter(e=>!a.includes(e)).map(e=>o[e]),l=s[i-1]?.index,d=s[i]?.index,c=a.map(e=>{let n=t(l,d);return l=n,{agendaItemId:G.d.fromString(e),index:n}});V.Lh()?.bulkReorder(ei.$3(n()),c);break}case K.WM.REJECTED:t(K.eT(e.payload)),(0,V.yZ)({dispatch:t,getState:n}).startProcessInLoop();break;case K.WM.OPEN_TEMPLATES:(0,V.sT)()();break;case K.WM.SYNC_WITH_MEETING_STATUS:{let r=e.payload,a=(0,ei.W1)(n());a&&t((0,z.XF)(a,r)),r!==B.E.RUNNING&&t(eI.Dy());break}case z.KU.VIEWPORT_UPDATED:{let r=(0,Z.gC)(n());if(void 0===r||void 0===(0,V.Yd)().userId)return;let{agendaId:a}=e.payload,i=(0,eq.I)(G.d.fromString((0,V.Yd)().userId),r.leaderId,r.status),o=(0,ei.Cm)(n());void 0!==o&&i&&(t(w.uG.startApp(o,!0,{id:r.sessionId,type:r.sessionType,source:ev.oH.PRESET})),t((0,z.ex)(a,void 0)));break}case K.WM.FOCUS_CANVAS:{let{pointerType:t}=e.payload;["mouse","touch","pen"].includes(t)&&(0,V.mh)().focusCanvasContainer()}}}},e=>{let{dispatch:t,getState:n}=e;return()=>async e=>{switch(e.type){case eI.WB.SHOW_HOW_PICK_FRAME:{let e=(0,V.k_)();null!=e&&e();break}case eI.WB.NORMALIZE_SET_FRAMES:if(void 0===(0,Z.E2)(n()))return;t((0,eo.wR)(eY(e.payload)));break;case eI.WB.UPDATE:{let e=(0,V.w0)().getFrames(),r=Object.values((0,ea.wb)(n()));if(0===e.length&&0===r.length)break;r.forEach(e=>{null!=e.tokenizer&&t((0,eI.SN)(e.tokenizer.id))});break}case eI.WB.UPDATE_FRAME_DATA:null!=(0,ea.H6)(n(),e.payload)&&t((0,eo.v5)((0,V.w0)().getFrameById(e.payload)));break;case eI.WB.UPDATE_FRAME_BY_ITEM:{let r=e.payload.id.toString();if(null!=r){let a=(0,eb.oK)(n(),r);null!=e6(a?.widgetId,e.payload.widgetId)&&(t((0,eI.o8)(a?.widgetId)),null!=e.payload.widgetId&&t((0,eI.SN)(e.payload.widgetId)))}break}case eI.WB.JUMP_TO_FRAME:{let r=n(),a=(0,ea.H6)(r,e.payload);if(!a)break;let i=(0,Z.d1)(r),o=(0,V.w0)();i&&(o.jumpToFrame(a),t((0,eo.Kf)(!0)));let s=(0,ei.W1)(r);void 0!==s&&t((0,z.VP)(s,!1));break}case eI.WB.JUMP_TO_ACTIVE_FRAME:{let e=n();if(!(0,Z.fc)(e))break;let r=(0,eb.g4)(e);r?.widgetId!=null&&t((0,eI.hn)(r.widgetId));break}case eI.WB.SAFE_REMOVE:if(void 0===e.payload)break;void 0===Object.values((0,eb.CB)(n())).find(t=>null!=t.widgetId&&e.payload?.compare(t.widgetId)===0)&&t((0,eo.t7)(e.payload));break;case eI.WB.SAFE_UPDATE_FRAME_BY_ID:if(null!=e.payload){let n=(0,V.w0)().getFrameById(e.payload);if(null!=n){if(-1===n.index)break;t((0,eo.v5)(n))}}break;case eI.WB.GET_FRAME_PREVIEW:{let r;if(null!=e.payload){let a=(0,ea.H6)(n(),e.payload);null!=a&&(r=(0,V.d0)().getFramePreview(a,!0)),t((0,eo.XJ)(e.payload,void 0!==r?{...r}:void 0))}break}case eI.WB.MOVE_VIEWPORT_TO_CURRENT_FRAME:{let e=n(),r=(0,Z.d1)(e),a=(0,Z.fc)(e),i=!(0,Z.l)(e)||r;if(!a||!i)break;let o=(0,eb.g4)(n());o?.widgetId!=null&&t((0,eI.hn)(o.widgetId));break}case eI.WB.RELEASE_VIEWPORT:(0,V.jF)().unlockViewport();break;case eI.WB.RECALCULATE_FRAME_COUNT_ON_BOARD:if(void 0!==e.payload){let r=(0,ei.ll)(n());r!==e.payload&&t((0,ec.qr)(r))}t((0,eo.lC)((0,V.w0)().getFrames().length));break;case eI.WB.DELETE_FRAME_PREVIEW:if(null!=e.payload){let t=(0,ea.H6)(n(),e.payload);null!=t&&(0,V.d0)().deleteFramePreview(t)}break;case eI.WB.CHANGE_FRAME_NAME:{if(e.payload?.itemId===void 0)return;let t=(0,ea.sT)(n(),e.payload.itemId);if(void 0===t)return;(0,V.w0)().renameFrame(t,e.payload.name??"");break}case eI.WB.SET_FRAMES_LOCK_STATE:(0,V.w0)().setFramesLockState(e.payload.frameIds,e.payload.state);break;case eI.WB.SET_FRAME_LOCK_STATE:(0,V.w0)().setFramesLockState([e.payload.frameId],e.payload.state);break;case eI.WB.CACHE_ALL_FRAME_PREVIEWS:{let r=e.payload?.deferRender??!0,a=Object.values((0,eb.CB)(n())??{}).map(e=>e.widgetId?.hex).filter(Boolean);if(0===a.length)break;t((0,eo.Fj)((0,V.w0)().getFrames().filter(e=>a.find(t=>t===e.tokenizer.id.hex)).reduce((e,t)=>{let n=(0,V.d0)().getFramePreview(t,r);return e.push({id:t.tokenizer.id,preview:n}),e},[])));break}case eI.WB.UPDATE_FRAME_PREVIEW:{let r=(0,V.d0)(),a=e.payload,i=(0,ea.H6)(n(),a);if(!i)break;r.deleteFramePreview(i),t((0,eo.XJ)(a,r.getFramePreview(i,!1)))}}}},to,ts,tl,td,e=>{let{dispatch:t,getState:n}=e;return()=>e=>{switch(e.type){case K.WM.READ:{let{reason:r,items:a,agendaId:i}=e.payload,o=n();if(Z.w3(o,i)?.sessionType!==ee.JM.ADVANCED)break;let s=(0,ei.xD)(o)===B.E.RUNNING,l=0===a.length;"template"!==r||s||l||t((0,j.aT)(ev.T6.TEMPLATE));break}case ec.X_.MEETING_FRAMES_COUNT_CHANGED:V.ns()?.onAgendaItemAmountChanged()}}}],tu={agendaData:(0,e_.UY)({agenda:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e4,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z.KU.ADD_AGENDA:return{...e,agendaRecord:{...e.agendaRecord??{},...t.payload.agenda}};case z.KU.DELETE_AGENDA:return{...e,agendaRecord:void 0};case z.KU.ADD_AGENDA_ITEM_OPTIMISTIC:return e3(e,{agendaItems:e.agendaRecord?.agendaItems?.concat(t.payload.token)??[]});case z.KU.ADD_AGENDA_ITEM:{let{agendaItem:n}=t.payload.data;if(void 0!==n.token){let t=e.agendaRecord?.agendaItems?.map(e=>e===n.token?n.id.toString():e);return e3(e,{agendaItems:t})}return e3(e,{agendaItems:e.agendaRecord?.agendaItems.concat(n.id.toString())??[]})}case z.KU.DELETE_AGENDA_ITEM:{let{agendaItem:n}=t.payload.data;if(n?.id===void 0)return e;let r=n.id.toString();return e3(e,{agendaItems:e.agendaRecord?.agendaItems.filter(e=>e!==r)})}case z.KU.ROLLBACK:{let{token:n,agendaItem:r}=t.payload.data;if(null!==r)return e;return e3(e,{agendaItems:e.agendaRecord?.agendaItems.filter(e=>e!==n)??[]})}case z.KU.CLEAR_AGENDA_ITEMS:return e3(e,{agendaItems:[]});case z.KU.CLEAR_ALL_AGENDAS:return e4;case z.KU.MEETING_SESSION_ID_CHANGED:{let{sessionId:n}=t.payload;return{...e,sessionId:n??void 0}}case z.KU.SET_MEETING_STATUS:return e3(e,{meetingStatus:t.payload.status});case z.KU.SET_NEXT_PLUGIN:return e3(e,{nextPlugin:t.payload.plugin});default:return e}},agendaItems:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e7,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z.KU.ADD_AGENDA:{let{agendaItems:e}=t.payload;if(void 0===e)return e7;return e}case z.KU.ADD_AGENDA_ITEM_OPTIMISTIC:{let n={...t.payload,status:e$.N.INITIAL,index:t.payload.index??""};return{...e,[n.token]:n}}case z.KU.ADD_AGENDA_ITEM:{let{agendaItem:n}=t.payload.data;if(void 0!==n.token){let t={...e};return delete t[n.token],t[n.id.toString()]={...n,token:void 0},t}return{...e,[n.id.toString()]:n}}case z.KU.DELETE_AGENDA_ITEM:{let{agendaItem:n}=t.payload.data;if(n?.id===void 0)return e;return e5(e,n.id.toString())}case z.KU.ROLLBACK:{let{token:n,agendaItem:r}=t.payload.data;if(null===r)return e5(e,n);if(r?.id!==void 0)return{...e,[r.id.toString()]:r};return e}case z.KU.UPDATE_AGENDA_ITEM_OPTIMISTIC:{let{agendaItemChanges:n}=t.payload;if(void 0===n.id)return e;return{...e,[n.id.toString()]:n}}case z.KU.UPDATE_AGENDA_ITEM:{let{agendaItems:n}=t.payload;if(void 0===n)return e;return{...e,...n}}case z.KU.CLEAR_ALL_AGENDAS:return e7;default:return e}},timers:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z.KU.ADD_AGENDA:{let{timers:e}=t.payload;if(!e)return te;return e}case z.KU.ADD_AGENDA_ITEM:{let{timer:n}=t.payload.data;if(!n)return e;return{...e,[n.id.toString()]:n}}case z.KU.DELETE_AGENDA_ITEM:{let{timer:n}=t.payload.data;if(!n)return e;return e5(e,n.id.toString())}case z.KU.ROLLBACK:{let{timer:n}=t.payload.data;if(!n)return e;return{...e,[n.id.toString()]:n}}case z.KU.UPDATE_AGENDA_ITEM:{let{timers:n}=t.payload;if(!n)return e;return{...e,...n}}case z.KU.UPDATE_AGENDA_ITEM_TIMERS:{let n=t.payload;if(!n.length)return e;let r={...e};return n.forEach(e=>{r[e.id.toString()]=e}),r}case z.KU.CLEAR_ALL_AGENDAS:return te;default:return e}},temporaryItems:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e8,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z.KU.ADD_AGENDA_ITEM_OPTIMISTIC:{let{payload:n}=t;return{...e,[n.token]:{agendaItem:null}}}case z.KU.ADD_AGENDA_ITEM:{let{agendaItem:n}=t.payload.data;if(void 0===n.token||void 0===n.id)return e;return e5(e,n.token)}case z.KU.DELETE_AGENDA_ITEM:{let{token:n,agendaItem:r,timer:a}=t.payload.data;if(void 0===n||void 0===r)return e;return{...e,[n]:{agendaItem:r,timer:a}}}case z.KU.UPDATE_AGENDA_ITEM_OPTIMISTIC:{let{token:n,agendaItem:r}=t.payload;return{...e,[n]:{agendaItem:r}}}case z.KU.DELETE_TEMPORARY_AGENDA_ITEM:{let n={...e};return Object.keys(n).forEach(e=>{e.startsWith(t.payload)&&delete n[e]}),n}case z.KU.ROLLBACK:return e5(e,t.payload.data.token);case z.KU.CLEAR_ALL_AGENDAS:return e8;default:return e}}}),frames:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e9,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case eo.jT.SET_FRAMES:return{...e,items:t.payload};case eo.jT.SET:return{...e,items:{...e.items,[t.payload.tokenizer.id.hex]:t.payload}};case eo.jT.REMOVE:return{...e,items:e5(e.items,t.payload.hex)};case eo.jT.CLEAR:return{...e9,boardHasFrames:e.boardHasFrames};case eo.jT.SET_FRAME_PREVIEW:return{...e,previews:{...e.previews,[t.payload.frameId.hex]:t.payload.framePreview}};case eo.jT.SET_FRAME_PREVIEW_LIST:return{...e,previews:{...e.previews,...t.payload.reduce((e,t)=>({...e,[t.id.hex]:t.preview}),{})}};case eo.jT.SET_FRAME_ON_BOARD_EXISTED:return{...e,boardHasFrames:t.payload>0};case eo.jT.SET_IS_ACTIVE_FRAME_CENTERED:return{...e,isActiveFrameCentered:t.payload};default:return e}}},tp=(e,t)=>{let{appService:n,framesService:r,framePreviewManager:a,showtimeSidebarService:i}=t,o=(t,n)=>{e.dispatch((0,K.Dz)({...t,token:n}))};n.onShowtimeAgendaItemCreated.add(o);let s=t=>e.dispatch((0,K.ij)(t));n.onShowtimeAgendaFullStateReceived.add(s);let l=t=>e.dispatch((0,K.V3)(t));n.onShowtimeAgendaFinished.add(l);let d=t=>e.dispatch((0,z.iG)(t));n.onShowtimeAgendaActionConfirmed.add(d);let c=t=>e.dispatch((0,K.cO)(t));n.onShowtimeAgendaActionDeclined.add(c);let u=t=>e.dispatch((0,K.W4)(t));n.onShowtimeAgendaItemDeleted.add(u);let p=t=>e.dispatch((0,K.FH)(t));n.onShowtimeAgendaItemUpdated.add(p);let m=t=>e.dispatch((0,eI.hn)(t));n.onShowtimeAgendaMoveToWidgetCommandReceived.add(m);let h=t=>e.dispatch((0,eI.CL)(t.id));r.frameNameChanged.add(h);let g=t=>e.dispatch((0,eI.CL)(t.tokenizer.id));r.contentHiddenChanged.add(g),r.frameDeleted.add(t=>{e.dispatch((0,K.Ig)(t.map(e=>e.id)))});let _=ti()(()=>e.dispatch((0,eI.Vp)()),25);r.frameListUpdated.add(_);let f=t=>{e.dispatch((0,eI.nu)(t.id))};a.framePreviewUpdated.add(f);let E=async(t,r)=>{let a=e.getState();a.showtimeSidebar.activeTab===P.q.MEETING&&i.getIsOpen()&&(void 0===(0,ei.$3)(a)&&await n.getShowtimeSessionFactory().createShowtimeSession(ee.JM.ADVANCED),r&&eC.l.addFrameToAdvancedSession(t,e))};return r.frameAdded.add(E),{publicApi:{saveSettings:n=>{let r=(0,ei.$3)(e.getState());void 0!==r&&t.pluginSettingsPackageApi?.saveSettings(n,t=>{e.dispatch(K.$G({id:n.metadata.ownerId,pluginSettingId:G.d.fromString(t),agendaId:r}))},t=>{e.dispatch(K.$G({id:t,pluginSettingId:void 0,plugin:y._.NONE,agendaId:r}))})},cancelSettings:()=>{}},onDestroy:()=>{n.onShowtimeAgendaItemCreated.remove(o),n.onShowtimeAgendaFullStateReceived.remove(s),n.onShowtimeAgendaFinished.remove(l),n.onShowtimeAgendaActionConfirmed.remove(d),n.onShowtimeAgendaActionDeclined.remove(c),n.onShowtimeAgendaItemDeleted.remove(u),n.onShowtimeAgendaItemUpdated.remove(p),n.onShowtimeAgendaMoveToWidgetCommandReceived.remove(m),r.frameNameChanged.remove(h),r.contentHiddenChanged.remove(g),r.frameDeleted.remove(_),r.frameListUpdated.remove(_),a.framePreviewUpdated.remove(f),r.frameAdded.remove(E),V.d0()?.resetStorage()}}};var tm=n(439367);let th={isParticipant:!1,meetingFramesCount:0,isFacilitatorFeedbackActive:!1,meetingMode:tm.cf.INITIAL,isGuidedNavigationEnabled:!1,isWatchTutorialTipVisible:!1};var tg=n(283232);let t_=e=>null!==e&&"object"==typeof e&&"wakeLock"in e;class tf{constructor(e,t){this.document=e,this.sentinel=null,this.handleVisibilityChange=()=>{"visible"===this.document.visibilityState&&this.request()},this.wakeLock=t_(t)?t.wakeLock:void 0}async request(){if(void 0!==this.wakeLock&&null===this.sentinel)try{this.sentinel=await this.wakeLock.request("screen"),this.sentinel.addEventListener("release",()=>{this.sentinel=null}),this.document.addEventListener("visibilitychange",this.handleVisibilityChange)}catch(e){console.warn(e)}}release(){this.sentinel?.release(),this.sentinel=null,this.document.removeEventListener("visibilitychange",this.handleVisibilityChange)}}var tE=n(589403);let tv=e=>e===tE.Y.INTERACTIVE_MEETING_NOTIFICATION?{id:e,statDescription:"notification under meeting icon",hideTimeout:1e4}:{id:e,statDescription:""};var tI=((m={}).meetingNotificationClosed="meeting-notification-closed",m.meetingPanelOpenedBoardList="meeting-panel-opened",m);let tb=ti()((e,t)=>{V.Lh()?.setAvailableToolSet(e,t)},1e3);var tx=n(778679);let tT={isEnabled:!1,restrictViewport:!1,isMeetingTipActive:!1,isFacilitatorFeedbackActive:!1,hasRestrictViewportFeature:!0,limitedToolsEnabled:!0,availableTools:[{tool:O.p.STICKERS,selected:!0},{tool:O.p.SHAPES_AND_LINES,selected:!1},{tool:O.p.TEXT,selected:!1},{tool:O.p.PEN,selected:!1},{tool:O.p.COMMENTS,selected:!0},{tool:O.p.MEDIA_LIBRARY,selected:!0}],toolbarEnabled:!1};var tS=((h={}).SET_SOUND_BUFFER="[SOUNDBOARD] SET_SOUND_BUFFER",h.SET_CURRENT_PLAYING_SOURCE="[SOUNDBOARD] SET_CURRENT_PLAYING_SOURCE",h);let tA=(e,t)=>({type:"[SOUNDBOARD] SET_SOUND_BUFFER",payload:{id:e,soundBuffer:t}}),tw=(e,t)=>({type:"[SOUNDBOARD] SET_CURRENT_PLAYING_SOURCE",payload:{id:e,currentPlayingSource:t}});var ty=n(552322),tN=n(202784);function tC(){return(tC=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var tR=(0,tN.forwardRef)(function(e,t){return tN.createElement("svg",tC({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),g||(g=tN.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 16h4.586l5.707 5.707c.63.63 1.707.184 1.707-.707V3c0-.89-1.077-1.337-1.707-.707L7.586 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1Zm5-2H4v-4h4a1 1 0 0 0 .707-.293L13 5.414v13.172l-4.293-4.293A1 1 0 0 0 8 14Zm9-4a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4Zm5-5a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1Z",fill:"currentColor"})))});let tO={soundIds:["appreciation","sad_trombone","quiet","awkward","drum_roll","badum_tss"],soundInfos:{appreciation:{i18nKey:"showtime.soundboard.applause",icon:(0,ty.jsx)(tR,{}),src:n(166679),fallback:n(986431)},sad_trombone:{i18nKey:"showtime.soundboard.trombone",icon:(0,ty.jsx)(tR,{}),src:n(842912),fallback:n(160873)},quiet:{i18nKey:"showtime.soundboard.quiet",icon:(0,ty.jsx)(tR,{}),src:n(715766),fallback:n(23203)},awkward:{i18nKey:"showtime.soundboard.crickets",icon:(0,ty.jsx)(tR,{}),src:n(563465),fallback:n(476520)},drum_roll:{i18nKey:"showtime.soundboard.drumroll",icon:(0,ty.jsx)(tR,{}),src:n(113664),fallback:n(481954)},badum_tss:{i18nKey:"showtime.soundboard.rimshot",icon:(0,ty.jsx)(tR,{}),src:n(675449),fallback:n(567038)}},soundBuffers:{},currentPlayingSources:{}};var tM=((_={}).LOAD_SOUND="[SOUNDBOARD_MIDDLEWARE] LOAD_SOUND",_.PLAY_SOUND_FOR_ALL="[SOUNDBOARD_MIDDLEWARE] PLAY_SOUND_FOR_ALL",_.PLAY_SOUND="[SOUNDBOARD_MIDDLEWARE] PLAY_SOUND",_);let tk=e=>({type:"[SOUNDBOARD_MIDDLEWARE] LOAD_SOUND",payload:{id:e}}),tD=e=>({type:"[SOUNDBOARD_MIDDLEWARE] PLAY_SOUND",payload:{soundId:e}}),tP=e=>e.soundboard.soundIds,tj=e=>e.soundboard.soundInfos,tL=(e,t)=>tj(e)[t],tF=e=>e.soundboard.soundBuffers,tU=(e,t)=>tF(e)[t],tB=e=>e.soundboard.currentPlayingSources,tG=(e,t)=>tB(e)[t],tW=e=>e?.sessionType===ee.JM.ADVANCED;function tH(e,t,n){(0,V._t)().track("showtime_navigation_bar_soundboard_sound_error",{showtime_session_id:n,sound_name:e,error_type:t})}class tV{constructor(e,t){this.resourceType=e,this.errorType=t}serialize(){return{resourceType:this.resourceType,errorType:this.errorType}}}async function tz(e,t){try{let n=await fetch(e);if(n.ok)return n;return new tV(t,n.status)}catch(n){let e=n instanceof Error?n:Error(JSON.stringify(n));return new tV(t,e?.message)}}async function tZ(e,t,n){let r=await tz(e.src,"mp3");if(r instanceof tV)tH(t,"mp3_fetch_error",n);else try{return r.arrayBuffer()}catch{tH(t,"mp3_decode_error",n)}let a=await tz(e.fallback,"fallback");a instanceof tV&&tH(t,"fallback_fetch_error",n);try{let e=window.atob(await a.text()),t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n.buffer}catch{tH(t,"fallback_decode_error",n)}}var tK=n(554337),tY=n(144077),tq=n(746722),t$=n(582191);class tJ extends tK.g{constructor(e){super(),this.actions=(0,tY.jf)({SHOWTIME_NEXT:"SHOWTIME_NEXT",SHOWTIME_PREV:"SHOWTIME_PREV"}),this.actionMap={[this.actions.SHOWTIME_NEXT.value]:e.next,[this.actions.SHOWTIME_PREV.value]:e.previous},this.shortcutScheme=[{action:this.actions.SHOWTIME_PREV,defaultShortcut:{code:tq.mW.ArrowLeft},extraShortcuts:[{code:tq.mW.ArrowUp},{code:tq.mW.PageUp}]},{action:this.actions.SHOWTIME_NEXT,defaultShortcut:{code:tq.mW.ArrowRight},extraShortcuts:[{code:tq.mW.ArrowDown},{code:tq.mW.PageDown},{code:tq.mW.Space}]}],this.keyMap=(0,t$.a)(this.shortcutScheme,this.actionMap)}isAvailable(){return(0,V.dt)().canvasIsAvailable()}}class tX extends tK.g{constructor(e){super(),this.actions=(0,tY.jf)({SHOWTIME_STOP:"SHOWTIME_STOP"}),this.actionMap={[this.actions.SHOWTIME_STOP.value]:e},this.shortcutScheme=[{action:this.actions.SHOWTIME_STOP,defaultShortcut:{code:tq.mW.Escape}}],this.keyMap=(0,t$.a)(this.shortcutScheme,this.actionMap)}isAvailable(){return!0}}class tQ{#e;#t;constructor({next:e,previous:t,stop:n}){this.#e=new tJ({next:e,previous:t}),this.#t=new tX(n)}enableFramesNavigation(){V.gS()?.registerConsumer(this.#e)}disableFramesNavigation(){V.gS()?.removeConsumer(this.#e)}enableStopMeeting(){V.gS()?.registerConsumer(this.#t)}disableStopMeeting(){V.gS()?.removeConsumer(this.#t)}disable(){this.disableFramesNavigation(),this.disableStopMeeting()}}var t0=n(4874);let t1=[e=>{let t=new tf(document,navigator),n=()=>{t.release()};return r=>a=>{let{dispatch:i}=e;switch(a.type){case q.DATA_CHANGED:{let{isParticipant:n,leaderId:r,sessionId:o}=(0,tg.e)(e.getState()),s={isParticipant:n,leaderId:r,sessionId:o},l=a.payload,d=!s.isParticipant&&l.isParticipant,c=s.isParticipant&&!l.isParticipant;(d||c)&&i((0,ec.De)(l,s)),d?i(X()):c&&i(Q()),n||t.release();break}case q.MEETING_STARTED:i(J(tm.cf.VIEW)),V.ns()?.onStarted(),et(),t.request(),(0,V.Tm)().addOnce(n),(0,Z.d1)(e.getState())?V.YG()?.toggleFacilitatorViewMode(!0):V.YG()?.toggleAudienceViewMode(!0);break;case q.CHANGE_MEETING_MODE:i(a.payload===tm.cf.VIEW?(0,j.F1)(ev.T6.SHOWTIME_NAVIGATION_PANEL):(0,j.aT)(ev.T6.SHOWTIME_NAVIGATION_PANEL));break;case ec.X_.MONITORING_MEETING_STARTED_FROM_CLIENT:V.Lh()?.reportMeetingStartedFromClient();break;case q.MEETING_STOPPED:t.release(),(0,V.Tm)().remove(n)}r(a)}},()=>e=>t=>{switch(t.type){case Y.rG.STATUS_CHANGE_RESPONSE:{let{isEnabled:e}=t.payload,n=(0,V.av)(),r=n?.getItem(tI.meetingNotificationClosed)==="true",a=tv(tE.Y.INTERACTIVE_MEETING_NOTIFICATION);e&&!r?(V.HY()?.closeUITip(a.id),setTimeout(()=>V.HY()?.showUITip(a),300)):V.HY()?.closeUITip(a.id);break}case Y.rG.TOGGLE_TOOLBAR_VISIBILITY:{let{sessionId:e,isVisible:n}=t.payload;V.Lh()?.setToolbarVisible(e,n);break}case Y.rG.CHANGE_MEETING_TOOLS:{let{sessionId:e,availableTools:n}=t.payload;tb(e,n)}}e(t)},e=>{let{dispatch:t,getState:n}=e;return e=>async a=>{switch(a.type){case q.MEETING_STARTED:if(!tW((0,Z.gC)(n()))||void 0===await (0,V.kq)())break;r=V._M()?.soundPlayed.add(e=>{t(tD(e))}),tP(n()).forEach(e=>{t(tk(e))});break;case k.qF.STOPPED:r?.detach(),r=void 0;break;case tM.LOAD_SOUND:{let e=await (0,V.kq)();if(void 0===e)break;let{id:r}=a.payload;if(void 0!==tU(n(),r))break;let i=tL(n(),r);if(void 0===i)break;let o=Z.gC(n())?.id.toString();(0,V._t)().track("showtime_navigation_bar_soundboard_sound_load",{showtime_session_id:o,sound_name:r});let s=await tZ(i,r,o);s&&e.decodeAudioData(s,e=>{t(tA(r,e)),(0,V._t)().track("showtime_navigation_bar_soundboard_sound_load_success",{showtime_session_id:o,sound_name:r})},e=>{V.K5()?.error(e,[r])});break}case tM.PLAY_SOUND_FOR_ALL:{let e=a.payload.soundId;V._M()?.playSound(e),t(tD(e));break}case tM.PLAY_SOUND:{let e=await (0,V.kq)();if(void 0===e)break;let r=a.payload.soundId,i=tU(n(),r);if("interrupted"===e.state&&await e.resume(),void 0===i||"running"!==e.state)break;let o=tG(n(),r);void 0!==o&&(o.onended=null,o.stop(0),o.disconnect());let s=e.createBufferSource(),l=Object.assign(s,{startTime:Date.now(),buffer:i});l.connect(e.destination),l.start(0),t(tw(r,l)),s.onended=()=>{s?.disconnect(),t(tw(r,void 0)),(0,V._t)().track("showtime_navigation_bar_soundboard_sound_played",{showtime_session_id:Z.gC(n())?.id.toString(),sound_name:r})}}}e(a)}},e=>{let{dispatch:t}=e,n=t0.c.getInstance(),r=new tQ({next:()=>t((0,K.lp)(ev.T6.KEYBOARD)),previous:()=>t((0,K.Xp)(ev.T6.KEYBOARD)),stop:()=>t((0,k.sT)(ev.T6.KEYBOARD))});return()=>async e=>{switch(e.type){case k.qF.START:n.request();break;case k.qF.STOP:n.exit();break;case k.qF.SET_PERMISSIONS:e.payload.canStop?r.enableStopMeeting():e.payload.canStop||r.disableStopMeeting(),e.payload.canNavigate?r.enableFramesNavigation():e.payload.canNavigate||r.disableFramesNavigation();break;case k.qF.STOPPED:case q.MEETING_STOPPED:r.disable()}}}],t2={meeting:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:th,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ec.X_.DATA_UPDATED:return{...e,...t.payload.data};case ec.X_.MEETING_FRAMES_COUNT_CHANGED:return{...e,...t.payload};case ec.X_.OPEN_FEEDBACK:return{...e,isFacilitatorFeedbackActive:t.payload.isEnabled};case ec.X_.CLEAR:return th;case ec.X_.MEETING_MODE_CHANGED:return{...e,...t.payload};case ec.X_.GUIDED_NAVIGATION_UPDATED:return{...e,isGuidedNavigationEnabled:t.payload.isEnabled};case ec.X_.MONITORING_MEETING_STARTED_FROM_SERVER:return{...e,isMonitoringMeetingStarted:!0};case ec.X_.MONITORING_MEETING_STARTED_FROM_CLIENT:return{...e,isMonitoringMeetingStarted:!1};case ec.X_.SET_WATCH_TUTORIAL_TIP_VISIBILITY:return{...e,isWatchTutorialTipVisible:t.payload};default:return e}},workshopMode:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tT,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.rG.DATA_CHANGED:{let{status:n,lockingOnActiveSlide:r,hasRestrictViewportFeature:a,limitedToolsEnabled:i,availableTools:o,toolbarEnabled:s}=t.payload;return{...e,isEnabled:n===B.E.RUNNING,restrictViewport:r,hasRestrictViewportFeature:a,limitedToolsEnabled:i,toolbarEnabled:s,availableTools:(0,tx.Z)(o,O.p.EMOJI_ICONS,O.p.MEDIA_LIBRARY)}}case Y.rG.STATUS_CHANGE_RESPONSE:return{...e,isEnabled:t.payload.isEnabled};case Y.rG.TOGGLE_TOOLBAR_VISIBILITY:{let{isVisible:n}=t.payload;return{...e,toolbarEnabled:n}}case Y.rG.CHANGE_MEETING_TOOLS:return{...e,availableTools:(0,tx.Z)(t.payload.availableTools,O.p.EMOJI_ICONS,O.p.MEDIA_LIBRARY)};default:return e}},soundboard:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tO,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case tS.SET_SOUND_BUFFER:return{...e,soundBuffers:{...e.soundBuffers,[t.payload.id]:t.payload.soundBuffer}};case tS.SET_CURRENT_PLAYING_SOURCE:return{...e,currentPlayingSources:{...e.currentPlayingSources,[t.payload.id]:t.payload.currentPlayingSource}};default:return e}}},t4=(e,t)=>{let{appService:n}=t,r=t=>{e.dispatch((0,Y.at)(t))};return n.onShowtimeWorkshopModeFullStateReceived.add(r),{onDestroy:()=>{n.onShowtimeWorkshopModeFullStateReceived.remove(r)}}},t3=(e,t)=>{let n=()=>e().frames.isActiveFrameCentered,r=(0,H.debounce)((e,r,a)=>{n()&&("move_to_frame"===a||r?r&&t((0,eI.Iy)()):t((0,eo.Kf)(!1)))},100);return{registerRecenterListener:()=>{(0,V.mh)().viewportUpdated.add(r)},deregisterRecenterListener:()=>{(0,V.mh)().viewportUpdated.remove(r)}}};var t6=n(389958),t5=n(575362),t9=n(965033),t7=n(337525),t8=n(462669),ne=n.n(t8);let nt=n.p+"ed7bc7196dea26e0.svg";var nn=n(283843),nr=n(652884),na=n(611874),ni=n.n(na);let no=(e,t)=>(e?.userInfo?.name.split(" ")[0]||e?.userInfo?.name)??t,ns=e=>{let t;let{t:n}=(0,t7.I)(el.a),{leader:r,participants:a}=e,i=no(r,"Presenter"),[o,s]=a,l=no(o,"Participant 1"),d=no(s,"Participant 2");switch(a.length){case 0:t=n("showtime.joinDialog.participantsTeaser.leaderAlone",{name:i,interpolation:{escapeValue:!1}});break;case 1:t=n("showtime.joinDialog.participantsTeaser.singleParticipant",{name:l,interpolation:{escapeValue:!1}});break;case 2:t=n("showtime.joinDialog.participantsTeaser.twoParticipants",{name1:l,name2:d,interpolation:{escapeValue:!1}});break;default:t=n("showtime.joinDialog.participantsTeaser.multipleParticipants",{name:l,count:a.length-1,interpolation:{escapeValue:!1}})}let c=(0,ty.jsx)(nn.p,{pictureUrl:r?.userInfo?.picture.size44??"",size:nr.ni.Size32,"aria-hidden":!0}),u=(0,ty.jsx)("span",{className:ni().pendingAvatar}),p=(0,ty.jsx)("span",{className:ni().pendingAvatar});return o?.userInfo&&(u=(0,ty.jsx)(nn.p,{pictureUrl:o.userInfo.picture.size44??"",size:nr.ni.Size32,"aria-hidden":!0})),a.length>2?p=(0,ty.jsx)("span",{className:ni().countAvatar,children:a.length-1}):s?.userInfo&&(p=(0,ty.jsx)(nn.p,{pictureUrl:s.userInfo.picture.size44??"",size:nr.ni.Size32,"aria-hidden":!0})),(0,ty.jsxs)("div",{className:ni().root,children:[(0,ty.jsxs)("div",{className:ni().avatars,children:[c,u,p]}),(0,ty.jsx)("span",{className:ni().message,children:t})]})},nl=(e,t)=>()=>{e(),(0,V._t)().track(ev.LO.JOIN_POPUP_INTERACTED,{action_taken:t.actionTaken,session_id:t.sessionId.toString(),session_type:t.sessionType})},nd=(0,t9.U5)((e,t)=>({getSessionData:e,onCancel:()=>t({type:"cancel"}),onJoin:()=>t({type:"join"})}))(tN.memo(e=>{let{onJoin:t,onCancel:n,getSessionData:r}=e,{isVisible:a,handleClose:i,handleSubmit:o,onClose:s}=(0,t9.dm)(n,t),[l,d]=(0,tN.useState)(),[c,u]=(0,tN.useState)([]),[p]=(0,tN.useState)(()=>r()?.id),[m]=(0,tN.useState)(()=>r()?.sessionType),{t:h}=(0,t7.I)(el.a);if((0,tN.useEffect)(()=>{let{userId:e}=(0,V.Yd)();if(void 0===e)return;let t=G.d.fromString(e);c.find(e=>e?.userId?.compare(t)===0)&&i()},[c,i]),(0,tN.useEffect)(()=>{let e=()=>{let e=r(),t=(0,V.Yd)().showtimeOnlineUserItem.getUserItems(),n=t.find(t=>e?.leaderId&&0===t.userId.compare(e.leaderId)),a=e?.participants.filter(e=>n?.userInfo?.id!==e.toString()).map(e=>t.find(t=>0===t.userId.compare(e)))??[];void 0!==n&&(d(n),u(a))};e();let t=setInterval(e,1e3);return()=>{clearInterval(t)}},[r]),void 0===p||void 0===m)return null;let g=h("showtime.joinDialog.presentationStarted"),_=h("showtime.joinDialog.startedBy",{leaderName:l?.userInfo?.name??"",interpolation:{escapeValue:!1}});return(0,ty.jsxs)(t9.Vq,{"aria-label":`${g} ${_}`,containerDataAutoTestId:"showtime-join-dialog",isVisible:a,onEscape:nl(i,{actionTaken:ev.eW.ESC_BUTTON,sessionId:p,sessionType:m}),onClickOutside:nl(i,{actionTaken:ev.eW.EMPTY_CLICK,sessionId:p,sessionType:m}),onCloseButtonClick:nl(i,{actionTaken:ev.eW.CLOSE_BUTTON,sessionId:p,sessionType:m}),onClose:s,children:[(0,ty.jsx)(t6.l,{size:"none",className:ne().iconContainer,"aria-hidden":"true",href:nt}),(0,ty.jsxs)(t9.fK,{children:[g,(0,ty.jsx)("br",{}),(0,ty.jsx)("span",{className:ne().leaderName,children:_})]}),(0,ty.jsx)(t9.a7,{children:(0,ty.jsx)(ns,{leader:l,participants:c})}),(0,ty.jsxs)(t9.cN,{children:[(0,ty.jsx)(t5.z,{onClick:nl(o,{actionTaken:ev.eW.JOIN_BUTTON,sessionId:p,sessionType:m}),size:"x-large","data-testid":"showtime-join-presentation",children:h("showtime.joinDialog.joinPresentation")}),(0,ty.jsx)(t5.z,{onClick:nl(i,{actionTaken:ev.eW.DISMISS_BUTTON,sessionId:p,sessionType:m}),variant:"secondary",size:"x-large","data-testid":"showtime-cancel-join-presentation",children:h("showtime.joinDialog.notNow")})]})]})})),nc=async e=>(await el.a.loadCurrentLang(),t9.iV.enqueue({initiator:"showtime",initiatorId:e()?.id.toString()??"showtime",componentFactory:nd(e)})),nu=function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(e,t)=>!Object.is(e,t);return a=>i=>o=>{let s=e(a.getState());(void 0===n&&void 0!==s||r(n,s))&&(n=s,t(s,a)),i(o)}},np=()=>nu(Z.fc,(e,t)=>{let{getState:n,dispatch:r}=t;(0,V.jl)()("ParticipantChangedMiddleware",`isParticipant = ${e}`);let a=t3(n,r);if(!e){r((0,k.ZE)({isDetached:!0})),a.deregisterRecenterListener(),(0,V.jl)()("ParticipantChangedMiddleware stopFollowing"),(0,V.S4)().stopFollowing("showtime_stop_btn");return}let i=n(),o=(0,Z.d1)(i),s=(0,Z.gC)(i),l=!(0,V.lZ)().isPrivateModeEnabledForAnonymousUser;if(s){if(V.P2()?.clearSelection(),o)a.registerRecenterListener();else if(l){r((0,k.ZE)({isDetached:!1}));let e=Z.vS(n())?.userInfo?.name??"UNKNOWN";(0,V.jl)()("ParticipantChangedMiddleware startFollowing"),(0,V.S4)().startFollowing(s.leaderId,e,"showtime_join_session")}}}),nm=!1,nh=()=>{a?.(),a=void 0,window.removeEventListener("popstate",nh)},ng=()=>nu(e=>[(0,Z.fc)(e),(0,Z.cT)(e)],(e,t)=>{let[n,r]=e,{getState:i,dispatch:o}=t,s=i();if(n||!r){nh(),nm=n;return}let l=()=>(0,Z.gC)(i()),d=async()=>{let e=await nc(l);if(a=()=>{e.close({type:"cancel"}),nm=!1},nm){nh();return}"join"===(await e.waitForClose()).type&&o((0,k.D)())};!r||(0,Z.d1)(s)||(0,Z.U7)(s)||(d(),window.addEventListener("popstate",nh),o((0,k.ah)()))},(e,t)=>{let[n,r]=e,[a,i]=t;return n!==a||r!==i});var n_=n(878897);let nf=e=>{let{dispatch:t,getState:n}=e;return e=>r=>{switch(r.type){case er.y2.RAISE_HAND:V.af()?.raiseHand();break;case er.y2.LOWER_HAND:V.af()?.lowerHand(r.payload.userId);break;case er.y2.LOWER_HAND_IF_RAISED:{let e=n(),{actionType:a,userId:i}=r.payload;(void 0!==i?(0,n_.Ux)(i)(e):(0,n_.x4)(e))&&(t((0,er.Pf)(i)),t((0,er.YC)(a)));break}case er.y2.LOWER_HAND_FOR_ALL_PARTICIPANTS:{let{actionType:e}=r.payload,a=(0,n_.Xx)(n());0!==a.length&&(t((0,er.Bo)(e)),a.forEach(e=>{t((0,er.Pf)(e))}));break}case er.y2.USER_STATUSES_CHANGED:t((0,er.f4)(V.af()?.isMyHandRaised()??!1)),t((0,er.zk)());break;case er.y2.CALCULATE_PARTICIPANTS_RAISED_HANDS:{let e=(0,Z.gC)(n());if(void 0===e)return;let r=V.af()?.getRaisedHandsArray()??[],{participants:a,leaderId:i}=e,o=a.filter(e=>e.toString()!==i.toString());t((0,er.eC)(r.filter(e=>{let{id:t}=e;return o.find(e=>e.toString()===t)}).map(e=>e.id)))}}e(r)}};var nE=n(952334);let nv=e=>{let{dispatch:t,getState:n}=e;return()=>async e=>{switch(e.type){case j.tI.RUN_ACTIVITIES_SESSION:{if(!e.payload.isShowTimeAdvancedAvailable){t((0,j.aT)(e.payload.statSource));break}let r=(0,ei.HY)(n());if(void 0!==r)t((0,k.BL)(e.payload.statSource,r));else{let r=(0,V.w0)().getSortedPresentedFrameIds(),a=(0,Z.wH)(n());(0,V.n6)().getShowtimeSessionFactory().createOrUpdateShowtimeWithFrames(r,ee.JM.ADVANCED,a).then(n=>{let{session:r}=n;t((0,k.BL)(e.payload.statSource,r.id))}).catch(e=>{throw(0,U.KC)(e)})}break}case j.tI.RUN_PRESENTATION_OR_OPEN_SHOWTIME_SIDEBAR:if((0,V.w0)().getFrames().length>0){t((0,j.h2)(e.payload.statSource));break}t((0,j.aT)(e.payload.statSource,P.q.FRAMES));break;case j.tI.RUN_PRESENTATION_STRUCTURED:(0,V.vA)().startPresentationFromFrames(e.payload.statSource);break;case j.tI.RUN_PRESENTATION_AD_HOC:(0,V.vA)().startAdHocPresentation(e.payload.statSource);break;case j.tI.OPEN_SHOWTIME_SIDEBAR:(0,V.od)().open(),t((0,j.ny)(e.payload.tab));break;case j.tI.CLOSE_SHOWTIME_SIDEBAR:(0,V.od)().close();break;case j.tI.SET_ACTIVE_TAB:if(e.payload===P.q.MEETING){let e=(0,Z.cT)(n()),t=(0,Z.wH)(n());void 0===e&&t?.id&&V.n6()?.getWorkshopModeState(t.id)}}}};var nI=n(490797);let nb=e=>e.reduce((e,t)=>t.selected?e.concat(t.tool):e,[]);var nx=n(149864);let nT=e=>e===P.q.MEETING?ev.T6.ACTIVITIES_TAB:ev.T6.FRAMES_TAB,nS=e=>{let{getState:t}=e;return e=>n=>{let r=t();switch(n.type){case er.y2.RAISE_HAND:(0,V._t)().track(ev.LO.MEETING_BAR_RAISE_HAND_CLICKED,{action_source:W.vF.showtimeParticipantBar});break;case er.y2.SEND_LOWER_HAND_STAT_EVENT:{let{actionType:e}=n.payload;(0,V._t)().track(ev.LO.MEETING_BAR_LOWER_HAND_CLICKED,{lower_all_raised_hands:!1,action_source:W.vF.showtimeParticipantBar,action_type:e});break}case er.y2.SEND_LOWER_HAND_FOR_ALL_PARTICIPANTS_STAT_EVENT:{let{actionType:e}=n.payload;(0,V._t)().track(ev.LO.MEETING_BAR_LOWER_HAND_CLICKED,{lower_all_raised_hands:!0,action_source:W.vF.showtimeParticipantBar,action_type:e});break}case er.y2.REACTIONS_BUTTON_CLICKED:(0,V._t)().track(ev.LO.MEETING_BAR_REACTIONS_BUTTON_CLICKED,{showtime_session_id:Z.gC(r)?.id.toString()});break;case er.y2.SOUNDBOARD_SOUND_CLICKED:(0,V._t)().track(ev.LO.MEETING_BAR_SOUNDBOARD_SOUND_CLICKED,{showtime_session_id:Z.gC(r)?.id.toString(),sound_name:n.payload.soundName})}e(n)}};var nA=n(566774),nw=n(711560);let ny=e=>e?Math.round(e/6e4):0,nN=(e,t,n,r,a,i)=>{let o=(0,V.w0)().getFrames().length,s=(0,Z.w3)(e,r),l=(0,nI.Ze)(e),d={creation_tools:l,cursors:(0,V.E4)().getShowCursors(),dark_background:(0,V.BV)().isMaskEnabled(),fullscreen:"false"!==(0,V.av)().getItem(nw.O.FULLSCREEN)};if(void 0===s)return{showtime_session_id:r.toString(),action_source:t,nr_sync_users:n,nr_frames_on_board:o,source_modes_v2_stack:a,settings_at_start:d};if(ei.W1(e)?.toString()!==r.toString())return{showtime_session_id:s.sessionId,session_type:s.sessionType,nr_frames:0,nr_frames_on_board:o,nr_sync_users:n,action_source:t,source_modes_v2_stack:a,settings_at_start:d};let c=Object.values((0,eb.CB)(e)),u=c.reduce((e,t)=>e+ny(t.duration),0),p=0,m=c.reduce((e,t)=>void 0===t.plugin||t.plugin===y._.NONE||(p+=1,e.includes(t.plugin))?e:e.concat(t.plugin),[]);return{showtime_session_id:s.sessionId,session_type:s.sessionType,nr_frames:c.length,nr_sync_users:n,nr_frames_with_apps:p,nr_frames_on_board:o,meeting_duration_minutes:u,list_of_apps_added:m,item_id_start:i?.toString(),settings:{is_limited_tools_enabled:l,set_of_tools_enabled:l?nb((0,nI.wm)(e)):void 0},action_source:t,source_modes_v2_stack:a,settings_at_start:d}};var nC=n(179732);let nR=[e=>{let{getState:t}=e;return e=>n=>{let r=t(),a=(0,V._t)(),i=(0,Z.gC)(r)??(0,Z.a9)(r),o=i?.sessionId??i?.id?.toString(),s=i?.sessionType;switch(n.type){case Y.rG.CHANGE_MEETING_TOOLS:{let{payload:{availableTools:e},statSource:t}=n;a?.track(ev.LO.LIMITED_TOOLS_CHANGED,{source:t,showtime_session_id:o,session_type:s,is_limited_tools_enabled:nI.Ze(r),set_of_tools_enabled:nb(e)});break}case Y.rG.TOGGLE_TOOLBAR_VISIBILITY:a?.track(ev.LO.LIMITED_TOOLS_TOGGLED,{source:n.statSource,showtime_session_id:o,session_type:s,is_limited_tools_enabled:n.payload.isVisible,set_of_tools_enabled:nb(nI.wm(r))});break;case K.WM.SEND_STAT_FOR_CREATE:a?.track(ev.LO.FRAME_ADDED,{meeting_frame_id:n.payload.frameId.toString(),meeting_frame_source:n.payload.source,meeting_session_id:o});break;case K.WM.DELETE_ITEM:{let{id:e,source:t}=n.payload;a?.track(ev.LO.FRAME_DELETED,{meeting_frame_id:e.toString(),meeting_frame_source:t,showtime_session_id:o});break}case K.WM.SEND_STAT_ITEM_UPDATED:a?.track(ev.LO.FRAME_UPDATED,{meeting_frame_id:n.payload.id.toString(),changes:n.payload});break;case K.WM.REORDER_ITEMS:a?.track(ev.LO.FRAMES_REORDERED,{showtime_session_id:o,meeting_reordered_frames_nr:n.payload.ids.length})}e(n)}},e=>{let{getState:t}=e;return e=>n=>{let r=t(),a=(0,V._t)(),i=(0,Z.gC)(r)??(0,Z.a9)(r),o=i?.sessionId??i?.id?.toString(),s=i?.sessionType;switch(n.type){case en.Y2.BAR_APPS_BUTTON_CLICKED:a?.track(ev.LO.MEETING_BAR_APPS_BUTTON_CLICKED,{showtime_session_id:o,session_type:s});break;case en.Y2.BAR_SLIDES_BUTTON_CLICKED:a?.track(ev.LO.MEETING_BAR_SLIDES_BUTTON_CLICKED,{showtime_session_id:o});break;case en.Y2.BAR_SLIDE_PREVIEW_HOVERED:a?.track(ev.LO.MEETING_BAR_SLIDE_PREVIEW_HOVERED,{showtime_session_id:o});break;case en.Y2.BAR_SLIDE_PREVIEW_CLICKED:a?.track(ev.LO.MEETING_BAR_SLIDE_PREVIEW_CLICKED,{showtime_session_id:o});break;case en.Y2.CHANGE_LEADER_CLICKED:{let{currentLeader:e,newLeader:t,actionType:r,source:i}=n.payload;a?.track(ev.LO.CHANGE_LEADER,{showtime_session_id:o,session_type:s,current_leader:e,new_leader:t,action_type:r,action_source:i});break}case en.Y2.BAR_SHARE_CLICKED:a?.track(ev.LO.MEETING_BAR_SHARE_CLICKED,{showtime_session_id:o});break;case en.Y2.BAR_PREFERENCES_CLICKED:a?.track(ev.LO.MEETING_BAR_PREFERENCES_CLICKED,{showtime_session_id:o,session_type:s});break;case k.qF.SET_DROPDOWN_OPENED:{let{dropdown:e,isOpened:t}=n.payload;e===nx.x.participantList&&t&&a?.track(ev.LO.MEETING_BAR_PARTICIPANT_LIST_CLICKED,{showtime_session_id:o})}}e(n)}},e=>{let{getState:t}=e;return e=>n=>{let r=t(),a=(0,Z.gC)(r)??(0,Z.a9)(r),i=a?.sessionId??a?.id?.toString();switch(n.type){case j.tI.OPEN_SHOWTIME_SIDEBAR:{let e=(0,ei.ll)(r);V._t()?.track(ev.LO.PANEL_CLOSED,{nr_meeting_frames:e,tab:nT(n.payload.tab),action_source:n.payload.statSource});break}case j.tI.SEND_STAT_ON_ACTIVE_TAB_SWITCH:V._t()?.track(ev.LO.PANEL_TAB_SWITCHED,{tab:nT(n.payload.tab)});break;case eI.WB.SHOW_HOW_PICK_FRAME:V._t()?.track(ev.LO.PICK_FRAMES_CLICKED,{showtime_session_id:i});break;case j.tI.PRESENT_BUTTON_CLICKED:V._t()?.track(ev.LO.ENTRYPOINT_CLICKED,{button_side:n.payload.buttonSide});break;case k.qF.OPEN_ENTRYPOINT_MENU:V._t()?.track(ev.LO.ENTRYPOINT_CLICKED,{button_side:ev.MQ.MORE_OPTIONS});break;case k.qF.LOG_JOIN_POPUP_SHOWN:V._t()?.track(ev.LO.JOIN_POPUP_SHOWN,{showtime_session_id:i,session_type:a?.sessionType})}e(n)}},nS,e=>{let{getState:t}=e;return e=>n=>{let r=t(),a=(0,V._t)(),l=(0,Z.gC)(r)??(0,Z.a9)(r),d=l?.sessionId??l?.id?.toString(),c=l?.sessionType;switch(n.type){case k.qF.JOIN_RUNNING_SESSION:a.track(ev.LO.PRESENTATION_JOINED,{showtime_session_id:d,session_type:l?.sessionType,action_source:n.payload.statSource});break;case k.qF.LEAVE_SHOWTIME:a.track(ev.LO.PRESENTATION_LEFT,{showtime_session_id:d,session_type:c,action_source:n.payload.statSource});break;case k.qF.BACK_TO_PRESENTER_STAT:a.track(ev.LO.NAVIGATION_BAR_BACK_TO_PRESENTER,{showtime_session_id:d,session_type:c});break;case k.qF.UNFOLLOW_PRESENTER_STAT:a.track(ev.LO.NAVIGATION_HOST_UNFOLLOWED,{showtime_session_id:d});break;case k.qF.SET_RUNNING_SESSION:{let{userId:e}=(0,V.Yd)();if(void 0!==n.payload){let t=(0,Z.w3)(r,n.payload);if(t?.leaderId.toString()===e&&void 0!==i){let e=(0,V.Yd)().showtimeOnlineUserItem.getSyncBoardUsersCount();a.track(ev.LO.PRESENTATION_START,nN(r,i,e,n.payload,s,o)),i=void 0,o=void 0}}break}case k.qF.PREPARE_START:s=(0,nA.p)(),i=n.payload.source,o=n.payload.startItemId;break;case k.qF.STOP:d&&c&&a.track(ev.LO.PRESENTATION_STOP,{showtime_session_id:d,session_type:c,nr_frames:(0,ei.ll)(r)});break;case k.qF.SEND_NAVIGATION_STAT:{let{source:e,direction:t,item:i}=n.payload;a.track(ev.LO.CHANGE_ACTIVE_FRAME,{nr_frames:(0,ei.ll)(r),moving_direction:t,frame_widget_id:i?.widgetId?.toString(),meeting_frame_duration_minutes:ny(i?.duration),meeting_frame_app:i?.plugin,showtime_session_id:d,session_type:c,action_source:e})}}e(n)}},nS,e=>{let{getState:t}=e;return e=>n=>{let r=t(),a=(0,Z.gC)(r)??(0,Z.a9)(r),i=a?.sessionId??a?.id?.toString(),o=a?.sessionType,s=(0,V._t)();switch(n.type){case C.gw.START_PLUGIN:n.payload.sessionData&&s.track(ev.LO.APP_PANEL_OPENED,{showtime_session_id:n.payload.sessionData.id,session_type:n.payload.sessionData.type,action_source:n.payload.sessionData.source,app_name:n.payload.data.plugin});break;case nC.Z.ITEM_APP_MENU_INTERACTED:s.track(ev.LO.ITEM_APP_MENU_INTERACTED,{showtime_session_id:i,app_name:n.payload.appName,action_type:n.payload.actionType,session_type:o});break;case R.kj.UPDATE_SETTINGS:case R.kj.CREATE_SETTINGS:s.track(ev.LO.APP_SETTINGS_SAVED,{showtime_session_id:i,session_type:o,app_name:n.payload.data.consumer})}e(n)}}],nO=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case es.XV.UPDATE_FOLLOWING_USER_ID:return{...e,followingUserId:t.payload.followingUserId};case es.XV.SET_FOLLOWERS:return{...e,followers:t.payload};default:return e}};var nM=n(406730);let nk=e=>{let{dispatch:t,getState:n}=e;return e=>r=>{switch(r.type){case es.XV.GET_FOLLOWERS:t((0,es.tV)((0,V.S4)().getFollowingUsers()));break;case es.XV.TOGGLE_FOLLOW_USER:{let{userId:e,userName:a}=r.payload,i=n(),o=(0,nM.P$)(i),s=o?.compare(e)===0,l=Z.gC(i)?.leaderId,d=(0,V.lZ)();if(d.isPrivateModeEnabledForAnonymousUser){d.notifyFollowIsDisabled();break}s?(0,V.S4)().stopFollowing("showtime_manual"):(void 0!==l&&0===e.compare(l)&&t((0,k.ZE)({isDetached:!1})),(0,V.S4)().startFollowing(e,a,"showtime_manual"))}}e(r)}};var nD=n(777199),nP=n(862262),nj=n(925958),nL=n(811617);let nF=e=>{let{dispatch:t,getState:n}=e;return e=>async r=>{let a=n();switch(r.type){default:break;case nD.tH.CREATE_HANDOFF_BUTTON:{let{userId:e,name:t}=r.payload,n=void 0!==e&&void 0!==t,a=nP.P.init(nj.o.SHOWTIME_HANDOFF,1,n?{userId:e.toString(),name:t}:{});(0,V.Jn)().create(a,nL.y.PLUGIN_PANEL);break}case nD.tH.HAND_OFF:{let e=(0,Z.gC)(a),n=G.d.fromString((0,V.Yd)().userId),i=r.payload.userId??n;void 0===e?(0,V.w0)().getFrames().length>0?(0,V.vA)().startPresentationFromFrames(ev.T6.ACTION_BUTTON,i):(0,V.vA)().startAdHocPresentation(ev.T6.ACTION_BUTTON,i):t((0,k.a7)(i,"action_button"))}}e(r)}};function nU(e,t,n){return{leaderId:e,isRunning:t,isPresenter:n&&0===n.compare(e)}}let nB=(e,t)=>{let n=[],r=(0,V.Yd)().userId?G.d.fromString((0,V.Yd)().userId):void 0,a=()=>{n.push(t.onShowtimeSessionFullStateReceived.add(e=>{l({isRunning:e.status===B.E.RUNNING,instanceId:e.id,payload:nU(e.leaderId,e.status===B.E.RUNNING,r)})})),n.push(t.onShowtimeSessionChangedLeader.add(e=>{l({isRunning:!0,instanceId:e.sessionId,payload:nU(e.leaderId,!0,r)})})),n.push(t.onSessionStateChanged.add((e,t,n)=>{l({isRunning:e,instanceId:t,payload:nU(n,e,r)})}))};return void 0!==l&&a(),{api:{async start(t){let n;try{let e=JSON.parse(t.payload);e.userId&&(n=G.d.fromString(e.userId))}catch{}e.dispatch((0,nD.gW)(n))},edit(){},registerStateChangeHandler(e){l=e,a()},onFocus(){},onBlur(){},isRunning:()=>void 0!==(0,Z.gC)(e.getState()),isAvailable:()=>(0,V.Yd)().permissionChecker.canStartShowtime()},destroy:()=>{for(let e of n)e.detach();n.length=0}}},nG=()=>[eg,...nR,nv,nf,nk,...t1,...w.Ii,...tc,np(),ng(),nF],nW=e=>({id:"showtime",middlewares:nG(),reducer:{showtime:D.v,showtimeSidebar:F,reactions:nE.f,following:nO,...t2,...tu,...w.RG},initialState:e??{}}),nH=(e,t)=>{let n=t=>{void 0!==(0,Z.cT)(e.getState())&&"reconnect"!==t&&(e.dispatch((0,k.ZE)({isDetached:!0})),e.dispatch((0,es.UY)(void 0)))},r=t=>{let n=Z.gC(e.getState())?.leaderId;e.dispatch((0,es.UY)(t)),n!==t&&e.dispatch((0,k.ZE)({isDetached:!0}))},a=()=>{void 0!==(0,Z.cT)(e.getState())&&e.dispatch((0,es.ET)())};return{init:()=>{t.onFollowingStopped.add(n),t.onFollowingStarted.add(r),t.onFollowersChanged.add(a)},destroy:()=>{t.onFollowingStopped.remove(n),t.onFollowingStarted.remove(r),t.onFollowersChanged.remove(a)}}},nV=(e,t)=>{let{appService:n,reactionsService:r,canvasAttentionManagementService:a}=t,i=nH(e,a);i.init(),(0,V.Hp)(t);let o=t=>{e.dispatch((0,k.UE)(t))};n.onShowtimeListReceived.add(o);let s=(t,n)=>{e.dispatch((0,k.dx)(n))};n.onShowtimeSessionCreated.add(s);let l=t=>{e.dispatch((0,k.CT)(t))};n.onShowtimeSessionFullStateReceived.add(l),n.onShowtimeUserJoined.add(t=>{e.dispatch((0,k.MG)(t))}),n.onShowtimePrepareSessionStart.add((t,n)=>{t&&e.dispatch((0,k.nx)(t,n))});let d=n?.getShowtimeWorkshopModeService().getRunningSession();void 0!==d&&e.dispatch((0,k.t7)(d)),n.onShowtimeSessionChangedLeader.add(t=>{let n=(0,Z.gC)(e.getState());e.dispatch((0,k.xF)(t.sessionId,t.leaderId,n?.leaderId))}),e.dispatch((0,er.Fv)(r.getReactionsConfig()));let c=()=>{e.dispatch((0,er.Fv)(r.getReactionsConfig()))};r.onReactionsConfigChanged.add(c),e.dispatch((0,er.f4)(r.isMyHandRaised()));let u=()=>{e.dispatch((0,er.BJ)())};r.onUserStatusesChanged.add(u);let p=t=>{let n;let r=e.getState();t&&(n=(0,ei.bA)(r,t),e.dispatch((0,K.Bn)(t))),e.dispatch((0,k.c$)(ev.T6.POINT_AND_CLICK,ev.pv.FRAME,n))};return(0,V.cD)().expandButtonClicked.add(p),{onDestroy:()=>{n.onShowtimeListReceived.remove(o),n.onShowtimeSessionCreated.remove(s),n.onShowtimeSessionFullStateReceived.remove(l),i.destroy(),r.onReactionsConfigChanged.remove(c),r.onUserStatusesChanged.remove(u),(0,V.cD)().expandButtonClicked.remove(p),(0,V.ko)()}}},nz=e=>{let{parentStore:t,injections:n,previousState:r}=e,a=(0,S.$)(t,nW(r),A.qL,A.zW),i=M(a,{appSystem:n.appSystem,pluginSettingsApi:n.pluginSettingsApi,errorTracker:n.errorTracker,boardId:n.userScope.boardId,isFeatureEnabled:n.userScope.isFeatureEnabled}),o={...n,pluginSettingsPackageApi:i.publicApi},s=nV(a,o),l=t4(a,o),d=tp(a,o);a.dispatch((0,C._R)(O.p.SHOWTIME));let c=nB(a,n.appService);return{publicApi:{...d.publicApi,actionButton:c.api},store:a,onDestroy:()=>{s.onDestroy(),l.onDestroy(),d.onDestroy(),i.onDestroy(),a.destroy(),c.destroy()}}},nZ={meetingFramesCountChanged:ec.qr,meetingModeChanged:ec.Bo,guidedNavigationUpdated:ec.Vj,monitoringMeetingStartedFromServer:ec.mL,setWatchTutorialUiTipVisibility:ec.it};var nK=n(943212),nY=n(378244),nq=n(38851),n$=n(873694),nJ=n(635753),nX=n(99382),nQ=n(1573),n0=n(981407),n1=n(723506),n2=n(327964),n4=n(319779),n3=n(606218),n6=n(474772),n5=n(793531),n9=n(624521),n7=n(892447),n8=n(621725),re=n(659098),rt=n(865075),rn=n(226674),rr=n(442596),ra=n(292098),ri=n(424063),ro=n(434451),rs=n(747278),rl=n(887804),rd=n(549449),rc=n(130837),ru=n(63565),rp=n(10463),rm=n(547051),rh=n(782592),rg=n(727290),r_=n(316446);class rf{constructor(){this.withAnimation=!1,this.maskChanged=new b.M,this.jumpToFrame=e=>new Promise((t,n)=>{setTimeout(()=>{if(n4.DL(O.p.AGENDA_BUILDER)){let n=this.presentationMaskService.isMaskEnabled(),r=(0,rd.ZP)().getShowtimeWorkshopModeService(),a=r.getIsShowtimeParticipant(),i=!a||!n||this.withAnimation,o=r.getRunningSessionType()===ee.JM.ADVANCED,s=n&&a&&r.getIsShowtimeLeader()&&!o;t(this.frameWidgetService.jumpToFramePromise(e.index,i,n8.T.FIT_TO_SCREEN,s)),this.withAnimation=!1}else n(Promise.reject(Error("Wrong Permissions")))})}),this.deleteFrame=e=>{this.frameWidgetService.deleteFrameByTk(e.tokenizer)},this.createFrame=()=>new Promise((e,t)=>{this.transactionsService.lock([]);let n=this.frameWidgetService.createFrame();this.objectsRegistry.getConfirmedTokenizer(n).then(t=>{e(this.toIFrame(n,t))}).catch(()=>{t(Error("IActiveAgendaModule"))}).finally(()=>{this.transactionsService.unlock()})}),this.getFrames=()=>(0,rc.G5)().framesList.items.filter(e=>!e?.isClusteringContainer).map(e=>this.toIFrame(e)),this.getFrameById=e=>{let t=(0,rc.G5)().getFrameWidgetById(e.dec);if(t)return this.toIFrame(t)},this.presentationMaskService=E.getInjectionPoint(rm.H)(),this.frameWidgetService=E.getInjectionPoint(rh.F)(),this.transactionsService=(0,ri.u)().transactions,this.objectsRegistry=(0,ri.u)().objectsRepository,this.canvasFocus=(0,rs._Y)()(),this.contentHiddenChanged=this.frameWidgetService.contentHiddenChanged,this.frameNameChanged=this.frameWidgetService.frameNameChanged,this.frameDeleted=(0,rc.G5)().frameDeleted,this.frameListUpdated=(0,rc.G5)().framesList.listUpdated,this.sortFromTopLeftToBottomRight=re.B6,this.frameAdded={add:e=>{this.frameAddedListener=async(t,n)=>{if(n&&n.widgetType===n5.c.FRAME){let r=(0,ro.fk)(),a=await (0,rg.ZP)().getPublicApi(O.p.BREAKOUT_ROOMS),i=a?.isOpen();e(this.toIFrame(n,t),r&&!i)}},this.objectsRegistry.tokenizerUpdated.add(this.frameAddedListener)},remove:()=>{this.objectsRegistry.tokenizerUpdated.remove(this.frameAddedListener)}},(0,rl.ZP)().viewModeChanged.add(this.onLayoutViewModeChanged,this)}onLayoutViewModeChanged(e){let t=(0,ru.GI)(),n=t.viewportUpdated.has(this.handleViewportUpdated,this);e!==n7.ic.SHOWTIME_PARTICIPANT||n?n&&t.viewportUpdated.remove(this.handleViewportUpdated,this):t.viewportUpdated.add(this.handleViewportUpdated,this)}handleViewportUpdated(e,t,n){(0,rd.ZP)().getShowtimeWorkshopModeService().getIsShowtimeLeader()&&"move_to_frame"!==n&&!t&&this.presentationMaskService.hideMaskWithOptions({withAnimation:!0,source:"lightboxing"})}getFrameByToken(e){let t=this.getFrameWidgetByToken(e);if(t)return this.toIFrame(t)}getFrameWidgetByToken(e){return(0,rc.G5)().getFrameWidgetByToken(e)}getFramePreviewByToken(e){let t=(0,rc.G5)().getFrameWidgetByToken(e);if(void 0!==t)return this.frameWidgetService.getPreviewByTokenizer(t.tokenizer)}getSortedPresentedFrameIds(){return(0,rc.G5)().getSortedPresentedFrames().map(e=>e.tokenizer.id)}toIFrame(e,t){let n=t;return e.as(r_.u)?.value&&(n=e.tokenizer,e=e.require(r_.u).value),{widgetType:e.widgetType,tokenizer:n??e.tokenizer,titleText:e.require(rr.e).getPlaintext(),index:e.as(ra.q)?.getIndex()??-1,bounds:e.bounds,contentHidden:!!e.as(rt.O)?.value,contentChanged:e.jsonType===n9.c.FRAME?e.contentChanged:void 0,contentVisibilityChanged:e.jsonType===n9.c.FRAME?e.contentVisibilityChanged:void 0,x:e.x,y:e.y,scaledWidth:e.scaledWidth,scaledHeight:e.scaledHeight,getState:()=>e.getState(),stateChanged:e.stateChanged}}renameFrame(e,t){(e?.index??-1)<0||this.frameWidgetService.updateFrameName(e.index,t??"")}setFramesLockState(e,t){let n=(0,ri.u)().objectsRepository.getObjectsByIds(e);if(!t)return(0,rp.z)().unlockWidgets(n,"meeting-finished",{}),e;{let e=[],t=n.filter(t=>!t.group?.isLocked&&(e.push(t.tokenizer.id),!0));return(0,rp.z)().lockWidgets(t,"meeting-started",rn.c.NONE),e}}addFramePreviewUpdateListener(e){return this.frameWidgetService.framePreviewUpdated.add(e)}setCanvasFocus(e){this.canvasFocus.setFocus(e)}setContentHidden(e,t,n){this.frameWidgetService.setContentHidden(e,t,n)}}var rE=n(961274),rv=n(60090),rI=n(17703),rb=n(703834),rx=n(194797),rT=n(35118);let rS=()=>({triggerFacilitatorFeedback:()=>{if(n3.isSupported()){let e=[1,2,3,5,10],t=parseInt(n3.getItem(rI.Z.meetingFacilitatorFeedbackCounters)||0,10);return!(0,rb.l)((0,rE.bh)().getState(),rT.V.MEETING_FACILITATOR_FEEDBACK_SENT)&&!(t<0)&&(t>Math.max(...e)?n3.setItem(rI.Z.meetingFacilitatorFeedbackCounters,-1,!1):n3.setItem(rI.Z.meetingFacilitatorFeedbackCounters,t+1,!1),e.some(e=>e===t+1))}return!1},openFacilitatorFeedbackAchievement:()=>{(0,rE.bh)().dispatch((0,rx.Rv)(rT.V.MEETING_FACILITATOR_FEEDBACK_SENT))}});var rA=n(86318),rw=n(567096),ry=n(461468),rN=n(867447),rC=n(696853),rR=n(288516),rO=n(345872);let rM=e=>{let t=(0,ru.GI)().viewport,n=(0,rw.P)().getIntersectedObjects(t,e).filter(e=>e.widgetType===n5.c.FRAME);if(0!==n.length)return n.reduce((e,t)=>t.position.x<e.position.x?t:e)},rk=async()=>{let e=(0,I.z)().selection.find(e=>e.widgetType===n5.c.FRAME)??rM(rR.o.INTERSECT)??rM(rR.o.ALL);if((0,I.z)().clearSelection(),e){let t=(0,rO.d)().setViewport(e.bounds).calculateScreenOffset({customScreenOffset:ry.hv});await t.jumpWithAnimationPromise("move_viewport_to"),(0,I.z)().selectObject(e),(0,rN.ZP)().setTool(rC.q.CURSOR)}};var rD=n(314679),rP=n(758429),rj=n(951371),rL=n(417435),rF=n(497366),rU=n(213422),rB=n(426687),rG=n(361606),rW=n(312904),rH=n(710443),rV=n(605702),rz=n(906371),rZ=n(508856),rK=n(210269),rY=n(86596);let rq=e=>{let{config:t,id:n,onVisibleChanged:r,referenceElement:a}=e,[i,o,s,l]=(0,rK.n)(n,t);return(0,tN.useEffect)(()=>{a&&o(a)},[a]),(0,tN.useEffect)(()=>{void 0!==r&&r(l)},[l]),(0,ty.jsx)("div",{ref:a?void 0:o,className:rY.presentButtonOnboardingPointer,children:(0,ty.jsx)("div",{children:i})})},r$=e=>(0,ty.jsx)(ef.zt,{store:(0,rE.bh)(),children:(0,ty.jsx)(rq,{...e})});var rJ=n(914121),rX=n(294591),rQ=n(72779),r0=n.n(rQ),r1=n(463397),r2=n(281579),r4=n(180909),r3=n(859331),r6=n(707411),r5=n(397448),r9=n.n(r5);let r7=e=>{let{enabledReactions:t}=e,n=new r1.c,r=e=>{(0,r6.ZP)().changeReactionsAvailability(e),r3.Z.reactionsEnabledToggle(e)};return n.canManageReactions()?(0,ty.jsx)(r4.v,{tKey:"board.peopleBar.reactions.raiseHandsBtn.enableReactions",children:e=>(0,ty.jsx)(r2.u,{label:e,name:"reaction-toggle",className:r0()("rtb-toggle--medium",r9().reactionsPopup__enable_reactions_toggle),onChange:r,checked:t})}):null};var r8=n(790405),ae=n(3310),at=n(423304),an=n(789073),ar=n(170730);let aa=()=>(0,rP.ZP)().currentBoard.hasPermission(rU.J.START_VOTING);var ai=n(59330),ao=n(726079),as=n(458283),al=n(126926),ad=n(837778),ac=n(985610),au=n(217846),ap=n(192769),am=n(776586),ah=n(211653),ag=n(435262),a_=n(611370),af=n(511801),aE=n(940301),av=n(536199),aI=n(983858),ab=n(123024),ax=n(769311),aT=n(807579),aS=n(664300),aA=n(965954),aw=n(835551),ay=n(33081),aN=n(78804),aC=n(703604);let aR=(e,t)=>{aO(e,t),d=e},aO=(0,H.debounce)((e,t)=>{aM(e,t)},100),aM=(e,t)=>{if([n7.ic.SHOWTIME_PARTICIPANT,n7.ic.VOTING_IN_SHOWTIME].includes(d)&&e===n7.ic.NORMAL&&void 0!==(0,rd.ZP)().getShowtimeWorkshopModeService().getRunningSession()){t?.dispatch(nK.c.leaveShowtime());let n=Error("Incompatible view mode set during a showtime sessions");(0,ad.K)().errorWithScope({tags:{feature:"showtime"}},n,{viewMode:e,showtimeSession:(0,rd.ZP)().getShowtimeWorkshopModeService().getRunningSession()})}d=e};var ak=((f={}).USER_NOT_ON_BOARD="USER_NOT_ON_BOARD",f.USER_HAS_NO_LEADER_PERMISSIONS="USER_HAS_NO_LEADER_PERMISSIONS",f),aD=n(282949),aP=n(378560),aj=n(830648),aL=n(974496),aF=n(3362),aU=n(549029),aB=n(178238),aG=n(894749),aW=n(10079),aH=n(584297),aV=n(690142);let az=()=>(0,rD.I)({preselectedTemplateSearch:"Showtime",openedFrom:rL.x.MEETING_PANEL}),aZ=e=>{let t=rF.x[e];return(0,ae.a)().isEnabled(e)||void 0!==t&&(0,a_.U6)((0,rV.Z)().getCurrent(),t)},aK=e=>{let{waitForClose:t}=t9.iV.show({componentFactory:(0,nJ.ZP)(e)});return t()},aY=()=>({showUITip:e=>{(0,rE.bh)().dispatch((0,rv.VQ)(e))},closeUITip:e=>{(0,rE.bh)().dispatch((0,rv.jg)(e))},recalculatePosition:()=>(0,rE.bh)().dispatch((0,rv.zA)()),getUITipComponent:()=>r$}),aq=()=>({isAchievementOpen:e=>(0,rZ.isAppStoreAchievementOpened)(e),openAchievement:e=>(0,rZ.openAppStoreAchievement)(e)}),a$=()=>{let e=(0,ao.Z)();return{getUserItems:()=>e.getOnlineUserItems(!0),getSyncBoardUsersCount:()=>e.getClientsCount(!0),addSubscriptionUsersUpdate:t=>{e.userInfoUpdated.add(t),e.userActivated.add(t),e.clientDeactivated.add(t)},removeSubscriptionUsersUpdate:t=>{e.userInfoUpdated.remove(t),e.userActivated.remove(t),e.clientDeactivated.remove(t)},getUserById:t=>e.getOnlineUserItem(t)}},aJ=new b.M({backend:new x.P}),aX=new b.M({backend:new T.Q});function aQ(){(0,au.ZP)().isVisible&&(0,au.ZP)().update()}async function a0(){let e=(0,rP.ZP)().getBoardId(),t=(0,rV.Z)().getCurrentId()||"",n=new rf,{currentBoard:r}=(0,rP.ZP)(),a=()=>r.hasPermission(rU.J.SEND_REACTIONS),{panelStackApi:i}=(0,E.getInjectionPoint)(aH.Q)(),o=(0,nX.Z)();(0,rd.ZP)().initServices();let s={isFeatureEnabled:aZ,boardId:e,userId:rj.Z().myUserId?.toString(),currentAccountId:t,permissionChecker:{canEditAgenda:()=>(0,ro.P5)()&&(0,ro.hz)(),canSendReactions:a,canRaiseHands:()=>void 0!==(0,rj.Z)().myUserId&&a(),canStartShowtime:ro.NP,canChangeLeader:ro.TC,canLimitTools:ro.AV,canUseAppsDuringMeeting:ro.hc,canHideFrames:()=>r.hasPermission(rU.J.HIDE_FRAME),canComment:()=>r.hasPermission(rU.J.WRITE_COMMENT)},showtimeOnlineUserItem:a$()},{publicApi:l,store:d,onDestroy:p}=nz({parentStore:(0,nQ.j)(),previousState:u?.getState(),injections:{appSystem:(0,rg.ZP)(),showConfirmationDialog:aK,achievementActions:aq(),appService:(0,rd.ZP)(),sessionService:(0,rX.ZP)(),actionButtonWidgetService:(0,aw.B)(),isLiveEmbed:aC.D,isActionButtonHandoffFeatureEnabled:ay.B,canvasController:(0,ru.GI)(),workshopService:(0,rd.ZP)().getShowtimeWorkshopModeService(),sessionFactory:(0,rd.ZP)().getShowtimeSessionFactory(),canvasActions:(0,aS.c)(),onScopeDestroyed:rB.onScopeDestroyed,closePanelStack:i.closePanelStack,keyboardWatcher:(0,rW.Z)(),shortcutService:(0,ac.ZP)(),mySelection:(0,I.z)(),indexGenerator:(e,t)=>(0,nq.M)(e??"",t??""),framesService:n,frameWidgetService:E.getInjectionPoint(rh.F)(),showHowPickFrame:rk,framesNavigation:{lockViewportToFrame:e=>n4.ih(O.p.SHOWTIME,e,!1),unlockViewport:()=>n4.G5(O.p.SHOWTIME)},miroStat:o,lifecycleCallbacks:{onAgendaItemAmountChanged:()=>{aX?.dispatch()},onStarted:()=>{(0,rA.bF)(d),(0,rA.Dy)(),(0,rG.ZP)().setPanelVisible(!1),(0,rA.Ee)(!0),(0,rA.s1)((0,aW.XO)()?"hidden":"showtime")},onStopped:()=>{(0,rA.rt)(),(0,rA.fq)(),(0,rG.ZP)().setPanelVisible(!0),(0,ab.j)().closePresenterWindow("showtime-stop"),(0,rA.s1)("default"),(0,rd.ZP)().getShowtimeWorkshopModeService().zoomOutViewport()},showtimeSessionChanged:aJ},framePreviewManager:new n6.Y(E.getInjectionPoint(aP.r)(),E.getInjectionPoint(aj.W)(),E.getInjectionPoint(aL.O)(),E.getInjectionPoint(aF.k)(),()=>(0,aU.Z)(),aB.Ao,222,142),uiTipActions:aY(),facilitatorFeedbackActions:rS(),localStorage:n3,openTemplates:az,userScope:s,experimentAttributes:{email:(0,rj.Z)().userInfo.email,plan:(0,af.s0)(rP.ZP().canvasBoardInfo?.account),emailHost:(0,aE.pU)(rj.Z().userInfo?.email)},errorTracker:(0,ad.K)(),logger:v.z.getLogger("showtime"),pluginSettingsApi:(0,aG.getPluginSettingsAPI)(),isFeatureEnabled:aZ,createFeatureRate:(e,t)=>new rH.V(e,t),getAudioContext:rz.kq,musicService:(0,n$.ZP)(),fullscreenService:(0,ar.ZP)(),reactionsService:(0,r6.ZP)(),showtimeSidebarService:n0.jr,presentationService:{startPresentationFromFrames:(e,t)=>(0,rJ.ZP)().togglePresentation({sessionType:ee.JM.STRUCTURED,source:e,leaderId:t}),startAdHocPresentation:(e,t)=>(0,rJ.ZP)().togglePresentation({sessionType:ee.JM.AD_HOC,source:e,leaderId:t})},presentationMaskService:E.getInjectionPoint(rm.H)(),presenterWindowService:(0,ab.j)(),showNotification:(e,t)=>(0,ap.ZP)().show(e,t),canvasAttentionManagementService:(0,am.Z)(),currentPanelChanged:ah.ZP.currentPanelChanged,canvasFocus:(0,rs.ZP)(),reduceMotionSettingsService:(0,ag.ZP)(),userCursorService:(0,av.Z)(),toolsService:(0,rN.ZP)(),expandButtonService:E.getInjectionPoint(aD.p)(),privateModePlugin:(0,aN.Z)(),anonymousUserService:aT.J,multimodalNotificationService:(0,aA.ZP)(),paidPlanOnboardingService:{completePaidPlanOnboardingFlow:r8.MC}}});(0,rA.vM)(d),(0,rd.ZP)().setWorkshopModeCachedSignals(),u=void 0,(0,at.I5)({MiroStat:()=>({track:o.track.bind(o)}),OnlineUsersService:ao.Z,ReactionsService:r6.ZP}),(0,at.UO)({ReactionsToggle:()=>r7,CanvasFocus:rs.ZP,ReactionsOnMomentService:as.Z,ShowtimeService:rd.ZP,SplitIO:()=>({getTreatment:e=>(0,al.ZP)().then(t=>t.getTreatment(e,{plan:(0,af.s0)(rP.ZP().canvasBoardInfo?.account)}))}),UserService:rj.Z}),c=d,(0,n1.nC)(!1),d.dispatch(nZ.guidedNavigationUpdated((0,ro.fk)())),d.dispatch((0,C.kX)({[O.p.COUNTDOWN]:r.hasPermission(rU.J.START_TIMER),[O.p.VOTING]:aa(),[O.p.BREAKOUT_ROOMS]:r.hasPermission(rU.J.MANAGE_BREAKOUTS),[O.p.PRIVATE_MODE]:(0,aI.Xk)(),[O.p.BOARD_RECORDING]:r.hasPermission(rU.J.VIEW_BOARD)}));let m=[];return m.push((0,rd.ZP)().onServerError.add(e=>{let t;switch(e){default:t=el.a.t("showtime.error.unknown");break;case ak.USER_NOT_ON_BOARD:t=el.a.t("showtime.error.handover.userNotFound");break;case ak.USER_HAS_NO_LEADER_PERMISSIONS:t=el.a.t("showtime.error.handover.userNoPermission")}(0,ap.ZP)().show(t)})),m.push((0,rP.ZP)().currentBoard.permissionsChanged.add(e=>{let t;e!==aV.H.BOARD_RENDER&&(u=d,t=rj.Z().myUserId?.toString(),s.userId!==t&&(s.userId=t,(0,Z.fc)(d.getState())&&(0,rd.ZP)().onServerConnected.addOnce(()=>{(0,rd.ZP)().onShowtimeSessionFullStateReceived.addOnce(e=>{e.status===B.E.RUNNING?d.dispatch(nK.c.joinShowtime(ev.T6.AUTO)):d.dispatch(nK.c.leaveShowtime())})})))})),m.push(n4.iW().add(e=>{e===O.p.BREAKOUT_ROOMS?(0,rA.fq)():(0,rA.bF)(d)})),m.push((0,rd.ZP)().onShowtimeSessionStartedFromServer.add(()=>{d.dispatch(nZ.monitoringMeetingStartedFromServer())})),m.push((0,ax.ZP)().offline.add(()=>{d.dispatch(nK.c.setHasLostConnection(!0))})),m.push((0,rl.ZP)().viewModeChanged.add(e=>{aR(e,d)})),await (0,n2.U)(ai.F,an.$,el.a),aJ.add(aQ,void 0,-1),{publicApi:{...l,getPanelContent:()=>(0,rA.V)(d)},destroy(){for(let e of((0,rA.fq)(),(0,rA.Dj)(),p(),c=void 0,m))e.detach();m.length=0,aJ.remove(aQ),aX.removeAll(),(0,rd.ZP)().destroy(),(0,ab.j)().closePresenterWindow("auto")},registerComponents:()=>{(0,rA.Iw)(d)},sendReadySignal:()=>{let e=d?.getState(),t=nK.cZ.selectRunningSession(e);void 0!==t&&((0,rd.ZP)().onShowtimeReady.dispatch(t),nK.cZ.selectIsParticipant(e)&&((0,rd.ZP)().getShowtimeWorkshopModeService().onShowtimeSessionFullStateReceived(t),(0,rA.bF)(d)))}}}function a1(){return c}function a2(){let e=c;return{agendaHasSomeItem:!!c&&nY.Tk.agendaHasSomeItemSelector(e.getState()),agendaFrameIds:c?nY.Tk.frameIdsSelector(e.getState()):[]}}let a4=async e=>{let t=e.map(e=>e.tokenizer.id),n=c?.getState(),r=nK.cZ.selectRunningOrSelectedAdvancedSession(n),a=await (0,rd.ZP)().getShowtimeSessionFactory().createOrUpdateShowtimeWithFrames(t,ee.JM.ADVANCED,r,nK.cZ.lastAgendaItemIndexSelector(n));t.forEach(e=>{c?.dispatch(nK.c.sendStatForCreateItem({frameId:e,source:ev.T6.FRAME_CONTEXT_MENU}))}),c?.dispatch(nK.c.setSelectedSession(a.session))};function a3(){return{createItemFromFrames:a4,createItemFromFrame(e){a4([e])},removeItemByFrame(e){c?.dispatch(nY.EN.deleteItemByFrameId(e))},openMeetingTab(e){c?.dispatch(nK.c.openShowtimeSidebar(e,P.q.MEETING))},createHandoffButton(e,t){c?.dispatch(nK.c.createHandoffButton(e,t))}}}function a6(){return{agendaItemsListChanged:aX,showtimeSessionChanged:aJ}}},26966:function(e,t,n){"use strict";n.d(t,{m:()=>o});var r=n(918734),a=n(202784),i=n(79845);let o=function(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,i.LP)(),[n,o]=(0,a.useState)(e);return(0,a.useEffect)(()=>{o((0,r.Q)())},[t]),n}},599288:function(e,t,n){"use strict";n.d(t,{K:()=>o});var r=n(840706),a=n(584297),i=n(759990);let o={PanelStack:(0,r.getInjectionPoint)(a.Q),CreationBar:(0,r.getInjectionPoint)(i.j)}},33081:function(e,t,n){"use strict";n.d(t,{B:()=>i});var r=n(126926),a=n(280732);function i(){let e=r.Vv.getModule();return!!e&&e.getTreatment(a.ye.ACTION_BUTTON_HANDOFF)===a.o0.ON}},807579:function(e,t,n){"use strict";n.d(t,{J:()=>$});var r=n(46152),a=n.n(r),i=n(612517);let o=n.p+"3b1224714e7351fb.svg",s=n.p+"ea42e50481b6e8e7.svg",l=n.p+"008cabceee1d0fb0.svg",d=n.p+"bb9ac1939f5cc7a3.svg",c=n.p+"7a6a3d6703a441ce.svg",u=n.p+"32d15e9077ff069c.svg",p=n.p+"439a56506c4a3949.svg",m=n.p+"7065ff770776dee2.svg",h=n.p+"4c2203a678c48dec.svg",g=n.p+"f71778df232a2c1e.svg",_=n.p+"f2f1b93710b819ce.svg",f=n.p+"808e362aacfe60cc.svg",E=n.p+"e12acf28bc3e2363.svg",v=n.p+"5b42ae0bff876dfa.svg",I=n.p+"0bc51acd25e3f725.svg",b=n.p+"8829cfc9aae370cb.svg",x=n.p+"b90f2bdbbe5258f8.svg",T=n.p+"0fc646333dd55969.svg",S=n.p+"e33e2e1e91f402d7.svg",A=n.p+"87a94b9b88d30d14.svg",w=n.p+"314bdad3cb4e8276.svg",y=n.p+"5992ed59c67d8e49.svg",N=n.p+"45b346d763a9f61e.svg",C=n.p+"67f80916112d92ee.svg",R=n.p+"95f154053887c801.svg",O=n.p+"ca9721b31919a6bd.svg",M=n.p+"03f4e9e8719fba81.svg",k=n.p+"781a9c81d2ce4054.svg",D=n.p+"781776085dbfc0f9.svg",P=n.p+"0825a9d32178da95.svg",j=n.p+"ba2a41b5b62cb745.svg",L=[o,s,l,d,c,u,p,m,h,g,_,f,E,v,I,b,x,T,I,S,A,w,y,N,C,R,O,M,C,k,D,P,j,n.p+"7972e0be9bd1aa5c.svg",n.p+"1b3acb3adcd89f27.svg"],F=n.p+"85943be525928c33.svg",U=n.p+"0b7a2239bbecbf0a.svg",B=n.p+"d5dc25ab93aad809.svg",G=n.p+"d484980139fdb896.svg",W=n.p+"c47a0283a7ddea9b.svg",H=n.p+"e0cf269b812a12c2.svg",V=n.p+"e4eec350a00adffb.svg",z=n.p+"e4caeb107038f35f.svg",Z=[F,U,B,G,W,H,V,z,n.p+"a9aac8d25f90cc90.svg",n.p+"654f0beff2c4e74c.svg"];var K=n(559025),Y=n(983858);let q="#090909";class ${static #n=this.avatars=(0,Y.fR)(L,Z);static #r=this.currentAvatarIndex=0;static #a=this.avatarMap=new Map;static shuffle(){this.currentAvatarIndex=0,this.avatars=a()(this.avatars)}static getNextAvatar(){this.currentAvatarIndex>=this.avatars.length&&this.shuffle();let e=this.avatars[this.currentAvatarIndex];return this.currentAvatarIndex++,e}static getAvatar(e){if(this.avatarMap.has(e))return this.avatarMap.get(e)?.toString()??"";let t=this.getNextAvatar();return this.avatarMap.set(e,t),t}static #i=this.resetAvatars=()=>{this.avatarMap=new Map,this.shuffle()};static #o=this.anonymiseUser=e=>({...e,cursorColor:q,name:K.h.t("privateModePlugin.cursorAnonymousName"),pictureUrl:this.getAvatar(e.userId)});static #s=this.anonymiseOnlineUserItem=e=>{let t=this.getAvatar(e.userId),n=e.userInfo&&{...e.userInfo,name:K.h.t("privateModePlugin.cursorAnonymousName"),picture:{...e.userInfo.picture,big:t,medium:t,small:t,size44:t,size180:t,size210:t,size420:t,image:t}};return{...e,active:!0,userInfo:n,cursorColor:i.I.HEXToNumber(q)}}}},786268:function(e,t,n){"use strict";n.d(t,{S:()=>r});let r={GUEST:"GUEST",OWNER:"OWNER",EDITOR:"EDITOR"}},498702:function(e,t,n){"use strict";let r;n.d(t,{Lb:()=>j,iF:()=>P,nE:()=>r});var a=n(254073),i=n.n(a),o=n(227730),s=n(497366),l=n(213422),d=n(951371),c=n(192769),u=n(763043),p=n(426687),m=n(862299),h=n(414973),g=n(530991),_=n(624521),f=n(899359),E=n(831977),v=n(758429),I=n(424063),b=n(458283),x=n(690324),T=n(78804),S=n(19613),A=n(786268),w=n(559025),y=n(965771),N=n(611370),C=n(974931),R=n(819592);let O="properties",M="privateMode",k=()=>(0,o.Z)().documentJson;class D{constructor(){this.privateModeState={enabled:!1,allowRevealIndividually:null},this.subscribers=new Map,this.dialogAccepted=!1,this.pluginPanelClosed=new u.M,this.widgetsAPI=(0,m.Q)().get(g.x),this.COUNTDOWN_MAX_TIME=5,this.disableReaction=!1,this.privateModeService=(0,T.Z)(),this.onPresetConfigChanged=new u.M({memorize:!0}),this.onFocusStateChanged=new u.M({memorize:!0}),this.onCanvasLoaded=async()=>{this.privateModeService.addSubscriberOnChange(this.onPrivateModeStateChanged),this.privateModeService.subscribe()},this.onCanvasUnloaded=()=>{this.disableReaction=!0,this.privateModeState={enabled:!1,allowRevealIndividually:null},this.privateModeService.unsubscribe(),clearTimeout(this.privateModeDisableTimer)},this.canUserStartPrivateModeSession=()=>(0,N.U6)(v.ZP().canvasBoardInfo?.account,s.x.PRIVATE_MODE)&&(0,v.ZP)().currentBoard.hasPermission(l.J.START_PRIVATE_MODE),this.canUserTerminateSession=()=>(0,v.ZP)().currentBoard.hasPermission(l.J.TERMINATE_PRIVATE_MODE),this.onPrivateModeStateChanged=e=>{let t={...this.privateModeState},n=this.privateModeState.allowRevealIndividually!==e.allowRevealIndividually,r=!1===this.privateModeState.enabled&&this.privateModeState.enabled!==e.enabled;this.privateModeState=e,(r||this.privateModeState.enabled&&!this.privateModeState.expiry&&!n)&&(this.dialogAccepted=!1),this.subscribers.forEach(e=>e(this.privateModeState,t))},this.startCountdownToDisablePrivateMode=()=>{let e=1e3*this.COUNTDOWN_MAX_TIME,t=Date.now()+e;k().jsonUpdate(O,{[M]:{...this.privateModeState,expiry:String(t)}}),(0,b.Z)().react(R.$z),S._6.privateModeEnded(this.getPrivateModeState()),clearTimeout(this.privateModeDisableTimer),this.privateModeDisableTimer=setTimeout(()=>{clearTimeout(this.privateModeDisableTimer),this.disablePrivateMode()},e)},this.onClosePanel=()=>{this.setActionButtonVisualState(y.D.ADD),this.pluginPanelClosed.dispatch()},this.setDialogAccepted=()=>{this.dialogAccepted=!0,S._6.privateModeUserConfirmed(this.getPrivateModeState())},p.doOnCanvasLoadedWithCleanup(this.onCanvasLoaded,this.onCanvasUnloaded)}get isPrivateModeEnabledForAnonymousUser(){let{enabled:e,isUserInfoAnonymous:t}=this.getPrivateModeState();return e&&!!t}getAllStickers(){return this.widgetsAPI.getLoaded().filter(e=>{let{jsonType:t}=e;return t===_.c.STICKER})}getAllPrivateStickers(){return this.getAllStickers().filter(e=>{let t=e.as(f.S)?.contentVisibility;return t&&t.visibleTo===E.fl.CREATOR})}addSubscriberOnChange(e){let t=Symbol();return this.subscribers.set(t,e),t}removeSubscriberOnChange(e){this.subscribers.delete(e)}enablePrivateMode(e){let{canUserEndSession:t,isUserInfoAnonymous:n}=e,r={startedAt:Date.now(),enabled:!0,permissions:t?A.S.GUEST:A.S.OWNER,startedBy:d.Z().myUserId?.toString(),isUserInfoAnonymous:n,startStickers:this.getAllStickers().length,allowRevealIndividually:null};return k().jsonUpdate(O,{[M]:{enabled:r.enabled,permissions:r.permissions,startedAt:String(r.startedAt),startedBy:r.startedBy,expiry:null,isUserInfoAnonymous:r.isUserInfoAnonymous,startStickers:r.startStickers,allowRevealIndividually:r.allowRevealIndividually}}),S._6.privateModeStarted(r),r}disablePrivateMode(){return this.markAllStickersPublic(),k().jsonUpdate(O,{[M]:{enabled:!1}}),!0}toggleRevealIndividually(e){k().jsonUpdate(O,{[M]:{...this.privateModeState,allowRevealIndividually:e}})}getPrivateModeState(){let e=this.privateModeState;return e?{enabled:e.enabled,startedAt:e.startedAt&&Number(e.startedAt),permissions:e.permissions,startedBy:e.startedBy,expiry:e.startedAt&&Number(e.expiry),isUserInfoAnonymous:e.isUserInfoAnonymous,startStickers:e.startStickers,allowRevealIndividually:e.allowRevealIndividually}:{enabled:!1,allowRevealIndividually:null}}setEditablePreset(e,t){this.presetConfiguration=e&&t?{settings:e,widget:t}:void 0,this.updateSettings(e)}setActionButtonVisualState(e){this.onFocusStateChanged.dispatch(e)}markAllStickersPublic(){this.markMyStickersPublic(),this.handleLockedStickers()}revealAllMyStickers(){if(!this.privateModeState.allowRevealIndividually)return;let e=this.markMyStickersPublic(),t=(0,h.z)().singleSelection;(t||t&&(0,C.l)().isEditable(t))&&(0,h.z)().clearSelection(),e||(0,c.ZP)().show({text:w.h.t("privateModePlugin.currentSession.tooltipNothingToReveal"),isClosable:!0,durationInMS:3e3})}markMyStickersPublic(){let e=this.getAllPrivateStickers();if(0===e.length)return 0;let t=e.filter(e=>e.require(x.J3).getAuthorData().id===d.Z().myUserId?.toString());return(0,I.u)().transactions.applyChanges(t,()=>{for(let e of t){let t=e.as(f.S)?.isUserInfoHidden()||!1;this.privateModeService.setStickerContentVisibility(e,!1,t)}}),t.length}handleLockedStickers(){0!==this.getAllPrivateStickers().length&&((0,I.u)().transactions.unlock(),setTimeout(()=>{let e=this.getAllPrivateStickers();(0,I.u)().transactions.applyChanges(e,()=>{for(let t of e){let e=t.as(f.S)?.isUserInfoHidden()||!1;this.privateModeService.setStickerContentVisibility(t,!1,e)}}),(0,I.u)().transactions.unlock()},1e3))}updateSettings(e){this.onPresetConfigChanged.dispatch(e)}notifyFollowIsDisabled(){(0,c.ZP)().show({text:w.h.t("privateModePlugin.tooltip.followDisabled"),isClosable:!0,durationInMS:3e3})}}let P=()=>{r||(r=new D)},j=i()(e=>{let{permission:t,openCallback:n}=e;t?(0,c.ZP)().show({text:w.h.t("privateModePlugin.currentSession.revealIndividuallyEnabled"),actionText:w.h.t("privateModePlugin.currentSession.openRevealIndividuallyToast"),actionCallback:n,isClosable:!0,durationInMS:1e4}):(0,c.ZP)().show({text:w.h.t("privateModePlugin.currentSession.revealIndividuallyDisabled"),isClosable:!0,durationInMS:5e3})},100)},19613:function(e,t,n){"use strict";n.d(t,{_6:()=>h});var r,a,i=n(99382),o=n(951371),s=n(726079),l=n(831977),d=n(530991),c=n(793531),u=n(899359),p=n(862299),m=n(690324);(r={}).TEMPLATE="TEMPLATE",r.TIMER="TIMER",r.PAGE_LOAD="PAGE_LOAD",(a={}).CROSS="CROSS",a.START="START";let h={widgetAPI:(0,p.Q)().get(d.x),generatePrivateModeSessionId:e=>`${e.startedBy}_${e.startedAt}`,sendFeedback(e){(0,i.Z)().track("feature_rated",e)},privateModeButtonClicked(e){(0,i.Z)().track("private_mode_plugin_button_clicked",{is_opened:e,source:"AppBar"})},privateModeStarted(e){let t=0,n="",r=0,a=!!e.isUserInfoAnonymous;try{t=(0,s.Z)().getActiveUsersCount(),n=this.generatePrivateModeSessionId(e),r=this.widgetAPI.getLoaded().filter(e=>{let{widgetType:t}=e;return t===c.c.STICKER}).filter(e=>{let t=e.as(u.S)?.contentVisibility;return t&&t.visibleTo===l.fl.CREATOR}).length}catch{}(0,i.Z)().track("private_mode_plugin_mode_started",{online_users_count:t,private_mode_session_id:n,is_user_info_anonymous:a,no_of_private_stickers:r})},privateModeEnded(e){let t=!1,n=0,r=0,a=0,s=[],d=0,p="",h=!!e.isUserInfoAnonymous;try{if(e){p=this.generatePrivateModeSessionId(e),t=e.startedBy!==o.Z().myUserId?.toString(),n=e.startedAt?Date.now()-e.startedAt:0;let i=this.widgetAPI.getLoaded().filter(e=>{let{widgetType:t}=e;return t===c.c.STICKER}),h=i.filter(e=>{let t=e.as(u.S)?.contentVisibility;return t&&t.visibleTo===l.fl.CREATOR}),g=new Set(h.map(e=>e.require(m.J3).getAuthorData().id));a=h.length,r=e.startStickers?i.length-a-e.startStickers:0,d=(s=Array.from(g)).length}}catch{}(0,i.Z)().track("private_mode_plugin_mode_ended",{private_mode_session_id:p,ended_by_different_user:t,time_in_private_mode:n,no_non_private_stickers_added:r,no_of_stickers_added:a,user_ids_participated:s,participant_count:d,is_user_info_anonymous:h})},privateModeActivated(){let e=0;try{e=this.widgetAPI.getLoaded().filter(e=>{let{widgetType:t}=e;return t===c.c.STICKER}).length}catch{}(0,i.Z)().track("private_mode_plugin_activated",{no_of_existing_stickers:e})},privateModeUserConfirmed(e){let t=!!e.isUserInfoAnonymous,n="";try{n=this.generatePrivateModeSessionId(e)}catch{}(0,i.Z)().track("private_mode_plugin_user_confirmed",{private_mode_session_id:n,is_user_info_anonymous:t})},tooltipEntryClicked(e,t){(0,i.Z)().track("private_mode_tooltip_entry_clicked",{button_type:t,entry_point:e})},reportIncorrectState(e,t){let n=!!t.isUserInfoAnonymous,r="",a=t.enabled;try{r=this.generatePrivateModeSessionId(t)}catch{}(0,i.Z)().track("private_mode_plugin_error_state_observed",{private_mode_session_id:r,is_user_info_anonymous:n,is_private_mode_turned_on:a,incorrect_state_user:e})}}},983858:function(e,t,n){"use strict";n.d(t,{Dj:()=>f,FF:()=>E,Xk:()=>c,fR:()=>v,hR:()=>u});var r=n(951371),a=n(940301),i=n(126926),o=n(837778),s=n(498702),l=n(165655),d=n(472145);function c(){return s.nE?.canUserStartPrivateModeSession()||!1}function u(){return s.nE?.canUserTerminateSession()||!1}var p,m,h=((p=h||{}).On="on",p.Off="off",p);async function g(e){return"on"===await _(e)}async function _(e,t){let n=r.Z()?.userInfo,s="";try{s=(await (0,i.ZP)()).getTreatment(e,{domainGroup:n?.domainGroup,emailHost:(0,a.pU)(n?.email),email:n?.email,...t})}catch(n){let t=n instanceof Error?n:Error(JSON.stringify(n));(0,o.K)().error(t,`Couldn't get the ${e} treatment`)}return s}async function f(){return g("UXRD-463-private-mode-reveal-individually")}(m={}).Off="off",m.Instant="instant",m.Delayed="delayed";let E=(e,t)=>l.j.getTreatment("MDS-1305-design-language-release")===d.A.ON?t:e,v=(e,t)=>l.j.getTreatment("pdl-colors-release")===d.A.ON?t:e},52638:function(e,t,n){"use strict";n.d(t,{e:()=>l});var r=n(497366),a=n(688961),i=n(502713),o=n(951371),s=n(67423);function l(){return(s.u.getInfo()?.account?.features??[]).includes(r.x.DISABLE_ONBOARDING_BANNERS_FOR_GUEST)&&((0,a.oq)()||(0,o.Z)().userType===i.F.GUEST)}},739316:function(e,t,n){"use strict";n.d(t,{CL:()=>a,ZP:()=>i});var r=n(840706);let a="PaidPlanOnboardingService",i=r.getInjectionPoint("PaidPlanOnboardingService")},123024:function(e,t,n){"use strict";n.d(t,{j:()=>p});var r=n(763043);class a{constructor(e){this.injections=e,this.windowChange=new r.M,this.presenterWindow=null,this.hasListeners=!1,this.analyticsData=null,this.openedDuringShowtimeSession=!1,this.onBeforeUnload=()=>{this.closePresenterWindow("auto")},this.onOffline=()=>{this.closePresenterWindow("auto")},this.window=e.window??window}openPresenterWindow(e){this.presenterWindow||(this.openedDuringShowtimeSession=!!e.showtimeSessionId),this.injections.miroStat.track("presenter_window_opened",{action_type:e.actionType,frames_total_number:e.framesCount,showtime_session_id:e.showtimeSessionId}),this.presenterWindow=this.window.open("","presenterWindow","width=750,height=500"),this.presenterWindow&&(this.addListenersIfNeeded(),this.analyticsData=e,this.windowChange.dispatch(this.presenterWindow))}closePresenterWindow(e){("showtime-stop"!==e||this.openedDuringShowtimeSession)&&(this.openedDuringShowtimeSession=!1,this.injections.miroStat.track("presenter_window_closed",{action_type:e,showtime_session_id:this.analyticsData?.showtimeSessionId}),this.presenterWindow?.close(),this.presenterWindow=null,this.analyticsData=null,this.removeListeners(),this.windowChange.dispatch(null))}addListenersIfNeeded(){this.hasListeners||(window.addEventListener("beforeunload",this.onBeforeUnload),this.injections.navigatorService.offline.add(this.onOffline,this),this.hasListeners=!0)}removeListeners(){window.removeEventListener("beforeunload",this.onBeforeUnload),this.injections.navigatorService.offline.remove(this.onOffline,this),this.hasListeners=!1}}var i=n(44466),o=n(840706),s=n(327964),l=n(99382),d=n(769311);let c=()=>({miroStat:(0,l.Z)(),navigatorService:(0,d.ZP)()}),u="PresenterWindowService";function p(){if(!o.has(u)){let e=new a(c());o.map(u,e),(0,s.U)(i.u)}return o.get(u)}},401782:function(e,t,n){"use strict";n.d(t,{O:()=>r,o:()=>a});let r={SHOW:"[UI_NOTIFICATION] SHOW"},a=e=>({type:r.SHOW,payload:e})},965771:function(e,t,n){"use strict";n.d(t,{D:()=>r});let r={ADD:"ADD",ADDED:"ADDED",UPDATE:"UPDATE",UPDATED:"UPDATED",HIDDEN:"HIDDEN"}},862262:function(e,t,n){"use strict";n.d(t,{P:()=>r});class r{constructor({actionType:e,presetVersion:t,preset:n,entityId:r,buttonType:a="DEFAULT"}){this.actionType=e,this.presetVersion=t,this.preset=n,this.entityId=r,this.buttonType=a}static init(e,t,n,a,i){return new r({actionType:e,presetVersion:t,preset:n,entityId:a,buttonType:i})}static initFromOptions(e){return new r({...e,preset:JSON.parse(e.preset)})}getWidgetOptions(){return{actionType:this.actionType,presetVersion:this.presetVersion,preset:JSON.stringify(this.preset),entityId:this.entityId,buttonType:this.buttonType}}getWidgetData(){return{options:this.getWidgetOptions()}}getPayload(){return this.preset}}},645032:function(e,t,n){"use strict";n.d(t,{T:()=>s});var r=n(202784),a=n(389565);class i{get boardId(){return this.boardIdGetter()}shareButtonClicked(){this.sender.track("miro_lite_share_button_clicked",{})}shareableBoardLinkCopied(){this.sender.track("copied_shareable_link",{shareable_link_access_rights:"EDIT",copy_link_by:"copy",board_id:this.boardId})}signupFromShareButtonClicked(e){this.sender.track("signup_from_share_clicked",{signup_mode:e})}helpCenterButtonClicked(){this.sender.track("mirolite_helpcenter_clicked",{})}learnMoreButtonClicked(){this.sender.track("explore_miro_from_mirolite_clicked",{})}faqButtonClicked(){this.sender.track("mirolite_faq_clicked",{})}feedbackButtonClicked(){this.sender.track("mirolite_feedback_clicked",{})}constructor(){this.sender=a.y,this.boardIdGetter=()=>""}}let o=(0,r.createContext)(new class extends i{}),s=()=>(0,r.useContext)(o)},438339:function(e,t,n){"use strict";n.d(t,{W:()=>a});var r=n(202784);let a=e=>{let[t,n]=(0,r.useState)(0),a=(0,r.useMemo)(()=>new ResizeObserver(e=>{for(let t of e)n(t.contentRect.width)}),[]);return(0,r.useEffect)(()=>{if(!e.current)return()=>{};a.observe(e.current);let t=e.current;return()=>{t&&a.unobserve(t)}},[e,a]),t}},730050:function(e,t,n){"use strict";n.d(t,{q:()=>c});var r=n(202784),a=n(241485),i=n(347614),o=n(64505),s=n(362900),l=n(631287),d=n(825568);let c=e=>{let{focusCanvas:t}=e;return(0,r.useCallback)(()=>{let e=(0,d._)().createFrame({actionSource:i.T.FRAMES_SIDEBAR});t&&(0,o.E)().setFocus(a.P.CANVAS),(0,l.o)().track("frames_bar_item_interacted",{action_type:"plus",items_total_number:(0,s.G)().framesList.framesCount,item_order_number:e.index+1})},[t])}},959225:function(e,t,n){"use strict";n.d(t,{V:()=>o});var r=n(276635),a=n(202784);let i=e=>new Map(e.getFrames().map(e=>[e.token,e])),o=(e,t)=>{let[n,o]=(0,a.useState)(()=>i(e));return(0,a.useEffect)(()=>{let n=(0,r.debounce)(()=>o(i(e)),50,{trailing:!0}),a=[e.framesUpdated.add(n),t.contentHiddenChanged.add(n)];return()=>{for(let e of a)e.detach()}},[]),n}},27893:function(e,t,n){"use strict";n.d(t,{e:()=>c});var r=n(202784),a=n(449855),i=n(631287),o=n(426755);let s=e=>Array.from(e.values()).sort((e,t)=>e.index-t.index),l=(e,t,n)=>{for(let r of n)(0,i.o)().track("frames_bar_item_interacted",{action_type:e,items_total_number:t,item_order_number:r+1})},d=(e,t,n)=>{for(let n of t)(0,i.o)().track("frames_bar_item_interacted",{action_type:"sort",items_total_number:e,item_order_number:n+1});(0,i.o)().track("frame_position_changed",{frames_moved:t.length,contains_slide_container:n})},c=(e,t,n)=>{let[i,c]=(0,r.useState)(s(n)),u=(0,o.xX)();return(0,r.useEffect)(()=>{c(s(n))},[n]),{frames:i,sortFrames:(r,a,i)=>{let o=r.filter(e=>n.has(e)),s=a.filter(e=>n.has(e));if(u){u.moveChildren(s,i),c(t.getOptimisticUpdate(o)),d(u.getChildren().length,s.map(e=>n.get(e).index),!0);return}let l=t.reorderFrames(o,s),p=a.map(t=>e.getSiblingCountPlusSelf(t));c(l);let m=a.some(t=>e.belongsToContainer(t));d(e.framesList.framesCount,p,m)},moveFrames:(n,r)=>{l(r===a.u.UP?"move_up":"move_down",e.framesList.framesCount,n.map(e=>e.index)),c(t.moveFrames(i,n,r))}}}},461468:function(e,t,n){"use strict";n.d(t,{TY:()=>s,hv:()=>i,lf:()=>a,vg:()=>r});let r="frames-sidebar",a="rtb-frames-panel",i={top:90,left:80,bottom:70,right:80};var o,s=((o={}).TOP_APP_BAR="top_app_bar",o.FRAMES_SIDEBAR="frames_sidebar",o.SLIDES_CONTAINER="slides-container",o)},64505:function(e,t,n){"use strict";n.d(t,{E:()=>r});let r=(0,n(224629)._Y)("CanvasFocus")},362900:function(e,t,n){"use strict";n.d(t,{G:()=>r});let r=(0,n(224629)._Y)("FramesService")},631287:function(e,t,n){"use strict";n.d(t,{o:()=>r});let r=(0,n(224629)._Y)("MiroStat")},22071:function(e,t,n){"use strict";n.d(t,{S:()=>u});var r=n(625145),a=n(843499),i=n(648346),o=n(664583),s=n(23837);let l=(0,r.K$)(o.D.OUTLINE_BAR),d=(0,a.cp)({compute:()=>"IDLE"}),c=(0,a.cp)({compute:()=>({ui:{visualStatus:"DEFAULT"}})}),u=()=>{let e=(0,i.KO)(l.atom)[s.p.LAYERS],t=(0,i.KO)(e?.lifecycleAtom??d),n=(0,i.KO)(e?.actions.main.stateAtom??c);return void 0===e?[!1,()=>{}]:["TOGGLED"===n.ui.visualStatus,()=>{"INITIALIZED"===t&&e.actions.main.execute()}]}},401816:function(e,t,n){"use strict";n.d(t,{U:()=>i,e:()=>a});var r=n(202784);let a=(0,r.createContext)({ids:[],setSize:()=>{}});function i(e,t){let n=(0,r.useRef)(null),{ids:i,setSize:o}=(0,r.useContext)(a),s=(0,r.useMemo)(()=>new ResizeObserver(t=>{for(let n of t)o(e,n.target.getBoundingClientRect())}),[e,o]),l=(0,r.useMemo)(()=>i.includes(e),[i,e]);return(0,r.useEffect)(()=>{let{current:t}=n;if(t&&l)return o(e,t.getBoundingClientRect()),s.observe(t),()=>{s.unobserve(t),o(e,t.getBoundingClientRect())}},[s,n,o,l,e,t]),n}},641151:function(e,t,n){"use strict";n.d(t,{H:()=>i});var r=n(202784),a=n(91755);let i=()=>(0,r.useContext)(a.D)},91755:function(e,t,n){"use strict";n.d(t,{D:()=>r});let r=n(202784).createContext({})},44466:function(e,t,n){"use strict";n.d(t,{u:()=>m});var r=n(55443),a=n(16421);let i=n.p+"trans/4eea919ef15091c8.json",o=n.p+"trans/aa331707f8716211.json",s=n.p+"trans/969b9a65e267358c.json",l=n.p+"trans/c657a6f018c4499f.json",d=n.p+"trans/a03698754fc96851.json",c=n.p+"trans/74526bafc6d61058.json",u=n.p+"trans/6bdcb937afdd30fe.json",p=n.p+"trans/967e6fab79d1c36f.json",m=new r.zz({translationImports:{lang:{de:()=>(0,r.PC)(i),en:()=>(0,r.PC)(o),es:()=>(0,r.PC)(s),fr:()=>(0,r.PC)(l),ja_JP:()=>(0,r.PC)(d),ko:()=>(0,r.PC)(c),pl:()=>(0,r.PC)(u),pt_BR:()=>(0,r.PC)(p)}},langKey:a.vf.en,namespace:"presenterWindow"})},504123:function(e,t,n){"use strict";let r;n.d(t,{RG:()=>h,Ii:()=>m,uG:()=>g});var a=n(247769),i=n(837748),o=n(722306),s=n(23837),l=n(277421),d=n(251261),c=n(442474);let u=async e=>{if(void 0===e)return;let t=(0,a.l3)(),n=(0,a.J_)();if(void 0!==t&&void 0!==n)try{let r=await n.get(t,e);if(void 0!==r)return{payload:r.payload,version:r.version};a.K5()?.error(Error("[Meeting] GET plugin-settings payload parsing failed"),r)}catch(e){a.K5()?.error(Error("[Meeting] GET plugin-settings request failed"),e)}},p={plugins:{},pluginSetupPermissions:{},openedAgendaItemPlugins:{},pluginConsumer:s.p.AGENDA_BUILDER,pluginsInitialized:!1},m=[e=>{let{dispatch:t}=e;return()=>async e=>{switch(e.type){case i.kj.GET_SETTINGS_BY_ID:{let n=(0,a.l3)(),r=(0,a.J_)();if(null!=n&&null!=r)try{let o=await r.get(n,e.payload);void 0!==o?t((0,i.sG)(o)):a.K5()?.error(Error("[Meeting] GET plugin-settings payload parsing failed"),o)}catch(e){a.K5()?.error(Error("[Meeting] GET plugin-settings request failed"),e)}break}case i.kj.CREATE_SETTINGS:{let t=(0,a.l3)(),n=(0,a.J_)();if(null!=t&&null!=n)try{let{data:r}=e.payload,i=await a.RD()?.getPublicApi(r.consumer);(i?.isPayloadEmpty(r.data.payload)??!0)&&e.payload.cancelationCallback(r.metadata.ownerId);let o=await n.create(t,{pluginKey:r.consumer,version:r.data.version,payload:r.data.payload});void 0!==o?e.payload.callback(o.id):a.K5()?.error(Error("[Meeting] CREATE plugin-settings payload parsing failed"),o)}catch(e){a.K5()?.error(Error("[Meeting] CREATE plugin-settings request failed"),e)}break}case i.kj.UPDATE_SETTINGS:{let{data:t,metadata:n,consumer:r}=e.payload.data,i=(0,a.l3)();if(void 0===i||void 0===n.settingsId)break;let o=(0,a.J_)(),s=await a.RD()?.getPublicApi(r);if((s?.isPayloadEmpty(t.payload)??!0)&&(o?.delete(i,n.settingsId),e.payload.cancelationCallback(n.ownerId)),null!=o)try{let e=await o.update(i,{pluginKey:r,version:t.version,payload:t.payload,id:n.settingsId});e.success||a.K5()?.error(Error("[Meeting] UPDATE plugin-settings request failed"),e)}catch(e){a.K5()?.error(Error("[Meeting] UPDATE plugin-settings request failed"),e)}break}case i.kj.DELETE_SETTINGS:{let n=(0,a.l3)(),r=(0,a.J_)();if(null!=n&&null!=r)try{(await r.delete(n,e.payload)).success?t((0,i.dl)(e.payload)):a.K5()?.error(Error("[Meeting] DELETE plugin-settings request returns failed"))}catch(e){a.K5()?.error(Error("[Meeting] DELETE plugin-settings request failed"),e)}break}case i.kj.DELETE_ALL:{let e=(0,a.l3)();null!=e&&await a.J_()?.deleteAll(e)}}}},e=>{let{dispatch:t,getState:n}=e;return()=>async e=>{let i=n(),p=(0,c.xN)(i);switch(e.type){case o.gw.GET_FULL_LIST:{let e=new Set(a.RD()?.getStartedAppsIds())??new Set,n={};d.e.forEach(t=>{n[t]=e?.has(t)??!1}),n[d._.NONE]=!0,t((0,o.rB)(n));break}case o.gw.INITIALIZE_PLUGINS:{let{plugins:e,pluginsInitialized:n}=i.communication;if(n)break;e[s.p.BREAKOUT_ROOMS]&&await a.RD()?.getPublicApi(s.p.BREAKOUT_ROOMS),e[s.p.BOARD_RECORDING]&&await a.RD()?.getPublicApi(s.p.BOARD_RECORDING),e[s.p.VOTING]&&await a.RD()?.getPublicApi(s.p.VOTING),t((0,o.Te)(!0));break}case o.gw.START_PLUGIN:{let{data:n,delayOpening:u,sessionData:m}=e.payload,{plugin:h,agendaItemId:g,itemId:_,settingsId:f,options:E}=n;if(void 0===h||h===d._.NONE||(u&&Object.keys(p).forEach(async e=>{let n=h===s.p.COUNTDOWN,r=e===s.p.COUNTDOWN,i=h===s.p.BOARD_RECORDING,l=e===s.p.BOARD_RECORDING;if(r&&!n||!r&&n||l&&!i||!l&&i){let n=await a.RD()?.getPublicApi(e);n?.close(),t((0,o.kD)(e))}}),!((0,c.o7)(i)[h]&&(0,c.L$)(i)[h])))break;let v=await a.RD()?.getPublicApi(h);if(void 0===v)break;r=setTimeout(()=>{if(void 0!==g&&void 0!==_){let e={pluginKey:h,ownerId:_,settingsId:f};if(n.action===l.l.START){t((0,o.pv)({pluginApi:v,options:E,metadata:{...e,appKey:h},appId:h,agendaItemId:g,sessionData:m}));return}t((0,o.m)({pluginApi:v,options:E,metadata:{...e,appKey:h},agendaItemId:_,appId:h,sessionData:m}))}else t((0,o.t3)(v,void 0,void 0,m))},300*!!u);break}case o.gw.JUST_OPEN_PANEL:{if(void 0===e.payload)break;let n=e.payload.pluginApi;if(n?.open!==void 0){n.open({showtime:e.payload.sessionData});let r=e.payload.appId,a=r&&(0,c.o7)(i)[r]&&(0,c.L$)(i)[r];void 0!==e.payload.agendaItemId&&a&&t((0,o.PZ)(e.payload.agendaItemId,r))}break}case o.gw.CLOSE_PANELS:{let t=e.payload.appId??s.p.BREAKOUT_ROOMS,n=await a.RD()?.getPublicApi(t);void 0!==n&&void 0!==n.close&&n.close();break}case o.gw.START_FILLING_SETTINGS:{let{agendaItemId:n,appId:r,pluginApi:a,sessionData:s}=e.payload;if(a?.editSettings===void 0){t((0,o.t3)(a,r,n,s));break}t((0,o.PZ)(n,r)),a.editSettings({metadata:e.payload.metadata,consumer:i.communication.pluginConsumer,data:await u(e.payload.metadata.settingsId),options:e.payload.options},()=>{t((0,o.kD)(r))});break}case o.gw.RUN_PLUGIN:{let{pluginApi:n,metadata:r,agendaItemId:a,appId:s,sessionData:l}=e.payload;if(!(s&&(0,c.o7)(i)[s]&&(0,c.L$)(i)[s]))break;if(r?.settingsId===void 0){t((0,o.t3)(n,s,void 0,l));break}if(void 0===n.runSettings){t((0,o.t3)(n,s,a,l));break}let d=await u(r.settingsId);if(void 0===d){t((0,o.t3)(n,s,a,l));break}t((0,o.PZ)(e.payload.agendaItemId,e.payload.appId)),n.runSettings({metadata:e.payload.metadata,consumer:i.communication.pluginConsumer,options:{...e.payload.options,showtime:l},data:d},()=>{t((0,o.kD)(e.payload.appId))})}}}}],h={communication:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.gw.SET_PLUGIN_CONSUMER:return{...e,pluginConsumer:t.payload};case o.gw.SET_PLUGIN_PERMISSIONS:return{...e,pluginSetupPermissions:t.payload};case o.gw.SET_FULL_LIST:return{...e,plugins:t.payload};case o.gw.SET_PLUGIN_AVAILABILITY:return{...e,plugins:{...e.plugins,[t.payload.plugin]:t.payload.isAvailable}};case o.gw.SET_PLUGINS_INITIALIZED:return{...e,pluginsInitialized:t.payload};case o.gw.PLUGIN_PANEL_OPENED:return{...e,openedAgendaItemPlugins:{...e.openedAgendaItemPlugins,[t.payload.appId]:t.payload.agendaItemId}};case o.gw.PLUGIN_PANEL_CLOSED:{let n={...e.openedAgendaItemPlugins};return delete n[t.payload.appId],{...e,openedAgendaItemPlugins:n}}default:return e}}};c.o7,c.L$;let g={create:i.oh,getById:i.OW,update:i.VP,delete:i.Rb,deleteAll:i.nV,startApp:o.GP,closePluginPanels:o.Kc,getOpenAppTimeoutId:()=>r}},722306:function(e,t,n){"use strict";n.d(t,{BJ:()=>u,GP:()=>d,Kc:()=>m,PZ:()=>h,Te:()=>l,UV:()=>s,_R:()=>i,gw:()=>a,kD:()=>g,kX:()=>o,m:()=>_,pv:()=>f,rB:()=>c,t3:()=>p});var r,a=((r={}).SET_PLUGIN_CONSUMER="[AGENDA_COMMUNICATION] SET_PLUGIN_CONSUMER",r.SET_PLUGIN_PERMISSIONS="[AGENDA_COMMUNICATION] SET_PLUGIN_PERMISSIONS",r.SET_FULL_LIST="[AGENDA_COMMUNICATION] SET_FULL_LIST",r.SET_PLUGIN_AVAILABILITY="[AGENDA_COMMUNICATION] SET_PLUGIN_AVAILABILITY",r.GET_FULL_LIST="[AGENDA_COMMUNICATION] GET_FULL_LIST",r.INITIALIZE_PLUGINS="[AGENDA_COMMUNICATION] INITIALIZE_PLUGINS",r.SET_PLUGINS_INITIALIZED="[AGENDA_COMMUNICATION] SET_PLUGINS_INITIALIZED",r.START_PLUGIN="[AGENDA_COMMUNICATION] START_PLUGIN",r.JUST_OPEN_PANEL="[AGENDA_COMMUNICATION] JUST_OPEN_PANEL",r.START_FILLING_SETTINGS="[AGENDA_COMMUNICATION] START_FILLING_SETTINGS",r.RUN_PLUGIN="[AGENDA_COMMUNICATION] RUN_PLUGIN",r.CLOSE_PANELS="[AGENDA_COMMUNICATION] CLOSE_PANELS",r.PLUGIN_PANEL_OPENED="[AGENDA_COMMUNICATION] PLUGIN_PANEL_OPENED",r.PLUGIN_PANEL_CLOSED="[AGENDA_COMMUNICATION] PLUGIN_PANEL_CLOSED",r);let i=e=>({type:"[AGENDA_COMMUNICATION] SET_PLUGIN_CONSUMER",payload:e}),o=e=>({type:"[AGENDA_COMMUNICATION] SET_PLUGIN_PERMISSIONS",payload:e}),s=()=>({type:"[AGENDA_COMMUNICATION] GET_FULL_LIST"}),l=e=>({type:"[AGENDA_COMMUNICATION] SET_PLUGINS_INITIALIZED",payload:e}),d=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;return{type:"[AGENDA_COMMUNICATION] START_PLUGIN",payload:{data:e,delayOpening:t,sessionData:n}}},c=e=>({type:"[AGENDA_COMMUNICATION] SET_FULL_LIST",payload:e}),u=(e,t)=>({type:"[AGENDA_COMMUNICATION] SET_PLUGIN_AVAILABILITY",payload:{plugin:e,isAvailable:t}}),p=(e,t,n,r)=>({type:"[AGENDA_COMMUNICATION] JUST_OPEN_PANEL",payload:{pluginApi:e,appId:t,agendaItemId:n,sessionData:r}}),m=e=>({type:"[AGENDA_COMMUNICATION] CLOSE_PANELS",payload:{appId:e}}),h=(e,t)=>({type:"[AGENDA_COMMUNICATION] PLUGIN_PANEL_OPENED",payload:{agendaItemId:e,appId:t}}),g=e=>({type:"[AGENDA_COMMUNICATION] PLUGIN_PANEL_CLOSED",payload:{appId:e}}),_=e=>({type:"[AGENDA_COMMUNICATION] START_FILLING_SETTINGS",payload:e}),f=e=>({type:"[AGENDA_COMMUNICATION] RUN_PLUGIN",payload:e})},442474:function(e,t,n){"use strict";n.d(t,{L$:()=>i,o7:()=>r,xN:()=>a});let r=e=>e.communication.plugins,a=e=>e.communication.openedAgendaItemPlugins,i=e=>e.communication.pluginSetupPermissions},837748:function(e,t,n){"use strict";n.d(t,{OW:()=>i,Rb:()=>l,VP:()=>s,dl:()=>u,kj:()=>a,nV:()=>d,oh:()=>o,sG:()=>c});var r,a=((r={}).GET_SETTINGS_BY_ID="[PLUGIN_SETTINGS]GET_SETTINGS_BY_ID",r.CREATE_SETTINGS="[PLUGIN_SETTINGS]CREATE_SETTINGS",r.UPDATE_SETTINGS="[PLUGIN_SETTINGS]UPDATE_SETTINGS",r.DELETE_SETTINGS="[PLUGIN_SETTINGS]DELETE_SETTINGS",r.DELETE_ALL="[PLUGIN_SETTINGS]DELETE_ALL",r.SETTINGS_RECEIVED="[PLUGIN_SETTINGS]SETTINGS_RECEIVED",r.SETTINGS_DELETED="[PLUGIN_SETTINGS]SETTINGS_DELETED",r);let i=e=>({type:"[PLUGIN_SETTINGS]GET_SETTINGS_BY_ID",payload:e}),o=(e,t,n)=>({type:"[PLUGIN_SETTINGS]CREATE_SETTINGS",payload:{data:e,callback:t,cancelationCallback:n}}),s=(e,t)=>({type:"[PLUGIN_SETTINGS]UPDATE_SETTINGS",payload:{data:e,cancelationCallback:t}}),l=e=>({type:"[PLUGIN_SETTINGS]DELETE_SETTINGS",payload:e}),d=()=>({type:"[PLUGIN_SETTINGS]DELETE_ALL"}),c=e=>({type:"[PLUGIN_SETTINGS]SETTINGS_RECEIVED",payload:e}),u=e=>({type:"[PLUGIN_SETTINGS]SETTINGS_DELETED",payload:e})},277421:function(e,t,n){"use strict";n.d(t,{l:()=>a});var r,a=((r={}).START="start",r.SETTINGS="settings",r)},59330:function(e,t,n){"use strict";n.d(t,{F:()=>m});var r=n(55443),a=n(16421);let i=n.p+"trans/d2e5dfb17b010e30.json",o=n.p+"trans/8f7dab4549845769.json",s=n.p+"trans/ffc6588d2770d1b3.json",l=n.p+"trans/a8f7cc6e81a99ec0.json",d=n.p+"trans/5e0af807632f6033.json",c=n.p+"trans/3fe188158645b6fc.json",u=n.p+"trans/4e8b8f795a443dcc.json",p=n.p+"trans/5fe83d87a7c0cb6a.json",m=new r.zz({translationImports:{lang:{de:()=>(0,r.PC)(i),en:()=>(0,r.PC)(o),es:()=>(0,r.PC)(s),fr:()=>(0,r.PC)(l),ja_JP:()=>(0,r.PC)(d),ko:()=>(0,r.PC)(c),pl:()=>(0,r.PC)(u),pt_BR:()=>(0,r.PC)(p)}},langKey:a.vf.en,namespace:"presettingApps"})},273126:function(e,t,n){"use strict";n.d(t,{m:()=>a});var r=n(202784);function a(e){let{placeholder:t,onMessageChange:n,maxMessageSize:a=1e3}=e,[i,o]=r.useState(""),[s,l]=r.useState(!1),d=r.useCallback(()=>{s||i||(o(t),l(!0),n(t))},[s,n,i]);return{placeholder:t,value:i,onTextareaFocus:d,onMessageChange:r.useCallback(e=>{let t=e.target.value;t.length>a||(o(t),n(t))},[a,n])}}},609868:function(e,t,n){"use strict";n.d(t,{Y:()=>s});var r=n(965033),a=n(283277),i=n(254073),o=n.n(i);function s(e){let t=o()(()=>{r.iV.show({componentFactory:(0,a.OQ)()})},500,{leading:!0});return t(),e.then(e=>(r.iV.close(),t.cancel(),e)).catch(e=>{throw r.iV.close(),t.cancel(),Error(e)})}},345490:function(e,t,n){"use strict";n.d(t,{GW:()=>o,wf:()=>s,xI:()=>i});var r=n(322584),a=n(278861);let i=(e,t)=>{let n;let i=(0,r.s0)(),o=e.map(e=>{let t=i(n);return n=t,{agendaItemId:e instanceof a.d?e:a.d.fromString(e),index:t}});r.Lh()?.bulkReorder(t,o)},o=(e,t)=>e.filter(e=>t.every(t=>t!==e)),s=e=>(0,r.w0)().sortFromTopLeftToBottomRight(e,25)},521133:function(e,t,n){"use strict";n.d(t,{Cc:()=>l,Hx:()=>o,Wi:()=>s,at:()=>i,rG:()=>a});var r,a=((r={}).DATA_CHANGED="[WORKSHOP_MODE] DATA_CHANGED",r.STATUS_CHANGE_RESPONSE="[WORKSHOP_MODE] STATUS_CHANGE_RESPONSE",r.CHANGE_MEETING_TOOLS="[WORKSHOP_MODE] CHANGE_MEETING_TOOLS",r.TOGGLE_TOOLBAR_VISIBILITY="[WORKSHOP_MODE] TOGGLE_TOOLBAR_VISIBILITY",r);let i=e=>({type:"[WORKSHOP_MODE] DATA_CHANGED",payload:e}),o=(e,t)=>({type:"[WORKSHOP_MODE] STATUS_CHANGE_RESPONSE",payload:{sessionId:e,isEnabled:t}}),s=(e,t,n)=>({type:"[WORKSHOP_MODE] CHANGE_MEETING_TOOLS",payload:{sessionId:e,availableTools:t},statSource:n}),l=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"showtime_panel";return{type:"[WORKSHOP_MODE] TOGGLE_TOOLBAR_VISIBILITY",payload:{sessionId:e,isVisible:t},statSource:n}}},490797:function(e,t,n){"use strict";n.d(t,{Px:()=>r,Ze:()=>a,wm:()=>i}),n(439367);let r=e=>e.workshopMode.toolbarEnabled,a=e=>e.workshopMode.limitedToolsEnabled,i=e=>e.workshopMode.availableTools},146024:function(e,t,n){"use strict";n.d(t,{Fj:()=>c,IW:()=>s,Kf:()=>p,XJ:()=>d,jT:()=>a,lC:()=>u,t7:()=>o,v5:()=>i,wR:()=>l});var r,a=((r={}).SET="[AGENDA_FRAMES] SET",r.REMOVE="[AGENDA_FRAMES] REMOVE",r.SET_FRAMES="[AGENDA_FRAMES] SET_FRAMES",r.SET_FRAME_PREVIEW="[AGENDA_FRAMES] SET_FRAME_PREVIEW",r.SET_FRAME_PREVIEW_LIST="[AGENDA_FRAMES] SET_FRAME_PREVIEW_LIST",r.SET_FRAME_ON_BOARD_EXISTED="[AGENDA_FRAMES] SET_FRAME_ON_BOARD_EXISTED",r.CLEAR="[AGENDA_FRAMES] CLEAR_FRAMES",r.SET_IS_ACTIVE_FRAME_CENTERED="[AGENDA_FRAMES] SET_IS_FRAME_CENTERED",r);let i=e=>({type:"[AGENDA_FRAMES] SET",payload:e}),o=e=>({type:"[AGENDA_FRAMES] REMOVE",payload:e}),s=()=>({type:"[AGENDA_FRAMES] CLEAR_FRAMES"}),l=e=>({type:"[AGENDA_FRAMES] SET_FRAMES",payload:e}),d=(e,t)=>({type:"[AGENDA_FRAMES] SET_FRAME_PREVIEW",payload:{frameId:e,framePreview:t}}),c=e=>({type:"[AGENDA_FRAMES] SET_FRAME_PREVIEW_LIST",payload:e}),u=e=>({type:"[AGENDA_FRAMES] SET_FRAME_ON_BOARD_EXISTED",payload:e}),p=e=>({type:"[AGENDA_FRAMES] SET_IS_FRAME_CENTERED",payload:e})},6148:function(e,t,n){"use strict";n.d(t,{A2:()=>g,B9:()=>l,BQ:()=>v,CL:()=>c,Dy:()=>f,E_:()=>i,FZ:()=>u,Gu:()=>_,Iy:()=>s,Ld:()=>E,QE:()=>x,SN:()=>m,Vp:()=>d,WB:()=>a,ZC:()=>b,hn:()=>o,nu:()=>h,o8:()=>p,yH:()=>I});var r,a=((r={}).SHOW_HOW_PICK_FRAME="[AGENDA_FRAMES] SHOW_HOW_PICK_FRAME",r.JUMP_TO_FRAME="[AGENDA_FRAMES] JUMP_TO_FRAME",r.JUMP_TO_ACTIVE_FRAME="[AGENDA_FRAMES] JUMP_TO_ACTIVE_FRAME",r.NORMALIZE_SET_FRAMES="[AGENDA_FRAMES] NORMALIZE_SET_FRAMES",r.UPDATE="[AGENDA_FRAMES] UPDATE",r.UPDATE_FRAME_DATA="[AGENDA_FRAMES] UPDATE_FRAME_DATA",r.SAFE_UPDATE_FRAME_BY_ID="[AGENDA_FRAMES] SAFE_UPDATE_FRAME_BY_ID",r.UPDATE_FRAME_BY_ITEM="[AGENDA_FRAMES] UPDATE_FRAME_BY_ITEM",r.SAFE_REMOVE="[AGENDA_FRAMES] SAFE_REMOVE",r.GET_FRAME_PREVIEW="[AGENDA_FRAMES] GET_FRAME_PREVIEW",r.MOVE_VIEWPORT_TO_CURRENT_FRAME="[AGENDA_FRAMES] MOVE_VIEWPORT_TO_CURRENT_FRAME",r.RELEASE_VIEWPORT="[AGENDA_FRAMES] RELEASE_VIEWPORT",r.DELETE_FRAME_PREVIEW="[AGENDA_FRAMES] DELETE_FRAME_PREVIEW",r.RECALCULATE_FRAME_COUNT_ON_BOARD="[AGENDA_FRAMES] RECALCULATE_FRAME_COUNT_ON_BOARD",r.CHANGE_FRAME_NAME="[AGENDA_FRAMES] CHANGE_FRAME_NAME",r.SET_FRAMES_LOCK_STATE="[AGENDA_FRAMES] SET_FRAMES_LOCK_STATE",r.SET_FRAME_LOCK_STATE="[AGENDA_FRAMES] SET_FRAME_LOCK_STATE",r.CACHE_ALL_FRAME_PREVIEWS="[AGENDA_FRAMES] CACHE_ALL_FRAME_PREVIEWS",r.UPDATE_FRAME_PREVIEW="[AGENDA_FRAMES] UPDATE_FRAME_PREVIEW",r);let i=()=>({type:"[AGENDA_FRAMES] SHOW_HOW_PICK_FRAME"}),o=e=>({type:"[AGENDA_FRAMES] JUMP_TO_FRAME",payload:e}),s=()=>({type:"[AGENDA_FRAMES] JUMP_TO_ACTIVE_FRAME"}),l=e=>({type:"[AGENDA_FRAMES] NORMALIZE_SET_FRAMES",payload:e}),d=()=>({type:"[AGENDA_FRAMES] UPDATE"}),c=e=>({type:"[AGENDA_FRAMES] UPDATE_FRAME_DATA",payload:e}),u=e=>({type:"[AGENDA_FRAMES] UPDATE_FRAME_BY_ITEM",payload:e}),p=e=>({type:"[AGENDA_FRAMES] SAFE_REMOVE",payload:e}),m=e=>({type:"[AGENDA_FRAMES] SAFE_UPDATE_FRAME_BY_ID",payload:e}),h=e=>({type:"[AGENDA_FRAMES] GET_FRAME_PREVIEW",payload:e}),g=e=>({type:"[AGENDA_FRAMES] RECALCULATE_FRAME_COUNT_ON_BOARD",payload:e}),_=()=>({type:"[AGENDA_FRAMES] MOVE_VIEWPORT_TO_CURRENT_FRAME"}),f=()=>({type:"[AGENDA_FRAMES] RELEASE_VIEWPORT"}),E=e=>({type:"[AGENDA_FRAMES] CHANGE_FRAME_NAME",payload:e}),v=(e,t)=>({type:"[AGENDA_FRAMES] SET_FRAMES_LOCK_STATE",payload:{frameIds:e,state:t}}),I=(e,t)=>({type:"[AGENDA_FRAMES] SET_FRAME_LOCK_STATE",payload:{frameId:e,state:t}}),b=e=>({type:"[AGENDA_FRAMES] CACHE_ALL_FRAME_PREVIEWS",payload:{deferRender:e}}),x=e=>({type:"[AGENDA_FRAMES] UPDATE_FRAME_PREVIEW",payload:e})},967178:function(e,t,n){"use strict";n.d(t,{EN:()=>h,H6:()=>c,Ix:()=>_,Tu:()=>u,VS:()=>m,Zz:()=>l,oH:()=>f,ql:()=>p,sT:()=>g,wb:()=>s});var r=n(172458),a=n(560985),i=n(349452),o=n(681415);let s=e=>e.frames.items,l=e=>Object.values(s(e)).map(e=>e.tokenizer.id),d=e=>e.frames.previews,c=(e,t)=>{if(void 0!==t)return s(e)[t.hex]},u=(e,t)=>{if(void 0===t)return!1;let n=c(e,t);return n?.contentHidden??!1},p=(e,t)=>{if(void 0===t)return;let n=s(e)[t.hex];return void 0===n?void 0:""===n.titleText?{forEdit:"",forView:"Untitled"}:{forEdit:n.titleText,forView:n.titleText}},m=(e,t)=>{if(void 0!==t)return d(e)[t.hex]},h=e=>e.frames.boardHasFrames,g=(e,t)=>{let n=(0,r.oK)(e,t.toString());if(n?.widgetId!==void 0)return c(e,n.widgetId)},_=(0,a.P1)(i.tE,r.CB,s,(e,t,n)=>e.map((e,r)=>{let a=n[t[e].widgetId.hex];return{token:a?.tokenizer.token.toString()??"",index:r,sidebarIndex:r,name:a?.titleText??"",contentHidden:a?.contentHidden??!1,childState:o.M.None}})),f=e=>()=>e.frames.isActiveFrameCentered},378244:function(e,t,n){"use strict";n.d(t,{EN:()=>u,Tk:()=>c});var r=n(349452),a=n(967178),i=n(172458),o=n(679001),s=n(77034),l=n(6148),d=n(146024);let c={agendaSelector:r.R9,agendaHasSomeItemSelector:r.RJ,meetingStatusSelector:r.xD,activeAgendaItemPositionSelector:r.vO,activeAgendaItemTimeLeftSelector:r.i5,frameIdsSelector:a.Zz,frameNameByIdSelector:a.ql,framePreviewByIdSelector:a.VS,frameHiddenFlagByIdSelector:a.Tu,agendaItemsIdsSelector:r.lr,agendaItemSelector:i.oK,runningAgendaItemSelector:i.g4,sortedAgendaItemIdsSelector:r.tE,agendaItemCountSelector:r.ll},u={createItemFromFrame:o.mf,deleteItemByFrameId:o._s,changeMeetingSessionId:s.XW,viewportUpdated:s.VP,jumpToFrame:l.hn,clearFrames:d.IW,jumpToActiveFrame:l.Iy,syncWithMeetingStatus:o.sB}},391021:function(e,t,n){"use strict";n.d(t,{ET:()=>o,UY:()=>i,V4:()=>l,XV:()=>a,tV:()=>s});var r,a=((r={}).UPDATE_FOLLOWING_USER_ID="[FOLLOWING] UPDATE_FOLLOWING_USER_ID",r.GET_FOLLOWERS="[FOLLOWING] GET_FOLLOWERS",r.SET_FOLLOWERS="[FOLLOWING] SET_FOLLOWERS",r.TOGGLE_FOLLOW_USER="[FOLLOWING] TOGGLE_FOLLOW_USER",r);let i=e=>({type:"[FOLLOWING] UPDATE_FOLLOWING_USER_ID",payload:{followingUserId:e}}),o=()=>({type:"[FOLLOWING] GET_FOLLOWERS"}),s=e=>({type:"[FOLLOWING] SET_FOLLOWERS",payload:e}),l=(e,t)=>({type:"[FOLLOWING] TOGGLE_FOLLOW_USER",payload:{userId:e,userName:t}})},406730:function(e,t,n){"use strict";n.d(t,{P$:()=>r,aG:()=>i,tQ:()=>a});let r=e=>e.following.followingUserId,a=e=>e.following.followers||[],i=e=>a(e).length},214328:function(e,t,n){"use strict";n.d(t,{BJ:()=>u,Bo:()=>c,Fv:()=>i,Lu:()=>l,M$:()=>s,Pf:()=>o,Xc:()=>g,YC:()=>d,eC:()=>m,f4:()=>h,y2:()=>a,zk:()=>p});var r,a=((r={}).RAISE_HAND="[REACTIONS] RAISE_HAND",r.LOWER_HAND="[REACTIONS] LOWER_HAND",r.LOWER_HAND_IF_RAISED="[REACTIONS] LOWER_HAND_IF_RAISED",r.LOWER_HAND_FOR_ALL_PARTICIPANTS="[REACTIONS] LOWER_HAND_FOR_ALL_PARTICIPANTS",r.SEND_LOWER_HAND_STAT_EVENT="[REACTIONS] SEND_LOWER_HAND_STAT_EVENT",r.SEND_LOWER_HAND_FOR_ALL_PARTICIPANTS_STAT_EVENT="[REACTIONS] SEND_LOWER_HAND_FOR_ALL_PARTICIPANTS_STAT_EVENT",r.CHANGE_REACTION_CONFIG="[REACTIONS] CHANGE_REACTION_CONFIG",r.USER_STATUSES_CHANGED="[REACTIONS] USER_STATUSES_CHANGED",r.CALCULATE_PARTICIPANTS_RAISED_HANDS="[REACTIONS] CALCULATE_PARTICIPANTS_RAISED_HANDS",r.UPDATE_SELF_RAISED_HAND="[REACTIONS] UPDATE_SELF_RAISED_HAND",r.UPDATE_PARTICIPANTS_RAISED_HANDS_SET="[REACTIONS] UPDATE_PARTICIPANTS_RAISED_HANDS_SET",r.REACTIONS_BUTTON_CLICKED="[REACTIONS] REACTIONS_BUTTON_CLICKED",r.SOUNDBOARD_SOUND_CLICKED="[REACTIONS] SOUNDBOARD_SOUND_CLICKED",r);let i=e=>({type:"[REACTIONS] CHANGE_REACTION_CONFIG",payload:e}),o=e=>({type:"[REACTIONS] LOWER_HAND",payload:{userId:e}}),s=(e,t)=>({type:"[REACTIONS] LOWER_HAND_IF_RAISED",payload:{userId:t,actionType:e}}),l=e=>({type:"[REACTIONS] LOWER_HAND_FOR_ALL_PARTICIPANTS",payload:{actionType:e}}),d=e=>({type:"[REACTIONS] SEND_LOWER_HAND_STAT_EVENT",payload:{actionType:e}}),c=e=>({type:"[REACTIONS] SEND_LOWER_HAND_FOR_ALL_PARTICIPANTS_STAT_EVENT",payload:{actionType:e}}),u=()=>({type:"[REACTIONS] USER_STATUSES_CHANGED"}),p=()=>({type:"[REACTIONS] CALCULATE_PARTICIPANTS_RAISED_HANDS"}),m=e=>({type:"[REACTIONS] UPDATE_PARTICIPANTS_RAISED_HANDS_SET",payload:{raisedHands:e}}),h=e=>({type:"[REACTIONS] UPDATE_SELF_RAISED_HAND",payload:{isMyHandRaised:e}}),g=()=>({type:"[REACTIONS] REACTIONS_BUTTON_CLICKED"})},952334:function(e,t,n){"use strict";n.d(t,{E:()=>a,f:()=>i});var r=n(214328);let a={reactionsConfig:{enableSend:!1},isMyHandRaised:!1,participantsRaisedHands:[]},i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.y2.CHANGE_REACTION_CONFIG:return{...e,reactionsConfig:t.payload??e.reactionsConfig};case r.y2.UPDATE_SELF_RAISED_HAND:return{...e,isMyHandRaised:t.payload.isMyHandRaised};case r.y2.UPDATE_PARTICIPANTS_RAISED_HANDS_SET:return{...e,participantsRaisedHands:[...t.payload.raisedHands]};default:return e}}},878897:function(e,t,n){"use strict";n.d(t,{Ux:()=>l,Xx:()=>d,aL:()=>s,ci:()=>i,x4:()=>o});var r=n(952334);let a=e=>e.reactions??r.E,i=e=>a(e).reactionsConfig,o=e=>a(e).isMyHandRaised,s=e=>a(e).participantsRaisedHands.length>0,l=e=>t=>a(t).participantsRaisedHands.includes(e),d=e=>a(e).participantsRaisedHands},190138:function(e,t,n){"use strict";n.d(t,{s:()=>r});let r=e=>"object"==typeof e&&null!==e&&"divider"in e},72238:function(e,t,n){"use strict";n.d(t,{Ec:()=>s,G3:()=>o,ie:()=>i,xy:()=>a});var r=n(283153);let a="dont-reselect",i="navigation-bar",o={[r.V.THUMBNAIL]:174,[r.V.LIST]:56},s={[r.V.THUMBNAIL]:210,[r.V.LIST]:92}},48633:function(e,t,n){"use strict";n.d(t,{F:()=>s});var r=n(202784),a=n(283153);let i=a.V.THUMBNAIL,o=e=>Object.values(a.V).includes(e),s=e=>{let{localStorage:t,onListViewModeChange:n}=e,[a,s]=(0,r.useState)((0,r.useMemo)(()=>{let n=t.getItem(e.storageKey);return o(n)?n:i},[]));return{viewMode:a,setViewMode:(0,r.useCallback)(r=>{t.setItem(e.storageKey,r),n?.(r),s(r)},[])}}},719601:function(e,t,n){"use strict";n.d(t,{m:()=>c});var r=n(202784),a=n(956053),i=n(72238);let o=e=>{(0,r.useEffect)(()=>{let t=t=>{t.target instanceof Element&&t.target.closest(`[data-selection-class="${i.xy}"]`)||e()},n=t=>{"Escape"===t.key&&e()},r=document.body,a=document.getElementById("frames-tab-content");return r?.addEventListener("click",t),a?.addEventListener("keydown",n),()=>{r?.removeEventListener("click",t),a?.removeEventListener("keydown",n)}})};var s=n(681415),l=n(426755);let d=(e,t,n)=>{let r=e.indexOf(t),a=e.indexOf(n),i=Math.min(r,a),o=Math.max(r,a);return e.filter((e,t)=>t>=i&&t<=o)},c=e=>{let{frames:t,onSelectFrame:n}=e,i=(0,l.js)(),c=(0,l.GB)(),u=(0,r.useRef)(n),p=(0,r.useRef)([]),m=(0,r.useRef)(null),h=(0,r.useCallback)(e=>{p.current=[],m.current=e},[]),[g,_]=(0,r.useState)([]),f=(0,r.useMemo)(()=>i&&0===g.length?c?[c.tokenizer.token.toString()]:[]:g.map(e=>t.find(t=>t.token===e)).filter(a.$).map(e=>e.token),[g,t]),E=e=>{let n=new Map(t.map((e,t)=>[e.token,t]));return e.sort((e,t)=>{let r=n.get(e),a=n.get(t);return r&&a?r-a:0})},v=(0,r.useCallback)(e=>{let{frameToken:t,addToSelection:n}=e;_(e=>n?E([...e,t]):[t]),h(t),u.current?.({...e})},[]),I=(0,r.useCallback)(e=>{let n=m.current??t[0]?.token;if(void 0===n)return;let r=d(t.map(e=>e.token),n,e);_(Array.from(new Set(E(f.filter(e=>!p.current.includes(e)).concat(n,...r))))),p.current=r},[t,f]),b=(0,r.useCallback)(e=>{_(t=>t.filter(t=>t!==e)),h(e)},[]),x=(0,r.useCallback)(e=>{let{frameToken:t,index:n,addToSelection:r,rangeSelection:a}=e,o=e.jumpToFrame&&!i;if(a){I(t);return}r&&f.includes(t)?b(t):v({frameToken:t,index:n,addToSelection:r,jumpToFrame:o})},[f,I]),T=(0,r.useCallback)(e=>{let n=t.find(t=>t.token===e);if(i||!n||!n.slideContainerId||n.childState!==s.M.FirstChild)return!1;let r=t.find(e=>e.token===f[0]);return!!r&&r.slideContainerId===n.slideContainerId},[t,f]),S=(0,r.useCallback)(e=>f.includes(e)||T(e),[f,T]),A=(0,r.useCallback)(()=>{_(t.map(e=>e.token))},[t]),w=(0,r.useCallback)(()=>{_([]),h(null)},[]);return o(w),{selectedTokens:f,toggleFrameSelection:x,selectAllFrames:A,deselectFrame:b,deselectAllFrames:w,setRangeSelectionPivot:h,isItemSelected:S}}},956053:function(e,t,n){"use strict";function r(e){return void 0!==e}n.d(t,{$:()=>r})},283153:function(e,t,n){"use strict";n.d(t,{V:()=>a});var r,a=((r={}).THUMBNAIL="thumbnail",r.LIST="list",r)},149864:function(e,t,n){"use strict";n.d(t,{x:()=>a});var r,a=((r={}).framesList="frames-list",r.limitedApps="limited-apps",r.participantList="participant-list",r.reactions="reactions",r.preferences="preferences",r)},882891:function(e,t,n){"use strict";n.d(t,{q:()=>a});var r,a=((r={}).FRAMES="showtime-frames",r.MEETING="showtime-meeting",r)},136307:function(e,t,n){"use strict";n.d(t,{R:()=>o});var r=n(202784),a=n(165655),i=n(322584);let o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,r.useMemo)(()=>a.j.getTreatment(e,{email:(0,i.Rf)().email,...t}),[e,t])}},777199:function(e,t,n){"use strict";n.d(t,{gW:()=>o,tH:()=>a,y_:()=>i});var r,a=((r={}).CREATE_HANDOFF_BUTTON="[SHOWTIME ACTION BUTTON] CREATE_HANDOFF_BUTTON",r.HAND_OFF="[SHOWTIME ACTION BUTTON] HAND_OFF",r);let i=(e,t)=>({type:"[SHOWTIME ACTION BUTTON] CREATE_HANDOFF_BUTTON",payload:{userId:e,name:t}}),o=e=>({type:"[SHOWTIME ACTION BUTTON] HAND_OFF",payload:{userId:e}})},813945:function(e,t,n){"use strict";n.d(t,{Bo:()=>l,De:()=>o,K0:()=>p,Vj:()=>c,X_:()=>a,ZH:()=>d,it:()=>i,mL:()=>u,qr:()=>s});var r,a=((r={}).DATA_UPDATED="[MEETING] DATA_UPDATED",r.MEETING_FRAMES_COUNT_CHANGED="[MEETING] MEETING_FRAMES_COUNT_CHANGED",r.CLOSE_VIEW="[MEETING] CLOSE_VIEW",r.OPEN_FEEDBACK="[MEETING] OPEN_FEEDBACK",r.CLEAR="[MEETING] CLEAR",r.MEETING_MODE_CHANGED="[MEETING] MEETING_MODE_CHANGED",r.GUIDED_NAVIGATION_UPDATED="[MEETING_MIDDLEWARE] GUIDED_NAVIGATION_UPDATED",r.MONITORING_MEETING_STARTED_FROM_SERVER="[MEETING_MIDDLEWARE] MONITORING_MEETING_STARTED_FROM_SERVER",r.MONITORING_MEETING_STARTED_FROM_CLIENT="[MEETING_MIDDLEWARE] MONITORING_MEETING_STARTED_FROM_CLIENT",r.SET_WATCH_TUTORIAL_TIP_VISIBILITY="[MEETING_MIDDLEWARE] SET_WATCH_TUTORIAL_TIP_VISIBILITY",r);let i=e=>({type:"[MEETING_MIDDLEWARE] SET_WATCH_TUTORIAL_TIP_VISIBILITY",payload:e}),o=(e,t)=>({type:"[MEETING] DATA_UPDATED",payload:{data:e,prevData:t}}),s=e=>({type:"[MEETING] MEETING_FRAMES_COUNT_CHANGED",payload:{meetingFramesCount:e}}),l=e=>({type:"[MEETING] MEETING_MODE_CHANGED",payload:{meetingMode:e}}),d=()=>({type:"[MEETING] CLEAR"}),c=e=>({type:"[MEETING_MIDDLEWARE] GUIDED_NAVIGATION_UPDATED",payload:{isEnabled:e}}),u=()=>({type:"[MEETING_MIDDLEWARE] MONITORING_MEETING_STARTED_FROM_SERVER"}),p=()=>({type:"[MEETING_MIDDLEWARE] MONITORING_MEETING_STARTED_FROM_CLIENT"})},283232:function(e,t,n){"use strict";n.d(t,{e:()=>r,l:()=>a});let r=e=>e.meeting,a=e=>e.meeting.isMonitoringMeetingStarted},819774:function(e,t,n){"use strict";n.d(t,{$b:()=>l,BN:()=>u,EU:()=>d,F5:()=>o,OW:()=>s,QB:()=>c,SP:()=>i,Y2:()=>a});var r,a=((r={}).BAR_APPS_BUTTON_CLICKED="[MEETING_MIDDLEWARE] BAR_APPS_BUTTON_CLICKED",r.BAR_SLIDES_BUTTON_CLICKED="[MEETING_MIDDLEWARE] BAR_SLIDES_BUTTON_CLICKED",r.BAR_SLIDE_CLICKED="[MEETING_MIDDLEWARE] BAR_SLIDE_CLICKED",r.BAR_SLIDE_PREVIEW_HOVERED="[MEETING_MIDDLEWARE] BAR_SLIDE_PREVIEW_HOVERED",r.BAR_SLIDE_PREVIEW_CLICKED="[MEETING_MIDDLEWARE] BAR_SLIDE_PREVIEW_CLICKED",r.CHANGE_LEADER_CLICKED="[MEETING_MIDDLEWARE] CHANGE_LEADER_CLICKED",r.USERS_SEARCH_USED="[MEETING_MIDDLEWARE] USERS_SEARCH_USED",r.BAR_PREFERENCES_CLICKED="[MEETING_MIDDLEWARE] BAR_PREFERENCES_CLICKED",r.BAR_SHARE_CLICKED="[MEETING_MIDDLEWARE] BAR_SHARE_CLICKED",r);let i=()=>({type:"[MEETING_MIDDLEWARE] BAR_APPS_BUTTON_CLICKED"}),o=()=>({type:"[MEETING_MIDDLEWARE] BAR_SLIDES_BUTTON_CLICKED"}),s=e=>({type:"[MEETING_MIDDLEWARE] BAR_SLIDE_CLICKED",payload:{frameId:e}}),l=e=>({type:"[MEETING_MIDDLEWARE] CHANGE_LEADER_CLICKED",payload:e}),d=e=>({type:"[MEETING_MIDDLEWARE] USERS_SEARCH_USED",payload:e}),c=()=>({type:"[MEETING_MIDDLEWARE] BAR_PREFERENCES_CLICKED"}),u=()=>({type:"[MEETING_MIDDLEWARE] BAR_SHARE_CLICKED"})},284340:function(e,t,n){"use strict";n.d(t,{F1:()=>c,_p:()=>l,aT:()=>d,d6:()=>h,h2:()=>g,ny:()=>s,qb:()=>u,t0:()=>p,tI:()=>o,xg:()=>m});var r,a=n(882891),i=n(323239),o=((r={}).SET_ACTIVE_TAB="[SHOWTIME_SIDEBAR] SET_ACTIVE_TAB",r.SEND_STAT_ON_ACTIVE_TAB_SWITCH="[SHOWTIME_SIDEBAR] SEND_STAT_ON_ACTIVE_TAB_SWITCH",r.OPEN_SHOWTIME_SIDEBAR="[SHOWTIME_SIDEBAR] OPEN_SHOWTIME_SIDEBAR",r.CLOSE_SHOWTIME_SIDEBAR="[SHOWTIME_SIDEBAR] CLOSE_SHOWTIME_SIDEBAR",r.RUN_MEETING_OR_OPEN_SHOWTIME_SIDEBAR="[SHOWTIME_SIDEBAR] RUN_MEETING_OR_OPEN_SHOWTIME_SIDEBAR",r.RUN_ACTIVITIES_SESSION="[SHOWTIME_SIDEBAR] RUN_ACTIVITIES_SESSION",r.RUN_PRESENTATION_OR_OPEN_SHOWTIME_SIDEBAR="[SHOWTIME_SIDEBAR] RUN_PRESENTATION_OR_OPEN_SHOWTIME_SIDEBAR",r.RUN_PRESENTATION_AD_HOC="[SHOWTIME_SIDEBAR] RUN_PRESENTATION_AD_HOC",r.RUN_PRESENTATION_STRUCTURED="[SHOWTIME_SIDEBAR] RUN_PRESENTATION_STRUCTURED",r.PRESENT_BUTTON_CLICKED="[SHOWTIME_SIDEBAR] PRESENT_BUTTON_CLICKED",r);let s=e=>({type:"[SHOWTIME_SIDEBAR] SET_ACTIVE_TAB",payload:e}),l=e=>({type:"[SHOWTIME_SIDEBAR] SEND_STAT_ON_ACTIVE_TAB_SWITCH",payload:{tab:e}}),d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.T6.APP_BAR,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.q.MEETING;return{type:"[SHOWTIME_SIDEBAR] OPEN_SHOWTIME_SIDEBAR",payload:{statSource:e,tab:t}}},c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.T6.CLOSE_BTN,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:"[SHOWTIME_SIDEBAR] CLOSE_SHOWTIME_SIDEBAR",payload:{statSource:e,preventReopen:t}}},u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.T6.APP_BAR,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:"[SHOWTIME_SIDEBAR] RUN_ACTIVITIES_SESSION",payload:{statSource:e,isShowTimeAdvancedAvailable:t}}},p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.T6.APP_BAR;return{type:"[SHOWTIME_SIDEBAR] RUN_PRESENTATION_OR_OPEN_SHOWTIME_SIDEBAR",payload:{statSource:e}}},m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.T6.APP_BAR;return{type:"[SHOWTIME_SIDEBAR] RUN_PRESENTATION_AD_HOC",payload:{statSource:e}}},h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.MQ.PRESENT;return{type:"[SHOWTIME_SIDEBAR] PRESENT_BUTTON_CLICKED",payload:{buttonSide:e}}},g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.T6.APP_BAR;return{type:"[SHOWTIME_SIDEBAR] RUN_PRESENTATION_STRUCTURED",payload:{statSource:e}}}},179732:function(e,t,n){"use strict";n.d(t,{Z:()=>a,z:()=>i});var r,a=((r={}).ITEM_APP_MENU_INTERACTED="[SHOWTIME_STAT]APP_MENU_CLICKED",r);let i=(e,t)=>({type:"[SHOWTIME_STAT]APP_MENU_CLICKED",payload:{actionType:e,appName:t}})},521454:function(e,t,n){"use strict";n.d(t,{Y:()=>r});let r="lightboxing"},943212:function(e,t,n){"use strict";n.d(t,{cZ:()=>d,c:()=>c});var r=n(284340),a=n(97438),i=n(679001),o=n(349452),s=n(261178),l=n(777199);let d={activeShowtimeSidebarTabSelector:e=>e.showtimeSidebar.activeTab,selectRunningSession:a.gC,selectIsLeader:a.d1,runningAgendaIdSelector:o.W1,lastAgendaItemIndexSelector:o.iI,selectRunningOrSelectedAdvancedSession:a.Sy,selectIsParticipant:a.fc},c={openShowtimeSidebar:r.aT,closeShowtimeSidebar:r.F1,setShowtimeSidebarActiveTab:r.ny,sendStatOnShowtimeActiveTabSwitch:r._p,sendStatForCreateItem:i.Qi,setSelectedSession:s.Zt,setHasLostConnection:s.Kj,joinShowtime:s.D,leaveShowtime:s.Di,createHandoffButton:l.y_,handOff:l.gW}},254914:function(e,t,n){"use strict";n.d(t,{a:()=>m});var r=n(55443),a=n(16421);let i=n.p+"trans/cff6005cdf21758f.json",o=n.p+"trans/80aa7b6f582de611.json",s=n.p+"trans/56e1c67afc4c47ee.json",l=n.p+"trans/ced9c945463c0789.json",d=n.p+"trans/ad4ca5f8dd12190d.json",c=n.p+"trans/77961987b7d650a9.json",u=n.p+"trans/a8186a9d3353df20.json",p=n.p+"trans/05a697aaad5e19e4.json",m=new r.zz({translationImports:{lang:{de:()=>(0,r.PC)(i),en:()=>(0,r.PC)(o),es:()=>(0,r.PC)(s),fr:()=>(0,r.PC)(l),ja_JP:()=>(0,r.PC)(d),ko:()=>(0,r.PC)(c),pl:()=>(0,r.PC)(u),pt_BR:()=>(0,r.PC)(p)}},langKey:a.vf.en,namespace:"showtime"})},79845:function(e,t,n){"use strict";n.d(t,{C5:()=>A,Cx:()=>S,LP:()=>c,Oj:()=>s,Ql:()=>p,W3:()=>f,Wx:()=>u,bu:()=>v,cB:()=>x,cq:()=>_,e:()=>o,eV:()=>b,j:()=>m,kU:()=>d,lJ:()=>I,nT:()=>l,oI:()=>T,pr:()=>E,xR:()=>g,yH:()=>h});var r=n(648346),a=n(438719),i=n(664483);let o=(0,a.yx)(i.LH),s=(0,a.yx)(i.RI),l=()=>[(0,r.KO)(i.K3.atom),(0,r.YZ)(i.K3.setCmd)],d=()=>(0,r.KO)(i.dd),c=()=>(0,r.KO)(i.tA),u=()=>(0,r.KO)(i.Gg),p=()=>(0,r.KO)(i.$T),m=(0,a.yx)(i.rR),h=(0,a.yx)(i.t7);(0,a.yx)(i.bN);let g=(0,a.yx)(i.Bv),_=(0,a.yx)(i.ml),f=(0,a.yx)(i.Cy),E=(0,a.yx)(i.aq),v=(0,a.yx)(i.D2),I=(0,a.yx)(i.Vq),b=(0,a.yx)(i.Bg),x=(0,a.yx)(i.QP),T=(0,a.yx)(i.op),S=(0,a.yx)(i.yu),A=(0,a.yx)(i.d9)},740103:function(e,t,n){"use strict";n.d(t,{$:()=>o});var r=n(118717),a=n(322841),i=n(118148);function o(e,t,n,o){var s;let l=t.id,d=e=>{throw Error(`
			Dispatching while constructing your middleware is not allowed
			Other middleware would not be applied to this dispatch, action type is: [${e.type}]
		`)},c=(0,a.sF)((0,a.Vv)({createStore:r.MT,applyEnhancer:(s=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return d(...t)},function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>function(){for(var n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];let o=e(...a),l=()=>{throw Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},d={getState:o.getState,dispatch:s};return l=(0,r.qC)(...t.map(e=>e(d)))(o.dispatch),{...o,dispatch:l}}}),devToolsName:(0,i.x)()?l:""}),t),u=Object.keys(o).reduce((e,t)=>(e[o[t]]=!0,e),{}),p=!1;d=t=>{u[t.type]&&!p?e.dispatch(t):c.dispatch(t)};let m=n(e.getState()),h=c.getState(),g={...h,...m};function _(t){let r=null;if(t.withParent){let t=n(e.getState());t!==m&&(r={...m=t,...h})}if(t.withChild){let e=c.getState();e!==h&&(h=e,r={...m,...h})}return r&&(g=r),r}e.injectMiddleware(l,[()=>()=>e=>{u[e.type]&&(p=!0,d(e),p=!1)}]);let f=[],E=e.subscribe(()=>{_({withParent:!0})&&f.forEach(e=>e())}),v=c.subscribe(()=>{_({withChild:!0})&&f.forEach(e=>e())});return{dispatch:d,subscribe:function(e){f.push(e);let t=!0;return()=>{if(!t)return;t=!1;let n=f.indexOf(e);-1!==n&&f.splice(n,1)}},getState:function(){return g},replaceReducer:()=>{},[Symbol.observable]:function(){let t=e.subscribe,n=c.subscribe;return{subscribe(e){if("object"!=typeof e||null===e)throw TypeError("Expected the observer to be an object.");function r(){if(e.next){let t=_({withParent:!0,withChild:!0});t&&e.next(t)}}r();let a=t(r),i=n(r);return{unsubscribe(){a(),i()}}},[Symbol.observable](){return this}}},destroy(){v&&v(),E&&E(),e.removeMiddleware(l)}}}},504979:function(e,t,n){"use strict";function r(e){return Math.ceil(e/1e3)}function a(e,t){return e-t<1500}function i(e){let t=function(e){let{leftTime:t,min:n,duration:r}=e;return Math.max(Math.min((t-n)/(r-n),1),0)}(e);return{transform:`translateX(calc(${100*t}% - ${20*t}px + 10px - 100%))`}}n.d(t,{C2:()=>i,Ht:()=>r,IV:()=>a})},281579:function(e,t,n){"use strict";n.d(t,{u:()=>c});var r=n(685452),a=n(552322),i=n(202784),o=n(72779),s=n.n(o),l=n(976733);n(283346);let d={input:"rtb-toggle-auto-test-id__input",text:"rtb-toggle-auto-test-id__text",rootLabel:"rtb-toggle-auto-test-id__root-label"};class c extends i.PureComponent{componentDidMount(){this.isCurrentlyMounted=!0,this.labelRef.current&&this.labelRef.current.classList.add("rtb-toggle--animated")}componentWillUnmount(){this.isCurrentlyMounted=!1}onChange(){this.props.onChange&&this.props.onChange(!this.props.checked)}onKeyDown(e){"Enter"===e.key&&this.onChange()}render(){let{size:e}=this.props;return(0,a.jsxs)("label",{className:s()("rtb-toggle",e?`rtb-toggle--${e}`:void 0,{"rtb-toggle--disabled":this.props.isDisabled},this.props.className),ref:this.labelRef,"data-scrollable-element":"true","data-testid":this.autoTestIds.rootLabel,children:[(0,a.jsx)("input",{type:"checkbox",name:this.props.name,checked:this.props.checked,onChange:this.onChange,onKeyDown:this.onKeyDown,disabled:this.props.isDisabled,"data-testid":this.autoTestIds.input,"aria-checked":this.props.checked,role:"switch"}),(0,a.jsx)("span",{className:"rtb-toggle__indicator"}),this.props.label?(0,a.jsx)("span",{"data-testid":this.autoTestIds.text,className:"rtb-toggle__text",children:this.props.label}):null,this.props.children]})}constructor(...e){super(...e),this.labelRef=i.createRef(),this.autoTestIds={...d,...this.props.dataTestids},this.isCurrentlyMounted=!1}}(0,r.__decorate)([l.N],c.prototype,"onChange",null),(0,r.__decorate)([l.N],c.prototype,"onKeyDown",null)},229133:function(e,t,n){"use strict";n.d(t,{v:()=>nR});var r=n(552322),a=n(871999),i=n(202784),o=n(55443),s=n(16421);let l=n.p+"trans/4150d91a7e3efe8e.json",d=n.p+"trans/089d20f2c87faa7c.json",c=n.p+"trans/f0c1bfd5a171907e.json",u=n.p+"trans/ae6cdede143af300.json",p=n.p+"trans/b7eba4dd672cb2ed.json",m=n.p+"trans/c1faa5c015dcd944.json",h=n.p+"trans/3c74657703f8e155.json",g=n.p+"trans/1179ac392b873883.json",_=new o.zz({translationImports:{lang:{de:()=>(0,o.PC)(l),en:()=>(0,o.PC)(d),es:()=>(0,o.PC)(c),fr:()=>(0,o.PC)(u),ja_JP:()=>(0,o.PC)(p),ko:()=>(0,o.PC)(m),pl:()=>(0,o.PC)(h),pt_BR:()=>(0,o.PC)(g)}},langKey:s.vf.en,namespace:"frames"});var f=n(254914),E=n(824654),v=n(224629),I=n(461468),b=n(213422),x=n(333861),T=n(426755),S=n(860162);let A=(0,v._Y)("BoardService"),w=(0,v._Y)("ExportHelpers");var y=n(825568);let N=e=>{let t=A(),n=w(),r=(0,T.xX)(),o=()=>{let a=t.currentBoard.hasPermission(b.J.EXPORT_BOARD_DATA),i={canEditWidgets:t.currentBoard.hasPermission(b.J.EDIT_WIDGETS),canLockWidgets:t.currentBoard.hasPermission(b.J.LOCK_UNLOCK_WIDGETS),canEditFrames:(!r||!!(0,S.p)(r))&&(0,y._)().canEditFrames(),canHideFrames:e.canHideFrames,canStartPresentation:t.currentBoard.hasPermission(b.J.SET_PRESENTATION),canExportAsImage:a&&!n.getImageExportInfo().disabled,canExportAsCSV:a&&n.allowCSV(),canExportBoardData:a,isDesktop:x.h7.desktop,isTouchSupported:x.h7.isTouchSupported,isTouchSupportedAndNotDesktop:x.h7.isTouchSupportedAndNotDesktop};return e.isTimberlakeVisitor?{...i,canEditWidgets:!1,canLockWidgets:!1,canEditFrames:!1,canHideFrames:!1,canStartPresentation:!1,canExportAsImage:!1,canExportAsCSV:!1,canExportBoardData:!1}:i},[s,l]=(0,i.useState)(o());return(0,i.useEffect)(()=>{if(r)return r.subscribe(S.p.dependencyKeys,()=>l(o()))},[r]),(0,i.useEffect)(()=>{let e=!0;return n.isReadyToExport().then(()=>{e&&l(o())}).catch(e=>{throw(0,a.KC)(e)}),()=>{e=!1}},[]),s};var C=n(282357),R=n(63856),O=n(50156),M=n(666409),k=n(468677),D=n(72779),P=n.n(D),j=n(372971),L=n.n(j);let F=e=>(0,r.jsx)("div",{className:P()(L()["sidebar-splitter"],e.className)});function U(){return(U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var B=(0,i.forwardRef)(function(e,t){return i.createElement("svg",U({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),tT||(tT=i.createElement("path",{d:"M4 10v6.5a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H10M6 4H2M4 2v4M7.5 17 6 21M16.5 17l1.5 4",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round"})))}),G=n(6455),W=n(337525),H=((tS={}).FRAME_ACTIONS_BUTTON="frames-sidebar__frame-actions-button",tS.FRAME_HIDE_BUTTON="frames-sidebar__frame-hide-button",tS.FRAME_UNHIDE_BUTTON="frames-sidebar__frame-unhide-button",tS.FRAME_TITLE_LABEL="frames-sidebar__frame-title-label",tS.FRAME_SELECT_CHECKBOX_INPUT="frames-sidebar__frame-select-checkbox-input",tS.FRAME_CREATE_BUTTON="frames-sidebar__add-new-frame",tS.FRAME_CREATE_BUTTON_EMPTY="frames-sidebar__add-new-frame-empty",tS.FRAME_ORGANIZE_BUTTON="frames-sidebar__organize-frames",tS.FRAME_GHOST="frames-sidebar__frame-ghost",tS.FRAME_DRAG_OVERLAY="frames-sidebar__frame-drag-overlay",tS.FRAMES_PRESENTATION_TOGGLE_BUTTON="frames-sidebar__list__presentation-toggle",tS.FRAMES_LIST="frames-sidebar__list",tS.FRAMES_BULK_ACTIONS_CONTEXT_MENU="frames-sidebar__frames-bulk-actions-context-menu",tS.FRAMES_BULK_ACTIONS_CONTEXT_MENU_BUTTON="frames-sidebar__frames-bulk-actions-context-menu-button",tS.OPEN_PRESENTER_NOTES="showtime-open-presenter-notes",tS.BOARD_A11Y_SCREEN_READER_BUTTON="board-a11y-screen-reader-button",tS.FRAMES_PRESENTATION_PLAY="showtime-controls__start",tS),V=((tA={}).DELETE="frames-sidebar__bulk-actions-delete",tA.SHOW="frames-sidebar__bulk-actions-show",tA.HIDE="frames-sidebar__bulk-actions-hide",tA.MOVE_UP="frames-sidebar__bulk-actions-move-up",tA.MOVE_DOWN="frames-sidebar__bulk-actions-move-down",tA),z=((tw={}).RENAME="frames-sidebar__rename",tw.EXPORT="frames-sidebar__export",tw.EXPORT_AS_IMAGE="frames-sidebar__export-as-image",tw.EXPORT_TO_CSV="frames-sidebar__export-to-csv",tw.ADD_FRAME_BELOW="frames-sidebar__add-frame-below",tw.COPY_LINK="frames-sidebar__copy-link",tw.DELETE="frames-sidebar__delete",tw.SHOW="frames-sidebar__show",tw.HIDE="frames-sidebar__hide",tw.MOVE_UP="frames-sidebar__move_up",tw.MOVE_DOWN="frames-sidebar__move_down",tw);let Z=e=>{let{hasFrames:t,canEditFrames:n,onFrameCreate:a,onFramesOrganize:i}=e,{t:o}=(0,W.I)(_);return(0,r.jsx)(O.$,{children:(0,r.jsxs)(M._,{children:[(0,r.jsx)(k.W,{as:"h2",children:o("frames.components.sidebarFramesHeader.caption")}),n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(F,{}),(0,r.jsxs)(C.u,{children:[(0,r.jsx)(C.u.Trigger,{children:(0,r.jsx)(R.h,{"aria-label":o("frames.common.addNewFrame"),onClick:a,"data-testid":H.FRAME_CREATE_BUTTON,children:(0,r.jsx)(B,{})})}),(0,r.jsx)(C.u.Content,{children:o("frames.common.addNewFrame")})]}),t&&(0,r.jsxs)(C.u,{children:[(0,r.jsx)(C.u.Trigger,{children:(0,r.jsx)(R.h,{"aria-label":o("frames.common.organizeFrames"),onClick:i,"data-testid":H.FRAME_ORGANIZE_BUTTON,children:(0,r.jsx)(G.Z,{})})}),(0,r.jsx)(C.u.Content,{children:o("frames.common.organizeFrames")})]})]})]})})};var K=n(48633),Y=n(956053),q=n(449855),$=n(538267),J=n(735991),X=n(586118),Q=n(283153),ee=n(681415),et=n(27893),en=n(362900),er=n(631287);let ea=()=>({handleRenameEnd:(0,i.useCallback)((e,t)=>{(0,y._)().updateFrameName(e.index,t),(0,er.o)().track("frames_bar_item_interacted",{action_type:"title_change",textLen:t.length,items_total_number:(0,en.G)().framesList.framesCount,item_order_number:e.index+1})},[])}),ei=(0,v._Y)("CanvasSelectionAPI");var eo=n(292098);let es=(e,t)=>{for(let n of t)(0,er.o)().track("frames_bar_item_interacted",{action_type:"hide_frame",items_total_number:e,item_order_number:n+1})},el=(e,t,n,r)=>{let a=(0,en.G)(),i=(0,y._)(),o=t.map(t=>e.canHideFrames&&t.contentHidden!==n?a.getFrameWidgetByIndex(t.index):void 0).filter(e=>void 0!==e);o.length>0&&i.setContentHidden(o,n,r),o.some(e=>e?.isSelected())&&setTimeout(()=>{ei().update()},0),es(a.framesList.framesCount,o.map(e=>e.as(eo.q)?.getIndex()??-1))},ed=()=>(0,i.useCallback)((e,t,n,r)=>{el(e,t,n,r)},[]),ec=()=>(0,i.useCallback)(e=>{let t=(0,en.G)().getFrames().findIndex(t=>t.token===e);return en.G().getFrameWidgetByIndex(t)?.isPinned??!1},[]);var eu=n(241485),ep=n(64505),em=n(865075);let eh=(0,v._Y)("BoardExportService"),eg=(0,v._Y)("CanvasUtils"),e_=(0,v._Y)("ClipboardService");var ef=n(442596);let eE=()=>(0,i.useCallback)((e,t)=>{(0,er.o)().track("frames_bar_item_interacted",{action_type:e,items_total_number:(0,en.G)().framesList.framesCount,item_order_number:(t.as(eo.q)?.getIndex()??-1)+1})},[]),ev=()=>{let e=eE(),t=(0,T.xX)();return(0,i.useCallback)((n,r)=>{let a=(0,en.G)(),i=(0,y._)(),o=a.getFrameWidgetByIndex(n.index);if(void 0===o)return;e("add_frame_below",o);let s=null;if(t){let e=t.getIndexForInsert({afterTokenizer:o?.tokenizer});t?.addNewChildAtIndex(e),s=t.getChildAt(e)}s=s??i.createFrame({prevFrameTokenizer:o.tokenizer});let l=a.getFrames(),d=l.findIndex(e=>e.token===n.token),c=-1===d?void 0:l[d+1];void 0!==c&&r?.(c),i.startEditFrameName(s.tokenizer)},[])},eI=()=>{let e=eE();return(0,i.useCallback)(t=>{let n=(0,en.G)().getFrameWidgetByIndex(t.index);void 0!==n&&(e("export_image",n),eh().saveAsImage(n.bounds,n.as(ef.e)?.getText()??"","frame"))},[])},eb=()=>{let e=eE();return(0,i.useCallback)(t=>{let n=(0,en.G)().getFrameWidgetByIndex(t.index);void 0!==n&&(e("export_csv",n),eh().saveFrameAsCSV(n))},[])},ex=()=>{let e=eE();return(0,i.useCallback)(t=>{let n=(0,en.G)().getFrameWidgetByIndex(t.index);if(void 0===n)return;e("copy_link",n);let r=eg().getLinkToWidget(n);e_().copyToClipboardOrShowPrompt(r,{notifications:{successMessage:"Link copied"}})},[])},eT=()=>{let e=eE(),t=(0,en.G)(),n=(0,y._)();return(0,i.useCallback)(r=>{let a=r.map(e=>{let n=t.getFrameWidgetByIndex(e.index);if(n&&!n.require(em.O).value&&!n.isPinned)return n}).filter(e=>void 0!==e);n.deleteFrames(a),a.forEach(t=>{e("delete",t)})},[])},eS=()=>{let[e,t]=(0,i.useState)(null),n=eE();return{open:(0,i.useCallback)(e=>{t(e);let r=(0,en.G)().getFrames().findIndex(t=>t.token===e),a=(0,en.G)().getFrameWidgetByIndex(r);void 0!==a&&n("menu_open",a),(0,ep.E)().setFocus(eu.P.CONTEXT_MENU)},[]),close:(0,i.useCallback)(()=>{t(null),(0,ep.E)().setFocus(eu.P.FRAMES)},[]),frameId:e}};var eA=n(805991),ew=n(501446),ey=n(719601);let eN=(e,t,n)=>{let r=(0,en.G)(),a=(0,y._)(),[o]=(0,ew.eP)(),s=(0,eA.ju)(o),{selectedTokens:l,toggleFrameSelection:d,...c}=(0,ey.m)({frames:e,onSelectFrame:(0,i.useCallback)(e=>{let{index:i,addToSelection:o,jumpToFrame:l}=e;if(o)return;r.selectFrame(i,!1),l&&(a.jumpToFrame(i,!0),ei().remove(r.framesList.items)),(0,ep.E)().setFocus(eu.P.FRAMES),(0,er.o)().track("frames_bar_item_interacted",{action_type:"select",items_total_number:r.framesList.framesCount,item_order_number:i+1});let d=r.getFrameWidgetByIndex(i);s&&void 0!==d&&(0,er.o)().track("change_slide_clicked",{moving_direction:"",slide_order_number:i+1,mode:"sidebar",presentation_session_id:n??"",slide_widget_id:d.tokenizer.id.dec,slides_number:r.framesList.framesCount,user_board_role:t})},[s])});return(0,i.useEffect)(()=>{let e=r.selectedFrameChanged.add(e=>{if(null!==e){let t=e.tokenizer.token.toString();(1!==l.length||l[0]!==t)&&setTimeout(()=>{d({frameToken:t,index:e.as(eo.q)?.getIndex()??-1,addToSelection:!1,rangeSelection:!1,jumpToFrame:!1})},0)}});return()=>{e.detach()}},[l]),{selectedTokens:l,toggleFrameSelection:d,...c}},eC=e=>{let t=eT();return(0,i.useCallback)(n=>{t(n),e()},[t,e])},eR=()=>{(0,i.useEffect)(()=>()=>{(0,y._)().resetGenerationQueue()},[])},eO=(0,v._Y)("LocalStorage");var eM=n(774418);let ek=(0,v._Y)("AppStoreService");var eD=n(389958),eP=n(601521),ej=n(589403);let eL=n.p+"9f2329702d529a30.svg",eF=(0,n(409994).X)(_);var eU=n(604378),eB=n(317730),eG=n(575362),eW=n(14813),eH=n(337431),eV=n(750756),ez=n.n(eV),eZ=n(165180),eK=n(497299);let eY={placement:"bottom",body:{content:""},elementIntersectionVisibility:{threshold:.1,delay:300}},eq=e=>{let{canEditFrames:t,onFrameCreate:n}=e;return(0,r.jsx)(eM.zt,{store:ek(),children:(0,r.jsx)(eU.k,{direction:"column",align:"center",css:{width:"100%",marginLeft:"$300",marginRight:"$300",gap:"32px",textAlign:"center"},children:(0,eK.E)()?(0,r.jsx)(eB.p,{heading:(0,r.jsx)(eF,{tKey:"frames.plugin.sideBarFrames.emptyFramesTitle"}),illustration:eZ,description:(0,r.jsx)(eF,{tKey:"frames.plugin.sideBarFrames.emptyFramesSubtitle"}),actions:{primary:{label:(0,r.jsx)("span",{"data-testid":H.FRAME_CREATE_BUTTON_EMPTY,children:(0,r.jsx)(eG.z.Label,{children:(0,r.jsx)(eF,{tKey:"frames.common.createFrame"})})}),onPress:()=>n()}}}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"sr-only",children:(0,r.jsx)("h3",{children:(0,r.jsx)(eF,{tKey:"frames.plugin.sideBarFrames.youHaveNoFrames"})})}),(0,r.jsx)(eD.l,{size:"none",href:eL,className:ez().addFrameCtaIcon}),(0,r.jsxs)("div",{children:[(0,r.jsx)(eW.X6,{level:3,styledAs:"h4",children:(0,r.jsx)(eF,{tKey:"frames.plugin.sideBarFrames.emptyFramesTitle"})}),(0,r.jsx)(eW.xv,{children:(0,r.jsx)(eF,{tKey:"frames.plugin.sideBarFrames.emptyFramesSubtitle"})})]}),(0,r.jsx)(eP.H,{id:ej.Y.SHOWTIME_FRAME_SIDEBAR_CREATE_FRAME,content:eY,children:(0,r.jsxs)(eG.z,{onClick:()=>{n()},"data-testid":H.FRAME_CREATE_BUTTON_EMPTY,disabled:!t,size:"x-large",fluid:!0,children:[(0,r.jsx)(eG.z.IconSlot,{children:(0,r.jsx)(eH.IconFrame,{})}),(0,r.jsx)(eG.z.Label,{children:(0,r.jsx)(eF,{tKey:"frames.common.createFrame"})})]})})]})})})};var e$=n(433723),eJ=n(844906);let eX={signupButton:"signup-button-from-frames"},eQ=(0,e$.zo)(eU.k,{backgroundColor:"$background-neutrals",position:"sticky",bottom:0,gap:"12px",padding:"$300",borderRadius:"$50"}),e0=e=>{let{showRequestTeamAccessDialog:t,isFooter:n}=e;return n?(0,r.jsxs)(eQ,{direction:"column",children:[(0,r.jsx)(eW.xv,{size:"normal",children:(0,r.jsx)(eF,{tKey:"frames.requestAccess.text"})}),(0,r.jsx)(eG.z,{onClick:t,size:"x-large",fluid:!0,children:(0,r.jsx)(eG.z.Label,{children:(0,r.jsx)(eF,{tKey:"frames.requestAccess.button"})})})]}):(0,r.jsxs)(eU.k,{direction:"column",align:"center",css:{width:"100%",marginLeft:"$300",marginRight:"$300",gap:"32px",textAlign:"center"},children:[(0,r.jsxs)(eJ.x,{children:[(0,r.jsx)(eW.X6,{level:3,styledAs:"h3",css:{marginBottom:"$50"},children:(0,r.jsx)(eF,{tKey:"frames.requestAccess.title"})}),(0,r.jsx)(eW.xv,{size:"normal",children:(0,r.jsx)(eF,{tKey:"frames.requestAccess.text"})})]}),(0,r.jsx)(eG.z,{onClick:t,size:"x-large",fluid:!0,"data-testid":eX.signupButton,children:(0,r.jsx)(eG.z.Label,{children:(0,r.jsx)(eF,{tKey:"frames.requestAccess.button"})})})]})};var e1=n(775038),e2=n(255422),e4=n(6865),e3=n(871564),e6=n(648346),e5=n(637589),e9=n(55066),e7=n(713747),e8=n(770552),te=n(565924);let tt={root:te.c,addSlideButton:`${te.c}__add-slide-button`},tn=e=>{let{lastSelectedWidget:t}=e,{focusedSlideContainer:n}=(0,e6.KO)(T.b_),{t:a}=(0,W.I)(e7.o),i=a("slidesMode.sideBar.addSlide");return(0,r.jsxs)(eG.z,{variant:"secondary",size:"medium",onClick:()=>{if(n){if((0,e5.ak)(e9.cG.SLIDES_MODE_TEMPLATES)){let e=t?n.findIndexForChild(t):void 0;(0,e8.FV)().openSlideTemplatesPanel(n,void 0!==e?e+1:void 0)}else t?n.addNewChildAfter(t):n.addNewChildAtEnd();n.sendStatEvent("create_new_slide")}},"data-testid":tt.addSlideButton,"aria-label":i,fluid:!0,children:[(0,r.jsx)(eG.z.IconSlot,{children:(0,r.jsx)(eH.IconPlus,{})}),(0,r.jsx)(eG.z.Label,{children:i})]})};var tr=n(23837);let ta=["application/pdf","application/pptx",".pdf",".pptx"],ti={root:te.c,importSlidesButton:`${te.c}__import-slides-button`},to=()=>{let{focusedSlideContainer:e}=(0,e6.KO)(T.b_),t=(0,e8.et)().getApp(tr.p.UPLOAD),{t:n}=(0,W.I)(e7.o),a=n("slidesMode.sideBar.import");return(0,r.jsxs)(eG.z,{variant:"secondary",size:"medium",onClick:async()=>{e&&await t?.actions.uploadFromDisk?.execute(ta.join(","))},"data-testid":ti.importSlidesButton,"aria-label":a,fluid:!0,children:[(0,r.jsx)(eG.z.IconSlot,{children:(0,r.jsx)(eH.IconRectangleArrowUpCenter,{})}),(0,r.jsx)(eG.z.Label,{children:a})]})};var ts=n(472145),tl=n(561584),td=n(136307);let tc=e=>({...e,hidden:!1,disabled:!1,disabledTooltip:""}),tu=e=>{let{onCreateHandoffClick:t}=e,{t:n}=(0,W.I)(_);return(0,i.useMemo)(()=>tc({id:"showtime-add-takeover-button",text:n("frames.actions.shortcutAdd"),handler:t,icon:(0,r.jsx)(eH.IconArrowsClockwiseY,{})}),[t,n])},tp=(0,v._Y)("PresenterWindowService"),tm=(0,v._Y)("setPresenterNotesAvailability"),th=()=>{let{t:e}=(0,W.I)(_);return{action:(0,i.useMemo)(()=>tc({id:"showtime-open-presenter-notes",text:e("frames.actions.presenterNotes"),handler:async()=>{let e=(0,en.G)();await tm()(!0),tp().openPresenterWindow({actionType:"present-button",framesCount:e.getSortedPresentedFrames().length})},icon:(0,r.jsx)(eH.IconPresentationArrow,{})}),[e])}},tg=e=>{let{onFramesOrganize:t}=e,{t:n}=(0,W.I)(_);return(0,i.useMemo)(()=>tc({id:"showtime-frames-organize",testId:H.FRAME_ORGANIZE_BUTTON,text:n("frames.common.organizeFrames"),handler:t,icon:(0,r.jsx)(eH.IconArrowCurvesBottomRight,{})}),[n,t])},t_=e=>{let{viewMode:t,canEditFrames:n,onCreateHandoffClick:r,onFramesOrganize:a,onSetViewMode:o}=e,s=(0,tl.x)({onSetViewMode:o,viewMode:t}),l=tg({onFramesOrganize:a}),d=tu({onCreateHandoffClick:r}),{action:c}=th(),u=(0,td.R)("PRSNT-272-presenter-view")===ts.A.ON,p=rtb?.config.account.firstLogin,m=u&&!p;return(0,i.useMemo)(()=>{let e=[s];return n&&e.push(l),void 0!==r&&e.push(d),n&&m&&e.push(c),e},[s,n,r,l,m,c,d])},[tf,tE]=(0,n(843499).Tu)({defaultValue:{lastSelectedWidget:null}}),tv=e=>e?(0,en.G)().getFrameWidgetByToken(e)??null:null,tI=tE((e,t)=>({lastSelectedWidget:tv(t)})),tb=()=>(0,e6.KO)(tf).lastSelectedWidget,tx=e=>{let{canStartPresentation:t,onPresentationPlay:n,slidesMode:a=!1,...i}=e,o=t_(i),s=tb(),l=(0,r.jsx)($.g,{dataTestid:H.FRAMES_BULK_ACTIONS_CONTEXT_MENU_BUTTON}),d=t&&!a,c=!a,u=a&&i.canEditFrames,p=a&&i.canEditFrames;return(0,r.jsxs)(e1.p,{slidesMode:a&&i.canEditFrames,children:[d&&(0,r.jsx)(e2.F,{onStart:n}),u&&(0,r.jsx)(tn,{lastSelectedWidget:s}),p&&(0,r.jsx)(to,{}),c&&(0,r.jsx)(e4.E,{dataTestid:H.FRAMES_BULK_ACTIONS_CONTEXT_MENU,dropdownToggle:l,children:o.map(e=>(0,r.jsx)(e3.Z,{item:e},e.id))})]})};var tT,tS,tA,tw,ty,tN,tC=n(190138),tR=((ty={}).TOP_MENU="top_menu",ty.CONTEXT_MENU="context_menu",ty),tO=((tN=tO||{}).SELECT_ALL="select_all",tN.DESELECT_ALL="deselect_all",tN.DELETE="delete",tN.SHOW="show",tN.HIDE="hide",tN.MOVE_UP="move_up",tN.MOVE_DOWN="move_down",tN);let tM=e=>t=>{(0,er.o)().track("sidebar_bulk_action_clicked",{action_type:e.action,action_source:e.source,frames_selected:e.selectedFramesCount,frames_total_number:e.framesCount}),e.handler(t)},tk=e=>{let{source:t,framesCount:n,selectedFramesCount:a,allSelectedFramesVisible:o,allSelectedFramesHidden:s,canEditFrames:l,canHideFrames:d,bulkActions:c}=e,{t:u}=(0,W.I)(_),p=a>0,m=(0,T.js)(),h=(0,i.useMemo)(()=>({hidden:!p,disabled:!p,disabledTooltip:u("frames.common.youDontHavePermission"),countBadgeVisible:!0}),[p,u]),g=(0,i.useMemo)(()=>({...h,hidden:!d||!p||o,id:V.SHOW,text:u("frames.actions.show"),label:u("frames.aria.selected.show"),icon:(0,r.jsx)(eH.IconEyeOpen,{}),handler:tM({action:"show",handler:c.onShow,source:t,framesCount:n,selectedFramesCount:a})}),[h,p,o,c.onShow,t,n,a,d,u]),f=(0,i.useMemo)(()=>({...h,hidden:!d||!p||s,id:V.HIDE,text:u("frames.actions.hide"),label:u("frames.aria.selected.hide"),icon:(0,r.jsx)(eH.IconEyeClosed,{}),handler:tM({action:"hide",handler:c.onHide,source:t,framesCount:n,selectedFramesCount:a})}),[h,p,s,c.onHide,t,n,a,d,u]),E=(0,i.useMemo)(()=>({...h,id:V.DELETE,text:u("frames.common.delete"),label:u("frames.aria.selected.delete"),icon:(0,r.jsx)(eH.IconTrash,{}),handler:tM({action:"delete",handler:c.onDelete,source:t,framesCount:n,selectedFramesCount:a})}),[h,c.onDelete,t,n,a,u]),v=(0,i.useMemo)(()=>({...h,id:V.MOVE_UP,hidden:!p||m,text:u("frames.common.moveUp"),label:u("frames.aria.selected.moveUp"),icon:(0,r.jsx)(eH.IconArrowUp,{}),handler:tM({action:"move_up",handler:c.onMoveUp,source:t,framesCount:n,selectedFramesCount:a})}),[h,m,p,u,c.onMoveUp,t,n,a]),I=(0,i.useMemo)(()=>({...h,id:V.MOVE_DOWN,hidden:!p||m,text:u("frames.common.moveDown"),label:u("frames.aria.selected.moveDown"),icon:(0,r.jsx)(eH.IconArrowDown,{}),handler:tM({action:"move_down",handler:c.onMoveDown,source:t,framesCount:n,selectedFramesCount:a})}),[h,m,p,u,c.onMoveDown,t,n,a]);return l?[g,f,E,v,I]:[]};var tD=n(639455);let tP=()=>{let e=w();return{cantExportAsImageTooltip:e.getImageExportInfo().tooltip,cantExportAsCSVTooltip:e.getDisabledCSVTooltip()}},tj=e=>{let{t}=(0,W.I)(_),{cantExportAsCSVTooltip:n,cantExportAsImageTooltip:a}=tP(),i=t("frames.common.youDontHavePermission"),{canEditFrames:o,canHideFrames:s,canEditWidgets:l,frameIsLocked:d,frameIsHidden:c,canExportAsImage:u,canExportAsCSV:p,canExportBoardData:m}=e,h=(0,T.js)(),g=h&&c,f=(0,tD.V)({rename:{id:z.RENAME,hidden:!l||d||c||h,disabled:!o,disabledTooltip:t("frames.common.youDontHavePermission"),handler:()=>{}},delete:{id:z.DELETE,hidden:!l||d||c,disabled:!o,disabledTooltip:t("frames.common.youDontHavePermission"),handler:e.onDelete},addFrameBelow:{id:z.ADD_FRAME_BELOW,hidden:!l||g,disabled:!o,disabledTooltip:i,handler:e.onAddBelow}}),E={id:c?z.SHOW:z.HIDE,hidden:!l,disabled:!s,disabledTooltip:i,text:t(c?"frames.actions.show":"frames.actions.hide"),label:t(c?"frames.actions.show":"frames.actions.hide"),icon:c?(0,r.jsx)(eH.IconEyeOpen,{}):(0,r.jsx)(eH.IconEyeClosed,{}),handler:c?e.onShow:e.onHide,testId:c?H.FRAME_UNHIDE_BUTTON:H.FRAME_HIDE_BUTTON},v={id:z.EXPORT,hidden:!m||g,disabled:!o,disabledTooltip:i,icon:(0,r.jsx)(eH.IconExport,{}),text:t("frames.contextMenu.export.text"),handler:e.onMoveDown,subMenuItems:[{id:z.EXPORT_AS_IMAGE,hidden:!1,disabled:!u,disabledTooltip:a,icon:(0,r.jsx)(eH.IconImage,{}),text:t("frames.contextMenu.exportAsImage.text"),label:t("frames.contextMenu.exportAsImage.label"),handler:e.onExportAsImage},{id:z.EXPORT_TO_CSV,hidden:!1,disabled:!p,disabledTooltip:n,icon:(0,r.jsx)(eH.IconGridFour,{}),text:t("frames.contextMenu.exportAsCSV.text"),label:t("frames.contextMenu.exportAsCSV.label"),handler:e.onExportAsCSV}]},I={id:z.COPY_LINK,hidden:g,disabled:!1,disabledTooltip:"",icon:(0,r.jsx)(eH.IconLink,{}),text:t("frames.contextMenu.copyLink.text"),label:t("frames.contextMenu.copyLink.label"),handler:e.onCopyLink},b=[{id:z.MOVE_UP,hidden:!l||d||c||h,disabled:!o,disabledTooltip:i,icon:(0,r.jsx)(eH.IconArrowUp,{}),text:t("frames.contextMenu.moveUp.text"),label:t("frames.contextMenu.moveUp.label"),handler:e.onMoveUp},{id:z.MOVE_DOWN,hidden:!l||d||c||h,disabled:!o,disabledTooltip:i,icon:(0,r.jsx)(eH.IconArrowDown,{}),text:t("frames.contextMenu.moveDown.text"),label:t("frames.contextMenu.moveDown.label"),handler:e.onMoveDown}];return[f.rename,E,f.delete,f.addFrameBelow,I,...b,v]},tL=e=>{let{frameIsSelected:t,framesCount:n,selectedFramesCount:a,allSelectedFramesVisible:o,allSelectedFramesHidden:s,canEditFrames:l,canHideFrames:d,onRename:c,dropdownToggle:u,isContextMenuOpen:p,onOpen:m,onClose:h,bulkActions:g}=e,_=tj(e),f=tk({source:tR.CONTEXT_MENU,framesCount:n,selectedFramesCount:a,allSelectedFramesVisible:o,allSelectedFramesHidden:s,canEditFrames:l,canHideFrames:d,bulkActions:g}),E=t&&a>1?f:_,v=(0,i.useRef)(null),I=(e,t)=>{(0,tC.s)(t)||(v.current=t)};return E.length>0?(0,r.jsx)(e4.E,{dataTestid:H.FRAMES_BULK_ACTIONS_CONTEXT_MENU,isOpen:p,onOpen:m,onClose:h,dropdownToggle:u,onCloseAutoFocus:e=>{v.current?.id===z.RENAME&&(e.preventDefault(),c()),v.current=null},stopKeyDownPropagation:!0,children:E.map(e=>(0,r.jsx)(e3.Z,{item:e,selectedFramesCount:a,onClick:t=>I(t,e)},e.id))}):null};var tF=n(752060),tU=n(369696);let tB=e=>{let[t,n]=(0,i.useState)(void 0),r=(0,y._)(),a=(0,i.useCallback)(()=>{let t=r.getPreviewByToken(e.token);n(null!=t?{...t}:void 0)},[e.index,r]);return(0,i.useEffect)(()=>{a()},[]),(0,i.useEffect)(()=>{let t=r.framePreviewUpdated.add(t=>{t.token.toString()===e.token&&a()});return()=>{t.detach()}}),t};var tG=n(618774),tW=n.n(tG);let tH=e=>{let{frame:t,useClone:n=!1}=e,a=tB(t),i=a?.needGenerate??!0;return(0,r.jsx)("div",{className:tW().root,children:i?(0,r.jsx)(tU.x,{className:"loader"}):(0,r.jsx)(tF.t,{preview:a,className:tW().preview,useClone:n})})};var tV=n(639464),tz=n.n(tV);let tZ=(0,e$.zo)("div",{position:"relative",padding:"$200",border:"1px solid $border-focus-outer",borderRadius:"$100",backgroundColor:"$background-neutrals-page-subtle",margin:"$150 $300 $300 $300"}),tK=(0,e$.zo)("ol",{listStyleType:"none",counterReset:"get-started-list",display:"flex",flexDirection:"column",gap:"$100",paddingLeft:0,marginBottom:0}),tY=(0,e$.zo)("li",{"&:before":{display:"inline-block",counterIncrement:"get-started-list",content:"counter(get-started-list)",width:"1.25rem",height:"1.25rem",borderRadius:"50%",color:"$text-neutrals-inverted",backgroundColor:"$background-neutrals-inverted",alignItems:"center",justifyContent:"center",marginRight:"$100",textAlign:"center",fontWeight:650}}),tq=e=>{let{t}=(0,W.I)(f.a);return(0,r.jsxs)(tZ,{children:[(0,r.jsx)(R.h,{css:{position:"absolute",top:"$100",right:"$100"},size:"medium",onClick:(0,i.useCallback)(()=>{e.onClose()},[e]),children:(0,r.jsx)(eH.IconCross,{})}),(0,r.jsx)(eW.xv,{weight:"bold",children:t("showtime.getReadyToPresent.heading")}),(0,r.jsxs)(tK,{children:[(0,r.jsx)(tY,{children:t("showtime.getReadyToPresent.prepareContent")}),(0,r.jsx)(tY,{children:t("showtime.getReadyToPresent.dragFrames")}),(0,r.jsx)(tY,{children:t("showtime.getReadyToPresent.present")})]})]})},t$=e=>{var t;let{isShowtimeEnabled:n,userBoardRole:a,capabilities:o,presentationSessionId:s,framesByToken:l,showGetStartedList:d,onPresentationPlay:c,onCreateHandoffClick:u,onFrameCreate:p,onFramesOrganize:m,onCloseGetStartedList:h,isTimberlakeVisitor:g,showRequestTeamAccessDialog:_}=e,{frames:E,sortFrames:v,moveFrames:b}=(0,et.e)((0,en.G)(),(0,y._)(),l),x=(0,T.xX)(),S=(0,T.js)(),{t:A}=(0,W.I)(f.a),w=(0,i.useRef)(null),{handleRenameEnd:N}=ea(),C=eT(),R=ev(),O=eb(),M=eI(),k=ex(),D=ed(),P=ec(),j=eS(),L=tP(),{viewMode:F,setViewMode:U}=(0,K.F)({localStorage:eO(),storageKey:I.lf,onListViewModeChange:e=>{(0,er.o)().track("frame_list_view_changed",{type:e})}}),{shouldUseSmallPreview:B}=(t=(0,i.useMemo)(()=>E.filter(e=>e.slideContainerId===x?.tokenizer.token.toString()),[x?.tokenizer.token,E]),(0,i.useMemo)(()=>{let e=new Map;t.forEach(t=>{t.laneId&&(e.has(t.laneId)||e.set(t.laneId,{id:t.laneId,frames:[],hasHeader:!1}),e.get(t.laneId)?.frames.push({token:t.token,index:t.index,isHeader:!1}))}),e.size>1&&e.forEach((t,n)=>{let r=[...t.frames].sort((e,t)=>e.index-t.index),a=r.length>1,i=r.map((e,t)=>({...e,isHeader:a&&0===t}));e.set(n,{...t,frames:i,hasHeader:a})});let n=t=>{for(let n of e.values())if(n.frames.some(e=>e.token===t))return n},r=e=>{let t=n(e);return t?.frames.find(t=>t.token===e)};return{laneMap:e,getLaneForFrame:n,getFrameInfo:r,shouldUseSmallPreview:e=>{let t=r(e);if(!t)return!1;let a=n(e);return!!a&&!!a.hasHeader&&!t.isHeader}}},[t])),{selectedTokens:G,toggleFrameSelection:V,deselectFrame:z,deselectAllFrames:Z,isItemSelected:ei}=eN(E,a,s),eo=G.at(-1),es=(0,e6.YZ)(tI);(0,i.useEffect)(()=>{es(eo)},[eo,es]);let el=(0,i.useMemo)(()=>G.map(e=>E.find(t=>t.token===e)).filter(Y.$),[E,G]),eu=eC(Z);if(eR(),0===E.length)return(0,r.jsx)("div",{className:tz().empty,children:g?(0,r.jsx)(e0,{showRequestTeamAccessDialog:_}):(0,r.jsx)(eq,{canEditFrames:o.canEditFrames,onFrameCreate:p})});let ep=!o.isTouchSupportedAndNotDesktop,em=E.every(e=>!e.contentHidden),eh=E.every(e=>e.contentHidden),eg={onDelete:()=>{eu(el)},onHide:()=>{D(o,el,!0,"frame_list_bulk")},onShow:()=>{D(o,el,!1,"frame_list_bulk")},onMoveUp:()=>{b(el,q.u.UP)},onMoveDown:()=>{b(el,q.u.DOWN)}},e_=(e,t)=>(0,r.jsx)(tL,{frameIsLocked:P(e.token),frameIsHidden:e.contentHidden,frameIsSelected:t.isSelected,framesCount:t.listContext.props.frames.length,selectedFramesCount:t.listContext.selectedTokens.length,allSelectedFramesVisible:em,allSelectedFramesHidden:eh,canEditWidgets:o.canEditWidgets,canLockWidgets:o.canLockWidgets,canEditFrames:o.canEditFrames,canHideFrames:o.canHideFrames,canExportAsImage:o.canExportAsImage,cantExportAsImageTooltip:L.cantExportAsImageTooltip,canExportAsCSV:o.canExportAsCSV,cantExportAsCSVTooltip:L.cantExportAsCSVTooltip,canExportBoardData:o.canExportBoardData,onRename:()=>{P(e.token)||t.onRenameStart?.()},onExportAsImage:()=>M(e),onExportAsCSV:()=>O(e),onAddBelow:()=>R(e,w.current?.startRenaming),onCopyLink:()=>k(e),onDelete:()=>{C([e]),z(e.token),requestAnimationFrame(()=>{w.current?.focusItem(Math.min(e.index,t.listContext.props.frames.length-2))})},onMoveUp:()=>{b([e],q.u.UP)},onMoveDown:()=>{b([e],q.u.DOWN)},onShow:()=>D(o,[e],!1,"frame_list"),onHide:()=>{D(o,[e],!0,"frame_list"),requestAnimationFrame(()=>{w.current?.focusItem(e.index)})},dropdownToggle:(0,r.jsx)($.g,{ariaLabel:A("showtime.framesListItem.a11y.moreActions",{title:e.name||A("showtime.framesListItem.untitled")}),dataTestid:H.FRAME_ACTIONS_BUTTON,onClick:e=>e.stopPropagation()}),isContextMenuOpen:j.frameId===e.token,onOpen:()=>j.open(e.token),onClose:()=>j.close(),bulkActions:eg});return(0,r.jsxs)("div",{className:tz().container,id:"frames-tab-content",children:[d&&(0,r.jsx)(tq,{onClose:h}),(0,r.jsx)(tx,{canEditFrames:o.canEditFrames,canStartPresentation:o.canStartPresentation,onCreateHandoffClick:u,onPresentationPlay:c,viewMode:F,slidesMode:S,onSetViewMode:U,onFramesOrganize:m}),(0,r.jsx)(J.L,{ref:w,frames:E,selectedTokens:G,rootAutotestId:H.FRAMES_LIST,dragOverlayAutotestId:H.FRAME_DRAG_OVERLAY,isEditable:o.canEditFrames&&!(S&&x?.isMultiLane),renderListItem:(e,t)=>(0,r.jsx)(X.x,{frameId:e.token,frameIndex:S?t.index:t.sidebarIndex,sectionLastFrameIndex:S?void 0:t.sectionLastFrameIndex,frameName:e.name,framesCount:t.listContext.props.frames.length,shouldUseSmallPreview:B,isHidden:e.contentHidden,showThumbnail:S||t.listContext.viewMode===Q.V.THUMBNAIL,menuSlot:!t.isDragOverlay&&ep&&e_(e,t),isRenaming:t.isRenaming,isSelected:t.isSelected,showSection:!S&&e.childState===ee.M.FirstChild,selectedFramesCount:el.length,isContextMenuOpened:j.frameId===e.token,isDragOverlay:t.isDragOverlay,draggedFramesCount:t.listContext.draggedIndices.length,renderFramePreview:()=>(0,r.jsx)(tH,{frame:e,useClone:t.isDragOverlay}),canEditFrameName:o.canEditFrames,onClick:n=>{n.stopPropagation();let r=n.metaKey||n.ctrlKey,a=n.shiftKey;V({frameToken:e.token,index:t.sidebarIndex,rangeSelection:a,addToSelection:r,jumpToFrame:!0})},onContentHiddenToggle:t=>{D(o,[e],t,"frame_list")},onRenameStart:()=>{P(e.token)||t.onRenameStart?.()},onRenameEnd:n=>{n!==e.name&&N(e,n),t.onRenameEnd?.()},onContextMenu:()=>j.open(e.token),onArrowKeyNavigation:t.onArrowKeyNavigation}),viewMode:F,onAdd:p,onRemove:e=>C(e.map(e=>E.find(t=>t.token===e)).filter(Y.$)),onOrderChange:v,toggleFrameSelection:V,isItemSelected:ei,isScrollPersistedWhenReopen:!S,renderFooter:n&&!S,addItemAutotestId:H.FRAME_CREATE_BUTTON}),g&&(0,r.jsx)(e0,{showRequestTeamAccessDialog:_,isFooter:!0})]})};var tJ=n(959225),tX=n(730050);let tQ=()=>(0,i.useCallback)(()=>{let e=(0,en.G)(),t=e.getFrames(),n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.sort((e,n)=>{let r=e.scaledHeight>n.scaledHeight,a=Math.max(e.scaledHeight,n.scaledHeight)*(t/100),i=(r?e.y:n.y)-a,o=(r?e.y+e.scaledHeight:n.y+n.scaledHeight)+a;return r&&n.y>=i&&n.y+n.scaledHeight<=o||!r&&e.y>=i&&e.y+e.scaledHeight<=o?e.x-n.x:e.y-n.y})}([...t.map(t=>e.getFrameWidgetByIndex(t.index)).filter(e=>void 0!==e)],25);(0,y._)().setFrameWidgetsOrder(n),(0,er.o)().track("frames_organize_clicked",{frames_total_number:t.length})},[]);var t0=n(949738);let t1=()=>{let e=(0,en.G)(),{getState:t}=ek(),n=(e,n)=>{let r=(0,t0.GH)(t(),ej.Y.NAVIGATION_BAR_TOGGLE_BUTTON);(0,er.o)().track("frame_list_clicked",{value:e,items_total_number:n,source:"default",is_onboarding_shown:r})},r=()=>e.framesList.framesCount;(0,i.useEffect)(()=>(n("opened",r()),()=>{n("closed",r())}),[])};var t2=n(60090),t4=n(609198);let t3=e=>{let{initialShowGetStartedList:t,onShowGetStartedListChange:n}=e,[r,a]=(0,i.useState)(t),{getState:o,dispatch:s}=e.appStoreService??ek(),l=(0,i.useCallback)(e=>{n(e),a(e)},[n]);return(0,i.useEffect)(()=>{let t=o();(e.isUITipActive??t0.GH)(t,ej.Y.NAVIGATION_BAR_TOGGLE_BUTTON)&&(l(!0),s((0,t2.JX)({id:ej.Y.NAVIGATION_BAR_TOGGLE_BUTTON,byUser:!0,source:t4.I.OUTSIDE})))},[l]),{showGetStartedList:r,handleCloseGetStartedList:(0,i.useCallback)(()=>{l(!1)},[l])}},t6=e=>{let{userBoardRole:t,presentationSessionId:n,isShowtimeEnabled:a,canHideFrames:i,onPresentationPlay:o,onCreateHandoffClick:s,onShowGetStartedListChange:l,initialShowGetStartedList:d,isTimberlakeVisitor:c,showRequestTeamAccessDialog:u}=e,p=(0,tJ.V)((0,en.G)(),(0,y._)()),m=N({canHideFrames:i,isTimberlakeVisitor:c}),h=(0,tX.q)({focusCanvas:!a}),g=tQ();t1();let{showGetStartedList:_,handleCloseGetStartedList:f}=t3({initialShowGetStartedList:d,onShowGetStartedListChange:l});return(0,r.jsxs)(r.Fragment,{children:[!a&&(0,r.jsx)(Z,{hasFrames:p.size>0,canEditFrames:m.canEditFrames,onFrameCreate:h,onFramesOrganize:g}),(0,r.jsx)(t$,{framesByToken:p,isShowtimeEnabled:a,userBoardRole:t,capabilities:m,presentationSessionId:n,onPresentationPlay:o,onCreateHandoffClick:s,onFrameCreate:h,onFramesOrganize:g,showGetStartedList:_,onCloseGetStartedList:f,isTimberlakeVisitor:c,showRequestTeamAccessDialog:u})]})};var t5=n(327964),t9=n(758429),t7=n(914121),t8=n(319779),ne=n(67423),nt=n(434451),nn=n(671054),nr=n(323239),na=n(178238),ni=n(33081),no=n(48528),ns=n(255754),nl=n(186173),nd=n(263547),nc=n(344373),nu=n(99382),np=n(862299),nm=n(606218),nh=n(130837),ng=n(747278),n_=n(424063),nf=n(549029),nE=n(579188),nv=n(695175),nI=n(151643),nb=n(961274),nx=n(840706),nT=n(782592),nS=n(123024),nA=n(86318);class nw{saveAsImage(e,t,n){return(0,nc.K)(()=>(0,nf.Z)()).then(r=>r.saveAsImage(e,t,n))}saveFrameAsCSV(e,t){return(0,nf.Z)().then(n=>{n.saveFrameAsCSV(e,t)})}}(0,v.Zf)({AppStoreService:()=>(0,nb.bh)(),BoardExportService:()=>new nw,BoardService:t9.ZP,CanvasFocus:ng.ZP,ClipboardService:()=>({copyToClipboardOrShowPrompt:nE.bj}),FramesService:nh.G5,FrameWidgetService:nx.getInjectionPoint(nT.F),LocalStorage:()=>nm,CanvasSelectionAPI:()=>(0,np.Q)().get(nd.F),MiroStat:nu.Z,Transactions:()=>(0,n_.u)().transactions,CanvasUtils:()=>({getLinkToWidget:nv.getLinkToWidget}),ExportHelpers:()=>nI,PresenterWindowService:nS.j,setPresenterNotesAvailability:()=>nA.Ee});let ny=!1,nN=null,nC=!1,nR=()=>{let[e,t]=(0,i.useState)((0,t8.BZ)()),n=ne.u.getInfo().currentUserContext.role,o=(0,ns.d)(),[s,l]=(0,i.useState)(ny);(0,i.useEffect)(()=>{s||(ny?Promise.resolve():nN||(nN=(0,t5.U)(_,f.a).then(()=>{ny=!0}))).then(()=>{l(!0)}).catch(e=>{throw(0,a.KC)(e)})},[s]);let d=(0,i.useCallback)(async()=>{try{let{result:e,sessionId:n}=await (0,t7.ZP)().togglePresentation({sessionType:E.JM.STRUCTURED,source:nr.T6.FRAMES_SIDEBAR});e&&n&&nn.o.modeClicked(I.TY.FRAMES_SIDEBAR),t(n)}catch(e){throw(0,a.KC)(e)}},[]),c=(0,i.useCallback)(()=>{(0,no.Z)().then(e=>{e.getShowtimePublicActions().createHandoffButton()}).catch(e=>{throw(0,a.KC)(e)})},[]);if(!s)return null;let u=na.Ao.ui.hasHidingFramesFeature()&&(0,t9.ZP)().currentBoard.hasPermission(b.J.HIDE_FRAME);return(0,r.jsx)(t6,{userBoardRole:n,presentationSessionId:e,onPresentationPlay:d,onCreateHandoffClick:(0,ni.B)()&&(0,nt.NP)()?c:void 0,isShowtimeEnabled:(0,nt.fk)(),canHideFrames:u,onShowGetStartedListChange:e=>{nC=e},initialShowGetStartedList:nC,showRequestTeamAccessDialog:()=>{(0,nl.CH)(ne.u.getInfo(),"frames_sidebar")},isTimberlakeVisitor:o})}},55624:function(e,t,n){"use strict";n.d(t,{B$:()=>R,Pz:()=>M,jo:()=>O});var r=n(552322),a=n(202784);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var o=(0,a.forwardRef)(function(e,t){return a.createElement("svg",i({width:"1em",height:"1em",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),x||(x=a.createElement("path",{d:"M9 8.5a2 2 0 1 1 2 2 1 1 0 0 0-1 1v1a1 1 0 1 0 2 0V12c1.725-.444 3-1.636 3-3.5a4 4 0 0 0-8 0 1 1 0 1 0 2 0ZM11 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",fill:"currentColor"})),T||(T=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 11c0 6.075-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0s11 4.925 11 11Zm-2 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",fill:"currentColor"})))}),s=n(634318),l=n(48096),d=n(72779),c=n.n(d),u=n(187714),p=n(633295),m=n(497752),h=n(123706),g=n(819545),_=n(99382),f=n(389958),E=n(867447);let v={appear:"miro-lite-help__menu-animated--start",appearActive:"miro-lite-help__menu-animated--start",appearDone:"miro-lite-help__menu-animated--start",enter:"miro-lite-help__menu-animated--start",enterActive:"miro-lite-help__menu-animated--finish",enterDone:"miro-lite-help__menu-animated--finish",exit:"miro-lite-help__menu-animated--start",exitActive:"miro-lite-help__menu-animated--start",exitDone:"miro-lite-help__menu-animated--start"},I={appear:0,enter:0,exit:150},b="miro-lite-help__button";n(476948);var x,T,S,A=n(403460),w=n(597925),y=n(735308),N=n(333861),C=((S=C||{}).Menu="Menu",S);let R={en:"https://miro.com/flowchart-maker/",es:"https://miro.com/es/diagrama-de-flujo/",de:"https://miro.com/de/flussdiagramm/",fr:"https://miro.com/fr/diagramme-de-flux/",ja_JP:"https://miro.com/ja/flowchart/",pt_BR:"https://miro.com/pt/fluxograma/"},O={en:"https://miro.com/diagramming/",es:"https://miro.com/es/diagrama/",de:"https://miro.com/de/diagramm/",fr:"https://miro.com/fr/diagramme/",ja_JP:"https://miro.com/ja/diagramming/",pt_BR:"https://miro.com/pt/diagrama/"},M=()=>{let[e,t]=(0,a.useState)(null),n=(0,a.useRef)(null),i=w.Z.getCurrentLang().key,d=(0,a.useCallback)(()=>((0,_.Z)().track("explore_miro_from_mirolite_clicked",{}),(0,A.dh)())?N.h7.tabletApp?y.getOpener().openInNewTab("https://miro.com"):m.i.sendMessageToParent((0,h.pJ)(),"*"):(0,A.Rc)()?g.getOpener(R[i]).openInNewTab():(0,A.gr)()?g.getOpener(O[i]).openInNewTab():g.getOpener("https://webwhiteboard.com/home").openInNewTab(),[]);return(0,r.jsx)(u.l,{onTapOut:(0,a.useCallback)(()=>t(null),[]),children:(0,r.jsxs)("div",{className:"miro-lite-help__anchor",ref:n,children:[(0,r.jsx)(l.K.Button,{hmTap:n=>{(0,_.Z)().track("mirolite_helpcenter_clicked",{}),(0,E.ZP)().setDefaultTool(),n.target?.classList?.contains(b)&&t("Menu"===e?null:"Menu")},className:c()(b,"svg-button",{"svg-button--active":null!==e}),children:(0,r.jsx)(f.l,{children:(0,r.jsx)(o,{})})}),(0,r.jsx)(s.Z,{in:"Menu"===e,timeout:I,appear:!0,classNames:v,mountOnEnter:!0,unmountOnExit:!0,children:(0,r.jsx)(p.L,{helpCenterMenuClass:"miro-lite-help__menu miro-lite-help__menu-animated",onLearnMoreClick:d,onFaqClick:()=>{t(null),(0,_.Z)().track("mirolite_faq_clicked",{}),m.i.sendMessageToParent((0,h.qV)(),"*")}})})]})})}},205892:function(e,t,n){"use strict";n.d(t,{z:()=>h});var r=n(552322),a=n(202784),i=n(192769),o=n(733384),s=n(598962),l=n.n(s),d=n(501446),c=n(72779),u=n.n(c),p=n(892447);let m=a.forwardRef((e,t)=>{let{isLayoutVisible:n}=(0,d.lm)(),[a]=(0,d.eP)(),i=a===p.ic.OFFLINE;return(0,r.jsx)("div",{ref:t,className:u()(l().showtimeNotificationContainer,{[l().visible]:e.visible,[l().hiddenLayout]:i||!n})})}),h=a.memo(function(){let e=(0,a.useRef)(null),[t,n]=(0,a.useState)(!1),s=(0,a.useCallback)(e=>{n(e)},[n]);return(0,a.useEffect)(()=>{let t=(0,i.ZP)().getNotificationPositionOptions(),n=(0,i.ZP)().getNotificationOptions(),r=e.current;if(r)return(0,i.ZP)().setNotificationPositionOptions({position:t.position,container:r}),(0,i.ZP)().setNotificationOptions({animation:o.dT.NONE}),()=>{(0,i.ZP)().setNotificationPositionOptions(t),(0,i.ZP)().setNotificationOptions(n)}},[]),(0,a.useEffect)(()=>((0,i.ZP)().addNotificationVisibleChangedListener(s),()=>{(0,i.ZP)().removeNotificationVisibleChangedListener(s)}),[s]),(0,r.jsx)(m,{ref:e,visible:t})})},405794:function(e,t,n){"use strict";n.d(t,{a:()=>e_});var r=n(552322),a=n(202784),i=n(774418),o=n(97438),s=n(824654),l=n(928316),d=n(323239),c=n(433723),u=n(337525),p=n(337431),m=n(746722),h=n(148395),g=n(44466);let _=(e,t)=>({current:e,next:Math.min(e+1,t),previous:Math.max(e-1,1),total:t});var f=n(752060);let E=(e,t)=>{let[,n]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(!e||!t)return()=>{};let r=e=>{0===e.id.compare(t)&&n(e=>!e)};return e.add(r),()=>{e.remove(r)}},[e,t])},v={width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"var(--colors-icon-primary)",color:"var(--colors-white)",position:"absolute",top:"50%",left:"50%",translate:"-50% -50%",display:"flex",alignItems:"center",justifyContent:"center"},I=e=>{let[t,n]=(0,a.useState)(!1),[i,o]=(0,a.useState)(!1),{framePreview:s,"data-testid":l,hoverIcon:d,label:c,ariaLabel:u,onClick:p,framePreviewUpdated:m,frameId:h}=e;E(m,h);let g=!!p,_=t||i,I={position:"relative",border:`var(--border-widths-sm) solid ${t||i?"var(--colors-border-primary)":"var(--colors-gray-300)"}`,borderRadius:"var(--radii-50)",padding:0,overflow:"hidden",boxShadow:i?"inset 0 0 0 1px #d9e0ff, 0 0 0 1px #455bed, 0 0 0 5px #d9e0ff":void 0},b=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{filter:_?"brightness(0.8)":void 0},children:(0,r.jsx)(f.t,{preview:s,useClone:!0,lazilyGenerate:!0})}),_&&d&&(0,r.jsx)("div",{style:v,children:d})]}),x={style:I,title:c,"aria-label":u,"data-testid":l};return g?(0,r.jsx)("button",{type:"button",onClick:p,...x,onMouseEnter(){n(!0)},onMouseLeave(){n(!1),o(!1)},onFocus(){o(!0)},onBlur(){o(!1)},children:b}):(0,r.jsx)("div",{...x,children:b})},b={frameNumber:"presenter-window__frame-number",currentFrame:"presenter-window__current-frame",nextFrame:"presenter-window__next-frame",previousFrame:"presenter-window__previous-frame",speakerNotes:"presenter-window__speaker-notes"},x=(0,c.zo)("div",{display:"grid",rowGap:"$150",columnGap:"$300",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"auto 1fr",gridTemplateAreas:`
        "currentFrame   currentFrame"
        "previousFrame  nextFrame"
    `}),T=(0,c.zo)("div",{paddingTop:"$300",paddingBottom:"$50"}),S=(0,c.zo)("div",{gridArea:"currentFrame"}),A=(0,c.zo)("div",{gridArea:"previousFrame"}),w=(0,c.zo)("div",{gridArea:"nextFrame",justifySelf:"end"}),y=[m.mW.ArrowLeft,m.mW.ArrowRight],N=[m.mW.ArrowRight,m.mW.ArrowDown,m.mW.PageDown],C=[m.mW.ArrowLeft,m.mW.ArrowUp,m.mW.PageUp],R=e=>{let{event:t,keys:n,primaryKey:r=!1}=e,a=n.some(e=>t.keyCode===e);if(!r)return a;let i=(0,h.mT)(t)?t.metaKey:t.ctrlKey;return a&&i},O=e=>{let{window:t,injections:n}=e,{t:i}=(0,u.I)(g.u),{onNext:o,onPrevious:s,currentFramePosition:l,totalItems:d,currentFrame:c,nextFrame:m,prevFrame:h,framePreviewUpdated:f}=n,{current:E,previous:v,total:O,next:M}=_(l,d),k=(0,a.useCallback)(()=>{o()},[o]),D=(0,a.useCallback)(()=>{s()},[s]);return(0,a.useEffect)(()=>{let e=e=>{if(R({event:e,keys:y,primaryKey:!0})){e.preventDefault();return}R({event:e,keys:C})?D():R({event:e,keys:N})&&k()};return t.addEventListener("keydown",e),()=>{t.removeEventListener("keydown",e)}},[k,D,t]),(0,r.jsxs)(x,{children:[(0,r.jsx)(w,{children:m.id&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T,{children:i("presenterWindow.controls.nextFrame")}),(0,r.jsx)(I,{"data-testid":b.nextFrame,framePreview:m.preview,hoverIcon:(0,r.jsx)(p.IconArrowRight,{}),label:i("presenterWindow.controls.nextFrame"),ariaLabel:i("presenterWindow.controls.a11y.nextFrame",{frameNumber:M,total:O}),onClick:k,frameId:m.id,framePreviewUpdated:f})]})}),(0,r.jsx)(A,{children:h.id&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T,{children:i("presenterWindow.controls.prevFrame")}),(0,r.jsx)(I,{"data-testid":b.previousFrame,framePreview:h.preview,hoverIcon:(0,r.jsx)(p.IconArrowLeft,{}),label:i("presenterWindow.controls.prevFrame"),ariaLabel:i("presenterWindow.controls.a11y.prevFrame",{frameNumber:v,total:O}),onClick:D,frameId:h.id,framePreviewUpdated:f})]})}),(0,r.jsx)(S,{children:(0,r.jsx)(I,{"data-testid":b.currentFrame,framePreview:c.preview,label:i("presenterWindow.controls.currentFrame"),ariaLabel:i("presenterWindow.controls.a11y.currentFrame",{frameNumber:E,total:O}),frameId:c.id,framePreviewUpdated:f})})]})},M=e=>{let{current:t,total:n}=e,{t:a}=(0,u.I)(g.u);return(0,r.jsx)("span",{"data-testid":b.frameNumber,children:a("presenterWindow.controls.frameNavigation",{current:t,total:n})})};var k=n(184159);let D=e=>e===k.K.LOCKED,P=e=>{let[t,n]=(0,a.useState)(()=>{let t=e.getState();return!!t&&D(t)}),r=(0,a.useRef)(),i=(0,a.useCallback)(e=>{n(D(e.getState()))},[]);return(0,a.useEffect)(()=>{r.current&&r.current.remove(i);let t=e.getStateChanged();t?.add(i),r.current=t;let a=e.getState();return void 0!==a&&n(D(a)),()=>{r.current?.remove(i)}},[e,i]),t};var j=n(276635),L=n(278861);let F=(e,t)=>t(L.d.fromString(e))??"",U=(0,j.debounce)((e,t,n)=>{n(L.d.fromString(e),t)},800),B=(e,t,n)=>{let[r,i]=(0,a.useState)(""),o=n?.toString();return(0,a.useEffect)(()=>(o&&i(F(o,e)),()=>{U.flush()}),[o,e]),{speakerNotes:r,setSpeakerNotes:(0,a.useCallback)(e=>{o&&(i(e),U(o,e,t))},[o,t])}},G=(0,c.zo)("div",{display:"flex",flexDirection:"column",width:"100%",justifyItems:"center",gap:"$300"}),W=(0,c.zo)("textarea",{flexGrow:1,width:"100%",height:"100%",resize:"none",border:"var(--border-widths-sm) solid transparent",borderRadius:"$50",boxShadow:"$50",padding:"$300","&:focus":{borderColor:"var(--colors-border-primary)",boxShadow:"inset 0 0 0 1px $colors$blue-200, 0 0 0 1px $colors$blue-550, 0 0 0 5px $colors$blue-200"}}),H=(0,c.zo)("div",{textAlign:"center"}),V=(0,c.zo)("div",{display:"inline-block",minHeight:"48px",padding:"$150 $300",color:"$text-neutrals-inverted",boxSizing:"border-box",pointerEvents:"none",borderRadius:"$50",backgroundColor:"$background-neutrals-inverted"}),z=e=>{let{saveSpeakerNote:t,getSpeakerNote:n,frameInfo:i,lockSpeakerNote:o,unlockSpeakerNote:s,onRendered:l}=e,{speakerNotes:d,setSpeakerNotes:c}=B(n,t,i.id),{t:p}=(0,u.I)(g.u),m=P(i);(0,a.useEffect)(()=>{m&&l("FrameLockedMessage")},[m,l]);let h=(0,a.useCallback)(e=>{c(e.target.value)},[c]);return(0,r.jsxs)(G,{children:[(0,r.jsx)(W,{disabled:m,maxLength:1e4,"data-testid":b.speakerNotes,onChange:h,onKeyDown:e=>{e.stopPropagation(),"Escape"===e.key&&e.currentTarget.blur()},value:d,"aria-label":p("presenterWindow.speakerNotes.label"),placeholder:p("presenterWindow.speakerNotes.placeholder"),onFocus(){i.id&&o(i.id)},onBlur(){i.id&&s(i.id)}}),m&&(0,r.jsx)(H,{children:(0,r.jsx)(V,{children:p("presenterWindow.speakerNotes.frameBeingEdited")})})]})},Z=e=>{let t=e.document.querySelector("style");return t||(t=e.document.createElement("style"),e.document.head.appendChild(t)),t},K=(e,t)=>{let n="";for(let e of t.document.styleSheets)try{for(let t of e.cssRules)n+=t.cssText}catch{}Z(e).innerHTML=n},Y=(e,t)=>{let n=(0,a.useRef)(new Set);return{onRendered:(0,a.useCallback)(r=>{n.current.has(r)||(K(e,t),n.current.add(r))},[e,t])}},q=(0,c.zo)("div",{boxSizing:"border-box",height:"100vh",minWidth:"640px",minHeight:"360px",display:"grid",columnGap:"$300",rowGap:"$100",gridTemplateColumns:"min(40%, 375px) 1fr",gridTemplateRows:"auto 1fr",gridTemplateAreas:`
		"frameNumber      frameNumber"
		"frameNavigation  speakerNotes"
	`,padding:"$300"}),$=(0,c.zo)("div",{gridArea:"frameNumber"}),J=(0,c.zo)("div",{gridArea:"frameNavigation"}),X=(0,c.zo)("div",{gridArea:"speakerNotes",display:"flex"}),Q=e=>{let{window:t,originWindow:n,injections:i,dataTestid:o}=e,{t:s}=(0,u.I)(g.u),{onRendered:l}=Y(t,n);return(0,a.useEffect)(()=>{t.document.title=s("presenterWindow.title")},[s,t]),(0,a.useEffect)(()=>{l("PresenterWindow")},[l]),(0,r.jsxs)(q,{"data-testid":o,children:[(0,r.jsx)($,{children:(0,r.jsx)(M,{current:i.currentFramePosition,total:i.totalItems})}),(0,r.jsx)(J,{"data-testid":"presenter-notes-navigation",children:(0,r.jsx)(O,{window:t,injections:i})}),(0,r.jsx)(X,{children:(0,r.jsx)(z,{onRendered:l,frameInfo:i.currentFrame,saveSpeakerNote:i.saveSpeakerNote,getSpeakerNote:i.getSpeakerNote,lockSpeakerNote:i.lockSpeakerNote,unlockSpeakerNote:i.unlockSpeakerNote})})]})};var ee=n(172458),et=n(679001),en=n(349452),er=n(967178),ea=n(322584),ei=n(856472),eo=n(6148);let es=()=>{let e=(0,i.I0)();(0,a.useEffect)(()=>{e((0,eo.ZC)(!1))},[e])},el=()=>{let e=(0,i.I0)();es(),(0,a.useEffect)(()=>{let t=(0,ea.XZ)().contentHiddenChanged.add(t=>{e((0,eo.QE)(t.tokenizer.id))});return()=>{t.detach()}},[e])},ed=e=>{let{window:t}=e,n=(0,ea.w0)(),a=(0,i.I0)(),s=(0,ei.p)(),c=i.v9(o.gC)?.sessionId,u=(0,i.v9)(en.vO),p=(0,i.v9)(en.ll),m=(0,i.v9)(ee.g4),h=(0,i.v9)(e=>(0,er.VS)(e,m?.widgetId)),g=(0,i.v9)(e=>(0,en.ly)(e,s)),_=(0,i.v9)(e=>(0,er.VS)(e,g?.widgetId)),f=(0,i.v9)(e=>(0,en.r3)(e,s)),E=(0,i.v9)(e=>(0,er.VS)(e,f?.widgetId));el();let v=e=>{if(e)return n.getFrameById(e)?.getState()},I=e=>{if(e)return n.getFrameById(e)?.stateChanged},b={onNext:()=>{a((0,et.lp)(d.T6.PRESENTER_WINDOW))},onPrevious:()=>{a((0,et.Xp)(d.T6.PRESENTER_WINDOW))},currentFramePosition:u??0,totalItems:p,currentFrame:{id:m?.widgetId,preview:h,getState:()=>v(m?.widgetId),getStateChanged:()=>I(m?.widgetId)},nextFrame:{id:g?.widgetId,preview:_,getState:()=>v(g?.widgetId),getStateChanged:()=>I(g?.widgetId)},prevFrame:{id:f?.widgetId,preview:E,getState:()=>v(f?.widgetId),getStateChanged:()=>I(f?.widgetId)},saveSpeakerNote:(e,t)=>{(0,ea.XZ)().saveSpeakerNote(e,t,{item_order_number:u??0,text_len:t.length,action_source:"presenter-window",showtime_session_id:c})},getSpeakerNote:e=>(0,ea.XZ)().getSpeakerNote(e),lockSpeakerNote:e=>{(0,ea.XZ)().lockFrame(e)},unlockSpeakerNote:e=>{(0,ea.XZ)().unlockFrame(e)}};return(0,r.jsx)(r.Fragment,{children:t&&(0,l.createPortal)((0,r.jsx)(Q,{dataTestid:"showtime-presenter-notes",window:t,originWindow:window,injections:b}),t.document.body)})};var ec=n(825568),eu=n(362900);let ep=e=>{let t=e.getSelectedFrameIndex();return t>0?t:0},em=e=>{let[t,n]=(0,a.useState)(ep(e));return(0,a.useEffect)(()=>{let r=()=>{n(Math.min(t,e.getFrames().length-1))};return e.framesUpdated.add(r),e.selectedFrameChanged.add(()=>{let t=e.getSelectedFrameIndex();t>0&&n(t)}),()=>{e.framesUpdated.remove(r)}}),{selectedFrameIndex:t,setSelectedFrameIndex:n}},eh=e=>{let{window:t}=e,n=(0,ec._)(),i=(0,eu.G)(),o=i.getSortedPresentedFrames().length;(0,a.useEffect)(()=>{0===o&&t.close()},[o,t]);let{selectedFrameIndex:s,setSelectedFrameIndex:d}=em(i),c=e=>({id:i.getFrameWidgetByIndex(e)?.tokenizer.id,preview:n.getPreviewByIndex(e),getState:()=>i.getFrameWidgetByIndex(e)?.getState(),getStateChanged:()=>i.getFrameWidgetByIndex(e)?.stateChanged}),u=e=>{e<0||e>=i.getSortedPresentedFrames().length||(n.jumpToFrame(e,!0),(0,eu.G)().selectFrame(e,!1),d(e))},p={onNext:()=>{u(s+1)},onPrevious:()=>{u(s-1)},currentFramePosition:s+1,totalItems:o,currentFrame:c(s),nextFrame:c(s+1),prevFrame:c(s-1),saveSpeakerNote:(e,t)=>{n.saveSpeakerNote(e,t,{item_order_number:s+1,text_len:t.length,action_source:"presenter-window"})},getSpeakerNote:e=>n.getSpeakerNote(e),lockSpeakerNote:e=>{n.lockFrame(e)},unlockSpeakerNote:e=>{n.unlockFrame(e)},framePreviewUpdated:n.framePreviewUpdated};return(0,r.jsx)(r.Fragment,{children:t&&(0,l.createPortal)((0,r.jsx)(Q,{dataTestid:"board-presenter-notes",window:t,originWindow:window,injections:p}),t.document.body)})};var eg=n(123024);let e_=()=>{let e=(0,i.v9)(o.d1),t=(0,i.v9)(o.gC),n=t?.sessionType===s.JM.AD_HOC,[l,d]=(0,a.useState)(null),c=(0,eg.j)();return((0,a.useEffect)(()=>(c.windowChange.add(d),()=>{c.windowChange.add(d)}),[c]),l)?e&&!n?(0,r.jsx)(ed,{window:l}):(0,r.jsx)(eh,{window:l}):null}},86318:function(e,t,n){"use strict";let r;n.d(t,{bF:()=>o$,Iw:()=>oQ,rt:()=>o2,Ee:()=>o4,Dj:()=>o0,fq:()=>oJ,vM:()=>oq,V:()=>oX,s1:()=>o3,Dy:()=>o1});var a,i,o,s,l,d,c,u,p,m,h,g,_,f,E,v,I,b,x,T,S,A,w,y=n(552322),N=n(774418),C=n(670757),R=n(639464),O=n.n(R),M=n(649877),k=n(358662),D=n(814612),P=n(575386),j=n(689765),L=n(461468),F=n(323239),U=n(254914),B=n(943212),G=n(322584),W=n(221270),H=n(53640),V=n(597925),z=n(205892),Z=n(72779),K=n.n(Z),Y=n(202784),q=n(805991),$=n(501446),J=n(772982),X=n(824654),Q=n(97438),ee=n(878897),et=n(172458),en=n(337525),er=n(589403),ea=n(349452),ei=n(813945),eo=n(283232),es=n(261178),el=n(968917),ed=n(214864),ec=n(282357),eu=n(337431),ep=n(604378),em=n(248968),eh=n(796563),eg=n(47986),e_=n(149864);let ef="bottom-bar",eE={root:ef,dropdown:`${ef}__dropdown`},ev=e=>{let{children:t,onFirstRender:n,a11y:r}=e,a=(0,N.I0)();(0,Y.useEffect)(()=>{n?.()},[n]);let[i,o]=(0,Y.useState)(!1),s=(e,t)=>e?(0,y.jsx)(em.o,{scalingId:t,children:(0,y.jsx)("span",{children:e()})}):(0,y.jsx)(y.Fragment,{}),l=(e,t)=>e?(0,y.jsx)(em._,{scalingId:t,children:e()}):(0,y.jsx)(y.Fragment,{});return(0,y.jsx)(eh.L,{rules:[{id:"bottom-navigation",action:"hide"},{id:"reactions",action:"hide"},{id:"comments",action:"hide"},{id:"preferences",action:"hide"},{id:"attendees",action:"hide"},{id:"list",action:"hide"},{id:"stop-meeting",action:"hide"},{id:"dropdown",action:"show",whenHidden:"bottom-navigation"},{id:"dropdown-stop-meeting",action:"show",whenHidden:"stop-meeting"},{id:"dropdown-list",action:"show",whenHidden:"list"},{id:"dropdown-attendees",action:"show",whenHidden:"attendees"},{id:"dropdown-preferences",action:"show",whenHidden:"preferences"},{id:"dropdown-comments",action:"show",whenHidden:"comments"},{id:"dropdown-reactions",action:"show",whenHidden:"reactions"},{id:"dropdown-bottom-navigation",action:"show",whenHidden:"bottom-navigation"}],children:(0,y.jsx)(eg.M,{scalingId:"showtime-bottom-bar",children:(0,y.jsxs)(el.o,{"data-testid":eE.root,"aria-label":r["aria-label"],children:[s(t.previous,"previous"),s(t.list,"list"),s(t.next,"next"),(0,y.jsx)(em.o,{scalingId:"dropdown",children:(0,y.jsxs)(ed.h,{onOpen:()=>{o(!0),a((0,es.f_)(e_.x.limitedApps,!0))},onClose:()=>{o(!1),a((0,es.f_)(e_.x.limitedApps,!1))},open:i,children:[(0,y.jsxs)(ec.u,{children:[(0,y.jsx)(ec.u.Trigger,{asChild:!0,children:(0,y.jsx)(ed.h.Trigger,{asChild:!0,children:(0,y.jsx)(el.o.Icon,{active:i,"aria-label":r["aria-label"],"data-testid":eE.dropdown,children:(0,y.jsx)(eu.IconChevronUpDouble,{})})})}),(0,y.jsx)(ec.u.Content,{children:r["aria-label"]})]}),(0,y.jsxs)(ed.h.Content,{sideOffset:8,children:[(0,y.jsxs)(ep.k,{align:"center",justify:"evenly",children:[l(t.list,"dropdown-list"),l(t.stopMeeting,"dropdown-stop-meeting")]}),(0,y.jsxs)(ep.k,{align:"center",justify:"evenly",children:[l(t.bottomNavigation,"dropdown-bottom-navigation"),l(t.reactions,"dropdown-reactions"),l(t.comments,"dropdown-comments"),l(t.preferences,"dropdown-preferences"),l(t.attendees,"dropdown-attendees")]})]})]})}),s(t.bottomNavigation,"bottom-navigation"),s(t.reactions,"reactions"),s(t.comments,"comments"),s(t.preferences,"preferences"),s(t.attendees,"attendees"),s(t.stopMeeting,"stop-meeting")]})})})};var eI=n(696853);let eb=()=>{let e=(0,G.Xf)(),t=(0,N.v9)(Q.gC),{t:n}=(0,en.I)(U.a),[r,a]=(0,Y.useState)(()=>e.getTool()===eI.q.COMMENT);return(0,Y.useEffect)(()=>{let t=e=>{a(e===eI.q.COMMENT)};return e.toolChanged.add(t),()=>{e.toolChanged.remove(t)}},[e.toolChanged]),(0,y.jsx)(el.o.Icon,{active:r,onClick:()=>{let n=e.getTool();e.setTool(n===eI.q.COMMENT?eI.q.CURSOR:eI.q.COMMENT),(0,G._t)().track(F.LO.NAVIGATION_BAR_COMMENT_CLICKED,{showtime_session_id:t?.id.toString(),session_type:t?.sessionType})},"aria-label":n("showtime.panel.limitedTools.comments"),css:{color:"$text-neutrals"},"data-testid":"showtime-comments-button",children:(0,y.jsxs)(ec.u,{children:[(0,y.jsx)(ec.u.Trigger,{asChild:!0,children:(0,y.jsx)(eu.IconChatLinesTwo,{})}),(0,y.jsx)(ec.u.Content,{children:n("showtime.panel.limitedTools.comments")})]})})};var ex=n(819774);let eT=()=>{let{t:e}=(0,en.I)(U.a),[t,n]=(0,Y.useState)((0,G.E4)().getShowCursors());return(0,y.jsxs)(ed.h.SwitchItem,{checked:t,onChange:e=>{n(e),(0,G.E4)().setShowCursors(e,!0,"bottom_bar")},"data-testid":"preferences__toggle",children:[(0,y.jsx)(ed.h.IconSlot,{children:(0,y.jsx)(eu.IconNavigationArrowLines,{})}),e("showtime.preferences.showCursors")]})};var eS=n(711560),eA=n(4874),ew=n(6148),ey=n(967178);let eN=()=>{let{t:e}=(0,en.I)(U.a),t=(0,N.I0)(),[n,r]=(0,Y.useState)("false"!==(0,G.av)().getItem(eS.O.FULLSCREEN)),a=(0,N.v9)(Q.gC),i=eA.c.getInstance(),o=(0,N.v9)(ey.oH);return(0,y.jsxs)(ed.h.SwitchItem,{"data-testid":"preferences__enableFullscreen",checked:n,onChange:e=>{(0,G.av)().setItem(eS.O.FULLSCREEN,e),r(e),e?i.request():i.exit(),o()&&setTimeout(()=>{t((0,ew.Iy)())},100),(0,G._t)().track(F.LO.FULLSCREEN_TOGGLED,{showtime_session_id:a?.id.toString(),session_type:a?.sessionType,is_enabled:e})},children:[(0,y.jsx)(ed.h.IconSlot,{children:(0,y.jsx)(eu.IconArrowsOutSimple,{})}),e("showtime.preferences.fullscreen")]})};var eC=n(521454);let eR=()=>{let{t:e}=(0,en.I)(U.a),[t,n]=(0,Y.useState)((0,G.BV)().isMaskEnabled()),r=(0,N.v9)(Q.gC);return(0,y.jsxs)(ed.h.SwitchItem,{"data-testid":"preferences__enableLightboxing",checked:t,onChange:e=>{(0,G.BV)().setMaskEnabled(e),e||(0,G.BV)().hideMaskWithOptions({withAnimation:!0,source:eC.Y}),n((0,G.BV)().isMaskEnabled()),(0,G._t)().track(F.LO.DARK_BACKGROUND_TOGGLED,{showtime_session_id:r?.id.toString(),session_type:r?.sessionType,is_enabled:e})},children:[(0,y.jsx)(ed.h.IconSlot,{children:(0,y.jsx)(eu.IconLightbox,{})}),e("showtime.preferences.lightboxing")]})},eO={presenterView:"preferences__presenterView"},eM=e=>{let{onOpenPresenterWindow:t}=e,{t:n}=(0,en.I)(U.a);return(0,N.v9)(Q.mL)?null:(0,y.jsxs)(ed.h.Item,{"data-testid":eO.presenterView,onClick:t,children:[(0,y.jsx)(ed.h.IconSlot,{children:(0,y.jsx)(eu.IconPresentationArrow,{})}),n("showtime.preferences.presenterView")]})},ek=e=>{let{onChange:t,onTriggerClick:n,children:r}=e,{t:a}=(0,en.I)(U.a),[i,o]=(0,Y.useState)(!1);return(0,y.jsx)("span",{onKeyDown:e=>{"Escape"===e.key&&(e.stopPropagation(),i&&(o(!1),t(!1)))},role:"presentation","data-testid":"preferences",children:(0,y.jsxs)(ed.h,{onOpen:()=>{o(!0),t(!0)},onClose:()=>{o(!1),t(!1)},open:i,children:[(0,y.jsxs)(ec.u,{children:[(0,y.jsx)(ec.u.Trigger,{asChild:!0,children:(0,y.jsx)(ed.h.Trigger,{asChild:!0,children:(0,y.jsx)(el.o.Icon,{active:i,"data-testid":"preferences__button",onClick:n,"aria-label":a("showtime.preferences.label"),children:(0,y.jsx)(eu.IconSlidersY,{})})})}),(0,y.jsx)(ec.u.Content,{children:a("showtime.preferences.label")})]}),(0,y.jsx)(ed.h.Content,{sideOffset:8,children:r})]})})};var eD=n(136307);let eP=()=>{let e=(0,N.I0)(),t=(0,N.v9)(Q.gC),n=(0,N.v9)(ea.ll),r=(0,Y.useCallback)(()=>{(0,G.Ld)().openPresenterWindow({actionType:"showtime-toolbar",showtimeSessionId:t?.sessionId,framesCount:n})},[n,t]),a="on"===(0,eD.R)("PRSNT-272-presenter-view"),i="on"===(0,eD.R)("PRSNT-400-showtime-preferences-fullscreen"),o=(0,G.YG)().getRunningSessionType()!==X.JM.ADVANCED,s=(0,G.YG)().getIsShowtimeLeader();return(0,y.jsxs)(ek,{onChange:t=>{e((0,es.f_)(e_.x.preferences,t))},onTriggerClick:()=>{e((0,ex.QB)())},children:[(0,y.jsx)(eT,{}),s&&o&&(0,y.jsx)(eR,{}),s&&i&&(0,y.jsx)(eN,{}),s&&a&&(0,y.jsx)(eM,{onOpenPresenterWindow:r})]})};var ej=n(334928);let eL={SHOWTIME_ATTENDEES_BTN:"showtime-attendees__button",SHOWTIME_ATTENDEES_LIST:"showtime-attendees__list"},eF="attendee-list";var eU=n(871999),eB=n(575362),eG=n(142284),eW=n(472145),eH=n(398516),eV=n.n(eH),ez=n(238771),eZ=n(920644),eK=n(355166),eY=n(273545),eq=n.n(eY),e$=n(214328),eJ=n(477575),eX=n(839232),eQ=n(176381),e0=n(389958),e1=n(612517),e2=n(981033),e4=n(743586),e3=n.n(e4);function e6(){return(e6=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var e5=(0,Y.forwardRef)(function(e,t){return Y.createElement("svg",e6({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:t},e),a||(a=Y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.293 19.293a1 1 0 1 0 1.414 1.414l2.213-2.213.009.006 1.466-1.466a.427.427 0 0 1-.01-.005l1.584-1.584a.426.426 0 0 0 .009.006l1.516-1.516-.012-.003 2.45-2.45.003.012 1.516-1.516a.426.426 0 0 0-.006-.01l1.867-1.866a.56.56 0 0 1 .008.007l1.421-1.422-.007-.006 1.973-1.974a1 1 0 1 0-1.414-1.414L17.08 5.506C15.627 4.629 13.918 4 12 4 8.607 4 5.865 5.971 4.043 7.793a20.35 20.35 0 0 0-2.704 3.372 11.959 11.959 0 0 0-.19.31l-.012.02-.003.005-.002.003L.848 12l.284.496L2 12c-.868.496-.867.498-.867.498v.002l.004.006.012.02a6.91 6.91 0 0 0 .19.31 20.352 20.352 0 0 0 2.704 3.372c.37.37.779.746 1.223 1.111l-1.973 1.974Zm3.395-3.395 1.867-1.867A3.977 3.977 0 0 1 8 12c0-2.206 1.794-4 4-4 .741 0 1.436.202 2.031.555l1.583-1.584C14.516 6.381 13.301 6 12 6 9.393 6 7.135 7.529 5.457 9.207A18.346 18.346 0 0 0 3.18 12a18.347 18.347 0 0 0 2.277 2.793c.381.381.793.755 1.231 1.105Zm5.83-5.83a2.004 2.004 0 0 0-2.45 2.45l2.45-2.45ZM1.132 11.503 2 12l-.868-.497Z"})),i||(i=Y.createElement("path",{d:"m20.883 8.788-1.418 1.418A18.797 18.797 0 0 1 20.82 12a18.342 18.342 0 0 1-2.277 2.793C16.865 16.47 14.607 18 12 18c-.108 0-.215-.003-.321-.008l-1.76 1.76A8.894 8.894 0 0 0 12 20c3.393 0 6.135-1.971 7.957-3.793a20.348 20.348 0 0 0 2.704-3.372 11.894 11.894 0 0 0 .19-.31l.012-.02.003-.005.002-.003.284-.497-.284-.496v.92-.922l-.002-.002-.003-.006-.012-.02a18.136 18.136 0 0 0-.756-1.15c-.313-.437-.72-.97-1.212-1.536Z"})))}),e9=n(406730),e7=n(391021);let e8=e=>{let{userItem:t,containerTestId:n,counterTestId:r,eyeTestId:a}=e,i=(0,N.I0)(),o=(0,N.v9)(e9.P$),s=(0,N.v9)(e9.aG),{t:l}=(0,en.I)(U.a),[d,c]=(0,Y.useState)(!1),u=t?.clientType===e2.i.CURRENT_USER,p=(0,Y.useCallback)(()=>{!u&&t&&i((0,e7.V4)(t.userId,t.userInfo?.name??""))},[u,i,t]);if(!t)return(0,y.jsx)(eQ.h,{colorOverlayOpacity:.5,pictureUrl:"",pictureOpacity:.5,a11y:{"aria-hidden":!0}});let m=o?.compare(t.userId)===0&&!u,h=!m&&d&&!u,g=e1.I.intColorToHEX(t.cursorColor),_=e1.I.intColorToHEX(t.textColor),f=t.active?void 0:.5;return(0,y.jsxs)(ec.u,{children:[(0,y.jsx)(ec.u.Trigger,{asChild:!0,css:{padding:0,"&:not(:first-child)":{marginLeft:"-3px"}},children:(0,y.jsx)(eX.r,{hmTap:p,children:(0,y.jsxs)("div",{className:K()(e3().userPictureContainer,{[e3().hasFollowersCounter]:void 0!==s&&0!==s&&u,[e3().interactive]:!u}),role:"button","aria-label":t.userInfo?.name,tabIndex:-1,onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),"data-testid":n,children:[(0,y.jsx)(eQ.h,{colorOverlayOpacity:m||h?.5:void 0,pictureUrl:t.userInfo?.picture.size44??"",pictureOpacity:f,a11y:{"aria-hidden":!0}}),m||h?(0,y.jsx)(e0.l,{className:e3().eyeIcon,style:{color:_},"aria-hidden":!0,dataTestId:a,children:m&&d?(0,y.jsx)(e5,{}):(0,y.jsx)(eJ.Z,{})}):null,u&&(0,y.jsx)(ej.Ug,{appear:!0,isTransparent:!1,counter:s,color:g,textColor:_,dataTestId:r,a11y:{"aria-hidden":!0}})]})})}),!u&&(0,y.jsx)(ec.u.Content,{side:"bottom",children:m?(0,y.jsx)("div",{className:e3().userNameTooltip,children:l("showtime.attendeeItem.unfollowUser",{name:t.userInfo?.name??""})}):(0,y.jsx)("div",{className:e3().userNameTooltip,children:l("showtime.attendeeItem.followUser",{name:t.userInfo?.name??""})})})]})};var te=n(104132);let tt=e=>{let{onClick:t,dataTestId:n,label:r}=e,{pressProps:a}=(0,te.r)({onPress:t});return(0,y.jsx)("div",{...a,className:eq().handoffButton,"data-testid":n,role:"button",tabIndex:0,children:(0,y.jsx)("span",{children:r})})},tn={root:"showtime-attendee-list-item",name:"showtime-attendee-list-item__name",avatar:"showtime-attendee-list-item__avatar",avatarCounter:"showtime-attendee-list-item__avatar_counter",avatarEye:"showtime-attendee-list-item__avatar_eye",role:"showtime-attendee-list-item__role",handoff:"showtime-attendee-list-item__handoff",takeover:"showtime-attendee-list-item__takeover",raisedHand:"showtime-attendee-list-item__raisedHand",roleName:"showtime-attendee-list-item__roleName",idleStatus:"showtime-attendee-list-item__idleStatus"},tr=e=>{let{userItem:t,takeOverUserItem:n,onChangeLeader:r,isLeader:a=!1,dataTestId:i=tn.root,showHandoffButton:o=!1,showTakeOverButton:s=!1,showHandRaisedIcon:l=!1}=e,{t:d}=(0,en.I)(U.a),c=(0,N.v9)((0,ee.Ux)(t?.userId.toString()??"")),u=(0,N.I0)(),p=(0,Y.useCallback)(e=>{e&&r?.(e.userId)},[r]),m=!t?.active,h=a?d("showtime.attendeeItem.presenter"):function(e){switch(e){case eK.f.OWNER:return U.a.t("showtime.attendeeItem.boardOwner");case eK.f.COMMENTER:return U.a.t("showtime.attendeeItem.commenter");case eK.f.EXTERNAL_EDITOR:case eK.f.GUEST_EDITOR:case eK.f.EDITOR:return U.a.t("showtime.attendeeItem.editor");case eK.f.NO_ROLE:return U.a.t("showtime.attendeeItem.guest");case eK.f.VIEWER:return U.a.t("showtime.attendeeItem.viewer");case eK.f.COOWNER:return U.a.t("showtime.attendeeItem.coOwner");default:return""}}(t?.userBoardRole);return(0,y.jsxs)("div",{"data-testid":i,className:K()(eq().attendeeItem),"aria-label":t?.userInfo?.name,children:[(0,y.jsx)(e8,{containerTestId:tn.avatar,userItem:t,counterTestId:tn.avatarCounter,eyeTestId:tn.avatarEye}),(0,y.jsxs)("div",{className:K()(eq().userInfo,{[eq().shortWidth]:c}),children:[(0,y.jsx)("div",{className:eq().userName,"data-testid":tn.name,children:t?t.userInfo?.name:h}),(0,y.jsxs)("span",{className:eq().userRole,"data-testid":tn.role,children:[(0,y.jsxs)(ep.k,{gap:50,children:[(0,y.jsx)("span",{"data-testid":tn.roleName,children:h}),m&&(0,y.jsx)("span",{className:eq().userIdle,"data-testid":tn.idleStatus,children:d("showtime.attendeeItem.userIdle")})]}),!c&&o&&(0,y.jsx)(tt,{dataTestId:tn.handoff,onClick:()=>{t&&p(t)},label:d("showtime.attendeeItem.handOff")}),n&&s&&(0,y.jsx)(tt,{dataTestId:tn.takeover,onClick:()=>p(n),label:d("showtime.attendeeItem.takeOver")})]})]}),l&&c&&(0,y.jsxs)(ec.u,{children:[(0,y.jsx)(ec.u.Trigger,{asChild:!0,children:(0,y.jsx)("button",{type:"button",onClick:()=>{u((0,e$.Pf)(t?.userId.toString())),u((0,e$.YC)(ez.Es.presenter))},"data-testid":tn.raisedHand,"aria-label":d("showtime.attendeeItem.lowerHand"),children:(0,y.jsx)(eZ.Z,{className:eq().raisedHand,"aria-hidden":!0})})}),(0,y.jsx)(ec.u.Content,{children:d("showtime.attendeeItem.lowerHand")})]})]})};var ta=n(254073),ti=n.n(ta);let to=(e,t,n)=>{let r=[],a=[],i=n.length>0;return e.forEach(e=>{if(!(t.length>0)||e?.userInfo?.name.toLowerCase().includes(t)){if(i&&n.includes(e.userId.toString())){a.push(e);return}r.push(e)}}),{filteredParticipants:r,raisedHandParticipants:a}},ts=(e,t,n)=>{let[r,a]=(0,Y.useState)([]),[i,o]=(0,Y.useState)([]);return(0,Y.useEffect)(()=>{let{filteredParticipants:r,raisedHandParticipants:i}=to(e,t,n);a(r),o(i)},[t,(0,Y.useMemo)(()=>e.map(e=>e.userId.toString()).join(" "),[e]),(0,Y.useMemo)(()=>n.join(" "),[n])]),{filteredParticipants:r,raisedHandParticipants:i}};var tl=n(204996),td=n.n(tl);let tc=e=>{let{className:t,dataTestid:n,children:r}=e;return(0,y.jsx)("div",{className:K()(td().bottomBarList,t),"data-testid":n,id:n,"data-scrollable-element":"true",children:r})};var tu=n(822982),tp=n.n(tu);let tm=Y.forwardRef((e,t)=>{let{id:n,className:r,isSelected:a=!1,isDisabled:i=!1,isInteractive:o=!0,onClick:s,dataTestid:l,children:d,ariaLabel:c}=e;return(0,y.jsx)(ed.h.Item,{onClick:s,"aria-label":c,disabled:i||!o,ref:t,"data-testid":l,css:{margin:0,padding:0},children:(0,y.jsx)("div",{className:K()(tp().bottomBarListItem,r,{[tp().disabled]:i,[tp().interactive]:o&&!i,[tp().selected]:a&&!i}),children:d})},n)});var th=n(830730),tg=n.n(th),t_=n(797250),tf=n.n(t_);let tE=e=>{let{className:t}=e;return(0,y.jsx)("hr",{className:K()(tf().limitedTools__divider,t),"aria-hidden":!0})},tv=[eK.f.COMMENTER,eK.f.VIEWER,eK.f.GUEST_EDITOR],tI=e=>!!e&&!tv.includes(e),tb={participants:"showtime-participant-list__participants",searchInput:"showtime-participant-list_searchInput",anonymousParticipants:"showtime-participant-list__anonparticipants",lowerAllHands:"showtime-attendee-list__lowerAllHands"},tx=e=>{let{participants:t,anonymousParticipants:n=0,dataTestId:r,userIsLeader:a=!1}=e,[i,o]=(0,Y.useState)(""),s=(0,N.I0)(),{t:l}=(0,en.I)(U.a),d=(0,N.v9)(ee.Xx)??[],{filteredParticipants:c,raisedHandParticipants:u}=ts(t,i,a?d:[]),p=a&&G.Yd()?.permissionChecker.canChangeLeader(),m=t.length,h=c.length,g=u.length,_=0!==m||0!==n,f=m>4,E=0!==h,v=0===h&&0===g&&""!==i,I=0!==n&&""===i,b={searchPlaceholder:l("showtime.attendeeItemList.searchByName"),notFound:l("showtime.attendeeItemList.nameNotFound"),anonymousParticipants:l("showtime.attendeeItemList.anonymousGuestUsers",{anonymousParticipantsCount:n,count:n}),raisedHandsCount:l("showtime.controls.raisedHands",{raisedHandsCount:d.length,count:d.length}),lowerAllHands:l("showtime.attendeeDropdown.lowerAllHandsButton")},x=(0,Y.useCallback)(()=>ti()(()=>{s((0,ex.EU)({actionSource:"showtime_bar"}))},1e3),[s]),T=(0,Y.useMemo)(()=>ti()(e=>{o(e)},50),[o]),S=(0,Y.useCallback)(e=>{T(e),x()},[T,x]),A=(0,Y.useCallback)(e=>{let t=tI(e.userBoardRole),n=!(0,G.lZ)().isPrivateModeEnabledForAnonymousUser;return t&&n},[]),w=(0,Y.useCallback)(e=>{s((0,es.a7)(e,"bottom_bar"))},[s]);return(0,y.jsx)("div",{className:tg().attendeeItemListWrapper,children:_&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(tE,{}),(0,y.jsxs)("div",{"data-testid":r,children:[f&&(0,y.jsx)("div",{className:tg().filterContainer,children:(0,y.jsx)("input",{type:"text","data-testid":tb.searchInput,placeholder:b.searchPlaceholder,onChange:e=>S(e.target.value.toLowerCase()),autoFocus:!0})}),v&&(0,y.jsx)("div",{className:tg().notFoundMessage,children:b.notFound}),!v&&(0,y.jsxs)(tc,{className:K()(tg().attendeeItemList,tg().participantItemList,{[tg().searchable]:f}),dataTestid:tb.participants,children:[0!==g&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:tg().raisedHandsHeading,children:[(0,y.jsx)("span",{className:tg().raisedHandsCount,children:b.raisedHandsCount}),(0,y.jsx)("button",{"data-testid":tb.lowerAllHands,onClick:()=>{s((0,e$.Lu)(ez.Es.presenter))},type:"button",className:tg().lowerAllButton,children:b.lowerAllHands})]}),u.map(e=>(0,y.jsx)(tr,{userItem:e,onChangeLeader:w,showHandRaisedIcon:a,showHandoffButton:p&&A(e)},e.userId.toString())),E&&(0,y.jsx)(tE,{className:tg().raisedHandDivider})]}),E&&c.map(e=>(0,y.jsx)(tr,{userItem:e,onChangeLeader:w,showHandRaisedIcon:a,showHandoffButton:p&&A(e)},e.userId.toString())),I&&(0,y.jsx)(tm,{isInteractive:!1,className:tg().anonymousUsersMessage,dataTestid:tb.anonymousParticipants,children:b.anonymousParticipants})]})]})]})})};var tT=n(733158);let tS=e=>(t,n)=>{let r=e.includes(t.userId.toString()),a=e.includes(n.userId.toString());return r&&!a?-1:!r&&a?1:0},tA=e=>(t,n)=>0===t.userId.compare(e)?-1:+(0===n.userId.compare(e)),tw=e=>{let{users:t,isLeader:n,raisedHands:r,followingUserId:a}=e,i=[tT.Ko,tT.Fl,tT.m2];return n&&i.unshift(tS(r)),a&&i.unshift(tA(a)),[...t].sort(tT.I$(i))},ty=(e,t,n,r)=>{var a,i;let o,s;let l=[],d=0;e.forEach(e=>{if(void 0===e){d+=1;return}let t=(0,G.Yd)().showtimeOnlineUserItem.getUserById(e);if(void 0===t){d+=1;return}let n=!1;t?.clientType===e2.i.CURRENT_USER&&(o=t,n=!0),r&&0===e.compare(r)&&(s=t,n=!0),!n&&t&&l.push(t)});let c=(a=o,i=s,tw({users:l,isLeader:!!a&&!!i&&0===a.userId.compare(i.userId),raisedHands:t,followingUserId:n}));return{anonymousUserCount:d,leader:s,currentUser:o,participants:c}},tN=(e,t)=>{let n=(0,N.v9)(ee.Xx),[r,a]=(0,Y.useState)([]),[i,o]=(0,Y.useState)(0),[s,l]=(0,Y.useState)(void 0),[d,c]=(0,Y.useState)(void 0),[u,p]=(0,Y.useState)([]),m=(0,Y.useCallback)(e=>{p(tw({users:e,isLeader:!!d&&!!s&&0===d.userId.compare(s.userId),raisedHands:n,followingUserId:t}))},[s,d,t]),h=(0,Y.useCallback)(()=>{let{leader:a,currentUser:i,anonymousUserCount:s,participants:d}=ty(r,n,t,e?.leaderId);c(i),l(a),p(d),o(s)},[r,n]);if((0,Y.useEffect)(()=>{void 0!==e&&a(e.participants)},[(0,Y.useMemo)(()=>(e?.participants??[]).map(e=>e.toString()).join(" "),[e?.participants])]),(0,Y.useEffect)(()=>(h(),(0,G.Yd)().showtimeOnlineUserItem.addSubscriptionUsersUpdate(h),()=>{(0,G.Yd)().showtimeOnlineUserItem.removeSubscriptionUsersUpdate(h)}),[h]),(0,Y.useEffect)(()=>{m(u)},[(0,Y.useMemo)(()=>t?.toString(),[t])]),(0,G.lZ)().isPrivateModeEnabledForAnonymousUser){let e=(0,G.RP)();return{leader:s&&e.anonymiseOnlineUserItem(s),currentUser:d&&e.anonymiseOnlineUserItem(d),participants:u.map(e.anonymiseOnlineUserItem),anonymousUserCount:i}}return{leader:s,currentUser:d,participants:u,anonymousUserCount:i}},tC=(e,t,n)=>!t||n?e:[t,...e],tR={leader:"showtime-attendee-list__leader",participants:"showtime-attendee-list__participants",share:"showtime-attendee-list__share"},tO=e=>{let{dataTestId:t}=e,{t:n}=(0,en.I)(U.a),r=(0,N.v9)(Q.gC),a=(0,N.v9)(e9.P$),i=(0,N.I0)(),{leader:o,currentUser:s,participants:l,anonymousUserCount:d}=tN(r,a),c=!!s&&!!o&&0===s.userId.compare(o.userId),u=(0,eD.R)("PRSNT-629-takeover-for-everyone")===eW.A.ON,p=(0,Y.useMemo)(()=>tC(l,s,c),[l,s,c]),m=()=>{(0,eG.i)().then(async e=>e.runShareFlow({accountId:(0,G.Yd)().currentAccountId,boardId:(0,G.Yd)().boardId,from:"showtime_bottom_bar",emails:[]})).catch(e=>{throw(0,eU.KC)(e)}),i((0,ex.BN)())},h=(0,Y.useCallback)(e=>{i((0,es.a7)(e,"bottom_bar"))},[i]),g=(0,Y.useCallback)(()=>{s&&h(s.userId)},[s,h]),_=u&&!c&&tI(s?.userBoardRole);return(0,y.jsxs)("div",{"data-testid":t,className:eV().attendeeItemListWrapper,children:[(0,y.jsx)("div",{className:eV().attendeeItemList,children:(0,y.jsx)(tr,{dataTestId:tR.leader,userItem:o,onChangeLeader:g,takeOverUserItem:s,showTakeOverButton:_,isLeader:!0})}),(0,y.jsx)(tx,{participants:p,anonymousParticipants:d,userIsLeader:c,dataTestId:tR.participants}),c&&(0,y.jsx)(eB.z,{css:{marginTop:"$100"},"data-testid":tR.share,onClick:()=>m(),fluid:!0,children:n("showtime.attendeeDropdown.share")})]})};var tM=n(82428);let tk=e=>{let{count:t,rest:n}=e,r=(0,N.I0)(),{t:a}=(0,en.I)(U.a),i=(0,Y.useRef)(!1),o=(0,Y.useCallback)(()=>{let e=i.current;r((0,es.f_)(e_.x.participantList,!e)),i.current=!e},[r]),[s,l]=(0,Y.useState)(!1),d=0===n?a("showtime.bottomBar.share"):a("showtime.bottomBar.viewParticipants",{count:t});return 0===n?(0,y.jsx)("span",{role:"presentation",children:(0,y.jsxs)(ed.h,{onOpen:()=>{l(!0)},onClose:()=>{l(!1)},open:s,children:[(0,y.jsxs)(ec.u,{children:[(0,y.jsx)(ec.u.Trigger,{asChild:!0,children:(0,y.jsx)(ed.h.Trigger,{asChild:!0,children:(0,y.jsx)(el.o.Icon,{active:s,onClick:()=>r((0,es.f_)(e_.x.participantList,!s)),"aria-label":d,children:(0,y.jsx)(eu.IconUserAdd,{})})})}),(0,y.jsx)(ec.u.Content,{children:d})]}),(0,y.jsx)(ed.h.Content,{sideOffset:8,children:(0,y.jsx)(tO,{dataTestId:eL.SHOWTIME_ATTENDEES_LIST})})]})}):(0,y.jsx)(ej.r2,{toggleMoreUsersMenu:o,moreUsersNumber:n,popUpClassName:tM.moreUsers,buttonClassName:tM.moreUsersButton,dropDownPlacement:"top",hasRaisedHands:!1,buttonContent:`+${n}`,a11y:{"aria-label":d},dropdownId:eF,buttonTooltip:d,children:(0,y.jsx)(tO,{dataTestId:eL.SHOWTIME_ATTENDEES_LIST})})};var tD=n(167189);let tP=(e,t)=>({userId:e.userId,name:e.userInfo?.name??"",userInfoId:e.userInfo?.id??"",pictureUrl:e.userInfo?.picture.size44??"",active:e.active??!1,userBoardRole:t??e.userBoardRole??eK.f.VIEWER,cursorColor:e1.I.intColorToHEX(e.cursorColor??0),textColor:e1.I.intColorToHEX(e.textColor??0)}),tj=(e,t)=>{let{anonymousUserCount:n,participants:r,currentUser:a,leader:i}=tN(e,t),o=i?.userId&&a?.userId&&0===i.userId.compare(a.userId),s=r.length+ +!o;if(n+s===0)return{stackUsers:[],allCount:0,restCount:0};let l=n+ +!!a+(s>2?s-2:0),d=r.map(e=>tP(e));return i&&!o&&d.unshift(tP(i,tD.B.PRESENTER)),{stackUsers:d.slice(0,2),allCount:n+s+ +!!o,restCount:l}},tL={name:"",id:"0"},tF=e=>e?{name:e.name,id:e.userId.toString()}:tL,tU=()=>!0,tB=()=>{let e=(0,N.I0)(),t=(0,N.v9)(e9.P$),n=(0,N.v9)(Q.d1),r=(0,N.v9)(Q.gC),a=(0,N.v9)(e=>(0,Q.JE)(e,e_.x.participantList)),{stackUsers:i,restCount:o,allCount:s}=tj(r,t);(0,Y.useEffect)(()=>()=>{e((0,es.f_)(e_.x.participantList,!1))},[e]);let l=async e=>tF(i.find(t=>t.userId.toString()===e));return(0,y.jsxs)("div",{className:K()(tM.usersRow,{[tM.userRowPadding]:o>0}),"data-testid":eL.SHOWTIME_ATTENDEES_BTN,children:[(0,y.jsx)(ej.ys,{users:i,maxVisible:3,selfUser:null,isFollowingActive:!0,getUserInfo:l,onRowUserTap:t=>{e((0,e7.V4)(t.userId,t.name))},onToggleMoreUsers:()=>{e((0,es.f_)(e_.x.participantList,!a))},showMoreUsers:!1,hasRaisedHands:!1,followingUserId:t,dropDownPlacement:"auto",moreUsersPopUpClassName:tM.moreUsers,dropdownId:eF,itemClassName:tM.userItem,shouldAddClipAfter:tU,clipPathId:"SHOWTIME_USER_CLIP_PATH_ID",children:{usersList:()=>(0,y.jsx)(tO,{dataTestId:eL.SHOWTIME_ATTENDEES_LIST})}}),(0,y.jsx)(tk,{count:s,rest:o,isLeader:n})]})},tG=()=>"on"===(0,eD.R)("PRSNT-447-creation-bar-off-by-default");var tW=n(276635),tH=n(772636);let tV=(e,t)=>{let[n,r]=(0,Y.useState)(e.getShowCursors()),a=(0,Y.useRef)(!1);(0,Y.useEffect)(()=>{let t=e=>{r(e)};return e.collaboratorsCursorsSwitched.add(t),()=>{e.collaboratorsCursorsSwitched.remove(t)}},[e]),(0,Y.useEffect)(()=>{if(n)return tW.noop;let e=(0,tW.debounce)(()=>{t.setCursor(tH.C.NONE),a.current=!0,window.removeEventListener("mousemove",e),window.addEventListener("mousemove",r,{once:!0})},5e3),r=()=>{t.revertCursor(),a.current=!1,window.addEventListener("mousemove",e)};return window.addEventListener("mousemove",e),e(),()=>{a.current&&(t.revertCursor(),a.current=!1),e.cancel(),window.removeEventListener("mousemove",e),window.removeEventListener("mousemove",r)}},[n,t])};var tz=n(283133),tZ=n.n(tz);let tK=e=>{let{children:t}=e;return(0,y.jsx)("div",{className:tZ().bottomBarGroup,children:t})};var tY=n(23837),tq=n(251261);let t$={[tq._.NONE]:"presettingApps.agendaPluginSelection.pluginName.none",[tY.p.VOTING]:"presettingApps.agendaPluginSelection.pluginName.voting",[tY.p.BREAKOUT_ROOMS]:"presettingApps.agendaPluginSelection.pluginName.breakoutFrames",[tY.p.COUNTDOWN]:"presettingApps.agendaPluginSelection.pluginName.timer",[tY.p.PRIVATE_MODE]:"presettingApps.agendaPluginSelection.pluginName.privateMode",[tY.p.BOARD_RECORDING]:"presettingApps.agendaPluginSelection.pluginName.talktrack"},tJ={[tq._.NONE]:void 0,[tY.p.VOTING]:(0,y.jsx)(eu.IconSquareCirclesTwo,{}),[tY.p.BREAKOUT_ROOMS]:(0,y.jsx)(eu.IconSquaresFour,{}),[tY.p.COUNTDOWN]:(0,y.jsx)(eu.IconTimer,{}),[tY.p.PRIVATE_MODE]:(0,y.jsx)(eu.IconStickyEyeOpen,{}),[tY.p.BOARD_RECORDING]:(0,y.jsx)(eu.IconCircleCorners,{})};tq._.NONE,tY.p.VOTING,t$[tY.p.VOTING],tY.p.BREAKOUT_ROOMS,t$[tY.p.BREAKOUT_ROOMS],tY.p.COUNTDOWN,t$[tY.p.COUNTDOWN],tY.p.BOARD_RECORDING,t$[tY.p.BOARD_RECORDING],tq._.NONE,eu.IconPlus,tY.p.VOTING,tJ[tY.p.VOTING],tY.p.BREAKOUT_ROOMS,tJ[tY.p.BREAKOUT_ROOMS],tY.p.COUNTDOWN,tJ[tY.p.COUNTDOWN],tY.p.BOARD_RECORDING,tJ[tY.p.BOARD_RECORDING];var tX=n(504123),tQ=n(277421),t0=n(59330);let t1=e=>{let{dataTestid:t,renderToggle:n,renderContent:r,onClose:a,isOpen:i=!1,onOpen:o,label:s}=e;return(0,y.jsxs)(ed.h,{open:i,onOpen:o,onClose:a,children:[n(i),(0,y.jsx)(ed.h.Content,{side:"bottom","data-testid":t,"aria-label":s,sideOffset:8,children:r(a)})]})};var t2=n(998321),t4=n.n(t2);let t3=e=>{let t=tJ[e.plugin];return void 0===t?null:t},t6={root:"meeting-app-item",selected:"meeting-app-item__selected",icon:"meeting-app-item__icon",name:"meeting-app-item__name"},t5=e=>{let{id:t,name:n,plugin:r,isSelected:a=!1,isDisabled:i=!1,onClick:o}=e,s=`${t6.name}__${t.toLowerCase()}`,l=a?t6.selected:`${t6.root}__${t.toLowerCase()}`;return(0,y.jsxs)(tm,{id:t,className:t4().appListItem,isSelected:a,isDisabled:i,onClick:o,dataTestid:l,children:[(0,y.jsx)("div",{className:t4().appListItem__icon,"data-testid":t6.icon,children:(0,y.jsx)(t3,{plugin:r})}),(0,y.jsx)("div",{className:t4().appListItem__name,"data-testid":s,children:n})]})};var t9=n(774930),t7=n.n(t9),t8=n(630860),ne=n(676878),nt=n.n(ne),nn=n(84370);let nr=e=>{let{onChange:t,isChecked:n}=e,{t:r}=(0,en.I)(U.a),[a]=(0,Y.useState)(t7()("limitedToolsToggle-"));return(0,y.jsxs)("div",{className:nt().limitedTools__container,children:[(0,y.jsxs)("div",{className:nt().limitedTools__labelContainer,children:[(0,y.jsx)("label",{className:nt().limitedTools__text,htmlFor:a,children:r("showtime.panel.toggleParticipantTools")}),(0,y.jsx)(nn.o,{tooltipText:r("showtime.panel.limitedTools.tooltip"),testId:"limitedToolsTooltipIcon"})]}),(0,y.jsx)(t8.r,{id:a,"aria-required":void 0,"aria-label":r("showtime.panel.toggleParticipantTools"),"data-testid":"limitedToolsToggle__input",checked:n,onChecked:()=>t(!0),onUnchecked:()=>t(!1),size:"medium"})]})},na=e=>{let{appId:t="",icon:n,isActive:r,isDisabled:a,onToolClick:i}=e,{t:o}=(0,en.I)(U.a),s={[tY.p.STICKERS]:o("showtime.panel.limitedTools.stickies"),[tY.p.SHAPES_AND_LINES]:o("showtime.panel.limitedTools.shapes"),[tY.p.TEXT]:o("showtime.panel.limitedTools.text"),[tY.p.PEN]:o("showtime.panel.limitedTools.pen"),[tY.p.COMMENTS]:o("showtime.panel.limitedTools.comments"),[tY.p.MEDIA_LIBRARY]:o("showtime.panel.limitedTools.emojis")}[t],l=!a&&r;return(0,y.jsxs)(ec.u,{children:[(0,y.jsx)(ec.u.Trigger,{asChild:!0,children:(0,y.jsx)(el.o.Icon,{css:{border:"1px solid $border-neutrals-active",'&[aria-pressed="true"]':{border:"1px solid var(--colors-icon-primary)"}},"data-testid":`limitedToolsButton__${t}`,active:l,disabled:a,"aria-pressed":l,"aria-label":s,onClick:i,children:n})}),(0,y.jsx)(ec.u.Content,{side:"bottom",children:s})]})},ni=e=>{let{children:t,disabled:n=!1}=e,{t:r}=(0,en.I)(U.a);return(0,y.jsx)(el.o,{css:{display:"flex",justifyContent:"space-between"},"aria-disabled":n,"aria-label":r("showtime.panel.limitedTools.tooltip"),unstyled:!0,children:t})};var no=n(490797),ns=n(521133),nl=n(85469),nd=n.n(nl);let nc={[tY.p.STICKERS]:(0,y.jsx)(eu.IconStickyNote,{}),[tY.p.SHAPES_AND_LINES]:(0,y.jsx)(eu.IconShapes,{}),[tY.p.TEXT]:(0,y.jsx)(eu.IconTextT,{}),[tY.p.PEN]:(0,y.jsx)(eu.IconPenTip,{}),[tY.p.MEDIA_LIBRARY]:(0,y.jsx)(eu.IconSmileySticker,{}),[tY.p.COMMENTS]:(0,y.jsx)(eu.IconChatLinesTwo,{})},nu=Object.keys(nc),np=(e,t)=>nu.indexOf(e.tool)-nu.indexOf(t.tool),nm=e=>{let{currentSessionId:t,statSource:n="showtime_panel",size:r,classname:a,contentRef:i}=e,o=(0,N.I0)(),s=(0,N.v9)(no.Px),l=(0,N.v9)(no.Ze),d=(0,N.v9)(no.wm),c=tG();d.sort(np);let u=e=>{let r=d.findIndex(t=>t.tool===e.tool),a=e.selected;d[r]={...e,selected:!a},o((0,ns.Wi)(t,[...d],n))},p=d.map(e=>{let{tool:t,selected:n}=e,r=nc[t],a=t===tY.p.COMMENTS&&c;return r&&!a?(0,y.jsx)(na,{appId:t,icon:r,isActive:n,isDisabled:!s,onToolClick:()=>{u({tool:t,selected:n})}},t):null});return(0,y.jsxs)("div",{"data-testid":"limitedToolsContainer",className:K()(a,nd().limitedTools__container,{[nd().limitedTools__small]:"small"===r}),children:[(0,y.jsx)(nr,{onChange:e=>{o((0,ns.Cc)(t,e,n))},isChecked:s&&l,contentRef:i}),(0,y.jsx)(ni,{disabled:!l,children:p})]})};var nh=n(378244);function ng(){return(ng=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var n_=(0,Y.forwardRef)(function(e,t){return Y.createElement("svg",ng({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),o||(o=Y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM5 9V5h4v4H5Zm9-6h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm1 6V5h4v4h-4ZM4 13h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Zm5 6H5v-4h4v4Zm5-6h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Zm5 6h-4v-4h4v4Z",fill:"currentColor"})))});function nf(){return(nf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var nE=(0,Y.forwardRef)(function(e,t){return Y.createElement("svg",nf({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),s||(s=Y.createElement("rect",{x:3,y:3,width:18,height:18,rx:1,stroke:"currentColor",strokeWidth:2})),l||(l=Y.createElement("circle",{cx:14,cy:16,r:3,fill:"currentColor"})),d||(d=Y.createElement("circle",{cx:21,cy:12,r:3,fill:"currentColor"})))});function nv(){return(nv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var nI=(0,Y.forwardRef)(function(e,t){return Y.createElement("svg",nv({width:"1em",height:"1em",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),c||(c=Y.createElement("path",{d:"m12.843 6.936-2.05 2.05a1.672 1.672 0 0 0-2.1 1.611 1.669 1.669 0 1 0 3.28-.432l2.05-2.05a.834.834 0 1 0-1.18-1.18Z",fill:"currentColor"})),u||(u=Y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.528 2.295a.849.849 0 0 1-.001-.04V1.42a.834.834 0 1 1 1.668 0v.875a8.344 8.344 0 1 1-1.667 0Zm.833 14.977a6.675 6.675 0 1 0 0-13.349 6.675 6.675 0 0 0 0 13.35Z",fill:"currentColor"})))});function nb(){return(nb=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var nx=(0,Y.forwardRef)(function(e,t){return Y.createElement("svg",nb({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),p||(p=Y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.914 3.5a2 2 0 0 0-2.828 0L4.507 14.08A2 2 0 0 0 3.96 15.1l-.646 3.232a2 2 0 0 0 2.353 2.354l3.232-.647a2 2 0 0 0 1.022-.547L20.5 8.914a2 2 0 0 0 0-2.828L17.914 3.5Zm-4.5 4.5L16.5 4.914 19.086 7.5 16 10.586 13.414 8ZM12 9.414l-6.079 6.08-.646 3.231 3.232-.646L14.586 12 12 9.414Z",fill:"currentColor"})))});function nT(){return(nT=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var nS=(0,Y.forwardRef)(function(e,t){return Y.createElement("svg",nT({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),m||(m=Y.createElement("path",{d:"M19 12a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1Z",fill:"currentColor"})))}),nA=n(442474),nw=((h={})[h.UNAVAILABLE=0]="UNAVAILABLE",h[h.AVAILABLE=1]="AVAILABLE",h[h.RESTRICTED=2]="RESTRICTED",h);let ny=()=>{let e=(0,N.v9)(nA.o7),t=(0,N.v9)(nA.L$),n=(0,G.Yd)().permissionChecker.canUseAppsDuringMeeting();return(0,Y.useMemo)(()=>[tY.p.COUNTDOWN,tY.p.VOTING,tY.p.BREAKOUT_ROOMS,tY.p.PRIVATE_MODE,tY.p.BOARD_RECORDING].reduce((r,a)=>{let i=nw.UNAVAILABLE;return e[a]&&(i=n&&t[a]?nw.AVAILABLE:nw.RESTRICTED),{...r,[a]:i}},{}),[n,e,t])},nN=e=>{let{onPluginSelected:t,selectedPlugin:n,onRemoveApp:r,onEditApp:a}=e,{t:i}=(0,en.I)(U.a),{t:o}=(0,en.I)(t0.F),s=(0,Y.useMemo)(()=>n!==tq._.NONE&&void 0!==n,[n]),l=ny(),d=(0,Y.useCallback)(e=>{let{appId:n,label:r,icon:a}=e;return{hidden:l[n]===nw.UNAVAILABLE,disabled:l[n]===nw.RESTRICTED,disabledTooltip:i("showtime.contextMenu.noEditPermission.text"),id:n,label:r,text:r,icon:(0,y.jsx)(e0.l,{children:a}),handler:()=>l[n]===nw.AVAILABLE?t(n):void 0}},[t,l,i]),c=(0,Y.useMemo)(()=>[{hidden:!1,disabled:!!s&&!l[n],disabledTooltip:i("showtime.contextMenu.noEditPermission.text"),id:"edit-plugin",label:i("showtime.apps.edit.label"),text:i("showtime.apps.edit.label"),icon:(0,y.jsx)(e0.l,{children:(0,y.jsx)(nx,{})}),handler:a},{hidden:!1,disabled:!1,disabledTooltip:"",id:"delete-plugin",label:i("showtime.apps.remove.label"),text:i("showtime.apps.remove.label"),icon:(0,y.jsx)(e0.l,{children:(0,y.jsx)(nS,{})}),handler:r}],[a,r,n,l,s,i]),u=(0,Y.useMemo)(()=>[{appId:tY.p.COUNTDOWN,label:o("presettingApps.agendaPluginSelection.pluginName.timer"),icon:(0,y.jsx)(nI,{})},{appId:tY.p.VOTING,label:o("presettingApps.agendaPluginSelection.pluginName.voting"),icon:(0,y.jsx)(nE,{})},{appId:tY.p.BREAKOUT_ROOMS,label:o("presettingApps.agendaPluginSelection.pluginName.breakoutFrames"),icon:(0,y.jsx)(n_,{})},{appId:tY.p.PRIVATE_MODE,label:o("presettingApps.agendaPluginSelection.pluginName.privateMode"),icon:(0,y.jsx)(eu.IconStickyEyeOpen,{})}].filter(e=>{let{appId:t}=e;return l[t]!==nw.UNAVAILABLE}).map(d),[d,l,o]);return(0,Y.useMemo)(()=>s?c:u,[c,u,s])},nC="meeting-apps-button",nR={button:`${nC}__button`,list:`${nC}__list`},nO=e=>({id:e,name:t$[e],icon:tJ[e]}),nM=[nO(tY.p.BREAKOUT_ROOMS),nO(tY.p.COUNTDOWN),nO(tY.p.VOTING),nO(tY.p.PRIVATE_MODE),nO(tY.p.BOARD_RECORDING)],nk=()=>{let e=(0,N.v9)(nh.Tk.runningAgendaItemSelector),t=(0,N.I0)(),{t:n}=(0,en.I)(U.a),[r,a]=(0,Y.useState)(!1),i=e?.pluginSettingId?.toString(),o=e?.plugin,s=e?.id,l=void 0!==o&&o!==tq._.NONE,d=(0,N.v9)(Q.gC),c=d?.id,u=G.Yd()?.permissionChecker.canLimitTools(),p=(0,Y.useCallback)((e,n)=>()=>{(0,N.dC)(()=>{t(tX.uG.startApp({plugin:e.id,itemId:s,settingsId:o===e.id?i:void 0,action:tQ.l.START,agendaItemId:s},void 0,d?{id:d.sessionId,type:d.sessionType,source:F.oH.BOTTOM_BAR}:void 0))}),n()},[t,s,i,o,d]),m=(0,Y.useCallback)(()=>{t((0,ex.SP)())},[t]),h=(0,Y.useCallback)(e=>(0,y.jsxs)(ec.u,{children:[(0,y.jsx)(ec.u.Trigger,{asChild:!0,children:(0,y.jsx)(ed.h.Trigger,{asChild:!0,children:(0,y.jsx)(el.o.Icon,{"aria-label":n("showtime.controls.apps"),"aria-haspopup":"dialog","aria-expanded":e,"data-testid":nR.button,onClick:m,active:l||e,children:(0,y.jsx)(eu.IconSquareTriangleCirclePlus,{})})})}),(0,y.jsx)(ec.u.Content,{children:n("showtime.controls.apps.tooltip")})]}),[l,m,n]),g=ny(),_=(0,Y.useCallback)(e=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(tc,{dataTestid:nR.list,children:nM.map(t=>g[t.id]===nw.AVAILABLE&&(0,y.jsx)(t5,{id:t.id,plugin:t.id,name:t0.F.t(t.name),isSelected:o===t.id,onClick:p(t,e)},t.id))}),c&&u&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(tE,{}),(0,y.jsx)(nm,{currentSessionId:c,size:"small"})]})]}),[o,p,c,u,g]),f=(0,Y.useCallback)(()=>{a(!1),t((0,es.f_)(e_.x.limitedApps,!1))},[t]),E=(0,Y.useCallback)(()=>{a(!0),t((0,es.f_)(e_.x.limitedApps,!0))},[t]);return(0,y.jsx)(t1,{label:n("showtime.controls.apps"),renderToggle:h,renderContent:_,onOpen:E,onClose:f,isOpen:r})},nD=()=>{let e=Y.useMemo(()=>G.Yd()?.permissionChecker.canUseAppsDuringMeeting(),[]),t=ny(),n=nM.some(e=>t[e.id]===nw.AVAILABLE);return e&&n?(0,y.jsx)(tK,{children:(0,y.jsx)(nk,{})}):null};var nP=n(679001),nj=n(752060),nL=n(755176),nF=n.n(nL),nU=n(313391);let nB="meeting-list-item",nG={root:nB,selected:`${nB}__selected`,framePreview:`${nB}__frame_preview`,pluginIcon:`${nB}__plugin_icon`,name:`${nB}__name`,time:`${nB}__time`},nW=()=>{let{t:e}=(0,en.I)(U.a);return(0,y.jsx)("div",{className:nF().framePreview,children:(0,y.jsxs)("div",{className:nF().content_hidden,children:[(0,y.jsx)(nU.Z,{width:5,height:5}),(0,y.jsx)("p",{className:nF().content_hidden_message,children:e("showtime.framesListItem.hiddenForNow")})]})})},nH=Y.forwardRef((e,t)=>{let{id:n,className:r,framePreview:a,title:i,plugin:o=tq._.NONE,time:s,number:l,isSelected:d=!1,isDisabled:c=!1,isInteractive:u=!0,onClick:p,isHidden:m}=e;return(0,y.jsxs)(tm,{id:n,ref:t,className:r,isInteractive:u,isSelected:d,isDisabled:c,onClick:Y.useCallback(e=>{void 0!==p&&p(e)},[p]),dataTestid:nG[d?"selected":"root"],children:[m?(0,y.jsx)(nW,{}):(0,y.jsx)(nj.t,{preview:a,className:nF().framePreview,dataTestid:nG.framePreview,lazilyGenerate:!0,useClone:!0,isHidden:m}),(0,y.jsxs)("div",{className:nF().title,"data-testid":nG.name,children:[void 0!==l?`${l}. `:"",i]}),void 0!==o&&(0,y.jsx)(t3,{plugin:o,"data-testid":nG.pluginIcon}),void 0!==s&&(0,y.jsx)("div",{className:nF().time,"data-testid":nG.time,children:s})]})});var nV=n(205861),nz=n.n(nV);let nZ=e=>{let t=Math.abs(e);return{hi:Math.floor(t/60),lo:t%60}},nK=e=>Math.floor(e/1e3/60),nY=e=>6e4*e,nq=e=>`${0>Math.sign(e)?"+":""}`,n$=e=>{let{hi:t,lo:n}=nZ(Math.round(e/1e3)),r=`${n<10?"0":""}${n%60}`,a=`${t}`;return`${nq(e)}${a}:${r}`};var nJ=n(235749);let nX=e=>e===nJ.N.RUNNING;function nQ(e){return e&&"pointerType"in e&&"string"==typeof e.pointerType?e.pointerType:""}let n0=Y.forwardRef((e,t)=>{let{id:n,number:r}=e,a=(0,N.I0)(),i=(0,N.v9)(e=>nh.Tk.agendaItemSelector(e,n)),o=i?.widgetId,s=i?.id,l=N.v9(e=>nh.Tk.frameNameByIdSelector(e,o))?.forView,d=(0,N.v9)(e=>nh.Tk.framePreviewByIdSelector(e,o)),c=(0,N.v9)(e=>nh.Tk.frameHiddenFlagByIdSelector(e,o)),u=i?.duration===void 0?0:i.duration,p=i?.plugin===void 0?tq._.NONE:i.plugin,m=(0,Y.useCallback)(e=>{(0,N.dC)(()=>{void 0!==s&&void 0!==o&&(a((0,nP.SH)(s)),a((0,ex.OW)(o)),a((0,nP.KC)(nQ(e))))})},[a,s,o]);if(void 0===i)return null;let h=0!==u?`${nK(u)} m`:void 0;return(0,y.jsx)(nH,{id:n,number:r,className:nz().facilitatorWrapper,isSelected:void 0!==i.status&&nX(i.status),isInteractive:!0,framePreview:d,title:l,plugin:p,time:h,onClick:m,ref:t,isHidden:c})});var n1=n(493376),n2=n.n(n1);let n4=Y.forwardRef((e,t)=>{let{id:n,number:r}=e,a=(0,N.v9)(e=>nh.Tk.agendaItemSelector(e,n)),i=a?.widgetId,o=N.v9(e=>nh.Tk.frameNameByIdSelector(e,i))?.forView,s=(0,N.v9)(e=>nh.Tk.framePreviewByIdSelector(e,i)),l=(0,N.I0)(),d=Y.useCallback(()=>{void 0!==i&&l((0,ex.OW)(i))},[l,i]);return void 0===a?null:(0,y.jsx)(nH,{id:n,number:r,className:n2().participantWrapper,isSelected:void 0!==a.status&&nX(a.status),isInteractive:!1,framePreview:s,title:o,ref:t,onClick:d})});var n3=n(284340),n6=n(23180),n5=n.n(n6),n9=n(882891);let n7=e=>{let{isFacilitator:t,dataTestid:n}=e,r=(0,N.v9)(ea.tE),a=(0,N.v9)(et.g4),i=a?.id?.toString(),o=(0,N.v9)(Q.gC),s=(0,Y.useRef)(null),l=(0,N.I0)(),{t:d}=(0,en.I)(U.a);(0,Y.useEffect)(()=>{l((0,ew.ZC)())},[l]),(0,Y.useEffect)(()=>{s.current?.scrollIntoView!==void 0&&s.current?.scrollIntoView()},[s]);let c=d(o?.sessionType===X.JM.ADVANCED?"showtime.controls.editActivityList":"showtime.controls.editFrames");return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(tc,{className:t?n5().meetingItemList_facilitator:n5().meetingItemList_participant,dataTestid:n,children:r.map((e,n)=>{let r=e===i?s:void 0,a=n+1;return t?(0,y.jsx)(n0,{ref:r,id:e,number:a},e):(0,y.jsx)(n4,{ref:r,id:e,number:a},e)})}),o?.sessionType!==X.JM.AD_HOC&&t&&(0,y.jsx)(tm,{onClick:()=>{let e=o?.sessionType===X.JM.ADVANCED?n9.q.MEETING:n9.q.FRAMES;l((0,n3.aT)(F.T6.SHOWTIME_NAVIGATION_PANEL,e))},className:n5().meetingControl_editAgenda,dataTestid:"meeting-item-list__agenda-btn",ariaLabel:c,children:c})]})};var n8=n(800832),re=n.n(n8);let rt="meeting-list-button",rn={root:rt,button:`${rt}__button`,list:`${rt}__list`},rr=e=>{let{isFacilitator:t=!1,a11y:n,children:r}=e,[a,i]=Y.useState(!1),o=(0,N.I0)(),{t:s}=(0,en.I)(U.a),l=Y.useCallback(()=>{i(!1),o((0,ex.F5)()),o((0,es.f_)(e_.x.framesList,!1))},[o]),d=Y.useCallback(()=>{i(!0),o((0,ex.F5)()),o((0,es.f_)(e_.x.framesList,!0))},[o]);return(0,y.jsx)(t1,{label:s("showtime.controls.frameList"),renderToggle:e=>(0,y.jsxs)(ec.u,{children:[(0,y.jsx)(ec.u.Trigger,{asChild:!0,children:(0,y.jsx)(ed.h.Trigger,{asChild:!0,children:(0,y.jsx)(el.o.Item,{asChild:!0,unstyled:!1,children:(0,y.jsx)("button",{id:"agendaItemList",type:"button","data-testid":rn.button,"aria-label":n["aria-label"],className:re().button,"aria-expanded":e,"aria-haspopup":"dialog",children:r})})})}),(0,y.jsx)(ec.u.Content,{children:s("showtime.controls.frameList")})]}),renderContent:()=>(0,y.jsx)(n7,{isFacilitator:t,dataTestid:rn.list}),isOpen:a,onOpen:d,onClose:l})};var ra=n(29931),ri=n.n(ra);let ro=e=>{let{className:t,children:n,dataTestid:r}=e;return(0,y.jsx)("div",{className:K()(ri().bottomBarLabel,t),"data-testid":r,children:n})};var rs=n(180729),rl=n.n(rs);let rd=e=>{let{text:t,className:n,dataTestid:r}=e;return(0,y.jsx)("p",{className:K()(rl().bottomBarLabelSection,n),"data-testid":r,children:t})};var rc=n(274267),ru=n.n(rc);let rp="meeting-active-item-bar",rm={root:rp,itemNumber:`${rp}__itemNumber`,itemTime:`${rp}__itemTime`},rh=()=>{let{t:e}=(0,en.I)(U.a),t=(0,N.v9)(nh.Tk.activeAgendaItemPositionSelector),n=(0,N.v9)(nh.Tk.agendaItemCountSelector),r=(0,N.v9)(nh.Tk.activeAgendaItemTimeLeftSelector),a=void 0!==r?n$(r):"",i=void 0!==r&&r<0;return void 0===t?null:(0,y.jsxs)(ro,{className:ru().container,dataTestid:rm.root,children:[(0,y.jsx)(rd,{text:e("showtime.controls.frameNavigation",{current:t,total:n}),className:ru().activeItemNumber,dataTestid:rm.itemNumber}),(0,y.jsx)(rd,{text:a,className:K()({[ru().overtime]:i}),dataTestid:rm.itemTime})]})},rg=e=>!["mouse","touch","pen"].includes(nQ(e.nativeEvent)),r_=e=>{let{current:t,total:n,prevItemButtonRef:r,nextItemButtonRef:a}=e,i=(0,Y.useRef)(null);(0,Y.useEffect)(()=>{i.current&&(i.current.focus(),i.current=null)},[i.current]);let o=(0,Y.useCallback)(e=>{rg(e)&&t===n-1&&(i.current=r.current)},[i,t,r,n]);return{onPrevClick:(0,Y.useCallback)(e=>{rg(e)&&2===t&&(i.current=a.current)},[i,t,a]),onNextClick:o}},rf=()=>{let e=(0,N.v9)(ea.vO)??0,t=(0,N.v9)(ea.ll);return{current:e,next:Math.min(e+1,t),previous:Math.max(e-1,1),total:t}};var rE=n(856472);let rv={nextButton:"meeting-facilitation-bar__next",prevButton:"meeting-facilitation-bar__prev"};var rI=((g={}).PREVIOUS="previous",g.NEXT="next",g.LIST="list",g);let rb={placement:"bottom",width:276,body:{content:""}},rx=e=>{let{isFacilitator:t,isNavigationEnabled:n,type:r}=e,a=(0,N.I0)(),{t:i}=(0,en.I)(U.a),o=(0,Y.useRef)(null),s=(0,Y.useRef)(null),l=(0,rE.p)(),d=(0,N.v9)(e=>(0,ea.r3)(e,l)),c=(0,N.v9)(e=>(0,ea.ly)(e,l)),{current:u,next:p,previous:m,total:h}=rf(),{onNextClick:g,onPrevClick:_}=r_({current:u,total:h,prevItemButtonRef:o,nextItemButtonRef:s}),f=(0,Y.useCallback)(e=>{a((0,nP.Xp)(F.T6.NAVIGATION_BAR_ARROWS)),a((0,nP.KC)(nQ(e.nativeEvent))),_(e)},[a,_]),E=(0,Y.useCallback)(e=>{a((0,nP.lp)(F.T6.NAVIGATION_BAR_ARROWS)),a((0,nP.KC)(nQ(e.nativeEvent))),g(e)},[a,g]),v=(0,G.HY)().getUITipComponent();return(0,y.jsxs)(y.Fragment,{children:["previous"===r&&n&&(0,y.jsxs)(ec.u,{children:[(0,y.jsx)(ec.u.Trigger,{asChild:!0,children:(0,y.jsx)(el.o.Icon,{ref:o,"aria-label":i("showtime.controls.a11y.prevFrame",{frameNumber:m,total:h}),"data-testid":rv.prevButton,onClick:f,disabled:null==d,children:(0,y.jsx)(eu.IconArrowLeft,{})})}),(0,y.jsx)(ec.u.Content,{children:i("showtime.controls.prevFrame")})]}),"list"===r&&(0,y.jsxs)(rr,{isFacilitator:t,a11y:{"aria-label":i("showtime.controls.a11y.frameNavigation",{current:u??0,total:h})},children:[(0,y.jsx)(v,{id:er.Y.SHOWTIME_MEETING_NAVIGATION_SWITCH_FRAMES,config:rb}),(0,y.jsx)(rh,{})]}),"next"===r&&n&&(0,y.jsxs)(ec.u,{children:[(0,y.jsx)(ec.u.Trigger,{asChild:!0,children:(0,y.jsx)(el.o.Icon,{ref:s,"aria-label":i("showtime.controls.a11y.nextFrame",{frameNumber:p,total:h}),"data-testid":rv.nextButton,onClick:E,disabled:null==c,children:(0,y.jsx)(eu.IconArrowRight,{})})}),(0,y.jsx)(ec.u.Content,{children:i("showtime.controls.nextFrame")})]})]})};var rT=n(171417),rS=n.n(rT),rA=n(423304);let rw=new Map,ry=e=>{let[t,n]=(0,Y.useState)(rw.get(e));return(0,Y.useEffect)(()=>{let r=!0;return void 0===t&&(0,rA.OR)().getTreatment(e).then(t=>{rw.set(e,t),r&&n(t)}).catch(()=>{rw.set(e,"control"),r&&n("control")}),()=>{r=!1}},[t]),t};var rN=n(895297),rC=n(433723);let rR=(0,rC.zo)("div",{color:"$gray-500","& .rtb-toggle.rtb-toggle--medium":{marginTop:0,marginBottom:16},"& .rtb-toggle.rtb-toggle--medium .rtb-toggle__text":{color:"$gray-900"}}),rO=(0,rC.zo)("div",{display:"grid",gap:"$50",gridTemplateColumns:"repeat(6, 1fr)"}),rM=e=>{let{isEnabled:t=!0,isNested:n=!1,onReaction:r}=e,a="on"===ry("bc_reaction_toggle"),i=(0,rA.bY)();return n?(0,y.jsxs)(rR,{children:[a&&i({enabledReactions:t}),(0,y.jsx)(rO,{children:(0,y.jsx)(rN.t,{isEnabled:t,onEmotion:r})})]}):(0,y.jsx)(rN.t,{isEnabled:!0})},rk=e=>{let{dataTestid:t,isBeforeSeparator:n=!1,isBehindSeparator:r=!1,isNested:a=!1,onReaction:i}=e,o=(0,N.v9)(ee.ci);return a||o.enableSend?(0,y.jsx)(el.o.Item,{asChild:!0,children:(0,y.jsx)("div",{tabIndex:-1,"data-testid":t,className:K()(rS().reactionsContainer,{[rS().beforeSeparator]:n,[rS().behindSeparator]:r,[rS().isNested]:a}),children:(0,y.jsx)(rM,{isEnabled:o.enableSend,isNested:a,onReaction:i})})}):null};var rD=n(256786),rP=n.n(rD);let rj="meeting-reactions-wrapper",rL={button:`${rj}__button`,emojis:`${rj}__reactions`,sounds:`${rj}__sounds`,soundsDropdown:`${rj}__soundsDropdown`},rF=()=>{let e=(0,N.I0)(),{t}=(0,en.I)(U.a),[n,r]=(0,Y.useState)(!1),a=(0,G.Yd)().permissionChecker.canSendReactions(),i="showtime.controls.reactions.emojis",o=(0,Y.useCallback)(()=>{e((0,e$.Xc)())},[e]),s=(0,Y.useCallback)(e=>(0,y.jsxs)(ec.u,{children:[(0,y.jsx)(ec.u.Trigger,{asChild:!0,children:(0,y.jsx)(ed.h.Trigger,{asChild:!0,children:(0,y.jsx)(el.o.Icon,{"aria-label":t(i),"aria-haspopup":"dialog","aria-expanded":e,"data-testid":rL.button,onClick:e?void 0:o,active:e,children:(0,y.jsx)(eu.IconConeSerpentine,{})})})}),(0,y.jsx)(ec.u.Content,{children:t(i)})]}),[o,t,i]),l=(0,Y.useCallback)(()=>{r(!1),e((0,es.f_)(e_.x.reactions,!1))},[e]),d=(0,Y.useCallback)(()=>{r(!0),e((0,es.f_)(e_.x.reactions,!0))},[e]);return(0,y.jsx)(t1,{label:t("showtime.controls.soundboard"),renderToggle:s,renderContent:()=>a?(0,y.jsx)("div",{className:K()(rP().meetingReactionsContainer),children:a&&(0,y.jsx)(rk,{dataTestid:rL.emojis,isNested:!0,onReaction:()=>r(!1)})}):null,onClose:l,onOpen:d,isOpen:n})},rU=()=>{let{t:e}=(0,en.I)(U.a),t=(0,N.I0)(),n=(0,Y.useCallback)(()=>{t((0,es.sT)(F.T6.SHOWTIME_NAVIGATION_PANEL))},[t]);return(0,y.jsxs)(ec.u,{children:[(0,y.jsx)(ec.u.Trigger,{asChild:!0,children:(0,y.jsx)(el.o.Item,{asChild:!0,css:{marginLeft:"2px",marginRight:"10px"},children:(0,y.jsx)(eB.z,{id:"stop-meeting",variant:"danger",size:"medium",onPress:n,"data-testid":"meeting-facilitation-bar__stop",children:e("showtime.meetingControls.stop")})})}),(0,y.jsx)(ec.u.Content,{children:e("showtime.meetingControls.stopTooltip")})]})},rB={placement:"bottom",width:276,body:{content:""}},rG=e=>{let{enableNavigation:t=!1,enableSessionStop:n=!1,cursorController:r}=e,a=(0,N.I0)(),i=(0,N.v9)(eo.l),o=(0,N.v9)(Q.gC),s=(0,N.v9)(ea.RJ),l=(0,Y.useCallback)(()=>{!0===i&&a((0,ei.K0)())},[i,a]),{t:d}=(0,en.I)(U.a),c=s&&o?.sessionType!==X.JM.AD_HOC;(0,Y.useEffect)(()=>{a((0,es.g$)(t&&c,n))},[a,t,n,c]),tV((0,G.E4)(),r);let u=tG();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)((0,G.HY)().getUITipComponent(),{id:er.Y.SHOWTIME_FACILITATION_BAR_MODE_TOOLS_BUTTON,config:rB}),(0,y.jsx)(ev,{onFirstRender:l,a11y:{"aria-label":d("showtime.controls.a11y.facilitatorBar")},children:{previous:c?()=>(0,y.jsx)(rx,{type:rI.PREVIOUS,isFacilitator:!0,isNavigationEnabled:t}):void 0,list:c?()=>(0,y.jsx)(rx,{type:rI.LIST,isFacilitator:!0,isNavigationEnabled:t}):void 0,next:c?()=>(0,y.jsx)(rx,{type:rI.NEXT,isFacilitator:!0,isNavigationEnabled:t}):void 0,bottomNavigation:()=>(0,y.jsx)(nD,{}),reactions:()=>(0,y.jsx)(rF,{}),comments:u?()=>(0,y.jsx)(eb,{}):void 0,attendees:()=>(0,y.jsx)(tB,{attendeesLength:o?.participants.length}),preferences:()=>(0,y.jsx)(eP,{}),stopMeeting:n?()=>(0,y.jsx)(rU,{}):void 0}})]})},rW=(0,rC.zo)("div",{display:"flex",alignItems:"center",button:{width:"104px",minWidth:"92px",marginLeft:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",height:"36px"}});var rH=n(789073);let rV=(0,rC.zo)(eu.IconHand,{color:"$white"}),rz={raiseHandButton:"raise-hand-button",lowerHandButton:"lower-hand-button",raiseHandText:"raise-hand-text",lowerHandText:"lower-hand-text"},rZ=()=>{let{myUserId:e}=(0,rA.KD)(),[t,n]=(0,Y.useState)(!1),r=()=>{(0,rA.JD)().raiseHand(),n(!0)},{t:a}=(0,en.I)(rH.$),i=()=>{(0,rA.JD)().lowerHand(ez.vF.showtimeParticipantBar),n(!1)};return(0,Y.useEffect)(()=>{let t=t=>{let{raisedHands:r}=t;n(!!r.find(t=>{let{senderUserId:n}=t;return n?.toString()===e?.toString()}))};return(0,rA.JD)().reactionsUpdated.add(t),()=>{(0,rA.JD)().reactionsUpdated.remove(t)}},[e]),(0,y.jsx)(rW,{children:(0,y.jsxs)(ec.u,{children:[(0,y.jsx)(ec.u.Trigger,{asChild:!0,children:(0,y.jsx)(eB.z,{size:"large",onClick:()=>t?i():r(),variant:t?"primary":"ghost",children:t?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(eB.z.Label,{"data-testid":rz.lowerHandText,children:a("reactions.raiseHand.lower")}),(0,y.jsx)(eB.z.IconSlot,{"data-testid":rz.lowerHandButton,children:(0,y.jsx)(rV,{})})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(eB.z.Label,{"data-testid":rz.raiseHandText,children:a("reactions.raiseHand.raise")}),(0,y.jsx)(eB.z.IconSlot,{"data-testid":rz.raiseHandButton,children:(0,y.jsx)(eu.IconHand,{})})]})})}),(0,y.jsx)(ec.u.Content,{children:a(t?"reactions.raiseHand.lowerHandTooltip":"reactions.raiseHand.raiseHandTooltip")})]})})},rK=e=>{let{usersCursorService:t,cursorsUpdated:n,leaderClientId:r}=e,[a,i]=(0,Y.useState)(t.getShowCursors()),o=(0,Y.useRef)(!1);(0,Y.useEffect)(()=>{let e=e=>{i(e)};return t.collaboratorsCursorsSwitched.add(e),()=>{t.collaboratorsCursorsSwitched.remove(e)}},[t]),(0,Y.useEffect)(()=>{if(a||null==r)return tW.noop;let e=(0,tW.debounce)(a=>{0===a.compare(r)&&(t.hideInactiveShownCursor(),o.current=!0,n.remove(e),n.add(i))},5e3),i=a=>{0===a.compare(r)&&(t.showInactiveShownCursor(),o.current=!1,n.remove(i),n.add(e))};return n.add(e),()=>{o.current&&(t.showInactiveShownCursor(),o.current=!1),e.cancel(),n.remove(e),n.remove(i)}},[a,r])};var rY=n(79003),rq=n(102183),r$=n.n(rq),rJ=n(634318),rX=n(723153),rQ=n.n(rX),r0=n(928316);let r1=e=>{let{className:t,children:n}=e,r=(0,Y.useMemo)(()=>window.document.createElement("div"),[]);return(0,Y.useEffect)(()=>{r.className=t??""},[r,t]),(0,Y.useEffect)(()=>(window.document.body.appendChild(r),()=>{window.document.body.removeChild(r)}),[r]),(0,r0.createPortal)(n,r)},r2=r$().bind(rQ()),r4=(0,y.jsx)("div",{className:r2("icon-container"),children:(0,y.jsx)(e0.l,{className:r2("icon"),children:(0,y.jsx)(rY.Z,{})})}),r3=(0,Y.memo)(e=>{let{onPress:t,userName:n,active:r}=e,{t:a}=(0,en.I)(U.a),i=n?a("showtime.controls.returnTo",{name:n.split(" ")[0],interpolation:{escapeValue:!1}}):a("showtime.controls.returnToPresenter");return(0,y.jsx)(rJ.Z,{in:r,unmountOnExit:!0,timeout:900,nodeRef:(0,Y.useRef)(null),classNames:r2("follow-tip-container"),children:(0,y.jsx)(r1,{className:r2("follow-tip-position"),children:(0,y.jsx)(eX.r,{hmTapDown:t,children:(0,y.jsxs)("button",{"data-testid":"meeting-participant-bar__returnActiveFrame",className:r2("follow-tip"),type:"button",children:[r4,(0,y.jsx)("div",{className:r2("text-tip"),children:i})]})})})})});var r6=n(726219),r5=n.n(r6);let r9="showtime-participant-bar",r7={root:r9,leaveShowtime:`${r9}__leaveShowtime`,reactions:`${r9}__reactions`,raiseHand:`${r9}__raiseHand`,dropdown:`${r9}__dropdown`},r8=e=>{let{cursorsUpdated:t,onlineUsersService:n}=e,r=(0,N.I0)(),{t:a}=(0,en.I)(U.a),i=(0,N.v9)(Q.gC),o=(0,N.v9)(Q.vS),s=(0,N.v9)(e9.tQ),l=(0,N.v9)(Q.l),d=(0,Y.useMemo)(()=>void 0!==o&&s.some(e=>e===o.userId),[o,s]),[c,u]=(0,Y.useState)(!1),p=!(0,G.lZ)().isPrivateModeEnabledForAnonymousUser,m=l&&!d&&p,h=(0,N.v9)(eo.l),g=(0,Y.useCallback)(()=>{!0===h&&r((0,ei.K0)())},[h,r]),_=(0,G.Yd)().permissionChecker.canSendReactions(),f=(0,G.Yd)().permissionChecker.canRaiseHands(),E=o?n.getClientIdByUserId(o?.userId):null;rK({usersCursorService:(0,G.E4)(),cursorsUpdated:t,leaderClientId:E}),(0,Y.useEffect)(()=>{g?.()},[g]),(0,Y.useEffect)(()=>{l&&r((0,es.ut)())},[l,r]);let v=(0,Y.useCallback)(()=>{r((0,es.Di)())},[r]),I=(0,Y.useCallback)(()=>{r((0,es.qc)())},[r]),b=(0,G.Yd)().permissionChecker.canComment(),x=tG(),T=a("showtime.controls.a11y.audienceBar"),S=f?e=>(0,y.jsxs)("span",{className:r5().audienceBar__item,children:[(0,y.jsx)(rZ,{}),!e&&(0,y.jsx)(el.o.Separator,{asChild:!0,children:(0,y.jsx)("div",{className:r5().item__separator})})]}):void 0,A=_?e=>(0,y.jsxs)("span",{className:r5().audienceBar__item,children:[(0,y.jsx)(rk,{dataTestid:r7.reactions,isBehindSeparator:f,isBeforeSeparator:!0}),!e&&(0,y.jsx)(el.o.Separator,{asChild:!0,children:(0,y.jsx)("div",{className:r5().item__separator})})]}):void 0,w=b&&x?e=>(0,y.jsxs)("span",{className:r5().audienceBar__item,children:[(0,y.jsx)(eb,{}),!e&&(0,y.jsx)(el.o.Separator,{asChild:!0,children:(0,y.jsx)("div",{className:r5().item__separator})})]}):void 0,C=()=>(0,y.jsx)(tB,{attendeesLength:i?.participants.length}),R=()=>(0,y.jsx)(eB.z,{variant:"danger",size:"medium",onPress:v,"data-testid":r7.leaveShowtime,css:{marginRight:"10px"},children:a("showtime.controls.leave")}),O=(e,t)=>e?(0,y.jsx)(em.o,{scalingId:t,children:e(!1)}):(0,y.jsx)(y.Fragment,{}),M=(e,t)=>e?(0,y.jsx)(em._,{scalingId:t,children:e(!0)}):(0,y.jsx)(y.Fragment,{});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(r3,{onPress:I,active:m,userName:o?.userInfo?.name}),(0,y.jsx)(eh.L,{rules:[{id:"raise-hand",action:"hide"},{id:"emojis",action:"hide"},{id:"comments",action:"hide"},{id:"attendees",action:"hide"},{id:"leave",action:"hide"},{id:"dropdown",action:"hide"},{id:"dropdown",action:"show",whenHidden:"raise-hand"},{id:"dropdown-leave",action:"show",whenHidden:"leave"},{id:"dropdown-attendees",action:"show",whenHidden:"attendees"},{id:"dropdown-comments",action:"show",whenHidden:"comments"},{id:"dropdown-emojis",action:"show",whenHidden:"emojis"},{id:"dropdown-raise-hand",action:"show",whenHidden:"raise-hand"}],children:(0,y.jsx)(eg.M,{scalingId:"showtime-bottom-bar",children:(0,y.jsxs)(el.o,{"data-testid":r7.root,"aria-label":T,children:[(0,y.jsx)(em.o,{scalingId:"dropdown",children:(0,y.jsxs)(ed.h,{onOpen:()=>{u(!0),r((0,es.f_)(e_.x.limitedApps,!0))},onClose:()=>{u(!1),r((0,es.f_)(e_.x.limitedApps,!1))},open:c,children:[(0,y.jsx)(ed.h.Trigger,{asChild:!0,children:(0,y.jsx)(el.o.Icon,{active:c,"data-testid":r7.dropdown,children:(0,y.jsx)(eu.IconChevronUpDouble,{})})}),(0,y.jsxs)(ed.h.Content,{sideOffset:8,children:[(0,y.jsxs)(ep.k,{align:"center",justify:"evenly",children:[M(S,"dropdown-raise-hand"),M(w,"dropdown-comments"),M(C,"dropdown-attendees"),M(R,"dropdown-leave")]}),(0,y.jsx)(ep.k,{align:"center",justify:"evenly",children:M(A,"dropdown-emojis")})]})]})}),O(S,"raise-hand"),O(A,"emojis"),O(w,"comments"),O(C,"attendees"),O(()=>(0,y.jsx)(tK,{children:(0,y.jsx)(eP,{})}),"preferences"),O(R,"leave")]})})})]})};var ae=n(896360),at=n(434451),an=n(472630),ar=n(515819),aa=n(726079),ai=n(458283),ao=n(414973),as=n(39885),al=n(890034),ad=n.n(al),ac=n(529059),au=n(333861),ap=n(222646),am=n(574217),ah=n(887804),ag=n(584297),a_=n(840706),af=n(648346);let aE=()=>{let{panelStackApi:e}=(0,a_.getInjectionPoint)(ag.Q)(),t=(0,af.KO)(e.panelsState);return{total:t.total,LEFT:{total:t.LEFT.total,pinned:t.LEFT.pinned,unpinned:t.LEFT.unpinned},RIGHT:{total:t.RIGHT.total,pinned:t.RIGHT.pinned}}},av=e=>e===q.ic.SHOWTIME_PARTICIPANT,aI=e=>{let{isLeader:t,viewMode:n,isFrameSideOpened:r}=e,[a,i]=(0,Y.useState)(!1),o=(0,N.v9)(Q.l),s=(0,N.v9)(Q.Fm),{RIGHT:{total:l}}=aE(),d=(e,t)=>{e===am.W.CATALOG&&i(t)},c=e=>{i(void 0!==e)};(0,Y.useEffect)(()=>{let e=(0,G.ny)(),t=ah._Y()();return e.add(c),t.panelVisibilityChanged.add(d),()=>{e.remove(c),t.panelVisibilityChanged.remove(d)}});let u=au.h7.isTouchSupported&&!au.h7.desktop;return!(0,ap.y)()&&!u&&av(n)&&(t||!o)&&!s&&!a&&!r&&!l};var ab=n(3400),ax=n(634834),aT=n(26966),aS=n(981407);let aA=e=>e===q.ic.PRESENTATION_FULLSCREEN||e===q.ic.PRESENTATION,aw=e=>e===q.ic.NAVIGATION_ONLY,ay=e=>e===q.ic.OFFLINE,aN=(e,t,n)=>t===X.JM.AD_HOC||(t===X.JM.STRUCTURED?e:t===X.JM.ADVANCED&&(!(Object.values(n).length>0)||e)),aC=e=>{let{isShowtimeRunning:t,viewMode:n,isParticipant:r,isLeader:a,sessionType:i,hasActiveAgendaItem:o,agendaItems:s={}}=e;return!ay(n)&&(0,at.fk)()&&t&&!aA(n)&&!aw(n)&&aN(o,i,s)&&(r||a)},aR=()=>{let e=(0,aT.m)(),[t]=(0,$.eP)(),{isLayoutVisible:n}=(0,$.lm)(),{RIGHT:{total:r}}=aE(),a=(0,N.v9)(Q.fc),i=(0,N.v9)(Q.d1),[o,s]=(0,Y.useState)(!1),[l,d]=(0,Y.useState)(!1),[c,u]=(0,Y.useState)(!1),p=(0,N.v9)(ee.aL),m=(0,N.v9)(Q.gC),h=(0,N.v9)(et.CB),g=(0,N.v9)(et.g4),_=(0,Y.useMemo)(at.JK,[]),f=p&&i,E=(0,ae.yi)()===J.jd.SHOWTIME,v=!n&&!f&&!E&&!r;(0,ac.p)(aI({viewMode:t,isLeader:i,isFrameSideOpened:(0,aS.h4)()})),(0,Y.useEffect)(()=>{let e=void 0!==m,t=e&&(0,at.IH)(m);s(e),d(t),u(t)},[m,i]),(0,Y.useEffect)(()=>{let t=(0,ab.$8)();a&&!(0,ai.Z)().reactionUiMounted&&((0,ai.Z)().registerUI(m),e&&t.setAvailability(ax.X,!0)),!a&&(0,ai.Z)().reactionUiMounted&&((0,ai.Z)().deregisterUI(),e&&t.setAvailability(ax.X,!1))});let I=aC({isShowtimeRunning:o,viewMode:t,isParticipant:a,isLeader:i,sessionType:m?.sessionType,hasActiveAgendaItem:void 0!==g,agendaItems:h}),b=m?.sessionType!==X.JM.STRUCTURED;return I?(0,y.jsx)("div",{className:K()({[ad().root]:!0,[ad().root_hidden]:v,[ad().root_limited]:b}),"data-testid":"showtime-facilitation-bar-wrapper","aria-hidden":v,onClick:()=>{(0,ao.z)().clearSelection()},children:(0,y.jsx)(as.a,{children:i?(0,y.jsx)(rG,{enableSoundboard:_,enableNavigation:l,enableSessionStop:c,cursorController:(0,an.ZP)()}):(0,y.jsx)(r8,{cursorsUpdated:ar.t,onlineUsersService:(0,aa.Z)()})})}):null};var aO=n(765439),aM=n(14813),ak=n(662498);function aD(){return(aD=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var aP=(0,Y.forwardRef)(function(e,t){return Y.createElement("svg",aD({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",ref:t},e),_||(_=Y.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6 5h12V3a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H6v2a1 1 0 0 1-2 0v-2H2a1 1 0 0 1 0-2h2V7H2a1 1 0 1 1 0-2h2V3a1 1 0 1 1 2 0v2zm0 2v10h12V7H6z"})))});function aj(){return(aj=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var aL=(0,Y.forwardRef)(function(e,t){return Y.createElement("svg",aj({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),f||(f=Y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 5.5h14v1H7a2 2 0 0 0-2 2v6H4v-9Zm0 11h1v2a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2v-1a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Zm16-8H7v10h13v-10Zm-7.5 8a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2Z",fill:"currentColor"})))}),aF=n(826743),aU=n(549728),aB=n.n(aU);let aG=n.p+"475f52f825debae3.svg";var aW=n(165180),aH=n(497299);let aV="agenda-welcome",az={root:aV,addOneFrameButton:`${aV}__addOne`,addAllFramesButton:`${aV}__addAll`,openTemplatesButton:`${aV}__openTemplates`,pickOneFrameButton:`${aV}__pickOne`,title:`${aV}__title`,image:`${aV}__image`},aZ=e=>{let{canEditAgenda:t=!1}=e,{t:n}=(0,en.I)(U.a),r=(0,N.I0)(),a=(0,N.v9)(ey.EN),i=(0,aH.g)(aG,aW),o=(0,Y.useCallback)(()=>{r((0,nP.MC)(F.T6.AGENDA_WELCOME_ADD_ONE))},[r]),s=(0,Y.useCallback)(()=>{r((0,ew.E_)())},[r]),l=(0,Y.useCallback)(()=>{r((0,nP.HP)())},[r]);return(0,Y.useCallback)(()=>{r((0,nP.mG)())},[r]),(0,Y.useEffect)(()=>{a||r((0,ew.A2)())},[r,a]),(0,y.jsxs)("div",{className:aB().showtimeWelcome,"data-testid":az.root,children:[(0,y.jsxs)("div",{className:aB().showtimeWelcome__body,"data-scrollable-element":"true",children:[(0,y.jsx)(e0.l,{size:"none",dataTestId:az.image,className:aB().prepareAndRunActivitiesIcon,href:i}),(0,y.jsxs)(ep.k,{direction:"column",gap:50,children:[(0,y.jsx)(aM.X6,{"data-testid":az.title,level:3,styledAs:"h4",children:n("showtime.agenda.welcomeScreen.description.title")}),(0,y.jsx)(aM.xv,{children:n("showtime.agenda.welcomeScreen.description.subTitle")})]})]}),t&&(0,y.jsxs)(ep.k,{direction:"column",gap:100,children:[a?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(aF.z,{onClick:l,theme:"primary",size:"m","data-testid":az.addAllFramesButton,icon:(0,y.jsx)(aL,{}),fluid:!0,children:n("showtime.agenda.addAllFramesBtn")}),null]}):(0,y.jsxs)(y.Fragment,{children:[null,(0,y.jsx)(aF.z,{onClick:o,theme:"primary",size:"m","data-testid":az.addOneFrameButton,icon:(0,y.jsx)(aP,{}),fluid:!0,children:n("showtime.agenda.createFrame")})]}),a&&(0,y.jsxs)(ep.k,{align:"center",justify:"center",children:[(0,y.jsx)(aF.z,{onClick:s,theme:"primary",view:"flat",size:"s","data-testid":az.pickOneFrameButton,className:aB().showtimeWelcome__plainButton,children:n("showtime.agenda.pickFrames")}),"\xa0",n("showtime.agenda.or"),"\xa0",(0,y.jsx)(aF.z,{onClick:o,theme:"primary",view:"flat",size:"s","data-testid":az.addOneFrameButton,className:aB().showtimeWelcome__plainButton,children:n("showtime.agenda.createNewFrame")})]})]})]})};var aK=n(863060),aY=n.n(aK);let aq=e=>{let{currentSessionId:t}=e,{t:n}=(0,en.I)(U.a),r=tG(),a=Y.useRef(null);return(0,y.jsxs)("div",{className:K()(aY().showtimeSettings,{[aY().showtimeSettings__sparse]:r}),"data-testid":"showtime-settings",ref:a,children:[(0,y.jsx)("h4",{className:aY().showtimeTools__title,children:n("showtime.panel.settings.title")}),(0,y.jsx)(nm,{currentSessionId:t,statSource:"showtime_panel",contentRef:a})]})};var a$=n(6865),aJ=n(538267),aX=n(871564),aQ=n(255422),a0=n(561584),a1=n(775038),a2=n(6455);let a4={root:"showtime-controls",contextMenuButton:"showtime-controls__context-menu-button",contextMenuOptionList:"showtime-controls__context-menu-option-list",clearAll:"showtime-controls__clear-all",organizeFrames:"showtime-controls__organize"},a3=e=>{let{isShowtimeSessionRunning:t,startSession:n,onSetViewMode:r,onFramesOrganize:a,onCreateHandoffClick:i,viewMode:o}=e,{t:s}=(0,en.I)(U.a),l=(0,N.I0)(),d=(0,Y.useCallback)(()=>{l((0,nP.ZH)())},[l]),c=(0,a0.x)({onSetViewMode:r,viewMode:o}),u=[{id:"showtime-sm-clear-all",testId:a4.clearAll,text:s("showtime.footer.clearAll"),handler:d,hidden:!1,disabled:!1,disabledTooltip:"",icon:(0,y.jsx)(nS,{})},c,{id:"showtime-agenda-organize",testId:a4.organizeFrames,text:s("showtime.actions.organizeFrames"),handler:a,hidden:!1,disabled:!1,disabledTooltip:"",icon:(0,y.jsx)(a2.Z,{})},{id:"showtime-add-takeover-button",text:s("showtime.actions.shortcutAdd"),handler:i,hidden:void 0===i,disabled:!1,disabledTooltip:"",icon:(0,y.jsx)(eu.IconArrowsClockwiseY,{})}];return(0,y.jsxs)(a1.p,{"data-testid":a4.root,children:[(0,y.jsx)(aQ.F,{onStart:n}),!t&&(0,y.jsx)(a$.E,{dataTestid:a4.contextMenuOptionList,dropdownToggle:(0,y.jsx)(aJ.g,{dataTestid:a4.contextMenuButton}),children:u.map(e=>(0,y.jsx)(aX.Z,{item:e},e.id))})]})};var a6=n(678049),a5=n.n(a6),a9=n(48633),a7=n(897910),a8=n(283153),ie=n(719601),it=n(956053),ir=n(735991),ia=n(369696);let ii=e=>{let[t,n]=(0,Y.useState)(void 0),r=(0,G.w0)(),a=(0,Y.useCallback)(()=>{let t=r.getFramePreviewByToken(e.token);n(void 0!==t?{...t}:void 0)},[e.token,r]);return(0,Y.useEffect)(()=>{a()},[]),(0,Y.useEffect)(()=>{let t=r.addFramePreviewUpdateListener(t=>{t.token.toString()===e.token&&a()});return()=>{t.detach()}}),t};var io=n(216769),is=n.n(io);let il=e=>{let{frame:t,useClone:n=!1}=e,r=ii(t),a=r?.needGenerate??!0;return(0,y.jsx)("div",{className:is().root,children:a?(0,y.jsx)(ia.x,{className:"loader"}):(0,y.jsx)(nj.t,{preview:r,className:is().preview,useClone:n})})};var id=n(190138),ic=n(639455),iu=((E={}).RENAME="rename",E.ADD_FRAME_BELOW="add-frame-below",E.DELETE="delete",E.PLAY_FRAME="play-frame",E.MOVE_UP="move-up",E.MOVE_DOWN="move-down",E.SHOW="show",E.HIDE="hide",E);let ip="agenda-item__delete",im=e=>{let{t}=(0,en.I)(U.a),{canEditFrames:n,frameIsHidden:r}=e,a={hidden:r,disabled:!n,disabledTooltip:t("showtime.contextMenu.noEditPermission.text")},i=(0,ic.V)({rename:{...a,id:"rename",testId:"agenda-item__rename",label:t("showtime.contextMenu.rename.text"),handler:()=>{}},delete:{...a,id:"delete",testId:ip,label:t("showtime.contextMenu.remove.text"),handler:e.onDelete},addFrameBelow:{...a,id:"add-frame-below",testId:"agenda-item__add-frame-below",label:t("showtime.contextMenu.addFrameBelow.text"),handler:e.onAddBelow}});return[{...a,id:"delete",testId:ip,text:t("showtime.contextMenu.remove.text"),disabled:!n,handler:e.onDelete,icon:(0,y.jsx)(eu.IconMinus,{})},i.rename,{...a,id:r?"show":"hide",text:t(r?"showtime.contextMenu.show.text":"showtime.contextMenu.hide.text"),label:t(r?"showtime.contextMenu.show.text":"showtime.contextMenu.hide.text"),icon:r?(0,y.jsx)(eu.IconEyeOpen,{}):(0,y.jsx)(eu.IconEyeClosed,{}),handler:r?e.onShow:e.onHide},i.addFrameBelow,{...a,id:"play-frame",testId:"agenda-item__start",text:t("showtime.contextMenu.playButton.text"),icon:(0,y.jsx)(eu.IconPresentationPlay,{}),handler:e.onPlayFrame},{...a,icon:(0,y.jsx)(eu.IconArrowUp,{}),id:"move-up",text:t("showtime.contextMenu.moveUp.text"),label:t("showtime.contextMenu.moveUp.text"),handler:e.onMoveUp},{...a,icon:(0,y.jsx)(eu.IconArrowDown,{}),id:"move-down",text:t("showtime.contextMenu.moveDown.text"),label:t("showtime.contextMenu.moveDown.text"),handler:e.onMoveDown}]};var ih=((v={}).TOP_MENU="top_menu",v.CONTEXT_MENU="context_menu",v);(I={}).NONE_SELECTED="agenda-sidebar__bulk-actions-selected-none",I.SOME_SELECTED="agenda-sidebar__bulk-actions-selected-some",I.ALL_SELECTED="agenda-sidebar__bulk-actions-selected-all",I.DELETE="agenda-sidebar__bulk-actions-delete",I.SHOW="agenda-sidebar__bulk-actions-show",I.HIDE="agenda-sidebar__bulk-actions-hide",I.MOVE_UP="agenda-sidebar__bulk-actions-move-up",I.MOVE_DOWN="agenda-sidebar__bulk-actions-move-down";let ig=e=>e.handler,i_=e=>{let{source:t,framesCount:n,selectedFramesCount:r,allSelectedFramesVisible:a,allSelectedFramesHidden:i,canEditFrames:o,bulkActions:s}=e,{t:l}=(0,en.I)(U.a),d=l("showtime.contextMenu.noEditPermission.text"),c=r>0,u={hidden:!c,disabled:!o,disabledTooltip:d};return[{...u,id:"agenda-sidebar__bulk-actions-delete",text:l("showtime.contextMenu.remove.text"),label:l("showtime.contextMenu.remove.text"),icon:(0,y.jsx)(eu.IconMinus,{}),handler:ig({action:"agenda-sidebar__bulk-actions-delete",handler:s.onDelete,source:t,framesCount:n,selectedFramesCount:r})},{...u,id:iu.SHOW,hidden:!o||!c||a,text:l("showtime.contextMenu.show.text"),label:l("showtime.contextMenu.show.text"),icon:(0,y.jsx)(eu.IconEyeOpen,{}),handler:ig({action:"agenda-sidebar__bulk-actions-show",handler:s.onShow,source:t,framesCount:n,selectedFramesCount:r})},{...u,id:iu.HIDE,hidden:!o||!c||i,text:l("showtime.contextMenu.hide.text"),label:l("showtime.contextMenu.hide.text"),icon:(0,y.jsx)(eu.IconEyeClosed,{}),handler:ig({action:"agenda-sidebar__bulk-actions-hide",handler:s.onHide,source:t,framesCount:n,selectedFramesCount:r})},{...u,id:iu.MOVE_UP,text:l("showtime.contextMenu.moveUp.text"),label:l("showtime.contextMenu.moveUp.text"),icon:(0,y.jsx)(eu.IconArrowUp,{}),handler:ig({action:"agenda-sidebar__bulk-actions-move-up",handler:s.onMoveUp,source:t,framesCount:n,selectedFramesCount:r})},{...u,id:iu.MOVE_DOWN,text:l("showtime.contextMenu.moveDown.text"),label:l("showtime.contextMenu.moveDown.text"),icon:(0,y.jsx)(eu.IconArrowDown,{}),handler:ig({action:"agenda-sidebar__bulk-actions-move-down",handler:s.onMoveDown,source:t,framesCount:n,selectedFramesCount:r})}]},iE=e=>{let{frameIsSelected:t,framesCount:n,canEditFrames:r,selectedFramesCount:a,allSelectedFramesVisible:i,allSelectedFramesHidden:o,dropdownToggle:s,isContextMenuOpen:l,onOpen:d,onClose:c,onRename:u,bulkActions:p}=e,m=im(e),h=i_({source:ih.CONTEXT_MENU,framesCount:n,selectedFramesCount:a,allSelectedFramesVisible:i,allSelectedFramesHidden:o,canEditFrames:r,bulkActions:p}),g=t&&a>1?h:m,_=(0,Y.useRef)(null),f=(0,Y.useCallback)(e=>{_.current?.id===iu.RENAME&&(e.preventDefault(),u()),_.current=null},[u]),E=(0,Y.useCallback)((e,t)=>{(0,id.s)(t)||(_.current=t)},[]);return(0,y.jsx)(a$.E,{dataTestid:"agenda-item__bulk-actions-context-menu",isOpen:l,onOpen:d,onClose:c,dropdownToggle:s,onCloseAutoFocus:f,stopKeyDownPropagation:!0,children:g.map(e=>(0,y.jsx)(aX.Z,{item:e,selectedFramesCount:a,onClick:t=>E(t,e)},e.id))})};var iv=n(241485);let iI=()=>{let[e,t]=(0,Y.useState)(null);return{open:(0,Y.useCallback)(e=>{t(e),(0,G.w0)().setCanvasFocus(iv.P.CONTEXT_MENU)},[]),close:(0,Y.useCallback)(()=>{t(null),(0,G.w0)().setCanvasFocus(iv.P.FRAMES)},[]),frameId:e}};var ib=n(449855),ix=n(345490),iT=n(273938);let iS=()=>{let e=(0,N.v9)(ea.$3),t=(0,N.v9)(ey.wb),n=(0,N.v9)(et.CB),r=(0,N.v9)(ea.tE),a=(0,N.I0)(),i=(0,Y.useMemo)(()=>{let e=Object.values(t),r=Object.values(n);return e.reduce((e,t)=>{let{tokenizer:n}=t;return{...e,[n.token.toString()]:r.find(e=>{let{widgetId:t}=e;return 0===t.compare(n.id)})}},{})},[t,n]),o=(0,Y.useCallback)((e,t)=>{let n=e.map(e=>i[e].id.toString()),r=t.map(e=>i[e].id.toString());a((0,nP.Ao)(n,n.indexOf(r[0])))},[a,i]),s=(0,Y.useCallback)((t,n)=>{let a,o;let s=t.map(e=>i[e.token]?.id?.toString()).filter(Boolean),l=r.findIndex(e=>s[0]===e),d=n===ib.u.UP?l-1:l+s.length+1;n===ib.u.UP?(a=r.slice(0,d),o=r.slice(d)):(a=r.slice(0,d),o=r.slice(d+s.length)),(0,ix.xI)([...(0,ix.GW)(a,s),...s,...(0,ix.GW)(o,s)],e)},[r,e]),l=(0,Y.useCallback)(t=>{let n=t.map(e=>i[e.token]).filter(Boolean),r=(0,iT.L)();for(let{id:e,index:t}of n)a(nP.z_({id:e,token:`${r}-${t}`}));(0,G.Lh)().bulkDelete({token:r,items:n.map(e=>{let{id:t}=e;return t}),agendaId:e})},[a,i,e]);return{agendaItemByFrameTokens:i,reorderItems:o,moveAgendaItems:s,deleteAgendaItems:l}};function iA(){return(iA=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var iw=(0,Y.forwardRef)(function(e,t){return Y.createElement("svg",iA({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),b||(b=Y.createElement("rect",{x:4,y:4,width:6,height:6,rx:1,stroke:"currentColor",strokeWidth:2})),x||(x=Y.createElement("path",{d:"M17 3.836 19.92 10h-5.84L17 3.836Z",stroke:"currentColor",strokeWidth:2})),T||(T=Y.createElement("mask",{id:"apps-marketplace_svg__a",fill:"#fff"},Y.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17 13a1 1 0 0 0-1 1v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1Z"}))),S||(S=Y.createElement("path",{d:"M16 16v2h2v-2h-2Zm0 2h2v-2h-2v2Zm2 0v-2h-2v2h2Zm0-2h-2v2h2v-2Zm0-2a1 1 0 0 1-1 1v-4a3 3 0 0 0-3 3h4Zm0 2v-2h-4v2h4Zm-4 2h2v-4h-2v4Zm1-1a1 1 0 0 1-1 1v-4a3 3 0 0 0-3 3h4Zm-1-1a1 1 0 0 1 1 1h-4a3 3 0 0 0 3 3v-4Zm2 0h-2v4h2v-4Zm2 4v-2h-4v2h4Zm-1-1a1 1 0 0 1 1 1h-4a3 3 0 0 0 3 3v-4Zm-1 1a1 1 0 0 1 1-1v4a3 3 0 0 0 3-3h-4Zm0-2v2h4v-2h-4Zm4-2h-2v4h2v-4Zm-1 1a1 1 0 0 1 1-1v4a3 3 0 0 0 3-3h-4Zm1 1a1 1 0 0 1-1-1h4a3 3 0 0 0-3-3v4Zm-2 0h2v-4h-2v4Zm-2-4v2h4v-2h-4Zm1 1a1 1 0 0 1-1-1h4a3 3 0 0 0-3-3v4Z",fill:"currentColor",mask:"url(#apps-marketplace_svg__a)"})),A||(A=Y.createElement("rect",{x:4,y:14,width:6,height:6,rx:3,stroke:"currentColor",strokeWidth:2})))}),iy=n(179732),iN=n(742594),iC=n(427143),iR=n(845704),iO=n.n(iR);let iM=e=>{let t=parseFloat(e);return t<0||isNaN(t)?0:t>99?99:t},ik={AGENDA_ITEM_DURATION:"agenda-item__duration",AGENDA_ITEM_DURATION_INPUT:"agenda-item__duration-input",AGENDA_ITEM_TIME_PROGRESS:"agenda-item__time-progress",AGENDA_ITEM_TIME_PROGRESS_INDICATOR:"agenda-item__time-progress_indicator"},iD=e=>{let{agendaItem:t,frameIndex:n,onDurationChange:r,isOnlySelectedItem:a}=e,i=nK(t.duration??0),o=(0,N.v9)(e=>(0,iC.o4)(e,t?.timerData))??0,{t:s}=(0,en.I)(U.a),[l,d]=(0,Y.useState)(!1),c=nX(t.status),u=(0,Y.useCallback)(()=>!c||0===i||o<0?null:(0,y.jsx)(iN.J,{dataTestid:ik.AGENDA_ITEM_TIME_PROGRESS_INDICATOR,coloredProgress:!1,leftTime:o,duration:t.duration??0}),[c,o,i,t.duration]),p=(0,Y.useCallback)(e=>{e.stopPropagation()},[]),m=(0,Y.useCallback)(e=>{d(!1),r(nY(e))},[d,r]),h=(0,Y.useRef)(null);(0,Y.useEffect)(()=>{null!==h.current&&l&&h.current.select()},[l]);let g=(0,Y.useCallback)(e=>{m(iM(e))},[m]),_=(0,Y.useCallback)(e=>{e.stopPropagation(),["Enter","Escape"].includes(e.key)&&g(e.currentTarget.value)},[g]),f=(0,Y.useCallback)(e=>{g(e.target.value)},[g]),E=(0,Y.useCallback)(()=>{c||d(!0)},[c,d]);return(0,y.jsxs)(y.Fragment,{children:[c?0===i?(0,y.jsx)("div",{}):(0,y.jsx)("div",{className:iO().duration,children:(0,y.jsx)("span",{className:K()(iO().durationText,iO().durationTextRunning,o<0?iO().durationOvertime:""),"data-testid":ik.AGENDA_ITEM_TIME_PROGRESS,"aria-hidden":"true",children:n$(o)})}):l?(0,y.jsxs)("div",{className:iO().duration,children:[(0,y.jsx)("input",{"data-testid":ik.AGENDA_ITEM_DURATION_INPUT,ref:h,className:iO().durationInput,name:`${n}-duration`,type:"number",min:0,max:99,defaultValue:i,onMouseDown:p,onKeyDown:_,onBlur:f,title:s("showtime.agenda.duration.input.label")}),(0,y.jsx)("span",{"aria-hidden":"true",children:s("showtime.agenda.duration.unit")})]}):0!==i||a?(0,y.jsx)(eX.r,{hmTap:E,children:(0,y.jsxs)("div",{className:iO().duration,tabIndex:0,onFocus:E,children:[(0,y.jsx)("span",{className:K()(iO().durationText,iO().durationEditable),"data-testid":ik.AGENDA_ITEM_DURATION,"aria-hidden":"true",children:i}),(0,y.jsx)("span",{className:iO().durationUnits,"aria-hidden":"true",children:s("showtime.agenda.duration.unit")})]})}):(0,y.jsx)("div",{className:iO().duration}),(0,y.jsx)("span",{className:"sr-only",children:s("showtime.agenda.duration.value.label",{value:i,count:i})}),u()]})};var iP=n(712958),ij=n.n(iP);let iL="agenda-item__settings",iF=e=>{let{frameIndex:t,onDurationChange:n,agendaItem:r,isOnlySelectedItem:a=!1,agendaId:i}=e,o=(0,N.v9)(Q.gC),s=(0,N.I0)(),{t:l}=(0,en.I)(U.a),{t:d}=(0,en.I)(t0.F),c=(0,Y.useMemo)(()=>({[tY.p.COUNTDOWN]:{text:d("presettingApps.agendaPluginSelection.pluginName.timer"),icon:(0,y.jsx)(nI,{})},[tY.p.VOTING]:{text:d("presettingApps.agendaPluginSelection.pluginName.voting"),icon:(0,y.jsx)(nE,{})},[tY.p.BREAKOUT_ROOMS]:{text:d("presettingApps.agendaPluginSelection.pluginName.breakoutFrames"),icon:(0,y.jsx)(n_,{})},[tY.p.BOARD_RECORDING]:{text:"Talktrack",icon:(0,y.jsx)(eu.IconCircleCorners,{})},[tY.p.PRIVATE_MODE]:{text:d("presettingApps.agendaPluginSelection.pluginName.privateMode"),icon:(0,y.jsx)(eu.IconStickyEyeOpen,{})}}),[d]),u=ny(),p=(0,Y.useCallback)(e=>{void 0!==e&&e!==tq._.NONE&&u[e]&&s(tX.uG.startApp({plugin:e,itemId:r.id,settingsId:r.pluginSettingId?.toString(),action:nX(r.status??nJ.N.INITIAL)?tQ.l.START:tQ.l.SETTINGS,agendaItemId:r.id,options:e===tY.p.BREAKOUT_ROOMS?{contentCreationFrameId:r.widgetId}:void 0},void 0,o?{id:o.sessionId,type:o.sessionType,source:F.oH.PRESET}:void 0))},[o,u,s,r.id,r.pluginSettingId,r.status,r.widgetId]),m=nN({onPluginSelected:(0,Y.useCallback)(e=>{i&&(s((0,nP.$G)({id:r.id,plugin:e,agendaId:i})),p(e),s((0,iy.z)(F.j.ADD,e)))},[s,r.id,i,p]),onRemoveApp:(0,Y.useCallback)(()=>{i&&(s((0,iy.z)(F.j.REMOVE,r?.plugin)),s((0,nP.$G)({id:r.id,plugin:tq._.NONE,agendaId:i})))},[s,r.id,i,r?.plugin]),onEditApp:(0,Y.useCallback)(()=>{p(r?.plugin),s((0,iy.z)(F.j.EDIT,r?.plugin))},[p,r?.plugin,s]),selectedPlugin:r?.plugin}),h=(0,Y.useCallback)(()=>{if(r?.plugin){s((0,iy.z)(F.j.OPEN,r.plugin));return}s((0,iy.z)(F.j.OPEN))},[r?.plugin,s]),g=(0,Y.useCallback)(e=>{let n=void 0!==e?c[e]:void 0,r=`${iL}__plugin-${t+1}_${e}`;return n?(0,y.jsxs)("button",{type:"button",className:ij().appContainer,"data-testid":r,title:l("showtime.apps.selected.template",{appName:n.text}),children:[(0,y.jsx)(e0.l,{size:"medium",children:n.icon}),(0,y.jsx)("span",{className:ij().appContainerTitle,"aria-hidden":"true",children:n.text})]}):(0,y.jsx)("button",{type:"button",className:ij().appContainer,"data-testid":r,title:l("showtime.apps.noSelected"),children:(0,y.jsx)(e0.l,{size:"medium",dataTestId:"agenda-plugin-select",children:(0,y.jsx)(iw,{})})})},[c,t,l]),_=(0,Y.useCallback)(e=>(0,y.jsx)(a$.E,{dropdownToggle:g(e),stopKeyDownPropagation:!0,onOpen:h,children:m.map(e=>(0,y.jsx)(aX.Z,{item:e},e.id))}),[g,m,h]);return(0,y.jsxs)("div",{className:ij().settings,"data-testid":iL,children:[(0,y.jsx)(iD,{agendaItem:r,frameIndex:t,onDurationChange:n,isOnlySelectedItem:a}),_(r?.plugin)]})};var iU=n(586118),iB=((w={}).MEETING_PANEL="meeting_panel",w.MEETING_PANEL_BULK="meeting_panel_bulk",w);let iG=(e,t,n)=>{let r=(0,G.w0)(),a=e.map(e=>e.contentHidden!==t?r.getFrameWidgetByToken(e.token):void 0).filter(e=>void 0!==e);a.length>0&&r.setContentHidden(a,t,n)};var iW=n(278861),iH=n(667222),iV=n(51243),iz=n.n(iV);let iZ=e=>{let{agendaItem:t}=e,n=t.id??iW.d.ZERO,{t:r}=(0,en.I)(U.a);return N.v9(e=>et.oK(e,n.toString()))?.status===nJ.N.FINISHED?(0,y.jsx)(iH.V,{type:iH.Q.INDIGO,className:iz().completeTag,children:(0,y.jsx)("span",{"data-testid":"agenda-item__completed",children:r("showtime.agenda.completed.tag")})}):null},iK={AGENDA_ITEM_LIST:"agenda-list",FRAME_DRAG_OVERLAY:"agenda-list-drag-overlay",AGENDA_ITEM_ACTION_BUTTON:"agenda-action-button",AGENDA_ITEM:"agenda-item",AGENDA_ITEM_ACTIVE:"agenda-item--active"},iY={[a8.V.THUMBNAIL]:218,[a8.V.LIST]:100},iq=Y.memo(function(e){let{canEditAgendaItem:t,viewMode:n}=e,{t:r}=(0,en.I)(U.a),a=(0,N.v9)(ea.$3),i=(0,N.v9)(ea.xD)??a7.E.NONE,o=(0,N.v9)(ey.Ix),s=iI(),{agendaItemByFrameTokens:l,reorderItems:d,moveAgendaItems:c,deleteAgendaItems:u}=iS(),p=(0,N.I0)(),m=(0,Y.useRef)(null),{selectedTokens:h,toggleFrameSelection:g,isItemSelected:_}=(0,ie.m)({frames:o,onSelectFrame:(0,Y.useCallback)(e=>{let{frameToken:t,jumpToFrame:n}=e,r=(0,G.w0)().getFrameByToken(t);n&&void 0!==r&&(0,G.w0)().jumpToFrame(r)},[])}),f=(0,Y.useMemo)(()=>h.map(e=>o.find(t=>t.token===e)).filter(it.$),[o,h]),E=o.every(e=>!e.contentHidden),v=o.every(e=>e.contentHidden),[I,b]=(0,Y.useState)(!1),x=(0,Y.useCallback)((e,t)=>{(0,G.Lh)().onShowtimeAgendaFullStateReceived.addOnce(()=>{b(!0)}),p((0,nP.Bt)(e,t))},[p]),T=(0,Y.useCallback)(()=>{x(F.T6.PLUS_BTN)},[x]);(0,Y.useEffect)(()=>{if(I){let e=o[o.length-1];g({frameToken:e.token,index:e.index,rangeSelection:!1,addToSelection:!1,jumpToFrame:!0}),b(!1)}},[I,o,g]);let S={onDelete:()=>{u(f)},onHide:()=>{iG(f,!0,iB.MEETING_PANEL_BULK)},onShow:()=>{iG(f,!1,iB.MEETING_PANEL_BULK)},onMoveUp:()=>{c(f,ib.u.UP)},onMoveDown:()=>{c(f,ib.u.DOWN)}},A=(e,n,o)=>(0,y.jsx)(iE,{frameIsHidden:e.contentHidden,frameIsSelected:o.isSelected,framesCount:o.listContext.props.frames.length,selectedFramesCount:o.listContext.selectedTokens.length,allSelectedFramesVisible:E,allSelectedFramesHidden:v,canEditFrames:t,onRename:()=>{o.onRenameStart?.()},onAddBelow:()=>{x(F.T6.ITEM,n)},onDelete:()=>{p((0,nP.wz)({id:n,source:F.T6.ACTIVITIES_TAB}))},onPlayFrame:()=>{i===a7.E.RUNNING?p((0,nP.SH)(n)):void 0!==a&&p((0,es.BL)(F.T6.FRAMES_SIDEBAR,a,n))},dropdownToggle:(0,y.jsx)(aJ.g,{ariaLabel:r("showtime.framesListItem.a11y.moreActions",{title:e.name||r("showtime.framesListItem.untitled")}),dataTestid:iK.AGENDA_ITEM_ACTION_BUTTON,onClick:e=>e.stopPropagation()}),isContextMenuOpen:s.frameId===e.token,onOpen:()=>s.open(e.token),onClose:()=>s.close(),onShow:()=>iG([e],!1,iB.MEETING_PANEL),onHide:()=>iG([e],!0,iB.MEETING_PANEL),onMoveUp:()=>c([e],ib.u.UP),onMoveDown:()=>c([e],ib.u.DOWN),bulkActions:S});return(0,y.jsx)(ir.L,{ref:m,frames:o,selectedTokens:h,rootAutotestId:iK.AGENDA_ITEM_LIST,addItemAutotestId:"agenda-items__add",dragOverlayAutotestId:iK.FRAME_DRAG_OVERLAY,isEditable:t,renderListItem:(e,n)=>{let r=l[e.token];if(!r||void 0===a)return;let i=n.isSelected&&1===f.length;return(0,y.jsx)(iU.x,{listViewItemHeights:86,dataTestId:nX(r.status)?iK.AGENDA_ITEM_ACTIVE:iK.AGENDA_ITEM,frameId:e.token,frameIndex:n.index,frameName:e.name,framesCount:n.listContext.props.frames.length,showThumbnail:n.listContext.viewMode===a8.V.THUMBNAIL,menuSlot:A(e,r.id,n),isRenaming:n.isRenaming,isSelected:n.isSelected,isHidden:e.contentHidden,selectedFramesCount:f.length,isContextMenuOpened:s.frameId===e.token,isDragOverlay:n.isDragOverlay,draggedFramesCount:n.listContext.draggedIndices.length,renderFramePreview:()=>(0,y.jsx)(il,{frame:e,useClone:n.isDragOverlay}),canEditFrameName:t,onClick:t=>{let r=t.metaKey||t.ctrlKey,a=t.shiftKey;g({frameToken:e.token,index:n.index,rangeSelection:a,addToSelection:r,jumpToFrame:!0})},onRenameStart:()=>n.onRenameStart?.(),onRenameEnd:t=>{t!==e.name&&p((0,ew.Ld)({itemId:r.id,name:t})),n.onRenameEnd?.()},onContextMenu:()=>s.open(e.token),onArrowKeyNavigation:n.onArrowKeyNavigation,onContentHiddenToggle:t=>{iG([e],t,iB.MEETING_PANEL)},additionalSlot:(0,y.jsx)(iF,{agendaItem:r,frameIndex:n.index,onDurationChange:e=>{p((0,nP.$G)({id:r.id,duration:e,agendaId:a}))},isOnlySelectedItem:i,agendaId:a}),parentOverlay:(0,y.jsx)(iZ,{agendaItem:r})})},viewMode:n,onAdd:T,onOrderChange:d,toggleFrameSelection:g,isItemSelected:_,renderFooter:!0,listItemHeights:iY})}),i$=()=>{let e=(0,N.v9)(ea.$3),t=(0,N.v9)(et.CB);return(0,Y.useCallback)(()=>{let n=Object.values(t);(0,ix.xI)((0,ix.wf)((0,G.w0)().getFrames().filter(e=>n.some(t=>{let{widgetId:n}=t;return 0===n.compare(e.tokenizer.id)}))).map(e=>{let{tokenizer:t}=e;return n.find(e=>{let{widgetId:n}=e;return 0===n.compare(t.id)}).id},{}),e)},[e,t])};var iJ=n(777199);let iX="showtime",iQ={root:iX,empty:`${iX}__empty`,withItems:`${iX}__withItems`,settingsOpen:`${iX}__settings`},i0=e=>{let{t}=(0,en.I)(U.a),{canEditAgenda:n=!1,canLimitTools:r=!1,canStartShowtime:a=!1}=e,i=(0,N.v9)(ea.zu),o=(0,N.v9)(Q.eS),s=(0,N.v9)(Q.Qg),l=i$(),d=(0,N.v9)(Q.gC),c=(0,N.I0)();(0,Y.useEffect)(()=>{i&&c((0,ew.ZC)())},[i,c]);let u=(0,Y.useMemo)(()=>{if((0,G.F2)())return()=>c((0,iJ.y_)())},[c]),p=Y.useCallback(()=>{void 0===d&&void 0!==s&&c((0,es.BL)(F.T6.FRAMES_SIDEBAR,s))},[c,d,s]),{viewMode:m,setViewMode:h}=(0,a9.F)({localStorage:(0,G.av)(),storageKey:"rtb-showtime-panel",onListViewModeChange:()=>{}}),g=(0,y.jsx)(aO.Sb,{className:a5().showtimeSunsetNotice,title:t("showtime.sunset.notice.title"),description:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(aM.nv,{css:{marginBottom:"$200"},children:t("showtime.sunset.notice.description")}),(0,y.jsx)(aM.nv,{children:(0,y.jsx)(ak.r,{target:"_blank",href:"https://help.miro.com/hc/en-us/articles/8530534418066-Presenting-with-activities",children:t("showtime.sunset.notice.ctaLinkText")})})]}),level:aO.C_.WARNING,layout:aO.Um.FLEX});return i?(0,y.jsxs)("div",{className:a5().showtimeWrapper,"data-testid":iQ.withItems,children:[g,r&&a?(0,y.jsxs)(y.Fragment,{children:[a&&(0,y.jsx)(a3,{isShowtimeSessionRunning:o,startSession:p,viewMode:m,onSetViewMode:h,onFramesOrganize:l,onCreateHandoffClick:u}),r&&(0,y.jsx)(aq,{currentSessionId:s})]}):null,(0,y.jsx)(iq,{canEditAgendaItem:n,viewMode:m})]}):(0,y.jsxs)("div",{className:a5().showtimeWrapper,"data-testid":iQ.empty,children:[g,(0,y.jsx)(aZ,{canEditAgenda:n})]})};var i1=n(911464),i2=n(724155);let i4=e=>{let{selectedTabId:t,onTabChanged:n,availableTabIds:r}=e,{t:a}=(0,en.I)(U.a),i={[n9.q.FRAMES]:{id:n9.q.FRAMES,title:a("showtime.tabs.frames"),dataTestid:"showtime-frames-tab"},[n9.q.MEETING]:{id:n9.q.MEETING,title:a("showtime.panelbutton.menu.activities.label"),dataTestid:"showtime-activities-tab"}},o=r.map(e=>i[e]);return o.length?(0,y.jsx)(i1.mQ,{tabs:o,selectedTabId:t,onTabClick:e=>{n(e)},headerClass:i2.showtimeTabsHeader,tabTextClass:i2.showtimeTabText,tabItemClass:i2.showtimeTab}):null};var i3=n(213422),i6=n(758429);let i5=e=>{(0,Y.useEffect)(()=>((0,i6.ZP)().currentBoard.permissionsChanged.add(e),()=>{a_.has((0,i6.jK)())&&(0,i6.ZP)().currentBoard.permissionsChanged.remove(e)}),[e])},i9=e=>(0,i6.ZP)().currentBoard.hasPermission(e),i7=e=>{let[t,n]=(0,Y.useState)(i9(e));return i5((0,Y.useCallback)(()=>n(i9(e)),[e])),t};var i8=n(605702),oe=n(710443),ot=n(314679),on=n(549449),or=n(229133),oa=n(130837);let oi=e=>{let{isSessionRunning:t,sessionType:n,isLeader:r,isShowtimeAdvanced:a=(0,at.P5)()}=e;return t&&r?n===X.JM.ADVANCED?[n9.q.MEETING]:n===X.JM.STRUCTURED?[n9.q.FRAMES]:[]:a&&(0,at.hz)()?[n9.q.FRAMES,n9.q.MEETING]:[n9.q.FRAMES]},oo=(0,on.ZP)(),os=()=>(0,i8.Z)().getCurrentId()||"",ol=(e,t)=>new oe.V(e,t),od=()=>{let e=i7(i3.J.CHANGE_WORKSHOP_MODE),t=Y.useMemo(at.NP,[]),n=Y.useMemo(at.AV,[]),[r,a]=Y.useState((0,at.hz)());return Y.useEffect(()=>{let e=e=>{e.sessionType===X.JM.ADVANCED&&a((0,at.q2)(e))};return oo.onShowtimeSessionFullStateReceived.add(e),()=>{oo.onShowtimeSessionFullStateReceived.remove(e)}},[e]),(0,y.jsx)(i0,{canEditAgenda:r,canLimitTools:n,canStartShowtime:t,onOpenTemplatePicker:ot.I,createFeatureRate:ol,getAccountCurrentId:os})},oc=e=>{let{closeButton:t}=e,n=(0,N.I0)(),r=(0,Y.useRef)(null),a=(0,N.v9)(B.cZ.activeShowtimeSidebarTabSelector),i=(0,N.v9)(B.cZ.selectRunningSession),o=(0,N.v9)(B.cZ.selectIsLeader),s=(0,Y.useCallback)(e=>{n(B.c.setShowtimeSidebarActiveTab(e)),n(B.c.sendStatOnShowtimeActiveTabSwitch(e))},[n]),l=(0,Y.useMemo)(()=>(0,at.P5)()?i?oi({isSessionRunning:!0,sessionType:i.sessionType,isLeader:o}):[n9.q.FRAMES,n9.q.MEETING]:[n9.q.FRAMES],[i,o]);return(0,Y.useEffect)(()=>{r.current?.querySelector("button")?.focus()},[]),(0,Y.useEffect)(()=>()=>{(0,oa.G5)().resetSelectedFrame()},[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{ref:r,children:(0,y.jsx)(i4,{onTabChanged:s,selectedTabId:a,availableTabIds:l})}),t,a===n9.q.FRAMES&&(0,y.jsx)(or.v,{}),a===n9.q.MEETING&&(0,y.jsx)(od,{})]})};var ou=n(405794),op=n(932199),om=n(903949),oh=n(918734),og=n(461813),o_=n(382937),of=n(770363),oE=n(809213),ov=n(895156),oI=n(136921),ob=n(814326),ox=n(435061),oT=n(351638),oS=n(920058),oA=n(462699),ow=n(179466),oy=n(727824),oN=n(48711);let oC=ow.W.create({currentItemText:{fontVariant:["tabular-nums"],fontSize:16},listContainer:{paddingVertical:8,paddingHorizontal:16},entryContainer:{height:48,paddingHorizontal:16,borderRadius:16,justifyContent:"center",alignItems:"flex-start"},indexText:{...oy.k.normal,color:oN.wE.colors.textPrimary,paddingRight:4,minWidth:32,textAlign:"right"},nameText:{...oy.k.normal}}),oR=Y.memo(e=>{let{id:t,index:n}=e,r=(0,N.I0)(),a=(0,N.v9)(e=>nh.Tk.agendaItemSelector(e,t)),i=a?.widgetId,o=a?.id,s=N.v9(e=>nh.Tk.frameNameByIdSelector(e,i))?.forView,l=Y.useContext(ox.t);return(0,y.jsx)(oT.Q,{onPress:Y.useCallback(()=>{void 0!==o&&void 0!==i&&(r((0,nP.SH)(o)),r((0,ex.OW)(i)),r((0,nP.KC)("touch"))),l.close()},[o,r,l,i]),style:oC.entryContainer,children:(0,y.jsxs)(ob.K,{direction:"x",children:[(0,y.jsx)(oS.x,{style:oC.indexText,children:`${n+1}.`}),(0,y.jsx)(oS.x,{style:oC.nameText,children:s})]})})}),oO=Y.memo(()=>{let e=(0,N.v9)(ea.tE),t=Y.useMemo(()=>e.map((e,t)=>[e,t]),[e]),n=Y.useCallback(e=>{let[t,n]=e;return(0,y.jsx)(oR,{id:t,index:n})},[]),r=Y.useCallback(e=>{let[t]=e;return t},[]);return(0,y.jsx)(oA.Om,{bottomSheet:!0,contentContainerStyle:oC.listContainer,data:t,renderItem:n,extractKey:r,itemHeight:48,initialNumToRender:20})}),oM=Y.memo(()=>{let{t:e}=(0,en.I)(U.a),t=(0,N.v9)(nh.Tk.activeAgendaItemPositionSelector),n=(0,N.v9)(nh.Tk.agendaItemCountSelector),r=Y.useRef(null),a=Y.useCallback(()=>{r.current?.open()},[]);return void 0!==t?(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(ov.zx,{onPress:a,children:[(0,y.jsx)(ov.oD,{style:oC.currentItemText,children:e("showtime.controls.frameNavigation",{current:t,total:n})}),(0,y.jsx)(ox.u,{ref:r,children:(0,y.jsx)(oO,{})})]})}):null}),ok=ow.W.create({outerContainer:{backgroundColor:oN.wE.colors.backgroundNeutrals,elevation:2,shadowOpacity:.08,shadowRadius:8,shadowColor:"black",shadowOffset:{height:4,width:0}}}),oD=ow.W.create({panelContainer:{gap:16,pointerEvents:"box-none"},panel:{alignSelf:"center",padding:8,borderRadius:12,gap:8,...ok.outerContainer}}),oP=Y.memo(e=>{let{onNotesPress:t}=e,n=(0,N.I0)(),r=Y.useCallback(()=>{n((0,nP.Xp)(F.T6.NAVIGATION_BAR_ARROWS))},[n]),a=Y.useCallback(()=>{n((0,nP.lp)(F.T6.NAVIGATION_BAR_ARROWS))},[n]);return(0,y.jsx)(ob.K,{direction:"y",style:oD.panelContainer,children:(0,y.jsxs)(ob.K,{direction:"x",style:oD.panel,children:[(0,y.jsx)(ov.zx,{onPress:r,children:(0,y.jsx)(ov.Ei,{icon:"IconArrowLeft"})}),(0,y.jsx)(oM,{}),(0,y.jsx)(ov.zx,{onPress:t,type:"outline",children:(0,y.jsx)(ov.Ei,{icon:"IconNotepad"})}),(0,y.jsx)(ov.zx,{onPress:a,children:(0,y.jsx)(ov.Ei,{icon:"IconArrowRight"})})]})})});var oj=n(546003),oL=n(911642);let oF=ow.W.create({notesContainer:{alignSelf:"stretch",borderRadius:12,maxHeight:128,...ok.outerContainer},notesContainerHidden:{display:"none"},notesScroll:{alignItems:"stretch"},notesText:{padding:8,...oy.k.normal},notesTextInput:{...oy.k.normal,width:"100%",padding:16,height:128}}),oU=Y.forwardRef((e,t)=>{let{frameId:n}=e,[r,a]=Y.useState(null),i=Y.useMemo(()=>r?.frameId===n?r.notes:(0,G.XZ)().getSpeakerNote(n),[n,r]),o=(0,N.v9)(ea.vO),s=N.v9(Q.gC)?.sessionId,l=(0,N.v9)(ey.oH)(),d=Y.useCallback(e=>{n&&s&&((0,G.XZ)().saveSpeakerNote(n,e,{item_order_number:o??0,text_len:e.length,action_source:"presenter-window",showtime_session_id:s}),a({frameId:n,notes:e}))},[s,n,o]),c=Y.useRef(null),u=Y.useCallback(()=>{c.current?.open()},[]);Y.useImperativeHandle(t,()=>({openEditor:()=>u()}));let p=Y.useMemo(()=>[oF.notesContainer,!l&&oF.notesContainerHidden],[l]);return(0,y.jsx)(y.Fragment,{children:!!n&&(0,y.jsxs)(oj.p,{style:p,contentContainerStyle:oF.notesScroll,children:[!!i&&(0,y.jsx)(oT.Q,{onPress:u,children:(0,y.jsx)(oS.x,{style:oF.notesText,children:i},n.toString())}),(0,y.jsx)(ox.u,{ref:c,keyboardBehavior:"interactive",children:(0,y.jsx)(ob.K,{direction:"y",bottomSheet:!0,children:(0,y.jsx)(oL.o,{bottomSheet:!0,multiline:!0,autoFocus:!0,style:oF.notesTextInput,onChangeText:d,defaultValue:i},n.toString())})})]})})}),oB=Y.forwardRef((e,t)=>{let n=(0,N.v9)(nh.Tk.runningAgendaItemSelector),r=n?.widgetId;return r?(0,y.jsx)(oU,{ref:t,frameId:r},r.toString()):null}),oG=ow.W.create({screenControls:{pointerEvents:"box-none",position:"absolute",width:"100%",height:"100%"},screenControlsDisabled:{pointerEvents:"none"},screenControlLeft:{position:"absolute",left:0,top:0,bottom:0,width:"30%",opacity:.1},screenControlRight:{position:"absolute",right:0,top:0,bottom:0,width:"30%",opacity:.1}}),oW=Y.memo(()=>{let e=(0,N.v9)(ey.oH)(),t=(0,N.I0)(),n=Y.useCallback(()=>{t((0,nP.Xp)(F.T6.NAVIGATION_BAR_ARROWS))},[t]),r=Y.useCallback(()=>{t((0,nP.lp)(F.T6.NAVIGATION_BAR_ARROWS))},[t]);return(0,y.jsxs)(ob.K,{direction:"x",style:Y.useMemo(()=>[oG.screenControls,!e&&oG.screenControlsDisabled],[e]),children:[(0,y.jsx)(oT.Q,{onPress:n,style:oG.screenControlLeft,children:(0,y.jsx)(ob.K,{direction:"x"})}),(0,y.jsx)(oT.Q,{onPress:r,style:oG.screenControlRight,children:(0,y.jsx)(ob.K,{direction:"x"})})]})}),oH=ow.W.create({facilitationBarContainer:{position:"absolute",bottom:24,left:0,right:0,justifyContent:"center",alignItems:"center",pointerEvents:"box-none"},topContainer:{position:"absolute",alignItems:"flex-start",top:0,left:0,right:0,paddingHorizontal:16,gap:16},closeButton:{...ok.outerContainer}}),oV=Y.memo(()=>(0,y.jsx)(oE.J,{allow:Y.useMemo(()=>[],[])})),oz=Y.memo(()=>{let e=(0,N.I0)(),t=Y.useCallback(()=>{e((0,es.sT)(F.T6.SHOWTIME_NAVIGATION_PANEL))},[e]);return(0,y.jsx)(ov.zx,{rounded:!0,style:oH.closeButton,onPress:t,children:(0,y.jsx)(ov.Ei,{icon:"IconCross"})})}),oZ=Y.memo(()=>{let e=Y.useRef(null),t=Y.useCallback(()=>{e.current?.openEditor()},[]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(oV,{}),(0,y.jsx)(oW,{}),(0,y.jsxs)(oI.j,{top:!0,left:!0,right:!0,style:oH.topContainer,children:[(0,y.jsx)(oz,{}),(0,y.jsx)(oB,{ref:e})]}),(0,y.jsx)(oI.j,{bottom:!0,left:!0,right:!0,style:oH.facilitationBarContainer,children:(0,y.jsx)(oP,{onNotesPress:t})})]})}),oK=()=>{let e=void 0!==(0,N.v9)(Q.gC),t=(0,N.v9)(Q.d1);return e&&t?(0,y.jsx)(oZ,{}):null},oY=null,oq=e=>{(0,M.ZP)().emitter.emit(k._.REGISTER_COMPONENT,{receiverId:D.s.PRESENTER_NOTES,payload:{component:()=>(0,y.jsx)(N.zt,{store:e,children:(0,y.jsx)(ou.a,{})})}})},o$=e=>{let t=()=>{au.h7.mobileApp?r||(r=a_.get(of.S).mount(()=>(0,y.jsx)(N.zt,{store:e,children:(0,y.jsx)(oK,{})}))):(0,M.ZP)().emitter.emit(k._.REGISTER_COMPONENT,{receiverId:P.G.MEETING_NAVIGATION_BAR,payload:{component:()=>(0,y.jsx)(N.zt,{store:e,children:(0,y.jsx)(aR,{})})}})};U.a.getHasTranslationsLoaded()?t():oY=U.a.onLoadedCurrentLang(t)},oJ=()=>{oY?.(),oY=null,au.h7.mobileApp?(r?.(),r=void 0):((0,M.ZP)().emitter.emit(k._.REGISTER_COMPONENT,{receiverId:P.G.MEETING_NAVIGATION_BAR,payload:{component:()=>null}}),(0,M.ZP)().emitter.emit(k._.UNREGISTER_COMPONENT,{receiverId:P.G.MEETING_NAVIGATION_BAR}))},oX=e=>(0,y.jsx)("div",{style:{height:"100%"},children:(0,y.jsx)("nav",{id:L.vg,className:O().root,tabIndex:-1,"aria-label":V.Z.t("board.frames.plugin.sideBarFrames.frames"),children:(0,y.jsx)(N.zt,{store:e,children:(0,y.jsx)(oc,{closeButton:(0,y.jsx)(j.R,{"data-testid":C.K.LayoutPanelItemClose,className:O().close,onClose:()=>e.dispatch(B.c.closeShowtimeSidebar(F.T6.CLOSE_BTN,!0)),"aria-label":H.u.t("navBar.components.navigationBarToggle.closeSidebar")})})})})}),oQ=async e=>{void 0!==(0,G.Yd)().userId&&(0,M.ZP)().emitter.emit(k._.REGISTER_COMPONENT,{receiverId:D.s.PARTICIPANT_APPBAR,payload:{component:function(){return(0,y.jsx)(N.zt,{store:e,children:(0,y.jsx)(W.v,{})})}}})},o0=()=>{(0,M.ZP)().emitter.emit(k._.UNREGISTER_COMPONENT,{receiverId:D.s.PARTICIPANT_APPBAR})},o1=()=>{(0,oh.Q)()?(0,ab.$8)().setAvailability(o_.Y,!0):(0,M.ZP)().emitter.emit(k._.REGISTER_COMPONENT,{receiverId:D.s.MEETING_NOTIFICATIONS_BOTTOM_CENTER,payload:{component:()=>(0,y.jsx)(z.z,{})}})},o2=()=>{(0,oh.Q)()?(0,ab.$8)().setAvailability(o_.Y,!1):(0,M.ZP)().emitter.emit(k._.UNREGISTER_COMPONENT,{receiverId:D.s.MEETING_NOTIFICATIONS_BOTTOM_CENTER})},o4=e=>(0,oh.Q)()?(0,ab.$8)().setAvailability(om.t,e):Promise.resolve(),o3=async e=>{if(!(0,oh.Q)())return;let t=(0,op.C)();return"default"===e?await t.turnOffMode(og.Z):"hidden"!==e?await t.turnOnMode(og.Z):void 0}},320756:function(e,t,n){"use strict";n.d(t,{P:()=>c});var r=n(552322);n(202784);var a=n(589403),i=n(601521),o=n(23837);let s={[o.p.COUNTDOWN]:a.Y.APP_BAR_TIMER_BUTTON,[o.p.VOTING]:a.Y.APP_BAR_VOTING_BUTTON,[o.p.PRIVATE_MODE]:a.Y.APP_BAR_MENU_ITEM_PRIVATE_MODE},l=()=>({id:"dummy",config:{placement:"right",body:{content:""}}}),d=e=>{let t=s[e];return t?{id:t,config:{width:276,theme:"dark",placement:"left",hideCloseButton:!0,closeByClickOut:!0,distance:5,body:{content:""}}}:l()},c=e=>{let{id:t,children:n}=e;if(!t)return(0,r.jsx)(r.Fragment,{children:n});let{id:a,config:o}=d(t);return(0,r.jsx)(i.H,{id:a,content:o,children:n})}},461813:function(e,t,n){"use strict";n.d(t,{Z:()=>c,r:()=>u});var r=n(789766),a=n(323097),i=n(664583),o=n(222646),s=n(581448),l=n(706154);let d={isZoomBarVisible:!0,isOutlineBarVisible:!1,isLayersButtonVisible:!1,hiddenAppsInZoomBar:[],isZoomDropDownVisible:!1,isPreProductHelpCenterVisible:!1,isFramesButtonVisible:!1,isHelpBarVisible:!1},c=(0,r.x)("CANVAS_CONTROLS_SHOWTIME_MANIFEST_KEY"),u=()=>(0,o.y)()?{key:c,placing:{[a.j.FOOTER_RIGHT]:i.D.CANVAS_CONTROLS},extensionPoints:{[i.D.CANVAS_CONTROLS]:{content:l.N,props:d}}}:{key:c,placing:{[a.j.ASIDE_RIGHT]:i.D.RIGHT_PANELS},extensionPoints:{[i.D.RIGHT_PANELS]:{content:s.o,props:{isCanvasControlsVisible:!0,...d}}}}},382937:function(e,t,n){"use strict";n.d(t,{Y:()=>o,n:()=>s});var r=n(789766),a=n(664583),i=n(205892);let o=(0,r.x)("MEETING_NOTIFICATIONS_MANIFEST"),s=()=>({key:o,placing:{},extensionPoints:{[a.D.MEETING_NOTIFICATIONS_BOTTOM_CENTER]:{providers:[],content:i.z}},portals:[a.D.MEETING_NOTIFICATIONS_BOTTOM_CENTER]})},903949:function(e,t,n){"use strict";n.d(t,{O:()=>u,t:()=>c});var r=n(552322),a=n(774418),i=n(789766),o=n(664583),s=n(984799),l=n(405794);let d=e=>{let{children:t}=e;return(0,r.jsx)(a.zt,{store:(0,s.getShowtimeModuleStore)(),children:t})},c=(0,i.x)("PRESENTER_NOTES_MANIFEST"),u=()=>({key:c,placing:{},extensionPoints:{[o.D.PRESENTER_NOTES]:{providers:[{context:{Provider:d}}],content:l.a}},portals:[o.D.PRESENTER_NOTES]})},634834:function(e,t,n){"use strict";n.d(t,{S:()=>s,X:()=>o});var r=n(789766),a=n(664583),i=n(566726);let o=(0,r.x)("RAISED_HANDS_MANIFEST"),s=()=>({key:o,placing:{},extensionPoints:{[a.D.RAISED_HANDS]:{providers:[],content:i.c}},portals:[a.D.RAISED_HANDS]})},805858:function(e,t,n){"use strict";n.d(t,{L:()=>p});var r=n(552322),a=n(202784),i=n(433723),o=n(844906),s=n(841877),l=n(648346),d=n(26206);let c=(0,i.zo)(o.x,{position:"relative",pointerEvents:"auto"}),u=(0,a.lazy)(()=>(0,s.Z)().then(e=>({default:e.getInteractiveTutorialComponent()}))),p=()=>(0,r.jsx)(c,{children:(0,l.KO)(d.Z).visible&&(0,r.jsx)(a.Suspense,{fallback:null,children:(0,r.jsx)("div",{children:(0,r.jsx)(u,{})})})})},253217:function(e,t,n){"use strict";n.d(t,{G:()=>o});var r=n(552322),a=n(840706),i=n(739316);let o=()=>{let{PaidPlanOnboarding:e}=(0,a.getInjectionPoint)(i.CL)();return(0,r.jsx)(e,{})}},581448:function(e,t,n){"use strict";n.d(t,{o:()=>h});var r=n(552322),a=n(202784),i=n(433723),o=n(599288),s=n(805858),l=n(517410),d=n(706154),c=n(253217),u=n(401816),p=n(323097);let m=(0,i.zo)("div",{boxSizing:"border-box",height:"100%",paddingTop:"$100",variants:{cornered:{true:{paddingTop:"0"}}}}),h=e=>{let{PanelStackComponent:t}=o.K.PanelStack(),{isCanvasControlsVisible:n,cornered:i,...h}=e,g=(0,a.useMemo)(()=>()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.L,{}),(0,r.jsx)(l.c,{}),(0,r.jsx)(c.G,{}),(n??!0)&&(0,r.jsx)(d.N,{...h})]}),[n,h.isMinimapVisible,h.isOutlineBarVisible,h.isLayersButtonVisible,h.isZoomBarVisible,h.isHelpBarVisible,h.hiddenAppsInZoomBar,h.isZoomDropDownVisible,h.isPreProductHelpCenterVisible]),_=(0,u.U)(p.j.RIGHT_PANELS,!0);return(0,r.jsx)(m,{cornered:i,children:(0,r.jsx)(t.Right,{bottomWrapperJSX:g,ref:_,cornered:i})})}},517410:function(e,t,n){"use strict";n.d(t,{c:()=>m});var r=n(552322),a=n(855324),i=n(202784),o=n(887804),s=n(574217),l=n(52638),d=n(433723),c=n(844906);let u=(0,d.zo)(c.x,{position:"relative",pointerEvents:"auto"}),p=(0,i.lazy)(()=>Promise.all([n.e("53878","high"),n.e("85886","high"),n.e("62013","high")]).then(n.bind(n,434618))),m=(0,a.w)({},()=>{let e=(0,i.useMemo)(()=>(0,l.e)(),[]);return(0,r.jsx)(u,{children:(0,r.jsx)(i.Suspense,{fallback:null,children:(0,r.jsx)(p,{onDidUpdateToggleAsShown:(0,i.useCallback)(()=>{(0,o.ZP)().setPanelVisible(s.W.MINI_MAP,!1)},[]),isOnboardingDeniedForGuest:e})})})})},706154:function(e,t,n){"use strict";let r;n.d(t,{N:()=>eL});var a=n(552322),i=n(202784),o=n(227956),s=n(699277),l=n(22071),d=n(597925),c=n(853244),u=n(433723),p=n(968917),m=n(840706),h=n(79036),g=n(739316),_=n(625145),f=n(976935),E=n(648346),v=n(664583),I=n(23837),b=n(816871),x=n(298632),T=n(210269),S=n(589403);let A=(0,_.K$)(v.D.OUTLINE_BAR),w=(0,u.zo)("div",{position:"relative"}),y=(0,b.l)(f.P,()=>{let e=(0,E.oR)(),t=A.getById(e,I.p.FRAMES_LIST),[n,r]=(0,T.n)(S.Y.CANVAS_CONTROLS_FRAMES_LIST,{theme:"dark",placement:"top",toBody:!1,distance:4,width:276});if(!t)return(0,a.jsx)(a.Fragment,{});let{main:i}=t?.actions;return(0,a.jsxs)(w,{ref:r,children:[(0,a.jsx)(x.K,{action:i,testId:"action-item__FRAMES_LIST"}),n]})});var N=n(844906),C=n(214864),R=n(282357),O=n(337431),M=n(99382),k=n(13604),D=n(604378),P=n(731321),j=n(156031),L=n(320756),F=n(338238);let U=(0,u.zo)(N.x,{marginLeft:"$100"}),B=(e,t)=>{let{action:n,appId:r,onSendStats:i,appsDropdownRef:s,isRunning:l=!1}=e,d=(0,E.KO)(n.stateAtom),c=d.ui.tooltip?.hotkey,{availability:u}=d,{title:p,icon:m,tag:h}=d.ui;if("HIDDEN"===u)return(0,a.jsx)(a.Fragment,{});let g="DISABLED"===u,_=r?.replaceAll(".","-"),f=(0,F.CE)(h);return(0,a.jsx)(L.P,{id:r,children:(0,a.jsxs)(C.h.Item,{disabled:g,onClick:e=>{h&&e.preventDefault(),!g&&n.execute&&(n.execute(s),r&&i&&i(r,p))},id:`action-item__${r}`,"data-testid":`${o.R7}${_}`,"aria-label":p,children:[(0,a.jsx)(C.h.IconSlot,{children:(0,a.jsx)(k.C,{id:`${r}-running-badge`,show:l,children:(0,a.jsx)(j.o,{icon:m})})}),p,(f||c)&&(0,a.jsxs)(D.k,{align:"center",children:[f&&(0,a.jsx)(U,{children:(0,a.jsx)(P.V,{variant:"neutral",children:f})}),c&&(0,a.jsx)(C.h.Hotkey,{children:c})]})]},t)})},G=HTMLElement.prototype.focus,W={on:()=>{HTMLElement.prototype.focus=function(){G.call(this,{preventScroll:!0})},r=setTimeout(W.off,3e3)},off:()=>{clearTimeout(r),HTMLElement.prototype.focus!==G&&(HTMLElement.prototype.focus=G)}};var H=n(843499);let V=(0,_.K$)(v.D.HELP_BAR),z={[I.p.SEND_FEEDBACK]:0,[I.p.HELP_CENTER]:1,[I.p.AI_HELP_CENTER]:2,[I.p.LEARNING_CENTER]:3,[I.p.WHAT_IS_NEW]:4,[I.p.SHORTCUTS]:5},Z=(0,H.cp)({compute:e=>V.arrayAtom(e).sort((e,t)=>(z[e.id]??0)-(z[t.id]??0))});var K=n(337525);let Y=(0,u.zo)(N.x,{position:"relative"}),q=(0,b.l)(f.P,(0,i.memo)(()=>{let e=(0,E.KO)(Z),[t,n]=(0,i.useState)(!1),{t:r,keys:s}=(0,K.I)(f.P),l=(0,i.useCallback)(()=>{n(!0),(0,M.Z)().track("navigation_panel_interacted",{action:"help-menu"})},[]),d=(0,i.useCallback)(()=>{W.on(),n(!1)},[]),c=(0,i.useCallback)(()=>W.off(),[]);return 0===e.length?(0,a.jsx)(a.Fragment,{}):(0,a.jsxs)(C.h,{onOpen:l,onClose:d,children:[(0,a.jsxs)(R.u,{disableHoverableContent:!0,children:[(0,a.jsx)(R.u.Trigger,{asChild:!0,children:(0,a.jsx)(C.h.Trigger,{asChild:!0,children:(0,a.jsx)(Y,{children:(0,a.jsx)(p.o.Icon,{active:t,"aria-label":r(s.canvasControls.helpAndResourcesButton.helpAndResources.t),"data-testid":o.sV.FEEDBACK_BUTTON,"data-onboarding-target":o.sV.FEEDBACK_BUTTON,children:(0,a.jsx)(O.IconQuestionMarkCircle,{})})})})}),(0,a.jsx)(R.u.Content,{side:"top",children:r(s.canvasControls.helpAndResourcesButton.helpAndResources.t)})]}),(0,a.jsx)(C.h.Content,{sideOffset:8,collisionPadding:8,onCloseAutoFocus:c,children:e.map((e,t)=>(0,a.jsx)(B,{action:e.actions.main,appId:e.id},t))})]})}));var $=n(556554);let J=(0,_.K$)(v.D.OUTLINE_BAR),X=(0,u.zo)(p.o.Icon,{position:"relative"}),Q=(0,b.l)(f.P,()=>{let{t:e,keys:t}=(0,K.I)(f.P),n=(0,E.KO)(J.arrayAtom),[r,s]=(0,i.useState)(!1),[l,d]=(0,T.n)(S.Y.OUTLINE_BAR_LAYERS_AND_FRAMES,{theme:"dark",placement:"top",toBody:!1,distance:4,width:276}),c=(0,i.useCallback)(()=>{s(!0),(0,M.Z)().track("navigation_panel_interacted",{action:"outline-menu"})},[]),u=(0,i.useCallback)(()=>W.off(),[]),p=(0,i.useCallback)(()=>{W.on(),s(!1)},[]);if(0===n.length)return(0,a.jsx)(a.Fragment,{});let m=(0,$.YD)()?O.IconFrameLinesTwo:O.IconListBullets;return(0,a.jsx)(C.h,{onOpen:c,onClose:p,children:(0,a.jsxs)(R.u,{disableHoverableContent:!0,children:[(0,a.jsx)(R.u.Trigger,{asChild:!0,children:(0,a.jsx)(C.h.Trigger,{asChild:!0,"data-testid":o.sV.LAYERS_AND_FRAMES,children:(0,a.jsx)(X,{active:r,"aria-label":e(t.outlinebar.tooltip.t),ref:d,children:(0,a.jsx)(m,{})})})}),(0,a.jsx)(R.u.Content,{side:"top",children:e(t.outlinebar.tooltip.t)}),l,(0,a.jsx)(C.h.Portal,{children:(0,a.jsx)(C.h.Content,{sideOffset:8,onCloseAutoFocus:u,children:n.map((e,t)=>(0,a.jsx)(B,{appId:e.id,action:e.actions.main},e.id))})})]})})});var ee=n(645032),et=n(634318),en=n(187714),er=n(72779),ea=n.n(er),ei=n(581058),eo=n(389958);function es(){return(es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var el=(0,i.forwardRef)(function(e,t){return i.createElement("svg",es({width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),e_||(e_=i.createElement("path",{d:"M8.333 7.917A1.667 1.667 0 1 1 10 9.583a.833.833 0 0 0-.834.834v.833a.833.833 0 0 0 1.667 0v-.417c1.438-.37 2.5-1.363 2.5-2.916a3.333 3.333 0 0 0-6.667 0 .833.833 0 0 0 1.667 0ZM10 15.417a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",fill:"currentColor"})))}),ed=n(927065),ec=n.n(ed),eu=n(40436);let ep=i.forwardRef((e,t)=>{let{onClick:n,isActive:r,children:i,...o}=e,{t:s}=(0,K.I)(eu.u);return(0,a.jsxs)(ei.h,{dataTestid:"help-center-button",tooltipText:s("preproductUi.components.helpCenter.helpCenterButton.tooltipText"),onClick:n,className:ec().helpCenterButton_hover,ref:t,...o,children:[(0,a.jsx)(eo.l,{className:ea()(ec().helpCenterButton,{[ec().helpCenterButtonActive]:r}),children:(0,a.jsx)(el,{})}),i]})});var em=n(633295);let eh={appear:"help-center__menu-animated--start",appearActive:"help-center__menu-animated--start",appearDone:"help-center__menu-animated--start",enter:"help-center__menu-animated--start",enterActive:"help-center__menu-animated--finish",enterDone:"help-center__menu-animated--finish",exit:"help-center__menu-animated--start",exitActive:"help-center__menu-animated--start",exitDone:"help-center__menu-animated--start"},eg={appear:0,enter:0,exit:150};var e_,ef,eE=n(335860),ev=n.n(eE),eI=((ef=eI||{}).Menu="Menu",ef);let eb=i.forwardRef((e,t)=>{let{onLearnMoreClick:n,onFaqClick:r,...o}=e,[s,l]=(0,i.useState)(!1),[d,c]=(0,i.useState)("Menu"),u=(0,i.useRef)(null),p=(0,ee.T)(),m=(0,i.useCallback)(()=>{l(!1),c("Menu")},[]),h=null!==r?()=>{m(),p.faqButtonClicked(),r()}:null;return(0,a.jsx)(en.l,{onTapOut:m,children:(0,a.jsxs)("div",{className:ev().helpCenter,ref:u,children:[(0,a.jsx)(ep,{...o,onClick:()=>{p.helpCenterButtonClicked(),l(!s),"Menu"!==d&&c("Menu")},isActive:s,ref:t}),(0,a.jsx)(et.Z,{in:s&&"Menu"===d,timeout:eg,appear:!0,classNames:eh,mountOnEnter:!0,unmountOnExit:!0,children:(0,a.jsx)(em.L,{helpCenterMenuClass:ea()(ev().helpCenterMenuWrapper,"help-center__menu-animated"),onLearnMoreClick:()=>{p.learnMoreButtonClicked(),n()},onFaqClick:h})})]})})});var ex=n(403460),eT=n(333861),eS=n(735308),eA=n(48865),ew=n(819545),ey=n(55624),eN=n(540379);let eC=()=>{let e=d.Z.getCurrentLang().key;return(0,a.jsx)(eb,{onLearnMoreClick:(0,i.useCallback)(()=>(0,ex.dh)()?eT.h7.tablet?eS.getOpener().openInNewTab("https://miro.com"):eA.i1.sendMessageToParent((0,eA.pJ)(),"*"):(0,ex.Rc)()?ew.getOpener(ey.B$[e]).openInNewTab():(0,ex.gr)()?ew.getOpener(ey.jo[e]).openInNewTab():ew.getOpener("https://webwhiteboard.com/home").openInNewTab(),[]),onFaqClick:(0,i.useCallback)(()=>{eN.o.isOnMiroLiteStandalone()&&eA.i1.sendMessageToParent((0,eA.qV)(),"*")},[])},"faq")};var eR=n(974651);let eO=(0,_.K$)(v.D.CANVAS_CONTROLS),eM=(0,b.l)(f.P,(0,i.memo)(e=>{let{hiddenApps:t=[],isZoomDropDownVisible:n=!0}=e,r=(0,E.KO)(eO.arrayAtom),[o,s]=(0,i.useState)(!1),{t:l,keys:d}=(0,K.I)(f.P),c=(0,i.useCallback)(()=>{s(!0),(0,M.Z)().track("navigation_panel_interacted",{action:"navigation-menu"})},[]),u=(0,i.useCallback)(()=>{W.on(),s(!1)},[]),m=(0,i.useCallback)(()=>W.off(),[]),h=r.find(e=>"ZOOM_CONTROLS"===e.id),g=r.find(e=>e.id===I.p.MINIMAP),_=r.filter(e=>"ZOOM_CONTROLS"!==e.id&&e.id!==I.p.MINIMAP&&!t.includes(e.id));if(0===r.length||!h)return(0,a.jsx)(a.Fragment,{});let{zoomIn:v,zoomOut:b,zoomTo50:T,zoomTo70:S,zoomTo100:A,zoomTo150:w,zoomTo200:y,fitToScreen:N}=h.actions;return(0,a.jsxs)(a.Fragment,{children:[b&&(0,a.jsx)(x.K,{action:b,testId:"canvas-controls-zoom-out"},b.id),n&&(0,a.jsxs)(C.h,{onOpen:c,onClose:u,children:[(0,a.jsxs)(R.u,{disableHoverableContent:!0,children:[(0,a.jsx)(R.u.Trigger,{asChild:!0,children:(0,a.jsx)(C.h.Trigger,{asChild:!0,children:(0,a.jsx)(p.o.Item,{active:o,"aria-label":l(d.canvasControls.zoomAndNavigationButton.zoomAndNavigation.t),"data-testid":"canvas-controls-zoom-button",children:(0,a.jsx)(eR.aV,{},"ZoomDisplay")})})}),(0,a.jsx)(R.u.Content,{children:l(d.canvasControls.zoomAndNavigationButton.zoomAndNavigation.t)})]}),(0,a.jsxs)(C.h.Content,{sideOffset:8,onCloseAutoFocus:m,children:[_.flatMap((e,t)=>(0,a.jsx)(B,{appId:e.id,action:e.actions.main},t)),g&&(0,a.jsx)(B,{appId:g.id,action:g.actions.main}),(0,a.jsx)(C.h.Separator,{}),[N,T,S,A,w,y].map(e=>(0,a.jsx)(B,{appId:e.id,action:e},e.id))]})]}),v&&(0,a.jsx)(x.K,{action:v,testId:"canvas-controls-zoom-in"},v.id)]})}));var ek=n(501446),eD=n(776788),eP=n(898675);let ej=(0,u.zo)("div",{backgroundColor:"$background-neutrals-container",boxShadow:"$50",borderRadius:"$50",padding:"0 $50",pointerEvents:"all",display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"column",variants:{isNewPDL:{true:{boxShadow:"$elevation-100",borderRadius:"$100",backgroundColor:"$background-neutrals-layout",border:"0.5px solid $border-neutrals-subtle"}}}}),eL=e=>{let{isMinimapVisible:t,isOutlineBarVisible:n,isFramesButtonVisible:r,isLayersButtonVisible:i,isZoomBarVisible:u,isHelpBarVisible:_,hiddenAppsInZoomBar:f,isZoomDropDownVisible:E,isPreProductHelpCenterVisible:v}=e,{isLayoutVisible:I}=(0,ek.lm)(),b=i&&(0,c.$)(),[x,T]=(0,l.S)(),S=d.Z.getCurrentLang().key,{PaidPlanOnboardingButton:A}=(0,m.getInjectionPoint)(g.CL)();return I?(0,a.jsxs)(ej,{isNewPDL:(0,eD.q5)(),"data-testid":o.sV.WRAPPER,children:[t&&(0,a.jsx)(h.N5,{}),(0,a.jsxs)(p.o,{variant:"flat","aria-label":d.Z.t("board.controlsToolbar.name"),onKeyUp:eP.E,children:[n&&(0,a.jsx)(Q,{locale:S}),r&&(0,a.jsx)(y,{locale:S}),b&&(0,a.jsx)(s.y,{layersVisible:x,onClick:T},"layersToggle"),u&&(0,a.jsx)(eM,{locale:S,hiddenApps:f,isZoomDropDownVisible:E}),(0,a.jsx)(A,{}),_&&(0,a.jsx)(q,{locale:S}),v&&(0,a.jsx)(eC,{})]})]}):null}},851860:function(e,t,n){"use strict";n.d(t,{GB:()=>s,N_:()=>o,ko:()=>l,ud:()=>d,xL:()=>c});var r=n(433723),a=n(968917),i=n(844906);let o=(0,r.zo)(a.o,{"&&":{flexDirection:"column",justifyContent:"flex-end",transition:".2s",pointerEvents:"all"}}),s=(0,r.zo)(i.x,{display:"flex",justifyContent:"flex-end"}),l=(0,r.zo)(s,{overflow:"hidden",transition:".2s"}),d=(0,r.zo)(i.x,{position:"relative",width:"100%",overflow:"hidden"}),c=(0,r.zo)(a.o.Icon,{"&&":{height:"44px",width:"44px"}})},699277:function(e,t,n){"use strict";n.d(t,{y:()=>m});var r=n(552322),a=n(202784),i=n(581058),o=n(433723),s=n(844906),l=n(337431),d=n(851860),c=n(227956),u=n(976935);let p=(0,o.zo)(s.x,{position:"relative"}),m=a.forwardRef((e,t)=>{let{layersVisible:n,onClick:a,key:o,...s}=e;return(0,r.jsx)(p,{children:(0,r.jsx)(d.xL,{active:n,asChild:!0,children:(0,r.jsx)(i.h,{...s,"aria-label":"Layers","aria-pressed":n,isActive:n,ref:t,tooltipText:u.P.t("boardLayout.layers.entryPoint.tooltip"),onClick:a,dataTestid:c.sV.LAYERS_PANEL,children:(0,r.jsx)(l.IconStack,{})})},o)})})},47986:function(e,t,n){"use strict";n.d(t,{M:()=>c});var r=n(552322),a=n(202784),i=n(433723),o=n(127077),s=n(487537),l=n(438339);let d=(0,i.zo)("div",{pointerEvents:"all"}),c=e=>{let{children:t,scalingId:n}=e,{setBarWidth:i,rulesToApply:c}=(0,a.useContext)(s.C),u=(0,a.useRef)(null),p=(0,l.W)(u);(0,a.useEffect)(()=>i(n,p),[p,n,i]);let m=c.filter(e=>{let{action:t,barId:r,locked:a}=e;return"shrink"===t&&r===n&&!a});return(0,r.jsx)(o.$,{barId:n,children:(0,r.jsx)(d,{ref:u,css:{flexShrink:+(void 0!==m[m.length-1])},children:t})})}},796563:function(e,t,n){"use strict";n.d(t,{L:()=>c});var r=n(552322),a=n(202784),i=n(433723),o=n(487537),s=n(438339);let l=(0,i.zo)("div",{justifyContent:"space-between",display:"flex",width:"100%"}),d=e=>{let{children:t,gap:n}=e,{setContainerWidth:i}=(0,a.useContext)(o.C),d=(0,a.useRef)(null),c=(0,s.W)(d);return(0,a.useEffect)(()=>i(c),[c,i]),(0,r.jsx)(l,{ref:d,css:{gap:n},id:"dynamic-scaling-container",children:t})},c=e=>{let{children:t,rules:n,gap:a=8}=e;return(0,r.jsx)(o.Z,{rules:n,gap:a,children:(0,r.jsx)(d,{gap:a,children:t})})}},248968:function(e,t,n){"use strict";n.d(t,{_:()=>m,o:()=>p});var r=n(552322),a=n(202784),i=n(433723);let o=e=>{let{rulesToApply:t,allRules:n,scalingId:r}=e;return(0,a.useMemo)(()=>{let e=t.filter(e=>{let{id:t}=e;return t===r}),a=e[e.length-1];if(!a){let e=n.find(e=>{let{id:t,whenHidden:n}=e;return n&&t===r});return e&&!t.find(t=>{let{id:n}=t;return n===e.whenHidden})?{rule:e,isHidden:"show"===e.action}:{rule:void 0,isHidden:!1}}let{whenHidden:i,action:o}=a;return{rule:a,isHidden:"hide"===o||!!i&&void 0===t.find(e=>{let{id:t}=e;return t!==r&&t===i})}},[t,n,r])},s=e=>(0,a.useMemo)(()=>e?.minWidth?e.locked?{display:"block",width:`${e.minWidth}px`}:{display:"grid",gridTemplateColumns:`minmax(${e.minWidth}px, auto) max-content`}:{},[e]);var l=n(438339),d=n(127077),c=n(487537);let u=(0,i.zo)("div",{alignItems:"center",position:"relative"}),p=e=>{let{children:t,scalingId:n,onVisibilityChange:i}=e,{rulesToApply:p,setItemWidth:m,unsetItem:h,allRules:g}=(0,a.useContext)(c.C),{barId:_}=(0,a.useContext)(d.Z),f=(0,a.useRef)(null);(0,a.useEffect)(()=>()=>h(n),[h,n]);let{rule:E,isHidden:v}=o({rulesToApply:p,allRules:g,scalingId:n});(0,a.useEffect)(()=>i?.(!v),[v,i]);let I=s(E),b=(0,l.W)(f);return((0,a.useEffect)(()=>{_&&m(n,b,_)},[b,n,_,m]),!t||v)?null:(0,r.jsx)(u,{css:I,ref:f,"data-testid":n,children:t})},m=e=>{let{children:t,scalingId:n,onVisibilityChange:i}=e,{rulesToApply:s,unsetItem:l,allRules:d}=(0,a.useContext)(c.C),p=(0,a.useRef)(null);(0,a.useEffect)(()=>()=>l(n),[l,n]);let{isHidden:m}=o({rulesToApply:s,allRules:d,scalingId:n});return((0,a.useEffect)(()=>i?.(!m),[m,i]),!t||m)?null:(0,r.jsx)(u,{ref:p,"data-testid":n,children:t})}},127077:function(e,t,n){"use strict";n.d(t,{$:()=>i,Z:()=>a});var r=n(552322);let a=n(202784).createContext({barId:void 0}),i=e=>{let{children:t,barId:n}=e;return(0,r.jsx)(a.Provider,{value:{barId:n},children:t})}},487537:function(e,t,n){"use strict";n.d(t,{Z:()=>d,C:()=>l});var r=n(552322),a=n(202784);let i=(e,t)=>e.filter(n=>{let{whenHidden:r,id:a}=n;return r&&a!==r&&void 0!==e.find(e=>e.id===r&&"hide"===e.action)&&void 0===t.find(e=>e.id===r)}),o=e=>{let{rule:t,mutableRules:n,index:r,items:a}=e;n[r]||(n[r]={id:t.id,width:0,isActive:!0,action:"hide"});let i=n[r];i.isActive=!0,i.whenHidden=t.whenHidden,i.minWidth=t.minWidth,i.action=t.action,i.width=a[t.id]?.width||i.width},s=e=>{let{bars:t,items:n,containerWidth:r,rules:s,gap:l=8}=e,d=s.filter(e=>{let{id:t}=e;return n[t]}),{current:c}=(0,a.useRef)([]),u=(0,a.useRef)(null),p=(0,a.useRef)(!0);(0,a.useEffect)(()=>{u.current||(u.current=d.length)},[d.length,n]);let m=t.reduce((e,t)=>{let{width:n}=t;return e+n},0),h=(t.length-1)*l,g=r-m;return(0,a.useMemo)(()=>{if(!r||!m)return[];p.current=Math.round(g)>=Math.round(h),u.current&&u.current!==d.length&&(u.current=d.length,p.current=!1,c.length=0);let e=!1,t=[];if(c.forEach((a,i)=>{if(void 0===a.added)return;a.width=n[a.id]?.width||a.width;let o=void 0!==c.slice(i+1).find(e=>e&&"hide"===e.action&&!0===e.isActive&&e.width>0),s=Math.floor(a.added+h)-Math.floor(r)>=0;if(o||s){a.locked&&void 0===c.slice(i+1).find(e=>e&&"shrink"===e.action&&e.isActive)&&p.current&&(a.locked=void 0);let e=d[i];t.push({...e,barId:n[e.id]?.barId,locked:!!a.locked})}else a.added=void 0,a.isActive=!1,e=!0}),p.current){let e=i(d,t);return e.forEach(e=>{o({mutableRules:c,index:d.findIndex(t=>t===e),rule:e,items:n})}),[...t,...e]}let a=c.find(e=>e&&e.isActive&&"shrink"===e.action&&!e.locked);if(a&&a.minWidth){let i=Math.floor(a.width)-Math.floor(a.minWidth);if(i<=0){let e=t.find(e=>{let{id:t,locked:n,action:r}=e;return!n&&t===a.id&&r===a.action});if(e){let i=c.findIndex(e=>void 0===e||!e.isActive),o=d[i=i>=0?i:c.length],s=r-g+h+1;o?("shrink"===o.action&&(e.locked=!0,a.locked=s,a.width=n[a.id]?.width||a.width),t.push({...o,barId:n[o.id]?.barId}),c[i]={added:s,width:n[o.id]?.width||c[i]?.width||0,id:o.id,isActive:!0,minWidth:"shrink"===o.action?o.minWidth:void 0,action:o.action}):(e.locked=!0,a.locked=r,a.width=n[a.id]?.width||a.width)}}else if(!e){let e;if(c.forEach(t=>{e=t&&"hide"===t.action?t:e}),e){let n=i-4>e?.width,a=e.added&&e.added<r;n&&a&&(t.pop(),e.isActive=!1,e.added=r-e.width)}}}else{let e=c.findIndex(e=>void 0===e||!e.isActive),a=d[e=e>=0?e:c.length];if(a){t.push({...a,barId:n?.[a.id]?.barId});let i=n[a.id]?.width||c[e]?.width||0,o=r;"shrink"===a.action&&r-m<0&&(o=Math.round(m-h+4)),c[e]={added:o,id:a.id,isActive:!0,width:i,minWidth:"shrink"===a.action?a.minWidth:void 0,action:a.action}}}let s=i(d,t);return s.forEach(e=>{let t=d.findIndex(t=>t===e);c[t]||(c[t]={id:e.id,width:0,isActive:!0,action:"hide"});let r=c[t];r.isActive=!0,r.whenHidden=e.whenHidden,r.minWidth=e.minWidth,r.action=e.action,r.width=n[e.id]?.width||r.width}),[...t,...s]},[u,c,m,g,p,d,n,r,h])},l=a.createContext({setContainerWidth:()=>{},setBarWidth:()=>{},setItemWidth:()=>{},unsetItem:()=>{},rulesToApply:[],allRules:[]}),d=e=>{let{children:t,rules:n,gap:i}=e,[o,d]=(0,a.useState)(0),[c,u]=(0,a.useState)([]),[p,m]=(0,a.useState)({}),h=s({bars:c,items:p,rules:n,containerWidth:o,gap:i}),g=(0,a.useCallback)((e,t)=>{u(n=>{let r=[...n].map(n=>n.id===e?{...n,width:t}:n);return r.find(t=>{let{id:n}=t;return n===e})?r:[...r,{id:e,width:t}]})},[]),_=(0,a.useCallback)((e,t,n)=>m(r=>({...r,[e]:{width:t,barId:n}})),[]),f=(0,a.useCallback)(e=>m(t=>({...t,[e]:void 0})),[]);return(0,r.jsx)(l.Provider,{value:{setContainerWidth:d,setItemWidth:_,setBarWidth:g,unsetItem:f,rulesToApply:h,allRules:n},children:t})}},752060:function(e,t,n){"use strict";n.d(t,{t:()=>c});var r=n(552322),a=n(202784),i=n(72779),o=n.n(i),s=n(850746),l=n.n(s);let d=e=>{let t=document.createElement("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");return n?.drawImage(e,0,0),t},c=e=>{let{preview:t,useClone:n=!1,lazilyGenerate:i=!1,className:s,dataTestid:c,onGenerateStart:u,onGenerateEnd:p}=e,m=(0,a.useRef)(null);(0,a.useLayoutEffect)(()=>{m?.current!=null&&null!=t&&(m.current.innerHTML="",i&&t.needGenerate&&(u?.(),t.updateContentPreview(),p?.()),n?m.current.appendChild(d(t.value)):m.current.appendChild(t.value))},[m,t?.needGenerate,n,i,t,u,p]);let h=void 0===t||t.needGenerate;return(0,r.jsx)("div",{className:o()(l().framePreview,s,{[l().framePreview_loading]:h}),ref:m,"data-testid":c,"aria-busy":h})}},633295:function(e,t,n){"use strict";n.d(t,{L:()=>T});var r,a,i,o,s=n(552322),l=n(202784),d=n(72779),c=n.n(d),u=n(826743);function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var m=(0,l.forwardRef)(function(e,t){return l.createElement("svg",p({width:"1em",height:"1em",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),r||(r=l.createElement("path",{d:"M7.538 5H1v17h17v-6.539",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),a||(a=l.createElement("path",{d:"M12.343 4a1 1 0 0 1 1-1H20v6.657a1 1 0 0 1-2 0V6.414l-6.778 6.778a1 1 0 0 1-1.414-1.414L16.586 5h-3.243a1 1 0 0 1-1-1Z",fill:"currentColor"})))});function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var g=(0,l.forwardRef)(function(e,t){return l.createElement("svg",h({width:"1em",height:"1em",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),i||(i=l.createElement("path",{d:"M9 8.5a2 2 0 1 1 2 2 1 1 0 0 0-1 1v1a1 1 0 1 0 2 0V12c1.725-.444 3-1.636 3-3.5a4 4 0 0 0-8 0 1 1 0 1 0 2 0ZM11 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",fill:"currentColor"})),o||(o=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 11c0 6.075-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0s11 4.925 11 11Zm-2 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",fill:"currentColor"})))}),_=n(208930),f=n.n(_),E=n(729394),v=n(641151),I=n(40436),b=n(337525);let x=e=>{let{account:t,boardReferrerPlatform:n}=e;return(0,E.Iz)({account:t,boardReferrerPlatform:n})?I.u.t("preproductUi.components.helpCenter.helpCenterMenu.learnMoreText.isOnOnlineWhiteboard"):(0,E.e1)({account:t,boardReferrerPlatform:n})?I.u.t("preproductUi.components.helpCenter.helpCenterMenu.learnMoreText.isOnMiroFlowcharts"):(0,E.eg)({account:t,boardReferrerPlatform:n})?I.u.t("preproductUi.components.helpCenter.helpCenterMenu.learnMoreText.isOnMiroDiagraming"):I.u.t("preproductUi.components.helpCenter.helpCenterMenu.learnMoreText")},T=e=>{let{onLearnMoreClick:t,onFaqClick:n,helpCenterMenuClass:r}=e,{account:a,boardReferrerPlatform:i}=(0,v.H)(),{t:o}=(0,b.I)(I.u),d=(0,l.useMemo)(()=>x({account:a,boardReferrerPlatform:i}),[a,i]);return(0,s.jsxs)("ul",{"data-testid":"help-center-menu",className:c()(f().helpCenterMenu,r),children:[(0,s.jsx)("li",{"data-testid":"help-center-menu-item",className:f().helpCenterMenu_Item,children:(0,s.jsx)(u.z,{view:"flat",className:f().helpCenterMenu_Item_Button,onClick:t,icon:(0,s.jsx)(m,{}),children:(0,s.jsx)("span",{className:f().helpCenterMenu_Item_Button_Text,children:d})})}),null!==n?(0,s.jsx)("li",{"data-testid":"help-center-menu-item",className:f().helpCenterMenu_Item,children:(0,s.jsx)(u.z,{view:"flat",className:f().helpCenterMenu_Item_Button,onClick:n,icon:(0,s.jsx)(g,{}),children:(0,s.jsx)("span",{className:f().helpCenterMenu_Item_Button_Text,children:o("preproductUi.components.helpCenter.helpCenterMenu.btnText")})})}):null]})}},895297:function(e,t,n){"use strict";n.d(t,{t:()=>v});var r=n(552322);n(202784);var a=n(238771),i=n(433723),o=n(63856),s=n(214864),l=n(282357),d=n(968917),c=n(337525),u=n(355976),p=n(789073),m=n(423304),h=n(604930);let g={backgroundColor:"transparent !important","& img":{transition:"all 0.3s cubic-bezier(0.23, 1.75, 0.32, 0.83)"},"& img[alt]":{width:"$9",height:"$9"}},_=(0,i.zo)(o.h,{...g,variants:{isVisuallyEnabled:{true:{"&:hover img":{transform:"scale(1.1)"},"&:active img":{transform:"scale(0.9)"}},false:{filter:"grayscale(1)"}}}}),f=(0,i.zo)(s.h.Item,{...g,padding:"0","&:hover img":{transform:"scale(1.1)"},"&:active img":{transform:"scale(0.9)"}}),E=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;(0,m.ou)().track(u.A.REACTIONS_CLICKED,{[u.d.REACTION_TYPE]:e,[u.d.REACTION_EVENT_TYPE]:t,[u.d.ACTION_SOURCE]:n,[u.d.SYNC_USERS]:(0,m.JW)().getUsersLength(),[u.d.COUNT]:r})},v=e=>{let{actionSource:t=a.vF.showtimeParticipantBar,isEnabled:n=!0,idPrefix:i,onEmotion:o,isDropdownMenu:s=!1}=e,{t:u}=(0,c.I)(p.$);return s?(0,r.jsx)(r.Fragment,{children:h.l.map(e=>{let[n,s,d]=e;return(0,r.jsxs)(l.u,{children:[(0,r.jsx)(l.u.Trigger,{asChild:!0,children:(0,r.jsx)(f,{onSelect:e=>{e.preventDefault(),(0,m.I_)().sendEmotion(n),E(n,a.PK.click,t),o?.(n)},id:i&&i+n,"data-testid":`reaction_${n}`,"aria-label":u("reactions.verb",{reactionName:u(s)}),children:(0,r.jsx)("img",{src:d,alt:u(s)})})}),(0,r.jsx)(l.u.Content,{children:u(s)})]},n)})}):(0,r.jsx)(r.Fragment,{children:h.l.map((e,s)=>{let[c,p,h]=e;return(0,r.jsxs)(l.u,{children:[(0,r.jsx)(l.u.Trigger,{asChild:!0,children:(0,r.jsx)(d.o.Icon,{asChild:!0,children:(0,r.jsx)(_,{disabled:!n,id:i&&i+c,"data-testid":`reaction_${c}`,isVisuallyEnabled:n,onClick:()=>{(0,m.I_)().sendEmotion(c),E(c,a.PK.click,t),o?.(c)},onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),(0,m.I_)().sendEmotion(c),E(c,a.PK.keypress,t),o?.(c))},autoFocus:0===s,"aria-label":u("reactions.verb",{reactionName:u(p)}),children:(0,r.jsx)("img",{src:h,alt:u(p)})})})}),(0,r.jsx)(l.u.Content,{children:u(p)})]},c)})})}},462699:function(e,t,n){"use strict";n.d(t,{Om:()=>i});var r=n(552322),a=n(202784);let i=(0,a.forwardRef)((e,t)=>{let{contentContainerStyle:n,data:i,renderItem:o,extractKey:s,style:l,bottomSheet:d,horizontal:c,itemWidth:u,itemHeight:p,initialNumToRender:m}=e,h=a.useMemo(()=>i.map(s),[i,s]),[g,_]=a.useState([]);return(0,r.jsx)("FlatList",{ref:t,contentContainerStyle:n,mount:a.useCallback((e,t)=>{let n=i.findIndex(e=>s(e)===t);-1!==n&&_(r=>[...r,[[e,t],o(i[n])]])},[i,s,o]),unmount:a.useCallback(e=>{_(t=>t.filter(t=>{let[[n]]=t;return e!==n}))},[]),keys:h,style:l,bottomSheet:d,horizontal:c,itemWidth:u,itemHeight:p,initialNumToRender:m,children:g.map(e=>{let[[t,n],a]=e;return(0,r.jsx)("FlatListItem",{viewKey:t,itemKey:n,children:a},t)})})})},911642:function(e,t,n){"use strict";n.d(t,{o:()=>r});let r="TextInput"},351638:function(e,t,n){"use strict";n.d(t,{Q:()=>r});let r="TouchableHighlight"},283277:function(e,t,n){"use strict";n.d(t,{OQ:()=>l});var r=n(552322),a=n(202784),i=n(334291),o=n.n(i),s=n(965033);let l=(0,s.U5)(()=>({}))(a.memo(()=>{let{isVisible:e,onClose:t}=(0,s.dm)(o(),o());return(0,r.jsx)(s.Vq,{isLoading:!0,onClose:t,isVisible:e,containerDataAutoTestId:"loader__layout",children:(0,r.jsx)(r.Fragment,{})})}))},775038:function(e,t,n){"use strict";n.d(t,{p:()=>r});let r=(0,n(433723).zo)("div",{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"$100",padding:"0 $300 $200 $300","> *":{flexGrow:0,"&:first-child":{flexGrow:1},'&:first-child[aria-haspopup="menu"]':{flexGrow:0}},'button[data-state="open"]':{color:"var(--colors-text-primary)"},variants:{slidesMode:{true:{paddingTop:"$200"}}}})},255422:function(e,t,n){"use strict";n.d(t,{F:()=>h});var r=n(552322);n(202784);var a=n(774418),i=n(575362),o=n(337431),s=n(337525),l=n(323239),d=n(261178),c=n(97438),u=n(254914);let p="showtime-controls",m={root:p,startButton:`${p}__start`,stopButton:`${p}__stop`,joinButton:`${p}__join`},h=e=>{let{onStart:t}=e,n=(0,a.I0)(),p=(0,a.v9)(c.fc),h=(0,a.v9)(c.d1),g=void 0!==(0,a.v9)(c.cT),{t:_}=(0,s.I)(u.a),f=_("showtime.panelbutton.play"),E=_("showtime.meetingControls.stop"),v=_("showtime.panelbutton.join");return g?h?(0,r.jsx)(i.z,{variant:"danger-secondary",size:"large",fluid:!0,onClick:()=>n((0,d.sT)(l.T6.FRAMES_SIDEBAR)),"data-testid":m.stopButton,"aria-label":E,children:E}):p?null:(0,r.jsx)(i.z,{variant:"primary",fluid:!0,size:"large",onClick:()=>n((0,d.D)(l.T6.FRAMES_SIDEBAR)),"data-testid":m.joinButton,"aria-label":v,children:v}):(0,r.jsxs)(i.z,{variant:"primary",fluid:!0,size:"large",onClick:t,"data-testid":m.startButton,"aria-label":f,children:[(0,r.jsx)(i.z.IconSlot,{children:(0,r.jsx)(o.IconPlay,{})}),(0,r.jsx)(i.z.Label,{children:f})]})}},221270:function(e,t,n){"use strict";n.d(t,{v:()=>r});let r=()=>null},871564:function(e,t,n){"use strict";n.d(t,{Z:()=>o});var r=n(552322);n(202784);var a=n(214864),i=n(190138);let o=e=>{let{item:t,onClick:n,selectedFramesCount:o=0}=e;if((0,i.s)(t))return(0,r.jsx)(a.h.Separator,{},t.id);if(t.hidden||t.subMenuItems?.every(e=>e.hidden))return null;let s=e=>(0,r.jsxs)(a.h.Item,{id:e.id,"aria-disabled":e.disabled,textValue:e.label,"aria-label":e.label,"data-testid":e.testId??e.id,onSelect:t=>{t.stopPropagation(),e.handler(t),n?.(t)},children:[e.icon&&(0,r.jsx)(a.h.IconSlot,{children:e.icon}),e.text,e.countBadgeVisible&&(0,r.jsxs)("span",{children:["\xa0(",o,")"]})]},e.id);return t.subMenuItems?(0,r.jsxs)(a.h.Sub,{children:[(0,r.jsxs)(a.h.SubTrigger,{"data-testid":t.testId??t.id,children:[t.icon&&(0,r.jsx)(a.h.IconSlot,{children:t.icon}),t.text]}),(0,r.jsx)(a.h.SubContent,{children:t.subMenuItems.map(s)})]}):s(t)}},6865:function(e,t,n){"use strict";n.d(t,{E:()=>l});var r=n(552322);n(202784);var a=n(282357),i=n(214864),o=n(337525),s=n(254914);let l=e=>{let{dataTestid:t,onCloseAutoFocus:n,isOpen:l,onOpen:d,onClose:c,dropdownToggle:u,stopKeyDownPropagation:p,children:m}=e,{t:h}=(0,o.I)(s.a),g=(0,r.jsx)(a.u,{children:(0,r.jsxs)(i.h,{open:l,onOpen:d,onClose:c,children:[(0,r.jsx)(i.h.Trigger,{asChild:!0,children:(0,r.jsx)(a.u.Trigger,{asChild:!0,children:u})}),(0,r.jsx)(a.u.Portal,{children:(0,r.jsx)(a.u.Content,{children:h("showtime.actions.moreActions")})}),(0,r.jsx)(i.h.Portal,{children:(0,r.jsx)(i.h.Content,{align:"start",side:"bottom","data-testid":t,onCloseAutoFocus:n,children:m})})]})});return p?(0,r.jsx)("div",{onKeyDown:e=>{"Escape"!==e.key&&e.stopPropagation()},children:g}):g}},538267:function(e,t,n){"use strict";n.d(t,{g:()=>c});var r=n(552322),a=n(202784),i=n(63856),o=n(337431),s=n(72238),l=n(337525),d=n(254914);let c=a.forwardRef((e,t)=>{let{ariaLabel:n,dataTestid:a,...c}=e,{t:u}=(0,l.I)(d.a);return(0,r.jsx)(i.h,{ref:t,"aria-label":n??u("showtime.actions.moreActions"),"data-testid":a,"data-selection-class":s.xy,...c,children:(0,r.jsx)(o.IconDotsThree,{})})})},639455:function(e,t,n){"use strict";n.d(t,{V:()=>s});var r=n(552322),a=n(337525),i=n(254914),o=n(337431);let s=e=>{let{t}=(0,a.I)(i.a);return{rename:{text:t("showtime.contextMenu.rename.text"),icon:(0,r.jsx)(o.IconPen,{}),...e.rename},delete:{text:t("showtime.contextMenu.delete.text"),icon:(0,r.jsx)(o.IconTrash,{}),...e.delete},addFrameBelow:{text:t("showtime.contextMenu.addFrameBelow.text"),label:t("showtime.contextMenu.addFrameBelow.label"),icon:(0,r.jsx)(o.IconAddLineBottom,{}),...e.addFrameBelow}}}},586118:function(e,t,n){"use strict";n.d(t,{x:()=>I});var r=n(552322),a=n(202784),i=n(72779),o=n.n(i),s=n(839232),l=n(282357),d=n(337525),c=n(426755),u=n(930736),p=n.n(u),m=n(313391);let h={FRAME_TITLE_CONTAINER:"frames-sidebar__frame-title-container",FRAME_NUMBER_LABEL:"frames-sidebar__frame-number-label",FRAME_TITLE_LABEL:"frames-sidebar__frame-title-label",FRAME_UNHIDE_BUTTON:"frames-sidebar__frame-unhide-button"};var g=n(254914);let _=["Escape"],f=e=>{let{frameId:t,frameName:n,frameIndex:i,sectionLastFrameIndex:s,isEditable:l,isRenaming:u,onRenameStart:m,onRenameEnd:f}=e,{t:E}=(0,d.I)(g.a),v=(0,c.js)(),[I,b]=(0,a.useState)(n),x=""!==I;(0,a.useEffect)(()=>{b(n)},[n]);let T=(0,a.useRef)(null);(0,a.useEffect)(()=>{null!==T.current&&u&&T.current.select()},[u]);let S=()=>{l&&m()},A=()=>{l&&m()},w=(0,a.useCallback)(e=>{let t=e.trim();b(t),f(t)},[f]),y=e=>{e.stopPropagation()},N=e=>{"Tab"!==e.key&&(e.stopPropagation(),b(e.currentTarget.value),_.includes(e.key)&&w(e.currentTarget.value))},C=e=>{w(e.target.value)},R=(0,a.useCallback)(e=>{e.preventDefault(),w(I)},[I,w]),O=void 0===s?`${i+1}`:E("showtime.framesListItem.indexFromTo",{from:i+1,to:s+1}),M=v?null:(()=>{let e=x?I:E("showtime.framesListItem.untitled");if(u)return(0,r.jsx)("form",{onSubmit:R,children:(0,r.jsx)("input",{ref:T,className:p().nameInput,type:"text","aria-label":E("showtime.framesListItem.a11y.editTitle",{title:e}),name:`${t}-name`,defaultValue:I,onMouseDown:y,onKeyDown:N,onBlur:C})});let n=x?p().nameText:p().untitledText;return l?(0,r.jsx)("button",{type:"button","aria-label":E("showtime.framesListItem.a11y.editTitle",{title:e}),className:o()(n,p().nameEditable,p().trigger),onClick:S,title:e,onFocus:A,"data-testid":h.FRAME_TITLE_LABEL,children:e}):(0,r.jsx)("span",{className:n,"data-testid":h.FRAME_TITLE_LABEL,title:e,children:e})})();return(0,r.jsxs)("div",{className:p().name,"data-testid":h.FRAME_TITLE_CONTAINER,children:[(0,r.jsx)("span",{className:p().nameIndex,"data-testid":h.FRAME_NUMBER_LABEL,"aria-hidden":!0,children:O}),M]})};var E=n(322584),v=n(449855);let I=e=>{let t,n,i,u,{frameId:_,frameName:I,frameIndex:b,sectionLastFrameIndex:x,framesCount:T,dataTestId:S=`frame${b}`,showThumbnail:A,canEditFrameName:w,selectedFramesCount:y,draggedFramesCount:N=0,isHidden:C,isSelected:R,isRenaming:O,isContextMenuOpened:M,isDragOverlay:k=!1,showSection:D=!1,shouldUseSmallPreview:P,menuSlot:j,additionalSlot:L,parentOverlay:F,renderFramePreview:U,onClick:B,onContentHiddenToggle:G,onRenameStart:W,onRenameEnd:H,onContextMenu:V,onArrowKeyNavigation:z}=e,Z=P?.(_)||!1,{t:K}=(0,d.I)(g.a),Y=(0,c.js)(),q=R&&1===y,$=w&&q,J=(0,a.useRef)(null),X=(0,a.useCallback)(()=>{let e=Math.min(N,3),t=[];for(let n=0;n<=e-1;n+=1){let e={top:8*n,zIndex:-(n+1)};t.push((0,r.jsx)("div",{className:p().dragOverlayStackItem,style:e},n))}return t},[N]);return(0,r.jsx)(s.r,{hmTap:e=>{if(!G)return;let t=e.target;if(!t?.closest("button")&&t?.tagName!=="INPUT"&&J.current?.contains(t)!==!0){if(!Y&&C){e.stopPropagation(),G(!1);return}B(e)}},children:(0,r.jsxs)("div",{className:p().container,children:[(0,r.jsxs)("div",{"data-testid":S,className:o()(p().root,{[p().root_indented]:Z,[p().root_selected]:R,[p().root_contentHidden]:C&&!Y,[p().root_dragOverlay]:k,[p().root_contextMenuOpened]:M,[p().root_isRenaming]:O,[p().root_showSection]:D}),tabIndex:0,role:"option","aria-label":I||K("showtime.framesListItem.untitled"),"aria-current":q?"true":"false","aria-selected":R?"true":"false","aria-posinset":b+1,"aria-setsize":T,onContextMenu:e=>{e.preventDefault(),V()},onKeyDown:e=>{("ArrowUp"===e.key||"ArrowDown"===e.key)&&(e.preventDefault(),z("ArrowUp"===e.key?v.u.UP:v.u.DOWN))},children:[(0,r.jsxs)("div",{className:p().content,children:[C?(n=A?36:24,i=(0,E.Yd)().permissionChecker.canHideFrames(),u=(0,r.jsxs)("div",{className:o()(p().preview,!A&&p().preview_listView),children:[(0,r.jsx)("div",{className:p().overlay,children:(0,r.jsxs)("div",{className:p().content_hidden,children:[(0,r.jsx)(m.Z,{width:n,height:n}),(0,r.jsx)("p",{className:p().content_hidden_message,children:K("showtime.framesListItem.hiddenForNow")})]})}),Y?(0,r.jsxs)("div",{className:p().info,children:[(0,r.jsx)(f,{frameId:_,frameName:I,frameIndex:b,sectionLastFrameIndex:x,isEditable:$,isRenaming:O,onRenameStart:W,onRenameEnd:H}),(0,r.jsx)("div",{className:p().menuSlot,children:j})]}):null]}),i&&!Y?(t=u,(0,r.jsxs)(l.u,{children:[(0,r.jsx)(l.u.Trigger,{asChild:!0,"data-testid":h.FRAME_UNHIDE_BUTTON,children:t}),(0,r.jsx)(l.u.Content,{children:K("showtime.framesListItem.showFrame")})]})):u):(0,r.jsxs)("div",{className:o()(p().preview,!A&&p().preview_listView,Z&&p().small_preview),children:[A&&U(),(0,r.jsx)("div",{className:p().overlay}),(0,r.jsxs)("div",{className:p().info,children:[(0,r.jsx)(f,{frameId:_,frameName:I,frameIndex:b,sectionLastFrameIndex:x,isEditable:$,isRenaming:O,onRenameStart:W,onRenameEnd:H}),(0,r.jsx)("div",{className:p().menuSlot,children:j})]})]}),L]}),k&&!D&&X(),F]}),D&&(0,r.jsxs)("div",{className:o()(p().sectionSlot,k&&p().sectionSlotDragOverlay),children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]})]})})}},735991:function(e,t,n){"use strict";n.d(t,{L:()=>q});var r=n(552322),a=n(202784),i=n(928316),o=n(99077),s=n(88366),l=n(866548),d=n(581084),c=n(337525),u=n(426755),p=n(254914),m=n(681415),h=n(941806),g=n.n(h);function _(e){return"href"in e?(0,r.jsx)("a",{href:e.href,className:g().root,children:e.title}):(0,r.jsx)("button",{type:"button",onClick:e.onClick,className:g().root,children:e.title})}var f=n(843499),E=n(648346);let[v,I]=(0,f.Tu)({defaultValue:0}),b=I((e,t)=>t),x=()=>({lastScrollTop:(0,E.KO)(v),setLastScrollTop:(0,E.YZ)(b)}),T=e=>{let{displayableFrames:t,isScrollPersistedWhenReopen:n,listItemHeights:r,viewMode:i}=e,{lastScrollTop:o,setLastScrollTop:s}=x();return{lastScrolledItemIndex:(0,a.useMemo)(()=>n?o>t.length*r[i]?(s(0),0):Math.floor(o/r[i]):0,[t,n,o,r,i,s]),handleOnScroll:(0,a.useCallback)(e=>{n&&s(e.target.scrollTop)},[n,s])}},S={dragOriginIndex:void 0,draggedIndices:[]};var A=n(276635);let w=(e,t,n,r)=>{let i=(0,a.useRef)(0),[o,s]=(0,a.useState)(0);return(0,a.useLayoutEffect)(()=>{if(null===e.current||void 0===r||n.length<2){s(0);return}let a=(0,A.sum)(n.filter(e=>e<r).map(t)),o=Math.max(0,i.current-a),l=Math.max(0,a-i.current);e.current.scrollTo({top:o,behavior:"auto"}),s(l)},[n,r]),{paddingTop:o,beforeDragStart:()=>{null!==e.current&&(i.current=e.current.scrollTop)},afterDragCancel:()=>{e.current?.scrollTo({top:i.current,behavior:"auto"})}}};var y=n(449855),N=n(333861);function C(e,t){let n=e.querySelector(`[data-item-index="${t}"] [tabindex="0"]`);return n instanceof HTMLElement&&(N.h7.safari&&(n.contentEditable="true"),n.focus(),N.h7.safari&&(n.contentEditable="false"),!0)}let R=(e,t)=>{let n=(0,a.useRef)(),r=(0,a.useCallback)(()=>{let{current:t}=n;void 0!==t&&e.current&&C(e.current,t)&&(n.current=void 0)},[]),i=(0,a.useCallback)((e,a,i)=>{let o;o=i===y.u.DOWN?a+1===e?0:a+1:a-1<0?e-1:a-1,t.current?.scrollIntoView({index:o,done:()=>{n.current=o,r()}})},[]);return{updateListFocus:r,handleArrowKeyNavigation:i}};var O=n(482851),M=n(72238);let k=e=>{let{id:t,children:n,disabled:a,className:i,dataSelectionClass:o=M.xy}=e,{listeners:s,setNodeRef:d,transform:c,transition:u,isDragging:p}=(0,l.nB)({id:t,disabled:a,transition:null});return(0,r.jsx)("div",{ref:d,style:{transform:O.ux.Transform.toString(c),opacity:p?.1:1,transition:u},className:i,...s,"data-selection-class":o,children:n})};function D(e,t){return e===t}var P=n(282357),j=n(575362),L=n(337431),F=n(389958),U=n(883962),B=n.n(U);let G=(0,a.forwardRef)((e,t)=>{let{onClick:n,dataTestid:i}=e,{t:o}=(0,c.I)(p.a),s=a.useRef(null);return(0,a.useImperativeHandle)(t,()=>({focus:()=>{s.current?.focus()}})),(0,r.jsx)("div",{className:B().showtimeAddItemButtonContainer,children:(0,r.jsx)(P.u.Provider,{children:(0,r.jsxs)(P.u,{children:[(0,r.jsx)(P.u.Trigger,{asChild:!0,children:(0,r.jsx)(j.z,{ref:s,"data-testid":i,"aria-label":o("showtime.common.addFrame"),onClick:n,variant:"secondary",size:"x-large",rounded:!0,children:(0,r.jsx)(F.l,{className:B().showtimeAddItemButton__svg,children:(0,r.jsx)(L.IconPlus,{})})})}),(0,r.jsx)(P.u.Content,{children:o("showtime.common.addFrame")})]})})})});var W=n(173361),H=n.n(W);function V(){document.getElementById(M.ie)?.querySelector("button")?.focus()}let z={coordinateGetter:l.is,keyboardCodes:{start:[],cancel:["Escape"],end:[]}},Z={activationConstraint:{distance:10}},K={activationConstraint:{delay:250,tolerance:5}},Y={Header:e=>{let{context:t,children:n,...a}=e,{t:i}=(0,c.I)(p.a);return(0,r.jsxs)("div",{...a,children:[(0,r.jsx)(_,{title:i("showtime.framesList.skipLinkTitle"),onClick:V}),n]})},List:(0,a.forwardRef)((e,t)=>{let{context:n,...a}=e;return(0,r.jsx)("div",{ref:n?.rootRef,"data-testid":n?.props.rootAutotestId,children:(0,r.jsx)("div",{role:"listbox","aria-multiselectable":"true",className:H().ulRoot,ref:t,"data-dragging":n?.isDragging,...a})})}),Item:e=>{let{context:t,...n}=e;return(0,r.jsx)("div",{...n})},Footer:e=>{let{context:t}=e;return t?.props.isEditable&&t?.props.renderFooter?(0,r.jsx)(G,{ref:t?.showtimeAddItemButtonHandle,dataTestid:t?.props.addItemAutotestId,onClick:t?.props.onAdd}):null}},q=(0,a.forwardRef)((e,t)=>{let{frames:n,selectedTokens:c,dragOverlayAutotestId:p,viewMode:h,isEditable:g=!0,isScrollPersistedWhenReopen:_,renderListItem:f,listItemHeights:E=M.G3,slideSectionHeights:v=M.Ec}=e,I={[m.M.FirstChild]:v[h],[m.M.NonInitial]:0,[m.M.None]:E[h]},b=(0,u.js)(),x=(0,u.Yz)(),A=(0,a.useMemo)(()=>n.filter(e=>b?void 0!==e.slideContainerId&&x(e.slideContainerId):e.childState!==m.M.NonInitial),[n,x,b]),{frameTokens:y,sectionLastIndexMap:N}=(0,a.useMemo)(()=>{let e=new Map,t=[];for(let r of n)t.push(r.token),r.slideContainerId&&e.set(r.slideContainerId,r.index);return{frameTokens:t,sectionLastIndexMap:e}},[n]),O=(0,a.useRef)([]),[P,j]=(0,a.useState)(),L=(0,a.useRef)(null),F=(0,a.useRef)(null),U=(0,a.useRef)(null),B=(0,a.useRef)(null),{lastScrolledItemIndex:G,handleOnScroll:W}=T({displayableFrames:A,isScrollPersistedWhenReopen:_,listItemHeights:E,viewMode:h}),V=(0,a.useMemo)(()=>{let e=new Map;return n.forEach(t=>{t.slideContainerId&&(e.has(t.slideContainerId)||e.set(t.slideContainerId,{frames:[]}),e.get(t.slideContainerId)?.frames.push(t),t.childState===m.M.FirstChild&&(e.get(t.slideContainerId).firstChild=t.token))}),e},[n]),{draggedIndices:q,dragOriginIndex:$,isDragging:J,...X}=function(e,t){let[{dragOriginIndex:n,draggedIndices:r},i]=(0,a.useState)(S),o=(0,a.useCallback)(()=>i(S),[]),s=(0,a.useCallback)(n=>{let r=e.indexOf(n.active.id.toString());if(-1===r){o();return}let a=t.includes(n.active.id.toString())?t.map(t=>e.indexOf(t)):[r];i({dragOriginIndex:r,draggedIndices:a})},[e,t,o]);return{dragOriginIndex:n,draggedIndices:r,isDragging:r.length>0,onDragStart:s,onDragEnd:o,onDragCancel:o}}(y,c),Q=(0,a.useMemo)(()=>A.filter((e,t)=>b?void 0!==e.slideContainerId&&x(e.slideContainerId):!(t!==$&&q.includes(t))),[A,$,q,x,b]),ee=w(F,e=>{let t=Q[e];return t?I[t.childState]:E[h]},q,$);(0,a.useLayoutEffect)(()=>{null!==U.current&&(U.current.style.paddingTop=`${ee.paddingTop}px`)},[ee.paddingTop]),(0,a.useEffect)(()=>{let e=c.length&&O.current[0]===c[0];if(O.current=c,!b&&(1!==c.length||e))return;let t=Q.findIndex(e=>e.token===c[0]);if(-1===t){let e=n.find(e=>e.token===c[0]);if(!e?.slideContainerId)return;if(!b){let n=V.get(e.slideContainerId)?.firstChild;t=Q.findIndex(e=>e.token===n)}}setTimeout(()=>L.current?.scrollIntoView({behavior:"smooth",index:t}))},[n,Q,V,c,b]);let et=(0,o.Dy)((0,o.VT)(o.Lg,z),(0,o.VT)(o.MA,Z),(0,o.VT)(o.LO,K)),{updateListFocus:en,handleArrowKeyNavigation:er}=R(F,L);(0,a.useImperativeHandle)(t,()=>({startRenaming(e){j(e.token)},focusItem(e){let t=e;if(F.current){if(!b){let r=n.find(t=>t.index===e),a=r?.slideContainerId&&r.childState!==m.M.FirstChild;if(!b&&a){let e=r.slideContainerId,n=V.get(e)?.firstChild;t=A.findIndex(e=>e.token===n)}}C(F.current,t)}},scrollToAddNewFrameButton(){B.current?.focus()}}),[n,V,A,b]);let ea={viewMode:h,selectedTokens:c,draggedIndices:q,dragOriginIndex:$,isDragging:J,rootRef:U,showtimeAddItemButtonHandle:B,props:e},ei=function(t,r,a,i){let o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return{listContext:i,index:t,sectionLastFrameIndex:r,sidebarIndex:a.index,isSelected:e.isItemSelected(a.token),isDragged:q.includes(t),isDragOrigin:i.dragOriginIndex===t,isDragOverlay:o,isRenaming:P===a.token,onSelect:n=>{let r=n.shiftKey,i=n.metaKey||n.ctrlKey;e.toggleFrameSelection({frameToken:a.token,index:t,rangeSelection:r,addToSelection:i,jumpToFrame:!0})},onDeselect:n=>{let r=n.shiftKey,i=n.metaKey||n.ctrlKey;e.toggleFrameSelection({frameToken:a.token,index:t,rangeSelection:r,addToSelection:i,jumpToFrame:!0})},onRemove:()=>{i.props.onRemove?.([a.token])},onRenameStart:()=>{j(a.token)},onRenameEnd:()=>{j(void 0)},onArrowKeyNavigation(e){er(n.length,t,e)}}},eo=(0,r.jsx)(d.OO,{data:Q,context:ea,computeItemKey:(e,t)=>t.token,itemContent:(e,t,n)=>(0,r.jsx)(k,{id:t.token,disabled:J,children:f(t,ei(e,void 0!==t.slideContainerId?N.get(t.slideContainerId):void 0,t,n))},t.token),initialTopMostItemIndex:_?G:0,components:Y,increaseViewportBy:2*E[h],ref:L,scrollerRef:e=>{e instanceof Window||(e&&e.removeAttribute("tabindex"),F.current=e)},onScroll:W,onMouseDown:ee.beforeDragStart,className:H().root,style:{paddingTop:ee.paddingTop},"data-scrollable-element":"true",itemsRendered:()=>{setTimeout(()=>{en()})}});if(!g)return eo;let es=void 0!==$?n[$]:void 0,el=es?.slideContainerId!==void 0?N.get(es.slideContainerId):void 0;return(0,r.jsxs)(o.LB,{sensors:et,modifiers:[s.DL],collisionDetection:o.ey,onDragStart:e=>{X.onDragStart(e)},onDragEnd:t=>{if(X.onDragEnd(t),null===t.over)return;let r=t.active.id.toString(),a=c.includes(r)?c:[r],i=b?A:n,o=i.map(e=>e.token),s=i.findIndex(e=>e.token===t.active.id),l=i.findIndex(e=>e.token===t.over.id),d=function(e,t,n,r){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:D,i=[],o=r>n;for(let n=0;n<Math.max(e.length,r+1);n++)o||n!==r||i.push(...t),void 0===t.find(t=>a(e[n],t))&&i.push(e[n]),o&&n===r&&i.push(...t);return i}(o,a,s,l);e.onOrderChange?.(d,a,{sourceIndex:s,targetIndex:l})},onDragCancel:e=>{X.onDragCancel(e)},children:[(0,r.jsx)(l.Fo,{items:y,strategy:l.qw,children:eo}),(0,i.createPortal)((0,r.jsx)(o.y9,{dropAnimation:null,children:void 0===es?null:(0,r.jsx)("div",{"data-testid":p,children:f(es,ei($,el,es,ea,!0))})}),document.body)]})})},561584:function(e,t,n){"use strict";n.d(t,{x:()=>d});var r=n(552322),a=n(202784),i=n(337525),o=n(337431),s=n(254914),l=n(283153);let d=e=>{let{viewMode:t,onSetViewMode:n}=e,{t:d}=(0,i.I)(s.a);return(0,a.useMemo)(()=>{let e=t===l.V.LIST,a=e?d("showtime.common.thumbnailView.label"):d("showtime.common.listView.label");return{disabled:!1,disabledTooltip:"",hidden:!1,id:"panelMode",text:a,label:a,handler:()=>{n(e?l.V.THUMBNAIL:l.V.LIST)},icon:e?(0,r.jsx)(o.IconRectanglesTwoLine,{}):(0,r.jsx)(o.IconLinesThreeHorizontal,{}),testId:e?"frames-mode-toggle-bar":"frames-mode-toggle-list"}},[n,t,d])}},742594:function(e,t,n){"use strict";n.d(t,{J:()=>d});var r=n(552322);n(202784);var a=n(72779),i=n.n(a),o=n(504979),s=n(9428),l=n.n(s);let d=e=>{let{min:t=0,duration:n=1,leftTime:a=0,coloredProgress:s=!1,active:d=!0,dataTestid:c,className:u="",appearDone:p=!0}=e;return(0,r.jsx)("div",{className:l().timerProgress,children:(0,r.jsx)("div",{"data-testid":c,style:p&&a>0?(0,o.C2)({min:t,duration:n,leftTime:a}):void 0,className:i()(l().timerProgressBar,s&&a<=6e4&&l().lowLevel,!d&&l().inactive,u)})})}},79003:function(e,t,n){"use strict";n.d(t,{Z:()=>o});var r,a=n(202784);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}let o=(0,a.forwardRef)(function(e,t){return a.createElement("svg",i({width:"1em",height:"1em",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),r||(r=a.createElement("path",{d:"M.01 1.284a.44.44 0 0 1 .174-.45A.448.448 0 0 1 .667.81l10.359 5.897a.445.445 0 0 1 .22.448.442.442 0 0 1-.338.368l-4.79 1.14a.447.447 0 0 0-.277.2l-2.57 4.176a.445.445 0 0 1-.691.087.442.442 0 0 1-.127-.228L.01 1.284Z",fill:"currentColor"})))})},6455:function(e,t,n){"use strict";n.d(t,{Z:()=>s});var r,a,i=n(202784);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}let s=(0,i.forwardRef)(function(e,t){return i.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),r||(r=i.createElement("path",{d:"M15.293 20.293a1 1 0 0 0 1.414 1.414L20.414 18l-3.707-3.707a1 1 0 0 0-1.414 1.414L17.586 18l-2.293 2.293Z",fill:"currentColor"})),a||(a=i.createElement("path",{d:"M6 4h10c6 0 6 7 0 7H8c-6 0-6 7 0 7h10",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))})},426592:function(e,t,n){"use strict";n.d(t,{Z:()=>o});var r,a=n(202784);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}let o=(0,a.forwardRef)(function(e,t){return a.createElement("svg",i({width:"1em",height:"1em",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),r||(r=a.createElement("path",{d:"M11 6H1M6 11V1",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round"})))})},313391:function(e,t,n){"use strict";n.d(t,{Z:()=>o});var r,a=n(202784);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}let o=(0,a.forwardRef)(function(e,t){return a.createElement("svg",i({width:"1em",height:"1em",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),r||(r=a.createElement("path",{d:"m3 12 1.008 1.613c6.462 10.34 21.522 10.34 27.984 0L33 12m-8.961 13.539-1.131-4.221 1.131 4.221ZM1.5 19.5l3.258-3.258L1.5 19.5Zm33 0-3.258-3.258L34.5 19.5Zm-22.539 6.039 1.146-4.28-1.146 4.28Z",stroke:"currentColor",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})))})},588791:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.root-k6rAy {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 8px;
  display: flex;
  justify-content: center;
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: ease-out;
  pointer-events: none;
  z-index: 1;
}
.root-k6rAy > * {
  pointer-events: all;
  justify-content: center;
}
.root_limited-DiH1L {
  margin: 0 100px;
}
@media screen and (max-width: 500px) {
  .root_limited-DiH1L {
    margin: 0px 100px 0px 0px;
    min-width: 140px;
  }
}
.root_hidden-WOvg4, .root_shifted-uMWaD {
  transition-timing-function: ease-in;
}
.root_shifted-uMWaD {
  transform: translateX(-175px);
}
.root_hidden-WOvg4 {
  transform: translateY(100%);
}
.root_shifted-uMWaD.root_hidden-WOvg4 {
  transform: translate(-175px, 100%);
}
`,""]),o.locals={root:"root-k6rAy",root_limited:"root_limited-DiH1L",root_hidden:"root_hidden-WOvg4",root_shifted:"root_shifted-uMWaD"};let s=o},875927:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.miro-lite-help {
  width: 48px;
  height: 48px;
  margin-right: 8px;
}
.miro-lite-help__anchor {
  position: relative;
}
.miro-lite-help__button {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.miro-lite-help__menu {
  position: absolute;
  bottom: 40px;
  right: -100px;
  background: var(--colors-background-neutrals);
  box-shadow: 0px 4px 16px rgba(9, 9, 9, 0.12);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  cursor: default;
  z-index: 1;
}
.miro-lite-help__menu-item {
  font-size: 14px;
  height: 24px;
  flex-direction: row;
  justify-content: flex-start;
  color: #050038;
  padding: 0;
}
.miro-lite-help__menu-item:hover {
  color: var(--colors-text-primary-selected);
}
.miro-lite-help__menu-item + .miro-lite-help__menu-item {
  margin-top: 16px;
}
.miro-lite-help__menu-icon {
  margin-right: 18px;
}
.miro-lite-help__menu-animated {
  transition-property: opacity, transform;
  transition-duration: 0.15s, 0.15s;
  transform-origin: bottom center;
  transition-timing-function: cubic-bezier(0.25, 0.5, 0.5, 0.9);
}
.miro-lite-help__menu-animated--start {
  opacity: 0;
  transform: scale(0.8);
}
.miro-lite-help__menu-animated--finish {
  opacity: 1;
  transform: scale(1);
}
.miro-lite-help__feedback {
  position: absolute;
  bottom: 56px;
  right: 0;
  cursor: default;
}
`,""]),o.locals={"miro-lite-help":"miro-lite-help","miro-lite-help__anchor":"miro-lite-help__anchor","miro-lite-help__button":"miro-lite-help__button","miro-lite-help__menu":"miro-lite-help__menu","miro-lite-help__menu-item":"miro-lite-help__menu-item","miro-lite-help__menu-icon":"miro-lite-help__menu-icon","miro-lite-help__menu-animated":"miro-lite-help__menu-animated","miro-lite-help__menu-animated--start":"miro-lite-help__menu-animated--start","miro-lite-help__menu-animated--finish":"miro-lite-help__menu-animated--finish","miro-lite-help__feedback":"miro-lite-help__feedback"};let s=o},127348:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.container-yhUAd {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--colors-text-primary);
}
.container-yhUAd:hover {
  cursor: pointer;
}
.icon-jeO0o {
  margin-right: 12px;
}
`,""]),o.locals={container:"container-yhUAd",icon:"icon-jeO0o"};let s=o},111683:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.inputLabel-ujlzG {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
}
.messageArea-pQzq7 {
  margin-top: 20px;
}
.emailInput-MqIYD {
  margin-bottom: 16px;
}
`,""]),o.locals={inputLabel:"inputLabel-ujlzG",messageArea:"messageArea-pQzq7",emailInput:"emailInput-MqIYD"};let s=o},706858:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.closeButton-yW3bB {
  background: var(--colors-background-neutrals-inverted);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 125px;
  width: 40px;
  height: 40px;
  right: -15px;
  top: -15px;
  color: var(--colors-text-neutrals-inverted);
}
.closeButton-yW3bB:hover {
  color: var(--colors-text-neutrals-inverted);
}
.dialogContent-WuC77 {
  padding: 0 0 0 0;
  max-height: calc(100vh - 40px);
}
.headerImageContainer-IYcQJ {
  display: flex;
  justify-content: center;
  background-color: var(--colors-background-primary-prominent);
}
.headerImage-Cazwp {
  width: 80%;
  object-fit: contain;
}
.title-UBF1C {
  margin-bottom: 12px;
  font-size: 20px;
}
.body-iG4RE {
  padding: 20px 32px 32px 32px;
}
.description-WZ8C8 p {
  margin: 0;
}
.submitButton-kDOw8 {
  flex-grow: 1;
}
.footnote-yVY1z {
  margin-bottom: 0;
}
.privacyPolicyLink-LMIW_ {
  margin-top: 13px;
  display: inline-block;
}
.captcha-RsrbW {
  margin-top: 16px;
}
`,""]),o.locals={closeButton:"closeButton-yW3bB",dialogContent:"dialogContent-WuC77",headerImageContainer:"headerImageContainer-IYcQJ",headerImage:"headerImage-Cazwp",title:"title-UBF1C",body:"body-iG4RE",description:"description-WZ8C8",submitButton:"submitButton-kDOw8",footnote:"footnote-yVY1z",privacyPolicyLink:"privacyPolicyLink-LMIW_",captcha:"captcha-RsrbW"};let s=o},738744:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.reactionsPopup__enable_reactions_toggle-qjF44 {
  margin: 18px 0 2px 0;
  display: flex !important;
  flex-direction: row-reverse;
}
.reactionsPopup__enable_reactions_toggle-qjF44 .rtb-toggle__text {
  margin-left: 0 !important;
  margin-right: 10px;
  flex-grow: 1;
}
`,""]),o.locals={reactionsPopup__enable_reactions_toggle:"reactionsPopup__enable_reactions_toggle-qjF44","rtb-toggle__text":"rtb-toggle__text"};let s=o},378951:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.presentButtonOnboardingPointer-xiMwP {
  position: absolute;
  left: 50%;
  bottom: 0;
}
`,""]),o.locals={presentButtonOnboardingPointer:"presentButtonOnboardingPointer-xiMwP"};let s=o},590304:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.framePreview-eh60e {
  box-sizing: border-box;
  overflow: hidden;
  background: var(--colors-background-neutrals);
}
.framePreview-eh60e canvas {
  width: 100%;
  object-fit: cover;
  opacity: 1;
  transition: opacity 0.3s ease;
}
.framePreview_loading-N6fZ9 {
  background: var(--colors-background-neutrals-page-subtle);
  position: relative;
}
.framePreview_loading-N6fZ9 canvas {
  background: var(--colors-background-neutrals-page-subtle);
  opacity: 0;
}
.framePreview_loading-N6fZ9:after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0) 81%);
  animation: framePreviewLoadingAnimation 0.6s infinite linear;
}
@keyframes framePreviewLoadingAnimation {
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(100%, 0, 0);
  }
}
`,""]),o.locals={framePreview:"framePreview-eh60e",framePreview_loading:"framePreview_loading-N6fZ9"};let s=o},704034:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.root-xpU49 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.preview-Aothg {
  background: var(--colors-background-neutrals);
}
`,""]),o.locals={root:"root-xpU49",preview:"preview-Aothg"};let s=o},65633:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.addFrameCtaIcon-obbx1 {
  width: 186px;
  height: 140px;
}
`,""]),o.locals={addFrameCtaIcon:"addFrameCtaIcon-obbx1"};let s=o},782302:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.root-WJky_ {
  position: relative;
  width: 340px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--colors-background-neutrals);
  z-index: 0;
}
.empty-G7X0c {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: -1;
}
.actions-jJhxd {
  padding: 0 24px 8px;
}
.close-gtdN5 {
  position: absolute;
  top: 8px;
  right: 24px;
  z-index: 1;
  width: 24px;
}
.listItemContextMenuOpen-irhi0 {
  color: var(--colors-text-primary);
}
.container-j0r0F {
  display: flex;
  flex-direction: column;
  height: 100%;
}
`,""]),o.locals={root:"root-WJky_",empty:"empty-G7X0c",actions:"actions-jJhxd",close:"close-gtdN5",listItemContextMenuOpen:"listItemContextMenuOpen-irhi0",container:"container-j0r0F"};let s=o},436029:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.helpCenter-wp00v {
  max-height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}
.helpCenterMenuWrapper-H4vxS {
  box-sizing: border-box;
  position: absolute;
  bottom: calc(100% + 8px);
  right: -4px;
  background: var(--colors-background-neutrals);
  box-shadow: 0px 4px 16px rgba(9, 9, 9, 0.12);
  border-radius: 4px;
  cursor: default;
  z-index: 1;
  margin: 0;
}
.help-center__menu-animated {
  transition-property: opacity, transform;
  transition-duration: 0.15s, 0.15s;
  transform-origin: bottom center;
  transition-timing-function: cubic-bezier(0.25, 0.5, 0.5, 0.9);
}
.help-center__menu-animated--start {
  opacity: 0;
  transform: scale(0.8);
}
.help-center__menu-animated--finish {
  opacity: 1;
  transform: scale(1);
}
`,""]),o.locals={helpCenter:"helpCenter-wp00v",helpCenterMenuWrapper:"helpCenterMenuWrapper-H4vxS","help-center__menu-animated":"help-center__menu-animated","help-center__menu-animated--start":"help-center__menu-animated--start","help-center__menu-animated--finish":"help-center__menu-animated--finish"};let s=o},232717:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.helpCenterButton-RN3TI {
  background-color: var(--colors-black);
  color: var(--colors-text-neutrals-inverted);
  border-radius: 50%;
  width: 28px !important;
  height: 28px !important;
  min-width: 28px !important;
  max-width: 28px !important;
  min-height: 28px !important;
  max-height: 28px !important;
  overflow: hidden !important;
  margin: -2px -2px 0 0;
}
.helpCenterButton-RN3TI.helpCenterButtonActive-rOWRR {
  background-color: var(--colors-background-primary-prominent-hover);
}
.helpCenterButton_hover-Fb11m:hover .helpCenterButton-RN3TI {
  color: var(--colors-text-neutrals-inverted);
  background-color: var(--colors-background-primary-prominent-hover);
}
`,""]),o.locals={helpCenterButton:"helpCenterButton-RN3TI",helpCenterButtonActive:"helpCenterButtonActive-rOWRR",helpCenterButton_hover:"helpCenterButton_hover-Fb11m"};let s=o},723533:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.helpCenterMenu-qMYWj {
  padding: 28px 24px;
  list-style: none;
  display: flex;
  flex-direction: column;
}
.helpCenterMenu-qMYWj .helpCenterMenu_Item-JwShu {
  font-size: 14px;
  height: 24px;
  flex-direction: row;
  justify-content: flex-start;
  color: #050038;
  padding: 0;
}
.helpCenterMenu-qMYWj .helpCenterMenu_Item-JwShu + .helpCenterMenu_Item-JwShu {
  margin-top: 16px;
}
.helpCenterMenu-qMYWj .helpCenterMenu_Item-JwShu .helpCenterMenu_Item_Button-ANQaR {
  width: 100%;
  max-height: 100%;
  color: inherit;
  font-size: inherit;
  padding: 0;
  justify-content: flex-start;
}
.helpCenterMenu-qMYWj .helpCenterMenu_Item-JwShu .helpCenterMenu_Item_Button_Text-VLc2f {
  margin-left: 18px;
}
.helpCenterMenu-qMYWj .helpCenterMenu_Item-JwShu:hover {
  color: var(--colors-text-primary-selected);
}
`,""]),o.locals={helpCenterMenu:"helpCenterMenu-qMYWj",helpCenterMenu_Item:"helpCenterMenu_Item-JwShu",helpCenterMenu_Item_Button:"helpCenterMenu_Item_Button-ANQaR",helpCenterMenu_Item_Button_Text:"helpCenterMenu_Item_Button_Text-VLc2f"};let s=o},932675:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.showtimeWrapper-S6Npr {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}
.showtimeWrapper__body-SJ2zQ {
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: content-box;
  overflow-y: auto;
  -webkit-user-select: text;
  touch-action: pan-y;
  -webkit-overflow-scrolling: touch;
  scrollbar-color: var(--colors-background-neutrals-scrollbar) transparent;
  scrollbar-width: thin;
}
.showtimeWrapper__body-SJ2zQ::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.showtimeWrapper__body-SJ2zQ::-webkit-scrollbar-thumb {
  background-color: var(--colors-background-neutrals-scrollbar);
  border: 0 solid transparent;
  border-radius: 2px;
}
.showtimeWrapper__body-SJ2zQ::-webkit-scrollbar-track {
  background-color: initial;
}
.showtimeSunsetNotice-c6wzg {
  margin: 0 24px 24px;
}
`,""]),o.locals={showtimeWrapper:"showtimeWrapper-S6Npr",showtimeWrapper__body:"showtimeWrapper__body-SJ2zQ",showtimeSunsetNotice:"showtimeSunsetNotice-c6wzg"};let s=o},589736:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.root-CUCjn {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.preview-ZGh91 {
  background: var(--colors-background-neutrals);
}
`,""]),o.locals={root:"root-CUCjn",preview:"preview-ZGh91"};let s=o},414142:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.container-plK2r {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 0;
}
.root-IeYVL {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  position: relative;
  z-index: 0;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 0 0 1px var(--colors-gray-250);
}
.root_indented-Ty7PA {
  margin-left: 20px;
}
.root_selected-GNTVm {
  color: var(--colors-blue-200);
}
.root_selected-GNTVm.root-IeYVL:hover, .root_dragOverlay-cNp2F {
  color: var(--colors-blue-200);
}
.root_contentHidden-nzZuO {
  cursor: pointer;
}
.dragOverlayStackItem-kiNvt {
  position: absolute;
  height: 100%;
  width: 100%;
  background: currentColor;
  box-shadow: 0px 4px 16px rgba(5, 0, 56, 0.12);
}
.preview-LQzlj {
  position: relative;
  outline: none;
  width: 292px;
  height: 162px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  background-color: var(--colors-gray-150);
  box-sizing: border-box;
  transition: height 0.3s ease-out;
  overflow: clip;
}
.small_preview-tOwfN {
  width: 272px;
  height: 148px;
}
.root-IeYVL:focus-visible {
  box-shadow: inset 0 0 0 1px var(--colors-blue-550), 0 0 0 1px var(--colors-blue-550), 0 0 0 5px var(--colors-blue-200);
}
.root_selected-GNTVm::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 4px;
  box-shadow: 0 0 0 2px var(--colors-blue-500);
  pointer-events: none;
}
.root_contentHidden-nzZuO button:focus-visible {
  box-shadow: inset 0 0 0 1px var(--colors-blue-550), 0 0 0 1px var(--colors-blue-550), 0 0 0 5px var(--colors-blue-200);
}
.overlay-H7OAM {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.2s cubic-bezier(0.25, 0.1, 0.25, 0.1);
}
.root-IeYVL:hover .overlay-H7OAM {
  background: rgba(0, 0, 0, 0.2);
}
.root_selected-GNTVm .overlay-H7OAM, .root_selected-GNTVm:hover .overlay-H7OAM {
  background: rgba(66, 98, 255, 0.15);
}
.content-lFZUQ {
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}
.content_hidden-FqhSG {
  color: var(--colors-gray-500);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  background-color: var(--colors-background-neutrals-page-subtle);
}
.preview_listView-Kn2UJ {
  height: 44px;
}
.preview_listView-Kn2UJ .content_hidden-FqhSG {
  flex-direction: row-reverse;
  justify-content: flex-end;
  padding-left: 40px;
  gap: 24px;
}
.content_hidden_message-n8wew {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  color: var(--colors-gray-500);
  margin: 0;
  padding: 0;
}
.info-VKlwR {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  background-color: var(--colors-background-neutrals-container);
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  transform: translateY(50%);
  transition: opacity 0.2s cubic-bezier(0.25, 0.1, 0.25, 0.1), transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 0.1);
}
.menuSlot-os1Bb {
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.25, 0.1, 0.25, 0.1);
}
.sectionSlot-sTiJr {
  width: 89%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sectionSlot-sTiJr > div {
  height: 12px;
  box-sizing: border-box;
  border-radius: 0px 0px 4px 4px;
  border-right: 1px solid var(--secondary-color-secondary-20, var(--colors-gray-250));
  border-bottom: 1px solid var(--secondary-color-secondary-20, var(--colors-gray-250));
  border-left: 1px solid var(--secondary-color-secondary-20, var(--colors-gray-250));
  background: linear-gradient(180deg, var(--colors-background-neutrals-subtle) 0%, var(--colors-background-neutrals) 100%);
}
.sectionSlot-sTiJr > div:nth-child(1) {
  width: 94%;
}
.sectionSlot-sTiJr > div:nth-child(2) {
  width: 89%;
}
.sectionSlotDragOverlay-pgLgc > div {
  box-shadow: 0px 4px 16px rgba(5, 0, 56, 0.12);
}
.root-IeYVL:focus-visible .info-VKlwR, .root-IeYVL > *:focus-within .info-VKlwR, .root-IeYVL:hover .info-VKlwR, .root_selected-GNTVm .info-VKlwR, .root_contextMenuOpened-fBOPF .info-VKlwR, .root_isRenaming-VSSqt .info-VKlwR, .root_dragOverlay-cNp2F .info-VKlwR, .preview_listView-Kn2UJ .info-VKlwR, .root_showSection-qc1o2 .info-VKlwR {
  opacity: 1;
  transform: translateY(0);
}
.root-IeYVL:focus-visible .menuSlot-os1Bb, .root-IeYVL > *:focus-within .menuSlot-os1Bb, .root-IeYVL:hover .menuSlot-os1Bb, .root_selected-GNTVm .menuSlot-os1Bb, .root_contextMenuOpened-fBOPF .menuSlot-os1Bb {
  opacity: 1;
}
.name-eG0Ub {
  color: var(--colors-text-neutrals);
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 8px;
}
.root-IeYVL .name-eG0Ub {
  padding: 12px;
  padding-right: 4px;
}
.untitledText-yEfSG {
  color: var(--colors-gray-500);
}
.nameIndex-y3YKc {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 14px;
  font-weight: normal;
  font-weight: bold;
  line-height: 20px;
  text-wrap: nowrap;
  color: var(--colors-gray-500);
}
.nameInput-XOa6d {
  font: inherit;
  max-width: 215px;
  width: 100%;
  padding: 0;
  margin-right: 8px;
  background: transparent;
  border: none;
  box-shadow: 0 2px 0 0 var(--colors-blue-500);
  outline: none;
}
.nameText-iLpAx {
  position: relative;
  max-width: 215px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}
.nameText-iLpAx::after {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 0 16px 12px var(--colors-background-neutrals-container);
  pointer-events: none;
}
.nameEditable-GzAgA {
  cursor: text;
}
.trigger-SrWcb {
  padding: 0;
  text-align: left;
}
.selectionToggleContainer-jSvtL {
  position: absolute;
  left: 0;
  top: 0;
  display: none;
  padding: 4px 6px;
}
.selectionToggleContainer_visible-LtP1j, .root-IeYVL:hover .selectionToggleContainer-jSvtL {
  display: block;
}
.selectionToggle-Acty9 {
  opacity: 0;
}
.root-IeYVL:hover .selectionToggle-Acty9 {
  opacity: 0.5;
}
.root-IeYVL:hover .selectionToggle-Acty9:hover, .root-IeYVL .selectionToggleContainer_visible-LtP1j .selectionToggle-Acty9 {
  opacity: 1;
}
.duration-zdlkj {
  color: var(--colors-text-neutrals);
  display: flex;
  padding: 12px 4px 12px 0;
  box-sizing: border-box;
  min-height: 44px;
}
.durationText-TDypW, .durationInput-XImKk {
  margin: 0;
  padding: 0 2px;
  box-sizing: border-box;
}
.durationUnits-lFe9S {
  margin-left: 8px;
}
.durationTextRunning-DdpVq {
  font-weight: 700;
}
.durationOvertime-oYdRd {
  color: var(--colors-text-danger);
}
.durationInput-XImKk {
  font: inherit;
  background: transparent;
  border: none;
  box-shadow: 0 2px 0 0 var(--colors-blue-500);
  outline: none;
  /* Chrome, Safari, Edge, Opera */
  /* Firefox */
  -moz-appearance: textfield;
}
.durationInput-XImKk::-webkit-outer-spin-button, .durationInput-XImKk::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.durationEditable-HSxJw {
  cursor: text;
}
`,""]),o.locals={container:"container-plK2r",root:"root-IeYVL",root_indented:"root_indented-Ty7PA",root_selected:"root_selected-GNTVm",root_dragOverlay:"root_dragOverlay-cNp2F",root_contentHidden:"root_contentHidden-nzZuO",dragOverlayStackItem:"dragOverlayStackItem-kiNvt",preview:"preview-LQzlj",small_preview:"small_preview-tOwfN",overlay:"overlay-H7OAM",content:"content-lFZUQ",content_hidden:"content_hidden-FqhSG",preview_listView:"preview_listView-Kn2UJ",content_hidden_message:"content_hidden_message-n8wew",info:"info-VKlwR",menuSlot:"menuSlot-os1Bb",sectionSlot:"sectionSlot-sTiJr",sectionSlotDragOverlay:"sectionSlotDragOverlay-pgLgc",root_contextMenuOpened:"root_contextMenuOpened-fBOPF",root_isRenaming:"root_isRenaming-VSSqt",root_showSection:"root_showSection-qc1o2",name:"name-eG0Ub",untitledText:"untitledText-yEfSG",nameIndex:"nameIndex-y3YKc",nameInput:"nameInput-XOa6d",nameText:"nameText-iLpAx",nameEditable:"nameEditable-GzAgA",trigger:"trigger-SrWcb",selectionToggleContainer:"selectionToggleContainer-jSvtL",selectionToggleContainer_visible:"selectionToggleContainer_visible-LtP1j",selectionToggle:"selectionToggle-Acty9",duration:"duration-zdlkj",durationText:"durationText-TDypW",durationInput:"durationInput-XImKk",durationUnits:"durationUnits-lFe9S",durationTextRunning:"durationTextRunning-DdpVq",durationOvertime:"durationOvertime-oYdRd",durationEditable:"durationEditable-HSxJw"};let s=o},995218:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.completeTag-adfXe {
  position: absolute;
  top: 8px;
  right: 8px;
}
`,""]),o.locals={completeTag:"completeTag-adfXe"};let s=o},125953:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.container-uf3kI {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 0;
}
.root-B2jfa {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  position: relative;
  z-index: 0;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 0 0 1px var(--colors-gray-250);
}
.root_indented-q8YBm {
  margin-left: 20px;
}
.root_selected-t9ZPv {
  color: var(--colors-blue-200);
}
.root_selected-t9ZPv.root-B2jfa:hover, .root_dragOverlay-wvowA {
  color: var(--colors-blue-200);
}
.root_contentHidden-siNuk {
  cursor: pointer;
}
.dragOverlayStackItem-PPi4Z {
  position: absolute;
  height: 100%;
  width: 100%;
  background: currentColor;
  box-shadow: 0px 4px 16px rgba(5, 0, 56, 0.12);
}
.preview-xrt5j {
  position: relative;
  outline: none;
  width: 292px;
  height: 162px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  background-color: var(--colors-gray-150);
  box-sizing: border-box;
  transition: height 0.3s ease-out;
  overflow: clip;
}
.small_preview-BrEwi {
  width: 272px;
  height: 148px;
}
.root-B2jfa:focus-visible {
  box-shadow: inset 0 0 0 1px var(--colors-blue-550), 0 0 0 1px var(--colors-blue-550), 0 0 0 5px var(--colors-blue-200);
}
.root_selected-t9ZPv::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 4px;
  box-shadow: 0 0 0 2px var(--colors-blue-500);
  pointer-events: none;
}
.root_contentHidden-siNuk button:focus-visible {
  box-shadow: inset 0 0 0 1px var(--colors-blue-550), 0 0 0 1px var(--colors-blue-550), 0 0 0 5px var(--colors-blue-200);
}
.overlay-kXimr {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.2s cubic-bezier(0.25, 0.1, 0.25, 0.1);
}
.root-B2jfa:hover .overlay-kXimr {
  background: rgba(0, 0, 0, 0.2);
}
.root_selected-t9ZPv .overlay-kXimr, .root_selected-t9ZPv:hover .overlay-kXimr {
  background: rgba(66, 98, 255, 0.15);
}
.content-ZyN9f {
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}
.content_hidden-uWxaf {
  color: var(--colors-gray-500);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  background-color: var(--colors-background-neutrals-page-subtle);
}
.preview_listView-viXqq {
  height: 44px;
}
.preview_listView-viXqq .content_hidden-uWxaf {
  flex-direction: row-reverse;
  justify-content: flex-end;
  padding-left: 40px;
  gap: 24px;
}
.content_hidden_message-p_0kq {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  color: var(--colors-gray-500);
  margin: 0;
  padding: 0;
}
.info-BEZyy {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  background-color: var(--colors-background-neutrals-container);
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  transform: translateY(50%);
  transition: opacity 0.2s cubic-bezier(0.25, 0.1, 0.25, 0.1), transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 0.1);
}
.menuSlot-ppMRK {
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.25, 0.1, 0.25, 0.1);
}
.sectionSlot-KPCSQ {
  width: 89%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sectionSlot-KPCSQ > div {
  height: 12px;
  box-sizing: border-box;
  border-radius: 0px 0px 4px 4px;
  border-right: 1px solid var(--secondary-color-secondary-20, var(--colors-gray-250));
  border-bottom: 1px solid var(--secondary-color-secondary-20, var(--colors-gray-250));
  border-left: 1px solid var(--secondary-color-secondary-20, var(--colors-gray-250));
  background: linear-gradient(180deg, var(--colors-background-neutrals-subtle) 0%, var(--colors-background-neutrals) 100%);
}
.sectionSlot-KPCSQ > div:nth-child(1) {
  width: 94%;
}
.sectionSlot-KPCSQ > div:nth-child(2) {
  width: 89%;
}
.sectionSlotDragOverlay-keH4s > div {
  box-shadow: 0px 4px 16px rgba(5, 0, 56, 0.12);
}
.root-B2jfa:focus-visible .info-BEZyy, .root-B2jfa > *:focus-within .info-BEZyy, .root-B2jfa:hover .info-BEZyy, .root_selected-t9ZPv .info-BEZyy, .root_contextMenuOpened-sg39h .info-BEZyy, .root_isRenaming-ft0UA .info-BEZyy, .root_dragOverlay-wvowA .info-BEZyy, .preview_listView-viXqq .info-BEZyy, .root_showSection-b5pzV .info-BEZyy {
  opacity: 1;
  transform: translateY(0);
}
.root-B2jfa:focus-visible .menuSlot-ppMRK, .root-B2jfa > *:focus-within .menuSlot-ppMRK, .root-B2jfa:hover .menuSlot-ppMRK, .root_selected-t9ZPv .menuSlot-ppMRK, .root_contextMenuOpened-sg39h .menuSlot-ppMRK {
  opacity: 1;
}
.name-fx6md {
  color: var(--colors-text-neutrals);
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 8px;
}
.root-B2jfa .name-fx6md {
  padding: 12px;
  padding-right: 4px;
}
.untitledText-_m0Nq {
  color: var(--colors-gray-500);
}
.nameIndex-FA67Q {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 14px;
  font-weight: normal;
  font-weight: bold;
  line-height: 20px;
  text-wrap: nowrap;
  color: var(--colors-gray-500);
}
.nameInput-lQs2I {
  font: inherit;
  max-width: 215px;
  width: 100%;
  padding: 0;
  margin-right: 8px;
  background: transparent;
  border: none;
  box-shadow: 0 2px 0 0 var(--colors-blue-500);
  outline: none;
}
.nameText-_1EA_ {
  position: relative;
  max-width: 215px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}
.nameText-_1EA_::after {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 0 16px 12px var(--colors-background-neutrals-container);
  pointer-events: none;
}
.nameEditable-NOPcG {
  cursor: text;
}
.trigger-wUeZE {
  padding: 0;
  text-align: left;
}
.selectionToggleContainer-dmHoq {
  position: absolute;
  left: 0;
  top: 0;
  display: none;
  padding: 4px 6px;
}
.selectionToggleContainer_visible-adTlj, .root-B2jfa:hover .selectionToggleContainer-dmHoq {
  display: block;
}
.selectionToggle-Y3qy_ {
  opacity: 0;
}
.root-B2jfa:hover .selectionToggle-Y3qy_ {
  opacity: 0.5;
}
.root-B2jfa:hover .selectionToggle-Y3qy_:hover, .root-B2jfa .selectionToggleContainer_visible-adTlj .selectionToggle-Y3qy_ {
  opacity: 1;
}
.settings-BNeLB {
  width: 100%;
  padding: 0 0 0 12px;
  grid-row: info-line;
  position: relative;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  background-color: var(--colors-background-neutrals-container);
  align-items: center;
  justify-content: space-between;
}
.appContainer-qqdWR {
  color: var(--colors-text-neutrals);
  display: flex;
  border: 1px solid var(--colors-border-neutrals-inverted);
  border-radius: 4px;
  padding: 10px;
  transition: background-color 0.3s linear, color 0.3s linear;
  align-items: center;
  max-width: 172px;
}
.appContainer-qqdWR:hover {
  color: var(--colors-text-primary-hover);
  background-color: var(--colors-background-primary-subtle);
}
.appContainer-qqdWR.appContainerActive-VclOm {
  color: var(--colors-text-primary-hover);
  background-color: var(--colors-background-primary-subtle-hover);
}
.appContainerTitle-h4YNm {
  margin-left: 8px;
  text-align: left;
}
`,""]),o.locals={container:"container-uf3kI",root:"root-B2jfa",root_indented:"root_indented-q8YBm",root_selected:"root_selected-t9ZPv",root_dragOverlay:"root_dragOverlay-wvowA",root_contentHidden:"root_contentHidden-siNuk",dragOverlayStackItem:"dragOverlayStackItem-PPi4Z",preview:"preview-xrt5j",small_preview:"small_preview-BrEwi",overlay:"overlay-kXimr",content:"content-ZyN9f",content_hidden:"content_hidden-uWxaf",preview_listView:"preview_listView-viXqq",content_hidden_message:"content_hidden_message-p_0kq",info:"info-BEZyy",menuSlot:"menuSlot-ppMRK",sectionSlot:"sectionSlot-KPCSQ",sectionSlotDragOverlay:"sectionSlotDragOverlay-keH4s",root_contextMenuOpened:"root_contextMenuOpened-sg39h",root_isRenaming:"root_isRenaming-ft0UA",root_showSection:"root_showSection-b5pzV",name:"name-fx6md",untitledText:"untitledText-_m0Nq",nameIndex:"nameIndex-FA67Q",nameInput:"nameInput-lQs2I",nameText:"nameText-_1EA_",nameEditable:"nameEditable-NOPcG",trigger:"trigger-wUeZE",selectionToggleContainer:"selectionToggleContainer-dmHoq",selectionToggleContainer_visible:"selectionToggleContainer_visible-adTlj",selectionToggle:"selectionToggle-Y3qy_",settings:"settings-BNeLB",appContainer:"appContainer-qqdWR",appContainerActive:"appContainerActive-VclOm",appContainerTitle:"appContainerTitle-h4YNm"};let s=o},479296:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.showtimeSettings-j1Jtw {
  background-color: var(--colors-background-neutrals-subtle);
  border-radius: 8px;
  padding: 8px;
  color: var(--colors-text-neutrals-pressed);
  margin: 0 24px 24px;
}
.showtimeSettings-j1Jtw.showtimeSettings__sparse-AFl6r {
  padding: var(--space-200) 20px;
}
.showtimeSettings-j1Jtw .showtimeSettings__title-gmlof {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  font-family: Roobert, Noto Sans KR, Noto Sans JP, sans-serif;
  margin: 0 8px 8px 0;
  font-weight: 500;
}
.showtimeSettings-j1Jtw .showtimeSettings__title-gmlof svg {
  height: 18px;
  width: 18px;
  color: var(--colors-icon-neutrals-inactive);
}
.showtimeSettings-j1Jtw .showtimeTools__title-Ua8EI {
  margin: 0 8px 8px 0;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  font-family: Roobert, Noto Sans KR, Noto Sans JP, sans-serif;
  font-weight: 500;
}
.showtimeSettings-j1Jtw .showtimeOptions-yHISr {
  list-style: none;
  padding: 0;
  margin: 0;
}
.showtimeSettings-j1Jtw .showtimeOptions-yHISr li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 12px;
  line-height: 18px;
  font-weight: normal;
  line-height: 20px;
}
.showtimeSettings-j1Jtw .showtimeOptions-yHISr li ~ li {
  margin-top: 4px;
}
.showtimeSettings-j1Jtw .showtimeOptions__title-dV3ZS {
  display: flex;
  align-items: center;
}
.showtimeSettings-j1Jtw .showtimeOptions__title-dV3ZS svg {
  width: 16px;
  height: 16px;
  margin-right: 12px;
}
`,""]),o.locals={showtimeSettings:"showtimeSettings-j1Jtw",showtimeSettings__sparse:"showtimeSettings__sparse-AFl6r",showtimeSettings__title:"showtimeSettings__title-gmlof",showtimeTools__title:"showtimeTools__title-Ua8EI",showtimeOptions:"showtimeOptions-yHISr",showtimeOptions__title:"showtimeOptions__title-dV3ZS"};let s=o},582922:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.rtb-h1 {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-family: Roobert, Noto Sans KR, Noto Sans JP, sans-serif;
  font-size: 28px;
  line-height: 36px;
  font-weight: 500;
}
.rtb-h2 {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-family: Roobert, Noto Sans KR, Noto Sans JP, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
}
.rtb-h3 {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-family: Roobert, Noto Sans KR, Noto Sans JP, sans-serif;
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
}
.rtb-h4 {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
}
.rtb-h5 {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
}
.rtb-p-large {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
}
.rtb-p-medium {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
}
.rtb-p-small {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 12px;
  line-height: 18px;
  font-weight: normal;
}
.rtb-p-bold {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-weight: 600;
}
.typo-opensans {
  font-family: var(--fonts-design-language), Noto Sans KR, Noto Sans JP, sans-serif;
}
.typo-roobert {
  font-family: Roobert, Noto Sans KR, Noto Sans JP, sans-serif;
}
.typo-subtitle {
  font-size: 18px;
  font-weight: normal;
}
.rtb-h4 + .typo-subtitle {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  margin-top: -16px;
}
.rtb-h3 + .typo-subtitle {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  margin-top: -16px;
}
.showtimeWelcome-fbceu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-left: 24px;
  margin-right: 24px;
  gap: 32px;
}
.showtimeWelcome__body-Nwppn {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 32px;
  box-sizing: content-box;
  overflow-y: auto;
  user-select: text;
  -webkit-user-select: text;
  touch-action: pan-y;
  -webkit-overflow-scrolling: touch;
  scrollbar-color: var(--colors-background-neutrals-scrollbar) transparent;
  scrollbar-width: thin;
}
.showtimeWelcome__body-Nwppn::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.showtimeWelcome__body-Nwppn::-webkit-scrollbar-thumb {
  background-color: var(--colors-background-neutrals-scrollbar);
  border: 0 solid transparent;
  border-radius: 2px;
}
.showtimeWelcome__body-Nwppn::-webkit-scrollbar-track {
  background-color: initial;
}
.showtimeWelcome__plainButton-TsHLk {
  padding: 0;
  margin: 0;
  text-decoration: underline;
}
.prepareAndRunActivitiesIcon-hqZQg {
  width: 136px;
  height: 136px;
}
`,""]),o.locals={"rtb-h1":"rtb-h1","rtb-h2":"rtb-h2","rtb-h3":"rtb-h3","rtb-h4":"rtb-h4","rtb-h5":"rtb-h5","rtb-p-large":"rtb-p-large","rtb-p-medium":"rtb-p-medium","rtb-p-small":"rtb-p-small","rtb-p-bold":"rtb-p-bold","typo-opensans":"typo-opensans","typo-roobert":"typo-roobert","typo-subtitle":"typo-subtitle",showtimeWelcome:"showtimeWelcome-fbceu",showtimeWelcome__body:"showtimeWelcome__body-Nwppn",showtimeWelcome__plainButton:"showtimeWelcome__plainButton-TsHLk",prepareAndRunActivitiesIcon:"prepareAndRunActivitiesIcon-hqZQg"};let s=o},79218:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.follow-tip-position-VKy6P {
  position: fixed;
  bottom: 62px;
  transform: translateX(-50%);
  left: 50%;
}
.follow-tip-DFeIx {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 28px;
  min-width: 100px;
  max-width: 242px;
  top: 0px;
  padding: 0;
  border-radius: 16px;
  background-color: var(--colors-background-primary-prominent);
}
.icon-container-BGBsx {
  margin-left: 10px;
  width: 20px;
  color: var(--colors-icon-neutrals-inverted);
}
.icon-kxw9K {
  margin-top: 2px;
  height: 12px;
  width: 14px;
}
.text-tip-I5U5o {
  margin-left: 2px;
  margin-right: 10px;
  margin-bottom: 2px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--colors-text-neutrals-inverted);
  font-size: 12px;
}
@keyframes bounce-in {
  0% {
    transform: translateY(50px);
  }
  14% {
    transform: translateY(-13px);
  }
  25% {
    transform: translateY(5px);
  }
  45% {
    transform: translateY(-3px);
  }
  65% {
    transform: translateY(1px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes bounce-out {
  0% {
    transform: translateY(0px);
  }
  15% {
    transform: translateY(-3px);
  }
  40% {
    transform: translateY(40px);
  }
  100% {
    transform: translateY(40px);
  }
}
.follow-tip-container-enter-active {
  animation: bounce-in 1s cubic-bezier(0.28, 0.84, 0.42, 1);
}
.follow-tip-container-exit-active {
  animation: bounce-out 1s cubic-bezier(0.28, 0.84, 0.42, 1);
}
`,""]),o.locals={"follow-tip-position":"follow-tip-position-VKy6P","follow-tip":"follow-tip-DFeIx","icon-container":"icon-container-BGBsx",icon:"icon-kxw9K","text-tip":"text-tip-I5U5o","follow-tip-container-enter-active":"follow-tip-container-enter-active","follow-tip-container-exit-active":"follow-tip-container-exit-active"};let s=o},951872:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.buttonIcon-w3QS9 {
  display: inline-block;
  vertical-align: text-bottom;
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
.audienceBar__item-yWoFH {
  align-items: center;
  display: flex;
}
.audienceBar__item_with_separator-rOO5q {
  padding-right: 4px;
}
.audienceBar__item-yWoFH .item__separator_toolbar-wpbNU {
  margin-left: 0;
}
`,""]),o.locals={buttonIcon:"buttonIcon-w3QS9",audienceBar__item:"audienceBar__item-yWoFH",audienceBar__item_with_separator:"audienceBar__item_with_separator-rOO5q",item__separator_toolbar:"item__separator_toolbar-wpbNU"};let s=o},492998:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.reactionsContainer-DpJuQ {
  display: flex;
  flex-direction: row;
}
.behindSeparator-qBAJ_ {
  margin-left: -4px;
}
.beforeSeparator-viCZx {
  margin-right: -4px;
}
.isNested-kxIp3 [role='toolbar'] {
  box-shadow: none;
  padding: 0 8px;
}
`,""]),o.locals={reactionsContainer:"reactionsContainer-DpJuQ",behindSeparator:"behindSeparator-qBAJ_",beforeSeparator:"beforeSeparator-viCZx",isNested:"isNested-kxIp3"};let s=o},993755:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.userNameTooltip-moBoq {
  word-break: break-word;
  overflow-wrap: break-word;
  padding-top: 2px;
}
.eyeIcon-jdOBZ {
  position: absolute;
  color: var(--colors-icon-neutrals-inverted);
  width: 15px;
  height: 15px;
  left: 7px;
  top: 7px;
}
.userPictureContainer-Z8Ak2 {
  flex-shrink: 0;
  opacity: 1;
  position: relative;
  border-radius: 50%;
  width: 29px;
  height: 29px;
}
.userPictureContainer-Z8Ak2:focus-visible {
  box-shadow: 0 0 0 1px var(--colors-blue-550), 0 0 0 5px var(--colors-blue-200);
}
.interactive-ZUbfK {
  cursor: pointer;
}
.hasFollowersCounter-vwwrR {
  margin-bottom: var(--space-150);
}
`,""]),o.locals={userNameTooltip:"userNameTooltip-moBoq",eyeIcon:"eyeIcon-jdOBZ",userPictureContainer:"userPictureContainer-Z8Ak2",interactive:"interactive-ZUbfK",hasFollowersCounter:"hasFollowersCounter-vwwrR"};let s=o},744984:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.attendeeItemListWrapper-rcjWF {
  padding: 4px 4px 8px 8px;
  width: 250px;
  color: var(--colors-text-neutrals);
  display: flex;
  flex-direction: column;
}
.attendeeItemList-hPobK {
  padding: 4px;
  margin: 0;
}
`,""]),o.locals={attendeeItemListWrapper:"attendeeItemListWrapper-rcjWF",attendeeItemList:"attendeeItemList-hPobK"};let s=o},433156:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.attendeeItem-WA5Xh {
  display: flex;
  padding: 4px 8px;
  height: auto;
  color: var(--colors-text-neutrals);
  margin-bottom: 8px;
  align-items: center;
}
.userPicture-IK3vj {
  flex-shrink: 0;
  opacity: 1;
}
.inactiveUser-eQz0L {
  opacity: 0.5;
}
.userInfo-cuSKl {
  padding-left: 12px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  max-width: 190px;
}
.shortWidth-qs1GC {
  max-width: 160px;
}
.userName-KlVBc {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: auto;
  white-space: nowrap;
}
.userRole-wJw1r {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 12px;
  line-height: 18px;
  font-weight: normal;
  padding-top: 4px;
  color: var(--colors-text-neutrals-subtle);
  display: flex;
  justify-content: space-between;
  line-height: 12px;
}
.userIdle-VLfqj {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 12px;
  line-height: 18px;
  font-weight: normal;
  color: rgba(var(--colors-text-neutrals), 0.5);
  line-height: 12px;
}
.handoffButton-NnP4h {
  position: relative;
  color: var(--colors-text-neutrals-subtle);
  display: flex;
  align-self: flex-end;
  cursor: pointer;
  z-index: 2;
}
.handoffButton-NnP4h span {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 12px;
  line-height: 18px;
  font-weight: normal;
  line-height: 12px;
}
.handoffButton-NnP4h::after {
  position: absolute;
  content: '';
  border-bottom: 1px solid rgb(var(--colors-border-primary), 0.4);
  width: 100%;
  height: 2px;
  bottom: -3px;
}
.raisedHand-b4rhn {
  color: var(--colors-text-primary);
  width: 20px;
  height: 20px;
}
`,""]),o.locals={attendeeItem:"attendeeItem-WA5Xh",userPicture:"userPicture-IK3vj",inactiveUser:"inactiveUser-eQz0L",userInfo:"userInfo-cuSKl",shortWidth:"shortWidth-qs1GC",userName:"userName-KlVBc",userRole:"userRole-wJw1r",userIdle:"userIdle-VLfqj",handoffButton:"handoffButton-NnP4h",raisedHand:"raisedHand-b4rhn"};let s=o},461501:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.bottomBarLabelSection-MsvK1 {
  display: block;
  overflow: hidden;
  max-width: 100%;
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: normal;
  color: var(--colors-text-neutrals-inverted);
}
`,""]),o.locals={bottomBarLabelSection:"bottomBarLabelSection-MsvK1"};let s=o},693959:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.bottomBarLabel-I1eZ0 {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  width: 44px;
  height: 44px;
  padding: 8px 0;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  color: var(--colors-text-neutrals-inverted);
  font-size: 14px;
  line-height: 16px;
}
`,""]),o.locals={bottomBarLabel:"bottomBarLabel-I1eZ0"};let s=o},717107:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.bottomBarListItem-jYUe2 {
  display: flex;
  position: relative;
  height: 36px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-bottom: 8px;
  border-radius: 4px;
  align-items: center;
  color: var(--colors-text-neutrals-subtle);
}
.bottomBarListItem-jYUe2::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: -4px;
  bottom: -4px;
}
.disabled-cWCzy {
  cursor: default;
  pointer-events: none;
  opacity: 0.5;
}
.interactive-drw16 {
  cursor: pointer;
  color: var(--colors-text-neutrals);
}
.interactive-drw16:hover {
  background: var(--background-neutrals-control-hover);
}
.interactive-drw16.selected-uv7oW {
  background: var(--colors-background-primary-prominent-selected);
}
.selected-uv7oW.selected-uv7oW {
  color: var(--colors-text-neutrals-inverted);
}
`,""]),o.locals={bottomBarListItem:"bottomBarListItem-jYUe2",disabled:"disabled-cWCzy",interactive:"interactive-drw16",selected:"selected-uv7oW"};let s=o},930755:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.bottomBarList-FZKwd {
  padding-bottom: var(--space-150);
  margin: 0;
  max-height: 220px;
  overflow-x: hidden;
  overflow-y: auto;
  touch-action: pan-x pan-y;
  -webkit-overflow-scrolling: touch;
  scrollbar-color: var(--colors-background-neutrals-control-pressed) transparent;
  scrollbar-width: thin;
}
.bottomBarList-FZKwd :last-child {
  margin-bottom: 0;
}
.bottomBarList-FZKwd::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.bottomBarList-FZKwd::-webkit-scrollbar-thumb {
  background-color: var(--colors-background-neutrals-control-pressed);
  border: 0 solid transparent;
  border-radius: 2px;
}
.bottomBarList-FZKwd::-webkit-scrollbar-track {
  background-color: initial;
}
`,""]),o.locals={bottomBarList:"bottomBarList-FZKwd"};let s=o},759394:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.bottomBarGroup-Qjr6_ {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
`,""]),o.locals={bottomBarGroup:"bottomBarGroup-Qjr6_"};let s=o},948032:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.limitedTools__divider-WRrFN {
  border: 1px solid var(--colors-border-neutrals-controls-disabled);
}
`,""]),o.locals={limitedTools__divider:"limitedTools__divider-WRrFN"};let s=o},560301:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.attendeeItemListWrapper-CwBTg {
  display: flex;
  flex-direction: column;
}
.attendeeItemList-D7NNM {
  padding: 4px;
}
.participantItemList-c8fjR {
  max-height: 260px;
}
.participantItemList-c8fjR.searchable-zSWLj {
  height: 216px;
}
.divider-NV1su {
  margin: 8px 9px 12px 5px;
  border-color: var(--colors-border-neutrals-controls-disabled);
  font-weight: lighter;
  max-width: 100%;
  border-top-width: 0;
  border-left-width: 0;
}
.anonymousUsersMessage-aCNjX {
  height: auto;
  margin-top: var(--space-200);
  padding-left: 12px;
  color: var(--colors-text-neutrals);
}
.notFoundMessage-BvdNh {
  color: var(--colors-text-neutrals-subtle);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 224px;
}
.filterContainer-SJPiz {
  height: 44px;
  padding: 11px 10px;
  margin: 0 4px;
  box-sizing: border-box;
}
.filterContainer-SJPiz input {
  border: none;
  width: 100%;
  line-height: 20px;
}
.filterContainer-SJPiz ::placeholder {
  color: var(--colors-text-neutrals-subtle);
}
.raisedHandsHeading-eqQ9a {
  display: flex;
  justify-content: space-between;
  margin: var(--space-100) var(--space-100) var(--space-150) var(--space-150);
}
.raisedHandsCount-_gHRr {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 12px;
  line-height: 18px;
  font-weight: normal;
  color: var(--colors-text-neutrals-subtle);
}
.lowerAllButton-_7MCt {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 12px;
  line-height: 18px;
  font-weight: normal;
  color: var(--colors-text-primary);
}
.raisedHandDivider-fh0f4 {
  margin: var(--space-150) var(--space-50) var(--space-100) !important;
}
`,""]),o.locals={attendeeItemListWrapper:"attendeeItemListWrapper-CwBTg",attendeeItemList:"attendeeItemList-D7NNM",participantItemList:"participantItemList-c8fjR",searchable:"searchable-zSWLj",divider:"divider-NV1su",anonymousUsersMessage:"anonymousUsersMessage-aCNjX",notFoundMessage:"notFoundMessage-BvdNh",filterContainer:"filterContainer-SJPiz",raisedHandsHeading:"raisedHandsHeading-eqQ9a",raisedHandsCount:"raisedHandsCount-_gHRr",lowerAllButton:"lowerAllButton-_7MCt",raisedHandDivider:"raisedHandDivider-fh0f4"};let s=o},995407:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.moreUsers-FsAsO {
  margin-bottom: 8px;
}
.userRowPadding-OvX3j {
  padding: 0 8px;
}
.usersRow-Yk1wb {
  display: flex;
  position: relative;
}
.userItem-heZet, .moreUsersButton-YoX0_, .moreUsersButtonInvite-nPibN {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  height: 48px;
}
.moreUsersButtonInvite-nPibN {
  width: 44px;
  height: 44px;
}
.moreUsersButtonInvite-nPibN .moreUsersIcon-PTJ_b {
  transition: color 0.3s linear;
}
.moreUsersButtonInvite-nPibN:active .moreUsersIcon-PTJ_b, .moreUsersButtonInvite-nPibN:hover .moreUsersIcon-PTJ_b {
  color: var(--colors-icon-primary-selected);
}
.moreUsersButtonInvite-nPibN:focus-visible {
  box-shadow: inset 0 0 0 1px var(--colors-blue-200), 0 0 0 1px var(--colors-blue-550), 0 0 0 5px var(--colors-blue-200);
}
.userItem-heZet, .moreUsersButtonNoAttendee-WzWOS {
  border: none;
  padding: 0;
}
.uiTipContainer-VE96T {
  position: absolute;
  right: 15px;
  top: 1px;
}
`,""]),o.locals={moreUsers:"moreUsers-FsAsO",userRowPadding:"userRowPadding-OvX3j",usersRow:"usersRow-Yk1wb",userItem:"userItem-heZet",moreUsersButton:"moreUsersButton-YoX0_",moreUsersButtonInvite:"moreUsersButtonInvite-nPibN",moreUsersIcon:"moreUsersIcon-PTJ_b",moreUsersButtonNoAttendee:"moreUsersButtonNoAttendee-WzWOS",uiTipContainer:"uiTipContainer-VE96T"};let s=o},365567:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.showtimeNotificationContainer-MHa33 {
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 8px;
  width: 100%;
  pointer-events: none;
  transform: translateY(58px);
  opacity: 0;
  z-index: 2;
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;
}
.visible-IRwDn {
  transform: translateY(-55px);
  opacity: 1;
}
.shifted-KR_Ka {
  transform: translateX(-175px);
}
.shifted-KR_Ka.visible-IRwDn {
  transform: translateY(-55px) translateX(-175px);
}
.hiddenLayout-xHGMU {
  z-index: 4000;
}
.hiddenLayout-xHGMU.visible-IRwDn {
  transform: translateY(0px);
}
`,""]),o.locals={showtimeNotificationContainer:"showtimeNotificationContainer-MHa33",visible:"visible-IRwDn",shifted:"shifted-KR_Ka",hiddenLayout:"hiddenLayout-xHGMU"};let s=o},947194:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.facilitatorWrapper-xu_rb {
  width: 269px;
}
`,""]),o.locals={facilitatorWrapper:"facilitatorWrapper-xu_rb"};let s=o},484324:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.participantWrapper-v4z5z {
  width: 239px;
}
`,""]),o.locals={participantWrapper:"participantWrapper-v4z5z"};let s=o},340181:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.framePreview-Y0wuJ {
  width: 40px;
  height: 24px;
  margin: 5px 8px;
  border: 1px solid var(--colors-border-neutrals-disabled);
  border-radius: 2px;
}
.title-IAQu0 {
  flex: 1 1;
  overflow: hidden;
  margin-right: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.time-vjTfL {
  width: 34px;
  margin-right: 8px;
  text-align: right;
  color: var(--colors-background-neutrals-inactive);
}
.content_hidden-8BzyK {
  color: var(--colors-text-neutrals-subtle);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: var(--colors-background-neutrals-page-subtle);
}
.content_hidden_message-p4SG4 {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 12px;
  line-height: 18px;
  font-weight: normal;
  font-size: 3px;
  line-height: normal;
  color: var(--colors-text-neutrals-subtle);
  margin: 0;
  padding: 0;
}
`,""]),o.locals={framePreview:"framePreview-Y0wuJ",title:"title-IAQu0",time:"time-vjTfL",content_hidden:"content_hidden-8BzyK",content_hidden_message:"content_hidden_message-p4SG4"};let s=o},598550:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.appListItem-gKr_G {
  width: 100%;
  color: var(--colors-text-neutrals);
}
.appListItem-gKr_G .appListItem__icon-zGGb7 {
  width: 24px;
  height: 24px;
  margin-right: 8px;
  margin-left: 8px;
}
.appListItem-gKr_G .appListItem__name-VNDC1 {
  flex: 1 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
`,""]),o.locals={appListItem:"appListItem-gKr_G",appListItem__icon:"appListItem__icon-zGGb7",appListItem__name:"appListItem__name-VNDC1"};let s=o},566839:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.limitedTools__container-mM97D {
  display: flex;
  flex-direction: column;
  gap: var(--space-150);
}
.limitedTools__small-oRa4o {
  margin-top: var(--space-150);
}
`,""]),o.locals={limitedTools__container:"limitedTools__container-mM97D",limitedTools__small:"limitedTools__small-oRa4o"};let s=o},516286:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.limitedTools__container-z3WkD {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.limitedTools__text-Te43f {
  color: var(--colors-text-neutrals);
  max-width: 230px;
}
.limitedTools__labelContainer-LMFcv {
  display: flex;
  gap: var(--space-100);
  align-items: center;
}
.helpTextTooltip__icon-tKMBE {
  cursor: pointer;
  align-self: center;
  display: flex;
  align-items: center;
}
.helpTextTooltip__icon-tKMBE svg {
  width: 16px;
  height: 16px;
  color: var(--colors-icon-neutrals-inactive);
}
.helpTextTooltip__icon-tKMBE:hover svg {
  color: var(--colors-icon-primary-selected);
}
`,""]),o.locals={limitedTools__container:"limitedTools__container-z3WkD",limitedTools__text:"limitedTools__text-Te43f",limitedTools__labelContainer:"limitedTools__labelContainer-LMFcv",helpTextTooltip__icon:"helpTextTooltip__icon-tKMBE"};let s=o},25821:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.container-Db6Rv {
  align-items: center;
  padding: 0 var(--space-100);
  width: auto;
  min-width: 44px;
}
.activeItemNumber-KfW0M {
  color: var(--colors-text-neutrals);
}
.overtime-bsIGu {
  color: var(--colors-text-danger);
}
`,""]),o.locals={container:"container-Db6Rv",activeItemNumber:"activeItemNumber-KfW0M",overtime:"overtime-bsIGu"};let s=o},622228:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.button-RKhfA {
  padding: 0;
  border: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  transition: 0.3s, 0s box-shadow, 0s border-radius;
  background-color: transparent;
}
.button-RKhfA:focus-visible {
  box-shadow: inset 0 0 0 1px var(--colors-blue-200), 0 0 0 1px var(--colors-blue-550), 0 0 0 5px var(--colors-blue-200);
}
.button-RKhfA:hover {
  color: var(--colors-text-primary-selected);
  background-color: var(--colors-background-primary-subtle);
}
`,""]),o.locals={button:"button-RKhfA"};let s=o},629108:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>h});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i),s=n(678991),l=n.n(s),d=new URL(n(479876),n.b),c=new URL(n(683572),n.b),u=o()(a()),p=l()(d),m=l()(c);u.push([e.id,`.meetingReactionsContainer-gv9JU .reactionTypeSeparator-LaZFM {
  width: calc(100% - 32px);
  margin: 8px auto 0;
  border: none;
  border-top: 1px solid var(--colors-border-neutrals-controls);
}
.meetingReactionsContainer-gv9JU .rtb-select .rtb-select__button {
  border: none;
  background-image: url(${p});
  padding-inline: 0 24px;
}
.meetingReactionsContainer-gv9JU .rtb-select .rtb-select__button:hover {
  background-color: rgba(9, 9, 9, 0.12);
}
.meetingReactionsContainer-gv9JU .rtb-select__button-text {
  display: flex;
  padding-left: 10px;
}
.meetingReactionsContainer-gv9JU .rtb-select__button-text::before {
  content: '';
  background-image: url(${m});
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
`,""]),u.locals={meetingReactionsContainer:"meetingReactionsContainer-gv9JU",reactionTypeSeparator:"reactionTypeSeparator-LaZFM","rtb-select":"rtb-select","rtb-select__button":"rtb-select__button","rtb-select__button-text":"rtb-select__button-text"};let h=u},374712:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.meetingItemList_facilitator-fsm5C {
  width: 269px;
}
.meetingItemList_participant-cF_R8 {
  width: 239px;
}
.meetingControl_editAgenda-UcrJj {
  padding-left: var(--space-150);
}
`,""]),o.locals={meetingItemList_facilitator:"meetingItemList_facilitator-fsm5C",meetingItemList_participant:"meetingItemList_participant-cF_R8",meetingControl_editAgenda:"meetingControl_editAgenda-UcrJj"};let s=o},838931:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.container-GVH8m {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 0;
}
.root-ZVTfE {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  position: relative;
  z-index: 0;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 0 0 1px var(--colors-gray-250);
}
.root_indented-Z_6kj {
  margin-left: 20px;
}
.root_selected-xrrBr {
  color: var(--colors-blue-200);
}
.root_selected-xrrBr.root-ZVTfE:hover, .root_dragOverlay-LJ1eK {
  color: var(--colors-blue-200);
}
.root_contentHidden-ePXQ1 {
  cursor: pointer;
}
.dragOverlayStackItem-VSIhL {
  position: absolute;
  height: 100%;
  width: 100%;
  background: currentColor;
  box-shadow: 0px 4px 16px rgba(5, 0, 56, 0.12);
}
.preview-ehLeT {
  position: relative;
  outline: none;
  width: 292px;
  height: 162px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  background-color: var(--colors-gray-150);
  box-sizing: border-box;
  transition: height 0.3s ease-out;
  overflow: clip;
}
.small_preview-W1U7y {
  width: 272px;
  height: 148px;
}
.root-ZVTfE:focus-visible {
  box-shadow: inset 0 0 0 1px var(--colors-blue-550), 0 0 0 1px var(--colors-blue-550), 0 0 0 5px var(--colors-blue-200);
}
.root_selected-xrrBr::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 4px;
  box-shadow: 0 0 0 2px var(--colors-blue-500);
  pointer-events: none;
}
.root_contentHidden-ePXQ1 button:focus-visible {
  box-shadow: inset 0 0 0 1px var(--colors-blue-550), 0 0 0 1px var(--colors-blue-550), 0 0 0 5px var(--colors-blue-200);
}
.overlay-ErUjI {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.2s cubic-bezier(0.25, 0.1, 0.25, 0.1);
}
.root-ZVTfE:hover .overlay-ErUjI {
  background: rgba(0, 0, 0, 0.2);
}
.root_selected-xrrBr .overlay-ErUjI, .root_selected-xrrBr:hover .overlay-ErUjI {
  background: rgba(66, 98, 255, 0.15);
}
.content-wiWd7 {
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}
.content_hidden-wVSpG {
  color: var(--colors-gray-500);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  background-color: var(--colors-background-neutrals-page-subtle);
}
.preview_listView-WTHx2 {
  height: 44px;
}
.preview_listView-WTHx2 .content_hidden-wVSpG {
  flex-direction: row-reverse;
  justify-content: flex-end;
  padding-left: 40px;
  gap: 24px;
}
.content_hidden_message-hzxCg {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  color: var(--colors-gray-500);
  margin: 0;
  padding: 0;
}
.info-nnYzE {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  background-color: var(--colors-background-neutrals-container);
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  transform: translateY(50%);
  transition: opacity 0.2s cubic-bezier(0.25, 0.1, 0.25, 0.1), transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 0.1);
}
.menuSlot-X_1G5 {
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.25, 0.1, 0.25, 0.1);
}
.sectionSlot-gbAGF {
  width: 89%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sectionSlot-gbAGF > div {
  height: 12px;
  box-sizing: border-box;
  border-radius: 0px 0px 4px 4px;
  border-right: 1px solid var(--secondary-color-secondary-20, var(--colors-gray-250));
  border-bottom: 1px solid var(--secondary-color-secondary-20, var(--colors-gray-250));
  border-left: 1px solid var(--secondary-color-secondary-20, var(--colors-gray-250));
  background: linear-gradient(180deg, var(--colors-background-neutrals-subtle) 0%, var(--colors-background-neutrals) 100%);
}
.sectionSlot-gbAGF > div:nth-child(1) {
  width: 94%;
}
.sectionSlot-gbAGF > div:nth-child(2) {
  width: 89%;
}
.sectionSlotDragOverlay-RvvEo > div {
  box-shadow: 0px 4px 16px rgba(5, 0, 56, 0.12);
}
.root-ZVTfE:focus-visible .info-nnYzE, .root-ZVTfE > *:focus-within .info-nnYzE, .root-ZVTfE:hover .info-nnYzE, .root_selected-xrrBr .info-nnYzE, .root_contextMenuOpened-ACqMX .info-nnYzE, .root_isRenaming-Ph9Yz .info-nnYzE, .root_dragOverlay-LJ1eK .info-nnYzE, .preview_listView-WTHx2 .info-nnYzE, .root_showSection-RBGHL .info-nnYzE {
  opacity: 1;
  transform: translateY(0);
}
.root-ZVTfE:focus-visible .menuSlot-X_1G5, .root-ZVTfE > *:focus-within .menuSlot-X_1G5, .root-ZVTfE:hover .menuSlot-X_1G5, .root_selected-xrrBr .menuSlot-X_1G5, .root_contextMenuOpened-ACqMX .menuSlot-X_1G5 {
  opacity: 1;
}
.name-XfqB0 {
  color: var(--colors-text-neutrals);
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 8px;
}
.root-ZVTfE .name-XfqB0 {
  padding: 12px;
  padding-right: 4px;
}
.untitledText-fNmx0 {
  color: var(--colors-gray-500);
}
.nameIndex-vlqPL {
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 14px;
  font-weight: normal;
  font-weight: bold;
  line-height: 20px;
  text-wrap: nowrap;
  color: var(--colors-gray-500);
}
.nameInput-WKyfr {
  font: inherit;
  max-width: 215px;
  width: 100%;
  padding: 0;
  margin-right: 8px;
  background: transparent;
  border: none;
  box-shadow: 0 2px 0 0 var(--colors-blue-500);
  outline: none;
}
.nameText-GJyPW {
  position: relative;
  max-width: 215px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}
.nameText-GJyPW::after {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 0 16px 12px var(--colors-background-neutrals-container);
  pointer-events: none;
}
.nameEditable-QMEiH {
  cursor: text;
}
.trigger-ZBqEp {
  padding: 0;
  text-align: left;
}
.selectionToggleContainer-PSlXI {
  position: absolute;
  left: 0;
  top: 0;
  display: none;
  padding: 4px 6px;
}
.selectionToggleContainer_visible-PvUoQ, .root-ZVTfE:hover .selectionToggleContainer-PSlXI {
  display: block;
}
.selectionToggle-qNfvd {
  opacity: 0;
}
.root-ZVTfE:hover .selectionToggle-qNfvd {
  opacity: 0.5;
}
.root-ZVTfE:hover .selectionToggle-qNfvd:hover, .root-ZVTfE .selectionToggleContainer_visible-PvUoQ .selectionToggle-qNfvd {
  opacity: 1;
}
`,""]),o.locals={container:"container-GVH8m",root:"root-ZVTfE",root_indented:"root_indented-Z_6kj",root_selected:"root_selected-xrrBr",root_dragOverlay:"root_dragOverlay-LJ1eK",root_contentHidden:"root_contentHidden-ePXQ1",dragOverlayStackItem:"dragOverlayStackItem-VSIhL",preview:"preview-ehLeT",small_preview:"small_preview-W1U7y",overlay:"overlay-ErUjI",content:"content-wiWd7",content_hidden:"content_hidden-wVSpG",preview_listView:"preview_listView-WTHx2",content_hidden_message:"content_hidden_message-hzxCg",info:"info-nnYzE",menuSlot:"menuSlot-X_1G5",sectionSlot:"sectionSlot-gbAGF",sectionSlotDragOverlay:"sectionSlotDragOverlay-RvvEo",root_contextMenuOpened:"root_contextMenuOpened-ACqMX",root_isRenaming:"root_isRenaming-Ph9Yz",root_showSection:"root_showSection-RBGHL",name:"name-XfqB0",untitledText:"untitledText-fNmx0",nameIndex:"nameIndex-vlqPL",nameInput:"nameInput-WKyfr",nameText:"nameText-GJyPW",nameEditable:"nameEditable-QMEiH",trigger:"trigger-ZBqEp",selectionToggleContainer:"selectionToggleContainer-PSlXI",selectionToggleContainer_visible:"selectionToggleContainer_visible-PvUoQ",selectionToggle:"selectionToggle-qNfvd"};let s=o},194193:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.root-wbf0w {
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-color: var(--colors-background-neutrals-inactive-hover) transparent;
  scrollbar-width: thin;
}
.root-wbf0w::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.root-wbf0w::-webkit-scrollbar-thumb {
  background-color: var(--colors-background-neutrals-inactive-hover);
  border: 0 solid transparent;
  border-radius: 2px;
}
.root-wbf0w::-webkit-scrollbar-track {
  background-color: initial;
}
.root-wbf0w:focus-visible {
  box-shadow: inset 0 0 0 1px var(--colors-blue-550), 0 0 0 1px var(--colors-blue-550), 0 0 0 5px var(--colors-blue-200);
}
.ulRoot-ZuXTH {
  list-style: none;
  margin: 0;
  padding: 0 0 8px;
}
.ulRoot-ZuXTH[data-dragging='true'] {
  cursor: grabbing;
}
.ulRoot-ZuXTH[data-dragging='true'] li {
  pointer-events: none;
}
`,""]),o.locals={root:"root-wbf0w",ulRoot:"ulRoot-ZuXTH"};let s=o},64817:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.showtimeAddItemButtonContainer-GFXnF {
  width: 100%;
  height: 68px;
  min-height: 68px;
  box-sizing: border-box;
  display: flex;
  padding: 8px;
  align-items: center;
  justify-content: center;
}
.showtimeAddItemButtonContainer-GFXnF button {
  padding: 10px;
  width: 44px;
  height: 44px;
}
.showtimeAddItemButtonContainer-GFXnF .showtimeAddItemButton__svg-yDyMX {
  width: 24px;
  height: 24px;
}
`,""]),o.locals={showtimeAddItemButtonContainer:"showtimeAddItemButtonContainer-GFXnF",showtimeAddItemButton__svg:"showtimeAddItemButton__svg-yDyMX"};let s=o},498039:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.iconContainer-Mm6UB {
  width: 120px;
  height: 110px;
  margin-bottom: var(--space-300);
}
.leaderName-re5l3 {
  color: var(--colors-text-neutrals-subtle);
}
`,""]),o.locals={iconContainer:"iconContainer-Mm6UB",leaderName:"leaderName-re5l3"};let s=o},466753:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.root-Feoyo {
  display: flex;
  margin: 12px 0 6px;
  font-weight: 400;
}
.message-t0iqt {
  margin-left: 12px;
  font-family: var(--fonts-design-language);
  font-size: 14px;
  align-self: center;
}
.avatars-m7kTS {
  position: relative;
  width: 82px;
  height: 32px;
  display: flex;
  flex: none;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  order: 0;
  flex-grow: 0;
  padding: 0;
}
.avatars-m7kTS > * {
  position: absolute;
}
.avatars-m7kTS > div {
  border: 3px solid white;
}
.avatars-m7kTS > *:first-child {
  border: 3px solid var(--colors-border-primary);
  left: 0px;
  z-index: 10;
}
.avatars-m7kTS > *:nth-child(2) {
  left: 25px;
  z-index: 20;
}
.avatars-m7kTS > *:nth-child(3) {
  left: 50px;
  z-index: 30;
}
.countAvatar-FpgVg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: var(--colors-white);
  border: 3px solid var(--colors-border-neutrals-disabled);
  border-radius: 50%;
  font-size: 16px;
  font-weight: bold;
}
.pendingAvatar-x1bwk {
  width: 32px;
  height: 32px;
  background: var(--colors-gray-250);
  border: 3px solid var(--colors-border-neutrals-inverted);
  border-radius: 50%;
}
.pendingAvatar-x1bwk::after {
  position: absolute;
  top: 0;
  width: 32px;
  height: 32px;
  content: '';
  transform: translateX(50%);
  background: linear-gradient(to right, rgba(235, 235, 235, 0) 0%, rgba(235, 235, 235, 0) 40%, var(--colors-background-neutrals) 65%, rgba(255, 255, 255, 0) 90%, rgba(235, 235, 235, 0) 100%);
}
.pendingAvatar-x1bwk::after {
  animation: shine 1.5s 3s infinite;
}
@keyframes shine {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(50%);
  }
}
`,""]),o.locals={root:"root-Feoyo",message:"message-t0iqt",avatars:"avatars-m7kTS",countAvatar:"countAvatar-FpgVg",pendingAvatar:"pendingAvatar-x1bwk"};let s=o},98866:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.showtimeTabsHeader-RHtnB {
  padding: 0 24px;
  margin-bottom: 12px;
}
.showtimeTab-Q7Lgd {
  margin-right: 16px;
}
.showtimeTabText-jwYuU {
  padding: 12px 4px 12px 0;
  margin: 4px 0;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  font-family: Roobert, Noto Sans KR, Noto Sans JP, sans-serif;
  font-weight: 500;
}
`,""]),o.locals={showtimeTabsHeader:"showtimeTabsHeader-RHtnB",showtimeTab:"showtimeTab-Q7Lgd",showtimeTabText:"showtimeTabText-jwYuU"};let s=o},558823:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.root-elb_C {
  all: unset;
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  position: absolute;
}
.root-elb_C:focus {
  padding: 1rem;
  position: absolute;
  top: 10px;
  left: 10px;
  background: white;
  z-index: 1;
  width: auto;
  height: auto;
  clip: auto;
  box-shadow: inset 0 0 0 1px var(--colors-blue-550), 0 0 0 1px var(--colors-blue-550), 0 0 0 5px var(--colors-blue-200);
}
`,""]),o.locals={root:"root-elb_C"};let s=o},747232:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.sidebar-splitter-An9jW {
  width: 1px;
  height: 24px;
  margin: 0 8px 0 16px;
  background-color: rgba(5, 0, 56, 0.12);
}
@media only screen and (max-device-width: 767px) {
  .sidebar-splitter-An9jW {
    margin: 0 10px;
  }
}
`,""]),o.locals={"sidebar-splitter":"sidebar-splitter-An9jW"};let s=o},448390:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.timerProgress-T8yGl {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
}
.timerProgressBar-UTkej {
  height: 100%;
  width: 100%;
  transition: transform 0.2s ease-out;
  background-color: rgba(66, 98, 255, 0.12);
}
.lowLevel-W7diO {
  background-color: rgba(var(--colors-background-danger-prominent), 0.16);
}
.inactive-MpVzK {
  background-color: var(--colors-background-neutrals-subtle);
}
`,""]),o.locals={timerProgress:"timerProgress-T8yGl",timerProgressBar:"timerProgressBar-UTkej",lowLevel:"lowLevel-W7diO",inactive:"inactive-MpVzK"};let s=o},46308:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(639601),a=n.n(r),i=n(482609),o=n.n(i)()(a());o.push([e.id,`.rtb-toggle {
  position: relative;
  display: inline-block;
  cursor: pointer;
  min-width: 30px;
  height: 20px;
}
.rtb-toggle input[type='checkbox'] + .rtb-toggle__indicator {
  width: 36px;
  height: 20px;
}
.rtb-toggle input[type='checkbox'] + .rtb-toggle__indicator::after {
  width: 16px;
  height: 16px;
}
.rtb-toggle .rtb-toggle__text {
  font-size: 16px;
}
.rtb-toggle input[type='checkbox']:checked + .rtb-toggle__indicator::after {
  transform: translateX(16px);
}
.rtb-toggle .rtb-toggle__text {
  margin-left: 14px;
  line-height: 20px;
}
.rtb-toggle .rtb-toggle__indicator {
  flex-shrink: 0;
}
.rtb-toggle input[type='checkbox'] {
  position: absolute;
  top: 2px;
  left: 1px;
  z-index: -1;
  opacity: 0;
}
.rtb-toggle input[type='checkbox'] + .rtb-toggle__indicator {
  position: relative;
  display: inline-block;
  vertical-align: top;
  border-radius: 10px;
  background-color: var(--colors-gray-250);
}
.rtb-toggle input[type='checkbox'] + .rtb-toggle__indicator::after {
  content: '';
  position: absolute;
  display: block;
  margin: 2px;
  border-radius: 125px;
  background: var(--colors-background-neutrals);
}
.rtb-toggle input[type='checkbox']:checked + .rtb-toggle__indicator {
  background-color: var(--colors-background-primary-prominent-selected);
}
.rtb-toggle .rtb-toggle__text {
  vertical-align: top;
}
.rtb-toggle.rtb-toggle--large {
  height: 20px;
}
.rtb-toggle.rtb-toggle--large input[type='checkbox'] + .rtb-toggle__indicator {
  width: 36px;
  height: 20px;
}
.rtb-toggle.rtb-toggle--large input[type='checkbox'] + .rtb-toggle__indicator::after {
  width: 16px;
  height: 16px;
}
.rtb-toggle.rtb-toggle--large .rtb-toggle__text {
  font-size: 16px;
}
.rtb-toggle.rtb-toggle--large input[type='checkbox']:checked + .rtb-toggle__indicator::after {
  transform: translateX(16px);
}
.rtb-toggle.rtb-toggle--large .rtb-toggle__text {
  margin-left: 14px;
  line-height: 20px;
}
.rtb-toggle.rtb-toggle--medium {
  height: 16px;
}
.rtb-toggle.rtb-toggle--medium input[type='checkbox'] + .rtb-toggle__indicator {
  width: 28px;
  height: 16px;
}
.rtb-toggle.rtb-toggle--medium input[type='checkbox'] + .rtb-toggle__indicator::after {
  width: 12px;
  height: 12px;
}
.rtb-toggle.rtb-toggle--medium .rtb-toggle__text {
  font-size: 14px;
}
.rtb-toggle.rtb-toggle--medium input[type='checkbox']:checked + .rtb-toggle__indicator::after {
  transform: translateX(12px);
}
.rtb-toggle.rtb-toggle--medium .rtb-toggle__text {
  margin-left: 10px;
  line-height: 16px;
}
.rtb-toggle.rtb-toggle--small {
  height: 16px;
}
.rtb-toggle.rtb-toggle--small input[type='checkbox'] + .rtb-toggle__indicator {
  width: 28px;
  height: 16px;
}
.rtb-toggle.rtb-toggle--small input[type='checkbox'] + .rtb-toggle__indicator::after {
  width: 12px;
  height: 12px;
}
.rtb-toggle.rtb-toggle--small .rtb-toggle__text {
  font-size: 12px;
}
.rtb-toggle.rtb-toggle--small input[type='checkbox']:checked + .rtb-toggle__indicator::after {
  transform: translateX(12px);
}
.rtb-toggle.rtb-toggle--small .rtb-toggle__text {
  margin-left: 8px;
  line-height: 16px;
}
.rtb-toggle.rtb-toggle--animated input[type='checkbox'] + .rtb-toggle__indicator {
  transition-delay: 0.05s;
  transition: background-color 0.3s cubic-bezier(0.35, 0, 0.25, 1);
}
.rtb-toggle.rtb-toggle--animated input[type='checkbox'] + .rtb-toggle__indicator::after {
  transition-delay: 0.05s;
  transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
}
.rtb-toggle:not(.rtb-toggle--disabled):hover input[type='checkbox'] + .rtb-toggle__indicator {
  background-color: var(--colors-background-neutrals-control-pressed);
}
.rtb-toggle:not(.rtb-toggle--disabled):hover input[type='checkbox']:checked + .rtb-toggle__indicator {
  background-color: var(--colors-background-primary-prominent-hover);
}
.rtb-toggle.rtb-toggle--disabled {
  opacity: 0.2;
}
.rtb-toggle input[type='checkbox']:focus + .rtb-toggle__indicator,
.rtb-toggle input[type='checkbox']:focus-visible + .rtb-toggle__indicator {
  background-color: var(--colors-background-neutrals-control-pressed);
  outline: none;
  position: relative;
}
.rtb-toggle input[type='checkbox']:checked:focus + .rtb-toggle__indicator {
  background-color: var(--colors-background-primary-prominent-hover);
}
.rtb-toggle input[type='checkbox']:focus-visible + .rtb-toggle__indicator:before {
  box-shadow: inset 0 0 0 1px var(--colors-blue-550), 0 0 0 1px var(--colors-blue-550), 0 0 0 5px var(--colors-blue-200);
  border-radius: 10px;
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
`,""]),o.locals={"rtb-toggle":"rtb-toggle","rtb-toggle__indicator":"rtb-toggle__indicator","rtb-toggle__text":"rtb-toggle__text","rtb-toggle--large":"rtb-toggle--large","rtb-toggle--medium":"rtb-toggle--medium","rtb-toggle--small":"rtb-toggle--small","rtb-toggle--animated":"rtb-toggle--animated","rtb-toggle--disabled":"rtb-toggle--disabled"};let s=o},774930:function(e,t,n){var r=n(466188),a=0;e.exports=function(e){var t=++a;return r(e)+t}},144821:function(e,t,n){"use strict";n.d(t,{Z:()=>g});var r,a,i=n(830994),o=n(202784),s=n(213980),l=n.n(s),d=n(373463),c=n.n(d);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p={},m=0,h="onloadcallback";let g=(r=function(){return"https://"+(("undefined"!=typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+h+"&render=explicit"},a=(a={callbackName:h,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){function n(e,n){var r;return(r=t.call(this,e,n)||this).state={},r.__scriptURL="",r}n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var i=n.prototype;return i.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+m++),this.__scriptLoaderID},i.setupScriptURL=function(){return this.__scriptURL=0?r:r(),this.__scriptURL},i.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)})},i.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=p[this.__scriptURL];if(!e||!e.loaded)throw Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[a.callbackName]},i.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),r=a,i=r.globalName,o=r.callbackName,s=r.scriptId;if(i&&void 0!==window[i]&&(p[t]={loaded:!0,observers:{}}),p[t]){var l=p[t];if(l&&(l.loaded||l.errored)){this.asyncScriptLoaderHandleLoad(l);return}l.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)};return}var d={};d[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},p[t]={loaded:!1,observers:d};var c=document.createElement("script");for(var u in c.src=t,c.async=!0,a.attributes)c.setAttribute(u,a.attributes[u]);s&&(c.id=s);var m=function(e){if(p[t]){var n=p[t].observers;for(var r in n)e(n[r])&&delete n[r]}};o&&"undefined"!=typeof window&&(window[o]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),c.onload=function(){var e=p[t];e&&(e.loaded=!0,m(function(t){return!o&&(t(e),!0)}))},c.onerror=function(){var e=p[t];e&&(e.errored=!0,m(function(t){return t(e),!0}))},document.body.appendChild(c)},i.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===a.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var r=p[e];r&&(delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===a.removeOnUnmount&&delete p[e])},i.render=function(){var t=a.globalName,n=this.props,r=(n.asyncScriptOnLoad,n.forwardedRef),i=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!=typeof window&&(i[t]=void 0!==window[t]?window[t]:void 0),i.ref=r,(0,o.createElement)(e,i)},n}(o.Component),i=(0,o.forwardRef)(function(e,t){return(0,o.createElement)(n,u({},e,{forwardedRef:t}))});return i.displayName="AsyncScriptLoader("+t+")",i.propTypes={asyncScriptOnLoad:l().func},c()(i,e)})(i.Z)},830994:function(e,t,n){"use strict";n.d(t,{Z:()=>l});var r=n(202784),a=n(213980),i=n.n(a);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){function t(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(s(t)),t.handleErrored=t.handleErrored.bind(s(t)),t.handleChange=t.handleChange.bind(s(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(s(t)),t}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var n=t.prototype;return n.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},n.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},n.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},n.executeAsync=function(){var e=this;return new Promise(function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()})},n.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},n.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},n.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},n.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},n.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},n.componentDidMount=function(){this.explicitRender()},n.componentDidUpdate=function(){this.explicitRender()},n.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},n.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout(function(){document.body.removeChild(e)},5e3)},n.handleRecaptchaRef=function(e){this.captcha=e},n.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return r.createElement("div",o({},t,{ref:this.handleRecaptchaRef}))},t}(r.Component);l.displayName="ReCAPTCHA",l.propTypes={sitekey:i().string.isRequired,onChange:i().func,grecaptcha:i().object,theme:i().oneOf(["dark","light"]),type:i().oneOf(["image","audio"]),tabindex:i().number,onExpired:i().func,onErrored:i().func,size:i().oneOf(["compact","normal","invisible"]),stoken:i().string,hl:i().string,badge:i().oneOf(["bottomright","bottomleft","inline"])},l.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"}},890034:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(588791);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},476948:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(875927);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},437038:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(127348);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},331903:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(111683);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},815060:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(706858);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},397448:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(738744);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},86596:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(378951);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},850746:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(590304);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},618774:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(704034);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},750756:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(65633);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},639464:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(782302);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},335860:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(436029);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},927065:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(232717);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},208930:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(723533);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},678049:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(932675);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},216769:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(589736);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},845704:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(414142);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},51243:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(995218);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},712958:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(125953);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},863060:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(479296);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},549728:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(582922);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},723153:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(79218);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},726219:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(951872);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},171417:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(492998);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},743586:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(993755);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},398516:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(744984);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},273545:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(433156);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},180729:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(461501);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},29931:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(693959);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},822982:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(717107);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},204996:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(930755);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},283133:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(759394);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},797250:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(948032);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},830730:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(560301);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},82428:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(995407);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},598962:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(365567);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},205861:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(947194);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},493376:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(484324);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},755176:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(340181);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},998321:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(598550);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},85469:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(566839);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},676878:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(516286);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},274267:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(25821);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},800832:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(622228);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},256786:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(629108);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},23180:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(374712);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},930736:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(838931);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},173361:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(194193);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},883962:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(64817);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},462669:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(498039);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},611874:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(466753);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},724155:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(98866);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},941806:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(558823);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},372971:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(747232);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},9428:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(448390);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},283346:function(e,t,n){var r=n(46062),a=n(544036),i=n(396793),o=n(517892),s=n(211173),l=n(942464),d=n(46308);d=d.__esModule?d.default:d;var c={};c.styleTagTransform=l,c.setAttributes=o,c.insert=i.bind(null,"head"),c.domAPI=a,c.insertStyleElement=s,r(d,c),e.exports=d&&d.locals||{}},479876:function(e){"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOS4yOTI4OSA3LjI5Mjg5QzkuNjgzNDIgNi45MDIzNyAxMC4zMTY2IDYuOTAyMzcgMTAuNzA3MSA3LjI5Mjg5TDE1LjQxNDIgMTJMMTAuNzA3MSAxNi43MDcxQzEwLjMxNjYgMTcuMDk3NiA5LjY4MzQyIDE3LjA5NzYgOS4yOTI4OSAxNi43MDcxQzguOTAyMzcgMTYuMzE2NiA4LjkwMjM3IDE1LjY4MzQgOS4yOTI4OSAxNS4yOTI5TDEyLjU4NTggMTJMOS4yOTI4OSA4LjcwNzExQzguOTAyMzcgOC4zMTY1OCA4LjkwMjM3IDcuNjgzNDIgOS4yOTI4OSA3LjI5Mjg5WiIgZmlsbD0iY3VycmVudENvbG9yIiAvPgo8L3N2Zz4K"},683572:function(e){"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zIDE2SDcuNTg1NzlMMTMuMjkyOSAyMS43MDcxQzEzLjkyMjkgMjIuMzM3MSAxNSAyMS44OTA5IDE1IDIxVjNDMTUgMi4xMDkxIDEzLjkyMjkgMS42NjI5MyAxMy4yOTI5IDIuMjkyODlMNy41ODU3OSA4SDNDMi40NDc3MiA4IDIgOC40NDc3MiAyIDlWMTVDMiAxNS41NTIzIDIuNDQ3NzIgMTYgMyAxNlpNOCAxNEg0VjEwSDhDOC4yNjUyMiAxMCA4LjUxOTU3IDkuODk0NjQgOC43MDcxMSA5LjcwNzExTDEzIDUuNDE0MjFWMTguNTg1OEw4LjcwNzExIDE0LjI5MjlDOC41MTk1NyAxNC4xMDU0IDguMjY1MjIgMTQgOCAxNFpNMTcgMTBDMTcgOS40NDc3MiAxNy40NDc3IDkgMTggOUMxOC41NTIzIDkgMTkgOS40NDc3MiAxOSAxMFYxNEMxOSAxNC41NTIzIDE4LjU1MjMgMTUgMTggMTVDMTcuNDQ3NyAxNSAxNyAxNC41NTIzIDE3IDE0VjEwWk0yMiA1QzIxLjQ0NzcgNSAyMSA1LjQ0NzcyIDIxIDZWMThDMjEgMTguNTUyMyAyMS40NDc3IDE5IDIyIDE5QzIyLjU1MjMgMTkgMjMgMTguNTUyMyAyMyAxOFY2QzIzIDUuNDQ3NzIgMjIuNTUyMyA1IDIyIDVaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg=="},166679:function(e,t,n){"use strict";e.exports=n.p+"b92c21aebabe8fe5.mp3"},986431:function(e,t,n){"use strict";e.exports=n.p+"35be99fdbb4b9f3a.txt"},563465:function(e,t,n){"use strict";e.exports=n.p+"777c305a3736898b.mp3"},476520:function(e,t,n){"use strict";e.exports=n.p+"d89181a5647cd9d7.txt"},675449:function(e,t,n){"use strict";e.exports=n.p+"5aa14879318ae98e.mp3"},567038:function(e,t,n){"use strict";e.exports=n.p+"8537c53afb08c3ca.txt"},113664:function(e,t,n){"use strict";e.exports=n.p+"6ed64f8a2a0cee1a.mp3"},481954:function(e,t,n){"use strict";e.exports=n.p+"2cf6a66e33fb9659.txt"},715766:function(e,t,n){"use strict";e.exports=n.p+"0b4aa52af1be1a63.mp3"},23203:function(e,t,n){"use strict";e.exports=n.p+"0c648be5eed85a2b.txt"},842912:function(e,t,n){"use strict";e.exports=n.p+"7b7df1ac9a374b4d.mp3"},160873:function(e,t,n){"use strict";e.exports=n.p+"c981ed03da67bae0.txt"}}]);
//# sourceMappingURL=https://miro.com/app/static/c~BoardUI.desktop~BoardUI.saveBoardFromIntDisplayMobile~FramesListApp~FramesListApp.webview~ShowtimM.cfcdd2742c1e9193.js.map