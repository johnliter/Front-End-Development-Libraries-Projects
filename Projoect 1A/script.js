document.addEventListener('DOMContentLoaded', function () {
    const quoteText = document.getElementById('text');
    const quoteAuthor = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');
    const tweetButton = document.getElementById('tweet-quote');
  
    // Get a random quote
    function getRandomQuote() {
      // Replace this with your own quotes or an API call to fetch quotes
      const quotes = [
         {
            text: "In preparing for battle I have always found that plans are useless, but planning is indispensable.",
            author: "- Dwight D. Eisenhower"
        },
        {
            text: "Victory belongs to the most persevering.",
            author: "- Napoleon Bonaparte"
        },
        {
            text: "A good battle plan that you act on today can be better than a perfect one tomorrow.",
            author: "- General George S. Patton"
        },
        {
            text: "Amateurs talk about tactics, but professionals study logistics.",
            author: "- General Robert H. Barrow"
        },
        {
            text: "The harder the conflict, the greater the triumph.",
            author: "- General George Washington"
        },
        {
            text: "The supreme art of war is to subdue the enemy without fighting.",
            author: "- Sun Tzu"
        },
        {
            text: "There is no substitute for victory.",
            author: "- General Douglas MacArthur"
        },
        {
            text: "Courage is not the absence of fear, but rather the assessment that something else is more important than fear.",
            author: "- General James Mattis"
        },
        {
            text: "Leadership is solving problems. The day soldiers stop bringing you their problems is the day you have stopped leading them.",
            author: "- General Colin Powell"
        },
        {
            text: "If we don't know what we're doing, the enemy certainly can't anticipate our future actions.",
            author: "- General James N. Mattis"
        }
        // Add more quotes here
      ];
  
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    }
  
    // Display a new random quote
    function displayQuote() {
      const { text, author } = getRandomQuote();
      quoteText.textContent = text;
      quoteAuthor.textContent = author;
  
      // Update the tweet button with the current quote
      tweetButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${text}" - ${author}`)}`;
    }
  
    // Event listener for new quote button
    newQuoteButton.addEventListener('click', displayQuote);
  
    // Initial quote display
    displayQuote();
  });  