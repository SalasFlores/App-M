import React from 'react';

import { Route, Switch } from 'react-router-dom';
import UbicacionApp from './componentes/Map/UbicacionApp';
import comprar from './componentes/comprar';
import Inicio from './componentes/index';
import Checkout from './componentes/Checkout';
//import PaypalCheckoutButton from './componentes/Checkout/PaypalCheckout/PaypalCheckoutButton';





const Routes = () => (
    <Switch>
        
        <Route exact path='/UbicacionApp' component={UbicacionApp}/>
        <Route exact path='/Compras' component={comprar}/>
        <Route exact path="/" component={Inicio}/>
        <Route exact path="/Checkout" component={Checkout}/>
        
        
        
    </Switch>
);

export default Routes;