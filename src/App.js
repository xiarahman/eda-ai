import React from "react";
import styled from "styled-components";
import Footer from "./components/footer/index.tsx";
import Header from "./components/header/index.tsx";
import AppRoutes from "./routes/routes.tsx";
const AppContainer = styled.div``;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <AppRoutes />
      {/* <Footer /> */}
    </AppContainer>
  );
};

export default App;
