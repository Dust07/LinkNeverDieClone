import "./style.scss"
import "./responsive.scss"
import { Link } from 'react-router-dom'
export interface Props {
  currentDirectory: string
}

function DirectoryPath({ currentDirectory }: Props) {
  let currentDirectoryText = "";
  switch (currentDirectory) {
    case "login":
      currentDirectoryText = "Đăng nhập"
      break;
    case "register":
      currentDirectoryText = "Đăng ký"
      break;
    case "softwares":
      currentDirectoryText = "Phần mềm"
      break;
    case "games":
      currentDirectoryText = "Games"
      break;
    case "films":
      currentDirectoryText = "Phim"
      break;
    case "forum":
      currentDirectoryText = "Diễn đàn"
      break;
    case "faqs":
      currentDirectoryText = "FAQs"
      break;
    default:
      break;
  }
  return (
    <div className="directory-wrapper">
      <div className="current-directory">
        <ul className="directory-path-list">
          <li>
            <Link to="/">  Trang chủ  </Link>
          </li>
          <li>
            <Link to={`/${currentDirectory}`}>  {` ${currentDirectoryText}`}  </Link>
          </li>
        </ul>
        <p>{`${currentDirectoryText.toUpperCase()}`}</p>
      </div>
    </div>
  )
}

export default DirectoryPath