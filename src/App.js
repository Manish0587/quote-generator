import { useState } from "react";
import "./App.css";
const quotes = [
  "Life isn’t about getting and having, it’s about giving and being. –Kevin Kruse",
  "Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill",
  "Strive not to be a success, but rather to be of value. –Albert Einstein",
  "You miss 100% of the shots you don’t take. –Wayne Gretzky",
  "I attribute my success to this: I never gave or took any excuse. –Florence Nightingale",
  "You can’t use up creativity. The more you use, the more you have. –Maya Angelou",
  "Dream big and dare to fail. –Norman Vaughan",
  "What you do speaks so loudly that I cannot hear what you say. –Ralph Waldo Emerson",
  "Success is going from failure to failure without losing your enthusiasm. –Winston Churchill",
  "Believe you can and you’re halfway there. –Theodore Roosevelt",
  "Fall seven times and stand up eight. –Japanese Proverb",
  "Everything has beauty, but not everyone can see. –Confucius",
  "How wonderful it is that nobody need wait a single moment before starting to improve the world. –Anne Frank",
  "Happiness is not something readymade. It comes from your own actions. –Dalai Lama",
  "The only way to do great work is to love what you do. –Steve Jobs",
  "If you can dream it, you can achieve it. –Zig Ziglar",
  "I find that the harder I work, the more luck I seem to have. –Thomas Jefferson",
  "Success is not the key to happiness. Happiness is the key to success. –Albert Schweitzer",
  "Success usually comes to those who are too busy to be looking for it. –Henry David Thoreau",
  "Don’t be afraid to give up the good to go for the great. –John D. Rockefeller",
  "I am not a product of my circumstances. I am a product of my decisions. –Stephen Covey",
  "The best time to plant a tree was 20 years ago. The second best time is now. –Chinese Proverb",
  "Do what you can, with what you have, where you are. –Theodore Roosevelt",
  "The only limit to our realization of tomorrow is our doubts of today. –Franklin D. Roosevelt",
  "Creativity is intelligence having fun. –Albert Einstein",
  "It does not matter how slowly you go as long as you do not stop. –Confucius",
  "Everything you’ve ever wanted is on the other side of fear. –George Addair",
  "We become what we think about. –Earl Nightingale",
  "An unexamined life is not worth living. –Socrates",
  "Do what you feel in your heart to be right – for you’ll be criticized anyway. –Eleanor Roosevelt",
  "Happiness is not something you postpone for the future; it is something you design for the present. –Jim Rohn",
  "Inspiration exists, but it has to find you working. –Pablo Picasso",
  "Your time is limited, so don’t waste it living someone else’s life. –Steve Jobs",
  "The mind is everything. What you think you become. –Buddha",
  "Winning isn’t everything, but wanting to win is. –Vince Lombardi",
  "I alone cannot change the world, but I can cast a stone across the water to create many ripples. –Mother Teresa",
  "The best revenge is massive success. –Frank Sinatra",
  "It is never too late to be what you might have been. –George Eliot",
  "The only way to do great work is to love what you do. –Steve Jobs",
  "You become what you believe. –Oprah Winfrey",
  "I would rather die of passion than of boredom. –Vincent van Gogh",
  "A person who never made a mistake never tried anything new. –Albert Einstein",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. –Ralph Waldo Emerson",
  "Start where you are. Use what you have. Do what you can. –Arthur Ashe",
  "When I let go of what I am, I become what I might be. –Lao Tzu",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. –Ralph Waldo Emerson",
  "Life is 10% what happens to us and 90% how we react to it. –Charles R. Swindoll",
  "Only those who will risk going too far can possibly find out how far one can go. –T.S. Eliot",
  "If you want to lift yourself up, lift up someone else. –Booker T. Washington",
  "You miss 100% of the shots you don’t take. –Wayne Gretzky",
];

function App() {
	const [quote, setQuote] = useState(quotes[0]);
	/*function generate(){
		const n=quotes[Math.floor(Math.random() * quotes.length)];
		setQuote(n);
	}*/
	/*const generate2 = async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      const randomQuote = data[Math.floor(Math.random() * data.length)];
      setQuote(randomQuote.text);
      
    } catch (error) {
      console.error("Error fetching the quote:", error);
      setQuote("Failed to fetch a new quote.");
      
    }
  };*/
  const [bgColor, setBgColor] = useState("#74ebd5");
  const [quoteColor, setQuoteColor] = useState("rgba(255, 255, 255, 0.8)");

  // Function to generate random hex color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generate = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    setBgColor(getRandomColor()); // Change background color
    setQuoteColor(getRandomColor()); // Change quote div color
  };
  
	return (
		<div className="App"
    style={{ backgroundColor: bgColor, transition: "background-color 0.5s" }}>
			<h1>Quote generator</h1>
			<button onClick={generate}>generate quote</button>
			<div className="quote" style={{
          backgroundColor: quoteColor,
          transition: "background-color 0.5s",
        }}>
        <p>{quote}</p>
        </div>
		</div>
	);
}

export default App;
