import "./Header.css"
import { useEffect, useState } from "react"
import { useWindowSize } from "../../shared/hooks/useWindowSize";
import { Button } from "../../shared/components/Button/Button"

export function Header(){

    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const { width } = useWindowSize();

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handler)

        return () => window.removeEventListener("scroll", handler);
    }, [])

    const isDesktop = width > 768;

    // Cierro el menu si se agranda la venta
    useEffect(() => {
        if(isDesktop) setIsOpen(false);
    }, [isDesktop])

    // Bloquea el scroll del body cuando el menú está abierto
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const toggle = () => { 
        setIsOpen(prev => !prev); 
    }

    // Cierra el menú al hacer click en un link
    const handleNavClick = () => {
        if (!isDesktop) setIsOpen(false);
    };

    return(

        <header className={`${scrolled ? "header scrolled" : "header"} ${isOpen ? "open" : ""}  `}>
            <nav>

                <div className="buttons__container">
                    <a href="#hero" className="header__icon__container" onClick={handleNavClick}>
                        <span className="material-symbols-outlined">
                            code_xml
                        </span>
                    </a>

                    <button
                        className="button__menu"
                        onClick={toggle}
                        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={isOpen}>
                        <span className="material-symbols-outlined menu">
                            {isOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>

                <ul className={`nav__list ${isOpen ? "open" : ""}`}>
                    <li onClick={handleNavClick}><a href="#aboutMe">Sobre Mí</a></li>
                    <li onClick={handleNavClick}><a href="#stack">Stack</a></li>
                    <li onClick={handleNavClick}><a href="#projects">Proyectos</a></li>
                    <li onClick={handleNavClick}><a href="#contact">Contacto</a></li>
                </ul>

                <div className="header__contact__button">
                    <Button 
                        text={"Hablemos"}
                        to={"#contact"}
                        type={"regular"}/>
                </div>
            </nav>

        </header>
    )

}