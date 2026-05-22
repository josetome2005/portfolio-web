import "./FeatureCard.css"

export function FeatureCard({icon, title, text}){

    return(

        <div className="feature_card glass">

            <div className="icon__container">
                <span className="material-symbols-outlined">
                    {icon}
                </span>
            </div>

            <h3>{title}</h3>

            <p>{text}</p>

        </div>

    )

}