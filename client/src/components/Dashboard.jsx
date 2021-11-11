import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {

    const [pirates,setPirates] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(res=>{
                console.log(res.data);
                setPirates(res.data);
            })
            .catch(err => console.log(err))
    },[])

    const removeFromDom = pirateId => {
        setPirates(pirates.filter(pirate => pirate._id !== pirateId));
    }

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/pirates/${id}`)
            .then(res => removeFromDom(id))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <ul>
            {
                pirates.sort((a, b) => a.name.localeCompare(b.name)).map((pirate,index)=> {
                    return(
                    <li key={index}>
                        <img src={pirate.image} alt="Pirate" />
                        <div>
                            <p>{pirate.name}</p>
                            <button onClick={(e) => history.push(`/pirates/${pirate._id}`)}>View Pirate</button>
                            <button onClick={(e) => deleteHandler(pirate._id)}>Walk the Plank</button>
                        </div>
                        <hr />
                    </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Dashboard
