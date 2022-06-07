import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Detail from "./Detail";
import Test from "./Test";

const Router = () => {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pokemon" element={<App />} />
      <Route path="/pokemon/:page_id" element={<Detail />} />
      <Route element={<Test />} />
    </Routes>
  </BrowserRouter>);
}

export default Router;
