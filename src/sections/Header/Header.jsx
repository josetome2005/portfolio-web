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
                <a href="#hero" className="header__icon__container">
                    <span className="material-symbols-outlined">
                        code_xml
                    </span>
                </a>
            
                <ul>
                    <li><a href="#aboutMe">Sobre Mí</a></li>
                    <li><a href="#stack">Stack</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>

                <a href="#contact" className="header__contact__button">Hablemos</a>
            </nav>

        </header>
    )

}