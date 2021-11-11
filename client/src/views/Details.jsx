import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const Details = () => {

    const [pirate,setPirate] = useState({});
    const history = useHistory();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {
                console.log(res);
                setPirate(res.data);
            })
            .catch(err=>console.log(err))
    },[id])

    return (
        <div>
            <h1>{pirate.name}</h1>
            <hr />
            <div>
                <img src={pirate.image} alt="Pirate" /><br />
                <h2>"{pirate.catchPhrase}"</h2>
            </div>
            <div>
                <h2>About</h2>
                <p>Position: {pirate.position}</p><br />
                <p>Treasures: {pirate.treasureChests}</p><br />
                <p>Peg Leg: {(pirate.pegLeg) ? <span>Yes</span> : <span>No</span>}</p><br />
                <p>Eye Patch: {(pirate.eyePatch) ? <span>Yes</span> : <span>No</span>}</p><br />
                <p>Hook Hand: {(pirate.hookHand) ? <span>Yes</span> : <span>No</span>}</p><br />
            </div>
            <button onClick={(e) => history.push('/pirates')}>Crew Board</button>
        </div>
    )
}

export default Details
