/* 
   Lloyd Jernell Loteriña Portfolio - Scripts
   Core Interaction, Theme Toggle, Scrollspy, Filters, Modals
*/

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initSmoothScroll();
    initScrollReveal();
    initScrollSpy();
    initProjectFilters();
    initProjectModals();
    initContactForm();
    initBackToTop();
});

// --- Theme Management ---
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');

    // Check for saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            document.body.removeAttribute('data-theme');
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
        localStorage.setItem('theme', theme);
    }
}

// --- Mobile Menu ---
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = navLinks.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('mobile-active');
        const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
        hamburger.setAttribute('aria-expanded', !expanded);
    });

    // Close menu when link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('mobile-active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

// --- Smooth Scroll ---
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const pos = target.offsetTop - navHeight;
                window.scrollTo({
                    top: pos,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// --- Interaction Observer for Revel Animations ---
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));
}

// --- Scrollspy ---
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        const navHeight = document.querySelector('.navbar').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - (navHeight + 20);
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });
}

// --- Project Filters ---
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || filter === category) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
}

// --- Project Modals ---
const projectData = {
    '1': {
        title: 'MATHTatag – Capstone Project',
        tags: ['Academic', 'Capstone'],
        problem: 'Grade 1 mathematics assessment often lacks interactive tools that allow teachers to monitor and analyze learner performance in real-time.',
        solution: 'Developed an academic capstone mobile learning application featuring role-based dashboards for teachers to create assessments and analyze results. Integrates Filipino text-to-speech for better accessibility.',
        features: [
            'System overview and teacher/student workflow dashboards',
            'AI-Powered Assessment Question Generation (Gemini Integration)',
            'Implemented assessment and performance monitoring features',
            'Integrated Filipino text-to-speech for accessibility',
            'Role-based dashboards for real-time data analysis',
            'Tested and evaluated for academic system requirements'
        ],
        tech: ['React Native', 'Firebase', 'Google Gemini AI', 'TTS Integration'],
        role: 'Documentation Lead, Quality Assurance (QA), and UI Contributor',
        responsibilities: [
            'Lead student for project documentation and research writing',
            'Assisted in AI Integration (Gemini) for assessment generation',
            'Conducted Quality Assurance (QA) testing and debugging',
            'Co-contributed to the UI design and layout',
            'Assisted in data management and Firebase integration',
            'Participated in system evaluation and usability testing'
        ],
        video: '<div class="video-container" style="margin-top:20px;"><div style="background:#000; aspect-ratio:16/9; display:flex; align-items:center; justify-content:center; color:#fff; border-radius:8px;">[Project Demo Video Placeholder]</div><p style="font-size:0.85rem; color:var(--text-muted); margin-top:10px; text-align:center;">Project Demo / Explanation Video: Shows system overview, workflow, and feature demonstration.</p></div>',
        docs: 'assets/docs/Group 1 Chapter 1-5 FINAL.pdf',
        team: [
            'Ken P. Cas — Project Leader / Backend Developer',
            'Lloyd Jernell Loteriña — Documentation Lead, Quality Assurance, UI Contributor',
            'Engelbert Morales — UI/UX Lead, Quality Assurance, Documentation',
            'Cedick Artiaga — Developer'
        ],
        learnings: 'Gained hands-on experience in application logic, team collaboration, and the importance of accurate documentation and QA in a capstone project.'
    },
    '2': {
        title: 'Art Appreciation Website (Academic Web Project)',
        tags: ['Academic Project', 'Solo', 'Web'],
        problem: 'Navigating through vast art history and cultural masterpieces can be overwhelming without a structured and visual presentation.',
        solution: 'Developed a solo academic website that categorizes different forms of art—visual, performing, theater, and literary—specifically for an Art Appreciation course.',
        features: [
            'Categorized Art Sections (Visual, Performing, Literary, Theater)',
            'Famous Artworks & Cultural Highlights',
            'Image-Based Gallery Layout',
            'Smooth User-Friendly Navigation',
            'Fully Responsive Design'
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'VS Code'],
        role: 'Sole Developer',
        responsibilities: [
            'Designed and built the entire project from scratch',
            'Curated and Categorized artistic content and metadata',
            'Implemented a gallery-style image presentation',
            'Ensured consistent layout across desktop and mobile',
            'Managed all visual assets and navigation logic'
        ],
        learnings: 'Improved my web design fundamentals and learned how to present large amounts of visual information in a clean, professional way.'
    },
    '3': {
        title: 'Fortress Security Agency – Guard & Salary Management System',
        tags: ['Academic Final Project', 'Database Administration'],
        problem: 'Security agencies often struggle with manual record-keeping for guard attendance, complex shift scheduling, and error-prone salary computations.',
        solution: 'Developed a dedicated desktop application to automate guard information management, attendance tracking, and salary computation as a final project for Database Administration (3rd Year, 1st Sem).',
        features: [
            'Automated Guard Information Management',
            'Relational Database for Attendance & Shift Logs',
            'Automated Salary Computation Logic',
            'Structured Shift Scheduling System',
            'Tested for Database Integrity and System Validation'
        ],
        tech: ['C#', 'Microsoft SQL Server', 'Visual Studio'],
        role: 'Sole Developer (Documentation, QA, and UI Design)',
        responsibilities: [
            'Designed and developed the entire system independently',
            'Designed the relational database schema and SQL queries',
            'Implemented attendance, scheduling, and salary computation features',
            'Designed UI forms and system layout',
            'Performed testing, debugging, and validation',
            'Created complete system documentation'
        ],
        learnings: 'Mastered relational database design and C# integration. Learned to translate complex administrative workflows into a structured software solution.'
    },
    '4': {
        title: 'AssetTrack Inventory',
        tags: ['Academic Concept', 'Web'],
        problem: 'Manual inventory tracking leads to high error rates and missing equipment in shared academic settings.',
        solution: 'Designed a web-based asset tracking concept for hardware inventory, including assignment logs and schedules.',
        features: ['Asset Lifetime Tracking', 'QR Code Generation (Concept)', 'User Assignment History', 'CSV Data Export'],
        tech: ['JavaScript', 'LocalStorage API', 'Responsive Tables'],
        learnings: 'Enhanced my data management skills and learned to prioritize asset visibility for departmental administration.'
    },
    '5': {
        title: 'Kayumanggi E-Commerce Website (Frontend)',
        tags: ['Frontend Project', 'Web Development'],
        problem: 'Establishing a cohesive online visual identity for local Filipino products often requires a custom frontend that reflects cultural roots.',
        solution: 'Built a frontend-only e-commerce website to promote local Filipino products, featuring a custom brown-and-white aesthetic inspired by "kayumanggi".',
        features: [
            'Dynamic product listing layout',
            'Interactive shopping cart logic (JavaScript)',
            'Simulated checkout and purchase flow',
            'Responsive design for desktop and mobile',
            'Culturally-inspired color palette'
        ],
        tech: ['HTML5', 'Vanilla CSS', 'JavaScript (ES6)'],
        role: 'Frontend Developer (Solo Academic Project)',
        responsibilities: [
            'Designed the UI with a "Kayumanggi" brown-and-white color palette',
            'Implemented shopping cart functionality using Vanilla JavaScript',
            'Structured the frontend-only architecture (no backend/database)',
            'Ensured full responsiveness across different screen sizes',
            'Developed simulated purchase user flows'
        ],
        learnings: 'Gained a deeper understanding of bridging JavaScript logic with CSS styling to create a functional, aesthetically focused user experience.'
    }
};

function initProjectModals() {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const openBtns = document.querySelectorAll('.open-modal');
    const closeBtn = document.querySelector('.modal-close');
    const overlay = document.querySelector('.modal-overlay');

    function openModal(projectId) {
        const data = projectData[projectId];
        if (!data) return;

        modalContent.innerHTML = `
            <span class="project-tag">${data.tags.join(' / ')}</span>
            <h2 style="margin-top: 10px;">${data.title}</h2>
            
            <div style="margin: 24px 0;">
                <h4 class="text-accent">The Problem</h4>
                <p style="margin-bottom: 20px;">${data.problem}</p>
                
                <h4 class="text-accent">The Solution</h4>
                <p style="margin-bottom: 20px;">${data.solution}</p>
                
                <h4 class="text-accent">Key Features</h4>
                <ul class="modal-feature-list">
                    ${data.features.map(f => `<li>${f}</li>`).join('')}
                </ul>

                ${data.responsibilities ? `
                <h4 class="text-accent">My Responsibilities</h4>
                <ul class="modal-feature-list" style="margin-bottom: 20px;">
                    ${data.responsibilities.map(r => `<li>${r}</li>`).join('')}
                </ul>` : ''}

                ${data.team ? `
                <h4 class="text-accent">Project Team – MATHTatag</h4>
                <ul class="modal-feature-list" style="margin-bottom: 20px;">
                    ${data.team.map(m => `<li>${m}</li>`).join('')}
                </ul>` : ''}

                <h4 class="text-accent">What I Learned</h4>
                <p>${data.learnings}</p>

                ${data.video ? data.video : ''}
            </div>

            <div class="project-links" style="border-top: 1px solid var(--border); padding-top: 24px;">
                <div>
                   <strong>Tools Used:</strong> ${data.tech.join(', ')}
                </div>
                <div style="display: flex; gap: 12px;">
                    <a href="${data.docs || 'assets/Lloyd Jernell C. - RESUME.pdf'}" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.8rem;" ${data.docs ? 'target="_blank"' : 'download'}>
                        ${data.docs ? 'View Project Document' : 'View Full Document'}
                    </a>
                    <a href="#" class="btn btn-secondary" style="padding: 8px 16px; font-size: 0.8rem;">GitHub</a>
                </div>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        modal.setAttribute('aria-hidden', 'false');

        // Trap focus (basic)
        closeBtn.focus();
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        modal.setAttribute('aria-hidden', 'true');
    }

    openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-project');
            openModal(id);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Keyboard ESC to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// --- Contact Form ---
function initContactForm() {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    const submitBtn = document.getElementById('form-submit');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic Validation
        if (!name || !email || !message) return;

        // Visual feedback
        submitBtn.disabled = true;
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Redirecting...';

        // Construct Mailto URL
        const recipient = 'lloydjernell17@gmail.com';
        const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`
        );

        const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

        // Trigger email client
        window.location.href = mailtoUrl;

        // Show success message and reset form
        setTimeout(() => {
            successMsg.style.display = 'block';
            successMsg.textContent = 'Opening your email client...';
            submitBtn.textContent = 'Message Ready';
            form.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMsg.style.display = 'none';
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 5000);
        }, 1000);
    });
}

// --- Back to Top ---
function initBackToTop() {
    const btn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.style.display = 'flex';
        } else {
            btn.style.display = 'none';
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
