import React, { useState } from 'react';
import './estilo.css';

const Producto = ({
  id, name, price, description, onChange
}) => {
  const [qty, setQty] = useState('');

  const handleChange = (e) => {
    setQty(e.target.value);

    // mandar todos los datos del producto
    // al componente padre
    onChange({
      id, name, price, qty: e.target.value, description,
    });
  };

  return (
   <div id="center">
    <div className="producto">
      <div className="header">
        <img
          className="image"
          src={URL}

        />
        <div>
          <h5>{name}</h5>
          <p>${price}</p>
          <p>{description}</p>
          <p> Cantidad  de productos: <input type="number" className="qty" name="qty" value={qty}
            onChange={handleChange}
          /></p>
        </div>
      </div>
    </div>
    </div> 
  );
};

export default Producto;