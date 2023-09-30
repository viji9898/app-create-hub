import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NotFound } from "./utils/notFound";
import { ScrollToTop } from "./utils/scrollToTop";
import { NavBar } from "./components/navigation/navBar";
import { LandingPage } from "./pages/LandingPage";
import { Details } from "./components/techTalent/details";
import { DetailsMission } from "./components/mission/detailsMission";
import { Resources } from "./pages/Resources";
import { Hosting } from "./components/resources/hosting";
import { AppDevelopment } from "./components/resources/appDevelopment";
import { Stages } from "./components/landingPage/stages";

function App() {
  const [helloWorld, setHelloWorld] = useState("");

  const getHelloWorld = () => {
    axios
      .get(".netlify/functions/getHelloWorld", {
        baseURL: "/",
      })
      .then(function (response) {
        setHelloWorld(response.data.data);
      });
  };
  useEffect(() => {
    getHelloWorld();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={<LandingPage helloWorld={helloWorld} />}
        />
        <Route exact path="/resources" element={<Resources />}>
          <Route path="app-development" element={<AppDevelopment />} />
          <Route path="hosting" element={<Hosting />} />
        </Route>
        <Route path="/stages" element={<Stages />} />
        <Route exact path="/tech-talent" element={<Details />} />
        <Route exact path="/mission" element={<DetailsMission />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
