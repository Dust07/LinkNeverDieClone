import "./style.scss"
import "./responsive.scss"
import { ChangeEventHandler } from 'react'

export interface IInput {
  value?: string
  label?: string,
  classNameForLabel?: string
  className?: string,
  name: string,
  type?: string,
  placeholder?: string,
  onChange?: ChangeEventHandler

}

function Input({
  value = "",
  label = "",
  classNameForLabel = "",
  className = "",
  type = "text",
  name,
  placeholder,
  onChange }: IInput) {

  function capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  return (
    <>
      <label htmlFor={name} className={classNameForLabel}>{label}</label>
      <input
        value={value}
        className={`default ${className}`}
        type={type}
        id={name}
        name={name}
        aria-label={capitalizeFirstLetter(name)}
        placeholder={placeholder}
        onChange={onChange}
      />

    </>

  )
}

export default Input