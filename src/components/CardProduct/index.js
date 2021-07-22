import React from 'react';
import {Card} from 'react-bootstrap'
// import { Container } from './styles';

function CardProduct({product}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
        <Card.Text>
        {product.description}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;