import "./AboutMe.css"
import { FeatureCard } from "./components/FeatureCard/FeatureCard"
import { motion } from "framer-motion"

export function AboutMe(){

    return(

        <section id="aboutMe" className="aboutMe">

            <motion.p 
                className="section__subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.79,0.14,0.15,0.86], delay: 0.1 }}>
                    01 - Sobre Mí
            </motion.p>

            <motion.h2 
                className="section__title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.79, 0.14, 0.15, 0.86], delay: 0.2 }}>
                    Construyo experiencias web que importan
            </motion.h2>

            <motion.p 
                className="section__text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.79, 0.14, 0.15, 0.86], delay: 0.3 }}>
                    Soy un desarrollador frontend apasionado por convertir ideas complejas en interfaces simples, accesibles y memorables. Trabajo en el cruce entre diseño e ingeniería, donde la performance, la accesibilidad y los detalles de interacción definen un producto realmente bueno.
            </motion.p>

            <div className="cards__container">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.79, 0.14, 0.15, 0.86], delay: 0.3 }}>
                        <FeatureCard 
                            icon={"code_xml"}
                            title={"Código Limpio"}
                            text={"Arquitecturas escalables y patrones probados."}/>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.79, 0.14, 0.15, 0.86], delay: 0.4 }}>
                        <FeatureCard
                            icon={"palette"}
                            title={"Diseño cuidado"}
                            text={"Interfaces pulidas, micro-interacciones y atención al detalle visual."} />
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.79, 0.14, 0.15, 0.86], delay: 0.5 }}>
                        <FeatureCard
                            icon={"bolt"}
                            title={"Performance"}
                            text={"Lighthouse 95+, lazy loading inteligente y bundles optimizados."} />
                </motion.div>
            </div>
        </section>
    )

}