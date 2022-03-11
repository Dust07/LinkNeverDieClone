import "./style.scss"

interface buttonInterface {
    name: string,
    className: string
}

<<<<<<< HEAD
function Button({ name, classes }: buttonInterface) {
    return (
        <button className={`btn ${classes}`}>{name}</button>
=======
function Button({ name, className }: buttonInterface) {
    return (
        <button className={className}>{name}</button>
>>>>>>> 9e377d3a3e7117a5fc5e37734c960dd5bcd27068
    )
}

export default Button