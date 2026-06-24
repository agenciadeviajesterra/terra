// 1. CONFIGURACIÓN DE LA PORTADA CINEMATOGRÁFICA
const heroSlides = [
    {
        title: "Maravillas de Europa",
        desc: "Un recorrido por las ciudades más emblemáticas del viejo continente.",
        img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1920&q=80",
        btnText: "Ver Paquetes",
        btnLink: "#paquetes"
    },
    {
        title: "Paraísos Tropicales",
        desc: "Relájate en las playas más hermosas de Caribe.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
        btnText: "Descubrir",
        btnLink: "#paquetes"
    },
    {
        title: "Aventura en la Patagonia",
        desc: "Conecta con la naturaleza en su estado más puro.",
        img: "https://images.unsplash.com/photo-1531176175280-33e81d6a5d56?auto=format&fit=crop&w=1920&q=80",
        btnText: "Explorar",
        btnLink: "#paquetes"
    }
];

const heroContainer = document.getElementById('hero-slider');
heroSlides.forEach(slide => {
    heroContainer.innerHTML += `
        <div class="swiper-slide" style="background-image: url('${slide.img}');">
            <div class="slide-overlay"></div>
            <div class="slide-content">
                <h1>${slide.title}</h1>
                <p>${slide.desc}</p>
                <a href="${slide.btnLink}" class="btn-explore">${slide.btnText}</a>
            </div>
        </div>
    `;
});

// Inicializar Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// 2. ALIMENTACIÓN DE PAQUETES DE VIAJE
// Aquí debes agregar tus propios paquetes.
const travelPackages = [
    {
        title: "Inolvidable París",
        duration: "7 Días / 6 Noches",
        description: "Disfruta de la ciudad de la luz con tours guiados, cruce en el Sena y hotel boutique en el centro.",
        price: "$1,299",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Cancún Premium",
        duration: "5 Días / 4 Noches",
        description: "Todo incluido en resorts de lujo frente al mar turquesa. Excursiones a Chichén Itzá incluidas.",
        price: "$899",
        image: "https://images.unsplash.com/photo-1572798432310-5cd3eabd29e5?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Mágico Tokio",
        duration: "10 Días / 9 Noches",
        description: "Sumérgete en la cultura japonesa. Visitas a Kioto, templos antiguos y la moderna Shibuya.",
        price: "$2,150",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80"
    }
];

const packagesContainer = document.getElementById('packages-container');
travelPackages.forEach(pkg => {
    packagesContainer.innerHTML += `
        <div class="package-card">
            <img src="${pkg.image}" alt="${pkg.title}">
            <div class="package-info">
                <h3>${pkg.title}</h3>
                <span class="duration">${pkg.duration}</span>
                <p>${pkg.description}</p>
                <div class="package-footer">
                    <span class="price">${pkg.price}</span>
                    <a href="#contacto" class="btn-details">Reservar</a>
                </div>
            </div>
        </div>
    `;
});