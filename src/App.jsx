import { Navigate, Route, Routes } from "react-router-dom";

import { routes } from "./utils/routes";
import TVShows from "./pages/TVShows/TVShows";
import Details from "./pages/Details";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.tvShows} element={<TVShows />} />
        <Route path={routes.details} element={<Details />} />
        <Route path="*" element={<Navigate to={routes.home} replace />} />
      </Routes>
    </>
  );
}

export default App;
