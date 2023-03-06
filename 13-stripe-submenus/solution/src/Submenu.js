import { useRef, useEffect } from 'react'

import { useAppContext } from './context'

const Submenu = () => {

  const {isSubmenuOpen,
    location,
    content: {page, links}
  } = useAppContext()

  const containerRef = useRef(null)

  useEffect(() => {
    const submenu = containerRef.current
    const {center, bottom} = location

    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom - 3}px`
  }, [location, containerRef])

  return (
    <aside ref={containerRef} className={`submenu ${isSubmenuOpen ? "show" : ""}`}>
      <h4>{page}</h4>

      <div className={`submenu-center col-${Math.min(links.length, 4)}`}>
        {links.map((link, i) =>
          <a key={i} href={link.url}>
            {link.icon} {link.label}
          </a>
        )}
      </div>
    </aside>
  )
}

export default Submenu
