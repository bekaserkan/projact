import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Notfoundpage } from './pages/notfoundpage/notfoundpage';
import Header from './components/header/header';
import Battles from './pages/battles/battles';
import Footer from './components/footer/footer';
import Main from './pages/main/main';
import News from './pages/news/news';
import Chavo from './pages/chavo/chavo';
import Registration from './components/registration/registration';
import Authorization from './components/authorization/authorization';
import Restore from './components/restore/restore';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='Registration/Restore' element={ <Restore/> } />
        <Route path='Authorization' element={ <Authorization /> } />
        <Route path='Registration/Authorization' element={ <Authorization /> } />
        <Route path='Registration' element={ <Registration /> } />
        <Route path='/' element={ <Main/> } />
        <Route path='/Battles' element={ <Battles/> } />
        <Route path='News' element={ <News/> } />
        <Route path='Chavo' element={ <Chavo/> } />
        <Route path='*' element={ <Notfoundpage/> } />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
