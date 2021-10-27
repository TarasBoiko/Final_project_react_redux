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

class Navbar extends React.Component {
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
              <NavItem>
                <NavLinks to="/contacts">Contacts</NavLinks>
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
