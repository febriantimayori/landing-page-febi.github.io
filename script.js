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
