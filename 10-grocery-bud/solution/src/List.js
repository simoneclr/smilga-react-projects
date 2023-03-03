import GroceryItem from './GroceryItem'

const List = ({items, removeItem, editItem}) => {
  return (
    <div className="grocery-list">
      {items.map(item =>
        <GroceryItem
          key={item.id}
          handleRemoveClick={() => removeItem(item.id)}
          handleEditClick={() => editItem(item.id)}
          {...item}
        />  
      )}
    </div>
  )
}

export default List
