
import project11_img from '../assets/food (1).png'
import project12_img from '../assets/food (2).png'
import project13_img from '../assets/food (3).png'


import project21_img from '../assets/geek (1).png'
import project22_img from '../assets/geek (2).png'
import project23_img from '../assets/geek (3).png'

import project31_img from '../assets/basic (1).png'
import project32_img from '../assets/basic (2).png'
import project33_img from '../assets/basic (3).png'

import project41_img from '../assets/fitness (3).png'
import project42_img from '../assets/fitness (2).png'
import project43_img from '../assets/fitness (1).png'

import project51_img from '../assets/expnec (3).png'
import project52_img from '../assets/expnec (2).png'
import project53_img from '../assets/expnec (1).png'

import project6_img from '../assets/single.png'


const mywork_data = [
    {
  w_no: 1,
w_name: "Restaurant Web Application",
w_img: project13_img,
images: [project11_img, project12_img, project13_img], 
description: "A responsive restaurant web app featuring interactive menu display and Firebase authentication.",
category: "Web App",
technologies: ["React.js", "Firebase", "Tailwind CSS"],
features: [
    "User authentication (Firebase)",
    "Interactive menu display",
    "Contact form via Web3Forms API",
    "Mobile-friendly design"
],
githubLink: "https://github.com/buriburi-nik/mct",
demoLink: "https://demo-ecommerce-dashboard.netlify.app"

    },
    {
      w_no: 2,
w_name: "Geek Food (on-going)",
w_img: project21_img,
images: [project21_img, project22_img, project23_img], 
description: "A modern food ordering platform with a dynamic UI, efficient state management, and optimized performance.",
category: "Web App",
technologies: ["React.js", "JavaScript", "HTML", "CSS"],
features: [
    "Modern food ordering platform with dynamic UI",
    "Efficient state management",
    "Optimized performance"
],
githubLink: "https://github.com/buriburi-nik/GEEkFOoD", 
demoLink: "https://ge-ek-f-oo-d.vercel.app/" 

    },
    {
      w_no: 3,
w_name: "Basic E-commerce Website",
w_img: project33_img,
images: [project33_img, project32_img, project31_img], 
description: "A modern and responsive e-commerce site using HTML, CSS, and JavaScript with product data from the Fake Store API.",
category: "Web App",
technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "Fake Store API"],
features: [
    "Login / Signup using localStorage",
    "Forgot Password functionality",
    "Products listing from Fake Store API",
    "Search products by name",
    "Filter by category",
    "Like products and view liked items",
    "Dark mode toggle",
    "Product detail page",
    "Fully responsive, user-friendly interface"
],
githubLink: "https://github.com/buriburi-nik/basic-e-commerce",
demoLink: "https://basic-e-commerce-five.vercel.app/"

    },
    {
        w_no: 4,
        w_name: "Fitness Tracking App",
        w_img: project41_img,
        images: [project41_img, project42_img, project43_img],
        description: "A mobile-first application for tracking workouts and nutrition with progress visualization.",
        category: "Web App",
        technologies: ["React Native", "Redux", "Chart.js"],
        features: [
            "Workout plan creator",
            "Nutrition tracking dashboard",
            "Progress charts and statistics",
            "Social sharing capabilities"
        ],
        githubLink: "https://github.com/yourusername/fitness-tracker",
        demoLink: "https://fitness1-drab.vercel.app/"
    },
    {
       w_no: 5,
w_name: "Expense Tracker",
w_img: project51_img,
images: [project51_img, project52_img, project53_img], 
description: "A simple and responsive expense tracker built with vanilla JavaScript, HTML, and CSS.",
category: "Web App",
technologies: ["HTML", "CSS", "JavaScript", "Chart.js"],
features: [
    "Add and remove income/expenses",
    "Real-time balance calculation",
    "Visual transaction history",
    "Persistent data storage using localStorage",
    "Clean and responsive UI"
],
githubLink: "https://github.com/buriburi-nik/Expense-tracker",
demoLink: "https://expense-tracker-lake-mu-88.vercel.app/"

    },
    {
      w_no: 6,
w_name: "Bank of Reacts",
w_img: project6_img, 
images: [project6_img], 
description: "An interactive loan calculator built with React, featuring real-time monthly payment and interest breakdown with visual charts.",
category:  "Mobile App",
technologies: ["React.js", "JavaScript", "CSS"],
features: [
    "Dynamic loan calculation with sliders",
    "Monthly payment & interest breakdown",
    "Pie chart visualization of principal vs interest",
    "Responsive layout and bold UI design"
],
githubLink: "https://github.com/buriburi-nik/gjgj", 
demoLink: "https://gjgj-six.vercel.app/"

    },
];

export default mywork_data; 

