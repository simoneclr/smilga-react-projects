import { useState, useRef, useEffect } from 'react'

import { FaBars } from 'react-icons/fa'
import logo from './logo.svg'

import { links, social } from './data'

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false)

  const linksContainerRef = useRef(null)
  const linksListRef = useRef(null)

  useEffect(() => {
    const linksListHeight = linksListRef.current.getBoundingClientRect().height
    
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksListHeight}px`
    } else {
      linksContainerRef.current.style.height = "0"
    }
  }, [showLinks])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Navbar logo" />

          <button onClick={() => setShowLinks(!showLinks)} className="nav-toggle">
            <FaBars />
          </button>
        </div>

        <div ref={linksContainerRef} className={`links-container ${showLinks ? "show-container" : ""}`}>
          <ul ref={linksListRef} className="links">
            {links.map(link =>
              <li key={link.id}>
                <a href={link.url}>
                  {link.text}
                </a>
              </li>
            )}
          </ul>
        </div>
        
        <ul className="social-icons">
          {social.map(link =>
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
              </a>
            </li>  
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
