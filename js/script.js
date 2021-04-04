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
year: "2000",
tags: ""
},
{
quote: "Be yourself; everyone else is already taken.",
source: "Oscar Wilde",
citation: "",
year: "",
tags: ""
},
{
quote: "You miss 100% of the shots you don’t take",
source: "Wayne Gretzky",
citation: "",
year: "1991",
tags: ""
},
{
quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
source: "Maya Angelou",
citation: "",
year: "",
tags: ""
},
{
quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
source: "Winston S. Churchill",
citation: "",
year: "",
tags: "bravery, courage, failure, inspirational, success"
},
{
quote: "Eighty percent of success is just showing up.",
source: "Woody Allen",
citation: "",
year: "",
tags: ""
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
 * `printQuote` function
***/
const printQuote = () => {
  //Stores quote from getRandomQuote function
  const randomQuote = getRandomQuote();

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

  //If object has tags property value, add HTML with value.
  if (randomQuote.tags) {
    HTML += `<span class="tags">Tags: ${randomQuote.tags}</span>`;
  }

  //Add closing p tag
  HTML += '</p>';

  //Grab element with id of quote-box
  const quoteBox = document.querySelector('#quote-box');

  //Update quoteBox HTML with HTML variable
  quoteBox.innerHTML = HTML;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);