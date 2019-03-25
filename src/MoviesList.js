import React, {Component} from 'react'
import Movie from './Movie';
import { CardColumns, Buttons, Row } from 'reactstrap';

export default class MoviesList extends Component {
    render() {
        if( this.props.movies.length > 0) {
            return (
              <CardColumns>
                {this.props.movies.map(movie => 
                  <Movie {...movie} />)}
              </CardColumns>
            )  
          } else {
            return <h1> No Movies! </h1>
          }
    }
}