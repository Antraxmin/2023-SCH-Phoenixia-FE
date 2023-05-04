import About from "./component/category/About";
import Booth from "./component/Booth/Booth";
import FoodTruck from "./component/category/FoodTruck";
import MapContent from "./component/Map/MapContent";
import TimeTable from "./component/category/TimeTable";
import MainContent from "./component/contents/main/MainContent";
import "./global.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainContent />} />
          <Route exact path="/map" element={<MapContent />} />
          <Route exact path="/foodtrucks" element={<FoodTruck />} />
          <Route exact path="/booth" element={<Booth />} />
          <Route exact path="/timetable" element={<TimeTable />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
