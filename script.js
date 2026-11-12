var main = document.querySelector("body");
var cursor = document.querySelector("#cursor");
var d1 = document.querySelector("#li1");
var d2 = document.querySelector("#li2");
var d3 = document.querySelector("#li3");
var divi = document.querySelector(".divisions");
var stat = document.querySelector("#status");
var pag = document.querySelector(".page1");
var cont = document.querySelector(".container");
var cont2 = document.querySelector(".container2");

 function isMobileDevice() {
   return /Mobi|Android/i.test(navigator.userAgent);
 }

gsap.from(".container #rg", {
  y: 40,
  opacity: 0,
  delay: 0,
});
gsap.from(".container #di1", {
  y: 40,
  opacity: 0,
  delay: 0.1,
});
gsap.from(".container #di2", {
  y: 40,
  opacity: 0,
  delay: 0.2,
});
gsap.from(".container #di3", {
  y: 40,
  opacity: 0,
  delay: 0.3,
});
gsap.from(".container #di4", {
  y: 40,
  opacity: 0,
  delay: 0.4,
});
gsap.from(".container #di5", {
  y: 40,
  opacity: 0,
  delay: 0.5,
});

 function runPCAnimation() {

main.addEventListener("mousemove", function (rg) {
  var rgx = rg.x - 10;
  var rgy = rg.y - 10;
  gsap.to(cursor, {
    x: rgx + scrollX,
    y: rgy + scrollY,
    height: "20",
    width: "20",
    opacity: 1,
  });
});

divi.addEventListener("mouseenter", function () {
  gsap.to(cursor, {
    scale: 0.4,
  });
});
divi.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    scale: 1,
  });
});

stat.addEventListener("mousemove", function () {
  gsap.to(cursor, {
    scale: 0.4,
    duration: -1000000,
  });
});
stat.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    scale: 1,
  });
});

cont.addEventListener("mouseenter", function () {
  gsap.to(cursor, {
    scale: 15,
  });
  gsap.to("#di1", {
    opacity: 0,
    duration: -1000000,
  });
  gsap.to("#di2", {
    opacity: 0,
    duration: -1000000,
  });
  gsap.to("#di3", {
    opacity: 0,
    duration: -1000000,
  });
  gsap.to("#di4", {
    opacity: 0,
    duration: -1000000,
  });
  gsap.to("#di5", {
    opacity: 0,
    duration: -1000000,
  });
  gsap.to(".container #rg", {
    opacity: 0,
    duration: -1000000,
  });

  gsap.to(".page1 .container2", {
    opacity: 1,
    duration: -1000000,
  });
});
cont.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    scale: 1,
  });
  gsap.to("#di1", {
    opacity: 1,
    duration: -1000000,
  });
  gsap.to("#di2", {
    opacity: 1,
    duration: -1000000,
  });
  gsap.to("#di3", {
    opacity: 1,
    duration: -1000000,
  });
  gsap.to("#di4", {
    opacity: 1,
    duration: -1000000,
  });
  gsap.to("#di5", {
    opacity: 1,
    duration: -1000000,
  });
  gsap.to(".container #rg", {
    opacity: 1,
    duration: -1000000,
  });

  gsap.to(".page1 .container2", {
    opacity: 0,
    duration: -1000000,
  });
});
 }
// pag.addEventListener("mouseenter",function(){
//    gsap.to("#di1", {
//      opacity: 1,
//      duration:-82365874
//    });
//    gsap.to("#di2", {
//      opacity: 1,
//    });
//    gsap.to("#di3", {
//      opacity: 1,
//    });
//    gsap.to("#di4", {
//      opacity: 1,
//    });
//    gsap.to("#di5", {
//      opacity: 1,
//    });
//    gsap.to("#rg", {
//      opacity: 1,
//    });
// })



function isMobileDevice() {
  return window.innerWidth <= 1200; // typical breakpoint for mobile devices
}

 if (isMobileDevice()) {
   runMobileAnimation();
 } else {
   runPCAnimation();
 }

