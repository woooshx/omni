/**
 * OMNI - Sales Page JavaScript
 * Funcionalidades de UX y Neuromarketing
 */

// ========================================
// ESTADO DEL CARRITO
// ========================================
let cartCount = 0;

/**
 * Añade producto al carrito con feedback visual
 * @param {string} productName - Nombre del producto
 */
function addToCart(productName) {
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;

    // Feedback visual en el botón
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = '✓ Añadido';
    button.style.background = 'linear-gradient(135deg, #00FF7F 0%, #00C853 100%)';

    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 2000);

    // Tracking para analytics
    console.log(`Producto añadido: ${productName}`);
    
    // Disparar evento personalizado para integraciones
    window.dispatchEvent(new CustomEvent('productAdded', { 
        detail: { productName, cartCount } 
    }));
}

/**
 * Suscripción al newsletter
 * @param {Event} event - Evento del formulario
 */
function subscribe(event) {
    event.preventDefault();
    const email = event.target.querySelector('input').value;

    // Simulación de suscripción (reemplazar con API real)
    alert(`¡Bienvenido al Círculo OMNI! Tu código de 10% ha sido enviado a: ${email}`);
    event.target.reset();
    
    // Tracking para analytics
    window.dispatchEvent(new CustomEvent('newsletterSubscribed', { 
        detail: { email } 
    }));
}

// ========================================
// STICKY CTA PARA MÓVIL
// ========================================
function initStickyCta() {
    const stickyCta = document.getElementById('stickyCta');
    if (!stickyCta) return;

    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > heroBottom && window.innerWidth < 768) {
            stickyCta.classList.add('visible');
        } else {
            stickyCta.classList.remove('visible');
        }
    });
}

// ========================================
// ANIMACIONES FADE-IN AL SCROLL
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Dejar de observar una vez animado
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// SMOOTH SCROLL PARA ENLACES INTERNOS
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// EFECTO PARALLAX SUAVE EN HERO
// ========================================
function initHeroParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = hero.querySelector('.hero-content');
        
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
}

// ========================================
// CONTADOR DE ESCASEZ DINÁMICO (FOMO)
// ========================================
function initScarcityCounter() {
    const scarcityElements = document.querySelectorAll('.scarcity-badge');
    
    scarcityElements.forEach(element => {
        // Verificar si es un badge de "última oportunidad"
        if (element.textContent.includes('Última') || element.textContent.includes('DROP')) {
            // Efecto de parpadeo más intenso ocasionalmente
            setInterval(() => {
                element.style.animationDuration = '0.5s';
                setTimeout(() => {
                    element.style.animationDuration = '2s';
                }, 2000);
            }, Math.random() * 10000 + 10000);
        }
    });
}

// ========================================
// LAZY LOADING PARA IMÁGENES DE PRODUCTOS
// ========================================
function initLazyLoading() {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// DETECCIÓN DE DISPOSITIVO MÓVIL
// ========================================
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ========================================
// INICIALIZACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar todas las funcionalidades
    initStickyCta();
    initScrollAnimations();
    initSmoothScroll();
    initHeroParallax();
    initScarcityCounter();
    initLazyLoading();

    // Log de inicialización
    console.log('✨ OMNI Sales Page inicializada correctamente');
    
    // Dispatch evento de página cargada
    window.dispatchEvent(new CustomEvent('omniPageLoaded'));
});

// ========================================
// SERVICE WORKER REGISTRATION (Opcional para PWA)
// ========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js').then(registration => {
        //     console.log('ServiceWorker registrado:', registration.scope);
        // }).catch(error => {
        //     console.log('ServiceWorker falló:', error);
        // });
    });
}
