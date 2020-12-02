import React, { useState } from 'react';
import Mapquest from './Mapquest';
import Miubicacion from './Miubicacion';
import Busqueda from './Busqueda';
import {Link} from 'react-router-dom';

function UbicacionApp() {
  

  //componente state
  const [lat, setLat] = useState('18.603277'); //18.603277,-98.4598249..18.603277!4d-98.4576362
  const [lng, setLng] = useState('-98.4576362');

  const [markers, setMarkers] = useState ([]);

  //fijar mapa
  const setCenter= (lat, lng) =>{
    setLat(lat);
    setLng(lng);
    window.L.mapquest.Map.getMap('map').setView(new window.L.LatLng(lat, lng), 12);   
  };
  const addMarker = (lat, lng, title, subtitle) => {
    const marker = window.L.mapquest.textMarker(
      new window.L.LatLng(lat, lng)
        ,{  
          text: title || '',
          subtext: subtitle || '',
          position: 'right',
          type: 'marker',
          icon: {
          primaryColor:'#aB190f',
          secundaryColor: '#db2c2c',
          size: 'md'
        }
      }
    )
    .addTo(window.L.mapquest.Map.getMap('map'));
    //crear un coia
    const copyMarkers = markers.slice(0);
    copyMarkers.splice(0, 0, marker);
    setMarkers(copyMarkers);   //push(marker);
  };


  const clearMarkers = () => {
    markers.forEach(marker => {
      window.L.mapquest.Map.getMap('map').removeLayer(marker);
    });
    //limpiar state
    setMarkers([]);
    
  };
 

  return (
    <div className="container-fluid">
      <div className="row pl-3 pr-3 pt-3 pb-3">
        <div className="col-sm-10" >
          <Busqueda setCenter={setCenter} addMarker={addMarker} clearMarkers={clearMarkers} />
        </div>
        <div className="col-sm-2">
         <Miubicacion setCenter={setCenter} setMarker={addMarker} />
      </div>
    </div>
    <Mapquest
      height="80vh"
      width="100%"
      center={[lat, lng]}
      tileLayer={'map'}
      zoom={12}
      apikey="aFJhdnMSouwG1wUUAJqefdL4MvpCHMrU"
    />
    <br/>
     <br/>
     <button type="button" class="btn  btn-outline-danger">
		  <Link to="/">  Regresar al inicio</Link>
    </button>
     
    </div>
  );
}

export default UbicacionApp;
