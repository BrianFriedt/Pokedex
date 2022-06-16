import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "../App";
import Detail from "./Detail";
import Invalid from "./Invalid";
import Page from "./Page";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Navigate replace to={"/pokemon/"} />}></Route>
          <Route path="/pokemon/" element={<App />} />
          <Route path="/pokemon/:page_id" element={<Detail />} />
        </Route>
        <Route path="*" element={<Invalid />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
