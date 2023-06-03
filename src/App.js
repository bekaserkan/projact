import { Route, Routes } from 'react-router-dom';
import './App.css';
import Registrations from './pages/registrations/registrations';
import { Notfoundpage } from './pages/notfoundpage/notfoundpage';
import { Layout } from './components/UI/layout/layout';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={ <Layout/> } />
        <Route path='Registrations' element={ <Registrations/> } />
        <Route path='*' element={ <Notfoundpage/> } />
      </Routes>
    </div>
  )
}

export default App;
