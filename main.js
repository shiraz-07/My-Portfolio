
// =====================================================
// HEADER / NAVIGATION
// =====================================================

const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');


// =====================================================
// MOBILE MENU
// =====================================================

if (menuIcon && navbar) {

    menuIcon.addEventListener('click', () => {

        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');

    });

}


// =====================================================
// ACTIVE PAGE FUNCTION
// =====================================================

const activePage = () => {

    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    // Header animation
    if (header) {

        header.classList.remove('active');

        setTimeout(() => {
            header.classList.add('active');
        }, 1100);

    }


    // Remove active from all navigation links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });


    // Bars animation
    if (barsBox) {

        barsBox.classList.remove('active');

        setTimeout(() => {
            barsBox.classList.add('active');
        }, 1100);

    }


    // Remove active from all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });


    // Close mobile menu
    if (menuIcon) {
        menuIcon.classList.remove('bx-x');
    }

    if (navbar) {
        navbar.classList.remove('active');
    }

};


// =====================================================
// NAVIGATION LINKS
// =====================================================

navLinks.forEach((link, idx) => {

    link.addEventListener('click', () => {

        if (!link.classList.contains('active')) {

            activePage();

            link.classList.add('active');

            setTimeout(() => {

                if (sections[idx]) {
                    sections[idx].classList.add('active');
                }

            }, 1100);

        }

    });

});


// =====================================================
// LOGO CLICK
// =====================================================

if (logoLink) {

    logoLink.addEventListener('click', () => {

        if (navLinks[0] && !navLinks[0].classList.contains('active')) {

            activePage();

            navLinks[0].classList.add('active');

            setTimeout(() => {

                if (sections[0]) {
                    sections[0].classList.add('active');
                }

            }, 1100);

        }

    });

}


// =====================================================
// RESUME SECTION
// =====================================================

const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');


resumeBtns.forEach((btn, idx) => {

    btn.addEventListener('click', () => {

        // Remove active from all buttons
        resumeBtns.forEach(button => {
            button.classList.remove('active');
        });


        // Add active to clicked button
        btn.classList.add('active');


        // Remove active from all resume details
        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });


        // Show selected resume detail
        if (resumeDetails[idx]) {
            resumeDetails[idx].classList.add('active');
        }

    });

});


// =====================================================
// PORTFOLIO SLIDER
// =====================================================

const portfolioSection = document.querySelector('.portfolio');


if (portfolioSection) {

    // Portfolio elements
    const arrowRight = portfolioSection.querySelector('.arrow-right');
    const arrowLeft = portfolioSection.querySelector('.arrow-left');

    const imgSlide = portfolioSection.querySelector('.img-slide');

    const portfolioDetails =
        portfolioSection.querySelectorAll('.portfolio-detail');


    // Total number of projects
    const totalProjects = portfolioDetails.length;


    // Current project
    let index = 0;


    // =================================================
    // UPDATE PORTFOLIO
    // =================================================

    const activePortfolio = () => {

        // Move project image slider
        if (imgSlide) {

            imgSlide.style.transform =
                `translateX(calc(${index * -100}% - ${index * 2}rem))`;

        }


        // Change project information
        portfolioDetails.forEach((detail, idx) => {

            if (idx === index) {
                detail.classList.add('active');
            } else {
                detail.classList.remove('active');
            }

        });


        // =================================================
        // LEFT ARROW
        // =================================================

        if (arrowLeft) {

            if (index === 0) {
                arrowLeft.classList.add('disabled');
            } else {
                arrowLeft.classList.remove('disabled');
            }

        }


        // =================================================
        // RIGHT ARROW
        // =================================================

        if (arrowRight) {

            if (index === totalProjects - 1) {
                arrowRight.classList.add('disabled');
            } else {
                arrowRight.classList.remove('disabled');
            }

        }

    };


    // =================================================
    // RIGHT ARROW CLICK
    // =================================================

    if (arrowRight) {

        arrowRight.addEventListener('click', () => {

            if (index < totalProjects - 1) {

                index++;

                activePortfolio();

            }

        });

    }


    // =================================================
    // LEFT ARROW CLICK
    // =================================================

    if (arrowLeft) {

        arrowLeft.addEventListener('click', () => {

            if (index > 0) {

                index--;

                activePortfolio();

            }

        });

    }


    // =================================================
    // INITIAL PORTFOLIO STATE
    // =================================================

    activePortfolio();

}


// =====================================================
// END OF JAVASCRIPT
// =====================================================
