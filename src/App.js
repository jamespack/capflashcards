import './App.scss';
import cardData from './cardData';
import randrCardData from './randrCardData';
import categorizeCardData from './categorizeCardData';
import selectCardData from './selectFlashCardData';
import assessCardData from './assessCardData';
import authorizeCardData from './authorizeCardData';
import acronymCardData from './acronymCardData';
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
import AcronymFlashCardContainer from './acronymFlashCardContainer';
import 'font-awesome/scss/font-awesome.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container, Navbar, Row, Col, NavLink, NavDropdown } from 'react-bootstrap';
import Fips199FlashCardContainer from './fips199FlashCardContainer';
import fips199CardData from './fips199CardData';
import Fips200FlashCardContainer from './fips200FlashCardContainer';
import fips200CardData from './fips200CardData';



function App() {
  return (
    <div className="App">
      <Router>


        <Navbar bg="dark" variant="dark" collapseOnSelect="true" expand="lg">

          <Container>
            <Navbar.Brand href="/">CAP Flash Cards</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <NavDropdown title="RMF Tasks" className={"basic-nav-dropdown"}>
                <NavDropdown.Item className={'navLink'} href="/roles">Roles and Responsibilities </NavDropdown.Item>
                <NavDropdown.Item className={'navLink'} href="/prepare">Prepare Tasks</NavDropdown.Item>
                <NavDropdown.Item className={'navLink'} href="/categorize">Categorize</NavDropdown.Item>
                <NavDropdown.Item className={'navLink'} href="/select">Select</NavDropdown.Item>
                <NavDropdown.Item className={'navLink'} href="/implement">Implement</NavDropdown.Item>
                <NavDropdown.Item className={'navLink'} href="/assess">Assess</NavDropdown.Item>
                <NavDropdown.Item className={'navLink'} href="/authorize">Authorize</NavDropdown.Item>
                <NavDropdown.Item className={'navLink'} href="/monitor">Monitor</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="NIST Publications" className={"basic-nav-dropdown"}>
                <NavDropdown.Item className={'navLink'} href="/fips199">FIPS-199</NavDropdown.Item>
                <NavDropdown.Item className={'navLink'} href="/fips200">FIPS-200</NavDropdown.Item>
              </NavDropdown>
              <NavLink href="/acronyms" className={'navLink'}>Acronyms</NavLink>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className={"d-flex justify-content-center fullHeightContainer"}>
          <Row className={"d-flex flex-column justify-content-center"}>
            <Col>
              <Switch>
                <Route path="/roles">
                  <Roles />
                </Route>
                <Route path="/prepare">
                  <Prepare />
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
                <Route path="/acronyms">
                  <Acronyms />
                </Route>
                <Route path="/fips199">
                  <Fips199 />
                </Route>
                <Route path="/fips200">
                  <Fips200 />
                </Route>
               <Route path={["/", "/roles"]} component={Roles}/>
              </Switch>
            </Col>
          </Row>

        </Container>

      </Router>
    </div>
  )
}



function Prepare() {
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

function Acronyms(){
  return(
    <AcronymFlashCardContainer cards={acronymCardData}/>
  )
}

function Fips199(){
  return(
    <Fips199FlashCardContainer cards={fips199CardData}/>
  )
}

function Fips200(){
  return(
    <Fips200FlashCardContainer cards={fips200CardData}/>
  )
}

export default App;
