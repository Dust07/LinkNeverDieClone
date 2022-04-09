import { useSelector } from "react-redux"
import "./style.scss"

function Modal({ children }: any) {
  const isLoading = useSelector((state: any) => state.users.isLoading)
  return (
    // <div className={` ${isLoading && 'loading-is-true'}`}>
    <div className={`loading-is-true`}>
      {children}
    </div>
  )
}

export default Modal