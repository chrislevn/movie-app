import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import NavBar from './NavBar';
import MoviesList from './MoviesList'; 
import Genre from './Genre';
import Filter from './Filter';
import Search from './Search';
import Footer from './Footer'

import SAMPLE_DATA from './sample_data';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      moviesList: [],
      pageNumber: 1
    }
  }

   componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    let apiKey = '69af71dc4080c45a2874a8e8b7220651';
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${this.state.pageNumber}`
    fetch(url).
      then(results => results.json()).
      then( data => this.setState({moviesList: data.results}))
  }

  fetchUpcoming() {
    let apiKey = '69af71dc4080c45a2874a8e8b7220651';
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
    fetch(url).
    then(results => results.json()).
    then( data => this.setState({moviesList: data.results}))
  }

  handleChange = ()  => {
    alert('')
    this.setState((prevState, props) => {return {pageNumber : prevState.pageNumber + 1}})
    this.fetchMovies();
  }
  
  render() {
    return (
      <div className="App">
       <NavBar />
        <div class="row">
          <div class="col-4">
             <p> </p>
            <Genre />
            <p> </p>
            <Filter />
            <p> </p>
            <Search /> 
          </div>

          <div class="col-8">
            <h1> Now Playing </h1>
            <MoviesList movies={this.state.moviesList} />
            <Footer onChange={this.handleChange} />
          </div>
          </div>
          <Button onClick={() => this.handleChange()} >  See more </Button>
      </div>
    );
  }
}

export default App;
