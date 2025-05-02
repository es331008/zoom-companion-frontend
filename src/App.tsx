import "./App.css";
import {Navigate, Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import Layout from "./layouts/Layout.tsx";
import Meeting from "./pages/Meeting.tsx";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/meeting/:meetingPmi" element={<Meeting />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
    </Routes>
  );
}

export default App;
