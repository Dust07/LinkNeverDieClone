import Input from "../Input/Input"

export interface Props {
    title: string,
    name: string
}
function LabeledInput({ title, name }: Props) {
    return (
        <div>
            <label htmlFor={name}>{title}</label>
            <Input name={name}></Input>
        </div>
    )
}

export default LabeledInput