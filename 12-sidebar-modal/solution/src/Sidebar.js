import React, { useRef } from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useAppContext } from './context'
import useOnClickOutside from './useOnClickOutside'

const Sidebar = () => {

  const {isSidebarOpen, sidebarBtnRef, closeSidebar} = useAppContext()

  const sidebarRef = useRef(null)

  useOnClickOutside(sidebarRef, sidebarBtnRef, closeSidebar)

  return (
    <aside ref={sidebarRef} className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <header className="sidebar-header">
        <img src={logo} alt="Coding Addict" className='logo' />

        <button onClick={closeSidebar} className="close-btn">
          <FaTimes />
        </button>
      </header>
       <ul className="links">
        {links.map(({id, url, text, icon}) =>
          <li key={id}>
            <a href={url}>
              {icon} {text}
            </a>
          </li>  
        )}
       </ul>

       <ul className="social-icons">
        {social.map(({id, url, icon}) => 
          <li key={id}>
            <a href={url}>
              {icon}
            </a>
          </li>
        )}
       </ul>
    </aside>
  )
}

export default Sidebar
