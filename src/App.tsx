import { Routes, Route } from "react-router-dom";
import Layouts from "./LayOuts/Layouts";
import "../src/index.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route
            path="/stations/:stationId/bookings/:booking_id"
            element={<h1>booking details</h1>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
