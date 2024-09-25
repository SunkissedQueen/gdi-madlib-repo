function generateStory() {
  const meal = document.getElementById('meal').value;
  const snack = document.getElementById('snack').value;
  const collection = document.getElementById('collection').value;

  if (!meal || !snack || !collection) {
      alert("Please fill in all fields!");
      return;
  }

  const story = `
  At the potluck, you mistakenly brought ${snack} instead of your favorite meal, ${meal}. 
  In a hilarious mix-up, you tried to trade your ${snack} for a friend's dish, but it was a collection of ${collection}. 
  "Only if it's a ${meal}-flavored ${collection}!" they laughed. 
  The night turned into a memorable feast of laughter and unexpected snacks!
  `;

  document.getElementById('story').innerHTML = story;
}