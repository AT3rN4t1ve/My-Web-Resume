export const PORTFOLIO_DATA = {
  personal: {
    name: "Atthakit Khampraphai",
    nickname: "Petch",
    roles: ["Computer Science Student", "Frontend Developer", "Backend Developer", "Full Stack Developer"],
    email: "kh.callphet@gmail.com",
    github: "https://github.com/AT3rN4t1ve",
    linkedin: null, // ✅ แก้ไขใส่ลิงก์จริง หรือ null ถ้าไม่มี
    location: "Nakhonsawan, Thailand",
    about: "",
  },
  
  education: [
    {
      year: "2021 - Present",
      degree: "Bachelor of Science (Computer Science)",
      school: "University of Phayao",
    },
    {
      year: "2018 - 2021",
      degree: "High School (Science-Mathematics)",
      school: "Potisarnsuksa School"
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
        "💊 Medication reminder system using Local Notifications",
        "📝 Track and record medication usage history",
        "🔍 Search for medication information and side effects",
        "📊 Real-time dashboard summarizing medication usage data"
      ],
      tags: ["Dart", "Flutter", "JavaScript", "Node.js", "Express.js", "MySQL", "REST API", "Git"]
    },
    
    {
      id: 2,
      role: "Full Stack Developer Intern",
      company: "Betime Solution",
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
    // ✅ ลบ experience ว่างออก และรวมเป็นอันเดียว
  ],
  
  skills: {
    frontend: [
      { name: "React.js", level: 85 },
      { name: "Angular", level: 75 }, 
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "TypeScript", level: 75 }, 
      { name: "Tailwind CSS", level: 75 },
      { name: "HTML5 / CSS3", level: 80 },
      { name: "Flutter", level: 70 },
    ],
    backend: [
      { name: "Node.js", level:85 },
      { name: "Express.js", level: 85 },
      { name: "Java SpringBoot", level: 75 },
      { name: "MySQL / PostgreSQL", level: 80 },
      { name: "Prisma", level: 80 },
      { name: "Elasticsearch", level: 70 },
    ],
    tools: [
      "Git / GitHub",
      "VS Code",
      "Figma",
      "Postman",
      "Vercel",
      "Elasticsearch & Kibana",
      "Docker",
      "IntelliJ IDEA",
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "Applied Medical Informatics for Consume Medicine Behavior",
      description: "Mobile application for medication management and tracking consumption behavior. Developed with Flutter (Frontend) and Node.js (Backend), featuring medication reminders, usage history tracking, and drug information search.",
      features: [
        "💊 Medication reminder system using Local Notifications",
        "📝 Track and record medication usage history",
        "🔍 Search for medication information and side effects",
        "📊 Real-time dashboard summarizing medication usage data"
      ],
      tags: ["Flutter", "Dart", "Node.js", "Express.js", "Prisma", "MySQL"],
      github: "https://github.com/AT3rN4t1ve/Back-End-Final-Project",
      demo: null, // ✅ ใส่ null ถ้ายังไม่ deploy หรือใส่ลิงก์จริง
    },
    {
      id: 2,
      title: "DIP Search System",
      description: "Patent information search and management system for the Department of Intellectual Property (DIP). Utilizes Elasticsearch for fast and accurate Full-text Search, and Kibana for real-time data analysis and visualization.",
      features: [
        "🔍 Full-text Search with Elasticsearch - Fast search response < 1 second",
        "📈 Real-time Data Visualization with Kibana",
        "🎯 Advanced Filter and Faceted Search",
        "📋 Export search results in various formats",
        "👥 Multi-user System with Role Management"
      ],
      tags: ["Angular", "TypeScript", "Java SpringBoot", "Elasticsearch", "Kibana"],
      github: null, // ✅ ถ้าเป็นงานบริษัทอาจใส่ null
      demo: null, // ✅ งานบริษัทมักไม่มี public demo
      isCompanyProject: true, // ✅ Flag บอกว่าเป็นงานบริษัท
    },
  ]
};