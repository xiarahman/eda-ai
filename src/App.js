import React from "react";
import styled from "styled-components";
import Footer from "./components/footer/index.tsx";
import Header from "./components/header/index.tsx";
import AppRoutes from "./routes/routes.tsx";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { reducer } from "./redux/Slice/index.ts";
import saga from "./redux/Saga/index.ts";
const AppContainer = styled.div``;

const App = () => {
  useInjectSaga({ key: "video", saga });
  useInjectReducer({ key: "video", reducer: reducer });
  return (
    <AppContainer>
      <Header />
      <AppRoutes />
      {/* <Footer /> */}
    </AppContainer>
  );
};

export default App;
