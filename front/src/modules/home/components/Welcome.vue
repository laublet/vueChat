<template>
  <div class="welcome" >
    <div class="row welcome__row">
      <router-link :to="{name: 'productsList'}">
        <button class="btn btn-lg btn--menu">Get the list of products !</button>
      </router-link><br>
      <h2 class="heading-secondary">{{ title }}</h2>
    </div>
    <div id="mapid"></div>
  </div>
</template>

<script>
import swal from "sweetalert2";

export default {
  name: "welcome",
  data() {
    return {
      title: "Welcome"
    };
  },
  mounted() {
    function currentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var marker = L.marker([
            position.coords.latitude,
            position.coords.longitude
          ]).addTo(mymap);
          marker
            .bindPopup(
              "Ma position :<br> Latitude : " +
                position.coords.latitude +
                ",<br>Longitude " +
                position.coords.longitude
            )
            .openPopup();
        });
      } else {
        alert("La géolocalisation n'est pas supportée par ce navigateur.");
      }
    }

    currentLocation();

    var mymap = L.map("mapid", {
      center: ["45.99956", "-1.21353"],
      zoom: 18
    });

    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken:
          "pk.eyJ1Ijoia2FzMDQiLCJhIjoiY2pmY2Fkcm5uMjlqbTJybnZ4ZmxrbDJoaCJ9.V1aIrSzguAz3gUlY-Qi6Fw"
      }
    ).addTo(mymap);
  },
  methods: {}
};
</script>

<style scoped>
</style>
