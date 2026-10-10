import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import SearchableList from './components/SearchableList';



function Counter(){
    const [count, setCount] = useState(0); // for incrament

    return(
        <div>
            <h1> Count: {count}</h1>
            <button onClick={() => setCount(count-1)}>Decrease</button>
            <button onClick={() => setCount(count+1)}>Increase</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}


function App() {
  return(
    <div id = "parent">
      <Counter />
      <h2>Searchable list</h2>
      <SearchableList />
   
    
    </div>

    
  )
}
export default App
