import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Registrations from './pages/registrations';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={ <Main/> } />
        <Route path='Registrations' element={ <Registrations/> } />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
