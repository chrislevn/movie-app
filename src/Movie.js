import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Col, Button
} from 'reactstrap';

//for Mega Movie, to show the image poster,
// attached the poster_path to the 
// `baseurl` https://image.tmdb.org/t/p/w500/

export default class Movie extends Component {
  render() {
    return (
        // <Col xs="3">
          <Card>
          <CardImg top width="100%" src={'https://image.tmdb.org/t/p/w500' + this.props.poster_path}  />
          <CardBody>
            <CardTitle> <b>{this.props.title}</b></CardTitle>
            <CardText>{this.props.overview}</CardText>
            <p> Rating: {this.props.vote_average}</p>
            <Button color="danger"> See More </Button>
          </CardBody> 
        </Card>
        
        // </Col>
    )
  }
}
