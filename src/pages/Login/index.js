import React from 'react';
import Container from '../../components/Container'
import { useFormik } from 'formik'
import { Form, Button } from 'react-bootstrap'
import { useAuth } from '../../hooks/context/AuthProvider';
import { useHistory } from 'react-router-dom';
import { Styled } from './styles';

function Login() {
    const { signIn, error } = useAuth();
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
          login: '',
          password: '',
        },
        onSubmit: async values => {
          await signIn(values)
          history.push("/home")
        },
    });
    return (
        <Container title="Login" size="md">
            <Form  onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-5">
                <Form.Label>Login</Form.Label>
                <Form.Control 
                    id="login"
                    name="login"
                    placeholder="Coloque o seu login" 
                    onChange={formik.handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-5">
                <Form.Label>Senha</Form.Label>
                <Form.Control 
                    id="password"
                    name="password"
                    type="password" 
                    placeholder="Coloque a sua senha" 
                    onChange={formik.handleChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Entrar
            </Button>
        </Form>
            <Styled.Error>{error}</Styled.Error>
        </Container>
    )
}

export default Login;