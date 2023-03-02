import { useState } from 'react';

import items from './data';

import Menu from './Menu';
import CategoryFilter from './CategoryFilter';

function App() {
  
  const [activeCategory, setActiveCategory] = useState(null)

  const categories = Array.from(new Set(items.map(item => item.category)))

  const filteredItems = items.filter(item => 
    !activeCategory || item.category === activeCategory
  )

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>

        { categories.length > 0 &&
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            clearCategoryFilter={() => setActiveCategory(null)}
            setActiveCategory={setActiveCategory}
          />
        }

        <Menu items={filteredItems}/>
      </section>      
    </main>
  )
}

export default App;
