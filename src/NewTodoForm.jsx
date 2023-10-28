import { useState } from "react"

export default function NewTodoList({ onSubmit }) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)
        
        setNewItem("")
      }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input 
          type="text" 
          value={newItem} 
          id="text"
          onChange={e => setNewItem(e.target.value)}
          required
          />
        </div>
        <button className="btn">Add</button>
      </form>
    )
}