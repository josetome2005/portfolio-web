import "./StackCard.css"

export function StackCard({name, description, items}){

    return(

        <div className="stack_card glass">
            <div className="stack_card__header">
                <h3 className="stack_name">{name}</h3>
                <p>{description}</p>
            </div>
            <div className="stack__items_container">
                {
                    items?.map(i => 

                        <span className="stack_item">
                            <img src={`https://cdn.simpleicons.org/${i.icon}`} alt={i.name} loading="lazy"/>
                            {i.name}
                        </span>
                    )
                }
            </div>
        </div>

    )

}