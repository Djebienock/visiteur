
        // Attractions Data
        const attractions = [
            {
                name: "Médina de Fès",
                category: "monuments",
                icon: "🕌",
                description: "La plus ancienne médina du monde, classée UNESCO",
                hours: "8h-20h",
                price: "Gratuit"
            },
            {
                name: "Tanneries Chouara",
                category: "monuments",
                icon: "🏺",
                description: "Tanneries traditionnelles datant du XIe siècle",
                hours: "9h-18h",
                price: "20 DH"
            },
            
            {
                name: "Université Al Quaraouiyine",
                category: "monuments",
                icon: "📚",
                description: "Plus ancienne université du monde en activité",
                hours: "9h-17h",
                price: "50 DH"
            },
            {
                name: "Palais Royal",
                category: "monuments",
                icon: "👑",
                description: "Magnifique palais avec ses portes dorées",
                hours: "Extérieur uniquement",
                price: "Gratuit"
            },
            {
                name: "Musée Batha",
                category: "musees",
                icon: "🎨",
                description: "Arts et traditions marocaines",
                hours: "9h-16h",
                price: "20 DH"
            },
            {
                name: "Borj Nord",
                category: "musees",
                icon: "🏰",
                description: "Musée des armes avec vue panoramique",
                hours: "9h-17h",
                price: "30 DH"
            },
            {
                name: "Jardin Jnan Sbil",
                category: "loisirs",
                icon: "🌳",
                description: "Magnifique jardin andalou au cœur de Fès",
                hours: "8h-19h",
                price: "Gratuit"
            },
            {
                name: "Bab Boujloud",
                category: "monuments",
                icon: "🚪",
                description: "Porte bleue emblématique de la médina",
                hours: "24h/24",
                price: "Gratuit"
            }
        ];

        // Restaurants Data
        const restaurants = [
            {
                name: "Restaurant Dar Hatim",
                icon: "🍽️",
                description: "Cuisine marocaine authentique dans un cadre traditionnel",
                hours: "12h-23h",
                price: "150-300 DH"
            },
            {
                name: "Café Clock",
                icon: "☕",
                description: "Fusion cuisine et ambiance culturelle",
                hours: "10h-22h",
                price: "80-150 DH"
            },
            {
                name: "Palais Amani",
                icon: "🍴",
                description: "Gastronomie raffinée dans un palais restauré",
                hours: "19h-22h",
                price: "400-600 DH"
            },
            {
                name: "Thami's",
                icon: "🥘",
                description: "Spécialités locales et tajines traditionnels",
                hours: "11h-23h",
                price: "100-200 DH"
            }
        ];

        // Render Attractions
        function renderAttractions(filter = 'all') {
            const grid = document.getElementById('attractionsGrid');
            const filtered = filter === 'all' 
                ? attractions 
                : attractions.filter(a => a.category === filter);

            grid.innerHTML = filtered.map(attr => `
                <div class="attraction-card">
                    <div class="card-image">${attr.icon}</div>
                    <div class="card-content">
                        <h3>${attr.name}</h3>
                        <p>${attr.description}</p>
                        <div class="card-info">
                            <span><i class="far fa-clock"></i> ${attr.hours}</span>
                            <span><i class="fas fa-ticket-alt"></i> ${attr.price}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Render Restaurants
        function renderRestaurants() {
            const grid = document.getElementById('restaurantsGrid');
            grid.innerHTML = restaurants.map(rest => `
                <div class="attraction-card">
                    <div class="card-image">${rest.icon}</div>
                    <div class="card-content">
                        <h3>${rest.name}</h3>
                        <p>${rest.description}</p>
                        <div class="card-info">
                            <span><i class="far fa-clock"></i> ${rest.hours}</span>
                            <span><i class="fas fa-money-bill-wave"></i> ${rest.price}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Filter Functionality
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderAttractions(btn.dataset.filter);
            });
        });







// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });
    
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Auto-play carousel
setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
}, 5000);



















        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Contact Form
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci pour votre message ! Nous vous répondrons bientôt.');
            e.target.reset();
        });

        // Initialize
        renderAttractions();
        renderRestaurants();
   