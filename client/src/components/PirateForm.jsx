import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const PirateForm = () => {

    const [name,setName] = useState('');
    const [image,setImage] = useState('');
    const [treasureChests,setTreasureChests] = useState(0);
    const [catchPhrase, setCatchPhrase] = useState('');
    const [position, setPosition] = useState('Captain');
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    const [errors,setErrors] = useState([]);
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirates/new', {
            name,
            image,
            treasureChests,
            catchPhrase,
            position,
            pegLeg,
            eyePatch,
            hookHand
        })
            .then(res => {
                console.log(res);
                setErrors([]);
                history.push('/pirates');
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                console.log(errorResponse)
                const errorArr = [];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
        setName('');
        setImage('');
        setTreasureChests(0);
        setCatchPhrase('');
        setPosition('');
        setPegLeg(true);
        setEyePatch(true);
        setHookHand(true);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Pirate Name:</label><br />
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/><br />
                    <label>Image URL:</label><br />
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} /><br />
                    <label># of Treasure Chests:</label><br />
                    <input type="number" value={treasureChests} onChange={(e) => setTreasureChests(e.target.value)}/><br />
                    <label>Pirate Catch Phrase:</label><br />
                    <input type="text" value={catchPhrase} onChange={(e)=> setCatchPhrase(e.target.value)} />
                </div>
                <div>
                    <label>Crew Position:</label>
                    <br />
                    <select name="position" value={position} onChange={(e) => setPosition(e.target.value)}>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select><br />
                    <input type="checkbox" name='pegleg' checked={+pegLeg} onChange={(e)=> {setPegLeg(e.target.checked)}}/>
                    <label htmlFor="pegleg">Peg Leg</label><br />
                    <input type="checkbox" name='eyepatch' checked={+eyePatch} onChange={(e)=> setEyePatch(e.target.checked)}/>
                    <label htmlFor="eyepatch">Eye Patch</label><br />
                    <input type="checkbox" name='hookhand' checked={+hookHand} onChange={(e)=> setHookHand(e.target.checked)}/>
                    <label htmlFor="hookhand">Hook Hand</label>
                </div>
                <button>Add Pirate</button>
                {errors.map((error,index) => <p key={index}>{error}</p>)}
            </form>
        </div>
    )
}

export default PirateForm
