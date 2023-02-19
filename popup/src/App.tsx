import "./index.scss";
import React from "react";
import Home from "./views/home";
import List from "./views/list";
import Details from "./views/details";
import Error from "./views/error";
import useRouter from "./hooks/useRouter";
import { GandalfProvider } from "./context/gandalf.context";
import { Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [location, navigator] = useRouter("/popup/dist");

  return (
    <Router basename="/popup/dist" location={location} navigator={navigator}>
      <GandalfProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/competencies" element={<List />} />
            <Route path="/details/:code" element={<Details />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </div>
      </GandalfProvider>
    </Router>
  );
};

export default App;
