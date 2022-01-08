import "./main.css";
import Header from "./components/Header";
import Subhero from "./components/Subhero";
import Places from "./components/Places";
import Apartments from "./components/Apartments";
import data from "./data.js";

function App() {
  const apartmentContents = data.map((rooms) => {
    return <Apartments key={rooms.id} {...rooms} />;
  });
  return (
    <div className="App">
      <Header />
      <Subhero />
      <Places />
      <div className="card-contents">{apartmentContents}</div>
    </div>
  );
}

export default App;
