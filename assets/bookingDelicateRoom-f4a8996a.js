import{a as o,_ as i}from"./sweetalert2.all-9f571157.js";import{i as l}from"./navbar-a9a887c0.js";/* empty css                */import"./aside-d7219df7.js";import"./bookingNavLink-c4975e73.js";let r=document.querySelector(".delicateRoomFacility"),m=document.querySelector(".delicateRoomDimension"),s=document.querySelector(".delicateRoomCatNum"),d=document.querySelector(".delicateRoomPrice"),u=document.querySelector(".bookNowDelicateLg"),f=document.querySelector(".bookNowDelicate");o.get(`${i}/rooms/52`).then(function(e){let t=e.data.size;t.forEach(function(c){let n=`寬 ${t[0]}*深${t[1]}*高${t[2]}`;m.innerHTML=n})});o.get(`${i}/rooms/52`).then(function(e){let t=e.data.facility,c="";t.forEach(function(n){let a=`<li><p><span class="material-symbols-outlined fs-6">
        check
        </span>${n}</p> </li>`;c+=a}),r.innerHTML=c});o.get(`${i}/rooms/52`).then(function(e){let t=e.data.quantity;s.innerHTML=t});o.get(`${i}/rooms/52`).then(function(e){let t=e.data.price;d.innerHTML=`${t}元 / 晚`});u.addEventListener("click",function(e){e.preventDefault(),l("bookingDelicateProcess_1.html")});f.addEventListener("click",function(e){e.preventDefault(),l("bookingDelicateProcess_1.html")});
