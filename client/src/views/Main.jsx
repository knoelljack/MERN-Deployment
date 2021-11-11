import React from 'react';
import Dashboard from '../components/Dashboard';
import { useHistory } from 'react-router-dom';

const Main = () => {

    const history = useHistory();

    
    return (
        <div>
            <h1>Pirate Crew</h1>
            <button onClick={(e)=> history.push('/pirates/new')}>Add Pirate</button>
            <hr />
            <Dashboard></Dashboard>
        </div>
    )
}

export default Main
