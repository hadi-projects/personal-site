import{d as l,r as p,u,o as d,c as t,a,b as m,F as _,e as y,f as g,g as o,h as f,i as k,_ as w}from"./index-k5MWaQ9J.js";import{C}from"./CardComponent2-BSDBowF1.js";const n="/personal-site/assets/tennet-BDvGIurR.png",D="/personal-site/assets/freelance-Cn5jsn8H.png",v={key:0},I={key:1,class:"cards"},b=l({__name:"ExperienceView",setup(B){console.log("sekali");const s=p([{title:"Lead Developer",date:"Juny 2024 - Now",company:"Tennet Depository Indonesia",company_logo:n,route:"lead"},{title:"Backend Developer",company:"Tennet Depository Indonesia",date:"January 2024 - Juny 2024",company_logo:n,route:"backend"},{title:"IT Development",company:"Tennet Depository Indonesia",date:"Juny 2024 - Now",company_logo:n,route:"itdev"},{title:"Fullstack Engineer",date:"Octiber 2022 - Juny 2024",company:"Tennet Depository Indonesia",company_logo:n,route:"fullstack"},{company:"Freelance",title:"Software Engineer",date:"Octiber 2022 - Juny 2024",company_logo:D,route:"software"}]),r=u();return d(()=>{console.log("Component is about to be unmounted")}),(E,J)=>{const c=g("RouterView");return o(),t("div",null,[a(r).current_porto!=""?(o(),t("div",v,[m(c)])):(o(),t("div",I,[(o(!0),t(_,null,y(s,(e,i)=>(o(),f(C,{route:e.route,key:i,description:e.company,title:e.title,img:e.company_logo,onclick:()=>{a(r).current_porto=e.route,a(k).push({name:e.route})}},null,8,["route","description","title","img","onclick"]))),128))]))])}}}),T=w(b,[["__scopeId","data-v-ae4ace37"]]);export{T as default};
