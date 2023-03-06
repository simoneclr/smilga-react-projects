import { useMemo, useState } from 'react'

import useTabs from './useTabs'

import JobDetails from './JobDetails'

function App() {
  
  const {tabs, isLoading, isError} = useTabs()

  const [activeTab, setActiveTab] = useState(0)

  const sortedTabs = useMemo(() =>
    tabs.slice().sort((a, b) => b - a),
    [tabs]
  )

  // Returns ////////////////////////////////////////////////////////////

  if (isError) {
    return <h1>An Error has occurred</h1>
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (tabs.length === 0) {
    return <h1>Wow, such empty</h1>
  }

  return (
    <section className='section'>
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>

      <div className='jobs-center'>
        <div className='btn-container'>
          {sortedTabs.map((tab, i) => 
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className={`job-btn ${i === activeTab ? "active-btn" : ""}`}
            >
              {tab.company}
            </button> 
          )}
        </div>

        <JobDetails {...sortedTabs[activeTab]}/>
      </div>
    </section>
  )
}

export default App
