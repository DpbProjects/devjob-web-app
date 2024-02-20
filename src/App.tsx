import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// pages
import Layout from "./components/layout/Layout";
import IndexPage from "./pages/index";
import JobsDetailsPage from "./pages/jobs-details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/" element={<IndexPage />} />
          <Route path="/job-detail/:id" element={<JobsDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
