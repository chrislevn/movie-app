import React, {Component} from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import App from './App';
import PaginationComponent from "react-reactstrap-pagination";

export default class Footer extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          selectedPage: 1
        };
    
        this.handleSelected = this.handleSelected.bind(this);
      }

      handleSelected(selectedPage) {
        console.log("selected", selectedPage);
        this.setState({ selectedPage: selectedPage });
       let numberPage = selectedPage 
       this.props.fetchMovies(numberPage);
      }
    
      
    render() {
        return (
           <div className="container-fluid">
                <PaginationComponent
                totalItems={50}
                pageSize={3}
                onSelect={this.handleSelected} />

      </div>
        )
    }
}