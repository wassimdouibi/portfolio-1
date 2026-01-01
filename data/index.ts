export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Strategic BI Implementation",
    description:
      "Architecting end-to-end data pipelines that convert raw requirements into actionable business intelligence.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full opacity-30",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Global Collaboration",
    description:
      "Based in Algeria, delivering high-quality technical solutions for international clients and enterprises.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Core Stack",
    description:
      "A versatile toolkit spanning BI architecture, Mobile ecosystems, and Scalable Backend systems.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Solutions Architect",
    description:
      "Bridging the gap between complex data challenges and modern software engineering.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Mobile & Backend Specialist",
    description:
      "Building robust applications with Kotlin, Spring Boot, and Django to support data-intensive workflows.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's innovate together",
    description:
      "Ready to take your data and development projects to the next level?",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const professionalJourney = [
  {
    id: 2,
    type: "job",
    organization: "3S PAY",
    role: "Mobile App Developer",
    location: "Hydra, Algiers",
    date: "01/2026 - Present",
    technologies: ["Kotlin", "Spring Boot", "Java", "REST APIs", "IoT"],
    gradient: "from-purple-400 via-pink-400 to-red-500",
  },
  {
    id: 1,
    type: "internship",
    organization: "Sonatrach",
    role: "Business Intelligence Intern",
    location: "Boumerdes, Algeria",
    date: "11/2025 - Present",
    technologies: ["BI", "Data Warehouse", "ETL", "Power BI", "Python"],
    gradient: "from-emerald-400 via-cyan-400 to-blue-500",
  },
  {
    id: 3,
    type: "project",
    organization: "AttendEase",
    role: "Mobile Developer & UI/UX Designer",
    location: "Algeria",
    date: "02/2025 - 04/2025",
    technologies: ["Kotlin", "Ktor", "MySQL", "Figma"],
    gradient: "from-blue-400 via-cyan-400 to-emerald-500",
  },
  {
    id: 4,
    type: "project",
    organization: "Food Delivery App",
    role: "Mobile Developer & UI/UX Designer",
    location: "Algeria",
    date: "11/2024 - 01/2025",
    technologies: ["Kotlin", "Ktor", "PostgreSQL", "Figma"],
    gradient: "from-orange-400 via-amber-400 to-yellow-500",
  },
  {
    id: 6,
    type: "internship",
    organization: "RDSI",
    role: "Web Developer Intern & Concept Designer",
    location: "Algeria",
    date: "08/2024 - 09/2024",
    technologies: ["React", "Postman", "Tailwind CSS", "Figma"],
    gradient: "from-indigo-400 via-blue-400 to-cyan-500",
  },
  {
    id: 7,
    type: "internship",
    organization: "Bac Operations (ESI ex INI)",
    role: "Technical Support Assistant",
    location: "Algeria",
    date: "07/2024 - 08/2024",
    technologies: [
      "On-site Deployment",
      "Technical Support",
      "Data Management",
    ],
    gradient: "from-pink-400 via-rose-400 to-orange-500",
  },
  {
    id: 5,
    type: "project",
    organization: "CaptainEarth",
    role: "Mobile App Developer",
    location: "Algeria",
    date: "02/2023 - 05/2023",
    technologies: ["Flutter", "MySQL", "Figma"],
    gradient: "from-green-400 via-lime-400 to-cyan-500",
  },
];

export const projects = [
  {
    id: 1,
    title: "Enterprise Data Warehouse Solution",
    des: "Designed and implemented a comprehensive Data Warehouse architecture with ETL pipelines, enabling real-time business analytics and reporting for enterprise decision-making.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/wassimdouibi",
  },
  {
    id: 2,
    title: "Mobile Analytics Dashboard",
    des: "Built a native Android application with Kotlin and Jetpack Compose for visualizing business KPIs and metrics with real-time data synchronization.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/wassimdouibi",
  },
  {
    id: 3,
    title: "REST API for BI Platform",
    des: "Developed a scalable backend API using Spring Boot and Kotlin for a Business Intelligence platform, featuring authentication, data processing, and reporting endpoints.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/wassimdouibi",
  },
  {
    id: 4,
    title: "Statistical Analysis & Modeling System",
    des: "Created advanced statistical models and analytical dashboards using Python, Django, and data visualization libraries to solve complex business problems.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/wassimdouibi",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Business Intelligence & Data Engineering",
    desc: "Specialized in designing end-to-end BI solutions: from requirement gathering and dimensional modeling to implementing robust ETL/ELT pipelines and interactive analytical dashboards.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile Development (Android)",
    desc: "Expertise in building native Android applications using Kotlin and Jetpack Compose, following Clean Architecture principles and modern dependency injection with Hilt.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Back-End & API Development",
    desc: "Developing scalable server-side applications with Spring Boot (Kotlin/Java) and Django. Proficient in RESTful API design, authentication (Djoser/JWT), and database management.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Data Analysis & Statistical Modeling",
    desc: "Leveraging Python and SQL to analyze high-volume data, detect anomalies, and build predictive models that drive strategic business decisions and operational efficiency.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/wassimdouibi",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/douibi-wassim/",
  },
  {
    id: 3,
    img: "/behance.svg",
    link: "https://www.behance.net/douibiwassim",
  },
];
