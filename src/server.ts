import { createServer, Model } from "miragejs"

createServer({
    models: {
        projects: Model,
    },

    seeds(server) {
        server.create(
            "project",
            {
                id: "Portfolio-website-0",
                demoLink: "https://wajdwael.github.io/tailwindcss-project3/",
                description: "Tailwindcss is a utility-first CSS framework for rapidly building custom user interfaces low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.",
                repoLink: "https://github.com/WajdWael/tailwindcss-project3",
                image: "../src/pages/work/workimages/image0.png",
                readmore: "https://github.com/WajdWael/tailwindcss-project3/blob/master/README.md#portfolio-website-using-tailwindcss",
                skills: [
                    "HTML5", "CSS3", "JS", "TailwindCSS"
                ],
                title: "Portfolio website"
            }
        )
        server.create(
            "project",
            {
                id: "Nice-Pricing-Card-1",
                demoLink: "https://wajdwael.github.io/nicePricingCard/",
                description: "Goal 🧠: This project for advanced CSS developers.",
                repoLink: "https://github.com/WajdWael/nicePricingCard/",
                image: "../src/pages/work/workimages/image1.png",
                readmore: "https://github.com/WajdWael/nicePricingCard/?tab=readme-ov-file#nice-pricing-card",
                skills: [
                    "HTML5", "CSS3"
                ],
                title: "Nice Pricing Card"
            }
        )
        server.create(
            "project",
            {
                id: "Recipe-App-2",
                demoLink: "https://wajdwael.github.io/Recipe-app/",
                description: "Goals: 🧠 Learn APIs Fetch data Render data Filter data First touch with styled-components Adding Framer-motion",
                repoLink: "https://github.com/WajdWael/Recipe-app",
                image: "../src/pages/work/workimages/image2.png",
                readmore: "https://github.com/WajdWael/Recipe-app?tab=readme-ov-file#recipe-app-project-using-react",
                skills: [
                    "React.JS", "APIs", "styled-components", "framer-motion"
                ],
                title: "Recipe App"
            }
        )
        server.create(
            "project",
            {
                id: "Menu-Filter-3",
                demoLink: "https://wajdwael.github.io/Menu-filter/",
                description: "How to retrieve data? Work with arrays, Use array methods such as map(), forEach(), and reduce().",
                repoLink: "https://github.com/WajdWael/Menu-filter",
                image: "../src/pages/work/workimages/image3.png",
                readmore: "https://github.com/WajdWael/Menu-filter?tab=readme-ov-file#menu-filter",
                skills: [
                    "HTML5", "CSS3", "JavaScript"
                ],
                title: "Menu Filter"
            }
        )
        server.create(
            "project",
            {
                id: "Restaurant-React-App-4",
                demoLink: "https://wajdwael.github.io/Restaurant-reactApp/",
                description: "Goals 🧠: Transform a Figma file into a functional website. Determine the best way to manage React files, components, and images. Find a solution to deal with a large number of images and ensure faster rendering. Understand the benefits of a single-page app.",
                repoLink: "https://github.com/WajdWael/Restaurant-reactApp",
                image: "../src/pages/work/workimages/image4.png",
                readmore: "https://github.com/WajdWael/Restaurant-reactApp?tab=readme-ov-file#restaurant-react-app",
                skills: [
                    "React.JS", "CSS3", "JS", "JSON"
                ],
                title: "Restaurant React App"
            }
        )
        server.create(
            "project",
            {
                id: "Van-Life-App-5",
                demoLink: "https://vanlife-3cf7c.web.app/",
                description: "The Main goals of this project 📊 My programmer friend, remember that this repository and project have a specific goal and focus: to understand and learn React-Router-v6 by implementing all its features. It's not necessary to add all of them in one project, but rather important to learn about them and find the best place to use them. Let's keep this in mind and work towards achieving our goal.",
                repoLink: "https://github.com/WajdWael/VanLife",
                image: "https://github.com/WajdWael/VanLife/raw/main/image.png",
                readmore: "https://github.com/WajdWael/VanLife?tab=readme-ov-file#vanlife----learn-react-router-v6",
                skills: [
                    "React.JS", "Firebase", "CSS", "React-Router-v6"
                ],
                title: "Van Life App"
            }
        )
        server.create(
            "project",
            {
                id: "Bookmark-Manager-4",
                demoLink: "https://wajdwael.github.io/tailwindcss-project/",
                description: `The main goal of this project 🪐 is to focus on enhancing the style skills of a front-end developer by using a CSS framework with the "utility-first CSS framework" Tailwind CSS.`,
                repoLink: "https://github.com/WajdWael/tailwindcss-project/",
                image: "../src/pages/work/workimages/image5.png",
                readmore: "https://github.com/WajdWael/tailwindcss-project/?tab=readme-ov-file#bookmark-manager-a-tailwindcss-project",
                skills: [
                    "HTML5", "CSS3", "JS", "TailwindCSS", "npm",
                ],
                title: "Bookmark Manager"
            }
        )
        server.create(
            "project",
            {
                id: "Dashboard-Html-CSS-6",
                demoLink: "https://dashboard-beta-two-34.vercel.app/",
                description: `Project Idea 💡Our project is about creating a dashboard with 8 sub-pages, using advanced CSS techniques and structure. Although this project is more suitable for advanced CSS developers, we will provide clear steps and guidance for all levels to benefit from.`,
                repoLink: "https://github.com/WajdWael/Dashboard/",
                image: "https://github.com/WajdWael/Dashboard/raw/main/repo-images/image.png",
                readmore: "https://github.com/WajdWael/Dashboard?tab=readme-ov-file#dashboard-html--css",
                skills: [
                    "HTML5", "CSS3"
                ],
                title: "Dashboard, Html & CSS"
            }
        )
        server.create(
            "project",
            {
                id: "Baking-Course-7",
                demoLink: "https://baking-courses.vercel.app/",
                description: `Main goals of this project 📊 You will discover the true power and potential of React components and routers. You'll gain the skills and knowledge to create dynamic and scalable applications with ease. Don't miss out on this opportunity to take your development skills to the next level🎯!`,
                repoLink: "https://github.com/WajdWael/BakingCourses",
                image: "https://github.com/WajdWael/BakingCourses/blob/main/image.png?raw=true",
                readmore: "https://github.com/WajdWael/BakingCourses?tab=readme-ov-file#baking-website-courses",
                skills: [
                    "React.JS", "React-router-v6", "vite", "npm"
                ],
                title: "Baking Course"
            }
        )
        server.create(
            "project",
            {
                id: "Manage-company-website-8",
                demoLink: "https://wajdwael.github.io/tailwindcss-project2/",
                description: `This project focuses on learning TailwindCSS 🎯.`,
                repoLink: "https://github.com/WajdWael/tailwindcss-project2",
                image: "../src/pages/work/workimages/image8.png",
                readmore: "https://github.com/WajdWael/tailwindcss-project2?tab=readme-ov-file#manage-company-website--a-tailwindcss-project",
                skills: [
                    "HTML5", "CSS3", "TailwindCSS", "npm"
                ],
                title: "Manage company website"
            }
        )
        server.create(
            "project",
            {
                id: "React-Airbnb-clone-9",
                demoLink: "https://airbnb-one-amber.vercel.app/",
                description: `This project focuses on learning TailwindCSS 🎯.`,
                repoLink: "https://github.com/WajdWael/Airbnb__",
                image: "../src/pages/work/workimages/image9.png",
                readmore: "https://github.com/WajdWael/Airbnb__?tab=readme-ov-file#react-airbnb-clone",
                skills: [
                    "React.JS", "TypeScript", "esLint", "vite"
                ],
                title: "React Airbnb clone"
            }
        )
        server.create(
            "project",
            {
                id: "Huddle-community-platform-10",
                demoLink: "https://peppy-crisp-313b60.netlify.app/",
                description: `Goals 🧠: If you are a beginner to ReactJS, this project will teach you how to use components and the idea behind them.`,
                repoLink: "https://github.com/WajdWael/reactapp-test/",
                image: "../src/pages/work/workimages/image10.png",
                readmore: "https://github.com/WajdWael/reactapp-test/?tab=readme-ov-file#huddle-community-platform---react-app",
                skills: [
                    "React.JS", "styled-components",
                ],
                title: "Huddle community platform"
            }
        )
        server.create(
            "project",
            {
                id: "Testimonials-Reviews-App-11",
                demoLink: "https://wajdwael.github.io/reviews-project/",
                description: `This project focuses on learning TailwindCSS 🎯.`,
                repoLink: "https://github.com/WajdWael/reviews-project",
                image: "../src/pages/work/workimages/image11.png",
                readmore: "https://github.com/WajdWael/reviews-project?tab=readme-ov-file#testimonials---reviews-project",
                skills: [
                    "HTML", "CSS", "JavaScript"
                ],
                title: "Testimonials - Reviews App"
            }
        )
    },

    routes() {
        this.namespace = "api"
        this.logging = false
        this.passthrough("https://api.emailjs.com/api/v1.0/email/send")

        this.get("/projects", (schema) => {
            return schema.projects.all()
        })
        
        this.get("/projects/:id", (schema, request) => {
            const id = request.params.id
            return schema.projects.find(id)
        })
    }
})