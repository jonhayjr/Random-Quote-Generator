/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
{
quote: "Pain is temporary. It may last a minute, or an hour, or a day, or a year, but eventually it will subside and something else will take its place. If I quit, however, it lasts forever.",
source: "Lance Armstrong",
citation: "It's Not about the Bike: My Journey Back to Life",
year: "2000"
},
{
quote: "Be yourself; everyone else is already taken.",
source: "Oscar Wilde"
},
{
quote: "You miss 100% of the shots you don’t take",
source: "Wayne Gretzky",
year: "1991"
},
{
quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
source: "Maya Angelou"
},
{
quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
source: "Winston S. Churchill",
tags: "bravery, courage, failure, inspirational, success"
},
{
quote: "Eighty percent of success is just showing up.",
source: "Woody Allen"
}
]


/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {
  //Calculates random number based on array length
  const randomNumber = Math.floor(Math.random() * quotes.length); 

  //Returns random quote object
  return quotes[randomNumber];
}

/***
 * `getRandomColor function
***/
const getRandomColor = () => {
  //Create 3 random numbers for rgb color values
  const randomNumber1 = Math.floor(Math.random() * 256);
  const randomNumber2 = Math.floor(Math.random() * 256);
  const randomNumber3 = Math.floor(Math.random() * 256);

  //Creates RGB color with 3 random numbers
  const randomColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
  return randomColor;
}

/***
 * `printQuote` function
***/
const printQuote = () => {
  //Stores quote from getRandomQuote function
  const randomQuote = getRandomQuote();

  //Stores random color from getRandomColor function
  const randomColor = getRandomColor();
  


  let HTML = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}
  `;
  
  //If object has citation property value, add HTML with value;
  if (randomQuote.citation) {
    HTML += `<span class="citation">${randomQuote.citation}</span>`;
  }

  //If object has year property value, add HTML with value.
  if (randomQuote.year) {
    HTML += `<span class="year">${randomQuote.year}</span>`;
  }

  //If object has tags property value, add to new line.
  if (randomQuote.tags) {
    HTML += `</p><p class="tags">Tags: ${randomQuote.tags}</p>`;
  } else {
      //Add closing p tag
    HTML += '</p>';
  }


  //Grab element with id of quote-box
  const quoteBox = document.querySelector('#quote-box');

  //Update quoteBox HTML with HTML variable
  quoteBox.innerHTML = HTML;

  //Grab body element and store in a variable
  const body = document.querySelector('body');

  //Set body's background color equal to random color
  body.style.backgroundColor = randomColor;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);