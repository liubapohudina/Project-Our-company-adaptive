
let mybutton = document.getElementById("myBtn");
mybutton.addEventListener('click', topFunction)


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
         anime({
                 targets: [document.documentElement, document.body],
                scrollTop: 0,
                duration: 1800,
                easing: 'easeInOutQuad'
           });
   
 }

