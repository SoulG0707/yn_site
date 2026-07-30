(() => {
  const PATHS = {
    cv: "assets/files/Pham_Thi_Yen_Ngoc_CV_AI.pdf",
    avatar: "assets/images/avatar.png",
  };

  const NAV_ITEMS = [
    { key: "nav_about", target: "about" },
    { key: "nav_skills", target: "skills" },
    { key: "nav_education", target: "education" },
    { key: "nav_experience", target: "experience" },
    { key: "nav_projects", target: "projects" },
    { key: "nav_contact", target: "contact" },
  ];

  const profile = {
    name: "Phạm Thị Yến Ngọc",
    email: "phamthiyenngoc77@gmail.com",
    phone: "0775 601 416",
    website: "https://yenngoc.vercel.app/",
    location: "Ho Chi Minh City, Vietnam",
    github: "https://github.com/SoulG0707",
  };

  const layout = `
<header>
    <div class="nav">
        <a class="brand" href="#about">
            <span class="brand-avatar">AI</span>
            <span>${profile.name}</span>
        </a>
        <nav id="nav-links" class="nav-links"></nav>
        <div class="actions">
            <div class="lang-switch" aria-label="Language switcher">
                <button class="lang-btn" data-lang="en">EN</button>
                <button class="lang-btn" data-lang="vi">VI</button>
            </div>
            <a class="btn primary" id="btn-cv-inline" href="${PATHS.cv}" download><i class="fa-solid fa-download"></i><span data-i18n="btn_cv">CV</span></a>
        </div>
    </div>
</header>

<main class="wrap">
    <section id="about">
        <div class="hero-spotlight">
            <div class="hero-left">
                <div class="hero-badge" id="hero-badge"></div>
                <div class="hero-title">
                    <div class="hero-name" id="hero-name">${profile.name}</div>
                    <div class="hero-alias" id="hero-alias"></div>
                </div>
                <p class="hero-desc" id="hero-desc"></p>
                <div class="hero-facts" id="hero-facts"></div>
                <div class="hero-actions">
                    <a class="btn primary" href="#contact"><i class="fa-regular fa-envelope"></i><span data-i18n="nav_contact">Contact</span></a>
                    <a class="btn ghost" id="btn-cv" href="${PATHS.cv}" download><i class="fa-solid fa-download"></i><span data-i18n="btn_download_cv">Download CV</span></a>
                </div>
            </div>
            <div class="hero-right">
                <div class="hero-portrait">
                    <img id="hero-photo" src="${PATHS.avatar}" alt="${profile.name}">
                    <span class="hero-portrait-icon"><i class="fa-solid fa-brain"></i></span>
                </div>
                <div class="hero-quote" id="hero-quote"></div>
            </div>
        </div>
    </section>

    <section id="skills">
        <div class="section-head"><div><div class="section-label" data-i18n="skills_title">Skills</div><div class="section-title" data-i18n="skills_sub">AI/ML, data processing, deployment.</div></div></div>
        <div class="grid three" id="skills-grid"></div>
    </section>

    <section id="education">
        <div class="section-head"><div><div class="section-label" data-i18n="edu_title">Education</div><div class="section-title" data-i18n="edu_sub">Artificial Intelligence at Hoa Sen University.</div></div></div>
        <div class="timeline grid" id="edu-timeline"></div>
        <div class="section-head compact-head"><div><div class="section-label" data-i18n="cert_title">Certifications</div><div class="section-title" data-i18n="cert_sub">English proficiency.</div></div></div>
        <div class="tags" id="cert-list"></div>
    </section>

    <section id="experience">
        <div class="section-head"><div><div class="section-label" data-i18n="exp_title">Work Experience</div><div class="section-title" data-i18n="exp_sub">AI agents and document Q&A systems.</div></div></div>
        <div class="exp-timeline" id="exp-list"></div>
    </section>

    <section id="projects">
        <div class="section-head"><div><div class="section-label" data-i18n="projects_title">Projects</div><div class="section-title" data-i18n="projects_sub">RAG, OCR, and computer vision builds.</div></div></div>
        <div class="grid three" id="projects-grid"></div>
    </section>

    <section id="contact">
        <div class="contact-shell">
            <div class="contact-panel">
                <div class="contact-heading">
                    <div>
                        <div class="contact-title" data-i18n="contact_title">Contact</div>
                        <p class="contact-subtitle" data-i18n="contact_sub">Available in Ho Chi Minh City, Vietnam.</p>
                    </div>
                    <div class="contact-heading-icon"><i class="fa-regular fa-address-card"></i></div>
                </div>
                <div class="contact-box" id="contact-box"></div>
            </div>
        </div>
        <div class="contact-footer" id="footer-copy"></div>
    </section>
</main>

<button id="top" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>`;

  const content = {
    en: {
      meta_title: "Pham Thi Yen Ngoc | AI Engineer Intern",
      meta_desc:
        "AI Engineer Intern portfolio focused on machine learning, RAG, knowledge graphs, OCR, and computer vision.",
      nav_about: "About",
      nav_skills: "Skills",
      nav_education: "Education",
      nav_experience: "Experience",
      nav_projects: "Projects",
      nav_contact: "Contact",
      btn_cv: "CV",
      btn_download_cv: "Download CV",
      hero_eyebrow: "AI Engineer Intern",
      hero_alias: "Machine Learning · RAG · Computer Vision",
      hero_desc:
        "Aspiring AI engineer with a strong foundation in machine learning and data processing, seeking opportunities to gain experience and contribute to efficient, high-impact AI systems that deliver real value.",
      hero_quote:
        "Focused on practical AI systems: retrieval, document understanding, OCR, and knowledge-driven Q&A.",
      skills_title: "Skills",
      skills_sub: "AI/ML, data processing, deployment.",
      skills: [
        {
          title: "Programming & Frontend",
          tags: ["Python", "SQL", "React.js", "Next.js", "Figma"],
        },
        {
          title: "AI/ML & Data",
          tags: [
            "RAG",
            "Embeddings",
            "Semantic Search",
            "Knowledge Graph",
            "Neo4j",
            "Vector Search",
          ],
        },
        {
          title: "Backend & DevOps",
          tags: ["REST APIs", "Cloudflare Workers", "Docker", "Nginx", "PM2"],
        },
        {
          title: "Tools",
          tags: ["OpenCV", "YOLOv8", "Tesseract OCR", "LlamaIndex"],
        },
      ],
      edu_title: "Education",
      edu_sub: "Artificial Intelligence at Hoa Sen University.",
      edu: [
        {
          time: "2022 - present",
          place: "Hoa Sen University",
          title: "Bachelor of Science in Artificial Intelligence",
          desc: "Completed the Artificial Intelligence program with a GPA of 3.2/4.0; awaiting degree conferral.",
        },
      ],
      cert_title: "Certifications",
      cert_sub: "English proficiency.",
      certs: [
        "TOEIC Listening & Reading: 635 (2024)",
        "TOEIC Speaking & Writing: 240 (2024)",
      ],
      exp_title: "Work Experience",
      exp_sub: "AI agents and document Q&A systems.",
      experience: [
        {
          time: "Mar 2026 - Jun 2026",
          company: "Trung Tâm Lưu Trữ Quốc Gia II",
          role: "AI Engineer Intern",
          bullets: [
            "Built an AI agent to provide information and answer questions about heroic armed forces personnel records in Long An Province.",
          ],
        },
        {
          time: "Jul 2025 - Dec 2025",
          company: "Trung Tâm Lưu Trữ Quốc Gia II",
          role: "AI/ML Engineer Intern",
          bullets: [
            "Processed administrative documents from Ho Chi Minh City and Binh Duong.",
            "Built a Q&A chatbot for administrative documents.",
          ],
        },
      ],
      projects_title: "Projects",
      projects_sub: "RAG, OCR, and computer vision builds.",
      projects: [
        {
          date: "Jul 2025 - Dec 2025",
          badge: "RAG · Neo4j",
          title: "Tourism AI Chatbot",
          desc: "Built an AI-powered chatbot using RAG, Neo4j Knowledge Graph, and Cloudflare Workers, enabling semantic Q&A with contextual understanding.",
          bullets: [
            "Developed a fullstack system with React/Next.js and APIs.",
            "Used knowledge graph and semantic retrieval to improve contextual answers.",
          ],
          link: "https://github.com/SoulG0707/chatbot_tourism_AI",
        },
        {
          date: "Nov 2024 - Jan 2025",
          badge: "YOLOv8 · OCR",
          title: "Handwritten Digit Recognition",
          desc: "Built a handwritten date recognition system using YOLOv8, Tesseract OCR, and CNN.",
          bullets: [
            "Applied OpenCV preprocessing for image cleanup and region extraction.",
            "Developed a PyQt5 GUI for interaction and recognition workflow.",
          ],
          link: "https://github.com/SoulG0707/Handwritten_digit_recognition",
        },
        {
          date: "Apr 2024 - Jul 2024",
          badge: "OpenCV",
          title: "Face Recognition",
          desc: "Built a real-time face recognition system using OpenCV and face_recognition.",
          bullets: [
            "Stored attendance data in MySQL.",
            "Developed UI and admin features for attendance management.",
          ],
          link: "https://github.com/SoulG0707/Face_Recognition",
        },
      ],
      contact_title: "Contact",
      contact_sub: "Available in Ho Chi Minh City, Vietnam.",
      contact: [
        {
          label: "Email",
          helper: "Send email",
          value: profile.email,
          href: `mailto:${profile.email}`,
          icon: "fa-regular fa-envelope",
          color: "#ea4335",
          bg: "rgba(234,67,53,0.12)",
        },
        {
          label: "Phone",
          helper: "Call directly",
          value: profile.phone,
          href: "tel:0775601416",
          icon: "fa-solid fa-phone",
          color: "#0ea5e9",
          bg: "rgba(14,165,233,0.12)",
        },
        {
          label: "Portfolio",
          helper: "Visit website",
          value: "yenngoc.vercel.app",
          href: profile.website,
          icon: "fa-solid fa-globe",
          color: "#22c55e",
          bg: "rgba(34,197,94,0.12)",
          target: "_blank",
        },
        {
          label: "GitHub",
          helper: "View repositories",
          value: "github.com/SoulG0707",
          href: profile.github,
          icon: "fa-brands fa-github",
          color: "#cbd5e1",
          bg: "rgba(203,213,225,0.12)",
          target: "_blank",
        },
      ],
      footer: "© 2026 • Pham Thi Yen Ngoc • AI Engineer Portfolio",
    },
    vi: {
      meta_title: "Phạm Thị Yến Ngọc | AI Engineer Intern",
      meta_desc:
        "Portfolio AI Engineer Intern tập trung vào machine learning, RAG, knowledge graph, OCR và computer vision.",
      nav_about: "Giới thiệu",
      nav_skills: "Kỹ năng",
      nav_education: "Học vấn",
      nav_experience: "Kinh nghiệm",
      nav_projects: "Dự án",
      nav_contact: "Liên hệ",
      btn_cv: "CV",
      btn_download_cv: "Tải CV",
      hero_eyebrow: "AI Engineer Intern",
      hero_alias: "Machine Learning · RAG · Computer Vision",
      hero_desc:
        "Ứng viên AI Engineer có nền tảng tốt về machine learning và xử lý dữ liệu, mong muốn tích lũy kinh nghiệm và đóng góp vào các hệ thống AI hiệu quả, có tác động thực tế.",
      hero_quote:
        "Tập trung vào hệ thống AI thực tiễn: truy xuất thông tin, hiểu tài liệu, OCR và hỏi đáp dựa trên tri thức.",
      skills_title: "Kỹ năng",
      skills_sub: "AI/ML, xử lý dữ liệu, triển khai.",
      skills: [
        {
          title: "Lập trình & Frontend",
          tags: ["Python", "SQL", "React.js", "Next.js", "Figma"],
        },
        {
          title: "AI/ML & Dữ liệu",
          tags: [
            "RAG",
            "Embeddings",
            "Semantic Search",
            "Knowledge Graph",
            "Neo4j",
            "Vector Search",
          ],
        },
        {
          title: "Backend & DevOps",
          tags: ["REST APIs", "Cloudflare Workers", "Docker", "Nginx", "PM2"],
        },
        {
          title: "Công cụ",
          tags: ["OpenCV", "YOLOv8", "Tesseract OCR", "LlamaIndex"],
        },
      ],
      edu_title: "Học vấn",
      edu_sub: "Chuyên ngành Trí tuệ Nhân tạo tại Đại học Hoa Sen.",
      edu: [
        {
          time: "2022 - hiện tại",
          place: "Hoa Sen University",
          title: "Cử nhân Khoa học ngành Trí tuệ Nhân tạo",
          desc: "Hoàn thành chương trình Trí tuệ Nhân tạo với GPA 3.2/4.0; đang chờ cấp bằng.",
        },
      ],
      cert_title: "Chứng chỉ",
      cert_sub: "Năng lực tiếng Anh.",
      certs: [
        "TOEIC Listening & Reading: 635 (2024)",
        "TOEIC Speaking & Writing: 240 (2024)",
      ],
      exp_title: "Kinh nghiệm làm việc",
      exp_sub: "AI agent và hệ thống hỏi đáp tài liệu.",
      experience: [
        {
          time: "03/2026 - 06/2026",
          company: "Trung Tâm Lưu Trữ Quốc Gia II",
          role: "AI Engineer Intern",
          bullets: [
            "Xây dựng AI agent cung cấp thông tin và trả lời câu hỏi về hồ sơ lực lượng vũ trang anh hùng tại tỉnh Long An.",
          ],
        },
        {
          time: "07/2025 - 12/2025",
          company: "Trung Tâm Lưu Trữ Quốc Gia II",
          role: "AI/ML Engineer Intern",
          bullets: [
            "Xử lý tài liệu hành chính từ TP. Hồ Chí Minh và Bình Dương.",
            "Xây dựng chatbot hỏi đáp cho tài liệu hành chính.",
          ],
        },
      ],
      projects_title: "Dự án",
      projects_sub: "RAG, OCR và computer vision.",
      projects: [
        {
          date: "07/2025 - 12/2025",
          badge: "RAG · Neo4j",
          title: "Tourism AI Chatbot",
          desc: "Xây chatbot AI dùng RAG, Neo4j Knowledge Graph và Cloudflare Workers, hỗ trợ hỏi đáp ngữ nghĩa có hiểu ngữ cảnh.",
          bullets: [
            "Phát triển hệ thống fullstack với React/Next.js và APIs.",
            "Dùng knowledge graph và semantic retrieval để cải thiện câu trả lời theo ngữ cảnh.",
          ],
          link: "https://github.com/SoulG0707/chatbot_tourism_AI",
        },
        {
          date: "11/2024 - 01/2025",
          badge: "YOLOv8 · OCR",
          title: "Handwritten Digit Recognition",
          desc: "Xây hệ thống nhận dạng ngày viết tay bằng YOLOv8, Tesseract OCR và CNN.",
          bullets: [
            "Áp dụng tiền xử lý OpenCV để làm sạch ảnh và tách vùng nhận dạng.",
            "Phát triển giao diện PyQt5 cho luồng tương tác và nhận dạng.",
          ],
          link: "https://github.com/SoulG0707/Handwritten_digit_recognition",
        },
        {
          date: "04/2024 - 07/2024",
          badge: "OpenCV",
          title: "Face Recognition",
          desc: "Xây hệ thống nhận dạng khuôn mặt thời gian thực bằng OpenCV và face_recognition.",
          bullets: [
            "Lưu dữ liệu điểm danh trong MySQL.",
            "Phát triển giao diện và tính năng quản trị cho việc điểm danh.",
          ],
          link: "https://github.com/SoulG0707/Face_Recognition",
        },
      ],
      contact_title: "Liên hệ",
      contact_sub: "Sẵn sàng làm việc tại Thành phố Hồ Chí Minh, Việt Nam.",
      contact: [
        {
          label: "Email",
          helper: "Gửi email",
          value: profile.email,
          href: `mailto:${profile.email}`,
          icon: "fa-regular fa-envelope",
          color: "#ea4335",
          bg: "rgba(234,67,53,0.12)",
        },
        {
          label: "Điện thoại",
          helper: "Gọi trực tiếp",
          value: profile.phone,
          href: "tel:0775601416",
          icon: "fa-solid fa-phone",
          color: "#0ea5e9",
          bg: "rgba(14,165,233,0.12)",
        },
        {
          label: "Portfolio",
          helper: "Xem website",
          value: "yenngoc.vercel.app",
          href: profile.website,
          icon: "fa-solid fa-globe",
          color: "#22c55e",
          bg: "rgba(34,197,94,0.12)",
          target: "_blank",
        },
        {
          label: "GitHub",
          helper: "Xem repositories",
          value: "github.com/SoulG0707",
          href: profile.github,
          icon: "fa-brands fa-github",
          color: "#cbd5e1",
          bg: "rgba(203,213,225,0.12)",
          target: "_blank",
        },
      ],
      footer: "© 2026 • Phạm Thị Yến Ngọc • AI Engineer Portfolio",
    },
  };

  let navEl;
  let navLinks;
  let langBtns;
  let topBtn;
  let skillsGrid;
  let projectsGrid;
  let expList;
  let eduTimeline;
  let certList;
  let contactBox;
  let sections;

  document.addEventListener("DOMContentLoaded", () => {
    mountLayout();
    cacheDom();
    buildNav();
    setLanguage("en");
    initLangSwitch();
    initBackToTop();
    initNavSmoothScroll();
    initScrollSpy();
  });

  function mountLayout() {
    const app = document.getElementById("app");
    if (app) app.innerHTML = layout;
  }

  function cacheDom() {
    navEl = document.getElementById("nav-links");
    langBtns = [...document.querySelectorAll(".lang-btn")];
    topBtn = document.getElementById("top");
    skillsGrid = document.getElementById("skills-grid");
    projectsGrid = document.getElementById("projects-grid");
    expList = document.getElementById("exp-list");
    eduTimeline = document.getElementById("edu-timeline");
    certList = document.getElementById("cert-list");
    contactBox = document.getElementById("contact-box");
    sections = [...document.querySelectorAll("main section")];
  }

  function buildNav() {
    if (!navEl) return;
    navEl.innerHTML = NAV_ITEMS.map(
      (item) => `<a href="#${item.target}" data-i18n="${item.key}"></a>`,
    ).join("");
    navLinks = [...navEl.querySelectorAll("a")];
    if (navLinks.length) navLinks[0].classList.add("active");
  }

  function renderSkills(lang) {
    if (!skillsGrid) return;
    skillsGrid.innerHTML = content[lang].skills
      .map(
        (item) => `
            <div class="card">
                <h3>${item.title}</h3>
                <div class="tags">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
            </div>`,
      )
      .join("");
  }

  function renderProjects(lang) {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = content[lang].projects
      .map(
        (p) => `
            <div class="card project-card">
                <div class="meta"><span>${p.date}</span><span>${p.badge}</span></div>
                <h3>${p.title}</h3>
                <p class="muted">${p.desc}</p>
                <ul class="muted project-bullets">
                    ${p.bullets.map((b) => `<li>${b}</li>`).join("")}
                </ul>
                <div class="card-action"><a class="btn" href="${p.link}" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i>Repository</a></div>
            </div>`,
      )
      .join("");
  }

  function renderExperience(lang) {
    if (!expList) return;
    expList.innerHTML = content[lang].experience
      .map(
        (item) => `
            <div class="exp-item">
                <div class="exp-dot"></div>
                <div class="card exp-card">
                    <div class="exp-meta">
                        <span class="exp-time">${item.time}</span>
                        <span class="exp-role">${item.role}</span>
                    </div>
                    <h3>${item.company}</h3>
                    <ul class="muted exp-bullets">
                        ${item.bullets.map((b) => `<li>${b}</li>`).join("")}
                    </ul>
                </div>
            </div>`,
      )
      .join("");
  }

  function renderEducation(lang) {
    if (eduTimeline) {
      eduTimeline.innerHTML = content[lang].edu
        .map(
          (item) => `
                <div class="card">
                    <div class="meta"><span>${item.time}</span><span>${item.place}</span></div>
                    <strong>${item.title}</strong>
                    <p class="muted">${item.desc}</p>
                </div>`,
        )
        .join("");
    }
    if (certList) {
      certList.innerHTML = content[lang].certs
        .map((c) => `<span class="tag">${c}</span>`)
        .join("");
    }
  }

  function renderContact(lang) {
    if (contactBox) {
      contactBox.innerHTML = content[lang].contact
        .map((c) => {
          const target = c.target || "_self";
          const rel = target === "_blank" ? 'rel="noreferrer"' : "";
          return `<a class="contact-item" href="${c.href}" target="${target}" ${rel} style="--tint:${c.color};--tint-bg:${c.bg};">
                    <span class="contact-icon"><i class="${c.icon}"></i></span>
                    <span class="contact-body">
                        <span class="contact-label">${c.label}</span>
                        <span class="contact-helper">${c.helper}</span>
                        <span class="contact-value">${c.value}</span>
                    </span>
                </a>`;
        })
        .join("");
    }
    const footer = document.getElementById("footer-copy");
    if (footer) footer.textContent = content[lang].footer;
  }

  function renderHero(lang) {
    const t = content[lang];
    const facts = [
      { icon: "fa-solid fa-location-dot", text: profile.location },
      { icon: "fa-regular fa-envelope", text: profile.email },
      { icon: "fa-solid fa-phone", text: profile.phone },
    ];

    setText("hero-badge", t.hero_eyebrow);
    setText("hero-name", profile.name);
    setText("hero-alias", t.hero_alias);
    setText("hero-desc", t.hero_desc);
    setText("hero-quote", t.hero_quote);

    const factsEl = document.getElementById("hero-facts");
    if (factsEl) {
      factsEl.innerHTML = facts
        .map((fact) => `<span><i class="${fact.icon}"></i>${fact.text}</span>`)
        .join("");
    }

    const photoEl = document.getElementById("hero-photo");
    if (photoEl) photoEl.src = PATHS.avatar;

    const cvButtons = [
      document.getElementById("btn-cv"),
      document.getElementById("btn-cv-inline"),
    ];
    cvButtons.forEach((button) => {
      if (button) button.href = PATHS.cv;
    });
  }

  function renderStaticText(lang) {
    const t = content[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });
    document.title = t.meta_title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.meta_desc);
  }

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    renderStaticText(lang);
    renderHero(lang);
    renderSkills(lang);
    renderEducation(lang);
    renderExperience(lang);
    renderProjects(lang);
    renderContact(lang);
    langBtns.forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.lang === lang),
    );
  }

  function initBackToTop() {
    if (!topBtn) return;
    window.addEventListener("scroll", () => {
      topBtn.classList.toggle("show", window.scrollY > 240);
    });
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function initNavSmoothScroll() {
    if (!navLinks) return;
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  function initScrollSpy() {
    if (!navLinks || !sections) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => link.classList.remove("active"));
          const current = document.querySelector(
            `header nav a[href="#${entry.target.id}"]`,
          );
          if (current) current.classList.add("active");
        });
      },
      { threshold: 0.4 },
    );
    sections.forEach((section) => observer.observe(section));
  }

  function initLangSwitch() {
    langBtns.forEach((btn) =>
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang)),
    );
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value || "";
  }
})();
