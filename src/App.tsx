import { useState } from 'react'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemName, setItemName] = useState("");

  return (
    <>
      <div className="top-bar">
        <span className="top-bar-counter">items in this list</span>
        <button className='top-bar-button' onClick={() => setIsModalOpen(true)}>
          New Item
        </button>
      </div>

      {isModalOpen && ( 
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-box-top">
              <h2 className='modal-box-title'>New Item</h2>
              <button className="modal-box-close" onClick={() => setIsModalOpen(false)}>X</button>
            </div>

            <label htmlFor="item-name">Item name</label>
            <input 
              id="item-name" 
              type="text" 
              placeholder="Enter task name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />

            <p>{itemName}</p>

            <div className="modal-box-bottom">
              <button className="modal-box-cancel" onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className="modal-box-save">Save</button>
            </div>
          </div>
        </div>
      )}

      <div className="list">
      </div>
    </>
  )
}

export default App
