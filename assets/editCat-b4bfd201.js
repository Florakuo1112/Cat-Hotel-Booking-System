import{a as B,_ as y,S as h}from"./sweetalert2.all-9f571157.js";import{i as D}from"./navbar-a9a887c0.js";import"./aside-d7219df7.js";import{f as C}from"./index-a4e39586.js";const k=document.querySelectorAll("#catData");k.forEach(t=>{t.classList.add("onThisPage")});const F=document.querySelector("#navAside");F.classList.remove("d-none");C("#catBirthday",{enableTime:!1,dateFormat:"Y-m-d"});const L=JSON.parse(localStorage.getItem("userTokenAndData")),{accessToken:f,user:E}=L,I=JSON.parse(localStorage.getItem("catEditId")),N=document.getElementById("editCatFrom"),A=document.getElementById("myCatFile");document.getElementById("catlDelete");const s={};console.log(s);function W(){B.get(`${y}/600/cats/${I}`,{headers:{authorization:`Bearer ${f}`}}).then(t=>{const{catName:e,catBreeds:a,colors:c,gender:o,birthday:n,weight:l,userId:g,catPhoto:m}=t.data;console.log(n);const i=document.getElementById("catName"),r=document.getElementById("catMale"),u=document.getElementById("catFemale"),d=document.getElementById("catOther"),v=document.getElementById("catBirthday"),b=document.getElementById("catBreeds"),p=document.getElementById("catColors"),w=document.getElementById("catWeight"),S=document.getElementById("catPhoto");i.value=e,function(){o==="male"?r.checked=!0:o==="female"?u.checked=!0:o==="other"&&(d.checked=!0)}(),v.value=n,b.value=a,p.value=c,w.value=l,S.setAttribute("src",m),document.querySelector("#loading").classList.toggle("d-none")}).catch(t=>{console.log(t),alert(t),window.location.href="./login.html"})}W();function O(t){E.id,B.patch(`${y}/600/cats/${I}`,t,{headers:{authorization:`Bearer ${f}`}}).then(e=>{console.log(e),h.mixin({customClass:{confirmButton:"btn btn-custom-confirm",cancelButton:"btn btn-custom-cancel"},buttonsStyling:!1}).fire({title:"編輯貓咪成功",icon:"success",confirmButtonText:"確定"}).then(c=>{window.location.href="./catData.html"})}).catch(e=>{console.log(e),h.mixin({customClass:{confirmButton:"btn btn-custom-confirm",cancelButton:"btn btn-custom-cancel"},buttonsStyling:!1}).fire({title:"編輯貓咪失敗",text:"請重新登入後再嘗試",confirmButtonText:"確定"}).then(c=>{window.location.href="./login.html"})})}N.addEventListener("submit",t=>{t.preventDefault(),D(),document.querySelector("#editCat").classList.toggle("d-none"),document.querySelector("#loading").classList.toggle("d-none");const c=document.getElementById("catName"),o=document.getElementById("catMale"),n=document.getElementById("catFemale"),l=document.getElementById("catOther"),g=document.getElementById("catBirthday"),m=document.getElementById("catBreeds"),i=document.getElementById("catColors"),r=document.getElementById("catWeight");let u=()=>o.checked?o.value:n.checked?n.value:l.checked?l.value:"Not Specified",d={catName:c.value,catBreeds:m.value,colors:i.value,gender:u(),birthday:g.value,weight:r.value,catPhoto:s.base64Image,userId:E.id};console.log(d),O(d)});cancelEdit.addEventListener("click",t=>{t.preventDefault();const e=cancelEdit.getAttribute("href");D(e)});A.addEventListener("change",t=>{const e=t.target.files[0],a=new FileReader;a.onload=c=>{const o=c.target.result;s.base64Image=o,s.fileName=e.name;const n=document.getElementById("catPhoto");n.src=s.base64Image},a.readAsDataURL(e),console.dir(s)});
