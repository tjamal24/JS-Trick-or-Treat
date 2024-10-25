const candyImage = document.getElementById('candyImage');

const candies = [
  'images/twix.jpg',
  'images/skittles.jpg',
  'images/m&ms.jpg',
  'images/sour patch.jpg',
  'images/hersheys.jpg'
];

const randomIndex = Math.floor(Math.random() * candies.length);

const randomCandy = candies[randomIndex];

candyImage.src = randomCandy;

console.log("Random candy selected:", randomCandy);