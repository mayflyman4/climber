import React, { Component } from 'react'
import logo from './../../pictures/logo.svg';
import { Transition } from 'react-transition-group'

// Sidebar text content 
const duration = 350
const sidebarStyle = {
  transition: `width ${duration}ms`
}
const sidebarTransitionStyles = {
  entering: { width: 0 },
  entered: { width: '200px' },
  exiting: { width: '200px' },
  exited: { width: 0 }
}
const linkStyle = {
  transition: `opacity ${duration}ms`
}
const linkTransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 }
}
export default class SidebarContent extends Component {
  renderLinks = () => {
    return <Transition in={this.props.isOpen} timeout={duration}>
      {(state) => (
        <div style={{
          ...linkStyle,
          ...linkTransitionStyles[state]
        }}>
          {/* TODO: change application logo here */}
          <div className="sidebar-logo"><img src={logo} height="120px" alt="logo" /></div>
          <div className="sidebar-link">Home</div>
          <div className="sidebar-link">My Profile</div>
          <div className="sidebar-link">Browse all Treks</div>
          <div className="sidebar-link">Trek Gears for rent</div>
          <div className="sidebar-link">Find a Trek for me</div>
          {/* <div className="sidebar-link">Contact Us</div> */}
        </div>
      )}
    </Transition>
  }

  render() {
    return <Transition in={this.props.isOpen} timeout={duration}>
      {(state) => (
        <div className="sidebar" style={{
          ...sidebarStyle,
          ...sidebarTransitionStyles[state]
        }}>
          {this.renderLinks()}
        </div>
      )}
    </Transition>
  }
}
