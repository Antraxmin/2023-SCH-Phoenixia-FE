import About from "./component/about/About";
import Booth from "./component/Booth/Booth";
import FoodTruck from "./component/FoodTruck/FoodTruck";
import MapContent from "./component/Map/MapContent";
import TimeTable from "./component/timetable/TimeTable";
import MainContent from "./component/main/MainContent";
import "./global.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainContent />} />
          <Route exact path="/map" element={<MapContent />} />
          <Route exact path="/foodtruck" element={<FoodTruck />} />
          <Route exact path="/booth" element={<Booth />} />
          <Route exact path="/timetable" element={<TimeTable />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
