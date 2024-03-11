import "./App.css";
import beerInfo from "./BeerInfo.js";
import userData from "./static_data/users.json";

console.log(beerInfo);
console.log(userData);

function App() {
  console.log(userData);
  return (
    <>
      <img src={beerInfo.image} alt="" />;
    </>
  );
}

export default App;
