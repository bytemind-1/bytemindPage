// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Hover effect on links and buttons
const links = document.querySelectorAll('a, button, .service-card');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

// Navigation Menu
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Portfolio Projects Data
const projects = [
    {
        title: 'E-commerce Platform',
        category: 'web',
        image: 'https://picsum.photos/800/600?random=1',
        description: 'Full-stack e-commerce solution with advanced features',
        link: '#'
    },
    {
        title: 'Fitness App',
        category: 'app',
        image: 'https://picsum.photos/800/600?random=2',
        description: 'Mobile fitness tracking application',
        link: '#'
    },
    {
        title: 'Brand Identity',
        category: 'design',
        image: 'https://picsum.photos/800/600?random=3',
        description: 'Complete brand identity design system',
        link: '#'
    },
    {
        title: 'News Portal',
        category: 'web',
        image: 'https://picsum.photos/800/600?random=4',
        description: 'Real-time news aggregation platform',
        link: '#'
    },
    {
        title: 'Food Delivery App',
        category: 'app',
        image: 'https://picsum.photos/800/600?random=5',
        description: 'On-demand food delivery service',
        link: '#'
    },
    {
        title: 'UI Kit Design',
        category: 'design',
        image: 'https://picsum.photos/800/600?random=6',
        description: 'Modern UI component library',
        link: '#'
    }
];

// Initialize Owl Carousel
const initProjectCarousel = () => {
    const carousel = $('.project-carousel');
    
    // Populate carousel with projects
    projects.forEach(project => {
        carousel.append(`
            <div class="project-card">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-overlay">
                        <span class="project-category">${project.category}</span>
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.link}" class="btn primary">View Project</a>
                    </div>
                </div>
            </div>
        `);
    });
    
    // Initialize Owl Carousel
    carousel.owlCarousel({
        center: true,
        items: 3,
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        navText: [
            '<i class="fas fa-arrow-left"></i>',
            '<i class="fas fa-arrow-right"></i>'
        ],
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 }
        }
    });
};

// Add scroll progress indicator
const addScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });
};

// Enhanced scroll animations
const enhanceScrollAnimations = () => {
    const elements = document.querySelectorAll('.service-card, .stat-item, .about-text p, .section-header');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
};

// Add floating animation to specific elements
const addFloatingAnimation = () => {
    const elements = document.querySelectorAll('.hero-scroll, .service-card i, .footer-social a');
    elements.forEach(el => {
        el.style.animation = 'float 3s ease-in-out infinite';
    });
};

// Initialize all animations and features
// Fix the DOMContentLoaded event handler to avoid nested event listeners
document.addEventListener('DOMContentLoaded', () => {
    initProjectCarousel();
    addScrollProgress();
    enhanceScrollAnimations();
    addFloatingAnimation();
    
    // Add spotlight element
    const spotlight = document.createElement('div');
    spotlight.className = 'spotlight';
    document.body.appendChild(spotlight);

    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        spotlight.style.setProperty('--x', `${x}%`);
        spotlight.style.setProperty('--y', `${y}%`);
    });
});

// Smooth scroll handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Populate and Filter Portfolio
// Fix the portfolio grid issue
const populateProjects = (category = 'all') => {
    // Check if work-grid exists before trying to use it
    const workGrid = document.querySelector('.work-grid');
    
    // If workGrid doesn't exist, we're using the carousel instead, so exit the function
    if (!workGrid) return;
    
    workGrid.innerHTML = '';
    projects.forEach(project => {
        if (category === 'all' || project.category === category) {
            const projectEl = document.createElement('div');
            projectEl.className = 'project-card';
            projectEl.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-overlay">
                        <h3>${project.title}</h3>
                        <a href="${project.link}" class="btn primary">View Project</a>
                    </div>
                </div>
            `;
            workGrid.appendChild(projectEl);
        }
    });
};

// Only initialize the filter buttons if they exist
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                populateProjects(btn.dataset.filter);
            });
        });
        
        // Initialize portfolio only if filter buttons exist
        populateProjects();
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        populateProjects(btn.dataset.filter);
    });
});

// Initialize portfolio
populateProjects();

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

// Form Validation and Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Show success message
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'Message Sent!';
        btn.style.background = '#00ff88';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            contactForm.reset();
        }, 3000);
    } catch (error) {
        console.error('Error:', error);
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .project-card, .stat-item').forEach(el => {
    observer.observe(el);
});

// Page Load Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});