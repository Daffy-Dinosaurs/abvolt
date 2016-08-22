export function annualData(countryData, year) {
  let storage = [];

  for (var i = 0; i < countryData.length; i++) {
    if (countryData.year == year) {
      storage.push(countryData[i]);
    }
  }

  return storage;
}

export function overallAnnualData(data, year) {
  let storage = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i].year == year) {
      storage.push(data[i]);
    }
  }

  return storage;
}
