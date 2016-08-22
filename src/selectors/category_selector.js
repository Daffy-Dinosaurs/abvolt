export function issueSelect(data, category) {
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
  let range = [];
  let lowrange = undefined;
  let highrange = 0;

  if (data.value !== 0) {
    if (lowrange === undefined) {
      lowrange = data.value;
    }

    if (lowrange > data.value) {
      lowrange = data.value;
    }

    if (highrange < data.value) {
      highrange = data.value;
    }

    range.push(data);
  }

  return [range, lowrange, highrange];
}
