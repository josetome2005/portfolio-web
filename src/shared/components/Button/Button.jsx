import "./Button.css"

export function Button({text, icon, iconPosition = "right", useRowAnimation = false, type, to}){

    const classNameType = type 
        ? `button_component button_component--${type}` 
        : "button_component button_component--regular"

    const classNameAnimation = useRowAnimation 
        ? "animation"
        : ""


    const className = classNameType + " " + classNameAnimation + " " + iconPosition;

    return(

        <a
            className={className}
            href={to}>
            
            {text}

            <span className="material-symbols-outlined">
                {icon}
            </span>
        </a>

    )

}