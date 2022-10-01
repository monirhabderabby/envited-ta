import { Route, Routes } from "react-router-dom";
import "./App.css";
import Event from "./pages/Envited__Event/Event";
import EventCreate from "./pages/EventCreate/EventCreate";
import Home from "./pages/Home/Home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<EventCreate />} />
            <Route path="/event" element={<Event />} />
        </Routes>
    );
}

export default App;
