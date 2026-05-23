import { StackCard } from "./components/StackCard/StackCard"
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

        <section className="stack">

            <p className="section__subtitle">02 — Stack tecnológico</p>
            <h2 className="section__title">Herramientas con las que construyo.</h2>
            <p className="section__text">
                Tecnologías que utilizo a diario para crear productos modernos y robustos.
            </p>

            <div className="stack__container">

                {
                    stacks?.map(s => 
                        <StackCard 
                            key={s.id}
                            name={s.name}
                            description={s.description}
                            items={s.items}/>
                    )
                }

            </div>

        </section>

    )

}