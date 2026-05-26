import { ProjectCard } from "./component/ProjectCard/ProjectCard"
import { motion } from "framer-motion"
import "./Projects.css"

const projects = [
    {
        id: crypto.randomUUID(),
        name: "Flat — CRM para Inmobiliarias",
        description: "Proyecto propio en <strong>etapa inicial</strong> de desarrollo.Un CRM orientado al rubro inmobiliario con gestión de clientes, tareas y operaciones.Actualmente cuenta con autenticación, dashboard y módulos base funcionando.",
        img: "flat.png",
        link: "https://flat-web-eight.vercel.app/",
        technologies: [
            {
                id: crypto.randomUUID(),
                name: "React"
            },
            {
                id: crypto.randomUUID(),
                name: "NodeJs"
            },
            {
                id: crypto.randomUUID(),
                name: "MySQl"
            },
            {
                id: crypto.randomUUID(),
                name: "HTML5"
            },
            {
                id: crypto.randomUUID(),
                name: "CSS3"
            },
            {
                id: crypto.randomUUID(),
                name: "JavaScript"
            },
            {
                id: crypto.randomUUID(),
                name: "Vercel"
            },
            {
                id: crypto.randomUUID(),
                name: "Railway"
            },
        ]
    },
    {
        id: crypto.randomUUID(),
        name: "Inmobiliaria Petrini — Demo de Prospección",
        description: "Demo funcional desarrollada para mostrar a agencias inmobiliarias las posibilidades de una web profesional.Incluye listado de propiedades, filtros y formulario de contacto.",
        img: "inmo.png",
        link: "https://fodax-inmobiliaria.netlify.app/petriniinmobiliaria",
        technologies: [
            {
                id: crypto.randomUUID(),
                name: "React"
            },
            {
                id: crypto.randomUUID(),
                name: "NodeJs"
            },
            {
                id: crypto.randomUUID(),
                name: "MySQl"
            },
            {
                id: crypto.randomUUID(),
                name: "HTML5"
            },
            {
                id: crypto.randomUUID(),
                name: "CSS3"
            },
            {
                id: crypto.randomUUID(),
                name: "JavaScript"
            },
        ]
    },
    {
        id: crypto.randomUUID(),
        name: "El Ceibo Hosteria",
        description: "Hostería La Cumbrecita Web institucional y sistema de reservas online para una hostería de montaña en Córdoba.",
        img: "elceibo.png",
        link: "https://hosteriaelceibo.com",
        technologies: [
            {
                id: crypto.randomUUID(),
                name: "HTML5"
            },
            {
                id: crypto.randomUUID(),
                name: "CSS3"
            },
            {
                id: crypto.randomUUID(),
                name: "JavaScript"
            },
            {
                id: crypto.randomUUID(),
                name: "PHP"
            },
            {
                id: crypto.randomUUID(),
                name: "MySQL"
            }
        ]
    },
    {
        id: crypto.randomUUID(),
        name: "Fodax - Desarrollo Web",
        description: "Sitio web institucional para una agencia de desarrollo web.Incluye presentación de servicios, sección de proyectos y formulario de contacto.",
        img: "fodax.png",
        link: "https://fodax.netlify.app",
        technologies: [
            {
                id: crypto.randomUUID(),
                name: "HTML5"
            },
            {
                id: crypto.randomUUID(),
                name: "CSS3"
            },
            {
                id: crypto.randomUUID(),
                name: "JavaScript"
            },
        ]
    },
    {
        id: crypto.randomUUID(),
        name: "Estudio Melou — Branding Studio",
        description: "Sitio web institucional para una agencia de branding y marketing. Presentación de servicios, blog e integración de pagos con Mercado Pago.",
        img: "estudiomelou.png",
        link: "https://estudiomelou.kesug.com/",
        technologies: [
            { id: crypto.randomUUID(), name: "HTML5" },
            { id: crypto.randomUUID(), name: "CSS3" },
            { id: crypto.randomUUID(), name: "JavaScript" },
            { id: crypto.randomUUID(), name: "PHP" },
            { id: crypto.randomUUID(), name: "MySQL" },
        ]
    },
    {
        id: crypto.randomUUID(),
        name: "Lic. Laura Baigorria — Orientadora Familiar",
        description: "Landing page para una orientadora familiar.Presenta sus servicios, información de contacto y un espacio para que potenciales consultantes puedan comunicarse fácilmente.",
        img: "laurabaigorria.png",
        link: "https://laura-baigorria-orientadora-familiar.netlify.app/",
        technologies: [
            {
                id: crypto.randomUUID(),
                name: "HTML5"
            },
            {
                id: crypto.randomUUID(),
                name: "CSS3"
            },
            {
                id: crypto.randomUUID(),
                name: "JavaScript"
            },
        ]
    },
    {
        id: crypto.randomUUID(),
        name: "Dalion — Tienda de Talismanes",
        description: "E-commerce para una tienda de talismanes y medallones. Catálogo de productos y carrito de compras.",
        img: "dalion.png",
        link: "https://dalion-medallones.kesug.com/",
        technologies: [
            { id: crypto.randomUUID(), name: "HTML5" },
            { id: crypto.randomUUID(), name: "CSS3" },
            { id: crypto.randomUUID(), name: "JavaScript" },
            { id: crypto.randomUUID(), name: "PHP" },
            { id: crypto.randomUUID(), name: "MySQL" },
        ]
    },
    
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