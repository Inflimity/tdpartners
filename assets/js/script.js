// document.addEventListener('DOMContentLoaded', function () {

//     // --- 1. Sticky Header Effect ---
//     // Adds a shadow when scrolling down
//     const header = document.querySelector('.main-header');
//     if (header) {
//         window.addEventListener('scroll', () => {
//             if (window.scrollY > 20) {
//                 header.classList.add('shadow-md'); // Tailwind class for shadow
//                 header.classList.replace('py-5', 'py-3'); // Shrink padding slightly
//             } else {
//                 header.classList.remove('shadow-md');
//                 header.classList.replace('py-3', 'py-5'); // Restore padding
//             }
//         });
//     }

//     // --- 2. Mobile Menu Toggle (The Fix) ---
//     const mobileBtn = document.getElementById('mobile-menu-btn');
//     const navMenu = document.getElementById('main-nav-menu');

//     if (mobileBtn && navMenu) {
//         mobileBtn.addEventListener('click', () => {
//             // Toggle Tailwind's 'hidden' class
//             navMenu.classList.toggle('hidden');

//             // Optional: Toggle between Hamburger and X icon
//             const span = mobileBtn.querySelector('span');
//             if (!navMenu.classList.contains('hidden')) {
//                 // If menu is OPEN, change icon to X
//                 mobileBtn.innerHTML = '&#10005;';
//             } else {
//                 // If menu is CLOSED, change icon to Hamburger
//                 mobileBtn.innerHTML = '&#9776;';
//             }
//         });
//     }

//     // --- 3. Mobile "Services" Dropdown Toggle ---
//     // This stops the services list from being stuck open/closed on mobile
//     const servicesToggle = document.getElementById('services-toggle');
//     const servicesDropdown = document.getElementById('services-dropdown');
//     const arrowIcon = document.getElementById('arrow-icon');

//     if (servicesToggle && servicesDropdown) {
//         servicesToggle.addEventListener('click', (e) => {
//             // Only run this logic on mobile screens (less than 1024px)
//             if (window.innerWidth < 1024) {
//                 e.preventDefault(); // Stop it from jumping to top
//                 servicesDropdown.classList.toggle('hidden');

//                 // Rotate the arrow icon
//                 if (servicesDropdown.classList.contains('hidden')) {
//                     arrowIcon.style.transform = 'rotate(0deg)';
//                 } else {
//                     arrowIcon.style.transform = 'rotate(180deg)';
//                 }
//             }
//         });
//     }

//     // --- 4. FAQ Accordion Logic ---
//     const faqItems = document.querySelectorAll('.faq-item');

//     if (faqItems.length > 0) {
//         faqItems.forEach(item => {
//             const question = item.querySelector('.faq-question');
//             const answer = item.querySelector('.faq-answer');
//             const icon = item.querySelector('.icon-plus');

//             question.addEventListener('click', () => {
//                 const isActive = item.classList.contains('active');

//                 // Close all other items
//                 faqItems.forEach(otherItem => {
//                     const otherAnswer = otherItem.querySelector('.faq-answer');
//                     const otherIcon = otherItem.querySelector('.icon-plus');

//                     otherItem.classList.remove('active');
//                     otherAnswer.style.maxHeight = null;
//                     if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
//                 });

//                 // Toggle current item
//                 if (!isActive) {
//                     item.classList.add('active');
//                     answer.style.maxHeight = answer.scrollHeight + "px";
//                     if (icon) icon.style.transform = 'rotate(45deg)';
//                 } else {
//                     item.classList.remove('active');
//                     answer.style.maxHeight = null;
//                     if (icon) icon.style.transform = 'rotate(0deg)';
//                 }
//             });
//         });
//     }

//     // --- 5. Scroll Animations (Fade In) ---
//     const observerOptions = {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.1
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, observerOptions);

//     const animatedElements = document.querySelectorAll('.fade-on-scroll');
//     animatedElements.forEach(el => observer.observe(el));

// });
document.addEventListener('DOMContentLoaded', function () {

    // --- 1. Sticky Header Effect ---
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('shadow-md');
                header.classList.replace('py-5', 'py-3');
            } else {
                header.classList.remove('shadow-md');
                header.classList.replace('py-3', 'py-5');
            }
        });
    }

    // --- 2. Mobile Menu Toggle ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('main-nav-menu');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
            mobileBtn.innerHTML = !navMenu.classList.contains('hidden') ? '&#10005;' : '&#9776;';
        });
    }

    // --- 3. Mobile "Services" Dropdown Toggle ---
    const servicesToggle = document.getElementById('services-toggle');
    const servicesDropdown = document.getElementById('services-dropdown');
    const arrowIcon = document.getElementById('arrow-icon');

    if (servicesToggle && servicesDropdown) {
        servicesToggle.addEventListener('click', (e) => {
            if (window.innerWidth < 1024) {
                e.preventDefault();
                servicesDropdown.classList.toggle('hidden');
                if (arrowIcon) {
                    arrowIcon.style.transform = servicesDropdown.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
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
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.icon-plus');
                    if (otherAnswer) otherAnswer.style.maxHeight = null;
                    if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                });

                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + "px";
                    if (icon) icon.style.transform = 'rotate(45deg)';
                }
            });
        });
    }

    // --- 5. Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-on-scroll').forEach(el => observer.observe(el));


    // --- 6. Form Logic Helper ---
    const successModal = document.getElementById('success-modal');
    const closeModal = document.getElementById('close-modal');

    const showSuccess = () => {
        if (successModal) {
            successModal.classList.remove('hidden');
            successModal.classList.add('flex');
        }
    };

    if (closeModal && successModal) {
        closeModal.addEventListener('click', () => {
            successModal.classList.add('hidden');
            successModal.classList.remove('flex');
        });
    }


    // --- 7. Contact Page Form (With Cloudinary) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const fileInput = document.getElementById('pictures');
        const previewArea = document.getElementById('preview-area');
        const submitBtn = document.getElementById('submit-btn');
        const loadingSpinner = document.getElementById('loading-spinner');
        const btnText = submitBtn ? submitBtn.querySelector('span') : null;
        const imageUrlsInput = document.getElementById('image_urls');

        const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dvdhiqcwl/image/upload';
        const UPLOAD_PRESET = 'td_painters_preset';

        if (fileInput && previewArea) {
            fileInput.addEventListener('change', (e) => {
                const files = Array.from(e.target.files);
                previewArea.innerHTML = '';
                if (files.length > 0) {
                    previewArea.classList.remove('hidden');
                    files.forEach(file => {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            const img = document.createElement('img');
                            img.src = event.target.result;
                            img.className = 'w-16 h-16 object-cover rounded-md border border-slate-200';
                            previewArea.appendChild(img);
                        };
                        reader.readAsDataURL(file);
                    });
                }
            });
        }

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (submitBtn) submitBtn.disabled = true;
            if (btnText) btnText.textContent = 'Processing...';
            if (loadingSpinner) loadingSpinner.classList.remove('hidden');

            try {
                let uploadedUrls = [];
                if (fileInput && fileInput.files.length > 0) {
                    if (btnText) btnText.textContent = 'Uploading Images...';
                    const uploadPromises = Array.from(fileInput.files).map(async (file) => {
                        const formData = new FormData();
                        formData.append('file', file);
                        formData.append('upload_preset', UPLOAD_PRESET);
                        const res = await fetch(CLOUDINARY_URL, { method: 'POST', body: formData });
                        if (!res.ok) throw new Error('Image upload failed');
                        const data = await res.json();
                        return data.secure_url;
                    });
                    uploadedUrls = await Promise.all(uploadPromises);
                    if (imageUrlsInput) imageUrlsInput.value = uploadedUrls.join(', ');
                }

                if (btnText) btnText.textContent = 'Finalizing...';
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Accept": "application/json" },
                    body: JSON.stringify(Object.fromEntries(new FormData(contactForm)))
                });

                if (response.ok) {
                    contactForm.reset();
                    if (previewArea) { previewArea.innerHTML = ''; previewArea.classList.add('hidden'); }
                    showSuccess();
                }
            } catch (error) {
                alert('Something went wrong. Please try again.');
            } finally {
                if (submitBtn) submitBtn.disabled = false;
                if (btnText) btnText.textContent = 'Send Quote Request';
                if (loadingSpinner) loadingSpinner.classList.add('hidden');
            }
        });
    }


    // --- 8. Homepage & Pricing Form (No Cloudinary) ---
    const hpForm = document.getElementById('homePricingForm');
    if (hpForm) {
        const hpSubmitBtn = document.getElementById('hp-submit-btn');
        const hpBtnText = hpSubmitBtn ? hpSubmitBtn.querySelector('span') : null;
        const hpSpinner = document.getElementById('hp-loading-spinner');

        hpForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (hpSubmitBtn) hpSubmitBtn.disabled = true;
            if (hpBtnText) hpBtnText.textContent = 'Sending...';
            if (hpSpinner) hpSpinner.classList.remove('hidden');

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Accept": "application/json" },
                    body: JSON.stringify(Object.fromEntries(new FormData(hpForm)))
                });

                if (response.ok) {
                    hpForm.reset();
                    showSuccess();
                }
            } catch (error) {
                alert('Something went wrong. Please try again.');
            } finally {
                if (hpSubmitBtn) hpSubmitBtn.disabled = false;
                if (hpBtnText) hpBtnText.textContent = 'Send Request';
                if (hpSpinner) hpSpinner.classList.add('hidden');
            }
        });
    }
});