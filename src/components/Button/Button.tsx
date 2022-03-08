import "./style.scss"

interface buttonInterface {
    name: string,
    className: string
}

function Button({ name, className }: buttonInterface) {
    return (
        <button className={className}>{name}</button>
    )
}

export default Button