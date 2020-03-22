import React from 'react'
// import {FaBars} from 'react-icons/fa'
import {IoIosArrowDropright, IoIosArrowDropleft} from 'react-icons/io'


const SidebarIcon = ({handleClick, isOpen}) => {
  return <span onClick={handleClick}>
    {isOpen ? <IoIosArrowDropleft /> : <IoIosArrowDropright/>}
  </span>
}
export default SidebarIcon
