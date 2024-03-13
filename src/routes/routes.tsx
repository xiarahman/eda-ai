import React, { Component } from "react";
import Analyze from "../containers/analyze/index.tsx";
import Result from "../containers/result/index.tsx";
import SentimentDetails from "../containers/result/sentimentDetails.tsx";
import Home from "../components/home/index.tsx";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import InputForm from "../containers/analyze/text/components/input.tsx";
import AnalysisResult from "../containers/result/text.tsx";
import Header from "../components/header/index.tsx";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/footer/index.tsx";
import { selectorAnalyzeText } from "../redux/Selectors/index.ts";
const AppRoutes = () => {
  
  return(
    <Router>
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/analyze" component={Analyze} />
    <Route exact path="/result/:opt/:job_id" component={Result} />
    <Route
      exact
      path="/sentiment-detail/:opt/:job_id"
      component={SentimentDetails}
    />
    <Route path="/text" component={InputForm} />
    
    <Route path="/text-result" component={AnalysisResult} >
  
       </Route>

    <Footer />
  </Router>
  )
 
};

export default AppRoutes;
