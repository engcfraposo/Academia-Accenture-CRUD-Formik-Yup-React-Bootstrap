import React from 'react';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import Container from '../../components/Container';
import { useProduct } from '../../hooks/context/ProductProvider';
import { useHistory } from 'react-router-dom';

// import { Container } from './styles';

function CreateProduct() {
 const history = useHistory()
 const { createProduct } = useProduct()
 const formik = useFormik({
     initialValues:{
         name:"",
         description:"",
         price:0
     },
     onSubmit: async values => {
        await createProduct(values)
        history.push("/home")
     }
 }) 
  return (
  <Container 
    title="Criar Produto" 
    size="md"
  >
    <Form  onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-5">
            <Form.Label>Nome</Form.Label>
            <Form.Control 
                id="name"
                name="name"
                placeholder="Coloque o nome do produto" 
                onChange={formik.handleChange}
            />
        </Form.Group>

            <Form.Group className="mb-5">
                <Form.Label>Descrição</Form.Label>
                <Form.Control 
                    id="description"
                    name="description"
                    placeholder="Coloque uma descrição" 
                    onChange={formik.handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-5">
                <Form.Label>Preço</Form.Label>
                <Form.Control 
                    id="price"
                    name="price"
                    type="number"
                    placeholder="Valor do produto" 
                    onChange={formik.handleChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Criar Produto
            </Button>
        </Form>
  </Container>
  );
}

export default CreateProduct;