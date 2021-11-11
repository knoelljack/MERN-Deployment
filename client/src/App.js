import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './views/Main';
import Add from './views/Add';
import Details from './views/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/pirates'>
            <Main/>
          </Route>
          <Route exact path='/pirates/new'>
            <Add/>
          </Route>
          <Route exact path='/pirates/:id'>
            <Details/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
