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
