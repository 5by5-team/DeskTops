import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
// import * as pData from '../../../../data/skateboard-parks.json';
import './map.css';
export default function Ma() {
	// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
	return (
		<div>
			<Map
				center={[31.354675, 34.308826]}
				zoom={12}
				style={{ position: 'relative', height: '100vh' }}
			>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				{/* {pData.features.map(park => (
					<Marker key={park.properties.PARK_ID} />
				))} */}
			</Map>
		</div>
	);
}
