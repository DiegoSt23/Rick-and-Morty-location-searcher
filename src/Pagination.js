import { useState, useEffect } from "react"
const Pagination = ({pagesNumber, onPagination}) => {

    const [data, setData] = useState(new Array(pagesNumber).fill(1))
    
    useEffect(() => {
        setData(new Array(pagesNumber).fill(1))
    }, [pagesNumber])

    const list = data.map((value, index) => (<button onClick={() => onPagination(index + 1)}> {index + 1} </button>));

    return (
        <div>
            {list}
        </div>
    ) 
}

export default Pagination