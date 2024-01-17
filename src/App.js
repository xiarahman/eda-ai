import React from "react";
import styled from "styled-components";
import Footer from "./components/footer/index.tsx";
import Header from "./components/header/index.tsx";
import AppRoutes from "./routes/routes.tsx";
import Analyze from "./containers/analyze/index.tsx";
import Text from "./containers/analyze/text/index.tsx";
import Webcam from "./containers/analyze/webcam/index.tsx";
import Upload from "./containers/analyze/upload/index.tsx";
import LiveResult from "./containers/result/live.tsx";
import TextResult from "./containers/result/text.tsx";
import UploadResult from "./containers/result/upload.tsx";
import ProgressBar from "./containers/result/components/progressbar.tsx";
import Emotions from "./containers/result/components/emotion.tsx";
import Sentiments from "./containers/result/components/sentiment.tsx";
import { Flex } from "antd";
import SentenceCard from "./containers/result/components/sentenceCard.tsx";
import SentimentDetails from "./containers/result/sentimentDetails.tsx";
const AppContainer = styled.div``;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <AppRoutes />
      {/* <UploadResult /> */}
      {/* <LiveResult /> */}
      {/* <SentimentDetails /> */}
      {/* <TextResult /> */}
      <Footer />
    </AppContainer>
  );
};

export default App;
