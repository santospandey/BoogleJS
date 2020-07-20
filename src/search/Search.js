import React from "react"
import cssModule from "./Search.module.css"

function Search(props) {
    return (
        <div className={cssModule['input-box']}>
            <input type="text" name="searchWord" onKeyDown={props.search} placeholder="Enter words..."/>
        </div>
    )
}

export default Search
