import React, {Component} from 'react'

import PaginationComponent from "react-reactstrap-pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';

export default class Footer extends Component {

    render() {
        return (
            <div className="container-fluid">
               <PaginationComponent
                  totalItems={50}
                  pageSize={3}
                  onSelect={this.handleSelected}
                />
            </div>
        )
    }
}