import React from 'react';
import { NavItem, NavLinks, NavMenu } from './DropDawnMenu.styled';
class DropDownMenu extends React.Component {
  render() {
    return (
      <NavMenu>
        <NavItem>
          <NavLinks to="/contacts/1">Author</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/contacts/2">Director</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/contacts/3">Developer</NavLinks>
        </NavItem>
      </NavMenu>
    );
  }
}

export default DropDownMenu;
