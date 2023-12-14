import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPages, HeroPage, MarvelPage, SearchPage } from "..";

const HeroesRoute = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPages />} />
          <Route path="search" element={<SearchPage/>}/>
          <Route path="hero/:id" element={<HeroPage/>} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};

export default HeroesRoute;
