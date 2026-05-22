import "./Header.css"

export function Header(){

    return(

        <header>
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