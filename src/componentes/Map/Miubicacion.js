import React from 'react';


const Miubicacion = ({setCenter, setMarker}) => {
	const findMe = () =>{
		if (!navigator.geolocation) {
			alert ('el navegador no soparta geolocalización');
			return;
		} 
		navigator.geolocation.getCurrentPosition(
			
			(position) => {
				console.log(position);
				const {latitude, longitude} = position.coords;
				if(setCenter){
					setCenter(latitude, longitude);
				}
				if (setMarker){
					setMarker(latitude, longitude, 'mi ubicación', `lat: ${latitude}, lng: ${longitude}`);
				}
			},
			(error)=>  {
				alert('error al obtener la ubicación');
			}
		);
	};

	return(
		<>
			<br/>
            <br/>
			<br/>
			<button
			type="button"
			className="btn btn-success"
			onClick={findMe}
			>
			Mi ubicacion
			</button>
			
			</>
			
	
			
	);
	
};

export default Miubicacion; 