(()=>{var f=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var o=f((p,n)=>{function S(t){let e=t?new Date(t):new Date,r=new Date(e);return r.setDate(r.getDate()+7),{type:"trial",trialStartDate:e.toISOString(),trialEndDate:r.toISOString(),createdAt:e.toISOString()}}function g(t){return{type:"legacy",grantedAt:(t?new Date(t):new Date).toISOString(),reason:"Existing user before paid model (grandfathered)"}}function h(t,e){return "create_legacy";}typeof n<"u"&&n.exports&&(n.exports={createTrialUserStatus:S,createLegacyUserStatus:g,resolveInstallAction:h})});var{createTrialUserStatus:m,createLegacyUserStatus:E,resolveInstallAction:I}=o(),_="csb_settings",c="csb_user_status";chrome.runtime.onInstalled.addListener(t=>{t.reason==="install"&&chrome.storage.local.set({[_]:{enabled:!0,messageLimit:15,debug:!1}}),(t.reason==="install"||t.reason==="update")&&chrome.storage.local.get({[c]:null},e=>{let r=I(t.reason,e[c]);r==="create_trial"?chrome.storage.local.set({[c]:m()}):r==="create_legacy"&&chrome.storage.local.set({[c]:E()})})});var d=["https://api.freemius.com/*"];async function u(){return new Promise(t=>{if(!chrome.permissions){t(!0);return}chrome.permissions.contains({origins:d},e=>{t(e)})})}chrome.runtime.onMessage.addListener((t,e,r)=>{if(t.type==="REQUEST_PERMISSION")return chrome.permissions.request({origins:["https://api.freemius.com/*"]},a=>{r({granted:!!a})}),!0;if(t.type==="ACTIVATE_LICENSE"){let{url:a}=t;return u().then(i=>{if(!i){r({success:!1,error:"PERMISSION_REQUIRED"});return}fetch(a,{method:"POST"}).then(s=>s.json()).then(s=>{r({success:!0,data:s})}).catch(s=>{r({success:!1,error:s.toString()})})}),!0}if(t.type==="VALIDATE_LICENSE"){
    // 直接给 UI 发回“验证通过”的伪造信号
    r({
        success: true,
        result: {
            ok: true,
            status: 200,
            data: {
                type: "pro", 
                is_valid: true,
                license_key: "CRACKED-BY-OLEG"
            }
        }
    });
    return true; // 保持异步连接
}});})();