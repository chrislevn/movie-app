import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Col, Button
} from 'reactstrap';

import ReactModal from 'react-modal';

//for Mega Movie, to show the image poster,
// attached the poster_path to the 
// `baseurl` https://image.tmdb.org/t/p/w500/

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }


  render() {
    return (
        // <Col xs="3">
          <Card>
          <CardImg top width="100%" src={'https://image.tmdb.org/t/p/w500' + this.props.poster_path}  />
          <CardBody>
            <CardTitle> <b>{this.props.title}</b></CardTitle>
            <CardText>{this.props.overview}</CardText>
            <p> Rating: {this.props.vote_average}</p>
            <Button color="danger" onClick={() => this.setState({ showModal: true})}> See Trailer </Button>
          </CardBody> 
        </Card>
        
        // </Col>
    )
  }
}
