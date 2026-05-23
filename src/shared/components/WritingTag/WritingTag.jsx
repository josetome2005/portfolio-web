import "./WritingTag.css"

export function WritingTag({text}){

    return(
        <div className="writing_tag glass">
            <div></div>
            <p>{text}</p>
        </div>
    )
}