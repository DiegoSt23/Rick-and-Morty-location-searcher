import ResidentInfo from "./ResidentInfo"

const ResidentContainer = ({residents, currentPage}) => {
                
    const list = residents
    .slice((currentPage - 1) * 10, currentPage * 10)
    .map((item) => <ResidentInfo id={item} urls={item} />);
                
    return (
        <div className="resident-info">
            <h5 className="font-style">RESIDENTS</h5>
            <div className="main-container">
            {list}           
            </div>
        </div>
    )
};

export default ResidentContainer