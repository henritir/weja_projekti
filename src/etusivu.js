
import { Col, Container, Row } from 'react-bootstrap';
import image from './Weja_etusivu.png';


const Etusivu = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col  md={8} style={{
                        backgroundImage: `url(${image})`,
                        minHeight:'45vh',
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat"
                        
                    }}>
                        <h1>Etusivu</h1>
                    </Col>
                    <Col  md={4} style={{textAlign:'left', marginTop:'3%', minHeight:'85vh'}}>
                        
                        <table className='App-keskitys'>
                            <tbody>
                                <tr>
                                    <td>Tervetuloa Jokulan maatilalle.</td>
                                </tr>
                                <tr>
                                    <td>Olemme avoinna kesällä 2023</td>
                                </tr>
                                <tr>
                                    <td>toukokuusta elokuun loppuun.</td>
                                </tr>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                      
                        <h3 style={{textAlign:'center'}}>Aukioloajat</h3>
                        <table  style={{marginLeft:'auto', marginRight:'auto'}}>
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

                        <h3 style={{textAlign:'center'}}>Hinnasto</h3>
                        <table className='App-keskitys'>
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