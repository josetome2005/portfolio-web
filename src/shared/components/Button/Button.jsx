import "./Button.css"

export function Button({text, icon = "", iconPosition = "right", useRowAnimation = false, type, to = "", onClick = () => {}}){

    const classNameType = type 
        ? `button_component button_component--${type}` 
        : "button_component button_component--regular"

    const classNameAnimation = useRowAnimation 
        ? "animation"
        : ""

    const handleClick = (e) => {
        
        if(!to){
            e.preventDefault();
        }


        onClick();

    }

    const className = classNameType + " " + classNameAnimation + " " + iconPosition;

    return(

        <a
            className={className}
            href={to}
            onClick={handleClick}>
            
            {text}

            <span className="material-symbols-outlined">
                {icon}
            </span>
        </a>

    )

}