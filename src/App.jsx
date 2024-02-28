import { useState } from 'react'
import './App.css'
import BoxObject from './components/BoxForm';
import DisplayBox from './components/DisplayBox';

function App() {
  const [ boxes, setBoxes] = useState([]);

  return (
    <>
      <BoxObject boxes={boxes} setBoxes={setBoxes} />
      <DisplayBox  boxes={boxes}/>
    </>
  )
}

export default App;
