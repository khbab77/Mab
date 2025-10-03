// Display current date
function displayCurrentDate() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const formattedDate = currentDate.toLocaleDateString('ar-SA', options);
    document.getElementById('current-date').textContent = formattedDate;
}

// Initialize the date display
document.addEventListener('DOMContentLoaded', function() {
    displayCurrentDate();
    
    // Initialize Swiper sliders
    initSwipers();
    
    // Initialize tabs
    initTabs();
    
    // Initialize search box
    initSearchBox();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize back to top button
    initBackToTop();
});

// Initialize Swiper sliders
function initSwipers() {
    // Main featured slider
    const mainSwiper = new Swiper('.mainSwiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    // Breaking news ticker
    const breakingSwiper = new Swiper('.breakingSwiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        direction: 'vertical',
    });
}

// Initialize tabs
function initTabs() {
    const tabsNav = document.querySelectorAll('.tabs-nav li');
    const tabsContent = document.querySelectorAll('.tab-pane');
    
    tabsNav.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabsNav.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get the target tab id
            const targetId = this.querySelector('a').getAttribute('href').substring(1);
            
            // Hide all tab content
            tabsContent.forEach(content => {
                content.classList.remove('active');
            });
            
            // Show the target tab content
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// Initialize search box
function initSearchBox() {
    const searchIcon = document.querySelector('.search-icon');
    const searchBox = document.querySelector('.search-box');
    const searchClose = document.querySelector('.search-close');
    
    searchIcon.addEventListener('click', function() {
        searchBox.classList.toggle('active');
        if (searchBox.classList.contains('active')) {
            searchBox.querySelector('input').focus();
        }
    });
    
    searchClose.addEventListener('click', function() {
        searchBox.classList.remove('active');
    });
    
    // Handle search form submission
    document.querySelector('.search-box form').addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = this.querySelector('input').value;
        if (searchTerm.trim() !== '') {
            alert('تم البحث عن: ' + searchTerm);
            // In a real application, you would redirect to search results or fetch search results via AJAX
        }
    });
}

// Initialize mobile menu
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.querySelector('.main-menu');
    
    menuToggle.addEventListener('click', function() {
        mainMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.main-menu li a').forEach(link => {
        link.addEventListener('click', function() {
            mainMenu.classList.remove('active');
        });
    });
}

// Initialize back to top button
function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Newsletter subscription
document.querySelector('.newsletter-content form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    if (email.trim() !== '') {
        alert('شكراً لاشتراكك في نشرتنا البريدية باستخدام: ' + email);
        this.querySelector('input').value = '';
        // In a real application, you would send this data to your server
    }
});

// Poll submission
document.querySelector('.poll-content form').addEventListener('submit', function(e) {
    e.preventDefault();
    const selectedOption = this.querySelector('input[name="poll"]:checked');
    if (selectedOption) {
        alert('شكراً لمشاركتك في استطلاع الرأي! لقد صوتت بـ: ' + selectedOption.nextElementSibling.textContent);
        // In a real application, you would send this data to your server
    } else {
        alert('الرجاء اختيار أحد الخيارات قبل التصويت');
    }
});

// Footer newsletter subscription
document.querySelector('.newsletter-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    if (email.trim() !== '') {
        alert('شكراً لاشتراكك في نشرتنا البريدية باستخدام: ' + email);
        this.querySelector('input').value = '';
        // In a real application, you would send this data to your server
    }
});