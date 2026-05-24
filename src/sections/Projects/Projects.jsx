import { ProjectCard } from "./component/ProjectCard/ProjectCard"
import { motion } from "framer-motion"
import "./Projects.css"

const projects = [
    {
        id: crypto.randomUUID(),
        name: "Nimbus Dashboard",
        description: "Panel analítico SaaS en tiempo real con visualizaciones interactivas y modo oscuro.",
        img: "hero-bg.jpg",
        link: "https://facebook.com",
        technologies: [
            {
                id: crypto.randomUUID(),
                name: "Next.js"
            },
            {
                id: crypto.randomUUID(),
                name: "TypeScript"
            },
            {
                id: crypto.randomUUID(),
                name: "Tailwind"
            },
            {
                id: crypto.randomUUID(),
                name: "Recharts"
            }
        ]
    },
    {
        id: crypto.randomUUID(),
        name: "Nimbus Dashboard",
        description: "Panel analítico SaaS en tiempo real con visualizaciones interactivas y modo oscuro.",
        img: "hero-bg.jpg",
        technologies: [
            {
                id: crypto.randomUUID(),
                name: "Next.js"
            },
            {
                id: crypto.randomUUID(),
                name: "TypeScript"
            },
            {
                id: crypto.randomUUID(),
                name: "Tailwind"
            },
            {
                id: crypto.randomUUID(),
                name: "Recharts"
            }
        ]
    }
]

export function Projects(){


    return(

        <section className="projects" id="projects">

            <motion.p 
                className="section__subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.79, 0.14, 0.15, 0.86], delay: 0.1 }}>
                    03 — Trabajos Recientes
            </motion.p>

            <motion.h2 
                className="section__title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.79, 0.14, 0.15, 0.86], delay: 0.2 }}>
                    Trabajos recientes.
            </motion.h2>
            
            <div className="projects__container">
                {
                    projects.map((p, i) =>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55], delay: (0.15 * i + 0.1) }}>
                                <ProjectCard 
                                    name={p.name}
                                    description={p.description}
                                    img={p.img}
                                    technologies={p.technologies}    
                                    link={p.link}
                                />
                        </motion.div>
                    )
                }
            </div>
        </section>

    )

}