import { useState } from 'react'
import Quiz from './component/Quiz'
import { data } from './assets/data'
import Welcome from './component/Welcome'


function App() {

  const [category, setCategory] = useState(null)

  return (
    <>
      <div>
        {category ? (<Quiz questions={data[category]} setCategory={setCategory} />) : (
          <Welcome setCategory={setCategory} />
        )}
      </div>
    </>
  )
}

export default App
