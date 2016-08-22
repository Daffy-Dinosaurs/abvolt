//NOTE: consider bring in lodash for these selectors

export function issueSelect(data, category) {
  const storage = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i].category === category) {
      storage.push(data[i]);
    };
  };

  return storage;
};

export function colorPopulate(data) {
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

  return [range, lowrange, highrange];
}
