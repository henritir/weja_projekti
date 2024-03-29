import './App.css';

import {Routes,Route,BrowserRouter as Router,Navigate,} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Etusivu } from "./etusivu";
import { Elaimet } from './elaimet';
import { Historia } from './historia';
import { Sijainti } from './sijainti';
import image from "./Weja_tausta.png";
import painike from './painike_kuva.png';



const App = () => {

  return (
      <Router>
          <Navbar bg="dark" expand="lg" sticky='top' variant='dark'>
              <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Brand href="/">Jokulan maatilamatkailu</Navbar.Brand>
                  <Navbar.Collapse dir="column" className="mx-1">
                      <Nav className="me-auto" >
                          <Nav.Link href="/" >Etusivu</Nav.Link>
                          <Nav.Link href="/historia">Tilan historia</Nav.Link>
                          <Nav.Link href="/elaimet">Eläimet</Nav.Link>
                          <Nav.Link href="/sijainti">Sijainti</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
            
          <div
              style={{
                  backgroundImage: `url(${image})`,
                  minHeight: "90vh",
                  backgroundRepeat: "repeat",
                  backgroundSize: "contain",
                  
              }}
          >
              <div style={{ textAlign: "center", background:'rgba(0,0,0,0.5)',minHeight:'90vh', color:'white' }}>
                  <Routes>
                      <Route path="/" element={<Etusivu />} />
                      <Route path="/historia" element={<Historia />}/>
                      <Route path='/elaimet' element={<Elaimet/>}/>
                      <Route path='/sijainti' element={<Sijainti/>}/>
                      <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
              </div>
          </div>
         

          <Navbar bg="dark" expand="lg">
              <Container fluid>
                  <table style={{width:'100%', textAlign:'center', color:'white'}}>
                    <tbody>
                        <tr>
                            <td>Honkalahdetie 320</td>
                            <td>jokula@sposti.fi</td>
                        </tr>
                        <tr>
                            <td><Nav.Link href="/sijainti">73600 Kaavi <img src={painike} alt='Sijainti' style={{height:'4vh'}}></img></Nav.Link></td>
                            <td>+358 123 4567</td>
                        </tr>
                    </tbody>
                  </table>
              </Container>
          </Navbar>
      </Router>
  );
};

export default App;
