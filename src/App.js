import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path='/'>
          <Home></Home>
          </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
