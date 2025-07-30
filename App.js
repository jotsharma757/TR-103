import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

function App() {
  let headerInfo={
    email:'we@gmail.com',
    ph:'23334444'
  }
  return (
    <div className="main">
      <Header headerInfo={headerInfo} cname='jhujujhbhjh'/>
      <h1>welcome to header section</h1>

      <Container fluid>
        <Row>
          <Col className="col-12 text-center py-4">
            <h1>Our Courses</h1>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={3} md={6} className="mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://via.placeholder.com/100x180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            {/* You can duplicate the above Card or add new content here */}
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://via.placeholder.com/100x180" />
              <Card.Body>
                <Card.Title>Another Course</Card.Title>
                <Card.Text>
                  Learn more about this course and enhance your skills in no time.
                </Card.Text>
                <Button variant="success">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
           <Col lg={3} md={6} className="mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://via.placeholder.com/100x180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
           <Col lg={3} md={6} className="mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://via.placeholder.com/100x180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
