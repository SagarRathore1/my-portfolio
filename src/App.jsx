import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import hrImg from './assets/hr-dashboard.png';
import vindraImg from './assets/vindra-report.png';
import retailImg from './assets/retail-dashboard.png';
import performanceImg from './assets/performance-analysis.png';
import phoenixImg from './assets/phoenix-project.png';
import dtuLogo from './assets/dtu-logo.png';
import adroitLogo from './assets/adroit-logo.png';
import vichargoLogo from './assets/vichargo-logo.png';
import roboticsLogo from './assets/robotics-logo.png';
import drdoLogo from './assets/drdo-logo.png';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import SkillGrid from './components/SkillGrid';
import ProjectGrid from './components/ProjectGrid';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Initial Loading Animation & Dark Mode Setup
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  // Scroll to Top visibility
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // --- DATA ---
  const educationData = [
    { title: "B.Tech in Mechanical Engineering", organization: "Delhi Technological University (DTU)", date: "2023 - 2027", description: "Current CGPA: 8.25", tech: ["Engineering", "Mathematics"] },
    { title: "Grade XII (CBSE)", organization: "Govt. Sarv. Bal Vidyalaya No.1, Yamuna Vihar", date: "2022", description: "Percentage: 81.6%", tech: ["Science"] },
    { 
      title: "Grade X (CBSE)", 
      organization: "Govt. Sarv. Bal Vidyalaya No.1, Yamuna Vihar", 
      date: "2020", 
      description: "Percentage: 77.6%", 
      tech: ["General Sciences", "Social Studies"] 
    }
  ];

  const experienceData = [
  { 
    title: "Project Intern", 
    organization: "Adroit Classes, Narela", 
    date: "Jan 2026 - Mar 2026", 
    description: "Analyzed workflow across 3 educational branches, restructuring schedules and transforming a 30-PC lab into a Coding/CBT Hub.", 
    tech: ["Operations", "Workflow Analysis"],
    image: adroitLogo // Add this
  },

  {  title: "Research Intern", 
    organization: "DRDO - Solid State Physics Laboratory (SSPL)", 
    date: "Dec 2025 - Jan 2026", 
    description: "Fabricated 4H-SiC epi-ready wafers using PVT crystal growth and CMP. Quantified structural defects via HRXRD and X-Ray Topography to benchmark defense-grade semiconductor quality.", 
    tech: ["Semiconductor Fab", "HRXRD", "Crystal Growth"],
    image: drdoLogo 
  },
  { 
    title: "Event Management USIP Intern", 
    organization: "Dean Alumni Affairs, DTU", 
    date: "Mar 2025 - May 2025", 
    description: "Orchestrated the university's Alumni Homecoming Event for 500+ attendees.", 
    tech: ["Event Management"],
    image: dtuLogo // Add this
  },
  { 
    title: "Vice President", 
    organization: "VicharGo Consulting", 
    date: "Leadership", 
    description: "Led 3+ project teams in applying structured troubleshooting frameworks.", 
    tech: ["Leadership", "Consulting"],
    image: vichargoLogo // Add this
  },
  { 
    title: "General Secretary", 
    organization: "Society of Robotics - DTU", 
    date: "Leadership", 
    description: "Directed technical workshops and competitions, driving a 20% surge in student participation.", 
    tech: ["Team Management"],
    image: roboticsLogo // Add this
  }
];

  const projectData = [
    { 
    title: "Retail Supply Chain Dashboard", 
    description: "Modeled a multi-regional retail dataset. Identified a 20% profitability leakage and projected a 15% margin improvement.", 
    tech: ["Power BI", "DAX"], 
    github: "#", 
    live: "#", 
    image: retailImg 
  },
    { title: "Project Phoenix | VicharGo", 
    description: "Engineered a high-impact recovery roadmap for an EdTech platform experiencing a 98% traffic decline. Restructured the business model to target a 1.5 Lakh Crore market, focusing on sustainable growth and user retention.", 
    tech: ["Business Strategy", "Market Analysis", "Consulting"], 
    github: "#", 
    live: "#", 
    image: phoenixImg },
    
    {title: "Website Performance Analysis", 
    description: "Comprehensive analysis using Python. Scrutinized session volume and engagement across traffic sources to optimize strategies.", 
    tech: ["Python", "Data Analysis"], 
    github: "https://github.com/SagarRathore1/Website-Performance-Analysis", 
    live: "https://github.com/SagarRathore1/Website-Performance-Analysis", 
    image: performanceImg },

    { 
    title: "HR Analytics Dashboard", 
    description: "Developed an interactive dashboard to track workforce metrics. Transformed raw HR data into actionable insights.", 
    tech: ["Power BI", "DAX"], 
    github: "https://github.com/SagarRathore1/HR-ANALYTICS-DASHBOARD", 
    live: "https://github.com/SagarRathore1/HR-ANALYTICS-DASHBOARD", 
    image: hrImg // Using the imported variable here
  },

  { 
    title: "Vindra Store Annual Report", 
    description: "Conducted a comprehensive annual performance analysis uncovering sales trends and demographics.", 
    tech: ["Data Analysis", "Excel"], 
    github: "https://github.com/SagarRathore1/Vindra-Store-Annual-Report-2022", 
    live: "https://github.com/SagarRathore1/Vindra-Store-Annual-Report-2022", 
    image: vindraImg // Using the imported variable here
  }
  ];

  const achievementData = [
    { type: 'cert', title: "McKinsey.org Forward Program", description: "Mastered McKinsey's Diagnosed methodology, structured communication, and digital fluency." },
    { type: 'trophy', title: "Case Competition Laureate", description: "Achieved Runner-up position in 2 Case Competitions and recognized as a Finalist in 5 others." },
    { type: 'cert', title: "Infosys Springboard Certifications", description: "Certified in Business Intelligence, ER Modelling, Big Data, Power BI, and MS Excel." },
    { type: 'cert', title: "SQL Intermediate Certification", description: "Certified by HackerRank demonstrating advanced querying and database manipulation skills." }
  ];

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-darkBg">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-darkBg text-gray-900 dark:text-gray-100 font-sans selection:bg-primary selection:text-white">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main>
        <Hero />
        <Timeline items={educationData} title="Education" />
        <Timeline items={experienceData} title="Experience" />
        <ProjectGrid projects={projectData} />
        <SkillGrid />
        <Achievements achievements={achievementData} />
        <Contact />
      </main>

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-primary text-white rounded-full shadow-xl hover:bg-blue-600 transition-colors z-50"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}


export default App;