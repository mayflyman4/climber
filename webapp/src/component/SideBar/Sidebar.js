import React, { Component } from 'react'
import SidebarContent from './SidebarContent'
import MenuOpenSharpIcon from '@material-ui/icons/MenuOpenSharp';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';

export default class Sidebar extends Component {
  state = {
    isOpen: true
  }

  toggleSidebar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    return <div className="sidebar-container">

      {/* sidebar icon loaded from SidebarIcon.js*/}
      <div className="sidebar-close-icon">
        <SidebarIcon
          isOpen={this.state.isOpen}
          handleClick={this.toggleSidebar}
        />
      </div>

      {/* sidebar content loaded from SidebarContent.js */}
      <SidebarContent isOpen={this.state.isOpen} />

    </div>
  }
}

const SidebarIcon = ({ handleClick, isOpen }) => {
  return <span onClick={handleClick}>
    {isOpen ? <MenuOpenSharpIcon /> : <MenuSharpIcon />}
  </span>
}
