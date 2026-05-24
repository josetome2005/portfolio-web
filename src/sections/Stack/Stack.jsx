import { StackCard } from "./components/StackCard/StackCard"
import { motion } from "framer-motion"
import "./Stack.css"

const stacks = [
    {
        id: crypto.randomUUID(),
        name: "Frontend",
        description: "Lo que uso día a día",
        items: [
            {
                id: crypto.randomUUID(),
                name: "React",
                icon: "react"
            },
            {
                id: crypto.randomUUID(),
                name: "CSS3",
                icon: "css"
            },
            {
                id: crypto.randomUUID(),
                name: "HTML5",
                icon: "html5"
            },
            {
                id: crypto.randomUUID(),
                name: "JavaScript",
                icon: "javascript"
            },
        ]
    },
    {
        id: crypto.randomUUID(),
        name: "Styling & UI",
        description: "Diseño e interfaz",
        items: [
            {
                id: crypto.randomUUID(),
                name: "TailwindCSS",
                icon: "tailwindcss"
            },
            {
                id: crypto.randomUUID(),
                name: "Figma",
                icon: "figma"
            },
        ]
    },
    {
        id: crypto.randomUUID(),
        name: "Tooling",
        description: "Mi entorno de trabajo",
        items: [
            {
                id: crypto.randomUUID(),
                name: "Git",
                icon: "git"
            },
            {
                id: crypto.randomUUID(),
                name: "GitHub",
                icon: "github"
            },
            {
                id: crypto.randomUUID(),
                name: "Vite",
                icon: "vite"
            },
            {
                id: crypto.randomUUID(),
                name: "Netlify",
                icon: "netlify"
            },
        ]
    },
    {
        id: crypto.randomUUID(),
        name: "Backend & Otros",
        description: "Lo que toco cuando hace falta",
        items: [
            {
                id: crypto.randomUUID(),
                name: "Node.js",
                icon: "nodedotjs"
            },
            {
                id: crypto.randomUUID(),
                name: "REST APIs",
                icon: "openapiinitiative"
            },
            {
                id: crypto.randomUUID(),
                name: "MySQL",
                icon: "mysql"
            },
            {
                id: crypto.randomUUID(),
                name: "PHP",
                icon: "php"
            },
        ]
    },
]

export function Stack(){

    return(

        <section className="stack" id="stack">

            <motion.p 
                className="section__subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.79, 0.14, 0.15, 0.86], delay: 0.1 }}>
                    02 — Stack tecnológico
            </motion.p>

            <motion.h2 
                className="section__title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.79, 0.14, 0.15, 0.86], delay: 0.2 }}>
                    Herramientas con las que construyo.
            </motion.h2>

            <motion.p 
                className="section__text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.79, 0.14, 0.15, 0.86], delay: 0.3 }}>
                    Tecnologías que utilizo a diario para crear productos modernos y robustos.
            </motion.p>

            <div className="stack__container">

                {
                    stacks?.map((s, i) => 
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, ease: [0.68, -0.55, 0.27, 1.55], delay: (0.05*i + 0.2) }}>
                                <StackCard 
                                    key={s.id}
                                    name={s.name}
                                    description={s.description}
                                    items={s.items}/>
                        </motion.div>
                    )
                }

            </div>

        </section>

    )

}