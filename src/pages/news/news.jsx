import React, { useEffect } from "react";
import "./News.css";
import Tidings from "../../components/Tidings/Tidings";
import { Route, Routes } from "react-router-dom";
import Champions from "../../components/Сhampions/Champions";
import { useState } from "react";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, setNewsPage } from "../../store/actions/newsAction";

function News() {
  const dispatch = useDispatch();
  const { error, news, loading, page } = useSelector((state) => state.news);
  const [selectedBackend, setSelectedBackend] = useState(null);
  const pages = [1, 2, 3];

  useEffect(() => {
    dispatch(fetchNews(page));
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
                pages={pages}
                error={error}
                dispatch={dispatch}
                setPage={setNewsPage}
                isLoading={loading}
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
                  error={error}
                  isLoading={loading}
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
