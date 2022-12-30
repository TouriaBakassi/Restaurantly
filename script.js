let xmark=document.getElementById("xmark");
let video=document.querySelector(".show-video");
let btnvideo=document.querySelector(".video-btn");

btnvideo.addEventListener("click",()=>{
  video.classList.add("show");
});
xmark.addEventListener("click",()=>{
video.classList.remove("show")
});