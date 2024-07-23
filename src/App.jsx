import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(15)
  // let counter = 15
  const addValue = () => {
    if (count == 20){
      alert("Counter can't be more than 20")
      return;
    }
    // console.log("Clicked", count);
    setCount(count + 1);

  }
  const RemoveValue = () =>{
    // console.log("Clicked Remove", count);
    if (count != 0 ){
    setCount(count - 1)
    } else {
      alert("Counter can't be less than 0")
    }
  }


  return (
    <>
      <h1>Chai Aur React By Hitesh Sir! </h1>
      <h2>Counter value : {count} </h2>
      <button 
      onClick={addValue}
      >Add value</button>
      <br />
      <button onClick={RemoveValue}>Remove value</button>
    </>
  )
}

export default App
