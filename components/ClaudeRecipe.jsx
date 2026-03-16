import { marked } from "marked"
import Reactç from "react"

export default function ClaudeRecipe(props) {
    return (
        <section 
            className="suggested-recipe-container"
            dangerouslySetInnerHTML={{ __html: marked(props.recipe) }}
        />
    )
}