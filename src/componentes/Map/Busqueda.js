import React, { useState } from 'react';


const Busqueda = ({ setCenter, clearMarkers, addMarker }) => {
	const [query, setQuery] = useState ('');

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		findLocation();
	};

	const findLocation = () => {
		if (!query.length) return;

		if (clearMarkers) clearMarkers();

		window.L.mapquest.geocoding().geocode(query,
			(error, response) => {
				console.log(response);
				response.results.forEach((result, res_index) => {
					result.locations.forEach(location => {
						const { street, adminArea3, adminArea5, latLng} = location;
						if (res_index === 0) {
							setCenter(latLng.lat, latLng.lng);
						}
						addMarker(
							latLng.lat,
							latLng.lng,
							`lat: ${latLng.lat}, ing: ${latLng.lng}`,
							`${street || ''}, ${adminArea5}, ${adminArea3}`

					     );
					});
				});
			}
		);
	};

	return (
		<>
			<br/>
            <br/>
			<br/>
            <br/>
		<form onSubmit = {handleSubmit} className="form-inline">
		 <div className="form-group col-8">
		 
		  <label htmlFor="query" className="mr-2" >Buscar:</label>
		  <input
		   type="text"
		   className="form-control col-10"
		   id="query"
		   defaultValue={query}
		   onChange={handleChange}
		  />
		 </div>
		 <button type="submit" className="btn btn-primary" disabled = {!query.length}>Buscar  </button>
		 
		
		</form>
		</>

    );  

};

export default Busqueda;