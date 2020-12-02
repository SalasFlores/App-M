import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import ProductoCard from './ProductoCard';
import { Link } from 'react-router-dom';
import './Iestilo.css';

/**
 * Mostrar el catálogo de productos
 * el usuario elige que comprar
 */
const Compras = ({ history }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    firebase.database().ref(`/products`)
    .on(
      'value',
      (snapshot) => {
        const productsList = [];

        snapshot.forEach(item => {
          const productItem = {
            id: item.key,
            ...item.val()
          };
          productsList.push(productItem);
        });

        setProductos(productsList);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const onProductChange = (producto) => {
    // actualizar la orden
    // buscar el producto en el array
    const index = productos.findIndex((item) => item.id === producto.id);
      console.log(index);
    if (index >= 0) {
      const productosNew = [...productos];
      productosNew[index] = producto;
      setProductos(productosNew);
      console.log(productosNew);
    }
  };

  const calcularTotal = () => {
    const selecteds = productos.filter((item) => item.qty >= 0);
    if (selecteds.length === 0 ) return 0;
 
    return selecteds.reduce((a, b) => a + (b.qty * b.price), 0);
  };

  const handlePayment = () => {
    // ir al checkout
    // mandando la orden
    history.push({
      pathname: '/Checkout',
      state: { order: productos.filter((item) => item.qty >= 0) }
    });
  };

  const renderProductos = () => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {
        productos.map((producto) => (
          <ProductoCard
            key={producto.id}
            id={producto.id}
            name={producto.name}
            price={producto.price}
            description={producto.description}
            onChange={onProductChange}
          />
        ))
      }
    </div>
  );
  return (
    < div className="compras" >
      <br/>
      <br/>
      <br/>
    <center id="center">
      <h1 id="h1">Papeleria Mont-RA - Productos</h1>
      
      <h2 ><p> Aquí encontrarás todos tus materiales escolares,  a los mejores precios. </p></h2>
      
     
      {renderProductos()}
      <hr/>
      <div>

        <h3>
          Total a pagar: 
        ${calcularTotal()} 
        </h3>
        <br/>
        <button type="button" class=" btn btn-outline-success btn-lg"
          onClick={handlePayment}
        >
          Pagar
        </button>
     </div>
     <br/>
     <button type="button" class="btn btn-link">
		  <h4><Link to="/">  Regresar al inicio</Link></h4>
    </button>
      <br/>
      <footer><p>Cualquier duda o sugerencia favor de comunicarse a este número: 43 432 6350</p></footer>
      </center>
     </div>
  );
};

export default withRouter(Compras);
