
import { Col, Container, Row } from 'react-bootstrap';
import image from './Weja_etusivu.png';


const Etusivu = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={12} md={8} style={{
                        backgroundImage: `url(${image})`,
                        minHeight:'40vh',
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat"
                        
                    }}>
                        <h1>Etusivu</h1>
                    </Col>
                    <Col style={{color:'white', textAlign:'left', paddingLeft:'3%', paddingTop:'1%', minHeight:'100vh'}} xs={6} md={4}>
                        
                        Tervetuloa jokulan maatilalle.
                        <br/>
                        Olemme avoinna kesällä 2023
                        <br/>
                        toukokuusta elokuun loppuun.
                        <br/>
                        <br/>
                        <h3>Aukioloajat</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Ma-Pe</td>
                                    <td>12-18</td>
                                </tr>
                                <tr>
                                    <td>La-Su</td>
                                    <td>11-19</td>
                                </tr>
                            </tbody>
                        </table>
                        <br/>

                        <h3>Hinnasto</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Aikuinen</td>
                                    <td>10€</td>
                                </tr>
                                <tr>
                                    <td>Lapsi(2-15v)</td>
                                    <td>5€</td>
                                </tr>
                                <tr>
                                    <td>Alle 2v</td>
                                    <td>0€</td>
                                </tr>
                                <tr>
                                    <td>Eläkeläinen, opiskelija</td>
                                    <td>7€</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>

            </Container>




        </div>
    )
}

export { Etusivu };