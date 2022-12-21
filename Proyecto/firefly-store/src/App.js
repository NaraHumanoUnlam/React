import './css/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Catalog from './components/pages/catalog';
import Contact from './components/pages/contact';
import Home from './components/pages/home'

export default function App() {
  
  return (
    <Router>
      <NavBar src={'https://imagizer.imageshack.com/img924/7544/TZRGTS.png'}/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/catalog' component={Catalog}/>
      </Switch>
    </Router>
  );
}

