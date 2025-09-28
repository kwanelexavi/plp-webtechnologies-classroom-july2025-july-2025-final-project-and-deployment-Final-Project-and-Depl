const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

const currentTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme', currentTheme);
if (themeIcon) {
    updateThemeIcon(currentTheme);
}

if (themeToggle && themeIcon) {
    themeToggle.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = activeTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    if (!themeIcon) return;

    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeIcon.setAttribute('aria-label', 'Switch to light mode');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeIcon.setAttribute('aria-label', 'Switch to dark mode');
    }
}

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('.nav-link');
const currentPage = body?.dataset.page;

if (currentPage && navLinks.length) {
    navLinks.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        mobileMenuToggle.classList.toggle('open');
    });
}

if (navMenu && navLinks.length) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            mobileMenuToggle?.classList.remove('open');
        });
    });
}

const header = document.querySelector('header');
if (header) {
    const toggleHeaderState = () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    toggleHeaderState();
    window.addEventListener('scroll', toggleHeaderState);
}

const statNumbers = document.querySelectorAll('.stat-number');
if (statNumbers.length) {
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const targetValue = parseInt(target.getAttribute('data-target'), 10);
                    animateCounter(target, targetValue);
                    observer.unobserve(target);
                }
            });
        }, observerOptions);

        statNumbers.forEach(stat => observer.observe(stat));
    } else {
        statNumbers.forEach(stat => {
            const targetValue = parseInt(stat.getAttribute('data-target'), 10);
            animateCounter(stat, targetValue);
        });
    }
}

function animateCounter(element, target) {
    let current = 0;
    const increment = Math.max(target / 100, 1);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });

    if (testimonials[index]) {
        testimonials[index].classList.add('active');
        currentTestimonial = index;
    }
}

const advanceTestimonial = (direction) => {
    if (!testimonials.length) return;

    let newIndex = currentTestimonial + direction;
    if (newIndex < 0) {
        newIndex = testimonials.length - 1;
    } else if (newIndex >= testimonials.length) {
        newIndex = 0;
    }
    showTestimonial(newIndex);
};

if (testimonials.length) {
    showTestimonial(0);

    if (prevButton) {
        prevButton.addEventListener('click', () => advanceTestimonial(-1));
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => advanceTestimonial(1));
    }

    if (testimonials.length > 1) {
        setInterval(() => advanceTestimonial(1), 5000);
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

const lazyImages = document.querySelectorAll('img[data-src]');
if ('IntersectionObserver' in window && lazyImages.length) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
} else if (lazyImages.length) {
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
    });
}
