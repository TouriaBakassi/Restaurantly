//....................LightBox
let lightbox = new SimpleLightbox('.gallery a', { /* options */ });

// ............................... Show Video ..................................

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
// let allnavcle = document.querySelectorAll(".navcle");
// let sections=document.querySelectorAll("section");
// allnavcle.forEach((item)=>{
//   item.addEventListener("click",()=>{
//     allnavcle.forEach((item)=>{
//       item.classList.remove("active");
//     });
//     item.classList.add("active");
//   });
// });

 let sections=document.querySelectorAll("section");
let navli=document.querySelectorAll("nav ul li a");
window.onscroll=()=>{
sections.forEach(section =>{
  let top= window.scrollY;
  let offset= section.offsetTop-130;
  let height= section.offsetHeight;
  let id= section.getAttribute("id");

  if (top>=offset && top< offset+ height) {
    navli.forEach(li =>{
      li.classList.remove("active");
      document.querySelector("nav ul li a[href*=" + id + "]").classList.add("active");
    });

  }
});

};















// window.addEventListener("scroll",()=>{
//   let current="";
// sections.forEach(section=>{
// let sectiontop = section.offsetTop;
// console.log(sectiontop);
// let sectionheigt = section.clientHeight;
// console.log(sectionheigt);
// if (window.pageYOffset > (sectiontop-sectionheigt / 3)) {
//   current= section.getAttribute("id");
//   console.log(current);
// }
// });
//  allnavcle.forEach(cle=>{
//   cle.classList.remove("active");
//   if ("cle[href*="+current+ "]"==true) {
//     cle.classList.add("active");
//   }
//  });
// });







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

 // ..........................Swiper1
 var swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 500,
  autoplay:{
    delay: 6000,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
});
// ........................Swiper2
var swiper = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay:{
    delay: 4000,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    720 : {
      slidesPerView: 2,
      spaceBetween: 30
    },
    800 : {
      slidesPerView: 2,
      spaceBetween: 30
    },
    960 : {
      slidesPerView: 2,
      spaceBetween: 30
    },
   1120 : {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }

});

// .................... Button-To-Top
let btntop=document.querySelector(".btn-to-top");
 window.addEventListener("scroll",()=>{
  if (window.pageYOffset > 130) {
    btntop.classList.add("top");
  }else{
    btntop.classList.remove("top");
  }

 });
// ...........................................nav

let nav= document.querySelector("nav");
window.addEventListener("scroll",()=>{
if (window.pageYOffset > 30) {
  nav.classList.add("fixed");
}else{
  nav.classList.remove("fixed");
}
});





// .................................NAVBAR
let bar=document.querySelector(".bar");
let xmmark=document.querySelector(".xmark");
let navbar=document.querySelector(".navbar");
 
  bar.addEventListener("click",()=>{
navbar.classList.add("open");
 });
 xmmark.addEventListener("click",()=>{
  navbar.classList.remove("open");
 });
//  .....................................Emailjs

emailjs.init('R3rkCugsrhkrt7L3X');

const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_pp2gbvp';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Your Email Sent To Restaurantly By Successfuly!✅✅');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
//..............................AOS Animated on scroll
  AOS.init();

// ..................................change-Title..

  let titl=document.title;
  window.addEventListener("blur",()=>{
    document.title = "Come Back I Miss You😂";
  });
  window.addEventListener("focus",()=>{
    document.title = titl;
  });
  let loader=document.querySelector("#loader");
       window.addEventListener("load",()=>{  
       loader.style.display="none";  
      });
  
// /...............................//////////////

let tab=["touria","nihal","douaa","zahra","maryam","mohammed","lina","roaya","souad","oussama","hiba","fati"];

for (let i = 0; i < tab.length; i++) {
  let element = tab[i];
  if (element.includes("m")){
  element += "l";
  console.log(element);
  };
}; 