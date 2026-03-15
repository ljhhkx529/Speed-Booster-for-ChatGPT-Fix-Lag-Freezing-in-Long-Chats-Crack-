(()=>{var ee=Object.create;var Y=Object.defineProperty;var te=Object.getOwnPropertyDescriptor;var oe=Object.getOwnPropertyNames;var se=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty;var V=(v,e)=>()=>(e||v((e={exports:{}}).exports,e),e.exports);var ae=(v,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of oe(e))!ie.call(v,n)&&n!==t&&Y(v,n,{get:()=>e[n],enumerable:!(s=te(e,n))||s.enumerable});return v};var K=(v,e,t)=>(t=v!=null?ee(se(v)):{},ae(e||!v||!v.__esModule?Y(t,"default",{value:v,enumerable:!0}):t,v));var J=V((ce,H)=>{function j(v,e){let t=new Date(v),s=e?new Date(e):new Date;t.setHours(0,0,0,0),s.setHours(0,0,0,0);let n=s.getTime()-t.getTime();return Math.floor(n/(1e3*60*60*24))+1}typeof window<"u"&&(window.ChatGPTSpeedBooster.utils=window.ChatGPTSpeedBooster.utils||{},window.ChatGPTSpeedBooster.utils.calculateTrialDay=j);typeof H<"u"&&H.exports&&(H.exports={calculateTrialDay:j})});var X=V((de,q)=>{function Q(v,e){let t=new Set(["pro","legacy"]);if(v&&e){let s=t.has(v.type),n=t.has(e.type);if(s&&!n)return{finalStatus:v,shouldUpdateStorage:!1,shouldUpdateBackup:!0};if(!s&&n)return{finalStatus:e,shouldUpdateStorage:!0,shouldUpdateBackup:!1};let d=new Date(v.createdAt||v.trialStartDate||0).getTime();if(new Date(e.createdAt||e.trialStartDate||0).getTime()<d-1e3)return{finalStatus:e,shouldUpdateStorage:!0,shouldUpdateBackup:!1};let y=JSON.stringify(v)!==JSON.stringify(e);return{finalStatus:v,shouldUpdateStorage:!1,shouldUpdateBackup:y}}return v&&!e?{finalStatus:v,shouldUpdateStorage:!1,shouldUpdateBackup:!0}:!v&&e?{finalStatus:e,shouldUpdateStorage:!0,shouldUpdateBackup:!1}:{finalStatus:null,shouldUpdateStorage:!1,shouldUpdateBackup:!1}}typeof window<"u"&&(window.ChatGPTSpeedBooster.utils=window.ChatGPTSpeedBooster.utils||{},window.ChatGPTSpeedBooster.utils.resolveStatusConflict=Q);typeof q<"u"&&q.exports&&(q.exports={resolveStatusConflict:Q})});window.ChatGPTSpeedBooster=window.ChatGPTSpeedBooster||{};(function(){let e=window.ChatGPTSpeedBooster;e.keys={INSTALL_ID:"csb_install_id",DISABLE_NOTIFICATIONS:"csb_disable_notifications",USER_STATUS:"csb_user_status",SETTINGS:"csb_settings",CONFIG:"csb_config",QUOTA:"csb_quota",TOAST_DATE:"csb_toast_date",EXTRA_MESSAGES:"csb_extra_messages",DONATION_LAST_SHOWN:"chatgpt_speed_booster_donation_last_shown",WELCOME_SHOWN:"csb_welcome_shown_v2_1",LIMIT_SHOWN_DATE:"csb_limit_shown_date_v2",QUOTA_SHOWN_DATE:"csb_quota_shown_date",PERMISSION_ERROR:"csb_permission_error",NAVIGATING:"csb_navigating",NAV_ACK:"csb_ack",LAST_STATUS:"csb_last_status",SCROLL_RESTORE:"csb_scroll_restore",AUTO_REFRESH:"csb_auto_refreshed",FREEMIUS_UUID:"csb_freemius_uuid",FREEMIUS_INSTALL:"csb_freemius_install",FREEMIUS_INSTALL_BACKUP:"csb_freemius_install_backup",FREEMIUS_LICENSE_KEY:"csb_freemius_license_key",LICENSE_LAST_CHECK:"csb_license_last_check"},e.userTypes={LEGACY:"legacy",TRIAL:"trial",FREE:"free",PRO:"pro"},e.links={FREEMIUS:"https://checkout.freemius.com/app/23882/plan/39867/",FREEMIUS_API:"https://api.freemius.com/v1",KOFI:"https://ko-fi.com/bgsn48"},e.freemius={PRODUCT_ID:"23882",LICENSE_CHECK_INTERVAL_DAYS:2},e.config={URL_CHECK_INTERVAL:1e3},e.state={lastUrl:window.location.href,enabled:!0,debug:!1,messageLimit:15,stats:{totalMessages:0,renderedMessages:0},urlWatcherInterval:null,hasShownBadgeForCurrentChat:!1},e.log=function(...s){e.state.debug&&console.log("[Speed Booster for ChatGPT]",...s)},e.logPromoMessage=function(){e.state.debug&&console.log(`%c
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  Speed Booster for ChatGPT (debug mode enabled)  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
Debug mode is enabled for this extension.
To disable, open the extension popup and uncheck "Debug Mode".
`,"color:#4c8bf5; font-size:15px; font-weight:bold;")}})();(function(){let e=window.ChatGPTSpeedBooster;function t(i,l=null){try{let c=localStorage.getItem(i);return c===null?l:JSON.parse(c)}catch{return l}}function s(i,l){try{return localStorage.setItem(i,JSON.stringify(l)),!0}catch{return!1}}function n(i){try{return localStorage.removeItem(i),!0}catch{return!1}}function d(i,l=null){try{let c=sessionStorage.getItem(i);return c===null?l:JSON.parse(c)}catch{return l}}function g(i,l){try{return sessionStorage.setItem(i,JSON.stringify(l)),!0}catch{return!1}}function y(i){try{return sessionStorage.removeItem(i),!0}catch{return!1}}e.storage={getLocal:t,setLocal:s,removeLocal:n,getSession:d,setSession:g,removeSession:y}})();(function(){let e=window.ChatGPTSpeedBooster;function t(){return document.querySelector("#prompt-textarea")}function s(){let c=t();return c?c.closest('[class*="bg-token-bg-primary"]')||c.closest("form"):null}function n(){let c=document.querySelector('article[data-testid^="conversation-turn-"]');return c?c.parentElement:null}function d(){return document.querySelectorAll('article[data-testid^="conversation-turn-"]').length}function g(){return document.querySelectorAll('article[data-testid^="conversation-turn-"]')}function y(){let c=['[class*="react-scroll-to-bottom"]','main [role="presentation"]',"main"];for(let h of c){let m=document.querySelector(h);if(m&&m.scrollHeight>m.clientHeight)return m}return null}function i(c,{styles:h={},attributes:m={},children:u=[],listeners:f={}}={}){let p=document.createElement(c);return Object.assign(p.style,h),Object.entries(m).forEach(([a,r])=>{p.setAttribute(a,r)}),u.forEach(a=>{typeof a=="string"?p.innerHTML+=a:p.appendChild(a)}),Object.entries(f).forEach(([a,r])=>{p.addEventListener(a,r)}),p}function l(c){return`
      <span style="display: block; font-weight: bold;">Load ${c} previous messages</span>
      <span style="display: block; font-size: 10px; opacity: 0.7; margin-top: 2px;">(configure amount in extension settings)</span>
    `}e.dom={findChatInput:t,findChatInputWrapper:s,findMessagesContainer:n,countMessageTurns:d,getMessageArticles:g,findScrollContainer:y,createElement:i,generateButtonHtml:l}})();(function(){let e=window.ChatGPTSpeedBooster;function t(){return new Date().toDateString()}function s(d){return d===t()}function n(){return Date.now()}e.dates={getTodayString:t,isToday:s,now:n}})();var he=K(J()),me=K(X());(function(){let e=window.ChatGPTSpeedBooster,t=e.keys,s=e.userTypes,n="csb_user_status_backup",d=!1;async function g(){return new Promise(p=>{try{chrome.storage.local.get({[t.USER_STATUS]:null},a=>{if(chrome.runtime.lastError){console.warn("[CSB] Storage error:",chrome.runtime.lastError),y(p);return}i(a,p)})}catch{window.postMessage({type:"CSB_EXTENSION_INVALIDATED"},"*"),y(p)}})}function y(p){try{let a=JSON.parse(localStorage.getItem(n));p(a)}catch{p(null)}}async function i(p,a){let r=p[t.USER_STATUS],x=null;try{x=localStorage.getItem(n)}catch{}let o=null;if(x)try{o=JSON.parse(x)}catch{}let{finalStatus:S,shouldUpdateStorage:b,shouldUpdateBackup:w}=e.utils.resolveStatusConflict(r,o),E=S;if(b&&await new Promise(I=>chrome.storage.local.set({[t.USER_STATUS]:E},I)),w)try{localStorage.setItem(n,JSON.stringify(E))}catch{}let T=E;if(T&&T.type===s.TRIAL&&T.trialStartDate&&e.utils.calculateTrialDay(T.trialStartDate)>7&&(T={type:s.FREE,trialStartDate:T.trialStartDate,trialEndDate:T.trialEndDate,createdAt:T.createdAt},chrome.storage.local.set({[t.USER_STATUS]:T}),localStorage.setItem(n,JSON.stringify(T))),T&&T.type===s.PRO){let I=t.FREEMIUS_INSTALL,_=t.FREEMIUS_UUID,L=t.FREEMIUS_LICENSE_KEY,R=t.LICENSE_LAST_CHECK,D=t.FREEMIUS_INSTALL_BACKUP,M=await new Promise(C=>{chrome.storage.local.get({[I]:null,[_]:null,[L]:null,[R]:null},z=>C(z))}),A=M[I],F=M[_],U=M[L],P=M[R];if(!A||!A.install_id)try{let C=localStorage.getItem(D);C&&(A=JSON.parse(C),A&&A.install_id&&await new Promise(z=>chrome.storage.local.set({[I]:A},z)))}catch{}let B=!!(A&&A.install_id);if(B){try{localStorage.setItem(D,JSON.stringify(A)),localStorage.setItem(I,JSON.stringify(A))}catch{}let z=(e.freemius?.LICENSE_CHECK_INTERVAL_DAYS||4)*24*60*60*1e3,$=Date.now();if((!P||$-P>z)&&F&&U&&A.install_id&&!d){d=!0;try{let G=e.freemius?.PRODUCT_ID||"23882",Z=`${e.links?.FREEMIUS_API||"https://api.freemius.com/v1"}/products/${G}/installs/${A.install_id}/license.json?uid=${F}&license_key=${encodeURIComponent(U)}`,N=await new Promise(k=>{chrome.runtime.sendMessage({type:"VALIDATE_LICENSE",url:Z},k)});if(N&&N.success&&N.result){let k=N.result;if(k.ok){let O=k.data;O.is_cancelled===!0&&(console.warn("[CSB] License has been cancelled. Downgrading to FREE."),B=!1),O.expiration&&O.expiration!==null&&new Date(O.expiration.replace(" ","T")+"Z")<new Date&&(console.warn("[CSB] License has expired. Downgrading to FREE."),B=!1),await new Promise(W=>chrome.storage.local.set({[R]:$},W))}else(k.status===404||k.status===403)&&(console.warn("[CSB] License validation failed (API returned",k.status,"). Downgrading to FREE."),B=!1,await new Promise(O=>chrome.storage.local.set({[R]:$},O)))}else throw N&&N.error==="PERMISSION_REQUIRED"?(e.permissionNotification&&e.permissionNotification.show({onGranted:()=>{chrome.storage.local.remove([R])}}),new Error("PERMISSION_REQUIRED")):new Error(N?.error||"Unknown background error")}catch(G){G.message!=="PERMISSION_REQUIRED"&&console.warn("[CSB] License validation error:",G.message)}finally{d=!1}}}if(!B){T={type:s.FREE,reason:"license_invalid"},chrome.storage.local.set({[t.USER_STATUS]:T}),localStorage.setItem(n,JSON.stringify(T)),chrome.storage.local.remove([I,_,L,R]);try{localStorage.removeItem(D)}catch{}}}a(T)}async function l(p){return new Promise(a=>{chrome.storage.local.set({[t.USER_STATUS]:p},()=>{try{localStorage.setItem(n,JSON.stringify(p))}catch{}a()})})}async function c(){return(await g())?.type===s.LEGACY}async function h(){let p=await g();if(p?.type!==s.TRIAL)return!1;let a=new Date(p.trialEndDate);return new Date<a}async function m(){let p=await g();return p?.type!==s.TRIAL?null:Math.min(e.utils.calculateTrialDay(p.trialStartDate),7)}async function u(){let p=await g();if(!p)return!1;if(p.type===s.LEGACY||p.type===s.PRO)return!0;if(p.type===s.TRIAL){let a=new Date(p.trialEndDate);return new Date<a}return!1}async function f(){let p=await g();if(!p){console.log("[Speed Booster for ChatGPT] User status: NOT SET (awaiting initialization from background.js)");return}let a=p.type,r="";switch(a){case s.LEGACY:r="LEGACY USER (Grandfathered - Pro for FREE forever)";break;case s.TRIAL:let x=await m(),o=await h();r=`TRIAL USER (Day ${x}/7${o?" - Active":" - Expired"})`;break;case s.FREE:r="FREE USER (Trial expired, Deep Work limit applies)";break;case s.PRO:r="PRO USER (Paid)";break;default:r=`UNKNOWN (${a})`}console.log(`%c[CSB] User Status: ${r}`,"color: #4c8bf5; font-weight: bold;"),console.log("[CSB] Full status object:",p)}e.userStatus={USER_STATUS_KEY:t.USER_STATUS,getUserStatus:g,_internal_setUserStatus:l,isLegacyUser:c,isTrialUser:h,getTrialDay:m,hasProAccess:u,logUserStatus:f}})();(function(){let e=window.ChatGPTSpeedBooster,t=e.log,s=[],n=[],d=[],g=[],y=[];function i(r){typeof r=="function"&&s.push(r)}function l(r){typeof r=="function"&&n.push(r)}function c(r){typeof r=="function"&&d.push(r)}function h(r){typeof r=="function"&&g.push(r)}function m(r){typeof r=="function"&&y.push(r)}function u(r){if(!r.data||!r.data.type)return;let{type:x,payload:o}=r.data;switch(x){case"csb-status":o&&typeof o=="object"&&(t("Message received: csb-status",o),s.forEach(S=>{try{S(o)}catch{}}));break;case"csb-status-update":o&&typeof o=="object"&&(t("Message received: csb-status-update",o),e.userStatus&&e.userStatus.getUserStatus(),n.forEach(S=>{try{S(o)}catch{}}));break;case"csb-performance-warning":t("Message received: csb-performance-warning",o),d.forEach(S=>{try{S(o)}catch{}});break;case"CSB_HANDSHAKE_ERROR":t("Message received: CSB_HANDSHAKE_ERROR",o),e.toast&&e.toast.show("Security Check Failed",{html:`
                <div style="display: flex; flex-direction: column; width: 100%;">
                  <div style="font-size: 10px; color: rgba(255,255,255,0.4); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">CHATGPT SPEED BOOSTER</div>
                  <div style="color: #fca5a5; font-weight: 500;">Connection Issue: ${o.error||"Unknown"}</div>
                  <div style="font-size: 12px; color: rgba(255,255,255,0.7); margin-top: 4px;">Trimming disabled. Please reload.</div>
                </div>
                `,duration:8e3});break}}function f(r,x,o){if(r)switch(r.type){case"getStats":return t("Message received: getStats"),Promise.resolve().then(async()=>{e.userStatus&&await e.userStatus.getUserStatus();for(let S of g)try{let b=await S();if(b){o(b);return}}catch{}o(null)}),!0;case"syncSettings":return t("Message received: syncSettings",r.settings),y.forEach(S=>{try{S(r.settings)}catch{}}),!0}}function p(){window.addEventListener("message",u),chrome.runtime.onMessage.addListener(f),t("Message service initialized")}function a(){window.removeEventListener("message",u)}e.messageService={onStatus:i,onStatusUpdate:l,onPerformanceWarning:c,onPopupGetStats:h,onPopupSyncSettings:m,initialize:p,cleanup:a},t("Message service module loaded")})();(function(){let e=window.ChatGPTSpeedBooster,t=e.log,s=e.keys,n=null,d=0,g=10;function y(){let m=['div[class*="react-scroll-to-bottom"]','main div[class*="overflow-y-auto"]','article[data-testid^="conversation-turn-"]'];for(let u of m){let f=document.querySelector(u);if(f)if(u.includes("article")){let p=f.parentElement;for(;p&&p!==document.body;){let a=getComputedStyle(p);if(a.overflowY==="auto"||a.overflowY==="scroll")return p;p=p.parentElement}}else return f}return t("Could not find scroll container based on known selectors."),null}function i(){try{if(!y())return;let u=Array.from(document.querySelectorAll('article[data-testid^="conversation-turn-"]')),f=null,p="testid",a=0;for(let r of u){let x=r.getBoundingClientRect();if(x.top>=0||x.bottom>50){let o=r.getAttribute("data-turn-id")||r.querySelector("[data-message-id]")?.getAttribute("data-message-id");o?(f=o,p="uuid"):(f=r.getAttribute("data-testid"),p="testid"),a=x.top;break}}if(f){let r={anchorId:f,anchorType:p,anchorOffset:a};sessionStorage.setItem(s.SCROLL_RESTORE,JSON.stringify(r)),t("Saved scroll anchor:",r)}}catch(m){t("Error saving scroll position:",m)}}function l(){let m=sessionStorage.getItem(s.SCROLL_RESTORE);if(!m)return!1;try{let u=JSON.parse(m);if(u.anchorId){let f=null;if(u.anchorType==="uuid"?f=document.querySelector(`article[data-turn-id="${u.anchorId}"]`)||document.querySelector(`[data-message-id="${u.anchorId}"]`)?.closest("article"):f=document.querySelector(`article[data-testid="${u.anchorId}"]`),f){sessionStorage.removeItem(s.SCROLL_RESTORE),t("Found anchor element:",u.anchorId,"Type:",u.anchorType),f.scrollIntoView({block:"start",behavior:"instant"});let p=y();if(p&&u.anchorOffset!==void 0){let r=f.getBoundingClientRect().top-u.anchorOffset;Math.abs(r)>1&&(p.scrollTop+=r,t("Fine-tuned scroll by:",r))}return t("Scroll restored to anchor element"),!0}}}catch(u){t("Error restoring scroll position:",u)}return!1}function c(){if(l()){n&&(n.disconnect(),n=null),d=0,t("Scroll restored successfully");return}if(!sessionStorage.getItem(s.SCROLL_RESTORE)){d=0;return}d++,d<g?setTimeout(c,500):(t("Scroll restore failed after max retries - anchor element never appeared"),sessionStorage.removeItem(s.SCROLL_RESTORE),d=0)}function h(){sessionStorage.getItem(s.SCROLL_RESTORE)&&(t("Setting up scroll restore watcher"),d=0,n=new MutationObserver((u,f)=>{let p=document.querySelectorAll('article[data-testid^="conversation-turn-"]');p.length>=5&&(f.disconnect(),n=null,t(`${p.length} articles detected, starting scroll restore...`),setTimeout(c,50))}),n.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{n&&(n.disconnect(),n=null,t("Fallback: Starting scroll restore attempts"),c())},3e3))}e.scrollService={save:i,restore:l,setupWatcher:h},t("Scroll service module loaded")})();(function(){let e=window.ChatGPTSpeedBooster,t=e.state,s=e.log,n=e.keys,d="data-csb-navigation",g=!1;function y(){try{let w=sessionStorage.getItem(n.NAVIGATING);if(w){let E=setInterval(()=>{sessionStorage.getItem(n.NAV_ACK)&&(sessionStorage.removeItem(n.NAVIGATING),sessionStorage.removeItem(n.NAV_ACK),clearInterval(E))},50);setTimeout(()=>{clearInterval(E),sessionStorage.getItem(n.NAVIGATING)&&sessionStorage.removeItem(n.NAVIGATING)},5e3)}w?e.scrollService&&e.scrollService.setupWatcher():(c(),s("Manual refresh detected - resetting to newest messages only"))}catch{}}function i(){try{let w=localStorage.getItem(n.EXTRA_MESSAGES);if(w){let E=JSON.parse(w);if(E.url===window.location.href)return E.extra||0}}catch{}return 0}function l(w){try{sessionStorage.setItem(n.NAVIGATING,"true"),localStorage.setItem(n.EXTRA_MESSAGES,JSON.stringify({url:window.location.href,extra:w}))}catch{}}function c(){try{localStorage.removeItem(n.EXTRA_MESSAGES)}catch{}}function h(){let w=t.messageLimit||10,E=i(),T=0;t.stats&&t.stats.totalMessages&&t.stats.initialTotalMessages&&(T=Math.max(0,t.stats.totalMessages-t.stats.initialTotalMessages));let I=E+w+T;s(`Loading ${w} more older messages (total extra: ${I})`),e.scrollService&&e.scrollService.save(),l(I),window.location.reload()}function m(){if(!t.hasLoadedMessages){s("Gatekeeper: Message data not yet loaded. Button insertion deferred.");return}e.loadMoreButton&&e.loadMoreButton.insert(h)}function u(){e.loadMoreButton&&e.loadMoreButton.remove()}function f(){e.loadMoreButton&&e.loadMoreButton.updateText()}function p(w){if(!w)return;let E=g;g=w.hasOlderMessages??!1,g&&w.totalMessages&&w.renderedMessages&&w.totalMessages<=w.renderedMessages&&(s(`Safety check: Ignoring hasOlderMessages=true because Total (${w.totalMessages}) <= Rendered (${w.renderedMessages})`),g=!1);let T=e.loadMoreButton&&e.loadMoreButton.isInserted();g&&!T?m():!g&&T&&u()}function a(){g&&e.loadMoreButton&&!e.loadMoreButton.isInserted()&&m()}let r=null;function x(){r||(r=setInterval(()=>{g&&t.hasLoadedMessages&&e.loadMoreButton&&!e.loadMoreButton.isInserted()&&(s("Button missing from DOM - reinserting"),e.loadMoreButton.reset(),m())},3e3))}function o(){if(s("NavigationService initialized, state.enabled =",t.enabled),y(),!t.enabled){s("Navigation skipped - extension disabled");return}e.messageService&&e.messageService.onStatus(p),setTimeout(a,2e3),setTimeout(a,4e3),x();try{let w=sessionStorage.getItem(n.LAST_STATUS);if(w){let E=JSON.parse(w);p(E)}}catch{}}function S(){u(),r&&(clearInterval(r),r=null)}function b(){g=!1,u()}e.navigationService={initialize:o,cleanup:S,reset:b,loadOlder:h,clearExtraMessages:c,getExtraMessages:i,updateButtonText:f},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o(),window.addEventListener("beforeunload",S)})();(function(){let e=window.ChatGPTSpeedBooster,t=e.log,s=e.keys,n=e.userTypes;async function d(i){t("Activating License Key via Freemius:",i),e.toast.show("Activating PRO...",{duration:1e4});try{let l=e.links?.FREEMIUS_API||"https://api.freemius.com/v1",c=e.freemius?.PRODUCT_ID||"23882",h=localStorage.getItem(s.FREEMIUS_UUID);h||(h=crypto.randomUUID().replace(/-/g,""),localStorage.setItem(s.FREEMIUS_UUID,h)),chrome.storage.local.set({[s.FREEMIUS_UUID]:h});let m=`${l}/products/${c}/licenses/activate.json?uid=${h}&license_key=${encodeURIComponent(i)}`,u=await new Promise(a=>{chrome.runtime.sendMessage({type:"ACTIVATE_LICENSE",url:m},a)});if(!u.success){if(u.error==="PERMISSION_REQUIRED"){e.permissionNotification&&e.permissionNotification.show({onGranted:()=>d(i)});return}throw new Error(u.error||"License activation failed")}let f=u.data;if(f.error){let a=f.error.message||f.message||"License activation failed";throw new Error(a)}localStorage.setItem(s.FREEMIUS_INSTALL,JSON.stringify(f)),localStorage.setItem(s.FREEMIUS_LICENSE_KEY,i),chrome.storage.local.set({[s.FREEMIUS_INSTALL]:f,[s.FREEMIUS_LICENSE_KEY]:i}),await new Promise(a=>{chrome.storage.local.set({[s.USER_STATUS]:{type:n.PRO,grantedAt:new Date().toISOString(),source:"freemius_direct",freemiusInstallId:f.install_id||null}},a)});let p=e.toast.show("Activation Successful",{type:"pro",sticky:!0,html:`
          <div style="text-align: center;">
            <div style="font-size: 24px; margin-bottom: 8px;">\u{1F389}</div>
            <div style="font-weight: 700; color: #fff; margin-bottom: 4px;">PRO Unlocked!</div>
            <div style="font-size: 13px; color: rgba(255,255,255,0.8); margin-bottom: 12px;">Your license is now active on this browser.</div>
            <button id="csb-refresh-btn-1" style="
              background: white; 
              color: #10b981; 
              border: none; 
              padding: 8px 16px; 
              border-radius: 6px; 
              font-weight: 600; 
              font-size: 13px;
              cursor: pointer;
              box-shadow: 0 2px 5px rgba(0,0,0,0.1);
              transition: transform 0.1s;
            ">Refresh to Continue</button>
          </div>
        `});if(p){let a=p.querySelector("#csb-refresh-btn-1");a&&a.addEventListener("click",()=>{a.innerText="Refreshing...",window.location.reload()})}}catch(l){t("License Activation Error:",l),e.toast.show("Activation Failed",{html:`
        <div style="display: flex; flex-direction: column; width: 100%;">
          <div style="font-size: 10px; color: rgba(255,255,255,0.4); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">CHATGPT SPEED BOOSTER</div>
          <div style="color: #fca5a5; font-weight: 500;">${y(l.message)}</div>
        </div>
        `,duration:6e3})}}async function g(){let i=new URLSearchParams(window.location.search),l=i.get("activation"),c=i.get("license_key")||i.get("csb_activate");if(l||c){let m=await e.userStatus.getUserStatus();if(m&&m.type===n.PRO){t("User is already PRO. Skipping activation."),e.toast.show("Already PRO",{type:"success",html:`
             <div style="display: flex; flex-direction: column; width: 100%;">
                <div style="font-size: 10px; color: rgba(255,255,255,0.4); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">CHATGPT SPEED BOOSTER</div>
                <div style="color: #fff; font-weight: 500;">You have already activated PRO<br><span style="font-size: 12px; opacity: 0.8; font-weight: 400;">No need to activate again!</span></div>
             </div>
             `,duration:5e3});let u=new URL(window.location.href);(u.searchParams.has("activation")||u.searchParams.has("license_key")||u.searchParams.has("csb_activate"))&&(u.searchParams.delete("activation"),u.searchParams.delete("license_key"),u.searchParams.delete("csb_activate"),window.history.replaceState({},document.title,u.toString()));return}}l?(t("Deprecated activation token detected. Ignoring."),e.toast.show("Legacy Activation Link",{html:"This activation link is too old. Please contact support or use your License Key.",duration:8e3})):c&&(t("License Key detected. Activating..."),await d(c));let h=new URL(window.location.href);(h.searchParams.has("activation")||h.searchParams.has("license_key")||h.searchParams.has("csb_activate"))&&(h.searchParams.delete("activation"),h.searchParams.delete("license_key"),h.searchParams.delete("csb_activate"),window.history.replaceState({},document.title,h.toString()))}e.paymentService={checkForActivation:g};function y(i){let l=i;try{let c=JSON.parse(i);c&&c.error&&(l=c.error)}catch{}return l.includes("license_key not found")||l.toLowerCase().includes("invalid")?"The entered licence key is invalid, please check again or purchase a valid key.":l}t("Payment Service initialized")})();(function(){let e=window.ChatGPTSpeedBooster,t={colors:{slate800:"#1e293b",textWhite:"#ffffff",textMuted:"rgba(255,255,255,0.7)",textDimmed:"rgba(255,255,255,0.4)",borderSubtle:"rgba(255, 255, 255, 0.1)",slate300:"#cbd5e1",blue400:"#60a5fa",blue500:"#3b82f6",blue600:"#2563eb",green500:"#10b981",green600:"#059669",amber500:"#f59e0b",amber600:"#d97706",red400:"#f87171",red600:"#dc2626",gold:"#FFD700",amber400:"#FFC107"},gradients:{blue:"linear-gradient(90deg, #60a5fa, #3b82f6)",green:"linear-gradient(135deg, #10b981, #059669)",amber:"linear-gradient(90deg, #fbbf24, #d97706)",red:"linear-gradient(90deg, #f87171, #dc2626)",gold:"linear-gradient(90deg, #FFD700, #FFC107)",purple:"linear-gradient(135deg, #8b5cf6, #6d28d9)"},shadows:{toast:"0 10px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.05) inset",badge:"0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.05) inset",goldGlow:"0 0 10px rgba(255, 215, 0, 0.8)"},fonts:{family:"system-ui, -apple-system, sans-serif",sizeXs:"10px",sizeSm:"11px",sizeMd:"13px",sizeLg:"14px"},baseToast:{position:"fixed",right:"20px",zIndex:"2147483647",display:"flex",alignItems:"center",padding:"12px 16px 12px 12px",borderRadius:"12px",background:"#1e293b",border:"1px solid rgba(255, 255, 255, 0.1)",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.05) inset",color:"white",fontFamily:"system-ui, -apple-system, sans-serif",backdropFilter:"blur(10px)",userSelect:"none"},transitions:{slideIn:"all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",fadeOut:"opacity 300ms ease-out, transform 300ms ease-out"}};function s(d){return d>=90?t.gradients.red:d>=50?t.gradients.amber:t.gradients.blue}function n(){let d="csb-notification-styles";if(document.getElementById(d))return;let g=document.createElement("style");g.id=d,g.textContent=`
      .csb-toast-header {
        font-size: 10px;
        color: rgba(255,255,255,0.4);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 6px;
      }
      
      .csb-toast-title {
        font-size: 13px;
        font-weight: 700;
        color: #fff;
      }
      
      .csb-toast-text {
        font-size: 11px;
        color: #cbd5e1;
        line-height: 1.2;
      }
      
      .csb-progress-bar-container {
        background: rgba(255,255,255,0.1);
        height: 6px;
        border-radius: 3px;
        overflow: hidden;
        margin-bottom: 6px;
      }
      
      .csb-progress-bar {
        height: 100%;
        border-radius: 3px;
        transition: width 0.3s ease, background 0.3s ease;
      }
      
      .csb-close-btn {
        margin-left: 10px;
        cursor: pointer;
        font-size: 18px;
        opacity: 0.6;
        color: white;
      }
      
      .csb-close-btn:hover {
        opacity: 1;
      }
      
      .csb-link {
        color: #60a5fa;
        cursor: pointer;
        text-decoration: underline;
      }
    `,document.head.appendChild(g)}e.notificationStyles={styles:t,getProgressGradient:s,injectSharedStyles:n},e.log("Notification styles module initialized")})();(function(){let e=window.ChatGPTSpeedBooster,t=e.log;function s(n,d={}){let{type:g="info",sticky:y=!1,duration:i=5e3,title:l,html:c,top:h="60px"}=d,m=document.getElementById("csb-toast");m&&m.remove();let u=document.createElement("div");u.id="csb-toast";let f={position:"fixed",top:h,right:"20px",zIndex:"2147483647"};if(c)u.innerHTML=c;else{let r="\u2139\uFE0F",x="linear-gradient(135deg, #3b82f6, #1d4ed8)",o=l||"Speed Booster";g==="warning"?(r="\u26A0\uFE0F",x="linear-gradient(135deg, #f59e0b, #d97706)",o=l||"Warning"):g==="success"?(r="\u2705",x="linear-gradient(135deg, #10b981, #059669)",o=l||"Success"):g==="pro"&&(r="\u26A1",x="linear-gradient(135deg, #8b5cf6, #6d28d9)",o=l||"Pro Status"),u.innerHTML=`
        <div style="
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: ${x};
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
          flex-shrink: 0;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        ">
          <span style="font-size: 16px; line-height: 1;">${r}</span>
        </div>
        <div style="display: flex; flex-direction: column; flex: 1; padding-right: 10px;">
          <span style="font-size: 14px; font-weight: 600; color: #ffffff; line-height: 1.4;">${o}</span>
          <span style="font-size: 13px; font-weight: 400; color: rgba(255,255,255,0.85); line-height: 1.4;">${n}</span>
        </div>
        <span class="close-btn" style="cursor: pointer; font-size: 18px; opacity: 0.6; line-height: 1; padding: 4px; color: white;">\xD7</span>
      `}Object.assign(u.style,{...f,display:"flex",alignItems:"center",padding:"12px 16px 12px 12px",borderRadius:"12px",background:"#1e293b",border:"1px solid rgba(255, 255, 255, 0.1)",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.05) inset",color:"white",fontFamily:"system-ui, -apple-system, sans-serif",opacity:"0",transform:"translateY(-10px) scale(0.95)",transition:"all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",width:"auto",maxWidth:"425px",backdropFilter:"blur(10px)",userSelect:"none"}),document.body.appendChild(u),requestAnimationFrame(()=>{u.style.opacity="1",u.style.transform="translateY(0) scale(1)"});let p=()=>{u.style.opacity="0",u.style.transform="translateY(-10px) scale(0.95)",setTimeout(()=>u.remove(),300)},a=u.querySelector(".close-btn");return a&&a.addEventListener("click",r=>{r.stopPropagation(),p()}),y||setTimeout(p,i),u}e.toast={show:s},t("Base notification module initialized")})();(function(){let e=window.ChatGPTSpeedBooster,t=e.log,s=e.userTypes;function n(l,c=30){let h=Math.round(l/c*100),m="linear-gradient(90deg, #60a5fa, #3b82f6)";h>=90?m="linear-gradient(90deg, #f87171, #dc2626)":h>=50&&(m="linear-gradient(90deg, #fbbf24, #d97706)");let u=e.links.FREEMIUS,f=`
      <div style="display: flex; flex-direction: column; width: 100%; position: relative;">
        <!-- Close Button (top right) -->
        <span class="close-btn" style="position: absolute; top: 0; right: 0; cursor: pointer; font-size: 18px; opacity: 0.5; color: white; padding: 2px 6px; line-height: 1;">\xD7</span>
        
        <!-- Notification Title -->
        <div style="font-size: 10px; color: rgba(255,255,255,0.4); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px;">Speed Booster for ChatGPT (FREE)</div>
        
        <!-- Header -->
        <div style="font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 8px;">DAILY SPEED BOOSTED PROMPTS: ${l} / ${c} USED</div>
        
        <!-- Progress Bar -->
        <div style="background: rgba(255,255,255,0.1); height: 8px; border-radius: 4px; margin-bottom: 12px; overflow: hidden;">
          <div style="background: ${m}; width: ${h}%; height: 100%; border-radius: 4px; transition: width 0.3s ease;"></div>
        </div>
        
        <!-- Description -->
        <div style="font-size: 12px; color: #cbd5e1; line-height: 1.4; margin-bottom: 14px;">
          You are on the <b style="color: #fff;">Free Version</b> (30 speed boosted prompts/day). Once you hit the daily limit, the booster stops and <b style="color: #fff;">lag returns</b>.
        </div>
        
        <!-- CTA Button -->
        <a href="${u}" target="_blank" style="
          display: block;
          width: 100%;
          padding: 12px 16px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          font-size: 13px;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        ">Go Unlimited ($7.99 - One Time)</a>
      </div>
    `;e.toast.show("",{html:f,duration:7e3,top:"60px"})}let d="csb_quota_shown_date",g="csb_quota_20_shown";async function y(l){if(!e.userStatus||(await e.userStatus.getUserStatus())?.type!==s.FREE)return;let h=l.count,m=30,u=new Date().toDateString();if(l.date&&l.date!==u){t("Quota notification suppressed: Stale quota date",l.date);return}try{h>=20&&h<m&&localStorage.getItem(g)!==u&&(localStorage.setItem(g,u),n(h,m))}catch{}}async function i(l){if(!e.userStatus||(await e.userStatus.getUserStatus())?.type!==s.FREE)return;let h=new Date().toDateString();try{if(localStorage.getItem(d)===h)return;localStorage.setItem(d,h),n(l.count,30)}catch{}}e.quotaNotification={show:n,checkMilestone:y,checkInitial:i},t("Quota notification module initialized")})();(function(){let e=window.ChatGPTSpeedBooster,t=e.log,s=e.keys,n=e.userTypes,d=[6,7];function g(i){let c=Math.round(i/7*100),h=7-i,m="linear-gradient(90deg, #FFD700, #FFC107)",u="0 0 10px rgba(255, 215, 0, 0.8)",f=`In ${h} days, you revert to the <b style="color: #fff;">Free Version</b> (30 Boosted prompts/day).`;h===1?f='Tomorrow, you revert to the <b style="color: #fff;">Free Version</b> (30 Boosted prompts/day).':h===0&&(f='Later today, you revert to the <b style="color: #fff;">Free Version</b> (30 Boosted prompts/day).');let p=e.links.FREEMIUS,a=`
      <div style="display: flex; flex-direction: column; width: 100%; position: relative;">
        <!-- Close Button (top right) -->
        <span class="close-btn" style="position: absolute; top: 0; right: 0; cursor: pointer; font-size: 18px; opacity: 0.5; color: white; padding: 2px 6px; line-height: 1;">\xD7</span>
        
        <!-- Notification Title -->
        <div style="font-size: 10px; color: rgba(255,255,255,0.4); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px;">Speed Booster for ChatGPT</div>
        
        <!-- Header -->
        <div style="font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 8px;">UNLIMITED SPEED PREVIEW: DAY ${i} / 7</div>
        
        <!-- Progress Bar -->
        <div style="background: rgba(255,255,255,0.1); height: 8px; border-radius: 4px; margin-bottom: 12px; overflow: hidden;">
          <div style="background: ${m}; box-shadow: ${u}; width: ${c}%; height: 100%; border-radius: 4px; transition: width 0.3s ease;"></div>
        </div>
        
        <!-- Description -->
        <div style="font-size: 12px; color: #cbd5e1; line-height: 1.4; margin-bottom: 14px;">
          ${f}
        </div>
        
        <!-- CTA Button -->
        <a href="${p}" target="_blank" style="
          display: block;
          width: 100%;
          padding: 12px 16px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          font-size: 13px;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        ">Keep Unlimited ($7.99 - one-time)</a>
      </div>
    `;e.toast.show(null,{type:"pro",duration:6e3,html:a});try{localStorage.setItem(s.TOAST_DATE,new Date().toDateString())}catch{}}async function y(){if(!e.userStatus)return!1;let i=await e.userStatus.getUserStatus();if(i||(await new Promise(h=>setTimeout(h,1e3)),i=await e.userStatus.getUserStatus()),!i||i.type!==n.TRIAL)return!1;let l=new Date().toDateString();try{if(localStorage.getItem(s.TOAST_DATE)===l)return!1}catch{}let c=await e.userStatus.getTrialDay();return!c||!d.includes(c)?!1:(setTimeout(()=>{g(c)},2e3),!0)}e.trialNotification={show:g,checkAndShow:y},t("Trial notification module initialized")})();(function(){let e=window.ChatGPTSpeedBooster,t=e.log,s=e.keys,n="csb_limit_shown_date_v2";function d(){try{localStorage.setItem(n,new Date().toDateString()),t("Limit notification marked as shown for today.")}catch{}let i=`
      <div style="display: flex; flex-direction: column; width: 100%; position: relative;">
        <!-- Notification Title -->
        <div style="font-size: 10px; color: rgba(255,255,255,0.4); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px;">Speed Booster for ChatGPT (FREE)</div>
        
        <!-- Header with warning icon -->
        <div style="display: flex; align-items: center; margin-bottom: 8px;">
          <div style="
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: linear-gradient(135deg, #f59e0b, #d97706);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            flex-shrink: 0;
          ">
            <span style="font-size: 16px; font-weight: bold; line-height: 1; color: #ffffff;">\u26A0</span>
          </div>
          <span style="font-size: 14px; font-weight: 700; color: #fff;">DAILY FREE SPEED BOOST LIMIT REACHED</span>
        </div>
        
        <!-- Progress Bar (full/red) -->
        <div style="background: rgba(255,255,255,0.1); height: 8px; border-radius: 4px; margin-bottom: 12px; overflow: hidden;">
          <div style="background: linear-gradient(90deg, #f87171, #dc2626); width: 100%; height: 100%; border-radius: 4px;"></div>
        </div>
        
        <!-- Description -->
        <div style="font-size: 12px; color: #cbd5e1; line-height: 1.4; margin-bottom: 14px;">
          You've used all <b style="color: #fff;">30 free daily speed boosted prompts</b>. The extension is now <b style="color: #f87171;">paused</b> until tomorrow.
        </div>
        
        <!-- CTA Button -->
        <a href="${e.links.FREEMIUS}" target="_blank" style="
          display: block;
          width: 100%;
          padding: 12px 16px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          font-size: 13px;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          margin-bottom: 8px;
        ">Go Unlimited ($7.99 - one-time)</a>

        <!-- Disable Button -->
        <button id="csb-disable-btn" style="
            display: block;
            width: 100%;
            margin-top: 8px;
            padding: 10px;
            background: rgba(239, 68, 68, 0.15); /* Red tint */
            border: 1px solid rgba(239, 68, 68, 0.3);
            border-radius: 8px;
            color: #fca5a5; /* Lighter red text */
            font-size: 11px;
            font-weight: 500;
            text-align: center;
            cursor: pointer;
            transition: background 0.2s ease;
        ">Maybe later, disable Speed Booster until tomorrow</button>
      </div>
    `,l=e.toast.show("",{html:i,sticky:!0,top:"60px"});setTimeout(()=>{l&&document.body.contains(l)&&(t("Limit notification ignored for 5m -> Auto-refreshing page"),window.location.reload())},300*1e3),setTimeout(()=>{let c=document.getElementById("csb-disable-btn");c&&c.addEventListener("click",()=>{window.location.reload()})},100)}function g(){try{let y=localStorage.getItem(s.QUOTA);if(!y)return t("Limit toast check: No quota in storage"),!1;let i=JSON.parse(y),l=new Date().toDateString();if(t("Limit toast check:",{quotaDate:i.date,today:l,limitReached:i.limitReached}),i.date===l&&i.limitReached){let c=localStorage.getItem(n);return t("Limit toast check: lastShown =",c),c===l?!1:(t("Limit toast check: Showing notification!"),localStorage.setItem(n,l),e.state&&(e.state.isLimitToastShowing=!0),setTimeout(()=>{d()},1e3),!0)}}catch(y){t("Limit toast check error:",y)}return!1}e.limitNotification={show:d,checkAndShow:g},t("Limit notification module initialized")})();(function(){let e=window.ChatGPTSpeedBooster,t=e.log||function(){},s=e.keys,n=e.userTypes,d="data-chatgpt-donation-badge";class g{constructor(){this.isVisible=!1,this.heartInterval=null,this.autoCloseTimeout=null,this.shownThisSession=!1}reset(){this.forceHide(),this.isVisible=!1}injectStyles(){let i="csb-donation-styles";if(document.getElementById(i))return;let l=document.createElement("style");l.id=i,l.textContent=`
        @keyframes floatHeart {
          0% { transform: translateY(20px) translateX(0) scale(0.6); opacity: 0; }
          20% { opacity: 0.8; transform: translateY(0) translateX(-4px) scale(0.8); }
          50% { transform: translateY(-20px) translateX(4px) scale(1); }
          80% { opacity: 0.6; }
          100% { transform: translateY(-50px) translateX(-2px) scale(1.1); opacity: 0; }
        }

        @keyframes heart-explode {
          0% { transform: translate(0, 0) scale(0.5) rotate(0); opacity: 1; }
          50% { opacity: 1; transform: translate(var(--tx), var(--ty)) scale(1.2) rotate(var(--rot)); }
          100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }

        @keyframes glow-pulse {
          0% { box-shadow: 0 8px 24px rgba(243, 156, 18, 0.4); }
          50% { box-shadow: 0 12px 32px rgba(243, 156, 18, 0.8); }
          100% { box-shadow: 0 8px 24px rgba(243, 156, 18, 0.4); }
        }

        .csb-heart-float {
          position: absolute;
          bottom: -15px;
          pointer-events: none;
          animation: floatHeart 3s ease-in-out forwards;
          opacity: 0;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
          z-index: 0;
        }

        .csb-donation-badge {
          display: flex;
          align-items: center;
          padding: 12px 16px 12px 14px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(135deg, #f1c40f, #e67e22);
          backdrop-filter: blur(8px);
          opacity: 0;
          transform: translateY(50px) scale(0.9);
          transition:
            opacity 400ms cubic-bezier(0.19, 1, 0.22, 1),
            transform 400ms cubic-bezier(0.19, 1, 0.22, 1),
            box-shadow 180ms ease-out,
            filter 180ms ease-out;
          overflow: hidden;
          cursor: pointer;
          z-index: 9999;
          animation: glow-pulse 3s infinite ease-in-out;
          max-width: 600px;
        }

        .csb-donation-badge:hover {
          transform: translateY(-2px) scale(1.02) !important;
          filter: brightness(1.1);
        }

        .csb-heart-particle {
          position: fixed;
          pointer-events: none;
          z-index: 10000;
          will-change: transform, opacity;
          animation: heart-explode var(--duration) cubic-bezier(0.25, 1, 0.5, 1) forwards;
          font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
          white-space: nowrap;
        }
      `,document.head.appendChild(l)}triggerHeartExplosion(i,l){let c=["\u2764\uFE0F","\u{1F496}","\u{1F37A}","\u{1F37A}","Thank You!","Thank You!"],m=document.createElement("div");Object.assign(m.style,{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:"10000"}),document.body.appendChild(m);for(let u=0;u<50;u++){let f=document.createElement("div");f.className="csb-heart-particle";let p=c[Math.floor(Math.random()*c.length)];f.textContent=p,p.length>2?(f.style.fontSize=`${Math.floor(Math.random()*4)+12}px`,f.style.fontWeight="bold",f.style.color="#ffffff",f.style.textShadow="0 1px 3px rgba(0,0,0,0.3)"):f.style.fontSize=`${Math.floor(Math.random()*14)+14}px`,f.style.left=i+"px",f.style.top=l+"px";let a=Math.random()*Math.PI*2,r=Math.random()*200+80,x=Math.cos(a)*r,o=Math.sin(a)*r,S=Math.random()*60-30;f.style.setProperty("--tx",`${x}px`),f.style.setProperty("--ty",`${o}px`),f.style.setProperty("--rot",`${S}deg`),f.style.setProperty("--duration",`${.6+Math.random()*.4}s`),m.appendChild(f)}setTimeout(()=>m.remove(),1e3)}show(i=null,l=null){this.isVisible||chrome.storage.local.get({[s.USER_STATUS]:null,[e.keys.SETTINGS]:{}},c=>{let h=c[s.USER_STATUS],m=c[e.keys.SETTINGS],u=h?.type;if(m&&m.disableNotifications){t("[DonationBadge] Skipping - notifications disabled by user preference.");return}if(u!==n.LEGACY){t("[DonationBadge] Skipping - not a legacy user (type: "+u+")");return}this._showBadge(i,l)})}_showBadge(i=null,l=null){let c=localStorage.getItem(s.DONATION_LAST_SHOWN),h=720*60*1e3;if(c&&Date.now()-parseInt(c,10)<h){t("[DonationBadge] Rate limited (shown recently). Skipping.");return}t("[DonationBadge] Showing nudge...");let m=i||"Loving my free extension? Support the development. <u>Buy me a beer!</u> \u{1F37B}",u=l||"High Five! \u270B Speed Booster is working!";localStorage.setItem(s.DONATION_LAST_SHOWN,Date.now().toString()),this.isVisible=!0,this.shownThisSession=!0,this.injectStyles();let f=document.createElement("div");f.className="csb-donation-badge",f.setAttribute(d,"1"),f.innerHTML=`
        <span style="font-size: 36px; margin-right: 12px; line-height: 1; position: relative; z-index: 2;">\u{1F37B}</span>
        <div style="display: flex; flex-direction: column; align-items: flex-start; position: relative; z-index: 2; flex: 1;">
          <span style="font-size: 16px; font-weight: 700; color: #ffffff; line-height: 1.4;">${u}</span>
          <span style="font-size: 16px; font-weight: 500; color: rgba(255,255,255,0.95); line-height: 1.4;">${m}</span>
        </div>
        <div class="close-btn" style="margin-left: 14px; cursor: pointer; opacity: 0.7; font-size: 16px; position: relative; z-index: 2; align-self: flex-start; padding: 2px 4px;">\u2715</div>
      `;let p=document.querySelector("#prompt-textarea"),a=p;if(p){let b=p.closest('[class*="bg-token-bg-primary"]')||p.closest("form");b&&(a=b)}let r={position:"fixed",left:"20px",bottom:"150px"};if(a){let b=a.getBoundingClientRect(),w=window.innerHeight-b.top+10;r={position:"fixed",left:`${b.left}px`,bottom:`${w}px`,top:"auto",right:"auto"}}Object.assign(f.style,r),f.addEventListener("click",b=>{if(b.target.closest(".close-btn"))return;b.preventDefault();let w=f.getBoundingClientRect();this.triggerHeartExplosion(w.left+w.width/2,w.top+w.height/2),this.hide(f),setTimeout(()=>window.open("https://ko-fi.com/bgsn48","_blank"),400)}),f.querySelector(".close-btn").addEventListener("click",b=>{b.stopPropagation(),b.preventDefault(),this.hide(f)});let o=(b=8e3)=>{this.autoCloseTimeout&&clearTimeout(this.autoCloseTimeout),this.autoCloseTimeout=setTimeout(()=>{document.body.contains(f)&&this.hide(f)},b)};f.addEventListener("mouseenter",()=>{this.autoCloseTimeout&&clearTimeout(this.autoCloseTimeout)}),f.addEventListener("mouseleave",()=>{o(5e3)});let S=()=>{if(!f.isConnected)return;let b=document.createElement("div");b.className="csb-heart-float",b.textContent="\u2764\uFE0F";let w=Math.floor(Math.random()*80)+10,E=Math.random()*1.5+2,T=Math.floor(Math.random()*6)+12;b.style.left=`${w}%`,b.style.fontSize=`${T}px`,b.style.animationDuration=`${E}s`,f.appendChild(b),setTimeout(()=>{b.isConnected&&b.remove()},E*1e3)};this.heartInterval=setInterval(S,800),S(),document.body.appendChild(f),requestAnimationFrame(()=>{f.style.opacity="1",f.style.transform="translateY(0) scale(1)"}),o()}hide(i){this.heartInterval&&clearInterval(this.heartInterval),this.autoCloseTimeout&&clearTimeout(this.autoCloseTimeout),i&&(i.style.opacity="0",i.style.transform="translateY(50px) scale(0.9)",setTimeout(()=>{i.isConnected&&i.remove()},250)),this.isVisible=!1}onActiveBadgeShown(){if(this.shownThisSession)return;let i=e.state,l=i?.stats?.totalMessages||0,c=i?.stats?.renderedMessages||0,h=Math.max(0,l-c),m=l>0?Math.round(h/l*100):0,u,f;l>0&&m>0?(u=`High Five! \u270B ${l} messages are now lag-free!`,f="Loving my free extension? Support the development. <u>Buy me a beer!</u> \u{1F37B}"):(u="High Five! \u270B Speed Booster is working!",f="Loving my free extension? Support the development. <u>Buy me a beer!</u> \u{1F37B}"),this.show(f,u)}forceHide(){let i=document.querySelector(`[${d}]`);i&&this.hide(i)}}e.DonationBadge=new g})();(function(){let e=window.ChatGPTSpeedBooster,t=e.log,s=e.keys,n=e.userTypes;function d(y="trial"){let i="Welcome to Speed Booster for ChatGPT!",l='With this extension active, long ChatGPT conversations will run up to <b style="color: #10b981;">10x faster</b>.',c="\u26A1 7-Day Unlimited Speed Preview Activated!",h="#10b981",m="",u="",f=`
        <!-- Privacy Section -->
        <div style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 12px 14px; margin: 0 0 16px 0; width: 100%; box-sizing: border-box;">
          <div style="display: flex; align-items: center; justify-content: flex-start; margin-bottom: 8px;">
            <span style="font-size: 13px; margin-right: 8px;">\u{1F512}</span>
            <span style="font-size: 11px; font-weight: 700; color: #10b981; text-transform: uppercase; letter-spacing: 0.5px;">100% Private</span>
          </div>
          <div style="text-align: left; font-size: 12px; color: rgba(255,255,255,0.8); line-height: 1.6;">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 2px;">\u2022 Runs entirely in your browser</div>
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 2px;">\u2022 Never collects any data</div>
            <div style="display: flex; align-items: center; gap: 6px;">\u2022 No tracking</div>
          </div>
        </div>
    `,p=!1;y==="legacy"&&(p=!0,i="Welcome to the Updated Version!",l=`As a thank you for being one of the first 10.000 users, you have been upgraded to <b style="color: #10b981;">the PRO version for FREE</b> on this device.<br><br>
              This means you will continue to enjoy <b style="color: #10b981;">unlimited speed boosts for free</b>.`,c="\u26A1 PRO Status Activated!",m=`
        <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 8px; padding: 10px 12px; margin: 0 auto 14px auto; max-width: 90%;">
          <div style="display: flex; align-items: start; justify-content: center; gap: 8px; text-align: center;">
            <span style="font-size: 14px;">\u26A0\uFE0F</span>
            <span style="font-size: 11px; color: rgba(255, 200, 200, 0.9); line-height: 1.4;">
              <b style="color: #fca5a5;">Important:</b> If you uninstall the extension, you will lose the free PRO status.
            </span>
          </div>
        </div>
      `,u="",f="");let a="";p?a=`
        <!-- Status / Closing Message -->
        <div style="font-size: 13px; font-weight: 600; color: #10b981; text-align: center; margin-bottom: 16px;">
          ${c}
        </div>
        
        <!-- Description -->
        <div style="font-size: 13px; color: rgba(255,255,255,0.85); line-height: 1.5; margin-bottom: 16px; padding: 0 10px;">
          ${l}
        </div>
        
        ${m}
      `:a=`
        <!-- Description -->
        <div style="font-size: 13px; color: rgba(255,255,255,0.85); line-height: 1.5; margin-bottom: 20px; padding: 0 4px; text-align: left; align-self: flex-start;">
          ${l}
        </div>
        
        ${f}
        
        <!-- Status / Closing Message (Bottom) -->
        <div style="font-size: 12px; font-weight: 600; color: #10b981; text-align: center; margin-bottom: 6px;">
          ${c}
        </div>
        <div style="font-size: 11px; color: rgba(255,255,255,0.5); text-align: center; margin-bottom: 16px;">
          Then 30 lag-free prompts per day \u2013 always free!
        </div>
      `;let r=`
      <div style="display: flex; flex-direction: column; width: 100%; align-items: center; text-align: center;">
        <!-- Notification Branding -->
        <div style="font-size: 10px; color: rgba(255,255,255,0.4); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 15px; align-self: center;">Speed Booster for ChatGPT</div>

        <!-- Header with Icon -->
        <div style="display: flex; align-items: center; justify-content: flex-start; margin-bottom: 16px; width: 100%;">
          <div style="
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: linear-gradient(135deg, ${h}, #059669);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 12px;
            flex-shrink: 0;
            box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
          ">
            <span style="font-size: 16px; line-height: 1;">\u26A1</span>
          </div>
          <div style="display: flex; flex-direction: column; text-align: left;">
            <span style="font-size: 14px; font-weight: 700; color: #fff; line-height: 1.3;">${i}</span>
          </div>
        </div>

        ${a}
        
        <!-- Understood Button -->
        <button class="close-btn" style="
          display: block;
          width: 100%;
          margin: 0 auto;
          padding: 12px 16px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        ">Let's Go!</button>

        ${u}
      </div>
    `,x=e.toast.show("",{html:r,sticky:!0,top:"60px"});if(x){let o=x.querySelector(".close-btn");o&&o.addEventListener("click",()=>{localStorage.setItem(s.WELCOME_SHOWN,"true"),t("Welcome notification dismissed by user -> Marked as SHOWN")})}t("Welcome notification shown")}async function g(){try{let y="trial";if(e.userStatus){let l=await e.userStatus.getUserStatus();l?.type&&(y=l.type)}return localStorage.getItem(s.WELCOME_SHOWN)?!1:y==="pro"?(localStorage.setItem(s.WELCOME_SHOWN,"true"),!1):(setTimeout(()=>{d(y)},2e3),!0)}catch{return!1}}e.welcomeNotification={show:d,checkAndShow:g},t("Welcome notification module initialized")})();(function(){let e=window.ChatGPTSpeedBooster,t=e.state,s=e.log,n="data-chatgpt-speed-booster-badge",d="data-chatgpt-speed-booster-refresh-badge",g=e.keys,y=e.userTypes;function i(a,r,x,o,S,b=0,w="green",E=null,T=!1){let I=document.querySelector(`[${o}]`);I&&I.remove();let _=document.createElement("div");_.setAttribute(o,"1");let L={green:{iconBg:"linear-gradient(135deg, #10b981, #059669)",badgeBg:"linear-gradient(135deg, #1e3a2f, #1a2e25)",border:"1px solid rgba(16, 185, 129, 0.3)"},red:{iconBg:"linear-gradient(135deg, #ef4444, #dc2626)",badgeBg:"linear-gradient(135deg, #3a1e1e, #2e1a1a)",border:"1px solid rgba(239, 68, 68, 0.3)"},orange:{iconBg:"linear-gradient(135deg, #f59e0b, #d97706)",badgeBg:"linear-gradient(135deg, #451a03, #2a1205)",border:"1px solid rgba(245, 158, 11, 0.3)"}},R=L[w]||L.green,D=S===0,M=D||T,A=M?'<span class="close-btn" style="margin-left: 10px; cursor: pointer; font-size: 18px; opacity: 0.6; color: white;">\xD7</span>':"";_.innerHTML=`
      <div style="
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: ${R.iconBg};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        flex-shrink: 0;
      ">
        <span style="font-size: 15px; line-height: 1;">${x}</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: flex-start;">
        <span style="font-size: 13px; font-weight: 600; color: #ffffff; line-height: 1.3;">${a}</span>
        <span style="font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.7); line-height: 1.3;">${r}</span>
      </div>
      ${A}
    `;let F={position:"fixed",top:`${60+b}px`,right:"20px",bottom:"auto",left:"auto"};Object.assign(_.style,{...F,zIndex:"9999",display:"flex",alignItems:"center",padding:"10px 17px 10px 12px",borderRadius:"10px",background:R.badgeBg,border:R.border,boxShadow:"0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.05) inset",pointerEvents:"auto",opacity:"0",transform:"translateY(-10px) scale(0.95)",transition:"opacity 300ms ease-out, transform 300ms ease-out",width:"fit-content",height:"auto",maxWidth:"310px"}),document.body.appendChild(_),requestAnimationFrame(()=>{_.style.opacity="1",_.style.transform="translateY(0) scale(1)"});let U=()=>{_.style.opacity="0",_.style.transform="translateY(-10px) scale(0.95)",setTimeout(()=>{_.isConnected&&_.remove(),E&&E()},300)};if(M){let P=_.querySelector(".close-btn");P&&P.addEventListener("click",B=>{B.stopPropagation(),U()})}return D||setTimeout(U,S),_}function l(){let a=i("Speed Booster for ChatGPT active","This chat is now running faster.","\u26A1",n,2e3,0,"green",null,!0);return e.DonationBadge&&setTimeout(()=>e.DonationBadge.onActiveBadgeShown(),100),a}function c(){if(t.isLimitToastShowing){s("Suppressing disabled badge because big limit toast is showing");return}let a=e.links.FREEMIUS;return i("Speed Booster for ChatGPT Paused Until Tomorrow",`Daily free fast prompt limit (30) reached.<br><a href="${a}" target="_blank" style="color: #60a5fa; font-weight: 700; text-decoration: none; cursor: pointer;">Go unlimited for $7.99 (one-time)</a>`,"\u26A0",n,3e3,0,"orange",null,!0)}function h(){i("Page Refreshed","ChatGPT performance restored","\u2713",d,6e3,70),s("Showing refresh badge")}function m(){try{sessionStorage.getItem(g.AUTO_REFRESH)==="true"&&(sessionStorage.removeItem(g.AUTO_REFRESH),setTimeout(()=>{h()},1500))}catch{}}function u(){try{sessionStorage.setItem(g.AUTO_REFRESH,"true")}catch{}}function f(){t.hasShownBadgeForCurrentChat=!1;let a=document.querySelector(`[${n}]`);a&&a.remove();let r=document.querySelector(`[${d}]`);r&&r.remove()}async function p(){if(!t.hasShownBadgeForCurrentChat){if(t.disableNotifications){s("Suppressing active badge: User disabled notifications");return}try{if((e.userStatus?await e.userStatus.getUserStatus():null)?.type===y.FREE){let x=localStorage.getItem(g.QUOTA);if(x){let o=JSON.parse(x),S=new Date().toDateString();if(o.date===S&&o.limitReached){t.hasShownBadgeForCurrentChat=!0,c();return}}}}catch{}t.enabled&&(t.hasShownBadgeForCurrentChat=!0,l())}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",m):m(),e.activeBadge={show:l,showOnce:p,showDisabled:c,reset:f,showRefresh:h,markForRefresh:u}})();(function(){let e=window.ChatGPTSpeedBooster,t=e.log;async function s(n={}){let{onGranted:d}=n;if(document.getElementById("csb-permission-notification"))return;if(!e.toast){t("Toast module not ready for permission notification");return}e.toast.show("",{html:`
      <div id="csb-permission-notification" style="display: flex; flex-direction: column; width: 100%; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <div style="display: flex; align-items: flex-start; width: 100%;">
            <!-- Icon -->
            <div style="
              width: 42px;
              height: 42px;
              border-radius: 12px;
              background: linear-gradient(135deg, #f59e0b, #d97706);
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 14px;
              flex-shrink: 0;
              box-shadow: 0 4px 12px rgba(217, 119, 6, 0.3);
              border: 1px solid rgba(255,255,255,0.1);
            ">
              <span style="font-size: 20px; line-height: 1; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));">\u26A0\uFE0F</span>
            </div>

            <!-- Content -->
            <div style="display: flex; flex-direction: column; flex: 1;">
              <!-- Small Title -->
              <div style="font-size: 10px; color: rgba(255,255,255,0.5); font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 8px;">Speed Booster for ChatGPT</div>

              <span style="font-size: 14px; font-weight: 700; color: #ffffff; line-height: 1.3; margin-bottom: 4px;">One-time Permission Required</span>
              <span style="font-size: 13px; font-weight: 400; color: rgba(255,255,255,0.9); line-height: 1.5; margin-bottom: 6px;">
                To verify your license, Speed Booster needs to connect to <strong>Freemius</strong> \u2014 the license verification platform used to manage your purchase.
              </span>
              <span style="font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.6); line-height: 1.5; margin-bottom: 12px;">
                \u{1F512} No chat data or personal data is ever sent. Only your license key is used for verification. When you click the button below, your browser will ask you to confirm this permission.
              </span>

              <button id="csb-grant-permission-btn" style="
                  background: #f59e0b;
                  color: white;
                  border: none;
                  padding: 8px 16px;
                  border-radius: 6px;
                  font-size: 12px;
                  font-weight: 600;
                  cursor: pointer;
                  transition: all 0.2s;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  gap: 6px;
                  width: 100%;
                  text-align: center;
                ">
                  Allow Connection \u2192
                </button>
            </div>
        </div>
      </div>
    `,sticky:!0,top:"20px"}),setTimeout(()=>{let y=document.getElementById("csb-grant-permission-btn");y&&y.addEventListener("click",()=>{y.textContent="Allowing...",y.disabled=!0,chrome.runtime.sendMessage({type:"REQUEST_PERMISSION"},i=>{i?.granted?(document.getElementById("csb-toast")?.remove(),d&&d()):(y.textContent="Permission Denied",setTimeout(()=>{y.textContent="Allow Connection \u2192",y.disabled=!1},2e3))})})},100)}e.permissionNotification={show:s},t("Permission notification module initialized")})();(function(){let e=window.ChatGPTSpeedBooster,t=e.log,s=e.keys,n=e.userTypes,d={WELCOME:"WELCOME",LIMIT:"LIMIT",TRIAL:"TRIAL",QUOTA:"QUOTA",ACTIVE_BADGE:"ACTIVE_BADGE",DISABLED_BADGE:"DISABLED_BADGE",NONE:"NONE"};async function g(y){let{userStatus:i,stats:l}=y;if(!i)return d.NONE;let c=new Date().toDateString();if(e.welcomeNotification&&!localStorage.getItem(s.WELCOME_SHOWN))return d.WELCOME;if(i.type===n.FREE){let h=localStorage.getItem(s.QUOTA);if(h)try{let m=JSON.parse(h),u=localStorage.getItem(s.LIMIT_SHOWN_DATE);if(m.date===c&&m.limitReached&&u!==c)return d.LIMIT}catch{}}if(i.type===n.TRIAL){let h=await e.userStatus.getTrialDay(),m=[6,7],u=localStorage.getItem(s.TOAST_DATE);if(h&&m.includes(h)&&u!==c)return d.TRIAL}if(i.type===n.FREE&&l&&l.absoluteMessages>=30&&localStorage.getItem(s.QUOTA_SHOWN_DATE)!==c)return d.QUOTA;if(i.type===n.FREE){let h=localStorage.getItem(s.QUOTA);if(h){let m=JSON.parse(h);if(m.date===c&&m.limitReached)return d.DISABLED_BADGE}}return d.ACTIVE_BADGE}e.notificationStrategy={determineNotificationType:g,TYPES:d,handleError:function(y){(typeof y=="string"?y:y.message||"").includes("PERMISSION_REQUIRED")&&e.permissionNotification&&e.permissionNotification.show()}},t("Notification strategy initialized")})();(function(){let e=window.ChatGPTSpeedBooster,t=e.state,s=e.log,n=null,d=null,g=0,y=!1,i=null;function l(){return document.querySelectorAll('article[data-testid^="conversation-turn-"]').length}function c(){if(!t.enabled)return;let a=l();if(a===0)return;if(d===null){d=a,g=a;return}if(a<=g)return;try{let o=JSON.parse(localStorage.getItem("csb_quota"));if(o&&o.limitReached)return}catch{}g=a;let r=a-d,x=t.messageLimit||15;if(t.stats){let o=a-d;t.stats.renderedMessages=a,t.stats.initialTotalMessages?t.stats.totalMessages=t.stats.initialTotalMessages+o:t.stats.totalMessages=Math.max(t.stats.totalMessages||0,a)}r>=x&&!y&&(y=!0,s("Performance warning triggered!"),f({turnsSinceRefresh:r,limit:x}))}function h(){i&&clearTimeout(i),i=setTimeout(()=>{c()},2e3)}function m(){n&&n.disconnect();let a=document.querySelector("main")||document.body;n=new MutationObserver(r=>{r.some(o=>{if(o.type!=="childList"||o.addedNodes.length===0)return!1;for(let S of o.addedNodes)if(S.nodeType===Node.ELEMENT_NODE&&(S.tagName==="ARTICLE"||S.querySelector?.("article")))return!0;return!1})&&h()}),n.observe(a,{childList:!0,subtree:!0}),s("Message watcher started"),setTimeout(()=>{if(d===null){let r=l();r>0&&(d=r,g=r,s("Initial message baseline set:",d))}},2e3)}function u(){d=null,g=0,y=!1,i&&(clearTimeout(i),i=null),s("Message watcher state reset")}function f(a){if(document.getElementById("csb-performance-warning-badge"))return;let x=document.createElement("div");x.id="csb-performance-warning-badge";let o={position:"fixed",top:"60px",right:"20px"},S=a?.turnsSinceRefresh||"many";x.innerHTML=`
      <div style="display: flex; flex-direction: column; width: 100%; position: relative;">
        <!-- Close Button (top right) -->
        <span class="close-btn" style="position: absolute; top: 0; right: 0; cursor: pointer; font-size: 18px; opacity: 0.5; color: white; padding: 2px 6px; line-height: 1;">\xD7</span>
        
        <!-- Notification Title -->
        <div style="font-size: 10px; color: rgba(255,255,255,0.4); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px;">Speed Booster for ChatGPT</div>
        
        <!-- Header with icon -->
        <div style="display: flex; align-items: center; margin-bottom: 8px;">
          <div style="
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: linear-gradient(135deg, #3b82f6, #1d4ed8);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            flex-shrink: 0;
          ">
            <span style="font-size: 16px; font-weight: bold; line-height: 1; color: #ffffff;">!</span>
          </div>
          <span style="font-size: 14px; font-weight: 700; color: #fff;">Performance Notice</span>
        </div>
        
        <!-- Description -->
        <div style="font-size: 12px; color: #cbd5e1; line-height: 1.4;">
          ${S} new messages added. If performance slows, refresh page to restore speed.
        </div>
      </div>
    `,Object.assign(x.style,{...o,zIndex:"9999",display:"flex",alignItems:"center",padding:"10px 14px 10px 12px",borderRadius:"10px",background:"linear-gradient(135deg, #1e2a3a, #1a2433)",border:"1px solid rgba(59, 130, 246, 0.3)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.05) inset",opacity:"0",transform:"translateY(10px) scale(0.95)",transition:"opacity 300ms ease-out, transform 300ms ease-out",width:"fit-content",height:"auto",maxWidth:"420px"}),document.body.appendChild(x),requestAnimationFrame(()=>{x.style.opacity="1",x.style.transform="translateY(0) scale(1)"});let b=()=>{x.style.opacity="0",x.style.transform="translateY(10px) scale(0.95)",setTimeout(()=>x.remove(),300)},w=x.querySelector(".close-btn");w&&(w.addEventListener("mouseenter",()=>{w.style.opacity="1"}),w.addEventListener("mouseleave",()=>{w.style.opacity="0.6"}),w.addEventListener("click",E=>{E.stopPropagation(),b()})),s("Performance warning badge shown"),setTimeout(b,7e3)}function p(){n&&n.disconnect(),i&&clearTimeout(i)}e.performanceWarning={start:m,reset:u,show:f,cleanup:p}})();(function(){let e=window.ChatGPTSpeedBooster,t=e.state,s=e.log,n=e.dom,d="data-csb-navigation",g=null,y=!1;function i(){let a=t.messageLimit||15;if(t.stats&&t.stats.totalMessages>0&&t.stats.renderedMessages>0){let r=Math.max(0,t.stats.totalMessages-t.stats.renderedMessages);if(r>0&&r<a)return r}return a}function l(a){if(!n||!n.createElement)return s("Error: booster.dom.createElement not available"),null;let r=i(),x=n.createElement("button",{styles:{flexDirection:"column",display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"8px 16px",borderRadius:"6px",fontSize:"13px",fontWeight:"400",color:"#ececf1",background:"#343541",border:"1px solid #565869",boxShadow:"0 1px 2px rgba(0,0,0,0.1)",cursor:"pointer",transition:"background 150ms ease",fontFamily:"inherit"},attributes:{type:"button"},children:[n.generateButtonHtml(r)],listeners:{click:S=>{S.preventDefault(),S.stopPropagation(),a()},mouseenter:S=>S.target.closest("button").style.background="#40414f",mouseleave:S=>S.target.closest("button").style.background="#343541"}});return n.createElement("div",{styles:{display:"flex",justifyContent:"center",padding:"20px 0",marginBottom:"10px"},attributes:{[d]:"top"},children:[x]})}function c(){if(n&&n.findMessagesContainer)return n.findMessagesContainer();let a=document.querySelector('article[data-testid^="conversation-turn-"]');return a?a.parentElement:null}function h(){if(g&&g.isConnected){let a=g.querySelector("button");if(a&&n&&n.generateButtonHtml){let r=i();a.innerHTML=n.generateButtonHtml(r)}}}function m(){g&&g.isConnected&&g.remove(),g=null,y=!1}function u(a,r=0){if(y&&g&&g.isConnected)return;let x=c();if(!x){r<10&&setTimeout(()=>u(a,r+1),500);return}document.querySelectorAll(`[${d}]`).forEach(o=>o.remove()),g=l(a),g&&(x.insertBefore(g,x.firstChild),y=!0,s("Load more button inserted successfully"))}function f(){y=!1,g=null}function p(){return y&&g&&g.isConnected}e.loadMoreButton={insert:u,remove:m,updateText:h,isInserted:p,reset:f,getMessagesContainer:c}})();(function(){let e=window.ChatGPTSpeedBooster,t=e.state,s=e.log,n=e.config,d=e.keys,g=null;function y(){s("Initializing Speed Booster for ChatGPT"),t.isNavigating=sessionStorage.getItem(d.NAVIGATING)==="true",t.isUserStatusInitialized=!1,t.hasLoadedMessages=!1,c(),h(),u(),p(),e.messageService.initialize(),e.paymentService&&e.paymentService.checkForActivation();try{let o=localStorage.getItem(d.QUOTA);if(o){let S=JSON.parse(o),b=new Date().toDateString();S&&S.date===b?(t.stats.quota=S,s("Loaded initial quota from storage:",t.stats.quota)):s("Ignoring stale quota from previous date:",S?.date)}}catch{}setTimeout(()=>{e.performanceWarning.start()},3e3),setTimeout(()=>{try{sessionStorage.getItem(d.PERMISSION_ERROR)==="true"&&(e.notificationStrategy&&e.notificationStrategy.handleError&&e.notificationStrategy.handleError("PERMISSION_REQUIRED"),sessionStorage.removeItem(d.PERMISSION_ERROR))}catch{}i()},500)}function i(){try{let o=sessionStorage.getItem(d.LAST_STATUS);if(!o)return;let S=JSON.parse(o);if(!S||S.url!==window.location.href)return;if(t.stats.totalMessages=S.totalMessages||0,t.stats.absoluteMessages=S.absoluteMessages||S.totalMessages*2||0,t.stats.renderedMessages=S.renderedMessages||0,S.quota){let b=new Date().toDateString();S.quota.date===b?t.stats.quota=S.quota:s("Ignoring stored session quota from previous date:",S.quota.date)}else t.stats.quota;s("Stats loaded from sessionStorage backup:",t.stats),!t.hasShownInitialToast&&t.stats.absoluteMessages>=30&&t.stats.quota&&!t.isNavigating&&e.quotaNotification&&(t.hasShownInitialToast=!0,e.quotaNotification.checkInitial(t.stats.quota)),e.navigationService&&e.navigationService.updateButtonText&&e.navigationService.updateButtonText()}catch{}}async function l(o,S=null){try{!S&&e.userStatus&&(S=await e.userStatus.getUserStatus());let b={enabled:o.enabled??!0,messageLimit:o.messageLimit??10,debug:o.debug??!1,userStatus:S};localStorage.setItem(d.CONFIG,JSON.stringify(b)),window.dispatchEvent(new CustomEvent("csb-config",{detail:JSON.stringify(b)}))}catch(b){s("Error syncing settings to localStorage:",b)}}function c(){chrome.storage.local.get({[d.SETTINGS]:{enabled:!0,messageLimit:15,debug:!1}},async o=>{let S=o[d.SETTINGS];t.enabled=S.enabled,t.debug=S.debug,t.messageLimit=S.messageLimit,t.disableNotifications=S.disableNotifications;let b=null;e.userStatus&&(b=await e.userStatus.getUserStatus()),l(S,b),t.isUserStatusInitialized=!0,a(),r(),e.navigationService&&e.navigationService.updateButtonText&&e.navigationService.updateButtonText()}),chrome.storage.onChanged.addListener((o,S)=>{if(S==="local"&&o[d.SETTINGS]){let b=o[d.SETTINGS].newValue;t.enabled=b.enabled,t.debug=b.debug,t.messageLimit=b.messageLimit,t.disableNotifications=b.disableNotifications,l(b),s("Settings changed:",b),e.navigationService&&e.navigationService.updateButtonText&&e.navigationService.updateButtonText()}})}function h(){window.addEventListener("message",o=>{o.data&&o.data.type==="CSB_SHOW_PERMISSION_ERROR"&&e.notificationStrategy&&e.notificationStrategy.handleError&&e.notificationStrategy.handleError("PERMISSION_REQUIRED")}),e.messageService.onStatus(m),e.messageService.onPerformanceWarning(o=>{e.performanceWarning.show(o)}),e.messageService.onStatusUpdate(o=>{let S=[6,7];if(o.trialDay&&e.trialNotification&&S.includes(o.trialDay)){let b=new Date().toDateString();localStorage.getItem(e.keys.TOAST_DATE)!==b&&e.trialNotification.show(o.trialDay)}}),e.messageService.onPopupGetStats(()=>({totalMessages:t.stats.totalMessages,renderedMessages:t.stats.renderedMessages,quota:t.stats.quota,enabled:t.enabled})),e.messageService.onPopupSyncSettings(o=>{l(o)})}async function m(o){!o||typeof o!="object"||(o.totalMessages!==void 0&&o.totalMessages>0&&(t.hasLoadedMessages=!0),o.forceUIUpdate&&(s("Forced UI Update (New Day). Resetting notification gates."),t.hasInitializedNotifications=!1,e.activeBadge&&e.activeBadge.reset()),t.stats.totalMessages=o.totalMessages||0,t.stats.absoluteMessages=o.absoluteMessages||o.totalMessages*2||0,t.stats.renderedMessages=o.renderedMessages||0,t.stats.quota=o.quota||null,t.stats.quota&&t.stats.quota.count>0&&e.quotaNotification&&e.quotaNotification.checkMilestone(t.stats.quota),t.stats.quota&&t.stats.quota.limitReached&&a({force:!0}),!t.hasShownInitialToast&&t.stats.absoluteMessages>=30&&t.stats.quota&&!t.isNavigating&&e.quotaNotification&&(t.hasShownInitialToast=!0,e.quotaNotification.checkInitial(t.stats.quota)),t.stats.initialTotalMessages||(t.stats.initialTotalMessages=o.totalMessages||0),e.navigationService&&e.navigationService.updateButtonText&&e.navigationService.updateButtonText(),a())}function u(){t.urlWatcherInterval&&clearInterval(t.urlWatcherInterval),t.urlWatcherInterval=setInterval(()=>{window.location.href!==t.lastUrl&&f()},n.URL_CHECK_INTERVAL)}function f(){t.lastUrl=window.location.href,s("URL changed \u2192 resetting for new chat"),t.hasInitializedNotifications=!1,e.activeBadge.reset(),e.DonationBadge&&e.DonationBadge.reset(),t.stats={totalMessages:0,renderedMessages:0,initialTotalMessages:null,quota:t.stats.quota},t.hasLoadedMessages=!1,e.navigationService&&(e.navigationService.reset?e.navigationService.reset():e.navigationService.clearExtraMessages&&e.navigationService.clearExtraMessages()),t.hasShownInitialToast=!1;try{sessionStorage.removeItem(d.NAVIGATING),sessionStorage.removeItem(d.NAV_ACK)}catch{}e.performanceWarning.reset(),setTimeout(()=>{e.performanceWarning.start()},2e3),t.enabled&&setTimeout(()=>{e.activeBadge.showOnce()},1500)}function p(){document.addEventListener("click",o=>{let S=o.target.closest('a[href*="/c/"]');if(!o.target.closest("button, [role='button']")&&S&&S.href){let b=window.location.pathname,w=new URL(S.href).pathname;w!==b&&w.startsWith("/c/")&&(o.preventDefault(),o.stopPropagation(),localStorage.removeItem(d.EXTRA_MESSAGES),sessionStorage.removeItem(d.LAST_STATUS),sessionStorage.removeItem(d.NAVIGATING),sessionStorage.removeItem(d.NAV_ACK),s("Intercepted chat link click, forcing full navigation to:",w),window.location.href=S.href)}},!0),s("Chat link interceptor set up")}async function a(o={}){if(t.hasInitializedNotifications&&!o.force)return;if(!t.isUserStatusInitialized){s("Notification Strategy deferred: Waiting for User Status initialization.");return}if(!t.hasLoadedMessages){s("Notification Strategy deferred: Waiting for Message Load.");return}if(t.isNavigating){s("Notification Strategy deferred: Navigation in progress.");return}t.hasInitializedNotifications=!0,s("All gates passed. Executing Notification Strategy...");let S={userStatus:e.userStatus?await e.userStatus.getUserStatus():null,stats:t.stats,storage:localStorage},b=await e.notificationStrategy.determineNotificationType(S);switch(s("Notification Strategy selected:",b),b){case"WELCOME":if(e.welcomeNotification){let w=S.userStatus?S.userStatus.type:"trial";e.welcomeNotification.show(w)}break;case"LIMIT":e.limitNotification&&e.limitNotification.show();break;case"TRIAL":if(e.trialNotification){let w=await e.userStatus.getTrialDay();e.trialNotification.show(w)}break;case"QUOTA":e.quotaNotification&&e.quotaNotification.show(t.stats.quota.count);break;case"DISABLED_BADGE":e.activeBadge&&e.activeBadge.showDisabled();break;case"ACTIVE_BADGE":e.activeBadge&&e.activeBadge.showOnce();break}}function r(){t.debug&&(g||(e.logPromoMessage(),g=setInterval(()=>{e.logPromoMessage()},5*6e4)))}function x(){g&&(clearInterval(g),g=null)}window.debugMilestoneToast=(o=30)=>{e.quotaNotification&&(e.quotaNotification.show(o,30),e.log("Debug toast triggered for count:",o))},window.debugTrialToast=(o=5)=>{e.trialNotification&&(e.trialNotification.show(o),e.log("Debug trial toast triggered for day:",o))},window.debugWelcomeToast=(o="trial")=>{e.welcomeNotification&&(e.welcomeNotification.show(o),e.log("Debug welcome toast triggered for type:",o))},window.addEventListener("beforeunload",()=>{x(),t.urlWatcherInterval&&clearInterval(t.urlWatcherInterval),e.performanceWarning.cleanup()}),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",y):y()})();})();
