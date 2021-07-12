import LocationInfo from "./LocationInfo"

const LocationContainer = ({name, type, dimension, population, worldId})=> {
    return (
        <LocationInfo worldId={worldId} name={name} type={type} dimension={dimension} population={population}/>
    )
}

export default LocationContainer