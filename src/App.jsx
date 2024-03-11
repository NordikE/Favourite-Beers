import "./App.css";
import beer1 from "./assets/13643502-1.jpg";
import userData from "./static_data/users.json";

function App() {
  console.log(userData);
  return (
    <>
      <img src={beer1} alt="First favourite beer" />;
    </>
  );
}

export default App;
