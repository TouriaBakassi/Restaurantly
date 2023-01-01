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
// ..............................Specials-Key

let allSpecialKey = document.querySelectorAll(".special-key");

allSpecialKey.forEach((item)=>{
  item.addEventListener("click",()=>{
allSpecialKey.forEach((item)=>{
  item.classList.remove("active");
});
item.classList.add("active");
  });
});
// ...............................Specials-content
let key1 = document.querySelector(".key1");
let key2 = document.querySelector(".key2");
let key3 = document.querySelector(".key3");
let key4 = document.querySelector(".key4");
let key5 = document.querySelector(".key5");
let allcontent = document.querySelectorAll(".special-content")
let content1 =document.querySelector(".content1");
let content2 =document.querySelector(".content2");
let content3 =document.querySelector(".content3");
let content4 =document.querySelector(".content4");
let content5 =document.querySelector(".content5");

key1.addEventListener("click",()=>{
allcontent.forEach((item)=>{
  item.classList.remove("open");
})
content1.classList.add("open");
});
key2.addEventListener("click",()=>{
  allcontent.forEach((item)=>{
    item.classList.remove("open");
  })
  content2.classList.add("open");
  });
  key3.addEventListener("click",()=>{
    allcontent.forEach((item)=>{
      item.classList.remove("open");
    })
    content3.classList.add("open");
  });
  key4.addEventListener("click",()=>{
    allcontent.forEach((item)=>{
       item.classList.remove("open");
     })
      content4.classList.add("open");
    });
 key5.addEventListener("click",()=>{
   allcontent.forEach((item)=>{
     item.classList.remove("open");
      })
  content5.classList.add("open");
    }); 

 // ..........................Swiper
 var swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 500,
  autoplay:{
    delay: 7000,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
});