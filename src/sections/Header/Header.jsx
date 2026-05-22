import "./Header.css"
import { useEffect, useState } from "react"


export function Header(){

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handler)

        return () => window.removeEventListener("scroll", handler);
    }, [])

    return(

        <header className={scrolled ? "header scrolled" : "header"}>
            <nav>
                <div className="header__icon__container">
                    <span className="material-symbols-outlined">
                        code_xml
                    </span>
                </div>
            
                <ul>
                    <li><a href="">Sobre Mí</a></li>
                    <li><a href="">Stack</a></li>
                    <li><a href="">Proyectos</a></li>
                    <li><a href="">Experiencia</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>

                <a href="" className="header__contact__button">Hablemos</a>
            </nav>

        </header>
    )

}