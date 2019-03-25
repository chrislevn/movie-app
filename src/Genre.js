import React, {Component} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Genre extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
    
      render() {
        return (
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Movie Genre
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem > Action </DropdownItem>
              <DropdownItem> Drama </DropdownItem>
              <DropdownItem > Comedy  </DropdownItem>
              <DropdownItem> Action </DropdownItem>
              <DropdownItem> Action </DropdownItem>
              <DropdownItem> Action </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        );
      }
    }