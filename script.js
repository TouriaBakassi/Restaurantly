let xmark=document.getElementById("xmark");
let video=document.querySelector(".show-video");
let btnvideo=document.querySelector(".video-btn");

btnvideo.addEventListener("click",()=>{
  video.classList.add("show");
});
xmark.addEventListener("click",()=>{
video.classList.remove("show")
});

// ............Pour nav-cle 
let allnavcle = document.querySelectorAll(".navcle");
allnavcle.forEach((item)=>{
  item.addEventListener("click",()=>{
    allnavcle.forEach((item)=>{
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// .............Pour Menu-Cle 
let allcle = document.querySelectorAll(".cle");

allcle.forEach((item)=>{
  item.addEventListener("click",()=>{
      allcle.forEach((item)=>{
   item.classList.remove("active");     
      } );
  item.classList.add("active");
  });
});