import React from 'react';
import {Card} from 'react-bootstrap'
// import { Container } from './styles';

function CardProduct({name, description, price}) {
  return (
    <Card style={{ width: '18rem', padding: "1rem", marginTop: "15px" }}>
      <Card.Title>
        <strong>Nome: </strong>{name}
      </Card.Title>
      <Card.Text className="mb-2">
        <strong>Preço(R$): </strong> {price}
        </Card.Text>
      <Card.Text>
        <strong>Descrição: </strong>{description}
      </Card.Text>
  </Card>
  );
}

export default CardProduct;