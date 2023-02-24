import { Container } from "react-bootstrap";

const Sijainti = () => {
    return (
        <div >
            <Container fluid>
                <h2>Sijainti</h2>
            <iframe 
                title="kartta"
                width="100%"
                loading="lazy"
                style={{padding:'5% 5% 5% 5%', height:'90vh'}}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBBDmcR2T3LoI5j_n8YPVDkg1AKvRvMnKA&q=Space+Needle,Honkalahti+Kaavi+Finland">
            </iframe>
            </Container>
        </div>
    )
}

export { Sijainti };