import React, {Component} from 'react';
import InputRange from 'react-input-range';


export default class Filter extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          value1: { min: 2010, max: 2019 },
          value2: { min: 6, max: 8 },
          value3: { min: 1, max: 2 },
        };
      }

    render() {
        return (
            <div>
                <b> Year </b>
                <div class="col-sm">
                <p> </p>
                <InputRange
                    maxValue={2019}
                    minValue={1900}
                    value={this.state.value1}
                    onChange={value1 => this.setState({ value1 })} />

                </div>
                <b> Rating </b>
                <div class="col-sm">
                <p> </p>
                <InputRange
                    maxValue={10}
                    minValue={0}
                    value={this.state.value2}
                    onChange={value2 => this.setState({ value2 })} />
                </div>
                <b> Runtime </b>
                <div class="col-sm">
                <p> </p>
                <InputRange
                    maxValue={5}
                    minValue={0}
                    value={this.state.value3}
                    onChange={value3 => this.setState({ value3 })} />
                </div>
            </div>
        )
    }
}