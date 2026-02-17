export const PORTFOLIO_DATA = {
  personal: {
    name: "Atthakit Khampraphai",
    nickname: "Petch",
    roles: ["Backend Developer", "Full Stack Developer"],
    email: "kh.callphet@gmail.com",
    github: "https://github.com/AT3rN4t1ve",
    linkedin: "https://www.linkedin.com/in/atthakit-khampraphai/", 
    location: "Nakhonsawan, Thailand",
    about: "Hi I'm Petch a Full Stack Developer dedicated to leveraging modern web technologies to deliver high-quality solutions. My top priority is building user-centric applications that seamlessly blend visual refinement with exceptional performance. With solid experience in both Frontend and Backend Development, I emphasize writing clean code and designing system architectures that are maintainable, flexible, and highly reliable. I am passionate about continuous learning through hands-on practice, always striving to improve and deliver the best possible value in every project.",
  },
  
  education: [
    {
      year: "2022 - Present",
      degree: "Bachelor of Science (Computer Science)",
      school: "University of Phayao",
    },
    {
      year: "2019 - 2021",
      degree: "High School (Science-Mathematics)",
      school: "Photisansuksa School"
    }
  ],
  
  experience: [
    {
      id: 1,
      role: "Applied Medical Informatics for Consume Medicine Behavior",
      company: "University Of Phayao",
      period: "Oct 2024 - Mar 2025",
      description: "Mobile application for medication management and tracking consumption behavior. Developed with Flutter (Frontend) and Node.js (Backend), featuring medication reminders, usage history tracking, and drug information search.",
      achievements: [
        "📱 Developed a cross-platform mobile application using Flutter with timely medication notifications",
        "🎨 Designed a user-friendly interface focused on real-world patient usability",
        "📷 Integrated OCR functionality to automatically scan and extract prescription details", 
        "⚙️ Built a robust back-end system with Node.js, Prisma, and MySQL",
        "🔐 Implemented secure API communication and JWT authentication"
      ],
      tags: ["Dart", "Flutter", "JavaScript", "Node.js", "Express.js", "MySQL", "REST API", "Git"]
    },
    {
      id: 2,
      role: "Full Stack Developer Intern",
      company: "Betime Solution.co.Ltd",
      period: "Nov 2025 - Feb 2026",
      description: "Developed enterprise web applications for government agencies, leading 2 key projects. Responsibilities encompassed Frontend Development (Angular), Backend Development (Java Spring Boot), and implementing Search Engine Technology (Elasticsearch & Kibana)",
      achievements: [
        "✅ Developed a centralized Component Library and Design System using Angular to standardize UI/UX across the organization",
        "✅ Engineered a high-performance patent search system using Elasticsearch, achieving query response times of under 1 second for tens of thousands of records",
        "✅ Designed interactive Dashboards and Data Visualizations using Kibana to facilitate real-time data analysis",
        "✅ Developed robust RESTful APIs using Java Spring Boot to seamlessly integrate databases with Elasticsearch",
        "✅ Collaborated with cross-functional teams on UX/UI design to deliver user-centric solutions that meet actual business requirements"
      ],
      tags: ["Angular", "TypeScript", "Java SpringBoot", "Elasticsearch", "Kibana","REST API", "Git"]
    }
  ],
  
  skills: {
    frontend: [
      "React",
      "Angular",
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Dart",
      "Flutter",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "Java SpringBoot",
      "MySQL",
      "PostgreSQL",
      "Prisma ORM",
      "Elasticsearch",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Postman",
      "Vercel",
      "Elasticsearch",
      "Kibana",
      "Docker",
      "OCR",
      "IntelliJ IDEA",
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "Applied Medical Informatics for Consume Medicine Behavior (Frontend)",
      description: "Built cross-platform mobile UI for medication tracking, implemented local notifications for reminders, and designed interactive history dashboards",
      features: [
        "📱 Developed a cross-platform mobile application using Flutter with timely medication notifications",
        "🎨 Designed a user-friendly interface focused on real-world patient usability",
        "📷 Integrated OCR functionality to automatically scan and extract prescription details",
      ],
      tags: ["Flutter", "Dart", "Node.js", "Express.js", "Prisma", "MySQL", "Git"],
      github: "https://github.com/AT3rN4t1ve/Front-End-Final-Project",
      demo: null, 
      image: "/assets/pill.png", 
    },
    {
      id: 2,
      title: "Applied Medical Informatics for Consume Medicine Behavior (Backend)",
      description: "Engineered RESTful APIs to handle consumption data logs, managed database for medication history, and implemented search logic for drug information retrieval",
      features: [
        "⚙️ Built a robust back-end system with Node.js, Prisma, and MySQL",
        "🔐 Implemented secure API communication and JWT authentication"
      ],
      tags: ["JavaScript", "Node.js", "Express.js", "Prisma ORM", "MySQL", "Git"],
      github: "https://github.com/AT3rN4t1ve/Back-End-Final-Project",
      demo: null,
      image: "/assets/database.png", 
    },
    {
      id: 3,
      title: "DIP Search System (Intern)",
      description: "Patent information search and management system for the Department of Intellectual Property (DIP). Utilizes Elasticsearch for fast and accurate Full-text Search, and Kibana for real-time data analysis and visualization.",
      features: [
        "🔍 Full-text Search with Elasticsearch - Fast search response < 1 second",
        "📈 Real-time Data Visualization with Kibana",
        "🎯 Advanced Filter and Faceted Search",
        "📋 Export search results in various formats",
        "👥 Multi-user System with Role Management"
      ],
      tags: ["Angular", "TypeScript", "Java SpringBoot", "Elasticsearch", "Kibana", "Git"],
      github: null, 
      demo: null, 
      isCompanyProject: true, 
      image: "/assets/thinking.png", 
    }
  ]
};