import { useGlobalContext } from './context'

const Buttons = () => {

  const {page, nbPages, jumpToPage, isLoading} = useGlobalContext()

  return (
    <div className="btn-container">
      <button onClick={() => jumpToPage(page - 1)} disabled={isLoading}>
        Previous
      </button>

      <p>
        {`${page + 1} of ${nbPages}`}
      </p>

      <button onClick={() => jumpToPage(page + 1)} disabled={isLoading}>
        Next
      </button>
    </div>
  )
}

export default Buttons
