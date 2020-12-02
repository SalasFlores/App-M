import React, {useState} from 'react';
import { withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import PaypalCheckoutButton from './PaypalCheckout/PaypalCheckoutButton';
import './estilo.css';


const Checkout = (props) => {
    const [productos, setProductos] = useState( props.location.state.order);

    

    const calcularTotal = () =>{
        let total = 0;
        productos.forEach((producto) => {
            total += producto.qty * producto.price;
        });

        return total;
    };
    
    const renderProductos = () => (
        <tbody>
            {
               productos.map((producto) =>(
                   <tr>
                       <td>
                           {producto.name}
                       </td>
                       <td>
                         $  {producto.price}
                       </td>
                       <td>
                           {producto.qty}
                       </td>
                       <td>
                           {producto.description}
                       </td>
                       <td>
                          $ {producto.qty * producto.price}
                       </td>
                   </tr>
               ))
            }
        </tbody>
    );

    const order = {
    customer: {},
    total: calcularTotal(),
    productos: [{
      sku: {},
      name:{},
      price:{},
      quantity: {},
      currency: 'MXN'
    }]
    };

    

    return(
        < div className="me" >
            <br/>
            <br/>
            <br/>
            <br/>
            <center>
            <header><h1 id="title">  Mi compra</h1></header>
                <p> <strong>Para poder realizar su compra, deberá tener una cuenta activa en Pyapal.
                Una vez echa la compra tendrá un máximo de dos días para recoger sus productos</strong></p>
                <br/>
            <table  id="tabla">
                <thead>
                    <th>
                        Producto
                    </th>
                    <th>
                        Precio
                    </th>
                    <th>
                        Cantidad
                    </th>
                    <th>
                        Descripcion
                    </th>
                    <th>
                        SubTotal
                    </th>
                </thead>
                
                    {renderProductos()}
                    <br/>
                    <tfoot>
                        
                        <th>
                            
                            Total a pagar:
                        </th>
                        <th>
                           $ {calcularTotal()}
                        </th>
                    </tfoot>
            </table>
            <div>
            <br/>
            <PaypalCheckoutButton order={order}/>
            </div>
            </center>
            <br/>
            <button  type="button" class="btn btn-outline-danger">
            <Link to="/Compras" >Cancelar pago</Link>
            </button>
            <br/>
            <footer><h5>¡¡¡ Gracias por su prefencia !!!</h5></footer>
        </div>
        
    );
};

export default withRouter(Checkout);