const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

// APIs to fetch quotes from
const apis = [
    "https://dummyjson.com/quotes",
    "https://jacintodesign.github.io/quotes-api/data/quotes.json"
];

// Function to get a random quote
async function getQuote() {
    try {
        const randomApi = apis[Math.floor(Math.random() * apis.length)];
        const response = await fetch(randomApi);
        const data = await response.json();

        // Handle different API structures
        let quotesArray = randomApi.includes("dummyjson") ? data.quotes : data;
        
        // Pick a random quote
        let randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

        // Display quote and author
        quoteText.textContent = `"${randomQuote.quote}"`;
        authorText.textContent = `- ${randomQuote.author || "Unknown"}`;
    } catch (error) {
        quoteText.textContent = "Failed to load a quote!";
        authorText.textContent = "";
        console.error("Error fetching quote:", error);
    }
}

// Load a quote when the button is clicked
newQuoteBtn.addEventListener("click", getQuote);

// Load a quote on page load
getQuote();
