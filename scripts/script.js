// Get the header element
const header = document.querySelector('.header');

// Get the offset of the home, about, and experience sections
const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const experienceSection = document.getElementById('experience');

// Calculate the offsets
const homeSectionOffset = homeSection.offsetTop;
const aboutSectionOffset = aboutSection.offsetTop;
const experienceSectionOffset = experienceSection.offsetTop;

// Add a scroll event listener
window.addEventListener('scroll', () => {
    // Check the scroll position
    const scrollPosition = window.scrollY;

    // Toggle the class based on the scroll position
    if (scrollPosition >= homeSectionOffset && scrollPosition < aboutSectionOffset) {
        header.classList.remove('header-solid');
    } else if (scrollPosition >= aboutSectionOffset && scrollPosition < experienceSectionOffset) {
        header.classList.add('header-solid');
    } else {
        header.classList.add('header-solid');
    }
});

// Add another event listener to handle transparency when scrolling up through the home section
window.addEventListener('scroll', () => {
    // Check the scroll position
    const scrollPosition = window.scrollY;

    // Remove the solid class when scrolling back up through the home section
    if (scrollPosition < homeSectionOffset) {
        header.classList.remove('header-solid');
    }
});


// Burger menu
function toggleMenu() {
    const header = document.querySelector('.header');
    header.classList.toggle('burger-menu-active');
    }


const scriptURL = 'https://script.google.com/macros/s/AKfycbwA8_m-VdiyuTkQuEgENd5zNczg7N9yzeIMm86sKMtMw0tw0Kbx6KOx1Ko-54c5krAR/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form),
    })
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()  
    })
    .catch(error => console.error('Error!', error.message))
})
