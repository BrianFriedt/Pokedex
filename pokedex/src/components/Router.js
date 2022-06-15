import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "../App";
import Detail from "./Detail";
import Invalid from "./Invalid";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/pokemon" />} />
        <Route path="/pokemon" element={<App />} />
        <Route path="/pokemon/:page_id" element={<Detail />} />
        <Route path="*" element={<Invalid />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
