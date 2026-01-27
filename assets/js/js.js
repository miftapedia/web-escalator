// Translation System
const translations = {
    id: {
        tagline: "ELEVATOR & ESCALATOR EXPERTS",
        "menu.home": "Beranda",
        "menu.about": "Tentang Kami",
        "menu.services": "Jasa & Layanan",
        "hero.title": "Solusi Profesional untuk Elevator & Escalator Anda",
        "hero.subtitle": "Layanan pengadaan spare part, perbaikan, dan perawatan terpercaya dengan harga terjangkau dan garansi berkualitas",
        "hero.cta1": "Lihat Layanan Kami",
        "hero.cta2": "Tentang Kami",
        "features.title": "Mengapa Memilih Kami?",
        "features.feature1.title": "Terpercaya & Bergaransi",
        "features.feature1.desc": "Setiap pekerjaan dilengkapi dengan garansi resmi untuk memastikan kepuasan dan ketenangan Anda",
        "features.feature2.title": "Harga Terjangkau",
        "features.feature2.desc": "Kami menawarkan solusi dengan biaya kompetitif tanpa mengorbankan kualitas layanan",
        "features.feature3.title": "Respon Cepat",
        "features.feature3.desc": "Tim teknisi profesional kami siap memberikan layanan cepat untuk setiap kebutuhan Anda",
        "features.feature4.title": "Spare Part Lengkap",
        "features.feature4.desc": "Menyediakan suku cadang original dan kompatibel untuk berbagai merek elevator dan escalator",
        "features.feature5.title": "Teknisi Berpengalaman",
        "features.feature5.desc": "Didukung oleh tim teknisi bersertifikat dengan pengalaman puluhan tahun di industri",
        "features.feature6.title": "Layanan 24/7",
        "features.feature6.desc": "Siap melayani kebutuhan darurat Anda kapan saja untuk memastikan operasional tetap berjalan",
        "about.hero.title": "Tentang CV. TEKNIK MANDIRI SEJAHTERA",
        "about.hero.subtitle": "Partner terpercaya Anda untuk solusi elevator dan escalator berkualitas",
        "about.content.title": "Siapa Kami",
        "about.content.p1": "Kami adalah sebuah perusahaan yang menyediakan layanan pengadaan spare part, perbaikan serta perawatan elevator dan escalator dengan harga terjangkau, terpercaya dan dilengkapi garansi.",
        "about.content.p2": "Apabila Anda sedang mencari solusi untuk pengadaan spare part, perbaikan serta perawatan elevator dan escalator pada gedung Anda, kami siap memberikan solusi yang terbaik dengan biaya dan kualitas terjamin.",
        "about.content.p3": "Kami juga menawarkan jasa modernisasi untuk elevator dan escalator sebagai peningkatan teknologi yang lebih baru.",
        "about.highlight.title": "Komitmen Kami",
        "about.highlight.item1": "Kualitas layanan terbaik dengan teknisi bersertifikat",
        "about.highlight.item2": "Spare part original dan kompatibel berkualitas tinggi",
        "about.highlight.item3": "Harga kompetitif dengan transparansi biaya",
        "about.highlight.item4": "Garansi resmi untuk setiap pekerjaan",
        "about.highlight.item5": "Layanan purna jual yang responsif",
        "about.highlight.item6": "Modernisasi teknologi untuk efisiensi maksimal",
        "services.hero.title": "Jasa & Layanan Kami",
        "services.hero.subtitle": "Solusi lengkap untuk semua kebutuhan elevator dan escalator Anda",
        "services.item1.title": "Mesin Traksi Elevator (Traction Machine)",
        "services.item1.desc": "Mesin penggerak utama elevator dengan sistem traksi yang efisien. Kami menyediakan spare part, perbaikan dan perawatan untuk semua jenis mesin traksi dari berbagai brand terkemuka dengan komponen berkualitas tinggi.",
        "services.item2.title": "Panel Kontrol Elevator (Control Cabinet)",
        "services.item2.desc": "Panel kontrol lengkap dengan sistem kelistrikan, kontaktor, relay, dan komponen elektronik. Menyediakan perbaikan, upgrade sistem kontrol, dan penggantian komponen rusak untuk memastikan operasional optimal.",
        "services.item3.title": "Interior Kabin Elevator",
        "services.item3.desc": "Layanan perbaikan dan modernisasi interior kabin elevator termasuk sistem pencahayaan, panel dinding, lantai, dan komponen keselamatan untuk meningkatkan kenyamanan dan estetika.",
        "services.item4.title": "Mekanisme Pintu Elevator (Door Operator)",
        "services.item4.desc": "Sistem pembuka/penutup pintu otomatis elevator dengan motor penggerak presisi. Layanan meliputi perbaikan, adjustment, penggantian spare part, dan maintenance berkala untuk operasi pintu yang smooth.",
        "services.item5.title": "Inverter Drive & Variable Frequency Drive",
        "services.item5.desc": "Komponen pengatur kecepatan dan kontrol motor elevator modern. Menyediakan perbaikan inverter, penggantian unit rusak, dan upgrade ke teknologi terbaru untuk efisiensi energi maksimal.",
        "services.item6.title": "PCB Board & Control Circuit",
        "services.item6.desc": "Papan sirkuit elektronik (PCB) untuk sistem kontrol elevator. Layanan troubleshooting, perbaikan komponen elektronik, replacement board, dan upgrade firmware untuk performa optimal.",
        "services.item7.title": "Perbaikan & Renovasi Interior Kabin",
        "services.item7.desc": "Layanan lengkap renovasi dan modernisasi interior kabin elevator termasuk upgrade lighting system, panel kontrol dalam kabin, dan material finishing berkualitas premium.",
        "services.item8.title": "Guide Rail & Mounting System",
        "services.item8.desc": "Rel pemandu elevator untuk memastikan gerakan kabin yang stabil dan presisi. Menyediakan alignment, perbaikan bracket mounting, dan penggantian rel yang aus atau rusak.",
        "services.item9.title": "Mesin Escalator & Drive System",
        "services.item9.desc": "Unit mesin penggerak escalator dengan sistem transmisi dan brake safety. Layanan overhaul mesin, penggantian gear box, motor drive, dan maintenance preventif untuk performa smooth.",
        "services.item10.title": "Main Control Board Elevator",
        "services.item10.desc": "PCB utama sistem kontrol elevator dengan microprocessor dan komponen digital. Perbaikan circuit, replacement IC/komponen, dan programming untuk semua brand elevator.",
        "services.item11.title": "Communication & Signal Board",
        "services.item11.desc": "Board komunikasi untuk sistem panggilan dan indikator lantai elevator. Menyediakan perbaikan, kalibrasi signal, dan upgrade sistem komunikasi antar floor.",
        "services.item12.title": "Display Board & Floor Indicator",
        "services.item12.desc": "Papan display digital untuk indikator lantai dan informasi elevator. Layanan penggantian LED/LCD display, repair board, dan upgrade ke display modern dengan teknologi terkini.",
        "services.item13.title": "Motor Listrik Elevator & Rewinding",
        "services.item13.desc": "Motor penggerak elevator dengan berbagai kapasitas daya. Layanan rewinding motor, bearing replacement, balancing, dan overhaul lengkap untuk performa optimal dan hemat energi.",
        "services.item14.title": "Panel Kontrol Remote & Monitoring",
        "services.item14.desc": "Sistem kontrol jarak jauh dan monitoring untuk elevator modern. Instalasi, konfigurasi, dan integrasi dengan building management system untuk kontrol terpusat.",
        "services.item15.title": "V-Belt & Transmission Belt",
        "services.item15.desc": "Belt transmisi untuk sistem penggerak elevator dan escalator. Menyediakan berbagai ukuran dan tipe belt berkualitas tinggi, instalasi, dan adjustment tensioning yang tepat.",
        "services.item16.title": "Roda & Roller Escalator",
        "services.item16.desc": "Step roller dan guide wheel untuk sistem escalator. Penggantian roller aus, bearing maintenance, dan balancing untuk operasi escalator yang halus dan minim noise.",
        "services.item17.title": "Encoder & Position Sensor",
        "services.item17.desc": "Sensor posisi dan encoder untuk akurasi pergerakan elevator. Kalibrasi, penggantian sensor rusak, dan upgrade ke encoder presisi tinggi untuk leveling yang sempurna.",
        "services.item18.title": "Brake Resistor & Safety Brake",
        "services.item18.desc": "Sistem pengereman darurat dan resistor untuk kontrol kecepatan. Testing brake system, penggantian brake pad/shoe, dan calibration untuk keamanan maksimal sesuai standar.",
        "services.item19.title": "Perangkat Keselamatan & Safety Switch",
        "services.item19.desc": "Safety device lengkap termasuk over-speed governor, safety gear, door lock, dan emergency switch. Testing, sertifikasi, dan penggantian komponen safety sesuai regulasi.",
        "services.tag.sparepart": "Spare Part",
        "services.tag.repair": "Perbaikan",
        "services.tag.maintenance": "Maintenance",
        "services.tag.modernization": "Modernisasi",
        "footer.desc": "Partner terpercaya untuk solusi pengadaan spare part, perbaikan, dan perawatan elevator & escalator berkualitas tinggi.",
        "footer.services.title": "Layanan",
        "footer.services.item1": "Pengadaan Spare Part",
        "footer.services.item2": "Perbaikan & Repair",
        "footer.services.item3": "Maintenance Berkala",
        "footer.services.item4": "Modernisasi Sistem",
        "footer.contact.title": "Hubungi Kami",
        "footer.rights": "All Rights Reserved"
    },
    en: {
        tagline: "ELEVATOR & ESCALATOR EXPERTS",
        "menu.home": "Home",
        "menu.about": "About Us",
        "menu.services": "Services",
        "hero.title": "Professional Solutions for Your Elevator & Escalator",
        "hero.subtitle": "Trusted spare parts procurement, repair, and maintenance services with affordable prices and quality guarantees",
        "hero.cta1": "View Our Services",
        "hero.cta2": "About Us",
        "features.title": "Why Choose Us?",
        "features.feature1.title": "Trusted & Guaranteed",
        "features.feature1.desc": "Every job comes with an official warranty to ensure your satisfaction and peace of mind",
        "features.feature2.title": "Affordable Prices",
        "features.feature2.desc": "We offer solutions with competitive costs without sacrificing service quality",
        "features.feature3.title": "Fast Response",
        "features.feature3.desc": "Our professional technician team is ready to provide quick service for all your needs",
        "features.feature4.title": "Complete Spare Parts",
        "features.feature4.desc": "Providing original and compatible parts for various elevator and escalator brands",
        "features.feature5.title": "Experienced Technicians",
        "features.feature5.desc": "Supported by certified technician team with decades of industry experience",
        "features.feature6.title": "24/7 Service",
        "features.feature6.desc": "Ready to serve your emergency needs anytime to ensure operations keep running",
        "about.hero.title": "About CV. TEKNIK MANDIRI SEJAHTERA",
        "about.hero.subtitle": "Your trusted partner for quality elevator and escalator solutions",
        "about.content.title": "Who We Are",
        "about.content.p1": "We are a company that provides spare parts procurement, repair and maintenance services for elevators and escalators with affordable prices, trustworthy and equipped with guarantees.",
        "about.content.p2": "If you are looking for solutions for spare parts procurement, repair and maintenance of elevators and escalators in your building, we are ready to provide the best solutions with guaranteed costs and quality.",
        "about.content.p3": "We also offer modernization services for elevators and escalators as an upgrade to newer technology.",
        "about.highlight.title": "Our Commitment",
        "about.highlight.item1": "Best service quality with certified technicians",
        "about.highlight.item2": "High-quality original and compatible spare parts",
        "about.highlight.item3": "Competitive prices with cost transparency",
        "about.highlight.item4": "Official warranty for every job",
        "about.highlight.item5": "Responsive after-sales service",
        "about.highlight.item6": "Technology modernization for maximum efficiency",
        "services.hero.title": "Our Services",
        "services.hero.subtitle": "Complete solutions for all your elevator and escalator needs",
        "services.item1.title": "Elevator Traction Machine",
        "services.item1.desc": "Main elevator drive machine with efficient traction system. We provide spare parts, repair and maintenance for all types of traction machines from various leading brands with high-quality components.",
        "services.item2.title": "Elevator Control Panel (Control Cabinet)",
        "services.item2.desc": "Complete control panel with electrical systems, contactors, relays, and electronic components. Providing repair, control system upgrades, and replacement of damaged components to ensure optimal operation.",
        "services.item3.title": "Elevator Cabin Interior",
        "services.item3.desc": "Repair and modernization services for elevator cabin interior including lighting systems, wall panels, flooring, and safety components to enhance comfort and aesthetics.",
        "services.item4.title": "Elevator Door Mechanism (Door Operator)",
        "services.item4.desc": "Automatic door opening/closing system for elevators with precision drive motor. Services include repair, adjustment, spare parts replacement, and regular maintenance for smooth door operation.",
        "services.item5.title": "Inverter Drive & Variable Frequency Drive",
        "services.item5.desc": "Speed control and modern elevator motor control components. Providing inverter repair, damaged unit replacement, and upgrade to latest technology for maximum energy efficiency.",
        "services.item6.title": "PCB Board & Control Circuit",
        "services.item6.desc": "Electronic circuit board (PCB) for elevator control system. Troubleshooting services, electronic component repair, board replacement, and firmware upgrade for optimal performance.",
        "services.item7.title": "Cabin Interior Repair & Renovation",
        "services.item7.desc": "Complete renovation and modernization services for elevator cabin interior including lighting system upgrade, cabin control panel, and premium quality finishing materials.",
        "services.item8.title": "Guide Rail & Mounting System",
        "services.item8.desc": "Elevator guide rails to ensure stable and precise cabin movement. Providing alignment, mounting bracket repair, and replacement of worn or damaged rails.",
        "services.item9.title": "Escalator Machine & Drive System",
        "services.item9.desc": "Escalator drive machine unit with transmission system and safety brake. Machine overhaul services, gear box replacement, motor drive, and preventive maintenance for smooth performance.",
        "services.item10.title": "Main Elevator Control Board",
        "services.item10.desc": "Main PCB for elevator control system with microprocessor and digital components. Circuit repair, IC/component replacement, and programming for all elevator brands.",
        "services.item11.title": "Communication & Signal Board",
        "services.item11.desc": "Communication board for call system and elevator floor indicator. Providing repair, signal calibration, and communication system upgrade between floors.",
        "services.item12.title": "Display Board & Floor Indicator",
        "services.item12.desc": "Digital display board for floor indicator and elevator information. LED/LCD display replacement service, board repair, and upgrade to modern display with latest technology.",
        "services.item13.title": "Elevator Electric Motor & Rewinding",
        "services.item13.desc": "Elevator drive motor with various power capacities. Motor rewinding services, bearing replacement, balancing, and complete overhaul for optimal performance and energy saving.",
        "services.item14.title": "Remote Control Panel & Monitoring",
        "services.item14.desc": "Remote control and monitoring system for modern elevators. Installation, configuration, and integration with building management system for centralized control.",
        "services.item15.title": "V-Belt & Transmission Belt",
        "services.item15.desc": "Transmission belt for elevator and escalator drive systems. Providing various sizes and types of high-quality belts, installation, and proper tensioning adjustment.",
        "services.item16.title": "Escalator Wheels & Rollers",
        "services.item16.desc": "Step rollers and guide wheels for escalator systems. Worn roller replacement, bearing maintenance, and balancing for smooth escalator operation with minimal noise.",
        "services.item17.title": "Encoder & Position Sensor",
        "services.item17.desc": "Position sensor and encoder for elevator movement accuracy. Calibration, damaged sensor replacement, and upgrade to high-precision encoder for perfect leveling.",
        "services.item18.title": "Brake Resistor & Safety Brake",
        "services.item18.desc": "Emergency braking system and resistor for speed control. Brake system testing, brake pad/shoe replacement, and calibration for maximum safety according to standards.",
        "services.item19.title": "Safety Devices & Safety Switch",
        "services.item19.desc": "Complete safety devices including over-speed governor, safety gear, door lock, and emergency switch. Testing, certification, and replacement of safety components according to regulations.",
        "services.tag.sparepart": "Spare Part",
        "services.tag.repair": "Repair",
        "services.tag.maintenance": "Maintenance",
        "services.tag.modernization": "Modernization",
        "footer.desc": "Trusted partner for high-quality elevator & escalator spare parts procurement, repair, and maintenance solutions.",
        "footer.services.title": "Services",
        "footer.services.item1": "Spare Parts Procurement",
        "footer.services.item2": "Repair & Service",
        "footer.services.item3": "Regular Maintenance",
        "footer.services.item4": "System Modernization",
        "footer.contact.title": "Contact Us",
        "footer.rights": "All Rights Reserved"
    }
};

let currentLang = localStorage.getItem('language') || 'id';

// Apply translations
function applyTranslations() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// Toggle language
function toggleLanguage() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    localStorage.setItem('language', currentLang);
    document.getElementById('lang-text').textContent = currentLang === 'id' ? 'EN' : 'ID';
    document.getElementById('lang-text-mobile').textContent = currentLang === 'id' ? 'EN' : 'ID';
    applyTranslations();
}

// Navigation System
function navigateTo(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show selected page
    document.getElementById(page).classList.add('active');
    
    // Update desktop navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });
    
    // Update mobile navigation
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-page') === page) {
            item.classList.add('active');
        }
    });
    
    // Save to localStorage
    localStorage.setItem('currentPage', page);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll to top button
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Remove loader
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 800);

    // Apply saved language
    document.getElementById('lang-text').textContent = currentLang === 'id' ? 'EN' : 'ID';
    document.getElementById('lang-text-mobile').textContent = currentLang === 'id' ? 'EN' : 'ID';
    applyTranslations();

    // Restore last page
    const lastPage = localStorage.getItem('currentPage') || 'home';
    navigateTo(lastPage);

    // Desktop navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            navigateTo(page);
        });
    });

    // Mobile navigation
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            if (page) {
                navigateTo(page);
            }
        });
    });

    // Scroll to top button visibility
    window.addEventListener('scroll', function() {
        const scrollTop = document.getElementById('scrollTop');
        const whatsappFab = document.querySelector('.whatsapp-fab');
        if (window.pageYOffset > 300) {
            scrollTop.classList.add('visible');
            whatsappFab.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
            whatsappFab.classList.remove('visible');
        }

        // Navbar scroll effect
        const navbar = document.querySelector('.navbar');
        if (window.pageYOffset > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Cache images to localStorage (simplified version)
    const images = document.querySelectorAll('.service-image');
    images.forEach((img, index) => {
        const cacheKey = `img-cache-${index}`;
        const cachedData = localStorage.getItem(cacheKey);
        
        if (cachedData) {
            img.src = cachedData;
        } else {
            img.addEventListener('load', function() {
                try {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    const dataURL = canvas.toDataURL('image/jpeg', 0.8);
                    localStorage.setItem(cacheKey, dataURL);
                } catch (e) {
                    console.log('Cannot cache image:', e);
                }
            });
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
