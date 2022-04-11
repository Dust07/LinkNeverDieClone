import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClose,
  faXmark,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'
import Button from "../Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { modalSlice } from "../../redux/reducers/modal"
import { useNavigate } from "react-router-dom"

function Modal() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const modalText = useSelector((state: any) => state.modal.msg)
  const normalModal = useSelector((state: any) => state.modal.normalModal)

  const handleCloseModal = () => {
    dispatch(modalSlice.actions.HIDE_MODAL())
    if (normalModal)
      navigate("/", { replace: true })
  }

  return (
    <div className="show-modal">
      <div className="modal-container">
        <div className="modal-close-btn-container">
          <FontAwesomeIcon icon={faClose} onClick={() => handleCloseModal()} />
        </div>
        <div className="modal-icon-container">
          <FontAwesomeIcon icon={normalModal ? faCheckCircle : faXmark} className={normalModal ? "normal-modal-icon" : "warning-modal-icon"} />
        </div>
        <div className="modal-text-container">{modalText}</div>
        <Button name={normalModal ? "Tiếp tục" : "Thử lại"} className={`modal-btn ${normalModal ? "login-btn" : "warning-btn"}`} onClick={() => handleCloseModal()} />
      </div>
    </div>
  )
}

export default Modal