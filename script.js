// (function(){
//         window.onscroll = function() {
//         // sticky navbar on scroll script
//         if(window.pageYOffset > 20){
//             document.getElementByClassName("navbar").addClass("sticky");
//         }else{
//             document.getElementByClassName("navbar").removeClass("sticky");
//         }
        
//         // scroll-up button show/hide script
//         if(window.scrollYOffset > 500){
//             document.getElementByClassName("scroll-up-btn").addClass("show");
//         }else{
//             document.getElementByClassName("scroll-up-btn").removeClass("show");
//         }
//     }
// })();

//     // slide-up script
//     document.querySelectorAll("scroll-up-btn").addEventListener("click", (e) => {
//         window.scrollTo(0, 0);
//         // removing smooth scroll on slide-up button click
//         document.getElementsByTagName("html").css("scrollBehavior", "auto");
//     });
        
//     document.querySelectorAll(".navbar .menu li a").addEventListener("click", (e) => { 
//         // applying again smooth scroll on menu items click
//         document.getElementsByTagName("html").css("scrollBehavior", "smooth");
//     });

//     // toggle menu/navbar script
//     document.querySelectorAll(".menu-btn").addEventListener("click", (e) => {
//         document.querySelectorAll(".navbar .menu").classList.toggle("active");
//         document.querySelectorAll(".menu-btn i").classList.toggle("active");
//     });

    // // typing text animation script
    // let typed = new Typed(".typing", {
    //     strings: ["SMKN 12 Malang "],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });

    // let typed = new Typed(".typing-2", {
    //     strings: ["FEBRIANTI MAYORI"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });

    // // owl carousel script
    // document.getElementByClassName("carousel").owlCarousel({
    //     margin: 20,
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeOut: 2000,
    //     autoplayHoverPause: true,
    //     responsive: {
    //         0:{
    //             items: 1,
    //             nav: false
    //         },
    //         600:{
    //             items: 2,
    //             nav: false
    //         },
    //         1000:{
    //             items: 3,
    //             nav: false
    //         }
    //     }
    // });

    // const navbar1 = document.querySelector('#navbar')

    // window.addEventListener('scroll', function(e) {
    //   const lastPosition = window.scrollY
    //   if (lastPosition > 50 ) {
    //     navbar1.classList.add('active')
    //   } else if (navbar.classList.contains('active')) {
    //     navbar1.classList.remove('active')
    //   } else {
    //     navbar1.classList.remove('active')
    //   }
    // })

   // alert("Hello, ini adalah Program PKL Saya");
    const navbar = document.querySelector('#nav')

window.addEventListener('scroll', function(e) {
  const lastPosition = window.scrollY
  if (lastPosition > 50 ) {
    navbar.classList.add('active')
  } else if (navbar.classList.contains('active')) {
    navbar.classList.remove('active')
  } else {
    navbar.classList.remove('active')
  }
})

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}