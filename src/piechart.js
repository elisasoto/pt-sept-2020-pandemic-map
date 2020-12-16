// 2.3 creating a pie chart of total daily cases by country

// sum of total cases using reduce
/* const cases = covidData.map((item) => Number(item.dailyCases)).reduce((prev, next) => prev + next);
 */
// sum of cases by country
// first, convert data into a Map with reduce

let counts = covidData.reduce((prev, curr) => {
    let count = prev.get(curr.name) || 0;
    prev.set(curr.name, Number(curr.dailyCases) + count);
    return prev;
  }, new Map());
  
  // then, map the counts object back to an array
  let reducedObjArr = [...counts].map(([name, dailyCases]) => {
    return { name, dailyCases };
  });
  
  reducedObjArr.sort((a, b) => (a.dailyCases > b.dailyCases ? -1 : 1)); // sort descending
  
  // for better readability create an 'Others category'
  let others = reducedObjArr.filter((element) => {
    if (element.dailyCases < 15000) {
      return element;
    }
  });
  let othersReduced = others.reduce((prev, curr) => prev + curr.dailyCases, 0); // sum all the 'Others' < 15000 dailyCases
  
  // countries with higher incidences
  let higher = reducedObjArr.filter((element) => {
    if (element.dailyCases > 15000) {
      return element;
    }
  });
  
  // create an others category inside the higher array
  higher.push({ name: 'Others', dailyCases: othersReduced });
  
  let newOrderedCountries = [];
  let totalDailyCases = [];
  const getDailyCases = higher.forEach((country) => {
    return totalDailyCases.push(Number(country.dailyCases));
  });
  
  const getNewOrderedCountries = higher.forEach((country) => {
    return newOrderedCountries.push(country.name);
  });
  
  // create the pie chart
  const pieChartData = {
    labels: newOrderedCountries,
    series: totalDailyCases,
  };
  
  const pieOptions = {
    showlabel: true,
    width: 600,
    height: 500,
  };
  
  new Chartist.Pie('#pie-chart', pieChartData, { donut: true }, pieOptions);