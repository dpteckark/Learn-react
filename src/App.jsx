import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';

function App() {

  const [state, setState] = useState(3);
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const get = await fetch(`https://dummyjson.com/todos/random/${state}`)
      .then(res => res.json())
      setData(get);
      console.log(get);
    }
    getData();
  }, [state]);

  return (
    <>
      <button onClick={() => setState(state + 1)}>{state}</button>
    </>
  )
}

export default App
