import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Col,
  Button
} from "reactstrap";
import ReactModal from "react-modal";
import YouTube from "@u-wave/react-youtube";

//for Mega Movie, to show the image poster,
// attached the poster_path to the
// `baseurl` https://image.tmdb.org/t/p/w500/


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      trailer: []
    };
  }

  

  fetchTrailer = () => {
    let movie_id = this.props.id;
    let apiKey = "69af71dc4080c45a2874a8e8b7220651";
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${apiKey}&language=en-US`;
    fetch(url)
      .then(results => results.json())
      .then(data => {
        console.log(data);
        this.setState({ trailer: data.results.find(video => video.type === "Trailer") });
      });
  };

  handleClickButton = () => {
    this.fetchTrailer();
    this.setState({
      showModal: true
    });
  };

  render() {
    return (
      // <Col xs="3">
      <Card>
        <CardImg
          top
          width="100%"
          src={"https://image.tmdb.org/t/p/w500" + this.props.poster_path}
        />
        <CardBody>
          <CardTitle>
            {" "}
            <b>{this.props.title}</b>
          </CardTitle>
          <CardText>{this.props.overview}</CardText>
          <p> Rating: {this.props.vote_average}</p>
          <Button color="danger" onClick={this.handleClickButton}>
            {" "}
            Trailer{" "}
          </Button>
        </CardBody>
        <ReactModal
          isOpen={this.state.showModal}
          trailer={this.state.trailer.key}
          style={customStyles}
           >
          
          <YouTube video={this.state.trailer.key} autoplay />
          <div>
            <button  onClick={() => this.setState({ showModal: false })}>
              {" "}
              Close trailer{" "}
            </button>
          </div>
        </ReactModal>
      </Card>

      // </Col>
    );
  }
}
