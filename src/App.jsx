import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import ReportTraffic from "./pages/ReportTraffic";
import MyReports from "./pages/MyReports";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/events"
          element={<Events />}
        />

        <Route
          path="/event-details"
          element={<EventDetails />}
        />

        <Route
          path="/report"
          element={<ReportTraffic />}
        />

        <Route
          path="/reports"
          element={<MyReports />}
        />

        <Route
          path="/search"
          element={<Search />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;