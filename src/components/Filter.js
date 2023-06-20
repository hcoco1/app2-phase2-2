import React from "react";
import { Form, Row } from 'react-bootstrap';


function Filter({
    filteredProperties,
    priceCategory,
    typeCategory,
    operationCategory,
    onPriceCategoryChange,
    onOperationCategoryChange,
    onTypeCategoryChange,
}) {

    return (
        <>
<h2 className='filterForm'>List and sell your property for free</h2>
            <Form className="filterForm">
                <Row className="align-items-center">
                    <Form.Label htmlFor="inlineFormCustomSelect" column className="mr-sm-2">
                        Price
                    </Form.Label>

                    <Form.Select
                        id="inlineFormCustomSelect"
                        name="filter"
                        value={priceCategory}
                        onChange={(e) => onPriceCategoryChange(e.target.value)}
                    >
                        <option value="All">All Prices</option>
                        <option value="300000">- than $300K</option>
                        <option value="450000">+ than $450K</option>
                        <option value="600000">+ than $600K</option>
                    </Form.Select>


                    <Form.Label htmlFor="inlineFormCustomSelect2" column className="mr-sm-2">
                        Property Type
                    </Form.Label>

                    <Form.Select
                        id="inlineFormCustomSelect2"
                        name="filter"
                        value={typeCategory}
                        onChange={(e) => onTypeCategoryChange(e.target.value)}
                    >
                        <option value="All">All Types</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Condo">Condo</option>
                        <option value="Farm">Farm</option>
                        <option value="Land">Land</option>
                        <option value="Townhome">Townhome</option>
                        <option value="House">House</option>
                    </Form.Select>


                    <Form.Label htmlFor="inlineFormCustomSelect3" column className="mr-sm-2">
                        Sale or Rent?
                    </Form.Label>

                    <Form.Select
                        id="inlineFormCustomSelect3"
                        name="filter"
                        value={operationCategory}
                        onChange={(e) => onOperationCategoryChange(e.target.value)}
                    >
                        <option value="All">All Operations</option>
                        <option value="1">Sale</option>
                        <option value="2">Rent</option>
                    </Form.Select>

                </Row>
            </Form>
            <hr className="style1"/>

            <h5>Found <strong>{filteredProperties.length}</strong> matching properties</h5>
            <hr className="style1"/>
        </>

    );
}
export default Filter;