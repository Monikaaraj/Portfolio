export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categoryGroup: 'ai-ml' | 'blockchain' | 'robotics-iot' | 'assistive-tech';
  shortDescription: string;
  fullDescription: string;
  problemStatement?: string;
  keyFeatures: string[];
  implementedFeatures?: string[];
  plannedFeatures?: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  achievementBadge?: string;
  illustrationType: 'trustmed' | 'stocksight' | 'agriculture' | 'humanoid' | 'petfeeder' | 'arbelt';
  disclaimer?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field?: string;
  boardOrAffiliation?: string;
  period: string;
  score: string;
  scoreType: string;
  status: 'In Progress' | 'Completed';
  location: string;
  highlights: string[];
}

export interface AchievementItem {
  title: string;
  event: string;
  organization: string;
  type: 'award' | 'academic' | 'hackathon' | 'leadership';
  badge: string;
  description: string;
  year: string;
}

export interface ActivityItem {
  title: string;
  role: string;
  category: 'Leadership' | 'Hackathon & Innovation' | 'Technical' | 'Community';
  description: string;
  tags: string[];
}

export const PERSONAL_INFO = {
  name: "Monika C R",
  initials: "MCR",
  title: "Computer Science Engineering Student | AI & Machine Learning Enthusiast | Aspiring Software Developer",
  taglines: [
    "AI & Machine Learning Enthusiast",
    "Building Intelligent Solutions",
    "Turning Ideas into Real-World Projects",
    "Bridging AI, Software & Robotics"
  ],
  location: "Bengaluru, India",
  email: "monikaaraj03@gmail.com",
  phone: "[ADD MY PHONE NUMBER]",
  linkedin: "https://www.linkedin.com/in/monika-c-r-73099230b",
  github: "https://github.com/Monikaaraj",
  resumeUrl: "#", // Placeholder for [ADD RESUME PDF]
  photoUrl: "", // Placeholder for [ADD MY PHOTO]
  cgpa: "9.6",
  university: "JSS Academy of Technical Education, Bengaluru (VTU)",
  degree: "B.E. in Computer Science & Engineering (AI & ML)",
  graduationYear: "2027",
  aboutIntro: `I am a Computer Science Engineering undergraduate specializing in Artificial Intelligence and Machine Learning, passionate about building intelligent systems and practical technology solutions that solve real-world problems.

I enjoy exploring the intersection of AI, machine learning, blockchain, software development, and emerging technologies. From developing predictive analytics applications to privacy-preserving healthcare platforms and assistive robotic systems, I love transforming ideas into functional solutions.

I am continuously learning, experimenting, and improving my technical skills while looking for opportunities to contribute to meaningful software and AI-driven projects.`
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "JSS Academy of Technical Education, Bengaluru",
    degree: "B.E. in Computer Science and Engineering",
    field: "Artificial Intelligence & Machine Learning",
    boardOrAffiliation: "Visvesvaraya Technological University (VTU)",
    period: "2023 – 2027",
    score: "9.6 CGPA",
    scoreType: "Cumulative GPA",
    status: "In Progress",
    location: "Bengaluru, Karnataka",
    highlights: [
      "Top-tier academic ranking with consistent 9.6 CGPA",
      "Specialized coursework in AI/ML, Data Structures, OOP, DBMS, Computer Networks & OS",
      "Active participant in technical symposiums, hackathons, and departmental initiatives",
      "Elected/acting as Class Representative with responsibilities in academic coordination"
    ]
  },
  {
    institution: "Narayana PU College",
    degree: "Pre-University Education (12th Grade)",
    field: "PCMB (Physics, Chemistry, Mathematics, Biology)",
    boardOrAffiliation: "Department of Pre-University Education, Karnataka",
    period: "2021 – 2023",
    score: "96.65%",
    scoreType: "Final Board Percentage",
    status: "Completed",
    location: "Bengaluru, Karnataka",
    highlights: [
      "Distinction score of 96.65% in PCMB stream",
      "Strong analytical foundation in Mathematics and physical sciences",
      "Developed problem-solving rigor and analytical reasoning"
    ]
  },
  {
    institution: "Oxford English High School",
    degree: "Secondary School Leaving Certificate (SSLC - 10th Grade)",
    field: "General Science & Mathematics",
    boardOrAffiliation: "Karnataka Secondary Education Examination Board (KSEEB)",
    period: "Passed in 2021",
    score: "95%",
    scoreType: "Board Percentage",
    status: "Completed",
    location: "Bengaluru, Karnataka",
    highlights: [
      "Secured 95% with high distinction",
      "Active participant in school science exhibitions and cultural activities",
      "Strong foundation in core computing and natural sciences"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages for systems, algorithms, and applications",
    iconName: "Code2",
    skills: [
      { name: "Python", highlight: true },
      { name: "Java", highlight: true },
      { name: "C", highlight: false }
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Predictive modeling, deep algorithms, federated systems & sensory AI",
    iconName: "BrainCircuit",
    skills: [
      { name: "Machine Learning", highlight: true },
      { name: "Random Forest", highlight: true },
      { name: "Predictive Modelling", highlight: true },
      { name: "Feature Engineering", highlight: false },
      { name: "Model Evaluation", highlight: false },
      { name: "Federated Learning", highlight: true },
      { name: "Computer Vision", highlight: true },
      { name: "Face Recognition", highlight: false },
      { name: "Speech Recognition", highlight: false },
      { name: "Gesture Recognition", highlight: false },
      { name: "Text-to-Speech", highlight: false }
    ]
  },
  {
    title: "Frameworks & Libraries",
    description: "High-performance backends, ML toolkits, and modern frontend stacks",
    iconName: "Layers",
    skills: [
      { name: "FastAPI", highlight: true },
      { name: "React", highlight: true },
      { name: "Scikit-learn", highlight: true },
      { name: "OpenCV", highlight: true },
      { name: "Flower (FL)", highlight: true },
      { name: "Pandas", highlight: false },
      { name: "NumPy", highlight: false }
    ]
  },
  {
    title: "Blockchain & Web Technologies",
    description: "Decentralized networks, smart contracts, and responsive interfaces",
    iconName: "Blocks",
    skills: [
      { name: "Blockchain", highlight: true },
      { name: "Polygon", highlight: true },
      { name: "IPFS", highlight: true },
      { name: "Smart Contracts", highlight: true },
      { name: "HTML5", highlight: false },
      { name: "CSS3", highlight: false },
      { name: "JavaScript", highlight: false },
      { name: "REST APIs", highlight: true }
    ]
  },
  {
    title: "CS Fundamentals & Databases",
    description: "Architectural foundations, query optimization, and engineering paradigms",
    iconName: "Database",
    skills: [
      { name: "Data Structures & Algorithms", highlight: true },
      { name: "OOP (Object-Oriented Programming)", highlight: true },
      { name: "DBMS", highlight: false },
      { name: "SQL", highlight: true },
      { name: "Operating Systems", highlight: false },
      { name: "Computer Networks", highlight: false }
    ]
  },
  {
    title: "Tools & Analytics Platforms",
    description: "Version control, interactive computation, and enterprise BI visualization",
    iconName: "Wrench",
    skills: [
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "VS Code", highlight: false },
      { name: "Google Colab", highlight: false },
      { name: "Jupyter Notebook", highlight: false },
      { name: "Tableau", highlight: true },
      { name: "Power BI", highlight: true },
      { name: "Microsoft Excel", highlight: false }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "trustmed-ai",
    title: "TrustMed-AI",
    subtitle: "Decentralized Healthcare Platform",
    category: "AI | Blockchain | Healthcare",
    categoryGroup: "blockchain",
    shortDescription: "A secure, privacy-preserving, and consent-driven healthcare platform combining IPFS, Polygon smart contracts, and Federated Learning for decentralized medical data management.",
    fullDescription: "TrustMed-AI is an AI and blockchain-based healthcare platform designed to support secure, privacy-preserving, and consent-based sharing of medical records between patients, doctors, and researchers. The objective is to give patients greater control over their medical information while enabling authorized healthcare professionals and researchers to access relevant information responsibly without central points of failure.",
    problemStatement: "Traditional healthcare databases suffer from centralized vulnerabilities, siloed patient data, and privacy violations when sharing datasets for AI medical research.",
    keyFeatures: [
      "Decentralized medical record storage using IPFS (InterPlanetary File System)",
      "CID-based (Content Identifier) cryptographic file identification and fast retrieval",
      "Polygon blockchain integration for transparent, tamper-proof audit trails",
      "Smart contract-based granular patient consent and doctor access management",
      "Federated Learning integration to train AI models without transferring raw patient datasets",
      "Flower framework implementation utilizing FedAvg (Federated Averaging) for collaborative model aggregation",
      "AI-based healthcare risk prediction running on verified local telemetry",
      "Responsive React-based patient and doctor portal",
      "High-performance FastAPI backend with modular RESTful APIs"
    ],
    technologies: [
      "Python", "FastAPI", "React", "Flower", "Federated Learning",
      "FedAvg", "Polygon", "IPFS", "Smart Contracts", "REST APIs"
    ],
    githubUrl: "https://github.com/Monikaaraj/trustmed-ai",
    demoUrl: "https://[ADD-MY-DEMO-URL]/trustmed-ai",
    illustrationType: "trustmed",
    disclaimer: "Note: Architecture designed for privacy-preserving federated research. Does not claim certified HIPAA/statutory compliance without audited production legal verification."
  },
  {
    id: "stocksight",
    title: "StockSight",
    subtitle: "Stock Market Prediction & Analytics",
    category: "Artificial Intelligence | Machine Learning | Financial Analytics",
    categoryGroup: "ai-ml",
    shortDescription: "A machine-learning financial intelligence platform analyzing historical market indicators, engineered momentum metrics, and predicting directional price movement.",
    fullDescription: "StockSight is a machine-learning-based financial analytics application that analyzes historical stock market data and predicts potential stock price movement. It combines predictive modelling and technical indicators to provide traders and analysts with actionable insights into stock trends.",
    problemStatement: "Financial markets generate complex sequential data where raw price points lack context without structured technical indicators and disciplined time-split validation.",
    keyFeatures: [
      "Automated historical stock market data ingestion using Yahoo Finance (yfinance)",
      "Random Forest Classifier trained to predict upward or downward price movement",
      "Comprehensive technical indicators: Simple Moving Average (SMA 20), Relative Strength Index (RSI 14), and MACD",
      "Rigorous feature engineering and rolling momentum window data preprocessing",
      "Chronological 80/20 train/test split to prevent temporal lookahead data leakage",
      "Thorough model evaluation with precision, recall, confusion matrix, and classification reports",
      "Interactive data visualization interface with exportable CSVs formatted for Tableau and Power BI",
      "Default stock ticker: AAPL (configurable to any ticker symbol)",
      "Lightweight FastAPI microservice architecture with interactive dashboards"
    ],
    technologies: [
      "Python", "Random Forest", "Scikit-learn", "Pandas", "NumPy",
      "yfinance", "Technical Analysis", "FastAPI", "Tableau", "Power BI"
    ],
    githubUrl: "https://github.com/Monikaaraj/stocksight",
    demoUrl: "https://[ADD-MY-DEMO-URL]/stocksight",
    illustrationType: "stocksight",
    disclaimer: "Educational analytics tool: predictions are probabilistic trend signals based on technical indicators and do not constitute guaranteed financial or investment advice."
  },
  {
    id: "smart-agriculture",
    title: "Smart Agriculture",
    subtitle: "Multilingual Voice Assistant",
    category: "Artificial Intelligence | Agriculture | Speech Technology",
    categoryGroup: "ai-ml",
    achievementBadge: "3rd Prize Winner",
    shortDescription: "An award-winning multilingual voice-enabled AI assistant delivering localized agronomic guidance, water/sunlight estimation, and fertilizer cost analytics.",
    fullDescription: "A multilingual AI-powered agriculture assistant designed to make critical agricultural information directly accessible to grassroots farmers through natural voice interaction in regional Indian languages. The system allows users to interact in their native tongue and receive tailored agricultural recommendations without literacy barriers.",
    problemStatement: "Grassroots farmers in multilingual regions face digital literacy hurdles when interacting with text-heavy digital portals, resulting in suboptimal resource allocation.",
    keyFeatures: [
      "Seamless support for 5 languages: English, Kannada, Tamil, Telugu, and Hindi",
      "Full voice-based conversational interaction loop tailored for vernacular speakers",
      "Speech recognition pipeline paired with localized Text-to-Speech (TTS) audio responses",
      "Algorithmic sunlight duration and crop-specific water requirement calculations",
      "Dynamic fertilizer dosage and regional cost estimation models",
      "Automated downloadable summary reports in PDF format for offline advisory use",
      "Ultra-simple, accessible, high-contrast mobile-first user interface"
    ],
    technologies: [
      "Python", "AI", "Speech Recognition", "Text-to-Speech",
      "Multilingual Processing", "PDF Generation", "Vernacular NLP"
    ],
    githubUrl: "https://github.com/Monikaaraj/smart-agriculture-assistant",
    demoUrl: "https://[ADD-MY-DEMO-URL]/smart-agriculture-assistant",
    illustrationType: "agriculture"
  },
  {
    id: "assistive-humanoid-robot",
    title: "Personalized Assistive Humanoid Robot",
    subtitle: "Design and Development for Human Support",
    category: "Robotics | AI | Computer Vision | Assistive Tech",
    categoryGroup: "robotics-iot",
    shortDescription: "An intelligent embodied assistive humanoid robot platform engineered for human support, facial interaction, emergency safety alerts, and sensory awareness.",
    fullDescription: "An intelligent assistive humanoid robot designed to interact with people, understand their physical surroundings, and provide personalized assistance. Unlike a conventional stationary voice assistant, the concept focuses on a physical robotic embodiment capable of movement, visual interaction, and proactive real-world human support.",
    problemStatement: "Elderly and individuals requiring physical assistance need more than voice bots—they require visual awareness, follow-me locomotion, safety alerting, and non-verbal gesture recognition.",
    keyFeatures: [
      "Computer vision pipeline for face recognition and personalized greetings",
      "Interactive servo-driven expressive facial interaction and friendly waving gestures",
      "Object tracking vision module designed for follow-me physical navigation",
      "Sign-language-to-speech conversion framework for inclusive accessibility",
      "Real-time fall detection algorithm triggering automated emergency alert protocols",
      "Hands-free two-way voice conversation and interactive prompt handling",
      "Embedded graphical display for medication reminders, tasks, and status alerts",
      "YOLO-based real-time obstacle and common household object identification",
      "Safety sensor subsystem for rapid fire, heat, and smoke alert dispatch",
      "Eco-conscious solar self-recharging architecture concept",
      "Integrated HEPA air purification module concept for clean indoor living"
    ],
    implementedFeatures: [
      "Face recognition and personalized welcoming greeting pipeline (OpenCV)",
      "Facial interaction, head articulation, and greeting wave servo motion control",
      "Voice recognition and text-to-speech conversational interaction loop",
      "YOLO object identification pipeline for situational room awareness",
      "ESP32 and Arduino firmware interfacing for multi-motor actuation and sensor polling"
    ],
    plannedFeatures: [
      "Autonomous follow-me locomotion tuning with depth-based obstacle avoidance",
      "Real-time dynamic sign-language gesture-to-speech neural model deployment",
      "Edge-based vision fall detection integrated with cellular SMS emergency beacon",
      "Solar charging station docking and modular air filtration chamber integration"
    ],
    technologies: [
      "Python", "OpenCV", "Computer Vision", "Speech Recognition", "Text-to-Speech",
      "YOLO Object Detection", "ESP32-CAM", "ESP32", "Arduino", "Motor Drivers", "Servo Motors"
    ],
    githubUrl: "https://github.com/Monikaaraj/assistive-humanoid-robot",
    demoUrl: "https://[ADD-MY-DEMO-URL]/assistive-humanoid-robot",
    illustrationType: "humanoid",
    disclaimer: "Advanced robotics research project. Clearly demarcates implemented sensory/motor modules from conceptual roadmap features."
  },
  {
    id: "smart-pet-feeder",
    title: "Smart Pet Feeder",
    subtitle: "Real-Time Food Monitoring System",
    category: "IoT | Smart Automation | Embedded Systems",
    categoryGroup: "robotics-iot",
    shortDescription: "An automated IoT pet nutrition management system featuring real-time food level tracking, telemetry notifications, and scheduled portion control.",
    fullDescription: "A smart pet-feeding concept designed to make pet food monitoring and feeding management easier through automated monitoring and timely alerts. The system monitors food levels and alerts owners before reserves run low.",
    problemStatement: "Busy pet owners risk irregular feeding schedules or empty containers when manual inspection is neglected, impacting pet health.",
    keyFeatures: [
      "Real-time food-level tracking and reservoir capacity telemetry",
      "Continuous sensor-based food depletion detection",
      "Threshold-triggered push notifications and mobile status updates",
      "Companion application interface displaying historical dispensing logs",
      "Proactive food refill reminders and automated consumption planning",
      "Prevents missed feeding cycles and safeguards against unattended food exhaustion"
    ],
    technologies: [
      "IoT", "Sensors", "Embedded Systems", "Mobile Application", "Microcontrollers", "Automation"
    ],
    githubUrl: "https://github.com/Monikaaraj/smart-pet-feeder",
    demoUrl: "https://[ADD-MY-DEMO-URL]/smart-pet-feeder",
    illustrationType: "petfeeder"
  },
  {
    id: "smart-ar-belt",
    title: "Smart AR Belt",
    subtitle: "Navigation & Assistance for Visually Impaired",
    category: "Augmented Reality | Assistive Technology | Computer Vision",
    categoryGroup: "assistive-tech",
    achievementBadge: "SPRINTATHON'25 Showcase",
    shortDescription: "A wearable assistive navigation belt combining CameraX, ML Kit, and multi-zone haptic vibration feedback to help visually impaired individuals navigate safely.",
    fullDescription: "An assistive navigation solution designed to help visually impaired individuals understand nearby obstacles and navigate their surroundings with independence and confidence. The concept pairs an Android mobile application with a wearable tactile belt that provides dynamic directional vibration alerts and spatial audio feedback.",
    problemStatement: "Traditional white canes cannot detect head-level obstacles, descending stairs, or rapidly approaching vehicles in crowded urban environments.",
    keyFeatures: [
      "Camera-based real-time obstacle detection using CameraX and ML Kit",
      "Classification of critical obstacles: pedestrians, walls, vehicles, and descending/ascending stairs",
      "Stereo distance estimation for proximity awareness",
      "Spatial audio-based voice navigation cues and spoken directional guidance",
      "Multi-node haptic vibration motor array on the belt indicating directional hazard vectors",
      "Seamless Bluetooth Low Energy (BLE) integration with Android mobile controller",
      "Indoor navigation mapping concept for complex architectural floor plans",
      "Smartwatch health telemetry integration concept via Google Fit API for stress & vitals tracking"
    ],
    implementedFeatures: [
      "CameraX and ML Kit object classification pipeline for key obstacle types",
      "ESP32-driven haptic vibration feedback array with pulse intensity scaling",
      "Directional audio notification engine for real-time guidance prompts",
      "Android companion interface managing sensor connection and settings"
    ],
    plannedFeatures: [
      "Full ARCore Depth API spatial mesh reconstruction for complex 3D environments",
      "Automated Google Fit API vitals syncing for emergency stress alerts",
      "Crowdsourced indoor beacon mapping for multi-story public venues"
    ],
    technologies: [
      "Android", "Kotlin", "CameraX", "ML Kit", "Computer Vision",
      "ARCore Depth", "ESP32", "Vibration Motors", "Google Fit API"
    ],
    githubUrl: "https://github.com/Monikaaraj/smart-ar-belt",
    demoUrl: "https://[ADD-MY-DEMO-URL]/smart-ar-belt",
    illustrationType: "arbelt",
    disclaimer: "Presented and showcased at SPRINTATHON'25, St. Joseph's College of Engineering, Chennai. Distinguishes prototype milestone from prospective API extensions."
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: "3rd Prize Winner",
    event: "Smart Agriculture Multilingual Voice Assistant",
    organization: "Technical Innovation Competition",
    type: "award",
    badge: "3rd Prize Award",
    description: "Awarded 3rd Prize for developing an accessible, vernacular voice-first AI assistant supporting 5 regional languages to deliver actionable farming advisories.",
    year: "2024"
  },
  {
    title: "Exceptional Academic Performance",
    event: "B.E. in CSE (Artificial Intelligence & Machine Learning)",
    organization: "JSS Academy of Technical Education, Bengaluru (VTU)",
    type: "academic",
    badge: "9.6 CGPA Distinction",
    description: "Maintained a top-tier cumulative grade point average of 9.6 throughout engineering studies, consistently demonstrating academic rigor across algorithms, AI, and systems.",
    year: "2023 – Present"
  },
  {
    title: "SPRINTATHON'25 Finalist & Participant",
    event: "National Level Hackathon / Innovation Event",
    organization: "St. Joseph's College of Engineering, Chennai",
    type: "hackathon",
    badge: "National Hackathon",
    description: "Participated and showcased the 'Smart AR Belt' assistive navigation prototype for visually impaired individuals, presenting haptic-vision integration to expert panels.",
    year: "2025"
  },
  {
    title: "Active Technical Innovation & Project Leadership",
    event: "College & Departmental Technical Activities",
    organization: "JSSATE Bengaluru & Tech Communities",
    type: "leadership",
    badge: "Community & Leadership",
    description: "Regularly conceptualizing, building, and presenting full-scale technology prototypes across AI, Blockchain, and IoT; actively mentoring peer project groups.",
    year: "2023 – Present"
  }
];

export const ACTIVITIES_DATA: ActivityItem[] = [
  {
    title: "Class Representative Responsibilities",
    role: "Student Leader & Academic Liaison",
    category: "Leadership",
    description: "Serving as class representative, facilitating smooth communication between department faculty and students, coordinating academic schedules, and resolving student queries.",
    tags: ["Leadership", "Communication", "Coordination", "Student Welfare"]
  },
  {
    title: "Hackathons & Innovation Competitions",
    role: "Core Developer & Pitch Presenter",
    category: "Hackathon & Innovation",
    description: "Actively participating in competitive hackathons including SPRINTATHON'25 at St. Joseph's College of Engineering, Chennai, building rapid hardware-software solutions under strict deadlines.",
    tags: ["Rapid Prototyping", "SPRINTATHON'25", "Problem Solving", "Team Dynamics"]
  },
  {
    title: "Technical Project Development",
    role: "AI & Full-Stack Developer",
    category: "Technical",
    description: "Leading hands-on development of multi-disciplinary prototypes spanning federated learning platforms, financial machine learning models, and computer vision robotics.",
    tags: ["AI/ML", "Decentralized Systems", "Computer Vision", "IoT Integration"]
  },
  {
    title: "Cultural & College Event Volunteering",
    role: "Student Volunteer & Event Coordinator",
    category: "Community",
    description: "Contributing actively to college cultural events and technical fests, managing event logistics, welcoming delegates, and ensuring seamless program execution.",
    tags: ["Event Management", "Teamwork", "Public Relations", "Volunteering"]
  },
  {
    title: "Team Collaboration & Peer Mentorship",
    role: "Collaborative Lead",
    category: "Leadership",
    description: "Working effectively in multi-disciplinary student teams, structuring git workflows, delegating modules, and maintaining rigorous project documentation.",
    tags: ["Git Workflow", "Collaboration", "Code Reviews", "Documentation"]
  }
];
