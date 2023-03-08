import { useFetch } from './useFetch'
import usePagination from './usePagination'

import Follower from './Follower'

function App() {

  const {data, loading} = useFetch()

  const {
    currentPage,
    currentPageIndex,
    pageList,
    prevPage,
    nextPage,
    jumpToPage
  } = usePagination(data, 10)

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "Loading..." : "Pagination"}</h1>
        <div className="underline"></div>
      </div>

      <section className="followers">
        <div className="container">
          {currentPage.map(follower => 
            <Follower key={follower.id} {...follower} />
          )}
        </div>

        { pageList.length > 1 && 
          <div className="btn-container">
            <button onClick={prevPage} className="prev-btn">
              Previous
            </button>

            {pageList.map(page => 
              <button
                key={page}
                onClick={() => jumpToPage(page)}
                className={`page-btn ${page === currentPageIndex ? "active-btn" : ""}`}
              >
                {page + 1}
              </button>
            )}
            
            <button onClick={nextPage} className="next-btn">
              Next
            </button>
          </div>
        }
      </section>
    </main>
  )
}

export default App
