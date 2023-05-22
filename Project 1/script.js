window.onload = function() {
    // Array of quotes with their respective authors
    var quotes = [
        {
            quote: "In preparing for battle I have always found that plans are useless, but planning is indispensable.",
            author: "- Dwight D. Eisenhower"
        },
        {
            quote: "Victory belongs to the most persevering.",
            author: "- Napoleon Bonaparte"
        },
        {
            quote: "A good battle plan that you act on today can be better than a perfect one tomorrow.",
            author: "- General George S. Patton"
        },
        {
            quote: "Amateurs talk about tactics, but professionals study logistics.",
            author: "- General Robert H. Barrow"
        },
        {
            quote: "The harder the conflict, the greater the triumph.",
            author: "- General George Washington"
        },
        {
            quote: "The supreme art of war is to subdue the enemy without fighting.",
            author: "- Sun Tzu"
        },
        {
            quote: "There is no substitute for victory.",
            author: "- General Douglas MacArthur"
        },
        {
            quote: "Courage is not the absence of fear, but rather the assessment that something else is more important than fear.",
            author: "- General James Mattis"
        },
        {
            quote: "Leadership is solving problems. The day soldiers stop bringing you their problems is the day you have stopped leading them.",
            author: "- General Colin Powell"
        },
        {
            quote: "If we don't know what we're doing, the enemy certainly can't anticipate our future actions.",
            author: "- General James N. Mattis"
        }
    ];

    // Get DOM elements
    var generateBtn = document.getElementById("generate-btn");
    var quoteElement = document.getElementById("quote");
    var authorElement = document.getElementById("author");
    var containerElement = document.querySelector(".container");
    var shareFacebookBtn = document.getElementById("share-facebook");
    var shareTwitterBtn = document.getElementById("share-twitter");

    // Generate quote button click event
    generateBtn.addEventListener("click", function() {
        // Get a random quote object from the quotes array
        var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        // Update the quote element text
        quoteElement.textContent = randomQuote.quote;
        // Update the author element text
        authorElement.textContent = randomQuote.author;
        // Generate a random gradient for the container background
        var gradient = generateRandomGradient();
        containerElement.style.background = gradient;
        // Adjust text color for readability
        adjustTextColor();
    });

    // Share on Facebook button click event
    shareFacebookBtn.addEventListener("click", function() {
        // Get the current quote and author text
        var quote = quoteElement.textContent;
        var author = authorElement.textContent;
        // Construct the Facebook sharing URL with the quote and current page URL
        var url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href) + "&quote=" + encodeURIComponent(quote + " " + author);
        // Open the sharing dialog in a new window
        window.open(url, "_blank");
    });

    // Share on Twitter button click event
    shareTwitterBtn.addEventListener("click", function() {
        // Get the current quote and author text
        var quote = quoteElement.textContent;
        var author = authorElement.textContent;
        // Construct the Twitter sharing URL with the quote and author
        var url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " " + author);
        // Open the sharing dialog in a new window
        window.open(url, "_blank");
    });

    // Generate a random gradient for the container background
    function generateRandomGradient() {
        var colors = [];
        for (var i = 0; i < 3; i++) {
            var randomColor = getRandomColor();
            colors.push(randomColor);
        }
        var gradient = "linear-gradient(to right, " + colors.join(", ") + ")";
        return gradient;
    }

    // Generate a random color for the gradient
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        color += "40"; // Add transparency
        return color;
    }

    // Adjust text color based on background brightness for readability
    function adjustTextColor() {
        // Get the RGB values of the container background color
        var rgb = window.getComputedStyle(containerElement).backgroundColor.match(/\d+/g);
        // Calculate the brightness using the formula
        var brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
        // Set the text color based on the background brightness
        var textColor = brightness > 125 ? "#333333" : "#ffffff";
        quoteElement.style.color = textColor;
        authorElement.style.color = textColor;
    }
};
