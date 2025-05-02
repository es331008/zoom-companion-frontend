import "./App.css";
import {Navigate, Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import Layout from "./layouts/Layout.tsx";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
