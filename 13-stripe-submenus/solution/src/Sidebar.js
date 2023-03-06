import { FaTimes } from 'react-icons/fa'

import sublinks from './data'

import { useAppContext } from './context'

const Sidebar = () => {

  const {isSidebarOpen, closeSidebar} = useAppContext()

  return (
    <aside className={`sidebar-wrapper ${isSidebarOpen ? "show" : ""}`}>
      <div className="sidebar">
        <button onClick={closeSidebar} className="close-btn">
          <FaTimes/>
        </button>

        <div className="sidebar-links">
          {sublinks.map((item, i) => 
            <article key={i}>
              <h4>{item.page}</h4>

              <div className="sidebar-sublinks">
                {item.links.map((link, j) =>
                  <a key={j} href={link.url}>
                    {link.icon} {link.label}
                  </a>
                )}
              </div>
            </article>
          )}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
