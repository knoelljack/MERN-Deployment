import React from 'react'
import { useHistory } from 'react-router-dom';
import PirateForm from '../components/PirateForm';

const Add = () => {

    const history = useHistory();

    return (
        <div>
            <h1>Add Pirate</h1>
            <button onClick={(e)=> history.push('/pirates')}>Crew Board</button>
            <hr />
            <PirateForm></PirateForm>
        </div>
    )
}

export default Add
