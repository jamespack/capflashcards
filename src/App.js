import logo from './logo.svg';
import './App.scss';
import cardData from './cardData';
import randrCardData from './randrCardData';
import PTasksFlashCardContainer from './FlashCardContainer';
import RandRFlashCardContainer from './RandRFlashCardContainer';
import 'bootstrap/scss/bootstrap.scss'
import 'font-awesome/scss/font-awesome.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          CAP Flash Cards
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/roles">Roles and Responsibilities</Link>
                </li>
                <li>
                  <Link to="/PTasks">P-Tasks</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="content-wrapper">


          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/roles">
              <Roles />
            </Route>
            <Route path="/PTasks">
              <PTasks />
            </Route>
            <Route path="/">

            </Route>
          </Switch>



        </div>
      </div>
    </Router>
  )
}


function PTasks() {
  return (
    <PTasksFlashCardContainer cards={cardData} />
  );

}

function Roles(){
  return(
    <RandRFlashCardContainer cards={randrCardData}/>
  );
}

export default App;
