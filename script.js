let xmark=document.getElementById("xmark");
let video=document.querySelector(".show-video");
let btnvideo=document.querySelector(".video-btn");

btnvideo.addEventListener("click",()=>{
  video.classList.add("show");
});
xmark.addEventListener("click",()=>{
video.classList.remove("show")
});

// ............Pour nav-cle "active"
let allnavCle = document.querySelectorAll(".navcle");
allnavCle.forEach((item)=>{
  item.addEventListener("click",()=>{
    allnavCle.forEach((item)=>{
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// .............Pour Menu-Cle "active"
let allcle = document.querySelectorAll(".cle");

allcle.forEach((item)=>{
  item.addEventListener("click",()=>{
      allcle.forEach((item)=>{
   item.classList.remove("active");     
      } );
  item.classList.add("active");
  });
});

// .......................Menu
let all = document.querySelector(".all-item");
let starters = document.querySelector(".starters");
let salads = document.querySelector(".salads");
let specialty = document.querySelector(".specialty");

let allitem = document.querySelectorAll(".all");
let allstarter = document.querySelectorAll(".starter");
let allsalad = document.querySelectorAll(".salad");
let allspecial = document.querySelectorAll(".special");

all.addEventListener("click",()=>{
  allitem.forEach((item)=>{
    item.classList.remove("close");
  });
});
starters.addEventListener("click",()=>{
  allitem.forEach((item)=>{
    item.classList.add("close");
  });
  allstarter.forEach((item)=>{
    item.classList.remove("close");
  });
});
salads.addEventListener("click",()=>{
  allitem.forEach((item)=>{
    item.classList.add("close");
  });
  allsalad.forEach((item)=>{
    item.classList.remove("close");
  });
});
specialty.addEventListener("click",()=>{
  allitem.forEach((item)=>{
    item.classList.add("close");
  });
  allspecial.forEach((item)=>{
    item.classList.remove("close");
  });
});