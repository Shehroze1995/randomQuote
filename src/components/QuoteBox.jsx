import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function QuoteBox({ getRandomColor, randomColor }) {
  const [randomQuote, setRandomQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const randomQuoteUrl = `https://api.quotable.io/random`;
  const getRandomQuote = async () => {
    setLoading(true);
    try {
      let resp = await fetch(randomQuoteUrl);
      resp = await resp.json();
      setRandomQuote(resp.content);
      setQuoteAuthor(resp.author);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomQuote();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getRandomColor();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randomQuote]);

  return (
    <div
      id="quote-box"
      className="max-w-[600px] w-11/12 flex flex-col place-items-center"
    >
      {loading ? (
        <AiOutlineLoading3Quarters className="text-5xl loadingAnimation" />
      ) : (
        <>
          <div className="fadeInAnimation flex flex-col bg-white p-10 rounded max-[380px]:p-5 max-[350px]:p-3">
            <div
              id="text"
              className="text-3xl relative pl-10 max-[450px]:text-xl max-[450px]:pl-7 max-[350px]:text-base"
            >
              <span className="absolute top-0 left-0">
                <FaQuoteLeft style={{ color: `${randomColor}` }} />
              </span>
              <span>{randomQuote}</span>
            </div>
            <p id="author" className="self-end mt-2">
              - {quoteAuthor}
            </p>
            <div className="flex place-items-center place-content-between mt-8">
              <a
                href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Life%20is%20not%20measured%20by%20the%20number%20of%20breaths%20we%20take%2C%20but%20by%20the%20moments%20that%20take%20our%20breath%20away.%22%20Maya%20Angelou"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  style={{ backgroundColor: `${randomColor}` }}
                  id="tweet-quote"
                  className="p-2 rounded"
                >
                  <FaTwitter className="text-[24px]" />
                </button>
              </a>
              <button
                onClick={getRandomQuote}
                id="new-quote"
                style={{ backgroundColor: `${randomColor}` }}
                className="px-8 py-2 rounded"
              >
                New quote
              </button>
            </div>
          </div>
          <p className="text-center py-2 fadeInAnimation font-extrabold tracking-[.3rem]">
            Crafted By Shehroze
          </p>
        </>
      )}
    </div>
  );
}

QuoteBox.propTypes = {
  getRandomColor: PropTypes.func,
  randomColor: PropTypes.string,
};

export default QuoteBox;
