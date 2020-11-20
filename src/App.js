import React , { useState } from 'react'
import './App.css';
import NavBar from './components/navbar';
import MovieList from './components/movieList';

function App() {

  // const [searchTerm, usingSearchTerm] = useState()

  return (
    <div className="App">
      <NavBar />
      <MovieList/>
    </div>
  );
}

export default App;
 