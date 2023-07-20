const fetchURL =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const getQuotes = async () => {
  const response = await fetch(fetchURL);
  const quotes = await response.json();

  return quotes;
};

const addQuote = async () => {
  try {
    const quotes = await getQuotes();
    if (quotes) {
      const quotesArr = quotes.quotes;
      const randomNumber = Math.floor(Math.random() * quotesArr.length - 1);
      const randomQuote = quotesArr[randomNumber];
      const textElement = document.getElementById('text');
      const authorElement = document.getElementById('author');
      textElement.innerText = randomQuote.quote;
      authorElement.innerText = `- ${randomQuote.author}`;
    }
  } catch (err) {
    console.log(err);
  }
};

window.onlaod = addQuote();

const buttonEl = document.getElementById('new-quote');
buttonEl.addEventListener('click', addQuote);
