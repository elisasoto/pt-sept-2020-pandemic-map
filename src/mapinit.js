// 2. create the map
// Setting up map global const
const mapID = 'mapid';
const mockUpCoords = [45, 0];
const mapType = 4;
const MY_ACCESS_TOKEN =
  'pk.eyJ1IjoiZWxpc2Fzb3RvIiwiYSI6ImNraTBqbjczdjAwNDYycHFuNXB6enUwdWoifQ.Fr7VtpdTeZuoo1CqcJcJpw';
const ATTRIBUTION =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MAPBOX_CALL =
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}';

// initializing my map
const mymap = L.map(mapID).setView(mockUpCoords, mapType);

// visualizing the map
L.tileLayer(MAPBOX_CALL, {
  attribution: ATTRIBUTION,
  maxZoom: 5,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: MY_ACCESS_TOKEN,
}).addTo(mymap);

// using MAPBOXPLACES

const MAPBOX_PLACES_API = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

// preparing headers of fetch type get

const FETCH_HEADERS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};