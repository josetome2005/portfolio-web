import { Button } from "../../shared/components/Button/Button"
import "./Hero.css"

export function Hero(){


    return(

        <section className="hero">
            <div className="background_hero__opacity"></div>
            <div className="background_hero__gradient"></div>

            <div className="hero__img_wrapper">
                <img src="/imgs/hero-bg.jpg" alt="" className="hero__img_background" />
            </div>

            <div className="hero__grid_bg"></div>
            
            <div className="hero__content">
                <div className="hero__tag glass">
                    <div></div>
                    <p>Disponible para nuevos proyectos</p>
                </div>

                <h1 className="hero__title">
                    <span className="name">José I. Tomé.</span>
                    <span className="role">Frontend Developer</span>
                </h1>

                <p className="hero__subtitle">Construyo interfaces rápidas, accesibles y con detalles que importan.</p>
                
                <div className="hero__buttons_container">
                    <Button 
                        text={"Ver Proyectos"}
                        icon={"arrow_forward"}
                        useRowAnimation={true}
                        type={"regular"}
                        to={""}/>

                    <Button
                        text={"Contactarme"}
                        icon={"local_fire_department"}
                        useRowAnimation={false}
                        type={"glass"}
                        to={""}
                        iconPosition={"left"} />
                </div>
                
                <div className="hero__extra_data">
                    <a href="" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github" aria-hidden="true">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                    </a>

                    <a href="" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail" aria-hidden="true">
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        </svg>
                    </a>

                    <span className="hero__location">/ Córdoba, AR</span>

                </div>
                

            </div>
        </section>

    )

}