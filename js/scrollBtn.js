


 window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}


function scrollToTop() {
  const scrollToTopButton = document.getElementById('myBtn'); 
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const scrollToTopButton = document.getElementById('myBtn');
console.log(scrollToTopButton)
scrollToTopButton.addEventListener('click', scrollToTop);

