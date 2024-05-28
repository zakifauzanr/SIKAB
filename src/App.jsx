import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/molecul/Headers'
import Home from './page/Home'

function App() {

  return (
    <div>
      <Header/>
      <div className='pt-20'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
