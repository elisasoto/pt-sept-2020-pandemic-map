// 1. CREATING A SELECT WITH THE UNIQUE COUNTRIES OPTIONS
// create the select in DOM
const selectorDiv = document.querySelector('#country-select');
let selectList = document.createElement('select');
selectList.setAttribute('id', 'countryFilterSelect');
selectList.setAttribute('name', 'countryFilter');
selectorDiv.appendChild(selectList);

// add a generic option
let newOption = document.querySelector('#countryFilterSelect');
let addOption = document.createElement('option');
addOption.text = 'Select a Country';
addOption.setAttribute('value', 'allcountries');
addOption.setAttribute('selected', 'true');
newOption.add(addOption);

// 1.1 CREATING A LIST OF UNIQUE COUNTRIES TO APPEND IN SELECT
const countryNames = [];
const countryCodes = [];
covidData.forEach((country) => countryNames.push(country.name) && countryCodes.push(country.abbr));
// create arrays with unique countries and codes
const uniqueCountries = Array.from(new Set(countryNames)).sort();
const uniqueCountryCodes = Array.from(new Set(countryCodes));
// add the unique countries in the select
for (let i = 0; i < uniqueCountries.length; i++) {
  let option = document.createElement('option');
  option.setAttribute('value', uniqueCountryCodes[i]);
  option.text = uniqueCountries[i];
  selectList.appendChild(option);
}

// 4 Creating select Functionality and executing the selectCountry map display

function handleChangeSelect() {
    goToSelectCountry();
    paintBarGraph()
  }
  
  const countrySelect = document.querySelector('#countryFilterSelect');
  countrySelect.addEventListener('change', handleChangeSelect);