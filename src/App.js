import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import "./App.css";
import MovieComponent from "./components/MovieComponent";

function App() {
  const movieInfo = {
    Id: "1",
    posterURL:
      "https://bocacode.com/assets/images/bc-logos/boca-code-rgb-logo-tag-reversed.png",
    title: "Boca Code the Movie ",
  };
  return (
    <div className="App">
      <Header />
      <MovieComponent movieProp={movieInfo} />
      <MovieList />
      {/* we will change this  */}
      {/* eventually*/}
      <Footer />
    </div>
  );
}

export default App;
