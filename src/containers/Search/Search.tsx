import React from 'react'
import "./style.scss";
import Button from '../../components/Button/Button';
import { searchCategory } from "../../mockData/mockdata"
function Search() {
    return (
        <div className="search-wrapper">
            <div className="search-wrapper-shadow-effect">
            </div>

            <div className="input-wrapper">
                <input className="search-field" type="text" name="searchText" id="searchText" placeholder="Bạn đang tìm kiếm nội dung gì?" />
                <select className="search-field" name="searchOption" id="searchOption">
                    {searchCategory.map((category, index) => {
                        return (
                            <option key={index} value={category}>{category}</option>
                        )
                    })}
                </select>
            </div>
            <div className="searchBtn-wrapper">
                <Button name="Tìm kiếm" classes="btn search-btn" />
            </div>


        </div>
    )
}

export default Search