import { useState } from "react";
import React from "react";

const SearchBox = ({search}) => {
    const [value, setValue] = useState("");
    return (
        <div>
            <h2>LOCATION SEARCHER</h2>
            <div className="instructions">
                <p>There are 108 locations in the Rick and Morty universe, please search by number.</p>
            </div>           
            <input value={value} onChange={e => {setValue(e.target.value)}}/>
            <button onClick={() => {search(value)}}>SEARCH</button>                        
        </div>        
    )
}

export default SearchBox