<template>
    <div style="height:400px;">
        <div id="map"></div>
        <div id="map2"></div>
    </div>
</template>
<script>
export default {
    props: {
        mapId: {
            type: String,
            default: 'gMapOriginDestination'
        },
        origin: Object,
        destination: Object
    },
    data() {
        return {
        }
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            console.log('MapId:', this.mapId);
            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer();
            const map = new google.maps.Map(document.getElementById("map2"), {
                zoom: 7,
                center: { lat: 41.85, lng: -87.65 },
                mapId: "map2"
            });

            console.log(this.origin);
            console.log(this.destination);

            directionsRenderer.setMap(map);

            setTimeout(() => {
                const originLoc = this.origin;
                const destinationLoc = this.destination;
                directionsService
                    .route({
                        origin: Object.create(originLoc),
                        destination: Object.create(destinationLoc),
                        travelMode: google.maps.TravelMode.DRIVING,
                    })
                    .then((response) => {
                        console.log('response::', response)
                        directionsRenderer.setDirections(response);
                    })
                    .catch((e) => window.alert("Directions request failed due to " + status));

            }, 3000);

            //const onChangeHandler = function () {
            //  calculateAndDisplayRoute(directionsService, directionsRenderer);
            //};

            //document.getElementById("start").addEventListener("change", onChangeHandler);
            //document.getElementById("end").addEventListener("change", onChangeHandler);
        }
    }
}
</script>
  