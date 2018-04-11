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
      title: "Welcome",
    };
  },
  mounted() {
    this.mapinit();
  },
  methods: {
    mapinit() {
      let currentLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            let marker = L.marker([position.coords.latitude,position.coords.longitude]).addTo(mymap);
            // marker.bindPopup("Ma position :<br> Latitude : " + position.coords.latitude + ",<br>Longitude " + position.coords.longitude).openPopup();
            this.$store.state.location = position.coords;

            let geocoding = L.esri.Geocoding.reverseGeocode().latlng([position.coords.latitude, position.coords.longitude])
            .run((error, result, response) => {
              let address = result.address
              // console.log('DANS RUN', address)
              this.$store.state.location = address
              this.$store.state.location.latitude = position.coords.latitude
              this.$store.state.location.longitude = position.coords.longitude

              console.log('ICI' ,this.$store.state.location)
              marker.bindPopup("Here" + this.$store.state.location.City).openPopup();
            });
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
      L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
        {attribution:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox.streets",
          accessToken:
          "pk.eyJ1Ijoia2FzMDQiLCJhIjoiY2pmY2Fkcm5uMjlqbTJybnZ4ZmxrbDJoaCJ9.V1aIrSzguAz3gUlY-Qi6Fw"
        }).addTo(mymap);

    },
  }
};
</script>

<style scoped>
</style>
