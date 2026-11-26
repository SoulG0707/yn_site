(() => {
  const PATHS = {
    cv: "assets/files/Pham_Thi_Yen_Ngoc_CV_AI.pdf",
    avatar: "assets/images/avatar.jpg",
    preview: "assets/images/projects/tourism-ai-chatbot/6.png",
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
        <nav id="nav-links" class="nav-links" aria-label="Main navigation"></nav>
        <div class="actions">
            <div class="lang-switch" id="lang-switch" role="group" aria-label="Language">
                <button class="lang-btn" data-lang="en" type="button" lang="en" aria-label="English">EN</button>
                <button class="lang-btn" data-lang="vi" type="button" lang="vi" aria-label="Tiếng Việt">VI</button>
            </div>
            <a class="btn resume-btn" id="btn-cv-inline" href="${PATHS.cv}" download><span data-i18n="btn_cv">Resume</span></a>
            <button class="menu-toggle" id="menu-toggle" type="button" aria-controls="nav-links" aria-expanded="false"><span data-i18n="menu_label">Menu</span><i class="fa-solid fa-bars" aria-hidden="true"></i></button>
        </div>
    </div>
</header>

<main class="wrap">
    <section id="home" class="hero" aria-labelledby="hero-name">
        <div class="hero-copy">
            <p class="hero-eyebrow" data-i18n="hero_eyebrow"></p>
            <h1 class="hero-name" id="hero-name">${profile.name}</h1>
            <p class="hero-statement" data-i18n="hero_statement"></p>
            <p class="hero-desc" data-i18n="hero_desc"></p>
            <div class="hero-actions">
                <a class="btn primary" href="#projects" data-i18n="btn_view_projects">View projects</a>
                <a class="btn ghost" id="btn-cv" href="${PATHS.cv}" download data-i18n="btn_download_cv">Download CV</a>
            </div>
        </div>
        <figure class="hero-preview" id="hero-preview">
            <img id="hero-image" src="${PATHS.preview}" width="540" height="392" fetchpriority="high" alt="">
            <figcaption>
                <span>Tourism AI Chatbot</span>
                <span data-i18n="hero_preview_caption"></span>
            </figcaption>
        </figure>
    </section>

    <section id="about" aria-labelledby="about-title">
        <div class="section-head"><h2 class="section-label" id="about-title" data-i18n="about_title">About Me</h2></div>
        <div class="about-grid">
            <div class="about-copy" id="about-copy"></div>
            <img class="about-photo" id="about-photo" src="${PATHS.avatar}" alt="${profile.name}" width="512" height="728" loading="lazy" decoding="async">
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
        <div class="contact-copy">
            <h2 class="section-label" id="contact-title" data-i18n="contact_title">Contact</h2>
            <p class="contact-intro" data-i18n="contact_sub">Open to discussing AI and software engineering opportunities.</p>
            <a class="btn primary contact-cta" href="mailto:${profile.email}" data-i18n="contact_cta">Send an email</a>
        </div>
        <div class="contact-box" id="contact-box"></div>
    </section>
</main>

<footer class="footer"><div class="footer-inner"><span id="footer-copy"></span><a href="${profile.github}" target="_blank" rel="noreferrer">GitHub</a></div></footer>
<button id="top" class="icon-button" type="button" aria-label="Back to top"><span aria-hidden="true">↑</span></button>
<dialog id="project-lightbox" class="project-lightbox" aria-label="Project image preview">
    <div class="lightbox-bar">
        <span id="lightbox-caption"></span>
        <button id="lightbox-close" class="icon-button" type="button" aria-label="Close image preview"><span aria-hidden="true">×</span></button>
    </div>
    <div class="lightbox-view">
        <button id="lightbox-previous" class="icon-button lightbox-arrow" type="button" aria-label="Previous image"><span aria-hidden="true">←</span></button>
        <img id="lightbox-image" alt="">
        <button id="lightbox-next" class="icon-button lightbox-arrow" type="button" aria-label="Next image"><span aria-hidden="true">→</span></button>
    </div>
</dialog>`;

  const content = {
    en: {
      meta_title: "Phạm Thị Yến Ngọc | AI Engineer & Software Developer",
      meta_desc: "Portfolio of Phạm Thị Yến Ngọc, an AI engineer and software developer working with machine learning, data processing, and computer vision.",
      nav_about: "About",
      nav_skills: "Skills",
      nav_experience: "Experience",
      nav_projects: "Projects",
      nav_contact: "Contact",
      nav_label: "Main navigation",
      language_label: "Language",
      menu_label: "Menu",
      btn_cv: "Resume",
      btn_download_cv: "Download CV",
      btn_view_projects: "View projects",
      hero_eyebrow: "AI Engineer · Software Developer",
      hero_statement: "Machine learning and data processing",
      hero_desc: "I’ve built applications for document retrieval, conversational AI, and computer vision. I’m looking for opportunities to build practical AI systems.",
      hero_preview_caption: "Conversational itinerary planning",
      hero_preview_alt: "The BlueTravel chatbot adapts a Ho Chi Minh City itinerary to a two-day trip after a follow-up question",
      about_title: "About me",
      about_paragraphs: [
        "I’m Phạm Thị Yến Ngọc, an AI engineer and software developer based in Ho Chi Minh City. I build applications with machine learning and language models, from conversational assistants to computer vision systems.",
        "At National Archives Center II, I developed document chatbots for Vietnamese-language search, processed OCR data, and customized software. My work spans AI, backend development, and deployment.",
      ],
      skills_title: "Technical skills",
      skills_sub: "Technologies I use to build and ship AI applications.",
      skills: [
        {
          title: "Programming & frontend",
          tags: ["Python", "JavaScript", "TypeScript", "React.js", "Next.js", "Vite", "HTML/CSS"],
        },
        {
          title: "AI/ML & computer vision",
          tags: ["TensorFlow", "PyTorch", "OpenCV", "YOLO", "Tesseract OCR"],
        },
        {
          title: "LLM & AI tools",
          tags: ["Ollama", "LlamaIndex", "Transformers", "OpenAI API", "Gemini API", "MCP"],
        },
        {
          title: "Backend & databases",
          tags: ["FastAPI", "Node.js", "SQLite", "MySQL", "PostgreSQL", "SQL Server", "Neo4j"],
        },
        {
          title: "DevOps & deployment",
          tags: ["Docker", "Cloudflare Workers", "IIS"],
        },
      ],
      edu_title: "Education",
      edu: [
        {
          time: "2022 – present",
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
      exp_sub: "Software engineering, AI, and data processing.",
      experience: [
        {
          time: "Jul 2025 – Oct 2026",
          company: "Trung Tâm Lưu Trữ Quốc Gia II",
          role: "Software Engineer · AI Engineer",
          focus: "Application development and data processing",
          bullets: [
            "Developed AI chatbots with Python and SQLite for administrative documents from Ho Chi Minh City and Binh Duong and for historical records on People’s Armed Forces Heroes in Long An.",
            "Processed, cleaned, and validated OCR data from scanned administrative documents to improve accuracy and searchability.",
            "Customized software to improve operational workflows and meet requirements, including those of the Ben Tre Data Center.",
            "Provided technical support, troubleshot system issues, and imported and managed digital records.",
          ],
        },
      ],
      projects_title: "Projects",
      projects_sub: "Selected work in LLMs and computer vision.",
      featured_title: "Featured projects",
      other_title: "Other projects",
      repository_label: "View repository",
      gallery_previous: "Previous image",
      gallery_next: "Next image",
      gallery_close: "Close image preview",
      gallery_open: "Show project images",
      gallery_hide: "Hide project images",
      gallery_preview: "Project image preview",
      gallery_image: "Open image",
      gallery_count: "images",
      gallery_count_one: "image",
      projects: [
        {
          id: "tourism-ai-chatbot",
          date: "Jul 2025 – Dec 2025",
          featured: true,
          badge: "Next.js · FastAPI · MCP",
          title: "Tourism AI Chatbot",
          desc: "A full-stack AI tourism assistant with conversational memory.",
          bullets: ["Built with Next.js, React, FastAPI, Neo4j, Cloudflare Workers, and LLaMA4.", "Implemented MCP-based backend services and conversational memory."],
          link: "https://github.com/SoulG0707/chatbot_tourism_AI",
        },
        {
          id: "chatbot-hsu",
          date: "Jun 2025 – Sep 2025",
          featured: true,
          badge: "LLaMA 3 · RAG · FastAPI",
          title: "Chatbot HSU",
          desc: "A LLaMA 3 and RAG chatbot for questions about Hoa Sen University’s academic programs.",
          bullets: ["Built PDF/DOCX retrieval and context-based responses.", "Developed a React interface and FastAPI backend with chat history and user authentication."],
          link: "https://github.com/SoulG0707/Chatbot_HSU",
        },
        {
          id: "face-recognition-2",
          date: "Feb 2025 – Jul 2025",
          featured: true,
          badge: "InsightFace · OpenCV · PyQt5",
          title: "Face Recognition 2.0",
          desc: "A real-time attendance system with facial recognition and emotion detection.",
          bullets: ["Implemented face registration, model training, and student identification with InsightFace and OpenCV.", "Built a PyQt5 interface and integrated SQL Server to manage attendance records and emotion data."],
          link: "https://github.com/SoulG0707/Face_Recognition_2.0",
        },
        {
          id: "handwritten-digit-recognition",
          date: "Nov 2024 – Jan 2025",
          badge: "YOLO · TensorFlow · OCR",
          title: "Handwritten Digit Recognition",
          desc: "Built a handwritten date recognition system using Ultralytics YOLO, OpenCV, TensorFlow/Keras CNN, and Tesseract OCR; developed the desktop interface with PyQt5.",
          bullets: [],
          link: "https://github.com/SoulG0707/Handwritten_digit_recognition",
        },
        {
          id: "face-recognition",
          date: "Apr 2024 – Jul 2024",
          badge: "OpenCV · dlib · PyQt5",
          title: "Face Recognition",
          desc: "Built a real-time face recognition attendance system using OpenCV, dlib, face_recognition, PyQt5, and MySQL.",
          bullets: [],
          link: "https://github.com/SoulG0707/Face_Recognition",
        },
      ],
      contact_title: "Contact",
      contact_sub: "I’m open to conversations about AI and software engineering opportunities. Have a project or role in mind? I’d love to hear from you.",
      contact_cta: "Send an email",
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
      meta_title: "Phạm Thị Yến Ngọc | Kỹ sư AI & Phát triển phần mềm",
      meta_desc: "Portfolio của Phạm Thị Yến Ngọc, kỹ sư AI và nhà phát triển phần mềm, với các dự án về học máy, xử lý dữ liệu và thị giác máy tính.",
      nav_about: "Giới thiệu",
      nav_skills: "Kỹ năng",
      nav_experience: "Kinh nghiệm",
      nav_projects: "Dự án",
      nav_contact: "Liên hệ",
      nav_label: "Điều hướng chính",
      language_label: "Ngôn ngữ",
      menu_label: "Menu",
      btn_cv: "CV",
      btn_download_cv: "Tải CV",
      btn_view_projects: "Xem dự án",
      hero_eyebrow: "Kỹ sư AI · Phát triển phần mềm",
      hero_statement: "Học máy và xử lý dữ liệu",
      hero_desc: "Tôi đã phát triển ứng dụng tra cứu tài liệu, AI hội thoại và thị giác máy tính. Tôi mong muốn tham gia xây dựng các hệ thống AI phục vụ nhu cầu thực tế.",
      hero_preview_caption: "Lập lịch trình qua hội thoại",
      hero_preview_alt: "Chatbot BlueTravel điều chỉnh lịch trình tham quan TP. Hồ Chí Minh còn hai ngày sau câu hỏi tiếp theo",
      about_title: "Về tôi",
      about_paragraphs: [
        "Tôi là Phạm Thị Yến Ngọc, kỹ sư AI và nhà phát triển phần mềm tại TP. Hồ Chí Minh. Tôi ứng dụng học máy và mô hình ngôn ngữ để xây dựng các sản phẩm từ trợ lý hội thoại đến hệ thống thị giác máy tính.",
        "Tại Trung tâm Lưu trữ Quốc gia II, tôi phát triển chatbot tra cứu tài liệu tiếng Việt, xử lý dữ liệu OCR và tùy chỉnh phần mềm. Công việc của tôi bao gồm phát triển AI, backend và triển khai hệ thống.",
      ],
      skills_title: "Kỹ năng kỹ thuật",
      skills_sub: "Công nghệ tôi sử dụng để xây dựng và triển khai ứng dụng AI.",
      skills: [
        {
          title: "Lập trình & frontend",
          tags: ["Python", "JavaScript", "TypeScript", "React.js", "Next.js", "Vite", "HTML/CSS"],
        },
        {
          title: "AI/ML & thị giác máy tính",
          tags: ["TensorFlow", "PyTorch", "OpenCV", "YOLO", "Tesseract OCR"],
        },
        {
          title: "LLM & công cụ AI",
          tags: ["Ollama", "LlamaIndex", "Transformers", "OpenAI API", "Gemini API", "MCP"],
        },
        {
          title: "Backend & cơ sở dữ liệu",
          tags: ["FastAPI", "Node.js", "SQLite", "MySQL", "PostgreSQL", "SQL Server", "Neo4j"],
        },
        {
          title: "DevOps & triển khai",
          tags: ["Docker", "Cloudflare Workers", "IIS"],
        },
      ],
      edu_title: "Học vấn",
      edu: [
        {
          time: "2022 – hiện tại",
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
      exp_sub: "Kỹ thuật phần mềm, AI và xử lý dữ liệu.",
      experience: [
        {
          time: "07/2025 – 10/2026",
          company: "Trung Tâm Lưu Trữ Quốc Gia II",
          role: "Kỹ sư phần mềm · Kỹ sư AI",
          focus: "Phát triển ứng dụng và xử lý dữ liệu",
          bullets: [
            "Phát triển chatbot AI với Python và SQLite để tra cứu tài liệu hành chính từ TP. Hồ Chí Minh và Bình Dương, cùng hồ sơ lịch sử về các Anh hùng Lực lượng vũ trang nhân dân tại Long An.",
            "Xử lý, làm sạch và kiểm tra dữ liệu OCR từ tài liệu hành chính đã quét để tăng độ chính xác và khả năng tìm kiếm.",
            "Tùy chỉnh phần mềm theo yêu cầu nghiệp vụ, trong đó có yêu cầu của Trung tâm Dữ liệu Bến Tre.",
            "Hỗ trợ kỹ thuật, xử lý sự cố hệ thống, nhập và quản lý hồ sơ số.",
          ],
        },
      ],
      projects_title: "Dự án",
      projects_sub: "Các dự án LLM và thị giác máy tính tiêu biểu.",
      featured_title: "Dự án nổi bật",
      other_title: "Dự án khác",
      repository_label: "Xem mã nguồn",
      gallery_previous: "Ảnh trước",
      gallery_next: "Ảnh tiếp theo",
      gallery_close: "Đóng ảnh",
      gallery_open: "Xem ảnh dự án",
      gallery_hide: "Ẩn ảnh dự án",
      gallery_preview: "Xem ảnh dự án",
      gallery_image: "Mở ảnh",
      gallery_count: "ảnh",
      gallery_count_one: "ảnh",
      projects: [
        {
          id: "tourism-ai-chatbot",
          date: "07/2025 – 12/2025",
          featured: true,
          badge: "Next.js · FastAPI · MCP",
          title: "Tourism AI Chatbot",
          desc: "Trợ lý du lịch AI full-stack có bộ nhớ hội thoại.",
          bullets: ["Xây dựng với Next.js, React, FastAPI, Neo4j, Cloudflare Workers và LLaMA4.", "Triển khai dịch vụ backend dựa trên MCP và bộ nhớ hội thoại."],
          link: "https://github.com/SoulG0707/chatbot_tourism_AI",
        },
        {
          id: "chatbot-hsu",
          date: "06/2025 – 09/2025",
          featured: true,
          badge: "LLaMA 3 · RAG · FastAPI",
          title: "Chatbot HSU",
          desc: "Chatbot LLaMA 3 và RAG giải đáp thông tin về chương trình đào tạo của Đại học Hoa Sen.",
          bullets: ["Xây dựng truy xuất tài liệu PDF/DOCX và trả lời theo ngữ cảnh.", "Phát triển giao diện React và backend FastAPI với lịch sử hội thoại và xác thực người dùng."],
          link: "https://github.com/SoulG0707/Chatbot_HSU",
        },
        {
          id: "face-recognition-2",
          date: "02/2025 – 07/2025",
          featured: true,
          badge: "InsightFace · OpenCV · PyQt5",
          title: "Face Recognition 2.0",
          desc: "Hệ thống điểm danh thời gian thực bằng nhận dạng khuôn mặt và phát hiện cảm xúc.",
          bullets: ["Triển khai đăng ký khuôn mặt, huấn luyện mô hình và nhận diện sinh viên bằng InsightFace và OpenCV.", "Xây dựng giao diện PyQt5 và tích hợp SQL Server để quản lý dữ liệu điểm danh và cảm xúc."],
          link: "https://github.com/SoulG0707/Face_Recognition_2.0",
        },
        {
          id: "handwritten-digit-recognition",
          date: "11/2024 – 01/2025",
          badge: "YOLO · TensorFlow · OCR",
          title: "Handwritten Digit Recognition",
          desc: "Xây dựng hệ thống nhận dạng ngày viết tay bằng Ultralytics YOLO, OpenCV, TensorFlow/Keras CNN và Tesseract OCR; phát triển giao diện desktop với PyQt5.",
          bullets: [],
          link: "https://github.com/SoulG0707/Handwritten_digit_recognition",
        },
        {
          id: "face-recognition",
          date: "04/2024 – 07/2024",
          badge: "OpenCV · dlib · PyQt5",
          title: "Face Recognition",
          desc: "Xây dựng hệ thống điểm danh nhận dạng khuôn mặt thời gian thực bằng OpenCV, dlib, face_recognition, PyQt5 và MySQL.",
          bullets: [],
          link: "https://github.com/SoulG0707/Face_Recognition",
        },
      ],
      contact_title: "Liên hệ",
      contact_sub: "Tôi sẵn sàng trao đổi về cơ hội trong lĩnh vực AI và kỹ thuật phần mềm. Nếu bạn có dự án hoặc vị trí phù hợp, hãy liên hệ với tôi.",
      contact_cta: "Gửi email",
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
  let imageManifest = {};
  let activeGallery = null;
  let activeLanguage = "en";
  let lightboxState = null;
  let lightboxReturnFocus = null;
  let suppressGalleryClick = false;

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
    initProjectGallery();
    loadImageManifest();
  });

  function mountLayout() {
    const app = document.getElementById("app");
    if (!app) return;
    app.innerHTML = layout;
    document.getElementById("hero-image").addEventListener("error", () => {
      document.getElementById("hero-preview").hidden = true;
    }, { once: true });
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
    if (activeGallery && !imageManifest[activeGallery]?.length) activeGallery = null;
    featuredProjects.innerHTML = projects.filter((p) => p.featured)
      .map(
        (p) => `
            <article class="featured-project">
                <p class="project-date">${p.date}</p>
                <div class="project-content">
                    ${renderProjectHeading(p, lang)}
                    <p class="project-desc">${p.desc}</p>
                    <ul class="project-bullets">${p.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
                    <p class="project-tech">${p.badge}</p>
                    ${renderRepositoryLink(p, lang)}
                </div>
                ${renderGalleryShell(p, lang)}
            </article>`,
      )
      .join("");
    otherProjects.innerHTML = projects.filter((p) => !p.featured)
      .map((p) => `
            <article class="other-project">
                <p class="project-date">${p.date}</p>
                ${renderProjectHeading(p, lang)}
                <p class="project-desc">${p.desc}</p>
                <p class="project-tech">${p.badge}</p>
                ${renderRepositoryLink(p, lang)}
                ${renderGalleryShell(p, lang)}
            </article>`)
      .join("");
    if (activeGallery) populateGallery(activeGallery);
  }

  function renderProjectHeading(project, lang) {
    if (!imageManifest[project.id]?.length) return `<h4>${project.title}</h4>`;
    const expanded = activeGallery === project.id;
    const label = expanded ? content[lang].gallery_hide : content[lang].gallery_open;
    return `<h4>
        <button class="project-title-button${expanded ? " active" : ""}" id="project-toggle-${project.id}" type="button" data-project-toggle="${project.id}" aria-controls="gallery-${project.id}" aria-expanded="${expanded}" aria-label="${label}: ${project.title}">
            <span>${project.title}</span>
            <span class="project-gallery-action" aria-hidden="true"><i class="fa-regular fa-images"></i><span class="project-title-indicator">${label}</span></span>
        </button>
    </h4>`;
  }

  function renderRepositoryLink(project, lang) {
    return `<a class="project-link" href="${project.link}" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-github" aria-hidden="true"></i>
        <span>${content[lang].repository_label}<span class="sr-only">: ${project.title}</span></span>
    </a>`;
  }

  function renderGalleryShell(project, lang) {
    const count = imageManifest[project.id]?.length || 0;
    if (!count) return "";
    const expanded = activeGallery === project.id;
    const t = content[lang];
    const countLabel = count === 1 ? t.gallery_count_one : t.gallery_count;
    return `<div class="project-gallery${expanded ? " open" : ""}" id="gallery-${project.id}" role="region" aria-labelledby="project-toggle-${project.id}" aria-hidden="${!expanded}" ${expanded ? "" : "inert"}>
      <div class="project-gallery-inner">
        <div class="gallery-toolbar">
          <span>${count} ${countLabel}</span>
          ${count > 1 ? `<div class="gallery-arrows"><button class="icon-button" type="button" data-gallery-step="-1" data-project-id="${project.id}" aria-label="${t.gallery_previous}"><span aria-hidden="true">←</span></button><button class="icon-button" type="button" data-gallery-step="1" data-project-id="${project.id}" aria-label="${t.gallery_next}"><span aria-hidden="true">→</span></button></div>` : ""}
        </div>
        <div class="gallery-track" data-gallery-track="${project.id}" role="group" aria-label="${project.title}" tabindex="0"></div>
      </div>
    </div>`;
  }

  async function loadImageManifest() {
    try {
      const response = await fetch("assets/images/projects/manifest.json");
      if (!response.ok) throw new Error("Project image manifest is unavailable");
      const data = await response.json();
      for (const project of content.en.projects) {
        const prefix = `assets/images/projects/${project.id}/`;
        imageManifest[project.id] = Array.isArray(data[project.id])
          ? data[project.id].filter((url) => typeof url === "string" && url.startsWith(prefix))
          : [];
      }
      renderProjects(activeLanguage);
    } catch {
      // The rest of the portfolio remains usable before the first build or offline.
    }
  }

  function populateGallery(id) {
    const track = document.querySelector(`[data-gallery-track="${id}"]`);
    if (!track || track.dataset.loaded) return;
    const project = content[activeLanguage].projects.find((item) => item.id === id);
    const images = imageManifest[id] || [];
    if (!project || !images.length) return;
    track.innerHTML = images.map((url, index) =>
      `<button class="gallery-image" type="button" data-gallery-image="${id}" data-image-index="${index}" aria-label="${content[activeLanguage].gallery_image} ${index + 1}/${images.length}: ${project.title}"><img src="${url}" alt="${project.title} — ${index + 1}" loading="lazy" decoding="async" draggable="false"></button>`
    ).join("");
    track.dataset.loaded = "true";
    initTrackDrag(track);
  }

  function setGalleryOpen(id, open) {
    const toggle = document.getElementById(`project-toggle-${id}`);
    const panel = document.getElementById(`gallery-${id}`);
    if (!toggle || !panel) return;
    if (open) populateGallery(id);
    toggle.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", String(open));
    const project = content[activeLanguage].projects.find((item) => item.id === id);
    const label = open ? content[activeLanguage].gallery_hide : content[activeLanguage].gallery_open;
    if (project) toggle.setAttribute("aria-label", `${label}: ${project.title}`);
    toggle.querySelector(".project-title-indicator").textContent = label;
    panel.classList.toggle("open", open);
    panel.setAttribute("aria-hidden", String(!open));
    panel.inert = !open;
  }

  function scrollGallery(id, direction) {
    const track = document.querySelector(`[data-gallery-track="${id}"]`);
    if (!track) return;
    const item = track.querySelector(".gallery-image");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const distance = (item?.getBoundingClientRect().width || track.clientWidth) + gap;
    track.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  function initTrackDrag(track) {
    let startX = 0;
    let startScroll = 0;
    let dragging = false;
    let down = false;
    track.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      down = true;
      dragging = false;
      startX = event.clientX;
      startScroll = track.scrollLeft;
    });
    track.addEventListener("pointermove", (event) => {
      if (!down) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 5) dragging = true;
      if (!dragging) return;
      event.preventDefault();
      track.classList.add("dragging");
      track.scrollLeft = startScroll - delta;
    });
    const stopDrag = () => {
      if (dragging) {
        suppressGalleryClick = true;
        setTimeout(() => { suppressGalleryClick = false; }, 0);
      }
      down = false;
      dragging = false;
      track.classList.remove("dragging");
    };
    track.addEventListener("pointerup", stopDrag);
    track.addEventListener("pointercancel", stopDrag);
    track.addEventListener("pointerleave", stopDrag);
    track.addEventListener("dragstart", (event) => event.preventDefault());
  }

  function renderLightbox() {
    if (!lightboxState) return;
    const { id, index } = lightboxState;
    const images = imageManifest[id] || [];
    const project = content[activeLanguage].projects.find((item) => item.id === id);
    if (!images.length || !project) return;
    const dialog = document.getElementById("project-lightbox");
    dialog.setAttribute("aria-label", content[activeLanguage].gallery_preview);
    const photo = document.getElementById("lightbox-image");
    photo.src = images[index];
    photo.alt = `${project.title} — ${index + 1}/${images.length}`;
    document.getElementById("lightbox-caption").textContent = photo.alt;
    document.getElementById("lightbox-close").setAttribute("aria-label", content[activeLanguage].gallery_close);
    document.getElementById("lightbox-previous").setAttribute("aria-label", content[activeLanguage].gallery_previous);
    document.getElementById("lightbox-next").setAttribute("aria-label", content[activeLanguage].gallery_next);
    dialog.querySelectorAll(".lightbox-arrow").forEach((button) => { button.hidden = images.length < 2; });
    dialog.querySelector(".lightbox-view").classList.toggle("single", images.length < 2);
  }

  function stepLightbox(direction) {
    if (!lightboxState) return;
    const count = imageManifest[lightboxState.id]?.length || 0;
    if (count < 2) return;
    lightboxState.index = (lightboxState.index + direction + count) % count;
    renderLightbox();
  }

  function initProjectGallery() {
    const projectsSection = document.getElementById("projects");
    const dialog = document.getElementById("project-lightbox");
    projectsSection.addEventListener("click", (event) => {
      const toggle = event.target.closest("[data-project-toggle]");
      if (toggle) {
        const id = toggle.dataset.projectToggle;
        if (activeGallery) setGalleryOpen(activeGallery, false);
        activeGallery = activeGallery === id ? null : id;
        if (activeGallery) setGalleryOpen(activeGallery, true);
        return;
      }
      const step = event.target.closest("[data-gallery-step]");
      if (step) {
        scrollGallery(step.dataset.projectId, Number(step.dataset.galleryStep));
        return;
      }
      const image = event.target.closest("[data-gallery-image]");
      if (!image || suppressGalleryClick) return;
      lightboxState = { id: image.dataset.galleryImage, index: Number(image.dataset.imageIndex) };
      lightboxReturnFocus = image;
      renderLightbox();
      dialog.showModal();
    });
    projectsSection.addEventListener("keydown", (event) => {
      if (!event.target.matches("[data-gallery-track]")) return;
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        scrollGallery(event.target.dataset.galleryTrack, event.key === "ArrowLeft" ? -1 : 1);
      }
    });
    document.getElementById("lightbox-close").addEventListener("click", () => dialog.close());
    document.getElementById("lightbox-previous").addEventListener("click", () => stepLightbox(-1));
    document.getElementById("lightbox-next").addEventListener("click", () => stepLightbox(1));
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        stepLightbox(event.key === "ArrowLeft" ? -1 : 1);
      }
    });
    dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener("close", () => {
      document.getElementById("lightbox-image").removeAttribute("src");
      lightboxState = null;
      if (lightboxReturnFocus?.isConnected) lightboxReturnFocus.focus();
      lightboxReturnFocus = null;
    });
  }

  function renderExperience(lang) {
    if (!expList) return;
    expList.innerHTML = content[lang].experience
      .map(
        (item) => `
            <article class="exp-item">
                <p class="exp-time">${item.time}</p>
                <div class="exp-content">
                    <h3>${item.role}</h3>
                    <p class="exp-company">${item.company}</p>
                    <p class="exp-focus">${item.focus}</p>
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
                    <p class="edu-time">${item.time}</p>
                    <div class="edu-content">
                        <h3>${item.title}</h3>
                        <p class="edu-place">${item.place}</p>
                        <p class="edu-desc">${item.desc}</p>
                        ${item.bullets?.length ? `<ul class="edu-courses">${item.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>` : ""}
                    </div>
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
                    <span class="contact-detail">
                        <span class="contact-name">${c.label}</span>
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
    document.getElementById("hero-image").alt = content[lang].hero_preview_alt;

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
    navEl?.setAttribute("aria-label", t.nav_label);
    document.getElementById("lang-switch")?.setAttribute("aria-label", t.language_label);
    if (topBtn) topBtn.setAttribute("aria-label", t.back_to_top);
  }

  function setLanguage(lang) {
    activeLanguage = lang;
    document.documentElement.lang = lang;
    renderStaticText(lang);
    renderHero(lang);
    renderAbout(lang);
    renderSkills(lang);
    renderEducation(lang);
    renderExperience(lang);
    renderProjects(lang);
    if (lightboxState) renderLightbox();
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
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = "contact";
      }
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${current}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
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
})();
