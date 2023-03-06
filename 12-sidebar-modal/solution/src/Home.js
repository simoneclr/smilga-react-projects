import { FaBars } from 'react-icons/fa'
import { useAppContext } from './context'

const Home = () => {

  const {sidebarBtnRef, openSidebar, modalBtnRef, openModal} = useAppContext()

  return (
    <main>
      <button ref={sidebarBtnRef} onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>

      <button ref={modalBtnRef} onClick={openModal} className="btn">
        Show modal
      </button>
    </main>
  )
}

export default Home
