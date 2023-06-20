import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardsContainer from './CardsContainer';

const Home = () => {
  return (
    <Container fluid>
      <Row className="roomfac">
        <Col>
          <CardsContainer />
        </Col>
      </Row>
    </Container>
  )
}

export default Home;