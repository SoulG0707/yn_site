(() => {
  const PATHS = {
    cv: "assets/files/Pham_Thi_Yen_Ngoc_CV_AI.pdf",
    avatar: "assets/images/avatar.png",
  };

  const NAV_ITEMS = [
    { key: "nav_about", target: "about" },
    { key: "nav_projects", target: "projects" },
    { key: "nav_experience", target: "experience" },
    { key: "nav_skills", target: "skills" },
    { key: "nav_contact", target: "contact" },
  ];

  const profile = {
    name: "Phạm Thị Yến Ngọc",
    email: "phamthiyenngoc77@gmail.com",
    phone: "0775 601 416",
    github: "https://github.com/SoulG0707",
  };

  const layout = `
<header class="site-header">
    <div class="nav">
        <a class="brand" href="#home" aria-label="${profile.name}">YN<span>.</span></a>
        <nav id="nav-links" class="nav-links"></nav>
        <div class="actions">
            <div class="lang-switch" id="lang-switch">
                <button class="lang-btn" data-lang="en" type="button">EN</button>
                <button class="lang-btn" data-lang="vi" type="button">VI</button>
            </div>
            <a class="btn resume-btn" id="btn-cv-inline" href="${PATHS.cv}" download><span data-i18n="btn_cv">Resume</span></a>
            <button class="menu-toggle" id="menu-toggle" type="button" aria-controls="nav-links" aria-expanded="false"><span data-i18n="menu_label">Menu</span><i class="fa-solid fa-bars" aria-hidden="true"></i></button>
        </div>
    </div>
</header>

<main class="wrap">
    <section id="home" class="hero" aria-labelledby="hero-name">
        <p class="hero-eyebrow" id="hero-eyebrow"></p>
        <h1 class="hero-name" id="hero-name">${profile.name}.</h1>
        <p class="hero-statement" id="hero-statement"></p>
        <p class="hero-desc" id="hero-desc"></p>
        <div class="hero-actions">
            <a class="btn primary" href="#projects" data-i18n="btn_view_projects">Explore My Work</a>
            <a class="btn ghost" id="btn-cv" href="${PATHS.cv}" download data-i18n="btn_download_cv">Download CV</a>
        </div>
    </section>

    <section id="about" aria-labelledby="about-title">
        <div class="section-head"><h2 class="section-label" id="about-title" data-i18n="about_title">About Me</h2></div>
        <div class="about-grid">
            <div class="about-copy" id="about-copy"></div>
            <img class="about-photo" id="about-photo" src="${PATHS.avatar}" alt="${profile.name}" loading="lazy" decoding="async">
        </div>
    </section>

    <section id="projects" aria-labelledby="projects-title">
        <div class="section-head"><h2 class="section-label" id="projects-title" data-i18n="projects_title">Projects</h2><p class="section-title" data-i18n="projects_sub">AI, computer vision, and LLM applications.</p></div>
        <h3 class="group-title" data-i18n="featured_title">Featured projects</h3>
        <div id="featured-projects" class="featured-projects"></div>
        <h3 class="group-title other-title" data-i18n="other_title">Other projects</h3>
        <div id="other-projects" class="other-projects"></div>
    </section>

    <section id="experience" aria-labelledby="exp-title">
        <div class="section-head"><h2 class="section-label" id="exp-title" data-i18n="exp_title">Experience</h2><p class="section-title" data-i18n="exp_sub">Software engineering, DevOps, and AI systems.</p></div>
        <div class="exp-timeline" id="exp-list"></div>
    </section>

    <section id="skills" aria-labelledby="skills-title">
        <div class="section-head"><h2 class="section-label" id="skills-title" data-i18n="skills_title">Technical Skills</h2><p class="section-title" data-i18n="skills_sub">Tools and technologies I work with.</p></div>
        <div id="skills-grid"></div>
    </section>

    <section id="education" aria-labelledby="edu-title">
        <div class="section-head"><h2 class="section-label" id="edu-title" data-i18n="edu_title">Education</h2></div>
        <div id="edu-timeline"></div>
        <div class="section-head compact-head"><h3 class="section-label" data-i18n="cert_title">Certifications</h3></div>
        <div class="tags" id="cert-list"></div>
    </section>

    <section id="contact" class="contact-section" aria-labelledby="contact-title">
        <p class="contact-eyebrow" data-i18n="contact_eyebrow">What's Next?</p>
        <h2 class="section-label" id="contact-title" data-i18n="contact_title">Get In Touch</h2>
        <p class="contact-intro" data-i18n="contact_sub">Open to discussing AI and software engineering opportunities.</p>
        <a class="btn primary contact-cta" href="mailto:${profile.email}" data-i18n="contact_cta">Say Hello</a>
        <div class="contact-box" id="contact-box"></div>
    </section>
</main>

<footer class="footer"><span id="footer-copy"></span><a href="${profile.github}" target="_blank" rel="noreferrer">GitHub</a></footer>
<button id="top" type="button" aria-label="Back to top">↑</button>`;

  const content = {
    en: {
      meta_title: "Phạm Thị Yến Ngọc | AI Engineer",
      meta_desc: "Phạm Thị Yến Ngọc builds practical AI applications with machine learning, computer vision, LLMs, and software engineering.",
      nav_about: "About",
      nav_skills: "Skills",
      nav_experience: "Experience",
      nav_projects: "Projects",
      nav_contact: "Contact",
      menu_label: "Menu",
      btn_cv: "Resume",
      btn_download_cv: "Download CV",
      btn_view_projects: "Explore My Work",
      hero_eyebrow: "Hi, my name is",
      hero_statement: "I build intelligent systems.",
      hero_desc: "I’m an AI-focused software engineer building practical applications with machine learning, LLMs, computer vision, and modern web technologies.",
      about_title: "About Me",
      about_paragraphs: [
        "I’m Phạm Thị Yến Ngọc, an AI engineer based in Ho Chi Minh City. I enjoy turning machine learning and language model ideas into useful software, from conversational assistants to computer vision applications.",
        "At the National Archives Center II, I worked on document chatbots, Vietnamese-language information retrieval, OCR processing, and software customization. My work spans AI, backend development, and deployment.",
      ],
      skills_title: "Technical Skills",
      skills_sub: "Technologies I use to build and ship AI applications.",
      skills: [
        {
          title: "AI / ML & Computer Vision",
          tags: ["Python", "TensorFlow", "PyTorch", "OpenCV", "YOLO", "Tesseract OCR"],
        },
        {
          title: "LLMs & AI Tools",
          tags: ["Ollama", "LlamaIndex", "Transformers", "OpenAI API", "Gemini API", "MCP"],
        },
        {
          title: "Backend & Databases",
          tags: ["FastAPI", "Node.js", "SQLite", "MySQL", "PostgreSQL", "SQL Server", "Neo4j"],
        },
        {
          title: "Frontend",
          tags: ["JavaScript", "TypeScript", "React.js", "Next.js", "Vite", "HTML/CSS"],
        },
        {
          title: "DevOps & Deployment",
          tags: ["Docker", "Cloudflare Workers", "IIS"],
        },
      ],
      edu_title: "Education",
      edu: [
        {
          time: "2022 - present",
          place: "Hoa Sen University",
          title: "Bachelor of Science in Artificial Intelligence",
          desc: "Completed the Artificial Intelligence program with a GPA of 3.2/4.0; awaiting degree conferral.",
          bullets: [
            "Relevant coursework: Machine Learning, Object-Oriented Programming (OOP), Database Systems, and other specialized courses in Artificial Intelligence.",
          ],
        },
      ],
      cert_title: "Certifications",
      certs: [
        "TOEIC Listening & Reading: 635, Speaking & Writing: 240 (2024)",
      ],
      exp_title: "Experience",
      exp_sub: "AI systems, software engineering, and deployment.",
      experience: [
        {
          time: "Jul 2025 - Oct 2026",
          company: "Trung Tâm Lưu Trữ Quốc Gia II",
          role: "DevOps, Software Engineer",
          bullets: [
            "Built a Q&A chatbot for administrative documents from Ho Chi Minh City and Binh Duong.",
            "Developed a Vietnamese AI chatbot for querying People's Armed Forces Heroes records in Long An Province.",
            "Performed OCR processing on scanned administrative documents.",
            "Customized software to meet the requirements of Ben Tre Data Center.",
            "Imported administrative documents and provided technical guidance to software users.",
          ],
        },
      ],
      projects_title: "Projects",
      projects_sub: "Selected work in LLMs and computer vision.",
      featured_title: "Featured Projects",
      other_title: "Other Projects",
      repository_label: "View repository",
      projects: [
        {
          date: "Jul 2025 - Dec 2025",
          featured: true,
          badge: "Next.js · FastAPI · MCP",
          title: "Tourism AI Chatbot",
          desc: "A full-stack AI tourism assistant with conversational memory.",
          bullets: ["Built with Next.js, React, FastAPI, Neo4j, Cloudflare Workers, and LLaMA4.", "Implemented MCP-based backend services and conversational memory."],
          link: "https://github.com/SoulG0707/chatbot_tourism_AI",
        },
        {
          date: "Jun 2025 - Sep 2025",
          featured: true,
          badge: "LLaMA 3 · RAG · FastAPI",
          title: "Chatbot HSU",
          desc: "A LLaMA 3 and RAG chatbot for questions about Hoa Sen University’s academic programs.",
          bullets: ["Built PDF/DOCX retrieval and context-based responses.", "Developed a React interface and FastAPI backend with chat history and user authentication."],
          link: "https://github.com/SoulG0707/Chatbot_HSU",
        },
        {
          date: "Feb 2025 - Jul 2025",
          featured: true,
          badge: "InsightFace · OpenCV · PyQt5",
          title: "Face Recognition 2.0",
          desc: "A real-time attendance system with facial recognition and emotion detection.",
          bullets: ["Implemented face registration, model training, and student identification with InsightFace and OpenCV.", "Built a PyQt5 interface backed by SQL Server."],
          link: "https://github.com/SoulG0707/Face_Recognition_2.0",
        },
        {
          date: "Nov 2024 - Jan 2025",
          badge: "YOLO · TensorFlow · OCR",
          title: "Handwritten Digit Recognition",
          desc: "Built a handwritten date recognition system using Ultralytics YOLO, OpenCV, TensorFlow/Keras CNN, and Tesseract OCR; developed the desktop interface with PyQt5.",
          bullets: [],
          link: "https://github.com/SoulG0707/Handwritten_digit_recognition",
        },
        {
          date: "Apr 2024 - Jul 2024",
          badge: "OpenCV · dlib · PyQt5",
          title: "Face Recognition",
          desc: "Built a real-time face recognition attendance system using OpenCV, dlib, face_recognition, PyQt5, and MySQL.",
          bullets: [],
          link: "https://github.com/SoulG0707/Face_Recognition",
        },
      ],
      contact_eyebrow: "What’s Next?",
      contact_title: "Get In Touch",
      contact_sub: "I’m open to conversations about AI and software engineering opportunities. Have a project or role in mind? I’d love to hear from you.",
      contact_cta: "Say Hello",
      back_to_top: "Back to top",
      contact: [
        {
          label: "Email",
          value: profile.email,
          href: `mailto:${profile.email}`,
          icon: "fa-regular fa-envelope",
        },
        {
          label: "Phone",
          value: profile.phone,
          href: "tel:0775601416",
          icon: "fa-solid fa-phone",
        },
        {
          label: "GitHub",
          value: "github.com/SoulG0707",
          href: profile.github,
          icon: "fa-brands fa-github",
          target: "_blank",
        },
      ],
      footer: "© 2026 Phạm Thị Yến Ngọc",
    },
    vi: {
      meta_title: "Phạm Thị Yến Ngọc | AI Engineer",
      meta_desc: "Phạm Thị Yến Ngọc phát triển ứng dụng AI thực tiễn với machine learning, thị giác máy tính, LLM và kỹ thuật phần mềm.",
      nav_about: "Giới thiệu",
      nav_skills: "Kỹ năng",
      nav_experience: "Kinh nghiệm",
      nav_projects: "Dự án",
      nav_contact: "Liên hệ",
      menu_label: "Menu",
      btn_cv: "CV",
      btn_download_cv: "Tải CV",
      btn_view_projects: "Khám phá dự án",
      hero_eyebrow: "Xin chào, tôi là",
      hero_statement: "Tôi xây dựng hệ thống thông minh.",
      hero_desc: "Tôi là kỹ sư phần mềm tập trung vào AI, phát triển ứng dụng thực tiễn với machine learning, LLM, thị giác máy tính và công nghệ web hiện đại.",
      about_title: "Về tôi",
      about_paragraphs: [
        "Tôi là Phạm Thị Yến Ngọc, kỹ sư AI tại TP. Hồ Chí Minh. Tôi thích biến các ý tưởng về machine learning và mô hình ngôn ngữ thành sản phẩm hữu ích, từ trợ lý hội thoại đến ứng dụng thị giác máy tính.",
        "Tại Trung tâm Lưu trữ Quốc gia II, tôi tham gia xây dựng chatbot tài liệu, tra cứu thông tin tiếng Việt, xử lý OCR và tùy chỉnh phần mềm. Công việc của tôi trải rộng từ AI, backend đến triển khai hệ thống.",
      ],
      skills_title: "Kỹ năng kỹ thuật",
      skills_sub: "Công nghệ tôi sử dụng để xây dựng và triển khai ứng dụng AI.",
      skills: [
        {
          title: "AI / ML & Thị giác máy tính",
          tags: ["Python", "TensorFlow", "PyTorch", "OpenCV", "YOLO", "Tesseract OCR"],
        },
        {
          title: "LLM & Công cụ AI",
          tags: ["Ollama", "LlamaIndex", "Transformers", "OpenAI API", "Gemini API", "MCP"],
        },
        {
          title: "Backend & Cơ sở dữ liệu",
          tags: ["FastAPI", "Node.js", "SQLite", "MySQL", "PostgreSQL", "SQL Server", "Neo4j"],
        },
        {
          title: "Frontend",
          tags: ["JavaScript", "TypeScript", "React.js", "Next.js", "Vite", "HTML/CSS"],
        },
        {
          title: "DevOps & Triển khai",
          tags: ["Docker", "Cloudflare Workers", "IIS"],
        },
      ],
      edu_title: "Học vấn",
      edu: [
        {
          time: "2022 - Hiện tại",
          place: "Hoa Sen University",
          title: "Cử nhân Khoa học ngành Trí tuệ Nhân tạo",
          desc: "Hoàn thành chương trình Trí tuệ Nhân tạo với GPA 3.2/4.0; đang chờ cấp bằng.",
          bullets: [
            "Môn học liên quan: Machine Learning, Lập trình hướng đối tượng (OOP), Hệ quản trị cơ sở dữ liệu và các môn chuyên ngành Trí tuệ Nhân tạo khác.",
          ],
        },
      ],
      cert_title: "Chứng chỉ",
      certs: [
        "TOEIC Listening & Reading: 635, Speaking & Writing: 240 (2024)",
      ],
      exp_title: "Kinh nghiệm",
      exp_sub: "Hệ thống AI, kỹ thuật phần mềm và triển khai.",
      experience: [
        {
          time: "07/2025 - 10/2026",
          company: "Trung Tâm Lưu Trữ Quốc Gia II",
          role: "DevOps, Software Engineer",
          bullets: [
            "Xây dựng chatbot hỏi đáp cho tài liệu hành chính từ TP. Hồ Chí Minh và Bình Dương.",
            "Phát triển chatbot AI tiếng Việt để tra cứu hồ sơ các Anh hùng Lực lượng vũ trang nhân dân tại tỉnh Long An.",
            "Xử lý OCR trên tài liệu hành chính được quét.",
            "Tùy chỉnh phần mềm theo yêu cầu của Trung tâm Dữ liệu Bến Tre.",
            "Nhập tài liệu hành chính vào hệ thống và hướng dẫn kỹ thuật cho người dùng.",
          ],
        },
      ],
      projects_title: "Dự án",
      projects_sub: "Các dự án LLM và thị giác máy tính tiêu biểu.",
      featured_title: "Dự án nổi bật",
      other_title: "Dự án khác",
      repository_label: "Xem mã nguồn",
      projects: [
        {
          date: "07/2025 - 12/2025",
          featured: true,
          badge: "Next.js · FastAPI · MCP",
          title: "Tourism AI Chatbot",
          desc: "Trợ lý du lịch AI full-stack có bộ nhớ hội thoại.",
          bullets: ["Xây dựng với Next.js, React, FastAPI, Neo4j, Cloudflare Workers và LLaMA4.", "Triển khai dịch vụ backend dựa trên MCP và bộ nhớ hội thoại."],
          link: "https://github.com/SoulG0707/chatbot_tourism_AI",
        },
        {
          date: "06/2025 - 09/2025",
          featured: true,
          badge: "LLaMA 3 · RAG · FastAPI",
          title: "Chatbot HSU",
          desc: "Chatbot LLaMA 3 và RAG giải đáp thông tin về chương trình đào tạo của Đại học Hoa Sen.",
          bullets: ["Xây dựng truy xuất tài liệu PDF/DOCX và trả lời theo ngữ cảnh.", "Phát triển giao diện React và backend FastAPI với lịch sử hội thoại và xác thực người dùng."],
          link: "https://github.com/SoulG0707/Chatbot_HSU",
        },
        {
          date: "02/2025 - 07/2025",
          featured: true,
          badge: "InsightFace · OpenCV · PyQt5",
          title: "Face Recognition 2.0",
          desc: "Hệ thống điểm danh thời gian thực bằng nhận dạng khuôn mặt và phát hiện cảm xúc.",
          bullets: ["Triển khai đăng ký khuôn mặt, huấn luyện mô hình và nhận diện sinh viên bằng InsightFace và OpenCV.", "Xây dựng giao diện PyQt5 kết nối SQL Server."],
          link: "https://github.com/SoulG0707/Face_Recognition_2.0",
        },
        {
          date: "11/2024 - 01/2025",
          badge: "YOLO · TensorFlow · OCR",
          title: "Handwritten Digit Recognition",
          desc: "Xây dựng hệ thống nhận dạng ngày viết tay bằng Ultralytics YOLO, OpenCV, TensorFlow/Keras CNN và Tesseract OCR; phát triển giao diện desktop với PyQt5.",
          bullets: [],
          link: "https://github.com/SoulG0707/Handwritten_digit_recognition",
        },
        {
          date: "04/2024 - 07/2024",
          badge: "OpenCV · dlib · PyQt5",
          title: "Face Recognition",
          desc: "Xây dựng hệ thống điểm danh nhận dạng khuôn mặt thời gian thực bằng OpenCV, dlib, face_recognition, PyQt5 và MySQL.",
          bullets: [],
          link: "https://github.com/SoulG0707/Face_Recognition",
        },
      ],
      contact_eyebrow: "Tiếp theo là gì?",
      contact_title: "Liên hệ với tôi",
      contact_sub: "Tôi sẵn sàng trao đổi về cơ hội trong lĩnh vực AI và kỹ thuật phần mềm. Nếu bạn có dự án hoặc vị trí phù hợp, hãy liên hệ với tôi.",
      contact_cta: "Gửi lời chào",
      back_to_top: "Về đầu trang",
      contact: [
        {
          label: "Email",
          value: profile.email,
          href: `mailto:${profile.email}`,
          icon: "fa-regular fa-envelope",
        },
        {
          label: "Điện thoại",
          value: profile.phone,
          href: "tel:0775601416",
          icon: "fa-solid fa-phone",
        },
        {
          label: "GitHub",
          value: "github.com/SoulG0707",
          href: profile.github,
          icon: "fa-brands fa-github",
          target: "_blank",
        },
      ],
      footer: "© 2026 Phạm Thị Yến Ngọc",
    },
  };

  let navEl;
  let navLinks;
  let langBtns;
  let topBtn;
  let skillsGrid;
  let featuredProjects;
  let otherProjects;
  let menuToggle;
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
    initMobileMenu();
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
    featuredProjects = document.getElementById("featured-projects");
    otherProjects = document.getElementById("other-projects");
    menuToggle = document.getElementById("menu-toggle");
    expList = document.getElementById("exp-list");
    eduTimeline = document.getElementById("edu-timeline");
    certList = document.getElementById("cert-list");
    contactBox = document.getElementById("contact-box");
    sections = NAV_ITEMS.map((item) => document.getElementById(item.target));
  }

  function buildNav() {
    if (!navEl) return;
    navEl.innerHTML = NAV_ITEMS.map(
      (item) => `<a href="#${item.target}" data-i18n="${item.key}"></a>`,
    ).join("");
    navLinks = [...navEl.querySelectorAll("a")];
  }

  function renderAbout(lang) {
    const aboutCopy = document.getElementById("about-copy");
    if (aboutCopy) aboutCopy.innerHTML = content[lang].about_paragraphs.map((p) => `<p>${p}</p>`).join("");
  }

  function renderSkills(lang) {
    if (!skillsGrid) return;
    skillsGrid.innerHTML = content[lang].skills
      .map(
        (item) => `
            <div class="skill-group">
                <h3>${item.title}</h3>
                <ul class="skill-list">${item.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
            </div>`,
      )
      .join("");
  }

  function renderProjects(lang) {
    if (!featuredProjects || !otherProjects) return;
    const projects = content[lang].projects;
    featuredProjects.innerHTML = projects.filter((p) => p.featured)
      .map(
        (p, index) => `
            <article class="featured-project">
                <div class="project-index"><span>${String(index + 1).padStart(2, "0")}</span><time class="project-date">${p.date}</time></div>
                <div class="project-content">
                    <h4>${p.title}</h4>
                    <p class="project-desc">${p.desc}</p>
                    <ul class="project-bullets">${p.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
                    <p class="project-tech">${p.badge}</p>
                    <a class="project-link" href="${p.link}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i> ${content[lang].repository_label}<span class="sr-only">: ${p.title}</span> <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
                </div>
            </article>`,
      )
      .join("");
    otherProjects.innerHTML = projects.filter((p) => !p.featured)
      .map((p) => `<article class="other-project"><time class="project-date">${p.date}</time><h4>${p.title}</h4><p>${p.desc}</p><p class="project-tech">${p.badge}</p><a class="project-link" href="${p.link}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i> ${content[lang].repository_label}<span class="sr-only">: ${p.title}</span> <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a></article>`)
      .join("");
  }

  function renderExperience(lang) {
    if (!expList) return;
    expList.innerHTML = content[lang].experience
      .map(
        (item) => `
            <article class="exp-item">
                <time class="exp-time">${item.time}</time>
                <div class="exp-content">
                    <h3>${item.role} <span>@ ${item.company}</span></h3>
                    <ul class="exp-bullets">
                        ${item.bullets.map((b) => `<li>${b}</li>`).join("")}
                    </ul>
                </div>
            </article>`,
      )
      .join("");
  }

  function renderEducation(lang) {
    if (eduTimeline) {
      eduTimeline.innerHTML = content[lang].edu
        .map(
          (item) => `
                <article class="edu-card">
                    <time class="edu-time">${item.time}</time>
                    <h3>${item.title}</h3>
                    <div class="edu-place">${item.place}</div>
                    <p class="edu-desc">${item.desc}</p>
                    ${item.bullets?.length ? `<ul class="edu-courses">${item.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>` : ""}
                </article>`,
        )
        .join("");
    }
    if (certList) {
      certList.innerHTML = content[lang].certs
        .map((c) => `<span class="cert-item">${c}</span>`)
        .join("");
    }
  }

  function renderContact(lang) {
    if (contactBox) {
      contactBox.innerHTML = content[lang].contact
        .map((c) => {
          const target = c.target || "_self";
          const rel = target === "_blank" ? 'rel="noopener noreferrer"' : "";
          return `<a class="contact-item" href="${c.href}" target="${target}" ${rel}>
                    <i class="${c.icon}" aria-hidden="true"></i>
                    <span>${c.label}</span>
                    <span class="contact-value">${c.value}</span>
                </a>`;
        })
        .join("");
    }
    const footer = document.getElementById("footer-copy");
    if (footer) footer.textContent = content[lang].footer;
  }

  function renderHero(lang) {
    const t = content[lang];

    setText("hero-eyebrow", t.hero_eyebrow);
    setText("hero-name", `${profile.name}.`);
    setText("hero-statement", t.hero_statement);
    setText("hero-desc", t.hero_desc);

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
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t.meta_title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", t.meta_desc);
    const toggleLabel = document.getElementById("menu-toggle")?.querySelector("span");
    if (toggleLabel) toggleLabel.textContent = t.menu_label;
    if (topBtn) topBtn.setAttribute("aria-label", t.back_to_top);
  }

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    renderStaticText(lang);
    renderHero(lang);
    renderAbout(lang);
    renderSkills(lang);
    renderEducation(lang);
    renderExperience(lang);
    renderProjects(lang);
    renderContact(lang);
    langBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });
  }

  function initBackToTop() {
    if (!topBtn) return;
    window.addEventListener("scroll", () => {
      topBtn.classList.toggle("show", window.scrollY > 240);
    });
    topBtn.addEventListener("click", () => {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";
      window.scrollTo({ top: 0, behavior });
    });
  }

  function initNavSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          e.preventDefault();
          const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth";
          target.scrollIntoView({ behavior });
          if (navEl.classList.contains("open")) closeMenu();
        }
      });
    });
  }

  function initScrollSpy() {
    if (!navLinks || !sections) return;
    const updateActiveLink = () => {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const position = window.scrollY + headerHeight + 40;
      let current = "";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top + window.scrollY <= position) {
          current = section.id;
        }
      });
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
      });
    };
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink);
    updateActiveLink();
  }

  function initLangSwitch() {
    langBtns.forEach((btn) =>
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang)),
    );
  }

  function closeMenu() {
    navEl.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.querySelector("i").className = "fa-solid fa-bars";
  }

  function initMobileMenu() {
    if (!menuToggle) return;
    menuToggle.addEventListener("click", () => {
      const open = navEl.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.querySelector("i").className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navEl.classList.contains("open")) {
        closeMenu();
        menuToggle.focus();
      }
    });
    document.addEventListener("click", (event) => {
      if (navEl.classList.contains("open") && !event.target.closest(".nav")) closeMenu();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900 && navEl.classList.contains("open")) closeMenu();
    });
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value || "";
  }
})();
