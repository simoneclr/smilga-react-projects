import { FaBars } from 'react-icons/fa'
import { useAppContext } from './context'

const Home = () => {

  const {openSidebar, openModal} = useAppContext()

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>

      <button onClick={openModal} className="btn">
        Show modal
      </button>
    </main>
  )
}

export default Home
