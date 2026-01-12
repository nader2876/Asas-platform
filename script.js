document.addEventListener('DOMContentLoaded', function() {
    
    // --- Data: Courses and Lessons ---
    const coursesData = {
        1: {
            title: "نماذج التمويل والإعلانات في Meta وInstagram وSnapchat",
            description: "شرح عملي لنماذج الإعلانات، البيانات، والتمويل في منصات التواصل الاجتماعي.",
            lessons: [
                { number: "الدرس الأول", title: "كيف تحقق Meta أرباحها من Facebook وInstagram", desc: "نظرة عامة على مصادر الدخل الرئيسية لشركة ميتا.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثاني", title: "نظام الإعلانات في Instagram (Ads Manager)", desc: "شرح لوحة التحكم الإعلانية.", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثالث", title: "كيف يستخدم Facebook بيانات المستخدمين", desc: "قيمة البيانات الشخصية وكيف يتم جمعها.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الرابع", title: "Snapchat Ads – نموذج مختلف", desc: "نموذج إيرادات سناب شات القائم على الواقع المعزز.", image: "https://images.unsplash.com/photo-1634455845076-fa694c979d36?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الخامس", title: "Targeted Ads – كيف يتم استهدافك", desc: "آليات الاستهداف المتقدم (Retargeting).", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس السادس", title: "CPM, CPC, CPA – تسعير الإعلانات", desc: "فهم مصطلحات الدفع في سوق الإعلانات.", image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس السابع", title: "خوارزميات العرض والترتيب", desc: "كشف أسرار خوارزميات التوصية.", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثامن", title: "لماذا فشلت منصات ونجحت Meta", desc: "مقارنة مالية بين نماذج ناجحة وأخرى فشلت.", image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=600" }
            ]
        },
        2: {
            title: "أساسيات التمويل للشركات الناشئة",
            description: "تعلم كيفية إدارة الشؤون المالية للشركات الناشئة وتخطيط الميزانية.",
            lessons: [
                { number: "الدرس الأول", title: "مقدمة في الإدارة المالية", desc: "أساسيات المحاسبة والمالية لرواد الأعمال.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثاني", title: "قائمة التدفقات النقدية", desc: "كيفية قراءة وإعداد قائمة التدفقات النقدية.", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثالث", title: "مؤشرات الأداء المالي (KPIs)", desc: "أهم المؤشرات التي يجب على كل مؤسس تتبعها.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" }
            ]
        },
        3: {
            title: "جولات التمويل والاستثمار",
            description: "دليل شامل لفهم مراحل الاستثمار (Seed – Series A – Series B).",
            lessons: [
                { number: "الدرس الأول", title: "أنواع المستثمرين", desc: "الفرق بين المستثمر الملائكي ورأس المال الجريء.", image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثاني", title: "تقييم الشركات الناشئة", desc: "كيف يتم تحديد قيمة شركتك قبل الاستثمار.", image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=600" }
            ]
        },
        4: {
            title: "نماذج تحقيق الأرباح في التطبيقات الرقمية",
            description: "استراتيجيات مختلفة لتحقيق الدخل من التطبيقات والخدمات الرقمية.",
            lessons: [
                { number: "الدرس الأول", title: "Freemium vs Paid", desc: "مقارنة بين النماذج المجانية والمدفوعة.", image: "https://images.unsplash.com/photo-1526304640152-d4619684e484?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثاني", title: "الربح من خلال الاشتراكات (SaaS)", desc: "كيف تبني نموذج اشتراكات مستدام.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=600" }
            ]
        },
        5: {
            title: "فهم الإعلانات الرقمية وتحليل الأداء المالي",
            description: "كيفية قراءة وتحليل الأرقام المالية للحملات الإعلانية.",
            lessons: [
                { number: "الدرس الأول", title: "عائد الاستثمار في الإعلانات (ROAS)", desc: "حساب العائد وفهم جدوى الحملات.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثاني", title: "تكلفة الاستحواذ على العميل (CAC)", desc: "حساب تكلفة جلب عميل جديد وعلاقتها بالقيمة الدائمة.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" }
            ]
        }
    };

    // --- Page Logic Splitter ---
    const path = window.location.pathname;
    const page = path.split("/").pop();

    // Initialize Modal (Common to both pages)
    var loginModalElement = document.getElementById('loginModal');
    var loginModal = new bootstrap.Modal(loginModalElement);

    if (page === 'course-details.html') {
        initCourseDetailsPage();
    } else {
        initIndexPage();
    }

    // --- Page Functions ---

    function initIndexPage() {
        const courseCards = document.querySelectorAll('.course-card');
        courseCards.forEach(card => {
            card.addEventListener('click', function() {
                const courseId = this.getAttribute('data-course-id');
                // Navigate to details page
                window.location.href = `course-details.html?id=${courseId}`;
            });
        });
    }

    function initCourseDetailsPage() {
        // Get Course ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const courseId = urlParams.get('id');

        const course = coursesData[courseId];
        
        if (!course) {
            // Handle invalid course ID (redirect or show error)
            document.getElementById('courseTitle').innerText = 'الدورة غير موجودة';
            return;
        }

        // Populate Header Data
        document.getElementById('courseTitle').innerText = course.title;
        document.getElementById('courseDescription').innerText = course.description;
        document.getElementById('breadcrumbCurrent').innerText = course.title;

        // Populate Lessons
        const lessonsContainer = document.getElementById('lessonsContainer');
        lessonsContainer.innerHTML = ''; // Clear loading state

        course.lessons.forEach(lesson => {
            const lessonHtml = `
                <div class="col-md-6 col-lg-3">
                    <div class="lesson-card h-100">
                        <div class="lesson-card-img-wrapper">
                            <img src="${lesson.image}" class="lesson-card-img" alt="${lesson.title}">
                            <div class="lesson-overlay">
                                <i class="fas fa-play-circle play-icon"></i>
                            </div>
                        </div>
                        <div class="card-body">
                            <span class="lesson-number">${lesson.number}</span>
                            <h5 class="card-title">${lesson.title}</h5>
                            <p class="card-text">${lesson.desc}</p>
                        </div>
                    </div>
                </div>
            `;
            lessonsContainer.insertAdjacentHTML('beforeend', lessonHtml);
        });

        // Attach click handlers to new lesson cards for login modal
        const lessonCards = document.querySelectorAll('.lesson-card');
        lessonCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                loginModal.show();
            });
        });
    }
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = loginForm.querySelector('button[type="submit"]');
            
            // Simulate processing
            submitBtn.innerText = 'جاري التحقق...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Redirect to home page
                window.location.href = 'index.html';
            }, 1500);
        });
    }

    // --- Navbar Scroll Effect ---
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
