import React from "react";
import { Route, Routes } from "react-router-dom";
import Analyze from "../containers/analyze/index.tsx";
import Result from "../containers/result/index.tsx";
function AppRoutes() {
  return (
    <Routes>
      <Route index path="/" element={<Analyze />} />
      <Route index path="/:type" element={<Analyze />} />
      <Route path="/result" element={<Result />} />
      <Route path="/result/:type" element={<Result />} />
    </Routes>
  );
}
export default AppRoutes;
