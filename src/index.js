let countryName = '';
// 3. Visualising map and handle the changes in select
const goToSelectCountry = async () => {
  const e = document.getElementById('countryFilterSelect');
  countryName = e.options[e.selectedIndex].text;
  const countryCode = e.options[e.selectedIndex].value;
  const REST_PLACES_URL = `.json?country=${countryCode}&access_token=${MY_ACCESS_TOKEN}`;
  const userURL = `${MAPBOX_PLACES_API}${countryName}${REST_PLACES_URL}`;
  const response = await fetch(userURL);
  const data = await response.json();
  const result = data;
  const { coordinates } = result.features[0].geometry;
  const latlong = [...coordinates].reverse();
  mymap.flyTo(latlong);
  L.marker(latlong).bindPopup(`<b>${countryName}</b>`).on('click', paintBarGraph).addTo(mymap)
};
