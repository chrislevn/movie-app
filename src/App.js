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
import ReactModal from 'react-modal';
import YouTube from '@u-wave/react-youtube';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      moviesList: [],
      pageNumber: 1,
      showModal: false,
      searchTerm: ''
    }
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  onSearchTermChanged = text => {
    this.setState({
      searchTerm: text
    }, () => console.log(this.state.searchTerm));
  };


   componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies(number) {
    let apiKey = '69af71dc4080c45a2874a8e8b7220651';
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${number}`
    
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


  render() {
    let displayMovie
    if (this.state.movies)  {
      displayMovie=this.state.moviesList;
    } else {
     displayMovie = this.state.moviesList.filter(item => item.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    // displayMovie=this.state.moviesList;

    }
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
            <Search textChange={this.onSearchTermChanged}/> 
            <p> </p>
            <Footer fetchMovies={this.fetchMovies}/>
          </div>

          <div class="col-8">
            <h1> Now Playing </h1>
            <MoviesList movies={displayMovie}  />
            
          </div>
          </div>
          
      </div>
    );
  }
}

export default App;
