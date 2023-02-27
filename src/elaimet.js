import { Col, Container,Row } from "react-bootstrap";
import hepat from './weja_hepat.png';
import sika from './Weja_sika.png';
import kanat from './Weja_kanat.png';

const Elaimet= () =>{
    return(
        <div>
            <Container fluid >
                <Row>
                    <Col><h2>Eläimet</h2></Col>
                    <Col></Col>
                </Row>
                <Row className='p-3'>
                    <Col md={6}>
                        <img src={hepat} style={{width:'100%'}} alt="description"></img>
                    </Col>
                    <Col md={5} style={{paddingTop:'5%', textAlign:'left'}}>Suomen hevoset Humma ja Polle ovat ihmisläheiset kaverukset. Polle on syntynyt vuonna 2017 ja Humma syntynyt vuonna 2019.
                    Pollea ja Hummaa saa silittää ja ruokkia heinällä. Jos ratsastaminen Pollella tai Hummalla kiinnostaa, voit sopia ratsastustunnista puhelimitse
                    tai sähköpostitse.
                    </Col>
                </Row>
                <Row className='p-3'>
                    <Col md={6}><img src={sika} style={{width:'100%'}} alt="description"></img></Col>
                    <Col md={5} style={{paddingTop:'5%',textAlign:'left'}}>Putte sika on talon seurallisin kaveri. Putte on syntynyt 2021. Putte tykkää rapsuttelusta ja pallolla leikkimisestä. Älä vie ruokaa
                    lähelle Puttea, sillä hän saattaa varastaa ruokasi. Muuteen Putte on rauhallinen ja mukava kaveri.</Col>
                </Row>
                <Row className='p-3'>
                    <Col md={6}><img src={kanat} style={{width:'100%'}} alt="description"></img></Col>
                    <Col  md={5} style={{paddingTop:'5%',textAlign:'left'}}>Kanat Leenu, Liinu ja Tiinu ovat tilan nuorimmat asukit. Leenu ja Liinu viihtyvät päivisin ulkosalla.
                    Tiinu tykkää viettää aikaansa enemmän sisällä. Kanoja ruokitaan klo 17, johon asiakkaatkin saavat halutessaan osallistua. Leenun, Liinun ja Tiinun munia
                    voi ostaa sisäänkäynnin yhteydestä.</Col>
                </Row>
            </Container>
        </div>
    )
}

export {Elaimet};