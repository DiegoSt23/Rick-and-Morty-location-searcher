import { useState } from "react";
import React from "react";

const SearchBox = ({search, condition}) => {
    const [value, setValue] = useState("");

    return (
        <div>
            <h2>LOCATION SEARCHER</h2>
            { condition 
            ? <p className="instructions">There are 108 locations in the Rick and Morty universe, please search by number.</p> 
            : <p className="instructions">Please enter a valid number.</p> 
            }     
            <input value={value} onChange={e => {setValue(e.target.value)}}/>
            <button onClick={() => {search(value)}}>SEARCH</button>             
        </div>        
    )
}

export default SearchBox