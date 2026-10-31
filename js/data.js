/* =====================================================================
   PORTFOLIO CONTENT: the ONLY file you need to edit for day-to-day updates.
   - Add an item: copy an existing object inside its array and change the text.
   - Reorder: move objects up/down. Remove: delete the object.
   - Anything marked TODO is a placeholder waiting for your real info.
   ===================================================================== */
const PORTFOLIO = {
  profile: {
    name: "Mohamed Gamil Khalaf",
    shortName: "Mohamed Gamil",
    role: "Backend Software Engineer (.NET)",
    tagline:
      "I build scalable, secure REST APIs and event-driven backends with C# and ASP.NET Core, with a strong foundation in operating systems and low-level performance.",
    email: "mohamed.gamil.khalaf1@gmail.com",
    phone: "+20 110 253 5450",
    location: "Giza, Egypt",
    linkedin: "https://www.linkedin.com/in/mohamedgamil13/",
    github: "https://github.com/MohamedGamil13",
    photo: "assets/images/profile.jpeg",
    resume: "assets/docs/MohamedGamil.pdf",
  },

  about: [
    "Final-year Computer Science student at Ain Shams University (graduating July 2027), specialising in backend development and systems engineering on the .NET ecosystem.",
    "I design clean, layered APIs: authentication, caching, background processing and messaging, and I enjoy understanding what happens below the framework, from memory allocators to query plans.",
    "I also build cross-platform mobile apps with Flutter, which gives me an end-to-end view when working with frontend and mobile teams.",
  ],

  skills: [
    {
      group: "Backend",
      items: [
        "C#",
        "ASP.NET Core Web API",
        "Entity Framework Core",
        "LINQ",
        "RESTful APIs",
        "JWT Auth & RBAC",
      ],
    },
    {
      group: "Architecture",
      items: [
        "Clean Architecture",
        "DDD Fundamentals",
        "Repository Pattern",
        "Dependency Injection",
        "SOLID",
        "Event-Driven Design",
        "Microservices Fundamentals",
      ],
    },
    {
      group: "Data & Messaging",
      items: [
        "SQL Server",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "RabbitMQ",
        "Hangfire",
      ],
    },
    {
      group: "Distributed Systems",
      items: [
        "Idempotency",
        "Retries",
        "Dead Letter Queues",
        "Cache-Aside & TTL",
      ],
    },
    {
      group: "Tools & DevOps",
      items: ["Docker", "Git & GitHub", "Postman", "Serilog"],
    },
    {
      group: "Mobile & Systems",
      items: [
        "Flutter & Dart",
        "Firebase",
        "BLoC",
        "C / C++",
        "Memory Management",
        "OS Kernels",
      ],
    },
  ],

  experience: [
    {
      role: "Head of Backend(Node.js) Committee",
      org: "ConnectX Student Activity",
      period: "Aug 2026 - Present",
      points: [
        "Led the committee: prepared and delivered Backend(Node.js) sessions and workshops.",
        "Mentored trainees, assigned practical tasks, reviewed submissions and evaluated progress.",
      ],
    },
    {
      role: "Backend Developer Trainee",
      org: "Information Technology Institute (ITI)",
      period: "Aug 2026 - Sep 2026",
      points: [
        "Designed and optimised SQL Server databases using normalisation, indexing and efficient T-SQL.",
        "Built data access with .NET 8 and EF Core while avoiding N+1 query problems.",
        "Applied SOLID and Clean Code practices, input validation and parameterised queries against SQL injection.",
      ],
    },
    {
      role: "Head of Flutter Committee",
      org: "ConnectX Student Activity",
      period: "Jul 2025 - Aug 2026",
      points: [
        "Led the committee: prepared and delivered Flutter sessions and workshops.",
        "Mentored trainees, assigned practical tasks, reviewed submissions and evaluated progress.",
      ],
    },
    {
      role: "Cross-Platform Mobile Development Trainee",
      org: "Digital Egypt Pioneers Initiative (DEPI)",
      period: "Nov 2025 - Jul 2026",
      points: [
        "Completed an intensive scholarship track in Flutter and Dart.",
        "Built responsive apps with Firebase services and BLoC state management.",
      ],
    },
    {
      role: "Human Resources Team Member",
      org: "MSP Tech Club, Ain Shams University",
      period: "Dec 2024 - Jul 2025",
      points: [
        "Ran interviews and onboarding for new members and helped plan club events and sessions.",
      ],
    },
  ],

  /* PROJECT IMAGES
     1. Save a screenshot in assets/images/ (e.g. incident-platform.png).
     2. Use 16:9 images, around 1280x720px, PNG or WebP, under 300 KB.
     3. Set image: "assets/images/incident-platform.png" below.
     If the file is missing, a neutral placeholder is shown automatically.
     For backend projects use an architecture diagram or Swagger UI screenshot.
     featured: true makes the card full-width (use for your 1-2 best projects). */
  projects: [
    {
      title: "FinCore — Core Payment Processing & Double-Entry Ledger Engine",
      featured: true,
      summary:
        "Production-grade payment gateway and immutable double-entry ledger platform with real-time automated 3-way bank reconciliation.",
      highlights: [
        "Built a production-grade core payment processing engine and immutable double-entry ledger using C#, .NET 8, ASP.NET Core, and EF Core to handle payment lifecycles and ledger entries with zero balance variance",
        "Implemented an automated three-way reconciliation engine using set-based SQL queries to match internal ledger records, PSP reports, and bank statements, detecting and flagging transaction discrepancies",
        "Integrated idempotent payment APIs, finite lifecycle state machines, and SHA-256 tamper-evident hash chaining to enforce data immutability and prevent duplicate transactions",
        "Engineered a resilient payment provider integration layer using Polly circuit breakers, outbox event publishing, and HMAC-signed webhooks to handle asynchronous callbacks and network timeouts",
        "Hardened system security and data privacy through API key SHA-256 hashing, rate limiting, BOLA prevention, maker-checker authorization workflows, and structured audit logging",
      ],
      stack: [
        "C#",
        ".NET 8",
        "ASP.NET Core",
        "EF Core",
        "SQL Server",
        "Docker",
        "Polly",
        "xUnit",
        "Testcontainers",
        "Serilog",
      ],
      images: [
        "assets/images/Fincore.png",
        "assets/images/Fincore1.png",
        "assets/images/Fincore2.png",
        "assets/images/Fincore3.png",
        "assets/images/Fincore4.png",
        "assets/images/Fincore5.png",
      ],
      repo: "https://github.com/MohamedGamil13/FinCore",
      demo: "",
    },
    {
      title: "RootLens — AI Incident Intelligence Platform",
      featured: true,
      summary:
        "AI-driven backend for automated microservices root-cause analysis using telemetry graph ranking and LLM reasoning.",
      highlights: [
        "FastAPI, PostgreSQL, and Alembic with JWT authentication, role-based access control, and asynchronous background task execution.",
        "Parquet telemetry ingestion, NetworkX graph-based service dependency ranking, and isolated PostgreSQL database schema segregation.",
        "Automated root-cause analysis pipeline using LLM APIs and signal detection that produces evidence-grounded diagnostic reports and verified citations.",
        "Custom incident analysis workflow featuring z-score anomaly detection, log template error-shift analysis, and strict data-leakage prevention safeguards.",
      ],
      stack: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Alembic",
        "Pandas",
        "NetworkX",
        "Docker",
        "Pytest",
      ],
      images: [
        "assets/images/screen1.png",
        "assets/images/screen2.png",
        "assets/images/screen3.png",
      ],
      repo: "https://github.com/MohamedGamil13/Rootlens-GP",
      demo: "",
    },
    {
      title: "Faculty Operating System (FOS)",
      featured: true,
      summary: "Kernel memory and process management in C and Assembly.",
      highlights: [
        "Kernel and user-level heap allocators (kmalloc/kfree) with exact-fit and worst-fit strategies, stress-tested with 1000+ allocations.",
        "Segment management with linked lists and merging to reduce external fragmentation.",
        "Page replacement (LRU, Clock), CPU scheduling and synchronisation with spinlocks and semaphores.",
      ],
      stack: ["C", "Assembly", "Kernel", "Paging", "Synchronisation"],
      images: ["assets/images/OS Arch.jpg", "assets/images/OS Modules.jpg"],
      repo: "https://github.com/Mohamedsadek12/OS-Project",
      demo: "https://lnkd.in/p/eBeJY7vz",
    },
    {
      title: "ServiMarket",
      summary: "Service marketplace mobile app (DEPI final project).",
      highlights: [
        "Real-time chat via Firestore streams, GPS location-aware sorting and keyword-based filtering.",
        "GoRouter navigation and BLoC state management; Cloudinary for media uploads.",
      ],
      stack: ["Flutter", "Dart", "Firebase", "BLoC", "Cloudinary"],
      image: "assets/images/ServiMarket.png",
      repo: "https://github.com/MohamedGamil13/DEPI-GP-Project",
      demo: "",
    },
    {
      title: "Wen Meni Wasalny",
      summary: "Navigation and delivery system with shortest-path routing.",
      highlights: [
        "Qt desktop GUI map using Dijkstra's algorithm for routing.",
        "BFS and DFS for graph traversal and location mapping.",
      ],
      stack: ["C++", "Qt", "Graph Theory"],

      repo: "https://github.com/mosaberr911/mini-wasslni-project",
      demo: "https://lnkd.in/p/eAFMaibf",
    },
    {
      title: "Bookly",
      summary: "Book discovery app with REST integration.",
      highlights: [
        "MVVM with BLoC and Get-It dependency injection; Dio with pagination.",
        "Category search and external preview links.",
      ],
      stack: ["Flutter", "Dio", "BLoC", "MVVM"],
      image: "assets/images/bookly.png",
      repo: "",
      demo: "",
    },
    // Add new projects here: copy any object above and edit it.
  ],

  // TODO: fill in issuer / date / link (credential URL) for each certificate.
  // certificates: [
  //   {
  //     title: "Cross-Platform Mobile Development Track (Flutter)",
  //     issuer: "Digital Egypt Pioneers Initiative (DEPI)",
  //     date: "2026",
  //     link: "assets/images/Mohamed Gamil Khalaf Ahmed.jpg",
  //   },
  //   {
  //     title: "Backend Developer Training (.NET)",
  //     issuer: "Information Technology Institute (ITI)",
  //     date: "2026",
  //     link: "",
  //   },
  //   {
  //     title: "Mastering Flutter: Responsive & Adaptive UI Design",
  //     issuer: "TODO",
  //     date: "2026",
  //     link: "",
  //   },
  //   {
  //     title: "Flutter Advanced Course: BLoC and MVVM Pattern",
  //     issuer: "TODO",
  //     date: "2025",
  //     link: "",
  //   },
  //   {
  //     title: "Flutter and Dart Development Course",
  //     issuer: "TODO",
  //     date: "2025",
  //     link: "",
  //   },
  // ],
};
