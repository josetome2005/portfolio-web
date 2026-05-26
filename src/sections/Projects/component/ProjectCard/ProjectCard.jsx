import "./ProjectCard.css";

export function ProjectCard({name, description, technologies, img, link}){

    return(

        <article className="project_card">
            
            <div className="img__container">
                <img src={`/imgs/${img}`} alt={description} />
                <div className="blur_bg"></div>
            </div>

            <div className="data__container">
                <h3>{name}</h3>
                <p dangerouslySetInnerHTML={{ __html: description }} />
                <div className="technologies__container">
                    {
                        technologies?.map(t => 
                            <span>{t.name}</span>
                        )
                    }
                </div>
            </div>

            <div className="links__container">
                {
                    link &&
                    <a href={link} target="_blank">
                        <span className="material-symbols-outlined">
                            arrow_outward
                        </span>
                    </a>
                }
            </div>

        </article>

    )

}