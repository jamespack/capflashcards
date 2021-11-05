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
import { Container, Nav, Navbar, Row, Col, NavLink, NavDropdown } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <Router>


        <Navbar bg="dark" variant="dark" collapseOnSelect="true" expand="lg">

          <Container>
            <Navbar.Brand>CAP Flash Cards</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <NavDropdown title="RMF Tasks" id="basic-nav-dropdown">
                <NavDropdown.Item className={'navLink'} href="/roles">Roles and Responsibilities </NavDropdown.Item>
                <NavDropdown.Item className={'navLink'} href="/PTasks">Prepare Tasks</NavDropdown.Item>
                <NavDropdown.Item className={'navLink'} href="/categorize">Categorize</NavDropdown.Item>
                <NavDropdown.Item className={'navLink'} href="/select">Select</NavDropdown.Item>
                <NavDropdown.Item className={'navLink'} href="/implement">Implement</NavDropdown.Item>
                <NavDropdown.Item className={'navLink'} href="/assess">Assess</NavDropdown.Item>
                <NavDropdown.Item className={'navLink'} href="/authorize">Authorize</NavDropdown.Item>
                <NavDropdown.Item className={'navLink'} href="/monitor">Monitor</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className={"d-flex justify-content-center fullHeightContainer"}>
          <Row >
            <Col>
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
            </Col>
          </Row>

        </Container>

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
