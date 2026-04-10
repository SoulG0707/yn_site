(() => {
  const PATHS = {
    cv: "assets/files/Pham_Thi_Yen_Ngoc_CV.pdf",
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

  const layout = `
<header>
    <div class="nav">
        <a class="brand" href="#about">
            <span class="brand-avatar">AI</span>
            <span>Phạm Thị Yến Ngọc</span>
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
                <div class="hero-badge" id="hero-badge">AI Engineer Intern</div>
                <div class="hero-title">
                    <div class="hero-name" id="hero-name">Phạm Thị Yến Ngọc</div>
                    <div class="hero-alias" id="hero-alias"></div>
                </div>
                <p class="hero-desc" id="hero-desc"></p>
                <div class="hero-actions">
                    <a class="btn primary" href="#contact"><i class="fa-solid fa-envelope"></i><span data-i18n="nav_contact">Contact</span></a>
                    <a class="btn ghost" id="btn-cv" href="${PATHS.cv}" download><i class="fa-solid fa-download"></i><span data-i18n="btn_download_cv">Download CV</span></a>
                </div>
            </div>
            <div class="hero-right">
                <div class="hero-portrait">
                    <img id="hero-photo" src="${PATHS.avatar}" alt="Avatar">
                    <span class="hero-portrait-icon"><i class="fa-regular fa-id-badge"></i></span>
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
        <div class="section-head"><div><div class="section-label" data-i18n="edu_title">Education & Activities</div><div class="section-title" data-i18n="edu_sub">Academics, English, and community.</div></div></div>
        <div class="timeline grid" id="edu-timeline"></div>
        <div class="section-head" style="margin-top:18px"><div><div class="section-label" data-i18n="cert_title">Certifications</div><div class="section-title" data-i18n="cert_sub">English</div></div></div>
        <div class="tags" id="cert-list"></div>
    </section>

    <section id="experience">
        <div class="section-head"><div><div class="section-label" data-i18n="exp_title">Work Experience</div><div class="section-title" data-i18n="exp_sub">AI product builds and delivery.</div></div></div>
        <div class="exp-timeline" id="exp-list"></div>
    </section>

    <section id="projects">
        <div class="section-head"><div><div class="section-label" data-i18n="projects_title">Projects</div><div class="section-title" data-i18n="projects_sub">Hands-on AI, computer vision, and RAG.</div></div></div>
        <div class="grid three" id="projects-grid"></div>
    </section>

    <section id="contact">
        <div class="contact-shell">
            <div class="contact-panel">
                <div class="contact-heading">
                    <div>
                        <div class="contact-title" data-i18n="contact_title">Contact & Support</div>
                        <p class="contact-subtitle" data-i18n="contact_sub">Choose the channel that fits you</p>
                    </div>
                    <div class="contact-heading-icon"><i class="fa-regular fa-envelope"></i></div>
                </div>
                <div class="contact-box" id="contact-box"></div>
            </div>
        </div>
        <div class="contact-footer" id="footer-copy">© 2026 • Phạm Thị Yến Ngọc • AI Engineer Portfolio</div>
    </section>
</main>

<button id="top" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>`;

  const content = {
    en: {
      meta_title: "Pham Thi Yen Ngoc | AI Engineer Intern",
      meta_desc:
        "AI Engineer Intern with a strong ML/data foundation, seeking opportunities to build efficient, optimized AI systems that deliver real value.",
      nav_about: "About",
      nav_skills: "Skills",
      nav_education: "Education",
      nav_experience: "Work Experience",
      nav_projects: "Projects",
      nav_contact: "Contact",
      btn_cv: "CV",
      btn_download_cv: "Download CV",
      btn_email: "Email",
      hero_eyebrow: "AI Engineer Intern",
      hero_alias: "(AI Engineer Intern)",
      hero_desc:
        "Aspiring AI engineer with strong ML/data skills; seeking early opportunities in professional teams while building efficient AI systems with real impact.",
      hero_quote:
        "Long term: build optimized AI solutions that deliver real value.",
      hero_location: "Ho Chi Minh City, Vietnam",
      edu_hero_title: "Hoa Sen University",
      edu_hero_desc:
        "AI major · Graduated with distinction; completed Data Structures and Algorithms, Web Development, Database Management, Artificial Intelligence.",
      skills_title: "Skills",
      skills_sub: "AI/ML, retrieval, and deployment.",
      skills: [
        { title: "Languages", tags: ["Python", "SQL"] },
        {
          title: "AI / ML",
          tags: [
            "Retrieval-Augmented Generation (RAG)",
            "Embeddings",
            "Semantic Search",
            "Knowledge Graph",
          ],
        },
        {
          title: "Frameworks / Libraries",
          tags: ["OpenCV", "YOLOv8", "Tesseract OCR", "LlamaIndex"],
        },
        {
          title: "Data Engineering",
          tags: [
            "Data Pipelines (PDF → JSONL → Embeddings)",
            "Unstructured Data Processing",
          ],
        },
        {
          title: "Search & Retrieval",
          tags: [
            "Vector Search",
            "Hybrid Search (Vector + Keyword)",
            "Reranking",
            "Similarity Tuning",
          ],
        },
        {
          title: "Backend / Frontend",
          tags: [
            "RESTful APIs",
            "Cloudflare Workers",
            "HTTP/JSON Integration",
            "React.js",
            "Next.js",
          ],
        },
        {
          title: "Databases",
          tags: ["Neo4j (Graph Database)", "MySQL"],
        },
        {
          title: "DevOps / Deployment",
          tags: [
            "Nginx",
            "PM2",
            "Ubuntu Server",
            "SSL (Let's Encrypt)",
            "Docker (basic)",
          ],
        },
      ],
      projects_title: "Projects",
      projects_sub: "Hands-on AI, computer vision, and RAG.",
      projects: [
        {
          date: "07/2025 - Present",
          badge: "Tourism AI Chatbot",
          title: "BlueTravel – Tourism Chatbot",
          desc: "Cloudflare Workers RAG chatbot with Neo4j Knowledge Graph and conversational memory for travel information.",
          bullets: [
            "Built intelligent tourism chatbot (BlueTravel) using Cloudflare Workers, AI Search (RAG), Neo4j, and Memori.",
            "Supported natural language Q&A for destinations, attractions, and travel information.",
            "Implemented RAG for real-time retrieval of relevant tourism data.",
            "Designed Neo4j Knowledge Graph for locations, services, and activities.",
            "Applied semantic querying to improve answer accuracy and contextual understanding.",
            "Integrated conversational memory (Memori + MCP) for context-aware interactions.",
            "Developed React/Next.js frontend and backend APIs (query, history, control).",
            "Deployed scalable system on Cloudflare with low-latency global access.",
          ],
          link: "https://github.com/SoulG0707/chatbot_tourism_AI",
        },
        {
          date: "11/2024 - 01/2025",
          badge: "Digit Recognition",
          title: "Handwritten Date Recognition",
          desc: "YOLOv8 + Tesseract OCR + CNN desktop app for handwritten date recognition (PyQt5).",
          bullets: [
            "Built handwritten date recognition system using YOLOv8, Tesseract OCR, and CNN (MNIST).",
            "Trained custom YOLO model to detect day/month/year regions in images.",
            "Applied OpenCV preprocessing (grayscale, blur, ROI extraction) to improve OCR accuracy.",
            "Implemented digit recognition using CNN trained on MNIST dataset.",
            "Developed PyQt5 GUI for user interaction and debugging.",
            "Organized file system for raw, processed, and debug outputs.",
            "Enabled extensibility for full document text recognition and analysis.",
          ],
          link: "https://github.com/SoulG0707/Handwritten_digit_recognition",
        },
        {
          date: "04/2024 - 07/2024",
          badge: "Face Recognition",
          title: "Face Recognition Attendance",
          desc: "Realtime attendance app using OpenCV, dlib, face_recognition with PyQt UI and MySQL storage.",
          bullets: [
            "Built face recognition-based attendance system using OpenCV, dlib, and face_recognition.",
            "Developed real-time face detection and recognition via webcam.",
            "Designed PyQt-based UI for live capture and user interaction.",
            "Stored facial encodings and attendance logs in MySQL database.",
            "Handled variations in lighting, angles, and facial expressions.",
            "Built admin features for user management and attendance tracking.",
            "Added notification system for successful attendance events.",
            "Ensured data security by storing encodings instead of raw images.",
          ],
          link: "https://github.com/SoulG0707/Face_Recognition",
        },
      ],
      exp_title: "Work Experience",
      exp_sub: "Fullstack AI systems and document QA chatbots.",
      experience: [
        {
          time: "Mar 2026 - Present",
          company: "Trung Tâm Lưu Trữ Quốc Gia II",
          role: "AI Engineer (Fullstack AI Systems)",
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
      edu_title: "Education & Activities",
      edu_sub: "Academics, English, and community.",
      edu: [
        {
          time: "2022 - 2026",
          place: "Hoa Sen University",
          title: "B.S. in Artificial Intelligence",
          desc: "Graduated with distinction; coursework: Data Structures and Algorithms, Web Development, Database Management, Artificial Intelligence.",
        },
        {
          time: "2022 - 2024",
          place: "HSU Youth Union",
          title: "Collaborator",
          desc: "Collaborated on university events, strengthening teamwork and communication.",
        },
      ],
      cert_title: "Certifications",
      cert_sub: "English",
      certs: [
        "TOEIC Listening & Reading: 635 (2024)",
        "TOEIC Speaking & Writing: 240 (2024)",
      ],
      contact_title: "Contact & Support",
      contact_sub: "Choose the channel that fits you.",
      contact_cta: "Connect",
      contact: [
        {
          id: "facebook",
          label: "Facebook",
          helper: "Message via Facebook",
          value: "facebook.com/ptyn.070704",
          href: "https://www.facebook.com/ptyn.070704",
          icon: "fa-brands fa-facebook-f",
          color: "#1877f2",
          bg: "rgba(24,119,242,0.12)",
          target: "_blank",
        },
        {
          id: "zalo",
          label: "Zalo",
          helper: "Connect via Zalo",
          value: "0775 601 416",
          href: "https://zalo.me/0775601416",
          icon: "fa-regular fa-comment-dots",
          color: "#008fe5",
          bg: "rgba(0,143,229,0.12)",
          target: "_blank",
        },
        {
          id: "phone",
          label: "Phone",
          helper: "Call directly",
          value: "0775 601 416",
          href: "tel:0775601416",
          icon: "fa-solid fa-phone",
          color: "#0ea5e9",
          bg: "rgba(14,165,233,0.12)",
        },
        {
          id: "email",
          label: "Gmail",
          helper: "Send email",
          value: "phamthiyenngoc77@gmail.com",
          href: "mailto:phamthiyenngoc77@gmail.com",
          icon: "fa-regular fa-envelope",
          color: "#ea4335",
          bg: "rgba(234,67,53,0.12)",
        },
      ],
      footer: "© 2026 • Pham Thi Yen Ngoc • AI Engineer Portfolio",
    },
    vi: {
      meta_title: "Phạm Thị Yến Ngọc | AI Engineer Intern",
      meta_desc:
        "Thực tập sinh AI với nền tảng ML/dữ liệu vững; tìm cơ hội xây dựng hệ thống AI tối ưu, tạo giá trị thực.",
      nav_about: "Giới thiệu",
      nav_skills: "Kỹ năng",
      nav_education: "Học tập",
      nav_experience: "Kinh nghiệm",
      nav_projects: "Dự án",
      nav_contact: "Liên hệ",
      btn_cv: "CV",
      btn_download_cv: "Tải CV",
      btn_email: "Email",
      hero_eyebrow: "Thực tập sinh Kỹ sư AI",
      hero_alias: "(AI Engineer Intern)",
      hero_desc:
        "Mong muốn trở thành kỹ sư AI với nền tảng ML và xử lý dữ liệu; tìm cơ hội sớm trong môi trường chuyên nghiệp, xây hệ thống AI hiệu quả và tạo tác động.",
      hero_quote:
        "Định hướng dài hạn: xây giải pháp AI tối ưu, mang giá trị thực.",
      hero_location: "Thành phố Hồ Chí Minh, Việt Nam",
      edu_hero_title: "Đại học Hoa Sen",
      edu_hero_desc:
        "Chuyên ngành AI · Tốt nghiệp loại Giỏi; hoàn thành Data Structures and Algorithms, Web Development, Database Management, Artificial Intelligence.",
      skills_title: "Kỹ năng",
      skills_sub: "AI/ML, truy xuất, triển khai.",
      skills: [
        { title: "Ngôn ngữ", tags: ["Python", "SQL"] },
        {
          title: "AI / ML",
          tags: [
            "Retrieval-Augmented Generation (RAG)",
            "Embeddings",
            "Semantic Search",
            "Knowledge Graph",
          ],
        },
        {
          title: "Frameworks / Thư viện",
          tags: ["OpenCV", "YOLOv8", "Tesseract OCR", "LlamaIndex"],
        },
        {
          title: "Data Engineering",
          tags: [
            "Data Pipelines (PDF → JSONL → Embeddings)",
            "Xử lý dữ liệu phi cấu trúc",
          ],
        },
        {
          title: "Search & Retrieval",
          tags: [
            "Vector Search",
            "Hybrid Search (Vector + Keyword)",
            "Reranking",
            "Similarity Tuning",
          ],
        },
        {
          title: "Backend / Frontend",
          tags: ["RESTful APIs", "Cloudflare Workers", "HTTP/JSON Integration", "React.js", "Next.js"],
        },
        {
          title: "Cơ sở dữ liệu",
          tags: ["Neo4j (Graph Database)", "MySQL"],
        },
        {
          title: "DevOps / Triển khai",
          tags: ["Nginx", "PM2", "Ubuntu Server", "SSL (Let's Encrypt)", "Docker (cơ bản)"],
        },
      ],
      projects_title: "Dự án",
      projects_sub: "Trải nghiệm AI, computer vision và RAG.",
      projects: [
        {
          date: "07/2025 - Nay",
          badge: "Tourism AI Chatbot",
          title: "BlueTravel – Chatbot du lịch",
          desc: "Chatbot du lịch trên Cloudflare Workers, kết hợp RAG, Neo4j Knowledge Graph và bộ nhớ hội thoại.",
          bullets: [
            "Xây chatbot du lịch (BlueTravel) với Cloudflare Workers, AI Search (RAG), Neo4j và Memori.",
            "Hỗ trợ hỏi đáp ngôn ngữ tự nhiên về điểm đến, địa danh, thông tin du lịch.",
            "Triển khai RAG để truy xuất dữ liệu du lịch liên quan theo thời gian thực.",
            "Thiết kế Neo4j Knowledge Graph cho địa điểm, dịch vụ, hoạt động.",
            "Áp dụng truy vấn ngữ nghĩa để nâng độ chính xác và ngữ cảnh.",
            "Tích hợp bộ nhớ hội thoại (Memori + MCP) cho tương tác theo ngữ cảnh.",
            "Phát triển frontend React/Next.js và API backend (query, history, control).",
            "Triển khai trên Cloudflare, tối ưu độ trễ toàn cầu.",
          ],
          link: "https://github.com/SoulG0707/chatbot_tourism_AI",
        },
        {
          date: "11/2024 - 01/2025",
          badge: "Digit Recognition",
          title: "Nhận dạng ngày viết tay",
          desc: "Ứng dụng desktop nhận dạng ngày viết tay (YOLOv8 + Tesseract OCR + CNN, PyQt5).",
          bullets: [
            "Xây hệ thống nhận dạng ngày viết tay bằng YOLOv8, Tesseract OCR và CNN (MNIST).",
            "Huấn luyện YOLO tùy chỉnh để phát hiện vùng ngày/tháng/năm trong ảnh.",
            "Tiền xử lý OpenCV (grayscale, blur, tách ROI) để tăng độ chính xác OCR.",
            "Nhận dạng chữ số bằng CNN huấn luyện trên MNIST.",
            "Phát triển GUI PyQt5 cho người dùng và debug.",
            "Tổ chức thư mục dữ liệu raw, processed, debug rõ ràng.",
            "Định hướng mở rộng sang nhận dạng văn bản toàn bộ tài liệu.",
          ],
          link: "https://github.com/SoulG0707/Handwritten_digit_recognition",
        },
        {
          date: "04/2024 - 07/2024",
          badge: "Face Recognition",
          title: "Điểm danh bằng khuôn mặt",
          desc: "Hệ thống điểm danh realtime với OpenCV, dlib, face_recognition; giao diện PyQt, lưu MySQL.",
          bullets: [
            "Xây hệ thống điểm danh bằng nhận dạng khuôn mặt với OpenCV, dlib, face_recognition.",
            "Phát hiện và nhận dạng realtime qua webcam.",
            "Thiết kế giao diện PyQt cho ghi hình và tương tác.",
            "Lưu mã hóa khuôn mặt và log điểm danh trong MySQL.",
            "Xử lý thay đổi ánh sáng, góc mặt, biểu cảm.",
            "Tính năng admin: quản lý người dùng, nhật ký điểm danh, thông báo.",
            "Thêm thông báo thành công khi điểm danh.",
            "Ưu tiên bảo mật: lưu encoding thay vì ảnh thô.",
          ],
          link: "https://github.com/SoulG0707/Face_Recognition",
        },
      ],
      exp_title: "Kinh nghiệm làm việc",
      exp_sub: "Xây dựng hệ thống AI fullstack và chatbot tài liệu.",
      experience: [
        {
          time: "03/2026 - Nay",
          company: "Trung Tâm Lưu Trữ Quốc Gia II",
          role: "AI Engineer (Fullstack AI Systems)",
          bullets: [
            "Xây dựng AI agent cung cấp thông tin và trả lời về hồ sơ lực lượng vũ trang tỉnh Long An.",
          ],
        },
        {
          time: "07/2025 - 12/2025",
          company: "Trung Tâm Lưu Trữ Quốc Gia II",
          role: "Thực tập sinh AI/ML Engineer",
          bullets: [
            "Xử lý tài liệu hành chính của TP.HCM và Bình Dương.",
            "Xây chatbot hỏi đáp cho tài liệu hành chính.",
          ],
        },
      ],
      edu_title: "Học tập & Hoạt động",
      edu_sub: "Kết hợp học thuật, ngoại ngữ và cộng đồng.",
      edu: [
        {
          time: "2022 - 2026",
          place: "Hoa Sen University",
          title: "Cử nhân Trí tuệ Nhân tạo",
          desc: "Tốt nghiệp loại Giỏi; học phần: Data Structures and Algorithms, Web Development, Database Management, Artificial Intelligence.",
        },
        {
          time: "2022 - 2024",
          place: "HSU Youth Union",
          title: "Cộng tác viên",
          desc: "Tham gia tổ chức sự kiện, nâng cao kỹ năng teamwork và giao tiếp.",
        },
      ],
      cert_title: "Chứng chỉ",
      cert_sub: "Tiếng Anh",
      certs: [
        "TOEIC Listening & Reading: 635 (2024)",
        "TOEIC Speaking & Writing: 240 (2024)",
      ],
      contact_title: "Liên hệ hỗ trợ",
      contact_sub: "Chọn kênh phù hợp với bạn.",
      contact_cta: "Kết nối",
      contact: [
        {
          id: "facebook",
          label: "Facebook",
          helper: "Nhắn tin qua Facebook",
          value: "facebook.com/ptyn.070704",
          href: "https://www.facebook.com/ptyn.070704",
          icon: "fa-brands fa-facebook-f",
          color: "#1877f2",
          bg: "rgba(24,119,242,0.12)",
          target: "_blank",
        },
        {
          id: "zalo",
          label: "Zalo",
          helper: "Kết nối qua Zalo",
          value: "0775 601 416",
          href: "https://zalo.me/0775601416",
          icon: "fa-regular fa-comment-dots",
          color: "#008fe5",
          bg: "rgba(0,143,229,0.12)",
          target: "_blank",
        },
        {
          id: "phone",
          label: "Điện thoại",
          helper: "Gọi trực tiếp",
          value: "0775 601 416",
          href: "tel:0775601416",
          icon: "fa-solid fa-phone",
          color: "#0ea5e9",
          bg: "rgba(14,165,233,0.12)",
        },
        {
          id: "email",
          label: "Gmail",
          helper: "Gửi email",
          value: "phamthiyenngoc77@gmail.com",
          href: "mailto:phamthiyenngoc77@gmail.com",
          icon: "fa-regular fa-envelope",
          color: "#ea4335",
          bg: "rgba(234,67,53,0.12)",
        },
      ],
      footer: "© 2026 • Phạm Thị Yến Ngọc • AI Engineer Portfolio",
    },
  };

  let navEl,
    navLinks,
    langBtns,
    topBtn,
    skillsGrid,
    projectsGrid,
    expList,
    eduTimeline,
    certList,
    contactBox,
    sections;

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
    const list = content[lang].skills
      .map(
        (item) => `
            <div class="card">
                <h3>${item.title}</h3>
                <div class="tags">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
            </div>`,
      )
      .join("");
    if (skillsGrid) skillsGrid.innerHTML = list;
  }

  function renderProjects(lang) {
    const list = content[lang].projects
      .map(
        (p) => `
            <div class="card project-card">
                <div class="meta"><span>${p.date}</span><span>${p.badge}</span></div>
                <h3>${p.title}</h3>
                <p class="muted">${p.desc}</p>
                <ul class="muted" style="margin-top:8px;display:grid;gap:6px">
                    ${p.bullets.map((b) => `<li>${b}</li>`).join("")}
                </ul>
                <div style="margin-top:12px"><a class="btn" href="${p.link}" target="_blank"><i class="fa-brands fa-github"></i>Repository</a></div>
            </div>`,
      )
      .join("");
    if (projectsGrid) projectsGrid.innerHTML = list;
  }

  function renderExperience(lang) {
    if (!expList) return;
    const list = content[lang].experience
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
    expList.innerHTML = list;
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
          return `<a class="contact-item" href="${c.href}" target="${target}" ${rel} style="--tint:${c.color || "#0ea5e9"};--tint-bg:${c.bg || "rgba(14,165,233,0.12)"};">
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
    const badgeEl = document.getElementById("hero-badge");
    const aliasEl = document.getElementById("hero-alias");
    const descEl = document.getElementById("hero-desc");
    const quoteEl = document.getElementById("hero-quote");
    const photoEl = document.getElementById("hero-photo");

    if (badgeEl) badgeEl.textContent = t.hero_eyebrow;
    document.getElementById("hero-name").textContent = "Phạm Thị Yến Ngọc";
    if (aliasEl) aliasEl.textContent = t.hero_alias || "";
    if (descEl) descEl.textContent = t.hero_desc;
    if (quoteEl) quoteEl.textContent = t.hero_quote || "";
    if (photoEl) photoEl.src = PATHS.avatar;

    const btnCv = document.getElementById("btn-cv");
    if (btnCv) btnCv.href = PATHS.cv;
    const btnCvInline = document.getElementById("btn-cv-inline");
    if (btnCvInline) btnCvInline.href = PATHS.cv;
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
})();
