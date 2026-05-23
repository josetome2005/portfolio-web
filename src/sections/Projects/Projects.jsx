import { ProjectCard } from "./component/ProjectCard/ProjectCard"
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

        <section className="projects">

            <p className="section__subtitle">03 — Trabajos Recientes</p>
            <h2 className="section__title">Trabajos recientes.</h2>
            
            <div className="projects__container">
                {
                    projects.map(p => 
                        <ProjectCard 
                            name={p.name}
                            description={p.description}
                            img={p.img}
                            technologies={p.technologies}    
                            link={p.link}
                        />
                    )
                }
            </div>
        </section>

    )

}