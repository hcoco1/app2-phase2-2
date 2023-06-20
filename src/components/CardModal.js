import Card from 'react-bootstrap/Card';

import Carousel from 'react-bootstrap/Carousel';

function CardModal({image, listing_price, operation_type, property_type  }) {
  return (
    <>
      <Card>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/300?random=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>${listing_price.toLocaleString()}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/300?random=2"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>${listing_price.toLocaleString()}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/300?random=3"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>${listing_price.toLocaleString()}</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Card>
      <br />

    </>
  );
}

export default CardModal;