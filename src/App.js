import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard.js'
import Layout from './components/Layout.js'

function App() {
  return (
    <div className="App">
        <div className="NewApp">
            <Layout logoPartOne="Some Logo" logoPartTwo="Here" itemOne="About us" itemTwo="Portfolio" itemThree="Contacts"/>
        </div>
      <MovieCard title="LOTR: Two Towers" date="2002" thumbnail="https://www.kino-teatr.ru/movie/posters/big/8/26078.jpg"/>
      <MovieCard title="Schindler's List" date="1993" thumbnail="https://i.pinimg.com/474x/38/66/fc/3866fceb9c89732b38f38383611ad17a.jpg"/>
      <MovieCard title="ATLA: The Legend of Aang" date="2005" thumbnail="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320410885l/8438005.jpg"/>
    </div>
  );
}


export default App;