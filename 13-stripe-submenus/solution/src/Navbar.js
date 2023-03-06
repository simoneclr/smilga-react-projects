import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

import { useAppContext } from './context'

const Navbar = () => {

  const {
    openSidebar,
    openSubmenu,
    closeSubmenu
  } = useAppContext()

  const displaySubmenu = (e) => {
    const page = e.target.textContent
    const btnBox = e.target.getBoundingClientRect()

    const center = (btnBox.left + btnBox.right) / 2
    const bottom = btnBox.bottom

    openSubmenu(page, {center, bottom})
  }

  const hideSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu()
    }
  }

  return (
    <nav onMouseOver={hideSubmenu} className='nav'>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Stripe" className='nav-logo' />

          <button onClick={openSidebar} className="btn toggle-btn">
            <FaBars/>
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button onMouseOver={displaySubmenu} className='link-btn'>
              products
            </button>
          </li>

          <li>
            <button onMouseOver={displaySubmenu} className='link-btn'>
              developers
            </button>
          </li>

          <li>
            <button onMouseOver={displaySubmenu} className='link-btn'>
              company
            </button>
          </li>
        </ul>

        <button className="btn signin-btn">
          Sign In
        </button>
      </div>
    </nav>
  )
}

export default Navbar
