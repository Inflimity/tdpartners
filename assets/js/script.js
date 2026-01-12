

document.addEventListener('DOMContentLoaded', function () {

    // --- 1. Sticky Header Effect ---
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- 2. Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');

            // Optional: Animate hamburger to X
            if (mainNav.classList.contains('active')) {
                menuToggle.innerHTML = '<span>&times;</span>'; // X icon
            } else {
                menuToggle.innerHTML = '<span>&#9776;</span>'; // Hamburger
            }
        });
    }

    // --- 3. Close Menu when clicking a link (Mobile) ---
    const navLinks = document.querySelectorAll('.main-nav a');
    if (navLinks && mainNav) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Only close if it's not a dropdown toggle
                if (mainNav.classList.contains('active') && !link.nextElementSibling) {
                    mainNav.classList.remove('active');
                    menuToggle.innerHTML = '<span>&#9776;</span>';
                }
            });
        });
    }

    // --- 5. FAQ Accordion Logic ---
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Optional: Close all other items (Accordion style)
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                });

                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    item.classList.remove('active');
                    answer.style.maxHeight = null;
                }
            });
        });
    }

    // --- 4. Scroll Animations (The "Sweet" Part) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});