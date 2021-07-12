import ResidentInfo from "./ResidentInfo"

const ResidentContainer = ({residents}) => {
                
    const list = residents.map((item) => <ResidentInfo id={item} urls={item} />)
                
    return (
        <div className="resident-info">
            <h5 className="font-style">RESIDENTS</h5>
            <div className="main-container">
            {list.slice(0,10)}           
            </div>
        </div>
    )
};

export default ResidentContainer