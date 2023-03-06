import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useAppContext } from './context'

const Sidebar = () => {

  const {isSidebarOpen, closeSidebar} = useAppContext()

  return (
    <aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
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
