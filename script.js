document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lesson Interaction Logic ---
    const lessonCards = document.querySelectorAll('.lesson-card');
    
    // Check if we are on the page with lessons
    if (lessonCards.length > 0) {
        // Initialize Bootstrap Modal
        var loginModalElement = document.getElementById('loginModal');
        var loginModal = new bootstrap.Modal(loginModalElement);

        lessonCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                // Show the modal
                loginModal.show();
            });
        });

        // Handle Next Lessons Button
        const nextLessonsBtn = document.getElementById('nextLessonsBtn');
        if (nextLessonsBtn) {
            nextLessonsBtn.addEventListener('click', function(e) {
                e.preventDefault();
                loginModal.show();
            });
        }
    }

    // --- Login Page Logic ---
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = loginForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            
            // Simulate processing
            submitBtn.innerText = 'جاري التحقق...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Redirect to home page
                window.location.href = 'index.html';
            }, 1500);
        });
    }

    // --- Navbar Scroll Effect (Optional Sparkle) ---
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm');
            } else {
                navbar.classList.remove('shadow-sm');
            }
        });
    }
});
