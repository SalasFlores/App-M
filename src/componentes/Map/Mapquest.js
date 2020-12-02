import React, { useEffect } from 'react';
const Mapquest = ({ height, width, center, tileLayer, zoom, apikey }) => {
	useEffect(() => {
		//api key
		window.L.mapquest.key = apikey;

		//iniciar el mapa
		const map = window.L.mapquest.map('map', {
			center,
			layers: window.L.mapquest.tileLayer(tileLayer),
			zoom
		});
		map.addControl(window.L.mapquest.control());
	  }, []);
	
	 return (
		
		<div id="map" style={{ width, height }}>
			<br/>
            <br/>
		 <p > cargando el mapa </p>

		 
		 </div>

	 );
};
export default Mapquest;