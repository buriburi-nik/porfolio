// import project1_img from '../assets/project_1.svg'
// import project2_img from '../assets/project_2.svg'
// import project3_img from '../assets/project_3.svg'
// import project4_img from '../assets/project_4.svg'
// import project5_img from '../assets/project_5.svg'
// import project6_img from '../assets/project_6.svg'

// const mywork_data = [
//     {
//         w_no:1,
//         w_name:"Web design",
//         w_img:project1_img
//     },
//     {
//         w_no:2,
//         w_name:"Web design",
//         w_img:project2_img
//     },
//     {
//         w_no:3,
//         w_name:"Web design",
//         w_img:project3_img
//     },
//     {
//         w_no:4,
//         w_name:"Web design",
//         w_img:project4_img
//     },
//     {
//         w_no:5,
//         w_name:"Web design",
//         w_img:project5_img
//     },
//     {
//         w_no:6,
//         w_name:"Web design",
//         w_img:project6_img
//     },
// ]
 
// export default mywork_data;

// src/assets/mywork_data.js
import project1_img from '../assets/project_1.svg'
import project2_img from '../assets/project_2.svg'
import project3_img from '../assets/project_3.svg'
import project4_img from '../assets/project_4.svg'
import project5_img from '../assets/project_5.svg'
import project6_img from '../assets/project_6.svg'

// For multiple images, we'll reuse the existing images as placeholders
// In a real application, you would import additional images for each project

const mywork_data = [
    {
        w_no: 1,
        w_name: "E-Commerce Dashboard",
        w_img: project1_img,
        images: [project1_img, project2_img, project3_img], // Multiple images for carousel
        description: "A responsive admin dashboard for online store management with real-time analytics.",
        category: "Web App",
        technologies: ["React", "Redux", "Node.js", "MongoDB", "Chart.js"],
        features: [
            "Real-time sales analytics",
            "Inventory management system",
            "User authentication with JWT",
            "Responsive design for all devices"
        ],
        githubLink: "https://github.com/yourusername/ecommerce-dashboard",
        demoLink: "https://demo-ecommerce-dashboard.netlify.app"
    },
    {
        w_no: 2,
        w_name: "Travel Booking Platform",
        w_img: project2_img,
        images: [project2_img, project3_img, project4_img],
        description: "A modern travel booking website with flight and hotel reservation functionality.",
        category: "Web App",
        technologies: ["React", "Node.js", "Express", "PostgreSQL", "Stripe API"],
        features: [
            "Flight and hotel search engine",
            "Secure payment processing",
            "User reviews and ratings",
            "Booking management system"
        ],
        githubLink: "https://github.com/yourusername/travel-booking",
        demoLink: "https://travel-booking-demo.vercel.app"
    },
    {
        w_no: 3,
        w_name: "Portfolio Website Template",
        w_img: project3_img,
        images: [project3_img, project4_img, project5_img],
        description: "A customizable portfolio template for developers and designers.",
        category: "UI/UX Design",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
        features: [
            "Animated page transitions",
            "Dark/Light mode toggle",
            "Contact form functionality",
            "Project showcase section"
        ],
        githubLink: "https://github.com/yourusername/portfolio-template",
        demoLink: "https://portfolio-template-showcase.netlify.app"
    },
    {
        w_no: 4,
        w_name: "Fitness Tracking App",
        w_img: project4_img,
        images: [project4_img, project5_img, project6_img],
        description: "A mobile-first application for tracking workouts and nutrition with progress visualization.",
        category: "Mobile App",
        technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
        features: [
            "Workout plan creator",
            "Nutrition tracking dashboard",
            "Progress charts and statistics",
            "Social sharing capabilities"
        ],
        githubLink: "https://github.com/yourusername/fitness-tracker",
        demoLink: "https://fitness-tracker-demo.web.app"
    },
    {
        w_no: 5,
        w_name: "Task Management System",
        w_img: project5_img,
        images: [project5_img, project6_img, project1_img],
        description: "A collaborative task management platform for teams with Kanban boards.",
        category: "Web App",
        technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
        features: [
            "Drag and drop task management",
            "Team collaboration tools",
            "Task priority system",
            "Deadline notifications"
        ],
        githubLink: "https://github.com/yourusername/task-management",
        demoLink: "https://task-management-demo.firebaseapp.com"
    },
    {
        w_no: 6,
        w_name: "Music Streaming UI",
        w_img: project6_img,
        images: [project6_img, project1_img, project2_img],
        description: "A beautiful user interface for a music streaming service with audio visualizations.",
        category: "UI/UX Design",
        technologies: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
        features: [
            "Audio visualization effects",
            "Playlist management",
            "Responsive music player controls",
            "Artist profile pages"
        ],
        githubLink: "https://github.com/yourusername/music-streaming-ui",
        demoLink: "https://music-streaming-ui-demo.vercel.app"
    },
];

export default mywork_data; 

