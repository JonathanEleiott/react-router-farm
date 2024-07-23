import { Routes, Route } from 'react-router-dom';
import FarmAnimal from './FarmAnimal.jsx';
import NavBar from './NavBar.jsx';

const App = () => {

  return (
    <>
      <NavBar />
      <h1>Farm Animals</h1>

      <Routes>
        <Route path='/' element={<h2>Home</h2>} />
        <Route path='/farm' element={<FarmAnimal />} />
        {/* <Route path='/farm/bunny' element={<FarmAnimal animal="bunny" />} />
        <Route path='/farm/elephant' element={<FarmAnimal animal="elephant" />} /> */}
        <Route path='/farm/:animal' element={<FarmAnimal />} />
        <Route path='/farm/:animal/:name' element={<FarmAnimal />} />
      </Routes>
    </>
  )
}

export default App
