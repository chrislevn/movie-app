import React, {Component} from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import App from './App';

export default class Footer extends Component {


    onChange = this.handleChange;
      
    render() {
        return (
            <div>
                <Pagination aria-label="Page navigation example">
      
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={this.props.onChange} >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={this.props.onChange} >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        
      </Pagination>
            </div>
        )
    }
}