import logo from './logo.svg';
import './App.scss';
import cardData from './cardData';
import randrCardData from './randrCardData';
import categorizeCardData from './categorizeCardData';
import selectCardData from './selectFlashCardData';
import assessCardData from './assessCardData';
import authorizeCardData from './authorizeCardData';
import implementCardData from './implementCardData';
import monitorCardData from './monitorCardData';
import MonitorFlashCardContainer from './monitorFlashCardContainer';
import AuthorizeFlashCardContainer from './authorizeFlashCardContainer';
import PTasksFlashCardContainer from './FlashCardContainer';
import ImplementFlashCardContainer from './implementFlashCardContainer';
import AssessFlashCardContainer from './assessFlashCardContainer';
import RandRFlashCardContainer from './RandRFlashCardContainer';
import CategorizeFlashCardContainer from './CategorizeFlashCardContainer';
import SelectFlashCardContainer from './SelectFlashCardContainer';

import 'font-awesome/scss/font-awesome.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Navbar } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <Router>

      
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Navbar.Brand>CAP Flash Cards</Navbar.Brand>
          <Container>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">  
              <ul>
                <li>
                  <Link to="/roles">Roles and Responsibilities</Link>
                </li>
                <li>
                  <Link to="/PTasks">P-Tasks</Link>
                </li>
                <li>
                  <Link to="/categorize">Categorize</Link>
                </li>
                <li>
                  <Link to="/select">Select</Link>
                </li>
                <li>
                  <Link to="/implement">Implement</Link>
                </li>
                <li>
                  <Link to="/assess">Assess</Link>
                </li>
                <li>
                  <Link to="/authorize">Authorize</Link>
                </li>
                <li>
                  <Link to="/monitor">Monitor</Link>
                </li>
              </ul>
            
          </Navbar.Collapse>
          </Container>
        </Navbar>

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
            <Route path="/categorize">
              <Categorize />
            </Route>
            <Route path="/select">
              <Select />
            </Route>
            <Route path="/implement">
              <Implement />
            </Route>
            <Route path="/assess">
              <Assess />
            </Route>
            <Route path="/authorize">
              <Authorize />
            </Route>
            <Route path="/monitor">
              <Monitor />
            </Route>
          </Switch>



        </div>

      </Router>
    </div>
  )
}


function PTasks() {
  return (
    <PTasksFlashCardContainer cards={cardData} />
  );

}

function Roles() {
  return (
    <RandRFlashCardContainer cards={randrCardData} />
  );
}

function Categorize() {
  return (
    <CategorizeFlashCardContainer cards={categorizeCardData} />
  );
}


function Select() {
  return (
    <SelectFlashCardContainer cards={selectCardData} />
  )
}

function Implement() {
  return (
    <ImplementFlashCardContainer cards={implementCardData} />
  )
}

function Assess() {
  return (
    <AssessFlashCardContainer cards={assessCardData} />
  )
}

function Authorize() {
  return (
    <AuthorizeFlashCardContainer cards={authorizeCardData} />
  )
}

function Monitor() {
  return (
    <MonitorFlashCardContainer cards={monitorCardData} />
  )
}
export default App;
