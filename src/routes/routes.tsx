import React from "react";
import Analyze from "../containers/analyze/index.tsx";
import Result from "../containers/result/index.tsx";
// import LiveResult from "../containers/result/live.tsx";
import UploadResult from "../containers/result/upload.tsx";
// import TextResult from "../containers/result/text.tsx";
import SentimentDetails from "../containers/result/sentimentDetails.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputForm from "../containers/analyze/text/components/input.tsx";
import AnalysisResult from "../containers/result/text.tsx";
import Home from "../components/home/index.tsx"
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route  path="/text" element={<InputForm/>} />
         <Route  path="/text-result" element={<AnalysisResult/>} />
         <Route  path="/home" element={<Home/>} />

      </Routes>
        
      {/* <Route exact path="/:type" component={Analyze} />
   
      <Route exact path="/upload-result" component={UploadResult} />
      <Route exact path="/result/:type" component={Result} />
      <Route exact path="/sentiment-detail" component={SentimentDetails} /> */}
    </Router>
  );
};
export default AppRoutes;
