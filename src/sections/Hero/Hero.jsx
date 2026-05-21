import "./Hero.css"

export function Hero(){


    return(

        <section className="hero">
            <div className="background_hero__opacity"></div>
            <div className="background_hero__gradient"></div>

            <div className="hero__img_wrapper">
                <img src="../public/imgs/hero-bg.jpg" alt="" className="hero__img_background" />
            </div>
            
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

            </div>
        </section>

    )

}