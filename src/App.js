import React from 'react'
import './App.css';
import NavBar from './components/navbar';
// import MovieList from './components/movieList';
import Routes from './components/router';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes/>
    </div>
  );
}

export default App;
 