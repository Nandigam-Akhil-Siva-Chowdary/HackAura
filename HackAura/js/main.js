document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('active');
        
        // Burger Animation
        burger.classList.toggle('toggle');
        
        // Animate Links
        navItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            answer.classList.toggle('active');
        });
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.getAttribute('href') === '#') return;
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    burger.classList.remove('toggle');
                }
            }
        });
    });
    
    // Sticky Header on Scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    
    // Form Submission
    const registrationForm = document.getElementById('hackathon-registration');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to your server
            // For demo purposes, we'll just show an alert
            alert('Thank you for your interest in HackAura! Please complete your registration on the Unstop platform.');
            this.reset();
        });
    }
    
    // Scroll Reveal Animations
    const scrollReveal = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true
    });
    
    scrollReveal.reveal('.section-title, .track-card, .timeline-item, .prize-card, .sponsor-card, .faq-item, .form-group, .register-info > *', { 
        interval: 200 
    });
});

// Burger Animation
const burger = document.querySelector('.burger');
if (burger) {
    burger.addEventListener('click', function() {
        this.classList.toggle('toggle');
    });
}

