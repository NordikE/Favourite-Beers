import "./App.css";
import { BeerInfo } from "./BeerInfo.js";

function App() {
  console.log(BeerInfo);
  const beerImages = BeerInfo.map((beer) => (
    <div className="beerCard" key={beer.id}>
      <h2>{beer.name}</h2>
      <img src={beer.image} alt={beer.name} />
    </div>
  ));

  return (
    <div id="beer-info">
      <h1>My favourite beers!</h1>
      <p>Because I like the taste...</p>
      {beerImages}
    </div>
  );
}

export default App;
