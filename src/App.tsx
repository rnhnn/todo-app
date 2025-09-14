import { useState } from 'react'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="top-bar">
        <span className="top-bar-counter">items in this list</span>
        <button className='top-bar-button' onClick={() => setIsModalOpen(true)}>
          New Item
        </button>
      </div>

      {isModalOpen && <div className="modal-overlay" onClick={() => setIsModalOpen(false)}></div>}

      <div className="list">
      </div>
    </>
  )
}

export default App
