import { categoryInterface } from "../../../../interfaces/landingPageInterface"
import "./style.scss"

function Submenu({ category }: any) {
  return (
    <div className="category-wrapper">
      <ul className="category-list">
        {category &&
          category.map((item: categoryInterface, index: number) => {
            const { context, url, submenu } = item;
            return (
              <li key={index}>
                <span className="category-context">{context}</span>
                <ul className="submenu-wrapper">
                  {submenu && submenu.map((menu, index) => {
                    return (
                      <li key={index}>{menu.context}</li>
                    )
                  })}
                </ul>
              </li>
            )
          }
          )}
      </ul>
    </div>

  )
}

export default Submenu