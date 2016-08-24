export function selectTweets(category, tweets) {
  let item;

  if (category === 'Water Pollution') {
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
