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
  const modalType = useSelector((state: any) => state.modal.warning)

  const handleCloseModal = () => {
    console.log("asdasd")
    dispatch(modalSlice.actions.HIDE_MODAL())
    if (!modalType)
      navigate("/", { replace: true })
  }

  return (
    <div className="show-modal">
      <div className="modal-container">
        <div className="modal-close-btn-container">
          <FontAwesomeIcon icon={faClose} onClick={() => handleCloseModal()} />
        </div>
        <div className="modal-icon-container">
          <FontAwesomeIcon icon={modalType ? faXmark : faCheckCircle} className={modalType ? "warning-modal-icon" : "normal-modal-icon"} />
        </div>
        <div className="modal-text-container">{modalText}</div>
        <Button name={modalType ? "Thử lại" : "Tiếp tục"} className={`modal-btn ${modalType ? "warning-btn" : "login-btn"}`} onClick={() => handleCloseModal()} />
      </div>
    </div>
  )
}

export default Modal