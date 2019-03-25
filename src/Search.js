import React, {Component} from 'react'
import { Input, Button } from 'reactstrap';

export default class Search extends Component {
    render() {
        return (
            <div>
                <div class="col-sm">
                <b> Search </b>
                <Input type="text" id="exampleEmail" placeholder="search anything" onClick={() => this.setState({pageNumber: 2})}/>

                </div>
            </div>
        )
    }
}