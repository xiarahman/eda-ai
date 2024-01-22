import React from "react";
import { Route, Routes } from "react-router-dom";
import Analyze from "../containers/analyze/index.tsx";
import Result from "../containers/result/index.tsx";
import LiveResult from "../containers/result/live.tsx";
import UploadResult from "../containers/result/upload.tsx";
import TextResult from "../containers/result/text.tsx";
import SentimentDetails from "../containers/result/sentimentDetails.tsx";
const AppRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<Analyze />} />
      <Route index path="/:type" element={<Analyze />} />
      <Route path="/result" element={<Result />} />
      <Route path="/result/:type" element={<Result />} />
      <Route path="/live-result" element={<LiveResult />} />
      <Route path="/upload-result" element={<UploadResult />} />
      <Route path="/text-result" element={<TextResult />} />
      <Route path="/sentiment-detail" element={<SentimentDetails />} />
    </Routes>
  );
};
export default AppRoutes;
