//NOTE: consider bring in lodash for these selectors

export function issueSelect(data, category) {
  console.log('args in issueSelect: ', data, category);
  const storage = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i].category === category) {
      storage.push(data[i]);
    };
  };

  console.log('this is storage in issueSelect: ', storage);
  return storage;
};

export function colorPopulate(data) {
  console.log('args in colorPopulate: ', data);
  let range = [];
  let lowrange = undefined;
  let highrange = 0;

  for (var i = 0; i < data.length; i++) {
    if (data[i].value !== 0) {
      if (lowrange === undefined) {
        lowrange = data[i].value;
      }

      if (lowrange > data[i].value) {
        lowrange = data[i].value;
      }

      if (highrange < data[i].value) {
        highrange = data[i].value;
      }

      range.push(data[i]);
    }
  }

  console.log('colorPopulate returns: ', [range, lowrange, highrange]);
  return [range, lowrange, highrange];
}
