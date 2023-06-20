
import Card from 'react-bootstrap/Card';
import { FcHome } from "react-icons/fc"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import DeleteBtn from './DeleteBtn';
import ViewBtn from "./ViewBtn";

function Cards({ address, city, state, zip_code, listing_price, bedrooms, bathrooms, square_feet, listing_date, image, property_type, operation_type, likes, Property_details, amenities }) {
    return (
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Text>
                    <FcHome />  For {operation_type} <strong>{property_type}</strong>
                </Card.Text>
                <Card.Title> ${listing_price.toLocaleString()} </Card.Title>
                <Card.Text>
                    <strong>{bathrooms}</strong> bath <strong>{bedrooms}</strong> bed <strong>{square_feet}</strong> sqft
                </Card.Text>
                <Card.Text>
                    {address},{city},  {state} {zip_code}
                </Card.Text>
                <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-0" aria-label="First group">
        <ViewBtn image={image} listing_price={listing_price} operation_type={operation_type} property_type={property_type}/>
      </ButtonGroup>
      <ButtonGroup className="me-0" aria-label="Second group">
      <DeleteBtn image={image}/>
        
      </ButtonGroup>

    </ButtonToolbar>
 

            </Card.Body>
        </Card>
    )
}
export default Cards;