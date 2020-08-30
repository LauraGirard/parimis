function initMap() {
	var coords = {lat: 48.8650712, lng: 2.2998897};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		fullscreenControl: false,
		center: coords
	});

	var marker = new google.maps.Marker({
		position: coords,
		map: map,
		title: 'Hôtel Parimis'
	});
}

