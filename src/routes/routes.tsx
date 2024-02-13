import React from "react";
import Analyze from "../containers/analyze/index.tsx";
import Result from "../containers/result/index.tsx";
import SentimentDetails from "../containers/result/sentimentDetails.tsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
const AppRoutes = () => (
  <Router>
    <Route exact path="/analyze" component={Analyze} />
    <Route exact path="/result/:opt/:job_id" component={Result} />
    <Route
      exact
      path="/sentiment-detail/:opt/:job_id"
      component={SentimentDetails}
    />
    {/* <Route exact path="/result/:opt/:job_id" component={Result} /> */}
  </Router>
);
export default AppRoutes;
