

let country_name = '';

// 3. Visualising map and handle the changes in select
const goToSelectCountry = async () => {
  const e = document.getElementById('countryFilterSelect');
  country_name = e.options[e.selectedIndex].text;
  const country_Code = e.options[e.selectedIndex].value;
  const REST_PLACES_URL = `.json?country=${country_Code}&access_token=${MY_ACCESS_TOKEN}`;
  const userURL = `${MAPBOX_PLACES_API}${country_name}${REST_PLACES_URL}`;
  const response = await fetch(userURL);
  const data = await response.json();
  const result = data;
  const { coordinates } = result.features[0].geometry;
  const latlong = [...coordinates].reverse();
  mymap.flyTo(latlong);

  L.marker(latlong)
    .bindPopup(`<b>${country_name}</b>`)
    .addTo(mymap)
    .on('click', () => paintBarGraph());
};






