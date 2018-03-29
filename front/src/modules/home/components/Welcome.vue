<template>
  <div class="welcome" >
    <div class="row welcome__row">
      <h2 class="heading-secondary">{{ title }}</h2><br>
      <router-link :to="{name: 'productsList'}">
        <button class="btn btn-lg btn--white">Productslist</button>
      </router-link>
    </div>
    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
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
    function currentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((function (position) {
          var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap);
          marker.bindPopup("Ma position :<br> Latitude : " + position.coords.latitude + ',<br>Longitude ' + position.coords.longitude).openPopup();
        }));
      } else {
        alert("La géolocalisation n'est pas supportée par ce navigateur.");
      }
    }
    
    currentLocation();

    var mymap = L.map('mapid', {
      center: ['45.99956', '-1.21353'],
      zoom: 18
    });

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1Ijoia2FzMDQiLCJhIjoiY2pmY2Fkcm5uMjlqbTJybnZ4ZmxrbDJoaCJ9.V1aIrSzguAz3gUlY-Qi6Fw'
    }).addTo(mymap);

  },
  methods: {
  }
};
</script>

<style scoped>
/* body {
    padding: 50px;
    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
    min-width: 200px;
    height: 100%;
    margin: 0;
    padding: 0;
} */

/* a {
    color: #00B7FF;
} */

#mapid {
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -30%);
    width: 80%;
    height: 60%;
    min-height: 40%;
    border-radius: 3px;
}

.mylocation {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, 10%);
    -webkit-border-radius: 7;
    -moz-border-radius: 7;
    border-radius: 7px;
    font-family: Arial;
    color: #1f628d;
    font-size: 30px;
    background: #ffffff;
    padding: 10px 20px 10px 20px;
    border: solid #1f628d 2px;
    text-decoration: none;
}

.mylocation:hover {
    background: #1f628d;
    text-decoration: none;
    color: #ffffff;
    border: none;
}

@media (max-width: 767px) {
  #mapid, .mylocation {
    display: none;
  }
}

/* @media (max-width: 993) {
  #mapid, .mylocation {

  }
} */
</style>
