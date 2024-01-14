import { useEffect, useState } from "react";
import OrangeComp from "./components/OrangeComp";
import QuoteBox from "./components/QuoteBox";

function App() {
  const [randomColor, setRandomColor] = useState("");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setRandomColor(color);
  }

  useEffect(() => {
    getRandomColor();
  }, []);

  return (
    <div style={{backgroundColor: `${randomColor}`}}
      className={`relative w-full min-h-screen flex place-items-center place-content-center fadeInAnimation`}
    >
      <OrangeComp position={`top-[0]`} />
      <OrangeComp position={`bottom-[0]`} />
      <QuoteBox getRandomColor={getRandomColor} randomColor={randomColor} />
    </div>
  );
}

export default App;
