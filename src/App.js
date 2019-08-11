import React from 'react'
import './App.css'
const fruits = ['banana', 'blackberry', 'kiwi', 'orange']

function fruitImages() {
  return fruits.map(fruit => require(`./images/${fruit}.png`))
}

function handleButtonClick(path){
  return <img src={path}></img>
}

function App() {
  const imagePaths = fruitImages()
  return (
    <div>
      { imagePaths.map(path => {
        return (
          <button
            className='invisi-button'
            onClick={() => handleButtonClick(path)}
          >
              <img className='icon' src={path} />
          </button>
        )}
      )}
    </div>
  )
}

export default App;
