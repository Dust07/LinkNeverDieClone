import "./style.scss"

interface buttonText {
    name: string,
    classes: string
}

function Button({ name, classes }: buttonText) {
    return (
        <button className={classes}>{name}</button>
    )
}

export default Button