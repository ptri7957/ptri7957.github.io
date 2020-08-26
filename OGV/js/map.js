$(document).ready(function(){
    $(function(){
        var mapId = document.getElementById('map');
        var map = new google.maps.Map(mapId, {
            center: {lat: -35.520822, lng: 150.38158},
            zoom: 10
        });
        var marker = new google.maps.Marker({
            position: {lat: -35.520822, lng: 150.38158},
            map: map
        });
    });
});