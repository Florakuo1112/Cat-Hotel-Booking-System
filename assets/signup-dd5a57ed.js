import{a as B,_ as h,S as m}from"./sweetalert2.all-9f571157.js";import"./navbar-a9a887c0.js";import{f}from"./index-a4e39586.js";f("#birthday",{enableTime:!1,dateFormat:"Y-m-d"});const i=document.querySelector("#signupAll");i.classList.toggle("d-none");const u=document.querySelector("#signupTitle");u.classList.toggle("d-none");const d=document.querySelector("#loading");d.classList.toggle("d-none");const y=document.getElementById("signupForm");document.getElementById("loginBtn");function b(e){B.post(`${h}/signup`,e).then(t=>{console.log(t),m.mixin({customClass:{confirmButton:"btn btn-custom-confirm",cancelButton:"btn btn-custom-cancel"},buttonsStyling:!1}).fire({title:"註冊成功",icon:"success",confirmButtonText:"確定"}).then(o=>{window.location.href="./login.html"})}).catch(t=>{console.log(t),m.mixin({customClass:{confirmButton:"btn btn-custom-confirm",cancelButton:"btn btn-custom-cancel"},buttonsStyling:!1}).fire({title:"註冊失敗",text:t.response.data,icon:"error",confirmButtonText:"確定"}).then(o=>{i.classList.toggle("d-none"),u.classList.toggle("d-none"),d.classList.toggle("d-none")})})}y.addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("email").value,n=document.getElementById("password").value,o=document.getElementById("name").value,s=document.getElementById("male"),l=document.getElementById("female"),c=document.getElementById("other"),r=document.getElementById("birthday").value,g=document.getElementById("phone").value,p=document.getElementById("address").value;let a={email:t,password:n,name:o,gender:(()=>s.checked?s.value:l.checked?l.value:c.checked?c.value:"Not Specified")(),birthday:r,phone:g,address:p,userPhoto:"https://i.imgur.com/rUTLxZC.jpg",lastLoginTime:"",role:"non-admin"};console.log(a),b(a)});
