import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/vm" element={<Dashboard />} />
          <Route path="/storage" element={<Dashboard />} />
          <Route path="/monitoring" element={<Dashboard />} />
          <Route path="/network" element={<Dashboard />} />
          <Route path="/administrator" element={<Dashboard />} />
          <Route path="/api" element={<Dashboard />} />
          <Route path="/billing" element={<Dashboard />} />
          <Route path="/support" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
