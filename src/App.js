import './App.css';
import {Home , Boxes , Clothes , Hats , Sinks , Sunglasses , Space , Ties} from './components/index'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


function App() {
  return (
      <Router>
         <Switch>
             <Route exact path='/' component={Home}></Route>
             <Route exact path='/Boxes' component={Boxes}></Route>
             <Route exact path='/Clothes' component={Clothes}></Route>
             <Route exact path='/Hats' component={Hats}></Route>
             <Route exact path='/Sinks' component={Sinks}></Route>
             <Route exact path='/Sunglasses' component={Sunglasses}></Route>
             <Route exact path='/Space' component={Space}></Route>
             <Route exact path='/Ties' component={Ties}></Route>
         </Switch>
      </Router>
  );
}

export default App;