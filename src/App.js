import React from "react";
import { Route, Routes } from "react-router-dom";
import Restore from "./components/Restore/Restore";
import Authorization from "./components/Authorization/Authorization";
import Registration from "./components/Registration/Registration";
import Main from "./pages/Main/Main";
import Battles from "./pages/Battles/Battles";
import News from "./pages/News/News";
import Chavo from "./pages/Chavo/Chavo";
import { Notfoundpage } from "./pages/Notfoundpage/Notfoundpage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="Registration/Restore" element={<Restore />} />
        <Route path="Authorization/Restore" element={<Restore />} />
        <Route path="Authorization" element={<Authorization />} />
        <Route path="Restore/Authorization" element={<Authorization />} />
        <Route path="Registration/Authorization" element={<Authorization />} />
        <Route 
          path="Registration/Restore/Authorization"
          element={<Authorization />}
        />
        <Route path="Registration" element={<Registration />} />
        <Route path="Authorization/Registration" element={<Registration />} />
        <Route path="/" element={<Main />} />
        <Route path="Battles" element={<Battles />} />
        <Route path="News" element={<News />} />
        <Route path="Chavo" element={<Chavo />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
