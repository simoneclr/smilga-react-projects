const CategoryFilter = ({
  categories, activeCategory, clearCategoryFilter, setActiveCategory
}) => {
  return (
    <ul className="btn-container">
      <li>
        <button
          onClick={clearCategoryFilter}
          className="filter-btn"
        >
          All
        </button>
      </li>

      {categories.map(c => 
        <li key={c}>
          <button 
            onClick={() => setActiveCategory(c)}
            className={`filter-btn ${activeCategory === c ? "filter-btn--active" : ""}`}
          >
            {c}
          </button>
        </li>
      )}
    </ul>
  )
};

export default CategoryFilter;
