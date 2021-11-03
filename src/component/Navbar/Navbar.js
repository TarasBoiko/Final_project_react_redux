import React, { Fragment } from 'react';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from '../Navbar/Navbar.styled.js';
import DropDownMenu from './DropdownMenu/DropDownMenu.js';

class Navbar extends React.Component {
  state = {
    showContactMenu: false,
  };

  handleHover = () => {
    this.setState({ showContactMenu: true });
  };

  handleLeave = () => {
    this.setState({ showContactMenu: false });
  };

  render() {
    return (
      <Fragment>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              Books
            </NavLogo>
            <NavMenu>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem onMouseLeave={this.handleLeave}>
                <NavLinks onMouseEnter={this.handleHover} to="/contacts">
                  Contacts
                </NavLinks>
                {this.state.showContactMenu && <DropDownMenu />}
              </NavItem>
              <NavItem>
                <NavLinks to="/books">Books</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/feedback">Feedback</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </Fragment>
    );
  }
}

export default Navbar;
