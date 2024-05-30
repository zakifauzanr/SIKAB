import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/molecul/Headers'
import Home from './page/Home'
import Footers from './component/molecul/Footers'
import Katalog from './page/Katalog'
import Peta from './page/Peta'
import Berita from './page/Berita'
import Detail_Galeri from './page/detail/Detail_Galeri'
import Detail_Peta from './page/detail/Detail_Peta'
import Detail_Berita from './page/detail/Detail_Berita'

function App() {

  return (
    <div>
      <Header/>
      <div className='pt-20 mx-16'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/katalog' element={<Katalog/>}/>
          <Route exact path='/peta' element={<Peta/>}/>
          <Route exact path='/berita' element={<Berita/>}/>
          <Route path='/galeri/:id' element={<Detail_Galeri/>}/>
          <Route path='/peta/detail/:id' element={<Detail_Peta/>}/>
          <Route path='/berita/detail/:id' element={<Detail_Berita/>}/>
        </Routes>
      </div>
      <Footers/>
    </div>
  )
}

export default App
