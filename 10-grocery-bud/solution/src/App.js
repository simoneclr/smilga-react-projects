import { useState } from 'react'

import useAlert from './useAlert'
import useLocalStorage from './useLocalStorage'

import List from './List'
import Alert from './Alert'

function App() {

  const [name, setName] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)

  const [items, setItems] = useLocalStorage("GROCERY_BUD_ITEMS", [])

  const {alert, showAlert} = useAlert()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name) {
      if (isEditing) {
        setItems(items.map(item => 
          item.id !== editId ? item : {
            ...item,
            name
          }
        ))

        showAlert("success", "Changes saved.")
        setIsEditing(false)
        setEditId(null)
      } else {
        setItems([...items, {
          id: Date.now(),
          name
        }])
  
        showAlert("success", name + " added to the list.")
      }
    } else {
      showAlert("danger", "Please enter a valid item name.")
    }
    
    setName("")
  }

  const removeItem = (id) => {
    showAlert("danger", "Item removed")
    setItems(items.filter(item => item.id !== id))
  }

  const editItem = (id) => {
    setIsEditing(true)
    setEditId(id)
    setName(items.find(item => item.id === id).name || "")
  }

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        
        {alert && <Alert {...alert} />}

        <h3>Grocery Bud</h3>

        <div className="form-control">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="grocery"
            placeholder='E.g. eggs'
          />

          <button className="submit-btn">
            {isEditing ? "Edit" : "Add"}
          </button>
        </div>
      </form>

      {items.length > 0 &&
        <div className="grocery-container">
          <List
            items={items}
            removeItem={removeItem}
            editItem={editItem}
          />

          <button onClick={() => setItems([])} className="clear-btn">
            Clear list
          </button>
        </div>        
      }      
    </section>
  )
}

export default App
