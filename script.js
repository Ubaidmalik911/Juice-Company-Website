function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
}
function toggleMenu() {
let menu = document.getElementById('mobileMenu');
if (menu.classList.contains('open')) {
menu.classList.add('closing');
setTimeout(() => {
    menu.classList.remove('open', 'closing');
}, 500);
} else {
menu.classList.add('open');
}
}
let index = 0;
function moveSlide(step) {
    const slides = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length / 1;
    index = (index + step + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 50}%)`;
}
function autoSlide() {
    moveSlide(1);
}
setInterval(autoSlide, 3000);
function startCounter(el, target) {
    let count = 0;
    let speed = 50;
    let step = Math.ceil(target / 100);

    function updateCounter() {
        count += step;
        if (count >= target) {
            el.innerText = target;
        } else {
            el.innerText = count;
            requestAnimationFrame(updateCounter);
        }
    }
    updateCounter();
}
document.addEventListener("DOMContentLoaded", function () {
    let counters = document.querySelectorAll(".counter");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let target = parseInt(entry.target.getAttribute("data-count"));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));

    function animateCounter(element, target) {
        let count = 0;
        let duration = 2000; 
        let step = Math.ceil(target / (duration / 20));

        let interval = setInterval(() => {
            count += step;
            if (count >= target) {
                count = target;
                clearInterval(interval);
            }
            element.innerHTML = `${count}`;
        }, 20); 
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".testimonial-slider");
    const slides = document.querySelectorAll(".testimonial-box");
    let currentIndex = 0;

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        updateSlider();
    }

    function updateSlider() {
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }
    setInterval(nextSlide, 3000);
});
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
const menuItems = document.querySelectorAll('.menu-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

menuItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.5s ease';
    observer.observe(item);
});
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
const style = document.createElement('style');
style.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #2ecc71;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: none;
        font-size: 20px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transition: background-color 0.3s ease;
    }
    
    .scroll-to-top:hover {
        background-color: #27ae60;
    }
`;
document.head.appendChild(style);
const bottleSlider = document.querySelector('.bottle-slider');
const slides = document.querySelectorAll('.bottle-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;
function updateSlide(index) {
    const hero = document.querySelector('.hero');
    const bgImage = slides[index].getAttribute('data-bg');
    hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${bgImage}')`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide(currentSlide);
}
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide(currentSlide);
}
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
setInterval(nextSlide, 5000);
updateSlide(0);