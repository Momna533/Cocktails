import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './app/Home/Home'
import About from './app/About/About'
import SingleCocktail from './app/SingleCocktail/SingleCocktail'
import Error from './app/Error/Error'
import Navbar from './components/Navbar/Navbar'
function App() {
  const HomeComponent = ()=>{
    return (
      <>
      <Navbar/>
      <Home/>
      </>
    )
  }
  const AboutComponent = ()=>{
    return (
      <>
      <Navbar/>
      <About/>
      </>
    )
  }
  return (
    <>
      <Routes>
      <Route path='/' element={<HomeComponent />} />
      <Route path='/about' element={<AboutComponent />} />
      <Route path='/cocktail/:id' element={<SingleCocktail />} />
      <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
