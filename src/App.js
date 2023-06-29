import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Battles from "./pages/Battles/Battles";
import News from "./pages/News/News";
import Chavo from "./pages/Chavo/Chavo";
import Electronic from "./components/Electronic/Electronic";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import PrivateHome from "./pages/PrivateHome/PrivateHome";
import Withdrawal from "./pages/Withdrawal/Withdrawal";
import Filter from "./pages/Filter/Filter";
import Footer from "./components/Foot/Foot";
import Authorization from "./components/Auth/Auth";
import Header from "./components/Head/Head";
import Registration from "./components/Registr/Registr";
import Restore from "./components/Restor/Restor";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="Restore" element={<Restore />} />
        <Route path="Authorization" element={<Authorization />} />
        <Route path="Electronic" element={<Electronic />} />
        <Route path="Registration" element={<Registration />} />
        <Route path="/" element={<Main />} />
        <Route path="Battles/*" element={<Battles />} />
        <Route path="News/*" element={<News />} />
        <Route path="Chavo" element={<Chavo />} />
        <Route path="Filter/*" element={<Filter />} />
        <Route path="Withdrawal/*" element={<Withdrawal />} />
        <Route path="PrivateHome/*" element={<PrivateHome />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
