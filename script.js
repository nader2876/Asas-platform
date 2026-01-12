document.addEventListener('DOMContentLoaded', function() {
    
    // --- Data: Courses and Lessons ---
    const coursesData = {
        1: {
            title: "نماذج التمويل والإعلانات في Meta وtiktok وSnapchat",
            description: "شرح عملي لنماذج الإعلانات، البيانات، والتمويل في منصات التواصل الاجتماعي.",
            lessons: [
                { number: "الدرس الأول", title: "كيف تحقق Meta أرباحها من Facebook ,tiktok", desc: "نظرة عامة على مصادر الدخل الرئيسية لشركة ميتا.", image: "https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثاني", title: "نظام الإعلانات في Instagram (Ads Manager)", desc: "شرح لوحة التحكم الإعلانية.", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثالث", title: "كيف يستخدم Facebook بيانات المستخدمين", desc: "قيمة البيانات الشخصية وكيف يتم جمعها.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الرابع", title: "Snapchat Ads – نموذج مختلف", desc: "نموذج إيرادات سناب شات القائم على الواقع المعزز.", image: "https://images.unsplash.com/photo-1634455845076-fa694c979d36?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الخامس", title: "Targeted Ads – كيف يتم استهدافك", desc: "آليات الاستهداف المتقدم (Retargeting).", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس السادس", title: "CPM, CPC, CPA – تسعير الإعلانات", desc: "فهم مصطلحات الدفع في سوق الإعلانات.", image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس السابع", title: "خوارزميات العرض والترتيب", desc: "كشف أسرار خوارزميات التوصية.", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثامن", title: "لماذا فشلت منصات ونجحت Meta", desc: "مقارنة مالية بين نماذج ناجحة وأخرى فشلت.", image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس التاسع", title: "الإعلانات عبر القصص (Stories)", desc: "كيف غيرت القصص شكل الإعلانات الرقمية.", image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس العاشر", title: "المحتوى المروج (Sponsored Content)", desc: "الفرق بين الإعلان المباشر والمحتوى المدفوع.", image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الحادي عشر", title: "التحليلات والمقاييس المتقدمة", desc: "قراءة لوحات البيانات المعقدة.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثاني عشر", title: "مستقبل الإعلان في الميتافيرس", desc: "نظرة استشرافية لمستقبل ميتا.", image: "https://images.unsplash.com/photo-1614728853913-1e22ba8e8c15?auto=format&fit=crop&q=80&w=600" }
            ]
        },
        2: {
            title: "أساسيات التمويل للشركات الناشئة",
            description: "تعلم كيفية إدارة الشؤون المالية للشركات الناشئة وتخطيط الميزانية.",
            lessons: [
                { number: "الدرس الأول", title: "مقدمة في الإدارة المالية", desc: "أساسيات المحاسبة والمالية لرواد الأعمال.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثاني", title: "قائمة التدفقات النقدية", desc: "كيفية قراءة وإعداد قائمة التدفقات النقدية.", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثالث", title: "مؤشرات الأداء المالي (KPIs)", desc: "أهم المؤشرات التي يجب على كل مؤسس تتبعها.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الرابع", title: "إدارة رأس المال العامل", desc: "كيف تدير السيولة اليومية لشركتك.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الخامس", title: "التخطيط المالي والموازنات", desc: "أساسيات وضع ميزانية سنوية واقعية.", image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس السادس", title: "تحليل نقطة التعادل", desc: "متى ستبدأ شركتك بتحقيق الربح؟", image: "https://images.unsplash.com/photo-1543286386-713df548e617?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس السابع", title: "الإدارة الضريبية للشركات", desc: "ما يجب أن تعرفه عن الضرائب والامتثال.", image: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثامن", title: "إدارة المخاطر المالية", desc: "التحوط ضد تقلبات السوق والعملات.", image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس التاسع", title: "تمويل الأصول الرأسمالية", desc: "الشراء مقابل الاستئجار.", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس العاشر", title: "قراءة الميزانية العمومية", desc: "الصول، الخصوم، وحقوق الملكية.", image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الحادي عشر", title: "الرقابة الداخلية والتدقيق", desc: "حماية أصول الشركة من الاحتيال.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثاني عشر", title: "الخروج والاستحواذ", desc: "التخطيط المالي لبيع الشركة.", image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=600" }
            ]
        },
        3: {
            title: "جولات التمويل والاستثمار",
            description: "دليل شامل لفهم مراحل الاستثمار (Seed – Series A – Series B).",
            lessons: [
                { number: "الدرس الأول", title: "أنواع المستثمرين", desc: "الفرق بين المستثمر الملائكي ورأس المال الجريء.", image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثاني", title: "تقييم الشركات الناشئة", desc: "كيف يتم تحديد قيمة شركتك قبل الاستثمار.", image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثالث", title: "إعداد العرض الاستثماري (Pitch Deck)", desc: "كيف تقنع المستثمرين بفكرتك.", image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الرابع", title: "مرحلة التمويل البذري (Seed)", desc: "خصائص وتحديات الجولة الأولى.", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الخامس", title: "السلسلة أ (Series A)", desc: "التوسع وتحقيق ملاءمة المنتج للسوق.", image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس السادس", title: "السلسلة ب (Series B)", desc: "النمو السريع والاستحواذ على حصة سوقية.", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس السابع", title: "ورقة الشروط (Term Sheet)", desc: "شرح البنود القانونية في عقود الاستثمار.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثامن", title: "التفاوض مع المستثمرين", desc: "استراتيجيات للحصول على أفضل صفقة.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس التاسع", title: "العناية الواجبة (Due Diligence)", desc: "ماذا يدقق المستثمرون قبل التحويل؟", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس العاشر", title: "تخفيف الملكية (Dilution)", desc: "كيف تتأثر حصتك مع كل جولة استثمار.", image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الحادي عشر", title: "خيارات الأسهم للموظفين (ESOP)", desc: "كيف تستخدم الأسهم لجذب المواهب.", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثاني عشر", title: "الاكتتاب العام (IPO)", desc: "الطريق إلى بورصة الأسهم.", image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=600" }
            ]
        },
        4: {
            title: "نماذج تحقيق الأرباح في التطبيقات الرقمية",
            description: "استراتيجيات مختلفة لتحقيق الدخل من التطبيقات والخدمات الرقمية.",
            lessons: [
                { number: "الدرس الأول", title: "Freemium vs Paid", desc: "مقارنة بين النماذج المجانية والمدفوعة.", image: "https://images.unsplash.com/photo-1526304640152-d4619684e484?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثاني", title: "الربح من خلال الاشتراكات (SaaS)", desc: "كيف تبني نموذج اشتراكات مستدام.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثالث", title: "الشراء داخل التطبيق (In-App Purchases)", desc: "استراتيجيات الألعاب والتطبيقات الخدمية.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الرابع", title: "الإعلانات داخل التطبيق", desc: "AdMob وأفضل الممارسات للربح من الإعلانات.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الخامس", title: "التسويق بالعمولة (Affiliate)", desc: "كيف تدمج روابط الأفلييت في تطبيقك.", image: "https://images.unsplash.com/photo-1563986768427-4a571f54366a?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس السادس", title: "بيع البيانات (Data Monetization)", desc: "الأخلاقيات والفرص في بيع البيانات.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس السابع", title: "النموذج الهجين (Hybrid)", desc: "دمج الإعلانات مع الاشتراكات.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثامن", title: "اقتصاديات واجهات برمجة التطبيقات (API Economy)", desc: "بيع الوصول لخدماتك البرمجية.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس التاسع", title: "التراخيص (Licensing)", desc: "ترخيص التكنولوجيا للشركات الأخرى.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس العاشر", title: "رعاية المحتوى (Sponsorships)", desc: "كيف تجذب الرعاة لتطبيقك.", image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الحادي عشر", title: "التجارة الإلكترونية المدمجة", desc: "بيع المنتجات مباشرة داخل التطبيق.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثاني عشر", title: "استراتيجيات التسعير", desc: "كيف تحدد السعر الأمثل لخدمتك.", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600" }
            ]
        },
        5: {
            title: "فهم الإعلانات الرقمية وتحليل الأداء المالي",
            description: "كيفية قراءة وتحليل الأرقام المالية للحملات الإعلانية.",
            lessons: [
                { number: "الدرس الأول", title: "عائد الاستثمار في الإعلانات (ROAS)", desc: "حساب العائد وفهم جدوى الحملات.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثاني", title: "تكلفة الاستحواذ على العميل (CAC)", desc: "حساب تكلفة جلب عميل جديد وعلاقتها بالقيمة الدائمة.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثالث", title: "القيمة الدائمة للعميل (LTV)", desc: "لماذا هي أهم رقم في شركتك.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الرابع", title: "معدل التحويل (Conversion Rate)", desc: "تحسين نسبة الزوار الذين يشترون.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الخامس", title: "نسبة النقر للظهور (CTR)", desc: "قياس جاذبية إعلاناتك.", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس السادس", title: "تحليل سلة المشتريات (AOV)", desc: "كيف تزيد متوسط قيمة الطلب.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس السابع", title: "معدل الارتداد (Bounce Rate)", desc: "فهم لماذا يغادر الزوار موقعك.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثامن", title: "نماذج الإسناد (Attribution Models)", desc: "لمن يعود الفضل في البيعة؟", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس التاسع", title: "تحليل القنوات التسويقية", desc: "تحديد أفضل القنوات أداءً.", image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس العاشر", title: "تحليل المنافسين", desc: "أدوات التجسس على إعلانات المنافسين.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الحادي عشر", title: "إعداد تقارير الأداء", desc: "كيف تقدم تقريراً مالياً للإدارة.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" },
                { number: "الدرس الثاني عشر", title: "أدوات التحليل (Google Analytics 4)", desc: "أساسيات استخدام GA4.", image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=600" }
            ]
        }
    };

    // --- Page Logic Splitter ---
    const path = window.location.pathname;
    const page = path.split("/").pop();

    // Initialize Modal (Common to both pages)
    var loginModalElement = document.getElementById('loginModal');
    var loginModal = new bootstrap.Modal(loginModalElement);
    
    // Initialize Paywall Modal (Available on both pages if element exists)
    var paywallModalElement = document.getElementById('paywallModal');
    var paywallModal = paywallModalElement ? new bootstrap.Modal(paywallModalElement) : null;


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

        // SHOW ONLY FIRST 3 LESSONS
        const visibleLessons = course.lessons.slice(0, 3);

        visibleLessons.forEach(lesson => {
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

        // Add "View More Lessons" Button if there are more lessons
        if (course.lessons.length > 3) {
            const viewMoreHtml = `
                <div class="col-12 mt-4 text-center">
                    <button id="viewMoreBtn" class="btn btn-primary-custom btn-lg shadow-sm px-5">
                        عرض المزيد من الدروس <i class="fas fa-lock ms-2"></i>
                    </button>
                    <p class="text-muted mt-2 small">يوجد ${course.lessons.length - 3} دروس إضافية</p>
                </div>
            `;
            lessonsContainer.insertAdjacentHTML('beforeend', viewMoreHtml);

            // Add Listener to View More Button
            document.getElementById('viewMoreBtn').addEventListener('click', function() {
                if (paywallModal) {
                    paywallModal.show();
                } else {
                    alert("Paywall modal not found.");
                }
            });
        }

        // Attach click handlers to newly created lesson cards for login modal (Access Denied)
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
