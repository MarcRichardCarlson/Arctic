/*NAVBAR FUNCTION*/
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else if (visibility === 'true') {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
});

/*SCROLL BOTTOM FUNCTION*/
function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

/*SCROLL TOP FUNCTION*/ 
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});  
}

/*CLOTHS DISPLAY*/
const selection = document.getElementById("selection");
const btn = document.getElementById("dropdown-btn");
btn.onclick = function () {
  if (selection.style.display !== "none") {
    selection.style.display = "none";
  } else {
    selection.style.display = "flex";
  }
};