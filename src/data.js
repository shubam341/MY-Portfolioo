import { DiReact } from "react-icons/di";
import { FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { DiJavascript, DiRedis } from "react-icons/di";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const menu = [
    { name: "About" },
    { name: "Services" },
    { name: "Skill" },
    { name: "Projects" },
    { name: "Contact" },
];

export const projects = [
    {
        id: 1,
        title: "Find My Home",
        image: "https://i.postimg.cc/Gh0WsWfD/1.jpg",  // Use the direct image link
        category: "Frontend",
        data: {
            description: `Revolutionizing the rental experience, Find My Home PG simplifies the search 
            for comfortable and affordable accommodations. With a user-friendly interface, 
            seamless booking features, and intuitive navigation, our platform empowers users to explore, compare, 
            and book PG rentals effortlessly. Discover a smarter, more efficient way to find your next home.`,
            demoLink: "https://github.com/shubam341/FindMYHome.git",
        },
    
    
        stack: [
            {
                name: "ReactJs",
                icon: <DiReact />,
                iconColor: "skyblue",
            },
            {
                name: "JavaScript",
                icon: <DiJavascript />,
                iconColor: "yellow",
            },
            {
                name: "HTML",
                icon: <FaHtml5 />,
                iconColor: "orange",
            },
            {
                name: "CSS",
                icon: <FaCss3 />,
                iconColor: "blue",
            },
            {
                name: "TailwindCSS",
                icon: <SiTailwindcss />,
                iconColor: "teal",
            },
        ],
    },
    {
        id: 2,
        title: "AI-Conflux",
        image: "https://i.postimg.cc/W1csTFVQ/Screenshot-2025-03-29-231756.png",
        category: "Backend",
        data: {
            description: `AI Conflux redefines innovation by seamlessly integrating AI-driven tools and collaborative 
            features. This dynamic platform empowers users to harness the power of artificial intelligence for project 
            creation, real-time collaboration, and enhanced productivity. Experience the future of AI-powered teamwork with 
            intuitive interfaces, intelligent assistance, and limitless creative possibilities.`,
            demoLink: "https://github.com/shubam341/AI-Conflux.git",
        },
        stack: [
            {
                name: "NodeJs",
                icon: <FaNodeJs />,
                iconColor: "green",
            },
            {
                name: "ExpressJs",
                icon: <SiExpress />,
                iconColor: "gray",
            },
            {
                name: "MongoDB",
                icon: <SiMongodb />,
                iconColor: "limegreen",
            },
            {
                name: "Redis",
                icon: <DiRedis />,
                iconColor: "red",
            },
            {
                name: "ReactJs",
                icon: <DiReact />,
                iconColor: "skyblue",
            },
            {
                name: "JavaScript",
                icon: <DiJavascript />,
                iconColor: "yellow",
            },
            {
                name: "HTML",
                icon: <FaHtml5 />,
                iconColor: "orange",
            },
            {
                name: "CSS",
                icon: <FaCss3 />,
                iconColor: "blue",
            },
            {
                name: "TailwindCSS",
                icon: <SiTailwindcss />,
                iconColor: "teal",
            },
          
        ],
    },
];

export const experience = [
    {
        title: "UI/UX",
        data: [
            {
                skill: "Figma",
                level: "Intermediate",
            },
        ],
    },
    {
        title: "Frontend Development",
        data: [
            {
                skill: "HTML",
                level: "Experienced",
            },
            {
                skill: "CSS",
                level: "Experienced",
            },
            {
                skill: "JavaScript",
                level: "Experienced",
            },
            {
                skill: "Tailwind",
                level: "Experienced",
            },
            {
                skill: "Bootstrap",
                level: "Intermediate",
            },
            {
                skill: "React",
                level: "Experienced",
            },
            {
                skill: "React Native",
                level: "Experienced",
            },
        ],
    },
    {
        title: "Backend Development",
        data: [
            {
                skill: "Node JS",
                level: "Experienced",
            },
            {
                skill: "Express JS",
                level: "Experienced",
            },
            {
                skill: "MongoDB",
                level: "Experienced",
            },
            {
                skill: "Redis",
                level: "Intermediate",
            },
            {
                skill: "MySQL",
                level: "Experienced",
            },
        ],
    },
];

export const socialHandles = [
    {
        name: "Github",
        icon: <AiFillGithub />,
        link: "https://github.com/your-profile",
    },
    {
        name: "LinkedIn",
        icon: <AiFillLinkedin />,
        link: "https://linkedin.com/in/your-profile",
    },
];
