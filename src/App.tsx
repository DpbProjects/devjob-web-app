import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import IndexPage from "./pages/index";
import JobsDetailsPage from "./pages/jobs-details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/job-detail" element={<JobsDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
