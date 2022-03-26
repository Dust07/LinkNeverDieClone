import "./style.scss"
import "./responsive.scss"

interface buttonInterface {
    name: string,
    className?: string,
    onClick?: any
}

function Button({ name, className, onClick }: buttonInterface) {
    return (
        <button
            className={`btn ${className}`}
            onClick={onClick}
        >{name}</button>
    )
}

export default Button