document.addEventListener('DOMContentLoaded', function () {

    // --- 1. Sticky Header Effect ---
    // Adds a shadow when scrolling down
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('shadow-md'); // Tailwind class for shadow
                header.classList.replace('py-5', 'py-3'); // Shrink padding slightly
            } else {
                header.classList.remove('shadow-md');
                header.classList.replace('py-3', 'py-5'); // Restore padding
            }
        });
    }

    // --- 2. Mobile Menu Toggle (The Fix) ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('main-nav-menu');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            // Toggle Tailwind's 'hidden' class
            navMenu.classList.toggle('hidden');

            // Optional: Toggle between Hamburger and X icon
            const span = mobileBtn.querySelector('span');
            if (!navMenu.classList.contains('hidden')) {
                // If menu is OPEN, change icon to X
                mobileBtn.innerHTML = '&#10005;';
            } else {
                // If menu is CLOSED, change icon to Hamburger
                mobileBtn.innerHTML = '&#9776;';
            }
        });
    }

    // --- 3. Mobile "Services" Dropdown Toggle ---
    // This stops the services list from being stuck open/closed on mobile
    const servicesToggle = document.getElementById('services-toggle');
    const servicesDropdown = document.getElementById('services-dropdown');
    const arrowIcon = document.getElementById('arrow-icon');

    if (servicesToggle && servicesDropdown) {
        servicesToggle.addEventListener('click', (e) => {
            // Only run this logic on mobile screens (less than 1024px)
            if (window.innerWidth < 1024) {
                e.preventDefault(); // Stop it from jumping to top
                servicesDropdown.classList.toggle('hidden');

                // Rotate the arrow icon
                if (servicesDropdown.classList.contains('hidden')) {
                    arrowIcon.style.transform = 'rotate(0deg)';
                } else {
                    arrowIcon.style.transform = 'rotate(180deg)';
                }
            }
        });
    }

    // --- 4. FAQ Accordion Logic ---
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.icon-plus');

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other items
                faqItems.forEach(otherItem => {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.icon-plus');

                    otherItem.classList.remove('active');
                    otherAnswer.style.maxHeight = null;
                    if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                });

                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + "px";
                    if (icon) icon.style.transform = 'rotate(45deg)';
                } else {
                    item.classList.remove('active');
                    answer.style.maxHeight = null;
                    if (icon) icon.style.transform = 'rotate(0deg)';
                }
            });
        });
    }

    // --- 5. Scroll Animations (Fade In) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

});