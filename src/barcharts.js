// function that deals with the country data to create a barchart

function handleCountryData(countryName) {
  let countryDate = [];
  let yearCases = [];

  const countryDailyCases = covidData.filter((country) => {
    if (countryName === country.name) {
      return {
        date: country.date,
        dailyCases: country.dailyCases,
      };
    }
  });
  countryDailyCases.sort((a, b) => (a.date > b.date ? 1 : -1));

  countryDailyCases.forEach((country) => countryDate.push(country.date) && yearCases.push(Number(country.dailyCases)));

  return [countryDate, yearCases];
}

// 2.2. Function that creates my barchart
function paintBarGraph() {
  const oneCountry = handleCountryData(countryName);
  const dayBarChartData = {
    labels: oneCountry[0],
    series: [oneCountry[1]],
  };
  new Chartist.Bar('#daily-bar-chart', dayBarChartData);
}

// SECTION 2.- CREATING ADDITIONAL BARCHARTS

// 2.1. Formatting data

const result = covidData.filter((country) => {
  const date = '01/12/2020';
  if (date === country.date) {
    return {
      country,
    };
  }
});

result.sort((a, b) => b.casesPerMile - a.casesPerMile);

let countries = [];
const getCountries = result.forEach((country) => {
  return countries.push(country.name);
});

let casesPerMile = [];
const getCasesPerMile = result.forEach((country) => {
  return casesPerMile.push(Number(country.casesPerMile));
});

// 2.2. Creating a Barcahart

const barChartData = {
  labels: countries,
  series: [casesPerMile],
};

// barchart options

const barChartOptions = {
  axisX: {
    showGrid: false,
  },
  axisY: {
    showGrid: false,
    scaleMinSpace: 0,
  },
  seriesBarDistance: 0,
};

new Chartist.Bar('#bar-chart', barChartData, barChartOptions);