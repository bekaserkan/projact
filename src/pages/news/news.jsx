import React from "react";
import "./News.css";
import Tidings from "../../components/Tidings/Tidings";
import { Route, Routes } from "react-router-dom";
import Champions from "../../components/Сhampions/Champions";
import { useState } from "react";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

function News() {
  const [selectedBackend, setSelectedBackend] = useState(null);
  const [page, setPage] = useState(1);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://647ce174c0bae2880ad14bc3.mockapi.io/play_join?page=${page}&limit=4`
    )
      .then((res) => res.json())
      .then((json) => {
        setNews(json);
      })
      .catch((err) => {
        alert("Ошибка при получении данных");
      })
      .finally(() => setIsLoading(false));
  }, [page]);

  const handleItemClick = (backend) => {
    setSelectedBackend(backend);
  };

  return (
    <div className="news">
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Tidings
                page={page}
                setPage={setPage}
                isLoading={isLoading}
                backends={news}
                onItemClick={handleItemClick}
              />
            }
          />
          <Route
            path="Champions"
            element={
              selectedBackend && (
                <Champions
                  backend={selectedBackend}
                  isLoading={isLoading}
                  backends={news}
                  onItemClick={handleItemClick}
                />
              )
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default News;
