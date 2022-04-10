import "./style.scss";
import "./responsive.scss";
import { useState } from "react";
import { searchCategory } from "../../../mockData/mockdata"
import Button from '../../../components/Button/Button';
import Input from "../../../components/Input/Input";

function Search() {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <div className="container search-wrapper">
      <div className="search-wrapper-shadow-effect">
      </div>

      <div className="input-wrapper">
        <Input className="search-field search-input" value={searchText} onChange={(e: any) => setSearchText(e.target.value)} name="searchText" placeholder="Bạn đang tìm kiếm nội dung gì?" />
        <select className="search-field search-option" name="searchOption" id="searchOption">
          {searchCategory.map((category, index) => {
            return (
              <option key={index} value={category}>{category}</option>
            )
          })}
        </select>
      </div>
      <div className="searchBtn-wrapper">
        <Button name="Tìm kiếm" className="search-btn" />
      </div>
    </div>
  )
}

export default Search