import React from 'react'
import "./menu.css"
import MainLogo from "../../../../assets/images/common/PASHA LIFE Logo.svg"
import Icon from '../../../../assets/images/icons/icon'

const Menu = () => {
  return (
    <div className='menu'>
        <div className='menu-logo'><img src={MainLogo}/></div>
        <div className='menu-list'>
            <ul>
                <li><Icon name="sidebarIcon1" color="#FFFFFF" size={25}/></li>
                <li><Icon name="sidebarIcon2" color="#FFFFFF" size={25}/></li>
                <li><Icon name="sidebarIcon3" color="#FFFFFF" size={23}/></li>
                <li><Icon name="sidebarIcon4" color="#FFFFFF" size={25}/></li>
                <li><Icon name="sidebarIcon5" color="#FFFFFF" size={25}/></li>
                <li><Icon name="sidebarIcon6" color="#FFFFFF" size={25}/></li>
                <li><Icon name="sidebarIcon7" color="#FFFFFF" size={25}/></li>
                <li><Icon name="sidebarIcon8" color="#FFFFFF" size={25}/></li>
                <li><Icon name="sidebarIcon9" color="#FFFFFF" size={25}/></li>
                <li><Icon name="sidebarIcon10" color="#FFFFFF" size={25}/></li>
            </ul>
        </div>
    </div>
  )
}

export default Menu
