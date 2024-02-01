import React from "react";
import { Route, Routes } from "react-router-dom";
import Analyze from "../containers/analyze/index.tsx";
import Result from "../containers/result/index.tsx";
import { HolderOutlined } from "@ant-design/icons";
import Home from '../components/home/index.tsx'
function AppRoutes() {
  return (
    <Routes>
      {/* <Route index path="/" element={<Analyze />} />
      <Route index path="/:type" element={<Analyze />} />
      <Route path="/result" element={<Result />} />
      <Route path="/result/:type" element={<Result />} /> */}
      <Route path ="/home" element ={Home}/>
    </Routes>
  );
};
export default AppRoutes;
