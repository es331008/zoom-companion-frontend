import "./App.css";
import {Navigate, Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import Companion from "./pages/Companion.tsx";

function App() {
  return (
    <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/companion/:meetingId"} element={<Companion />} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
