// Smooth scroll para os links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Efeito parallax suave no scroll
let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                hero.style.opacity = 1 - (scrolled / 800);
            }
            ticking = false;
        });
        ticking = true;
    }
});

// Animação de entrada dos elementos
window.addEventListener('load', function() {
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(30px)';
    hero.style.transition = 'opacity 1s ease, transform 1s ease';
    
    setTimeout(() => {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }, 100);
});


// Troca de views (abas)
const homeView = document.getElementById("home-view");
const portfolioView = document.getElementById("portfolio-view");
const logo = document.getElementById("home-logo");

document.getElementById("portfolio-link").addEventListener("click", (e) => {
  e.preventDefault();
  showView("portfolio");
});

logo.addEventListener("click", () => showView("home"));

function showView(view) {
  if (view === "portfolio") {
    homeView.classList.remove("active-view");
    homeView.classList.add("hidden-view");
    portfolioView.classList.remove("hidden-view");
    portfolioView.classList.add("active-view");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    portfolioView.classList.remove("active-view");
    portfolioView.classList.add("hidden-view");
    homeView.classList.remove("hidden-view");
    homeView.classList.add("active-view");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Efeito RGB pulsante no subtítulo
const subtitle = document.querySelector('.subtitle');
let hue = 0;

setInterval(() => {
  hue = (hue + 1) % 360;
  subtitle.style.color = `hsl(${hue}, 100%, 60%)`;
}, 40);
