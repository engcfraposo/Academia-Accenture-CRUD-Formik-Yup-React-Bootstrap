import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Styled } from './styles';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Navbar from '../components/Navbar';
import { useAuth } from '../hooks/context/AuthProvider';
import CreateProduct from '../pages/CreateProduct';

// import { Container } from './styles';

function Routes() {
  const { auth } = useAuth();
  return (
    <Styled.AppLayout>
        {auth && <Navbar />}
        <Styled.PageLayout>
            <Switch>
                <Route path="/" exact component={Login} />
                {auth && <Route path="/home" component={Home} />}
                {auth && <Route path="/create-product" component={CreateProduct} />}
                <Redirect from="*" to={NotFound} />
            </Switch>
        </Styled.PageLayout>
    </Styled.AppLayout>
  );
}

export default Routes;