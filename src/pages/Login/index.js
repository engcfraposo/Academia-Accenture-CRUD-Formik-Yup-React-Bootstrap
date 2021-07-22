import React, {useMemo} from 'react';
import Container from '../../components/Container'
import { useFormik } from 'formik'
import { Form, Button } from 'react-bootstrap'
import { useAuth } from '../../hooks/context/AuthProvider';
import { useHistory } from 'react-router-dom';
import { Styled } from './styles';
import { validationSchema } from './validation'

function Login() {
    const { signIn, error } = useAuth();
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
          login: '',
          password: '',
        },
        validationSchema,
        onSubmit: async values => {
          await signIn(values)
          history.push("/home")
        },
    });
    const AppError = useMemo(() =>  <Styled.Error>{error}</Styled.Error>,[error])
    const ValidationLoginError = useMemo(() =>  <Styled.Error>{formik.errors.login}</Styled.Error>,[formik.errors.login])
    const ValidationPasswordError = useMemo(() =>  <Styled.Error>{formik.errors.password}</Styled.Error>,[formik.errors.password])
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
                    isValid={formik.touched.login && !formik.errors.login}
                    isInvalid={formik.errors.login}
                />
                {ValidationLoginError}
            </Form.Group>

            <Form.Group className="mb-5">
                <Form.Label>Senha</Form.Label>
                <Form.Control 
                    id="password"
                    name="password"
                    type="password" 
                    placeholder="Coloque a sua senha" 
                    onChange={formik.handleChange}
                    isValid={formik.touched.password && !formik.errors.password}
                    isInvalid={formik.errors.password}
                />
                {ValidationPasswordError}
            </Form.Group>
            <Button variant="primary" type="submit">
                Entrar
            </Button>
        </Form>
           {AppError}
        </Container>
    )
}

export default Login;