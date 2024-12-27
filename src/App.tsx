import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import routes from "./AppRoutes.json";
import Visualize from "./pages/Visualize/Visualize";
import Home from "./pages/Home/Home";
import Imagine from "./pages/Imagine/Imagine";
import SearchDataRing from "./pages/DataRing/SearchDataRing";
import DataRing from "./pages/DataRing/DataRing";
import Showcase from "./pages/Showcase/Showcase";
import Profile from "./pages/User/Profile";
import User from "./pages/User/User";
import SearchUser from "./pages/User/SearchUser";
import Help from "./pages/Help/Help";
import SearchHelp from "./pages/Help/SearchHelp";
import SearchShowcase from "./pages/Showcase/SearchShowcase";
import SearchIndex from "./pages/Index/SearchIndex";
import Index from "./pages/Index/Index";
import AccessDenied from "./pages/AccessDenied/AccessDenied";
import Settings from "./pages/Settings/Settings";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={routes.home.route} element={<Home />} />
        <Route path={routes.index.route} element={<SearchIndex />} />
        <Route path={routes.index.routeParameter} element={<Index />} />
        <Route path={routes.visualize.route} element={<Visualize />} />
        <Route path={routes.imagine.route} element={<Imagine />} />
        <Route path={routes.showcase.route} element={<SearchShowcase />} />
        <Route path={routes.showcase.routeParameter} element={<Showcase />} />
        <Route path={routes.dataRing.route} element={<SearchDataRing />} />
        <Route path={routes.dataRing.routeParameter} element={<DataRing />} />
        <Route path={routes.profile.route} element={<Profile />} />
        <Route path={routes.user.route} element={<SearchUser />} />
        <Route path={routes.user.routeParameter} element={<User />} />
        <Route path={routes.help.route} element={<SearchHelp />} />
        <Route path={routes.help.routeParameter} element={<Help />} />
        <Route path={routes.accessDenied.route} element={<AccessDenied />} />
        <Route path={routes.settings.route} element={<Settings />} />
      </Routes>
    </div>
  );
}
