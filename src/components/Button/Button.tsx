import "./style.scss"

interface buttonInterface {
    name: string,
    classes: string
}

function Button({ name, classes }: buttonInterface) {
    return (
        <button className={`btn ${classes}`}>{name}</button>
    )
}

export default Button