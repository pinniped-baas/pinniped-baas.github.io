import { useEffect } from "react";

import styled from "styled-components";
import GlobalStyles from "./assets/styles/global.js";

import Header from "./components/Header.jsx";

import Home from "./components/pages/Home.jsx";
import CaseStudy from "./components/pages/CaseStudy.jsx";
import Team from "./components/pages/Team.jsx";
import Footer from "./components/Footer.jsx";

import { Router, Route, Switch, useLocation } from "wouter";

import ErrorBoundary from "./components/ErrorBoundary.jsx";

function App() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ErrorBoundary>
        <Wrapper>
          <Header />
          <ContentWrapper>
            <Router>
              <Switch>
                <Route path="/">
                  <Home />
                </Route>
                <Route path="/case-study">
                  <CaseStudy />
                </Route>
                <Route path="/team">
                  <Team />
                </Route>
                <Route path="/*">
                  <div>
                    There is no content located at this page. Please return to
                    the home page via the logo in the header above.
                  </div>
                </Route>
              </Switch>
            </Router>
          </ContentWrapper>
          <Footer />
          <GlobalStyles />
        </Wrapper>
      </ErrorBoundary>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (max-width: 1300px) {
    padding: 0 50px;
  }
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
`;

export default App;
