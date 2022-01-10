import "./main.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Subhero from "./components/Subhero";
import Places from "./components/Places";
import Apartments from "./components/Apartments";
import After from "./components/After";
import Reviews from "./components/Reviews";
import data2 from "./data2";
import data from "./data.js";

function App() {
  const apartmentContents = data.map((rooms) => {
    return <Apartments key={rooms.id} {...rooms} />;
  });
  const reviewsContents = data2.map((review) => {
    return <Reviews key={review.id} {...review} />;
  });
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Subhero />
      <Places />
      <div className="card-contents">{apartmentContents}</div>
      <After />
      <div className="testimonial">{reviewsContents}</div>
    </div>
  );
}

export default App;
