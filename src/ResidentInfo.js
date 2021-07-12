import { useState, useEffect } from "react";

const ResidentInfo = ({urls}) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState();
    const [species, setSpecies] = useState("");
    const [status, setStatus] = useState("");
    const [origin, setOrigin] = useState("")
    const [episodes, setEpisodes] = useState()

    useEffect(() => {
        if (urls) {  
            const request = async () => {               
                const url = urls
                const response = await fetch(url).then(res => res.json())
                setName(response.name);
                setImage(response.image);
                setSpecies(response.species);
                setStatus(response.status);
                setOrigin(response.origin.name);
                setEpisodes(response.episode.length)                              
            }
        request()       
        }       
    },[urls])
       
    return(
        <div className="container">             
            <div className="container2">
                <div className="sub-container1">               
                    <img src={image} alt="character" className="image-size"></img>
                </div>
                <div className="sub-container2">
                    <h3 className="font-style">{name.toUpperCase()}</h3>
                    <p>Species: {species}</p>
                    <p>Status: {status}</p>
                    <p>Origin: {origin}</p>
                    <p>Episodes: {episodes}</p>
                </div>
            </div>           
        </div>          
    )
}

export default ResidentInfo

