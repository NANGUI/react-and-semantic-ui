import React, { Component } from "react"
import { 
    BrowserRouter,
    Link
 } from 'react-router-dom'
import { Menu, MenuItem, Icon } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"


class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return <BrowserRouter>
        <Menu fixed="top">
          <MenuItem header>
            <Link to="/">{this.props.title}</Link>
          </MenuItem>

          <MenuItem href="/elements" active={activeItem === "elements"} onClick={this.handleItemClick}>
            Elements
          </MenuItem>

          <MenuItem href="/collections" active={activeItem === "collections"} onClick={this.handleItemClick}>
            Collections
          </MenuItem>

          <MenuItem href="/vues" active={activeItem === "vues"} onClick={this.handleItemClick}>
            Vues
          </MenuItem>

          <MenuItem href="/modules" active={activeItem === "modules"} onClick={this.handleItemClick}>
            Modules
          </MenuItem>

          <MenuItem href="/plus" active={activeItem === "plus"} onClick={this.handleItemClick}>
            Plus ...
          </MenuItem>

          <Menu.Menu position="right">
            <Menu.Item>
              Adonai NANGUI <Icon color="blue" name="copyright" /> 2018
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </BrowserRouter>;
  }
}

export default Navbar;
