document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const mobileNavToggle = document.createElement('button');
    mobileNavToggle.classList.add('mobile-nav-toggle');
    mobileNavToggle.innerHTML = '&#9776;';
    document.querySelector('header .container').prepend(mobileNavToggle);

    mobileNavToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });

    // Add 'mobile-nav-toggle' styles
    const style = document.createElement('style');
    style.textContent = `
        .mobile-nav-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #0075c9;
        }
        
        @media (max-width: 768px) {
            .mobile-nav-toggle {
                display: block;
            }
            
            nav ul {
                display: none;
                flex-direction: column;
                width: 100%;
                text-align: center;
            }
            
            nav ul.show {
                display: flex;
            }
            
            nav ul li {
                margin: 10px 0;
            }
            
            header .container {
                flex-wrap: wrap;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Stakeholder tabs functionality
    const stakeholderLinks = document.querySelectorAll('.stakeholder-tabs a');
    const stakeholderSections = document.querySelectorAll('.stakeholder-section');
    
    if (stakeholderLinks.length > 0) {
        stakeholderLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all links and sections
                stakeholderLinks.forEach(link => link.classList.remove('active'));
                stakeholderSections.forEach(section => section.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Show corresponding section
                const target = this.getAttribute('href').substring(1);
                document.getElementById(target).classList.add('active');
            });
        });
    }
    
    // Resource category filter functionality
    const categoryButtons = document.querySelectorAll('.tab-btn');
    const resourceItems = document.querySelectorAll('.resource-item');
    
    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                // Show/hide resource items based on category
                resourceItems.forEach(item => {
                    if (category === 'all' || item.classList.contains(category)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                // In a real application, you would send the form data to a server
                alert('Thank you for your message! We will get back to you shortly.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (emailInput.value.trim()) {
                alert('Thank you for subscribing to our newsletter!');
                newsletterForm.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add field validation styles
    const validationStyle = document.createElement('style');
    validationStyle.textContent = `
        .error {
            border-color: #dc3545 !important;
            background-color: #fff8f8 !important;
        }
    `;
    document.head.appendChild(validationStyle);
});