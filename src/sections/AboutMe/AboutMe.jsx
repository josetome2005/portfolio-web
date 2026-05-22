import "./AboutMe.css"
import { FeatureCard } from "./components/FeatureCard/FeatureCard"

export function AboutMe(){

    return(

        <section className="aboutMe">

            <p className="section__subtitle">01 - Sobre Mí</p>
            <h2 className="section__title">Construyo experiencias web que importan</h2>
            <p className="section__text">
                Soy un desarrollador frontend apasionado por convertir ideas complejas en interfaces simples, accesibles y memorables. Trabajo en el cruce entre diseño e ingeniería, donde la performance, la accesibilidad y los detalles de interacción definen un producto realmente bueno.
            </p>

            <div className="cards__container">

                <FeatureCard 
                    icon={"code_xml"}
                    title={"Código Limpio"}
                    text={"Arquitecturas escalables y patrones probados."}/>

                <FeatureCard
                    icon={"palette"}
                    title={"Diseño cuidado"}
                    text={"Interfaces pulidas, micro-interacciones y atención al detalle visual."} />
                
                <FeatureCard
                    icon={"bolt"}
                    title={"Performance"}
                    text={"Lighthouse 95+, lazy loading inteligente y bundles optimizados."} />
            </div>
        </section>
    )

}