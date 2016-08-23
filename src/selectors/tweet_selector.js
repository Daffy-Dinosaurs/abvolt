export function selectTweets(category, tweets) {
  let item;

  console.log('selectTweets args: ', category, tweets);

  if (category === 'Water Pollution') {
    console.log('conditional is working in selectTweets');
    item = tweets.water_tweets;
  };

  if (category == 'Poverty') {
    item = tweets.poverty_tweets;
  };

  if (category === 'Food Scarcity') {
    item = tweets.food_tweets;
  };

  return item;

}
