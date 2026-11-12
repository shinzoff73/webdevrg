function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

tl = gsap.timeline()
// tl.to(".magic", {
//   y:"400vh",
//   duration:2,
// })

function runMobileAnimation() {


  document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("colorButton");
    let isGreen = false;

    gsap.to(button, {
      opacity: 1
    })

    button.addEventListener("click", function () {
      if (isGreen) {
        document.body.style.backgroundColor = "#0d0d0d";
        gsap.to(".container", {
          duration: -10,
          opacity: 1,
        });

        tl.to(".magic", {
          zIndex:1000,
          opacity:1,
          duration:0.2,
          // y:-60
        })
        tl.to(".magic", {
          zIndex:-1000,
          opacity:0,
          duration:0,
          // y:-60
        })
        

        gsap.to(".container2", {
          opacity: 0,
          duration: -10,
        });

        gsap.to(".fadeup", {
          opacity: 1,
          duration: 0.3,
        });
        gsap.to(".fadedown", {
          opacity: 1,
          duration: 0.3,
        });

        gsap.to("#colorButton", {
          color: "rgb(156, 156, 156)"
        })
        gsap.to("#status", {
          color: "rgb(156, 156, 156)"
        })
        gsap.to(".divisions ul li a", {
          color: "rgb(156, 156, 156)"
        })


      } else {
        document.body.style.backgroundColor = "rgb(211, 254, 255)";
        gsap.to(".container", {
          duration: -10,
          opacity: 0,
        });

        

        tl.to(".magic", {
          zIndex:1000,
          opacity:1,
          duration:0.2,
          // y:-60
        })
        tl.to(".magic", {
          zIndex:-1000,
          opacity:0,
          duration:0,
          // y:-60
        })
        
       

        gsap.to(".container2", {
          opacity: 1,
          duration: -10,
        });

        gsap.to(".fadeup", {
          opacity: 0,
          duration: 0.3,
        });
        gsap.to(".fadedown", {
          opacity: 0,
          duration: 0.3,
        });

        gsap.to("#colorButton", {
          color: "#000000"
        })
        gsap.to("#status", {
          color: "#000000"
        })
        gsap.to(".divisions ul li a", {
          color: "#000000"
        })

      }
      isGreen = !isGreen;
    });
  });
}

function isMobileDevice() {
  return window.innerWidth <= 1200; // typical breakpoint for mobile devices
}

if (isMobileDevice()) {
  runMobileAnimation();
} else {
  runPCAnimation();
}