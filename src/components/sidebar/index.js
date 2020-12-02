import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './sidebar';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={ isOpen } onClick={ toggle }>
      <Icon onClick={ toggle }>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={ toggle }>About Me</SidebarLink>
          <SidebarLink to='projects' onClick={ toggle }>Projects</SidebarLink>
          <SidebarLink to='resume' onClick={ toggle }>Résumé</SidebarLink>
          <SidebarLink to='social' onClick={ toggle }>Social Networks</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/contact' onClick={ toggle }>Contact Me</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
