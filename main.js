


AOS.init({
    duration: 1200, // Animation duration in milliseconds
    once: true,     // Animation only occurs once
    easing: 'ease-in-out', // Easing option
});


// JavaScript for mobile menu toggle
document.querySelector('.icon').addEventListener('click', function() {
    document.querySelector('.links ul').classList.toggle('active');
});

// Smooth scroll to anchor links
document.querySelectorAll('.links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript to open modal on image click
const portfolioImages = document.querySelectorAll('.portofolio-content .card img');
portfolioImages.forEach(image => {
    image.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<div class="modal-content">
            <img src="${this.src}" alt="">
            <span class="close">&times;</span>
        </div>`;
        document.body.appendChild(modal);
        
        document.querySelector('.close').addEventListener('click', function() {
            modal.remove();
        });
    });
});

//back to top
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

