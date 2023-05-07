import { Navigate, Route, Routes } from "react-router-dom";

import { routes } from "./helpers/routes";
import TvShowsPage from "./pages/TvShowsPage";
import DetailsPage from "./pages/DetailsPage";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.tvShows} element={<TvShowsPage />} />
        <Route path={routes.details} element={<DetailsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
