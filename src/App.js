import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
      {/* we will change this  */}
      {/* eventually*/}
      <Footer />
    </div>
  );
}

export default App;
