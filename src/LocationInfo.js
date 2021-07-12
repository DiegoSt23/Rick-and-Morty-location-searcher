const LocationInfo = ({name, type, dimension, population, worldId})=> {
    return (
        <div className="location-info">
            <h5 className="font-style">NUMBER: {worldId}</h5>
            <h5 className="font-style">NAME: {name}</h5>
            <h5 className="font-style">TYPE: {type}</h5>
            <h5 className="font-style">DIMENSION: {dimension}</h5>
            <h5 className="font-style">POPULATION: {population}</h5>
        </div>
    )
}

export default LocationInfo